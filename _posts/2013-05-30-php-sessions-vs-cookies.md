---
title: PHP Sessions vs. Cookies
layout: post
comments: true
category: tutorials
---

As a beginning PHP developer, you may have heard of sessions or cookies before. But do you truly understand what they are and when to use them? If not, let's explore them in this article!

# Sessions

> Session variables are stored on the server side.

Session variables are stored *on the server side* in a *temporary* directory. The only accessible data to the client is the session ID. If this ID is changed or lost, it will *break* the connection with the session. By default, a session variable will be kept alive for 1440 seconds, or 24 minutes. This [default value](http://www.php.net/manual/en/session.configuration.php) is set by the variable `session.gc_maxlifetime` in the PHP configuration file, or `php.ini`. In the following snippet, let's create a session and fill the `$_SESSION` variable with the first and last name of the user, which will be retrieved from a HTML form.

{% highlight php %}
<?php
	// Check if the form has been submitted (using a form with the GET method is optional)
	if (!empty($_POST)) {
		// Start the session to access its variables
		session_start();

		// Get the first name and last name from the form POST data
		$first_name = $_POST['firstName'];
		$last_name = $_POST['lastName'];

		// Fill in the session variables with the name variables
		$_SESSION['first_name'] = $first_name;
		$_SESSION['last_name'] = $last_name;
	}
?>
{% endhighlight %}

It's as simple as that! These variables can be accessed later on through the same `$_SESSION` variable, even if the user is viewing another page. Following up the previous code, we have the following.

{% highlight php %}
<?php
	// In another file, we can access the session variables easily
	session_start();
	echo 'Welcome back '.$_SESSION['first_name'].'!';
?>
{% endhighlight %}

# Cookies

> Cookies are stored on the client side.

Unlike session variables, cookies are stored *on the client side*. This means that users will be able to access these cookies and possibly modify them using [JavaScript](http://blog.creativeitp.com/posts-and-articles/javascript/javascript-injection-cookie-editing/) or a regular [browser extension](https://chrome.google.com/webstore/detail/edit-this-cookie/fngmhnnpilhplaeedifhccceomclgfbg?hl=en)! Therefore, it is wise to store significant/personal data with sessions instead of cookies. To create a cookie, use the `setcookie()` function as follows. The function accepts the cookie's name, data, and expiration date as parameters (in respective order).

{% highlight php %}
<?php
	// Makes a cookie with the user's first name, which is retrieved using a POST form as shown previously
	// For now, I'll use a sample value
	$first_name = 'John';

	// The name of the cookie is first_name
	// The value is the variable above, or John
	// The expiration date is 1 day from now as 86400 seconds = 1 day
	setcookie('first_name', $first_name, time() + 86400);
?>
{% endhighlight %}

Later we can retrieve the cookie using the `$_COOKIE` variable in PHP.

{% highlight php %}
<?php
	echo 'Hello '.$_COOKIE['first_name'].'!';
?>
{% endhighlight %}

To delete a cookie, one can simply fill its value with an empty string and then set its expiration date in the past, like the following.

{% highlight php %}
<?php
	setcookie('first_name', '', time() - 3600); // 3600 seconds = 1 hour
?>
{% endhighlight %}

# Further reading

You can find more information about cookies [here](http://davidwalsh.name/php-cookies) and [here](http://php.net/manual/en/function.setcookie.php). Thanks for reading!