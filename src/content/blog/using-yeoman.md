---
title: 'Using Yeoman'
publishDate: 2013-08-02
hacker-news: https://news.ycombinator.com/item?id=6151904
---

Chances are, you've heard of [Yeoman](http://yeoman.io/) before, but don't
exactly know what it is. Well, hopefully I can help you get started with using
this awesome web development workflow tool in less than 10 minutes.

# What is it?

Yeoman is a command line tool built for the purpose of helping you (a web
developer) in your everyday development workflow. That means it can generate
starter templates for you whether or not you're using a web application
framework such as AngularJS, Backbone.js, or something else. Not only do you get
a kickstart on your project, but you also receive code that adheres to the
current best practices as the
[public contributes](http://yeoman.io/community-generators.html) to the code for
Yeoman generators.

# Installing Yeoman

If you haven't already, install node.js by visiting its
[website](http://nodejs.org/) and clicking the install button. Next, open up
Terminal or the Command Prompt (depending on what OS you're using) and enter the
following command:

```console
npm install -g yo grunt-cli bower
```

This should install Yeoman and it's dependencies (yo,
[Grunt](http://gruntjs.com/) and [Bower](http://bower.io/)).

# Installing Generators

Next, you need to install generators in order to use the starter templates
described above. Let's say you wanted Yeoman to create a basic template for a
web application. First, you need to install the generator for this
functionality. This is as simple as:

```console
npm install -g generator-webapp
```

Installing other generators follows this same format. For example, if you needed
an AngularJS generator, you would use:

```console
npm install -g generator-angular
```

# Using Generators

After installation, using generators is as simple as going to the directory
where you want the template to be installed and typing the following in the
Terminal or Command Prompt:

```console
yo webapp
```

This assumes that you are using the webapp generator. Using the AngularJS
generator instead would look like this:

```console
yo angular
```

Once you run the generator, you should get a folder full of all the dependencies
and source files for your web development project.

# Local Development

To start developing locally, simply run:

```console
grunt server
```

This will fire up a localhost server for you to develop on. Another neat feature
is that the server updates automatically as you edit the project's source files,
meaning you can see your changes instantaneously.

# Building Your Application

Once you're done developing your amazing application, you can build it into a
production folder using:

```console
grunt build
```

This will concatenate all of your JavaScript scripts and CSS files, link them up
in the `index.html` file, and create a `dist` folder in the main directory for
you. Then, you can simply transport your completed application elsewhere by
using the `dist` folder (short for distribution).

# Conclusion

That's all there is to mastering the Yeoman tool! Be sure to check out more
community and built-in generators
[here](http://yeoman.io/community-generators.html). Also, check out the official
[getting started page](http://yeoman.io/gettingstarted.html) on the Yeoman
website. Thanks for reading!
