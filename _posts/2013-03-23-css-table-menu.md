---
title: A simple table menu using CSS and HTML
layout: post
comments: true
category: tutorials
---

Hey guys! Navigation is extremely important for any website. It is the foundation of the site, as it provides the user with a sense of the various crooks and nannies of it. Today, we'll create a basic table menu. If you want to view the video version of this tutorial that I made a few months ago, click [here](http://www.youtube.com/watch?v=xjZMlQUFsJY&feature=player_detailpage).

# Procedure

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

and then we use the following CSS to style the table:

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

Voila! We have a menu! You can see the code and the result below!
<div class="codepen"><pre class="codepen" data-height="300" data-type="result" data-href="JfAqo" data-user="srig99" data-safe="true"> <code> </code> <a href="http://codepen.io/srig99/pen/JfAqo">Check out this Pen!</a> </pre>
<script src="http://codepen.io/assets/embed/ei.js"> </script></div>
Thanks for reading this tutorial!