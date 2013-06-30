---
title: Scraping an HTML page with PHP
layout: post
share: true
comments: true
---

Let's just say you run into a situation where you need to access data from a website that does not provide JSON or XML formats for the information you want. Well, this recently happened to me, as I wanted to access some text from an HTML table on a web page. I tried looking for a solution and eventually stumbled across [PHP Simple HTML DOM Parser](http://simplehtmldom.sourceforge.net/). This is a really fast and useful PHP library which can parse HTML from a URL or string and extract information for you. Let's check it out!

# Loading the library

The obvious first step in trying this library out is to download it. You can find it [here](http://sourceforge.net/projects/simplehtmldom/files/). Once you have it downloaded and extracted, you can load it into your PHP file and then specify an HTML string or URL to parse. There are two ways to parse the URL. In the following snippet, I'll show you both methods of parsing.

{% highlight php %}
<?php
	// Include the library to actually use it.
	include_once('simple_html_dom.php');

	// Way #1: Object-Oriented
	$html = new simple_html_dom();
	$html -> load_file('http://www.google.com/');

	// Way #2: Quick way
	$html = file_get_html('http://www.google.com/');
?>
{% endhighlight %}

# Extracting data

Once we have the library ready to go, we can invoke it to retrieve what we need. The element selection features of this library are extremely similar to those of [jQuery](http://jquery.com/), a popular JavaScript library. You can select elements in this PHP parser using the following:

-	Attribute values
-	Class names
-	ID names
-	Parent nodes
-	Child nodes
-	Sibling nodes

For the sake of example, let's get all of the links from the Yahoo! [website](http://www.yahoo.com/) and print them out.

{% highlight php %}
<?php
	// Include the library to use it.
	include_once('simple_html_dom.php');

	// Get the HTML from the Yahoo! website.
	$html = file_get_html('http://www.yahoo.com/');

	// Put all of the <a> tags into an array named $result
	$result = $html -> find('a');

	// Run through the array using a foreach loop and print each link out using echo
	foreach($result as $link) {
		echo $link."<br/>";
	}
?>
{% endhighlight %}

What if we wanted to extract the current articles on the front page of the New York Times [website](http://www.nytimes.com/)? Luckily, the website wraps each story within a `div` with a class of story. Knowing this, we can get all of the articles on the front page using the selector `div.story` as shown below.

{% highlight php %}
<?php
    include_once('lib/simple_html_dom.php');

	$html = file_get_html('http://www.nytimes.com/');

	// Find all articles
	$result = $html -> find('div.story');

	// Print them out
	foreach($result as $element) {
		echo $element."<br/>";
	}
?>
{% endhighlight %}

Clearly, the PHP Simple HTML DOM Parser can be exceedingly useful in situations such as the one I recently encountered. You can find more information about it [here](http://simplehtmldom.sourceforge.net/manual.htm) and you can find documentation [here](http://simplehtmldom.sourceforge.net/manual_api.htm).

# More information

You can learn more about this library by reading David Walsh's [tutorial](http://davidwalsh.name/php-notifications). Also, be sure to check out [this](http://stackoverflow.com/questions/3577641/how-to-parse-and-process-html-xml) helpful answer on StackOverflow! Thanks for reading!