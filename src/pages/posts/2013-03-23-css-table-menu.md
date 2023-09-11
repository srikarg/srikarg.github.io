---
title: "A Simple Table Menu Using CSS and HTML"
layout: post
toc: true
share: true
comments: true
---

Hey guys! Navigation is extremely important for any website. It is the foundation of the site, as it provides the user with a sense of the various crooks and nannies of it. Today, we'll create a basic table menu. If you want to view the video version of this tutorial that I made a few months ago, then click play below!

<div class="video-container">
    <iframe width="640" height="360" src="//www.youtube.com/embed/xjZMlQUFsJY?rel=0" frameborder="0" allowfullscreen="true"> </iframe>
</div>

# The HTML

First off, we create a simple table for our menu with the following HTML:

```html
<table cellpadding="0px" cellspacing="0px" id="navBar">
  <tr>
    <td>
      <a class="selected" href="index.html">Home</a>
    </td>
    <td>
      <a href="#">Link 1</a>
    </td>
    <td>
      <a href="#">Link 2</a>
    </td>
    <td>
      <a href="#">Link 3</a>
    </td>
  </tr>
</table>
```

# The CSS

Next, we'll use the following CSS to style the table:

```css
body {
  background: url(http://subtlepatterns.subtlepatterns.netdna-cdn.com/patterns/satinweave.png);
}

table {
  font-family: sans-serif;
  font-size: 30px;
}

#navBar {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background: #e7e7e7;
  -moz-box-shadow: 10px 10px 10px #ccc;
  -webkit-box-shadow: 10px 10px 10px #ccc;
  -ms-box-shadow: 10px 10px 10px #ccc;
  -o-box-shadow: 10px 10px 10px #ccc;
  box-shadow: 10px 10px 10px #ccc;
}

#navBar a {
  display: block;
  color: #000;
  text-decoration: none;
}

#navBar a:hover {
  color: #000;
  background: #b9b9b9;
  text-decoration: none;
}

#navBar a.selected {
  color: #000;
  background: #b9b9b9;
  text-decoration: none;
}
```

# Closing

Voila! We have a menu! Thanks for reading this tutorial! Feel free to tinker with the code below!

<div class="codepen-container">
	<p data-height="300" data-theme-id="132" data-slug-hash="JfAqo" data-default-tab="css,result" data-user="srikarg" data-embed-version="2" data-pen-title="Table Menu" class="codepen">See the Pen <a href="https://codepen.io/srikarg/pen/JfAqo/">Table Menu</a> by Srikar G. (<a href="https://codepen.io/srikarg">@srikarg</a>) on <a href="https://codepen.io">CodePen</a>.</p>
	<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</div>
