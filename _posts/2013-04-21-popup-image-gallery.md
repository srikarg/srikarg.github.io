---
title: Popup Image Gallery using jQuery
layout: post
share: true
comments: true
---

A simple search for `jquery image galleries` on Google will bring you to several projects created by different people! However, creating your own gallery can sometimes be more efficient. For example, making your own gallery can save your website extra loading time!

# Procedure

Let's get started! We'll first need some basic markup in HTML for our images and the box that will hold the current and selected image.

{% highlight html %}
<div class="images">
    <img src="http://placebox.es/300/300/f1f1f1/222/Image 1,25" />
    <img src="http://placebox.es/300/300/f1f1f1/222/Image 2,25" />
    <img src="http://placebox.es/300/300/f1f1f1/222/Image 3,25" />
    <img src="http://placebox.es/300/300/f1f1f1/222/Image 4,25" />
    <img src="http://placebox.es/300/300/f1f1f1/222/Image 5,25" />
    <img src="http://placebox.es/300/300/f1f1f1/222/Image 6,25" />
    <img src="http://placebox.es/300/300/f1f1f1/222/Image 7,25" />
    <img src="http://placebox.es/300/300/f1f1f1/222/Image 8,25" />
    <img src="http://placebox.es/300/300/f1f1f1/222/Image 9,25" />
    <img src="http://placebox.es/300/300/f1f1f1/222/Image 10,25" />
</div>

<div class="focus">
    <span class="close">&#10005;</span>
</div>
{% endhighlight %}

In the code above, `div.images` holds the images and `div.focus` holds the enlarged and focused image. The `span.close` contains a Unicode entity for the multiplication symbol, which we will use for a close button.

Next, we'll style the elements we just created using the following CSS.

{% highlight css %}
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
}

body {
    background: #222;
}

.images {
    position: absolute;
    width: 640px;
    left: 50%;
    top: 50%;
    margin-top: -128px;
    margin-left: -320px;
}

.images img {
    cursor: pointer;
    float: left;
    padding: 3px;
    width: 128px;
    height: auto;
}

.focus {
    position: absolute;
    width: 300px;
    height: 300px;
    top: 50%;
    left: 50%;
    margin-left: -150px;
    margin-top: -150px;
    display: none;
    z-index: 10;
}

.focus .close {
    position: absolute;
    top: -2%;
    left: 0;
    font-size: 30px;
    cursor: pointer;
    color: #F50000;
}

.overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.3);
}

.darken {
    opacity: 0.3;
}
{% endhighlight %}

The `div.images` is absolutely positioned in the middle of the page. The `div.focus` is also absolutely positioned in the middle above the `div.images` due to the `z-index: 10;` line. Next, there are two helper classes, `.overlay` and `.darken`, which will help us in our jQuery code.

Next, we add  functionality of the image gallery using jQuery.

{% highlight javascript %}
$(function() {
    var image = $('.images>img');
    var box = $('.focus');
    var close = $('.focus .close');
    var images = $('.images');
    
    image.on('click', function() {
        var $this = $(this);
        var src = $this.attr('src');
        box.find('img').remove();
        box.append('<img src=\"' + src + '\" />');
        box.fadeIn();
        images.addClass('darken');
        images.append('<div class="overlay">');
    });
    close.on('click', function() {
        box.css('display', 'none');
        images.removeClass('darken');
        $('.overlay').remove();
    });
});
{% endhighlight %}

First, we are caching the elements of our gallery inside `image`, `box`, `close`, and `images`. Next, we set up a click handler for all the images inside `div.images`. On click, jQuery will find any existing images inside `div.focus`, remove them, and then insert the image that was clicked into the `div`. Next, it will fade in `div.focus`, darken the images behind the selected one, and make the unselected ones disabled. Finally, the close click handler hides `div.focus` and removes the `.overlay` and `.darken` elements.

# Closing

And there we have it! A simple image gallery! Check it out below and don't hesitate to tinker with it! Next time you decide to include an image gallery inside your website, be sure to think about whether you need a massive jQuery plugin or not.
<pre class="codepen" data-height="500" data-type="result" data-href="qGzbn" data-user="srig99" data-safe="true"> <code> </code> <a href="http://codepen.io/srig99/pen/qGzbn">Check out this Pen!</a> </pre>
<script src="http://codepen.io/assets/embed/ei.js"> </script>