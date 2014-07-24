---
layout: post
title: "The Tao of static news app development"
date: 2014-07-24 11:27:13 # This is used in place of the filename
files_url: /files/2014/07/24/the-tao-of-static-news-app-development/
dek:     Eating your own sushi everyday
summary: # 140 characters or less!
img_opt: 'cover'                                        # Options: 'cover' or 'inlne' or 'none'
img_sml: '/files/2014/07/24/the-tao-of-static-news-app-development/320x256.jpg'                          # Default on cover or inline
img_med: '/files/2014/07/24/the-tao-of-static-news-app-development/640x512.jpg'                          # 640x512px cover, inline
img_lrg: '/files/2014/07/24/the-tao-of-static-news-app-development/800x640.jpg'                          # 800x640px cover, inline
img_xlg: '/files/2014/07/24/the-tao-of-static-news-app-development/1200x960.jpg'                         # 1200x960px cover only
img_alt: ''                                             # Alt for inline
img_caption: ''                                         # Caption for either
img_url: ''                                             # URL to original image
category: coding                                        # Just one of the 4xCs
tags:                                                   # E.g., frontpage
- frontpage
- staticnewsapps
- newstechstacks
---
It's great that there are [all][nprtemplate] [these][tarbell] [tools][jekyllrb] for [bootstrapping a static news app](http://phillipadsmith.com/2014/07/bootstrapping-the-static-news-app.html), but was is the day-to-day experience of developing with them, or using them as a reporter? That's what we're exploring today.
{: .lead}

Building static apps has come a long way over the last few years and several key improvements have made the process much smoother. I touched on [some of those concepts yesterday](http://phillipadsmith.com/2014/07/bootstrapping-the-static-news-app.html) -- e.g., project scaffolding & HTML tempting systems that enable the use of includes and inheritance. Today, I'll run though some of the other key ingredients for a [delicious tasting static news app](http://phillipadsmith.com/2014/07/recipes-for-delicious-tasting-static-news-apps.html), including:

* Previewing files through a mini HTTP server
* Pre-processing, generating or rendering, and asset pipelines
* Project management & Automating deployment

## Local HTTP server
Most, if not all, static site generation tools, [NPR's app template][nprtemplate] and [Tarbell][tarbell] included, come with a built-in mini HTTP server. More than that, at this step of the development process, your static site generation tool is going to decide how to combine the structure of pages (the HTML, CSS, and Javascript) with the actual content that you've provided.

There seem to be two approaches:

1. The preview server runs a dynamic application with routing and interpolation of content and templates on-the-fly. This is the approach that the [NPR app template][nprtemplate] takes. 

1. In the second approach, all of the static assets are generated first, including all of the necessary pre-processing and interpolation, and then a preview server is started and points to the location of those static assets. This is the approach that many static-site generators, including [Jekyll][jekyllrb], take.

I should note that it's also possible with the NPR template to render the application out to a static site using its `fab render` command and, from there, it can be previewed with  `python -m SimpleHTTPServer`. 

The pros and cons of each approach are quite discreet. In the "previewing a dynamic app" approach, changes to templates or content is visible immediately with the drawback of having to remember to add a new route to the application for each new page. When taking the "previewing a rendered site" approach, the site needs to be regenerated before updates are visible, but this tends to happen quite quickly and is often done automatically with a 'watch' flag that keeps on eye on files that have changed.

(Nerdtastic side note: check out Tarbell's special [favicon-preview.ico](https://github.com/newsapps/flask-tarbell/blob/0.9-beta6/tarbell/docs/build.rst#anatomy-of-a-project-directory), which helps developers visually distinguish their local development site from their staging or production sites. Nice touch!) 

## Pre-processing & asset pipelines
The real magic of the `serve` command in Tarbell or Jekyll, or the `python app.py` command in the NPR template, is the pre-processing or "generation" that happens before the site is opened in a browser. 

We'll talk about content, or "data access," in more detail later, but this step usually pulls "content" -- the copy, images, and so-on that make this project unique -- from a file or remote resource, perhaps a Google Spreadsheet, and provides it to the project's templates as models, objects, variables, or what-have-you. Some of the data typically comes from configuration files and some from data sources.

The next layer of awesome that has been baked into some static site generators is the concept of an asset pipeline.  Basically, taking steps to prepare your static assets for fast, efficient delivery in the real world. Typically the steps are:

* Compile the assets if necessary: convert LESS or Sass into CSS; CoffeeScript into JavaScript
* Concatenate the resources, where sensible: merge separate JavaScript files into one app.js file; merge separate CSS files into one app.css file
* Compress or minify the resources: typically for JavaScript and CSS, but can also be done effectively with images and HTML
* Cache-ify (I just made that word up) the resources: give the static assets a unique filename, typically a hash, to ensure that they get stored in users' browsers for a long time, but provide a way "bust" that cached version of the asset when necessary

Again, there are different approaches to how each tool addresses the concept of an asset pipeline. Some include it in the core set of features that they provide (to some extent Jekyll does this for Sass and CoffeeScript), some include it in the "render" step (NPR's app template) and some leave it as an exercise for the developer (typically by using another tool, possibly task runner like [Grunt](http://gruntjs.com), to do that work). 

In my own journey to think through the requirements for a great-tasting static news app template, this has been the most challenging to get right, and there are many opinions on what "right" means! Looking at this recent [Chicago Tribune News Apps team project](http://apps.chicagotribune.com/sports/highschools/), you can see that there is little in the way of optimization of the static assets. (Not a dig. Just a observation.)

## Project management & automation
An optional, but very tasty, ingredient for a static news app stack is built-in commands for managing a project's lifecycle. The more I explore this, the more I obsess about it at night. 

Typically, these project management commands are provided through a command-line interface. For example, the aforementioned `tarbell serve` and `fab render` are two such examples. Both the NPR app template and Tarbell are now developed on top of Python's [Flask microframework](http://flask.pocoo.org/). NPR's template also makes use of Python's [Fabric tool](http://www.fabfile.org/) for some of these management tasks, and it [looks like Tarbel might head that way soon too](https://github.com/newsapps/flask-tarbell/issues/98).

Whether you choose to extend your core static site generator application with new commands to assist with managing the application lifecycle, or decide to use a deployment tool like Fabric, [Puppet (Ruby)](http://puppetlabs.com/) or [Rex (Perl)](http://www.rexify.org/) is of little importance. The objective is to have some way to consistently manage the different "states" of your project: bootstrapping, development, staging, and deployment (ideally with some testing sprinkled in there somewhere). 

If you want to go all the way -- as NPR's app template does -- you can also provide commands to check out source code from repositories and to bootstrap a Github project, or -- as Tarbell does -- provide a command for switching between projects quickly and easily. There are so many options here! 

Personally, I've come to believe that only having one path through the project's administration is conceptually simpler to teach, understand, and remember. So I am leaning toward the Tarbell approach where all of the lifecycle-management steps are run through Tarbell's `tarbell` command.

## Automating deployment
So, I was hoping to dig into the various ways that the NPR Visuals team and Chicago Tribune's News Apps team deploy their static news app sites, as well as how some other static site generation workflows handle this, but I've run out of time for today. Boo! 

That is probably for best, as this post is already longtastic.

Anyway, I'll carry-on with deployment and day-to-day interactions with static sites in the next post. If you have thoughts on the above -- examples of other approaches, corrections, tricks, or just opinions -- please add them in the comments or drop me a line on [Twitter][twitter].

If you'd like to be notified of the next post, just subscribe to the comments and I'll post the link there.

[nprtemplate]: https://github.com/nprapps/app-template/
[nprtemplatedocs]: https://github.com/nprapps/app-template/blob/94181834dbf8bf3f4a4d955d899de787740d353d/PROJECT_README.md#whats-in-here

[tarbell]:  https://github.com/newsapps/flask-tarbell/
[tarbelldocs]: https://github.com/newsapps/flask-tarbell/blob/0.9-beta6/tarbell/docs/build.rst#anatomy-of-a-project-directory
[jekyllrb]: http://jekyllrb.com/

[nprvisuals]: http://blog.apps.npr.org/
[chinewsapps]:  http://blog.apps.chicagotribune.com/

[id]: http://example.com/  "Optional Title Here"
[twitter]: http://twitter.com/phillipadsmith "Phillip Smith on Twitter"
[srccon]: http://srccon.org/ "SRCCON is a conference for developers, interactive designers, and other people who love to code in and near newsrooms."
[staticsitegenerators]: http://staticsitegenerators.net/ "A comprehensive list of static site generation tools"
