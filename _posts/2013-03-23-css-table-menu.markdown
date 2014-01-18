---
title: A simple table menu using CSS and HTML
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

{% highlight html %}
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
{% endhighlight %}

# The CSS

Next, we'll use the following CSS to style the table:

{% highlight css %}
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
	background: #E7E7E7;
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
	background: #B9B9B9;
	text-decoration: none;
}

#navBar a.selected {
	color: #000;
	background: #B9B9B9;
	text-decoration: none;
}
{% endhighlight %}

# Closing

Voila! We have a menu! Thanks for reading this tutorial! Check out the code below!

<a href="/labs/css-table-menu" class="button">Demo</a>
<a href="/labs/css-table-menu/css-table-menu.zip" class="button">Download</a>