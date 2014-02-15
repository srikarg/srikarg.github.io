---
title: Implementing an offcanvas menu with jQuery
layout: post
toc: true
share: true
comments: true
---

Lately, the offcanvas menu pattern has been extremely popular in various websites and apps. For example, Facebook and Gmail make use of it in their mobile apps. Creating an offcanvas menu for your own site is relatively simple, so let's see how!

# The HTML

First, we'll set up the navigation and main content components using some simple HTML. Please note that I am using the Actor font from Google Fonts and Font Awesome (these two are present in the link tags).

```html
<link href='http://fonts.googleapis.com/css?family=Actor' rel='stylesheet' type='text/css'>
<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.min.css" rel="stylesheet">

<nav class="main-nav" role='navigation'>
  <ul>
    <li><a href="#">Home<i class="icon-home"></i></a></li>
    <li><a href="#">About Me<i class="icon-info"></i></a></li>
    <li><a href="#">My Work<i class="icon-briefcase"></i></a></li>
    <li><a href="#">Contact Me<i class="icon-phone"></i></a></li>
  </ul>
</nav>

<article>
  <a href="#" class="nav-control">&rarr;</a>
  <header>
    <h1 class="title">Lorem Ipsum</h1>
    <p class="author">By Sit Atem.</p>
  </header>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, reiciendis.</p>
</article>
```

The HTML is pretty self-explanatory, although there is one thing to note: `&raar;` is a right arrow HTML entity, which we are going to use for expanding and closing the offcanvas menu.

# The CSS

The next section is the CSS. Note the `.js` class. This is used to show the menu by default if the user does not have JavaScript enabled. The navigation is fixed and takes up 20% of the browser width with the content taking up the other 80%.

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Actor', sans-serif;
  color: #222;
}

.js .main-nav {
  transition: width 0.6s ease;
  width: 0;
}

.main-nav {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 20%;
  height: 100%;
  background: #222;
}

.main-nav ul {
  list-style: none;
}

.main-nav a {
  font-size: 1.2em;
  padding: 0.625em;
  text-decoration: none;
  display: block;
  color: white;
}

.main-nav i {
  margin-left: 0.5em;
}

.js article {
  transition: width 0.6s ease;
  width: 100%;
}

article {
  padding: 1.25em;
  height: 100%;
  width: 80%;
  float: right;
}

.js .nav-control {
  display: inline-block;
}

.nav-control {
  display: none;
  text-decoration: none;
  color: #222;
  font-size: 3em;
}

article header {
  margin-bottom: 2em;
}

article .title {
  margin: 0 0 0.2em 0;
}

article .author {
  margin-bottom: 0;
}

article p {
  margin-bottom: 1em;
}

article p:last-child {
  margin-bottom: 0;
}

article.menu-open {
  width: 80%;
}

.main-nav.menu-open {
  width: 20%;
}
```

# The jQuery

Finally, the jQuery is needed to make the menu toggle button functional. Additionally, it adds a `.js` class to the `body` tag indicating that the user has JavaScript enabled. The button click handler simply adds/removes classes and changes the arrow inside the button as required.

```javascript
$(function() {
  $('body').addClass('js');
  var navButton = $('.nav-control');
  var nav = $('.main-nav');
  var article = $('article');

  navButton.on('click', function() {
    if (nav.hasClass('menu-open')) {
      nav.removeClass('menu-open');
      article.removeClass('menu-open');
      navButton.html('&rarr;');
    }
    else {
      nav.addClass('menu-open');
      article.addClass('menu-open');
      navButton.html('&larr;');
    }
  });
});
```

# Demonstration

You can fork the demo on CodePen and view it below!

<div class="codepen"><p data-height="500" data-theme-id="132" data-slug-hash="xwpAv" data-user="srig99" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/srig99/pen/xwpAv'>Offcanvas Sidebar Concept</a> by Srikar G. (<a href='http://codepen.io/srig99'>@srig99</a>) on <a href='http://codepen.io'>CodePen</a></p><script src="http://codepen.io/assets/embed/ei.js"></script></div>
