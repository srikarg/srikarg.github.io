---
title: Unix Terminal Commands
layout: post
comments: true
category: tutorials
---

The terminal is an extremely useful tool for any advanced computer user. It can allow you to perform tasks at a rapid rate, often faster than using a [GUI](http://en.wikipedia.org/wiki/Graphical_user_interface). Today, I'll show you guys a couple of commands that are available in any Unix terminal. However, this is just a starter list of commands. Discover more commands [here](http://www.math.harvard.edu/computing/unix/unixcommands.html)!

# Commands

1. `man`  
	This is an essential command to learn as it will allow you to look up the manual for any command. In essence, it will bring up a tutorial for a certain command. For example, `man man` will bring up information about the `man` command.

2. `ls`  
	This command will list files that are not hidden in the current directory. If you include the optional `-a` flag, as in `ls -a`, the terminal will allow you to see *all* of the files in the current directory, including the hidden ones. This is useful if you want to see hidden files occasionally and do not want the option to be the system default.

3. `cd`  
	The command `cd` is another vital command to learn. It will allow you to change the directory, as the name implies. For example, if you are in the directory `/test` and you wanted to change to the directory `/test/anothertest`, then you would use the command `cd anothertest`. This would not work if you are not in the `/test` directory because the `cd` command would not know where to look. In order to look outside of the current directory, you would use `..`. For example, if the directory you are looking for is `/brains` which is a parent directory of `/test`, then you would use `cd ..`.

4. `touch`  
	This command is used to create new files in the current directory (if you want to retrieve the current directory, use `pwd`). If I wanted to create two new HTML files called one.html and two.html in the current directory, I would type: `touch one.html two.html`.

5. `mkdir`  
	The name of this command represents the words make directory. It is used exactly for that purpose, making a new directory (or folder) in the current directory. Typing `mkdir test` would create a directory named test in the current directory. Note that if you want the name to contain spaces, you would type the name in double quotes (like this: `mkdir "a name with spaces in it"`).

6. `open`  
	This will open files or directories that you pass to it. For example, `open .` will open the current directory, where `.` represents the current directory (note that `.` can be used in other commands as well).

# Workflow

Now let's use the commands we just learned in a sample workflow that you, a developer or another person, might use during a typical day.

1. First, create a folder for a new project with `mkdir "My Awesome Project"`.

2. Then, change the directory to that folder with `cd "My Awesome Project"`.

3. Next, create an `index.html` file and a directory for CSS and JavaScript. The following will do the trick: `touch index.html; mkdir css js;`. Note that semicolons (;) are used to combine one or more commands onto a single line.

4. Finally, open the current directory using `open .`.

# Closing

There you have it! A list of some simple commands to get you started with Unix terminal! Feel free to add comments below to point out more commands or help others!