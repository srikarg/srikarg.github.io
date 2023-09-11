---
title: "AngularJS for Beginners"
layout: post
toc: true
share: true
comments: true
---

AngularJS is a JavaScript framework developed by Google that makes coding web apps painless, quick, and easy! In this tutorial, I'll try to guide you through the basics of this framework and what it has to offer.

# Enabling AngularJS

To install AngularJS into your web project, just head over to [AngularJS's website](http://angularjs.org/) and click the download button. This will show you a couple of options. Personally, I use the CDN as the following:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Learning AngularJS</title>
  </head>
  <body>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
  </body>
</html>
```

Now that AngularJS is available to us, we must tell it where our web app is. This is simply accomplished by including an `ng-app` attribute inside the container that houses our app. For now, we'll put it inside the `html` tag as such:

```html
<!doctype html>
<html lang="en" ng-app>
  <head>
    <meta charset="utf-8" />
    <title>Learning AngularJS</title>
  </head>
  <body>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
  </body>
</html>
```

# Basic Data Binding

Now that the installation is complete, we can start with the basics of AngularJS! Data binding permits your web app's HTML to directly communicate with the app's JavaScript. Those of you familiar with the [MVC pattern](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) (Model-View-Controller) should know that data binding in this framework allows the view and model to directly communicate and update based on the other's data. The following is an example of data binding:

```html
<!doctype html>
<html lang="en" ng-app>
  <head>
    <meta charset="utf-8" />
    <title>Learning AngularJS</title>
  </head>
  <body>
    <input type="text" ng-model="user_name" />
    <p>{% raw %}{{ user_name }}{% endraw %}</p>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
  </body>
</html>
```

Here, the `ng-model` tells AngularJS to make the data from the `input` a variable that can be accessed and manipulated through the web application's script. In addition, a programmer can output any variables that he/she defines through AngularJS by using double braces (\{\{ \}\}) as shown above. In the code, the user's name is retrieved using `ng-model="user_name"` and then it is displayed in `<p>` tags using <code>&#123;&#123; user_name &#125;&#125;</code>. Here's what it produces:

<div class="codepen-container">
	<p data-height="300" data-theme-id="132" data-slug-hash="cuwyI" data-default-tab="html,result" data-user="srikarg" data-embed-version="2" data-pen-title="Basic Data Binding in AngularJS" class="codepen">See the Pen <a href="https://codepen.io/srikarg/pen/cuwyI/">Basic Data Binding in AngularJS</a> by Srikar G. (<a href="https://codepen.io/srikarg">@srikarg</a>) on <a href="https://codepen.io">CodePen</a>.</p>
	<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</div>

One can also output answers to simple math using AngularJS. For example, two numbers can be taken from `<input type="number">` tags and then their sum can be displayed like so:

```html
<!doctype html>
<html lang="en" ng-app>
  <head>
    <meta charset="utf-8" />
    <title>Learning AngularJS</title>
  </head>
  <body>
    <input type="number" ng-model="num1" />
    <input type="number" ng-model="num2" />
    <p>The sum is: {% raw %}{{ num1 + num2 }}{% endraw %}</p>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
  </body>
</html>
```

Here's what the previous code creates:

<div class="codepen-container">
	<p data-height="300" data-theme-id="132" data-slug-hash="Fsila" data-default-tab="html,result" data-user="srikarg" data-embed-version="2" data-pen-title="Basic Data Binding in AngularJS 2" class="codepen">See the Pen <a href="https://codepen.io/srikarg/pen/Fsila/">Basic Data Binding in AngularJS 2</a> by Srikar G. (<a href="https://codepen.io/srikarg">@srikarg</a>) on <a href="https://codepen.io">CodePen</a>.</p>
	<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</div>

# Controllers

> Controllers allow the user to change the web application's data and thus manipulate the app's output (or the view in MVC terms).

What if you needed more functionality than the simple apps seen above? Well, AngularJS provides controllers just for that reason! Controllers allow the user to change the web application's data and thus manipulate the app's output (or the view in MVC terms). Let's create a simple app to demonstrate.

The HTML:

```html
<!doctype html>
<html lang="en" ng-app ng-controller="MainCtrl">
  <head>
    <meta charset="utf-8" />
    <title>Learning AngularJS</title>
  </head>
  <body>
    <h1>The People App</h1>
    <h4>View People</h4>
    <ul>
      <li ng-repeat="person in people">
        {% raw %}{{ person.name }} from {{ person.city }}, {{ person.state }}{%
        endraw %}
      </li>
    </ul>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
  </body>
</html>
```

The JavaScript:

```javascript
function MainCtrl($scope) {
  $scope.people = [
    {
      name: "John Doe",
      city: "New York City",
      state: "New York",
    },
    {
      name: "John Smith",
      city: "Oklahoma City",
      state: "Oklahoma",
    },
    {
      name: "Henry Black",
      city: "Topeka",
      state: "Kansas",
    },
  ];
}
```

First off, in the HTML, we tell AngularJS that the app uses the controller named _MainCtrl_ by typing `ng-controller="MainCtrl"` as a `<html>` tag attribute. This allows the HTML to communicate with the JavaScript. Next, we use `ng-repeat` to loop through each `person` in the `people` JSON object that is created in the JavaScript code. The following description of `ng-repeat` is from the AngularJS [API](http://docs.angularjs.org/api/):

> The ngRepeat directive instantiates a template once per item from a collection. Each template instance gets its own scope, where the given loop variable is set to the current collection item, and $index is set to the item index or key.

Inside each `<li>` the values for the name, city, and state keys are used from the JSON object using the `person` variable defined in `ng-repeat`. Let's take a look at the result of the code above:

<div class="codepen-container">
	<p data-height="300" data-theme-id="132" data-slug-hash="tEAnJ" data-default-tab="html,result" data-user="srikarg" data-embed-version="2" data-pen-title="Controllers in AngularJS" class="codepen">See the Pen <a href="https://codepen.io/srikarg/pen/tEAnJ/">Controllers in AngularJS</a> by Srikar G. (<a href="https://codepen.io/srikarg">@srikarg</a>) on <a href="https://codepen.io">CodePen</a>.</p>
	<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</div>

Next, we can add a feature to allow the user to input names into the `people` object! First, we will need to modify the HTML as so:

```html
<!doctype html>
<html lang="en" ng-app ng-controller="MainCtrl">
  <head>
    <meta charset="utf-8" />
    <title>Learning AngularJS</title>
  </head>
  <body>
    <h1>The People App</h1>
    <h4>View People</h4>
    <ul>
      <li ng-repeat="person in people">
        {% raw %}{{ person.name }} from {{ person.city }}, {{ person.state }}{%
        endraw %}
      </li>
    </ul>

    <h4>Add People</h4>
    Enter the person's name: <input type="text" ng-model="person_name" />
    <br />
    <br />
    Enter the person's city: <input type="text" ng-model="person_city" />
    <br />
    <br />
    Enter the person's state: <input type="text" ng-model="person_state" />
    <br />
    <br />
    <button ng-click="addPerson()">Add the Person!</button>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
  </body>
</html>
```

Next, we'll update the JavaScript as so:

```javascript
function MainCtrl($scope) {
  $scope.people = [
    {
      name: "John Doe",
      city: "New York City",
      state: "New York",
    },
    {
      name: "John Smith",
      city: "Oklahoma City",
      state: "Oklahoma",
    },
    {
      name: "Henry Black",
      city: "Topeka",
      state: "Kansas",
    },
  ];
  $scope.addPerson = function () {
    $scope.people.push({
      name: $scope.person_name,
      city: $scope.person_city,
      state: $scope.person_state,
    });
    $scope.person_name = "";
    $scope.person_city = "";
    $scope.person_state = "";
  };
}
```

In the HTML, `ng-click` allows the `MainCtrl` function `addPerson()` to get executed when the button is clicked. The function `addPerson()` simply pushes the new person, with the data from the three `<input>` tags, into the `people` JSON object. Then, the list we created earlier (to display the people) gets automatically updated with the new person that was just added. Here's the updated app:

<div class="codepen-container">
	<p data-height="540" data-theme-id="132" data-slug-hash="qEiDH" data-default-tab="html,result" data-user="srikarg" data-embed-version="2" data-pen-title="Controllers in AngularJS 2" class="codepen">See the Pen <a href="https://codepen.io/srikarg/pen/qEiDH/">Controllers in AngularJS 2</a> by Srikar G. (<a href="https://codepen.io/srikarg">@srikarg</a>) on <a href="https://codepen.io">CodePen</a>.</p>
	<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</div>

# Filters

AngularJS filters filter data inside your web application. This can lead to features such as searching, ordering, and more! Let's add a search functionality to The People App that we have been working on. First, we need to add a new `<input>` tag for the search text. Then we will need to filter the results in the `<ul>` list using the search text. The new modified code will be:

```html
<!doctype html>
<html lang="en" ng-app ng-controller="MainCtrl">
  <head>
    <meta charset="utf-8" />
    <title>Learning AngularJS</title>
  </head>
  <body>
    <h1>The People App</h1>
    <h4>View People</h4>
    Search! <input type="text" ng-model="search" />
    <ul>
      <li ng-repeat="person in people | filter:search">
        {% raw %}{{ person.name }} from {{ person.city }}, {{ person.state }}{%
        endraw %}
      </li>
    </ul>

    <h4>Add People</h4>
    Enter the person's name: <input type="text" ng-model="person_name" />
    <br />
    <br />
    Enter the person's city: <input type="text" ng-model="person_city" />
    <br />
    <br />
    Enter the person's state: <input type="text" ng-model="person_state" />
    <br />
    <br />
    <button ng-click="addPerson()">Add the Person!</button>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
  </body>
</html>
```

The only new code we needed to add was of course the search `<input>` and the `filter:search` inside the `ng-repeat` attribute! The pipe character (|) inside the `ng-repeat` simply allows the filter to use the data from the `people` JSON object. Let's view the search in action!

<div class="codepen-container">
	<p data-height="565" data-theme-id="132" data-slug-hash="DrFfs" data-default-tab="html,result" data-user="srikarg" data-embed-version="2" data-pen-title="Filters in AngularJS" class="codepen">See the Pen <a href="https://codepen.io/srikarg/pen/DrFfs/">Filters in AngularJS</a> by Srikar G. (<a href="https://codepen.io/srikarg">@srikarg</a>) on <a href="https://codepen.io">CodePen</a>.</p>
	<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</div>

# Directives

The final topic we will be discovering in AngularJS today will be directives, which are custom HTML elements or attributes created using AngularJS. Making a new directive is simple! Let's say you wanted to create a directive (we will name it emphasize) which looks like this: `<p emphasize></p>` or this: `<emphasize></emphasize>`. First, we will need to declare a module (see [this](http://upload.wikimedia.org/wikipedia/commons/f/fd/MVC-Process.png) if you need to see how a model interacts with a view and controller) like so:

```javascript
angular.module("sampleDirective", []);
```

Next, we can chain the `directive()` method onto the previous code to add a directive to the module.

```javascript
angular.module("sampleDirective", []).directive("emphasize", function () {
  return {
    restrict: "E,A",
    template:
      '<span style="color: red;font-size: 40px;">This is the emphasize directive!</span>',
  };
});
```

Inside the directive function, we are restricting the directive to only elements and attributes using `restrict: 'E,A'`. Whenever the emphasize directive is used, the element that contains the attribute or the emphasize tag itself will be replaced with the content present in `template` above. You can view the code below!

<div class="codepen-container">
	<p data-height="370" data-theme-id="132" data-slug-hash="qIdBE" data-default-tab="html,result" data-user="srikarg" data-embed-version="2" data-pen-title="Directives in AngularJS" class="codepen">See the Pen <a href="https://codepen.io/srikarg/pen/qIdBE/">Directives in AngularJS</a> by Srikar G. (<a href="https://codepen.io/srikarg">@srikarg</a>) on <a href="https://codepen.io">CodePen</a>.</p>
	<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</div>

# Further Reading

Well, that's it for now! To discover more about AngularJS, you can go to the framework's amazing API [here](http://docs.angularjs.org/api/) and the AngularJS official website [here](http://angularjs.org/). You can watch some awesome videos on AngularJS [here](http://www.egghead.io/) and [here](http://www.youtube.com/watch?feature=player_detailpage&v=i9MHigUZKEM). Go to [Built With AngularJS](http://builtwith.angularjs.org/) to see actual apps created with AngularJS in action! If you still need resources, check out [this](https://github.com/angular/angular.js/wiki/JsFiddle-Examples) exhaustive list of JSFiddles dealing with AngularJS. Thanks for reading and be sure to check out future tutorials that I will be making about AngularJS!

<a href="https://news.ycombinator.com/item?id=6049181" class="btn">Discuss on Hacker News</a>
