---
title: AngularJS For Beginners
layout: post
share: true
comments: true
---

AngularJS is a JavaScript framework developed by Google that makes coding web apps painless, quick, and easy! In this tutorial, I'll try to guide you through the basics of this framework and what it has to offer.

# Enabling AngularJS

To install AngularJS into your web project, just head over to [AngularJS's website](http://angularjs.org/) and click the Download button. This will show you a couple of options. Personally, I use the CDN as the following:

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Learning AngularJS</title>
</head>
<body>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
</body>
</html>
{% endhighlight %}

Now that AngularJS is available to us, we must tell it where our web app is. This is simply accomplished by including an `ng-app` attribute inside the container that houses our app. For now, we'll put it inside the `html` tag as such:

{% highlight html %}
<!DOCTYPE html>
<html lang="en" ng-app>
<head>
	<meta charset="utf-8">
	<title>Learning AngularJS</title>
</head>
<body>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
</body>
</html>
{% endhighlight %}

# Basic Data Binding

Now that the installation is complete, we can start with the basics of AngularJS! Data binding permits your web app's HTML to directly communicate with the app's JavaScript. For those of you familiar with the [MVC pattern](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) (Model-View-Controller) should know that data binding in this framework allows the view and model to directly communicate and update based on the other's data. The following is an example of data binding:

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Learning AngularJS</title>
</head>
<body>
	<input type="text" ng-model="user_name" />
	\{\{ user_name \}\}
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
</body>
</html>
{% endhighlight %}

Here, the `ng-model` tells AngularJS to make the data from the `input` a variable that can be accessed and manipulated through the web application's script. In addition, we can output any variables that we define through AngularJS by using double braces (\{\{ \}\}) as shown above. First we are getting the user's name using `ng-model="user_name"` and then we are displaying it using <code>&#123;&#123; user_name &#125;&#125;</code>.