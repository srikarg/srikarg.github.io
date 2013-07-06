$(function () {
    var width = 480;
    var height = 600;
    var timer = 30; // The length of the game. Must be in seconds.
    var lives = 2; // For player lives.
    $('.lives').text("Lives: " + lives); // Sets up the lives div on the page.
    $(".timer").text("Timer: " + timer);
    var canvasBackground = "#222";
    var wallColor = "#ccc";
    var audioOn = true;
    var interval;

    Crafty.init(width, height);
    Crafty.canvas.init();
    Crafty.background(canvasBackground);

    Crafty.scene("loading", function () {
        Crafty.load(["sounds/music.wav", "sounds/explosion.wav", "sounds/coin.wav", "sounds/heart.wav", "images/bomb.png", "images/coin.png", "images/heart.png", "images/playerLeft.png", "images/playerRight.png"], function () {
            Crafty.audio.add("theme", ["sounds/music.wav"]);
            Crafty.audio.add("explosion", ["sounds/explosion.wav"]);
            Crafty.audio.add("coin", ["sounds/coin.wav"]);
            Crafty.audio.add("heart", ["sounds/heart.wav"]);
            if (audioOn) Crafty.audio.play("theme", -1);
            Crafty.scene("instructions");
        });

        Crafty.e("2D, DOM, Text").attr({
            x: width / 2 - 50,
            y: height / 2 - 10,
            w: 100,
            h: 20
        }).text("Loading...").css("text-align", "center");
    });

    Crafty.scene("instructions", function () {
        Crafty.e("2D, HTML").attr({
            x: 0,
            y: 0,
            w: width,
            h: height
        }).replace("<style>li {padding: 5px;} li img {width: 16px;} .close{display: block; margin: 0 auto;}</style><h3>Instructions</h3><ol><li>Move up: <kbd>&uarr;</kbd> or <kbd>W</kbd>.</li><li>Move right: <kbd>&rarr;</kbd> or <kbd>D</kbd>.</li><li>Move left: <kbd>&larr;</kbd> or <kbd>A</kbd>.</li><li>Collect the coins to gain points! <img src=\"images\/coin.png\" /></li><li>Let the coins fall to lose points!</li><li>Hit bombs and lose a life! <img src=\"images/bomb.png\" /></li><li>Collect the heart icon to gain one life! <img src=\"images/heart.png\" /></li><li>The time left is shown above along with your coin score and lives.</li><li>Press <kbd>P</kbd> to pause!</li></ol><button class=\"close\">Play!</button>");

        $(".close").on("click", function () {
            Crafty.scene("game");
        });
    });

    $('.stop').on('click', function () {
        if (audioOn) {
            Crafty.audio.stop();
            $(this).text("Turn On Music.");
            audioOn = false;
        } else {
            Crafty.audio.play("theme", -1);
            $(this).text("Turn Off Music.");
            audioOn = true;
        }
    });

    $('.instructions').on('click', function () {
        clearInterval(interval);
        Crafty.scene("instructions");
    });

    Crafty.scene("game", function () {
        var canvas = $('canvas'); // For referencing the canvas element easily.
        var counter = 0; // For the number of coins the player collected.
        var coinSpeed = 6; // For setting the coin's speed.
        var bombSpeed = 6; // For setting the bomb's speed.
        var coins = 1; // Number of coins in game.
        var bombs = 5; // Number of bombs in game.
        var hearts = 1;
        var powerUpSpeed = 12; // The speed of the powerups.
        var playerSpeed = 8; // For setting the player's walk speed.
        var playerJumpSpeed = 5; // For setting the player's jump speed.
        if (audioOn) $('.stop').text("Turn Off Music.");
        else $('.stop').text("Turn On Music.");

        interval = setInterval(function () {
            timer--;
            $(".timer").text("Timer: " + timer);
            if (timer === 0) endGame();
        }, 1000);

        Crafty.bind('KeyDown', function(e) {
            if (e.key == Crafty.keys['P']) {
                if (interval)
                    clearInterval(interval);
                Crafty.pause();
            }
        });

        function endGame() {
            clearInterval(interval);
            Crafty.audio.stop();
            Crafty.stop(true);
            $('.buttons, .timer, .lives').hide();
            $('.counter').css('font-size', '50px');
            alert("Your time is up!");
            var answer = confirm("Play again?");
            if (answer) document.location.reload(true);
        }

        function randomX() {
            return Math.random() * ((width - 42) - 10) + 10;
        }

        Crafty.c("Player", {
            init: function () {
                this.image("images/playerRight.png");

                this.bind("EnterFrame", function () {
                    if (lives === 0) {
                        Crafty.audio.stop();
                        Crafty.stop(true);
                        clearInterval(interval);
                        $('.buttons, .timer, .lives').hide();
                        $('.counter').css('font-size', '50px');
                        alert("You died from taking too many hits!");
                        var answer = confirm("Play again?");
                        if (answer) document.location.reload(true);
                    }
                });
            }
        });

        Crafty.c("FallingObject", {
            _speed: 0,

            init: function () {
                this.checkSpacing();

                this.bind("EnterFrame", function () {
                    this.y += this._speed;
                });
            },

            speed: function (number) {
                this._speed = number;
            },

            reset: function () {
                this.x = randomX();
                this.y = -18;
                this.checkSpacing();
            },

            checkSpacing: function () {
                var current = this;
                while (current.hit("FallingObject")) {
                    current.x = randomX();
                }
            }
        });

        Crafty.c("Coin", {
            init: function () {
                this.image("images/coin.png");

                this.onHit("Player", function () {
                    this.gain();
                    this.reset();
                });

                this.onHit("Floor", function () {
                    this.lose();
                    this.reset();
                });

                this.speed(coinSpeed);
            },

            gain: function () {
                if (audioOn) Crafty.audio.play("coin", 1, 1);
                counter++;
                $('div.counter').text("Coin Counter: " + counter);
            },

            lose: function () {
                if (counter > 0) counter--;
                $('div.counter').text("Coin Counter: " + counter);
            }
        });

        Crafty.c("Bomb", {
            init: function () {
                this.image("images/bomb.png");

                this.onHit("Player", function () {
                    this.explode();
                    this.reset();
                });

                this.onHit("Floor", function () {
                    this.reset();
                });

                this.speed(bombSpeed);
            },

            explode: function () {
                if (audioOn) Crafty.audio.play("explosion", 1, 1);
                if (lives > 0) {
                    lives--;
                    $('div.lives').text("Lives: " + lives);
                }
            }
        });

        Crafty.c("Heart", {
            init: function () {
                this.image("images/heart.png");

                this.onHit("Player", function () {
                    if (audioOn) Crafty.audio.play("heart", 1, 0.5);
                    this.addLife();
                    this.reset();
                });

                this.onHit("Floor", function () {
                    this.reset();
                });

                this.speed(powerUpSpeed);
            },

            addLife: function () {
                lives++;
                $('.lives').text("Lives: " + lives);
            }
        });

        var player = Crafty.e("2D, Canvas, Collision, DOM, Image, Player, Gravity, Twoway").attr({
            w: 32,
            h: 32,
            x: canvas.width() / 2,
            y: canvas.height() - 10
        });

        for (var i = 0; i < coins; i++) {
            Crafty.e("2D, Canvas, Collision, DOM, FallingObject, Image, Coin").attr({
                w: 32,
                h: 32,
                x: randomX(),
                y: -18
            }).checkSpacing();
        }

        for (var i = 0; i < bombs; i++) {
            Crafty.e("2D, Canvas, Collision, DOM, FallingObject, Image, Bomb").attr({
                w: 32,
                h: 32,
                x: randomX(),
                y: -18
            }).checkSpacing();
        }

        for (var i = 0; i < hearts; i++) {
            Crafty.e("2D, Canvas, Collision, DOM, FallingObject, Image, Heart").attr({
                w: 32,
                h: 32,
                x: randomX(),
                y: -18
            }).checkSpacing();
        }

        var floor = Crafty.e("2D, Canvas, Color, Collision, Floor, DOM").color(wallColor).attr({
            w: canvas.width(),
            h: 10,
            x: 0,
            y: canvas.height() - 10
        });

        var ceiling = Crafty.e("2D, Canvas, Color, DOM").color(wallColor).attr({
            w: canvas.width(),
            h: 10,
            x: 0,
            y: 0
        });

        var leftWall = Crafty.e("2D, Canvas, Color, Collision, Wall").color(wallColor).attr({
            w: 10,
            h: canvas.height(),
            x: 0,
            y: 0
        });

        var rightWall = Crafty.e("2D, Canvas, Color, Collision, Wall").color(wallColor).attr({
            w: 10,
            h: canvas.height(),
            x: canvas.width() - 10,
            y: 0
        });

        player.twoway(playerSpeed, playerJumpSpeed);
        player.gravity("Floor");
        player.bind("Moved", function (from) {
            if (this.hit("Wall")) this.attr({
                x: from.x,
                y: from.y
            });
        });
        player.bind('KeyDown', function (e) {
            if (e.key == Crafty.keys['LEFT_ARROW'] || e.key == Crafty.keys['A']) player.image("images/playerLeft.png");
            else if (e.key == Crafty.keys['RIGHT_ARROW'] || e.key == Crafty.keys['D']) player.image("images/playerRight.png");
        });
    });

    Crafty.scene("loading");
});