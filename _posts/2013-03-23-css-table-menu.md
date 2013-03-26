---
title: A simple table menu using CSS and HTML.
layout: post
category: tutorials
---

## Intro

Hey guys! Navigation is extremely important for any website. It is the foundation of the site, as it provides the user with a sense of the various crooks and nannies of it. Today, we'll create a basic table menu. If you want to view the video version of this tutorial that I made a few months ago, click [here](<http://www.youtube.com/watch?feature=player_detailpage&v=xjZMlQUFsJY>).

## Procedure

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
    background:
    url("http://subtlepatterns.subtlepatterns.netdna-cdn.com/patterns/satinweave.png");
}

table {
    font-family: sans-serif;
    font-size: 30px;
}

#navBar {
    z-index:1;
    position:fixed;
    top:0px;
    left:0px;
    width:100%;
    text-align:center;
    background:#E7E7E7;
    -moz-box-shadow: 10px 10px 10px #ccc;
    -webkit-box-shadow: 10px 10px 10px #ccc;
    -ms-box-shadow: 10px 10px 10px #ccc;
    -o-box-shadow: 10px 10px 10px #ccc;
    box-shadow: 10px 10px 10px #ccc;
}

#navBar a {
    display: block;
    color: black;
    text-decoration: none;
}

#navBar a:hover {
    color: black;
    background: #B9B9B9;
    text-decoration: none;
}

#navBar a.selected {
    color: black;
    background: #B9B9B9;
    text-decoration: none;
}
{% endhighlight %}
and voila! We have a menu! You can see the code and the result at [Codepen](http://codepen.io/srig99/pen/JfAqo)! Thanks for reading this tutorial!