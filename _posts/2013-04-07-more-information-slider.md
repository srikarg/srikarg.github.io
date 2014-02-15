---
title: More information slider with jQuery
layout: post
toc: true
share: true
comments: true
---

Welcome again readers! Today, I have a quick little tutorial for displaying information about a certain image only when the user clicks on the said image.

# The HTML

First, we need some simple HTML to hold our images. I'll use a simple grid of quarters with an image inside each of them.

```html
<div class="quarter">
    <div class="info">
    	This is some info.
    </div>
    <img src="http://lorempixel.com/300/300/people/">
</div>

<div class="quarter">
    <div class="info">
    	This is some info.
    </div>
    <img src="http://lorempixel.com/300/300/abstract/">
</div>

<div class="quarter">
    <div class="info">
    	This is some info.
    </div>
    <img src="http://lorempixel.com/300/300/city/">
</div>

<div class="quarter">
    <div class="info">
    	This is some info.
    </div>
    <img src="http://lorempixel.com/300/300/sports/">
</div>
```

# The CSS

Next, we use basic CSS to set each quarter to take up 25% of the screen width. We also hide the info by default with `display: none;`.

```css
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
}

body {
    background: #222;
    color: #FFF;
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

Finally, we use jQuery to take each image from each quarter and display the info on a click event.

```javascript
$(function(){
	var image = $('.quarter>img');

	image.on('click', function(){
		$('.info').stop().slideUp();
		$(this).siblings('.info').slideToggle();
	});
});
```

# Closing

That's it! Feel free to view the code below and tinker with it!

<a href="/labs/more-information-slider" class="button">Demo</a>
<a href="/labs/more-information-slider/more-information-slider.zip" class="button">Download</a>
