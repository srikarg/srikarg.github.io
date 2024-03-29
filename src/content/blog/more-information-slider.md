---
title: 'A More Information Slider with jQuery'
publishDate: 2013-04-07
---

Welcome again readers! Today, I have a quick little tutorial for displaying
information about a certain image only when the user clicks on the said image.

# The HTML

First, we need some simple HTML to hold our images. I'll use a simple grid of
quarters with an image inside each of them.

```html
<div class="quarter">
  <div class="info">This is some info.</div>
  <img src="http://lorempixel.com/300/300/people/" />
</div>

<div class="quarter">
  <div class="info">This is some info.</div>
  <img src="http://lorempixel.com/300/300/abstract/" />
</div>

<div class="quarter">
  <div class="info">This is some info.</div>
  <img src="http://lorempixel.com/300/300/city/" />
</div>

<div class="quarter">
  <div class="info">This is some info.</div>
  <img src="http://lorempixel.com/300/300/sports/" />
</div>
```

# The CSS

Next, we use basic CSS to set each quarter to take up 25% of the screen width.
We also hide the info by default with `display: none;`.

```css
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  background: #222;
  color: #fff;
}

.quarter {
  float: left;
  width: 25%;
}

.quarter img {
  width: 100%;
  margin: 0 auto;
  cursor: pointer;
}

.quarter .info {
  text-align: center;
  display: none;
}
```

# The jQuery

Finally, we use jQuery to take each image from each quarter and display the info
on a click event.

```javascript
$(function () {
  var image = $('.quarter>img')

  image.on('click', function () {
    $('.info').stop().slideUp()
    $(this).siblings('.info').slideToggle()
  })
})
```

# Closing

That's it! Thanks for reading! Feel free to tinker with the code below!

<div class="codepen-container">
    <p data-height="300" data-theme-id="132" data-slug-hash="EKFoi" data-default-tab="html,result" data-user="srikarg" data-embed-version="2" data-pen-title="A jQuery "More Information" effect!" class="codepen">See the Pen <a href="https://codepen.io/srikarg/pen/EKFoi/">A jQuery "More Information" effect!</a> by Srikar G. (<a href="https://codepen.io/srikarg">@srikarg</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</div>
