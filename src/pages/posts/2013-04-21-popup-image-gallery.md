---
title: 'Popup Image Gallery with jQuery'
layout: ../../layouts/Post.astro
publishDate: 2013-04-21
toc: true
share: true
comments: true
---

A simple search for `jquery image galleries` on Google will show you several
jQuery plugins created by different people! However, creating your own gallery
can sometimes be more efficient. For example, making your own gallery can save
your website extra loading time!

# The HTML

Let's get started! We'll first need some basic markup in HTML for our images and
the box that will hold the current and selected image:

```html
<link
  rel="stylesheet"
  href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"
/>

<div class="images">
  <img src="http://placebox.es/500/500/f1f1f1/222/Image 1,25" />
  <img src="http://placebox.es/500/500/f1f1f1/222/Image 2,25" />
  <img src="http://placebox.es/500/500/f1f1f1/222/Image 3,25" />
  <img src="http://placebox.es/500/500/f1f1f1/222/Image 4,25" />
  <img src="http://placebox.es/500/500/f1f1f1/222/Image 5,25" />
  <img src="http://placebox.es/500/500/f1f1f1/222/Image 6,25" />
  <img src="http://placebox.es/500/500/f1f1f1/222/Image 7,25" />
  <img src="http://placebox.es/500/500/f1f1f1/222/Image 8,25" />
  <img src="http://placebox.es/500/500/f1f1f1/222/Image 9,25" />
</div>

<div class="focus">
  <div class="container"></div>
  <div class="controls">
    <i class="close fa fa-times-circle"></i>
    <i class="prev fa fa-arrow-left"></i>
    <i class="next fa fa-arrow-right"></i>
  </div>
</div>
```

In the code above, `div.images` holds the images and `div.container` will hold
the enlarged and focused image. The `div.controls` contains icons which will
allow the user to close the image and go to the next or previous image. Finally,
the `link` element retrieves the [Font Awesome](http://fontawesome.io/) icon
library by the use of a
[CDN](http://en.wikipedia.org/wiki/Content_delivery_network).

# The CSS

Next, we'll style the elements we just created using the following CSS:

```css
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #222;
}

.images {
  text-align: center;
}

.images img {
  cursor: pointer;
  display: inline-block;
  width: 500px;
  margin: 1em;
}

.focus {
  z-index: 10;
  width: 500px;
  height: 500px;
  display: none;
}

.focus.enabled {
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.focus.enabled .container {
  width: 500px;
  height: 500px;
}

.focus.enabled img {
  width: 100%;
}

.focus.enabled .controls {
  margin-top: 1em;
  padding: 1em;
  text-align: center;
  background: #f1f1f1;
}

.focus.enabled .controls i {
  cursor: pointer;
  font-size: 60px;
  margin-right: 0.5em;
}

.close {
  color: #f50000;
}

.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.darken {
  opacity: 0.3;
}
```

The images are centered using `display: inline-block;` and `text-align: center;`
on the parent element, or `div.images`. The `div.focus` is absolutely positioned
in the middle using the `top`, `bottom`, `left`, and `right` properties. Next,
there are two helper classes, `.overlay` and `.darken`, which will help us when
we write the jQuery code.

# The jQuery

The next step is to add the functionality of the image gallery using jQuery:

```javascript
$(function () {
  var images = $('.images')
  var image = $('.images>img')
  var current = -1
  var focus = $('.focus')
  var container = $('.focus .container')
  var close = $('.close')
  var next = $('.next')
  var prev = $('.prev')
  image.on('click', function () {
    current = $('img').index($(this))
    container.empty()
    container.append('<img src="' + image.eq(current).attr('src') + '" />')
    focus.fadeIn().addClass('enabled')
    images.addClass('darken')
    images.append('<div class="overlay"></div>')
    $('html, body').animate(
      {
        scrollTop: focus.offset().top - 50,
      },
      500
    )
  })
  close.on('click', function () {
    focus.css('display', 'none').removeClass('enabled')
    images.removeClass('darken')
    $('.overlay').remove()
  })
  prev.on('click', function () {
    current = current - 1 < 0 ? image.length - 1 : current - 1
    container.empty()
    container.append('<img src="' + image.eq(current).attr('src') + '" />')
  })
  next.on('click', function () {
    current = current + 1 > image.length - 1 ? 0 : current + 1
    container.empty()
    container.append('<img src="' + image.eq(current).attr('src') + '" />')
  })
})
```

First, we set up various variables to hold the elements of our gallery. Most
importantly, the variable `current` will hold the zero-based index of the
current image in the array of all the images inside `div.images`. In other
words, the first image in `div.images` will have an index of 0, the second will
have 1, and so forth. A click handler is set for all the images in `div.images`.
When it is called, the variable `current` is updated with the correct index, any
existing images in the focus container are removed, the background is darkened
using the previously defined utility CSS classes, and finally, the image that
was clicked is appended to the focus container and displayed. The close,
previous, and next click handlers perform their self-explanatory jobs.

# Closing

That's it! We now have a simple image gallery! Check it out below and don't
hesitate to tinker with it. I have also included a CodePen link. Next time you
decide to include an image gallery inside your website, be sure to ask yourself
whether or not you need a massive jQuery plugin!

<div class="codepen-container">
    <p data-height="700" data-theme-id="132" data-slug-hash="qGzbn" data-default-tab="js,result" data-user="srikarg" data-embed-version="2" data-pen-title="Popup Image Loader" class="codepen">See the Pen <a href="https://codepen.io/srikarg/pen/qGzbn/">Popup Image Loader</a> by Srikar G. (<a href="https://codepen.io/srikarg">@srikarg</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</div>
