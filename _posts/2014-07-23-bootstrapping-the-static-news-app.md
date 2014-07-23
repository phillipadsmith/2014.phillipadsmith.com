---
layout: post
title: "Bootstrapping the static news app"
date: 2014-07-23 08:45:45 # This is used in place of the filename
files_url: /files/2014/07/23/bootstrapping-the-static-news-app/
dek:     Exploring the patterns of the masters
summary: # 140 characters or less!
img_opt: 'cover'                                        # Options: 'cover' or 'inlne' or 'none'
img_sml: '/files/2014/07/23/bootstrapping-the-static-news-app/sushi_prep_sml.jpg'                          # Default on cover or inline
img_med: '/files/2014/07/23/bootstrapping-the-static-news-app/sushi_prep_med.jpg'                          # 640x512px cover, inline
img_lrg: '/files/2014/07/23/bootstrapping-the-static-news-app/sushi_prep_lrg.jpg'                          # 800x640px cover, inline
img_xlg: '/files/2014/07/23/bootstrapping-the-static-news-app/sushi_prep_xlg.jpg'                         # 1200x960px cover only
img_alt: ''                                             # Alt for inline
img_caption: ''                                         # Caption for either
img_url: ''                                             # URL to original image
category: coding                                        # Just one of the 4xCs
tags:                                                   # E.g., frontpage
- frontpage
- staticnewsapps
- newtechstacks
---

At the end of the day, [what makes for a great static news app toolchain](http://phillipadsmith.com/2014/07/recipes-for-delicious-tasting-static-news-apps.html)? To answer this question, I took a much closer look at what other news organizations are already doing in this space.
{: .lead}

The two obvious examples are the [NPR Visuals team][nprvisuals] and their [NPR static app template][nprtemplate], as well as the Chicago Tribune's [news apps team][chinewsapps] and their no-CMS CMS [Tarbell][tarbell]. Unpacking [the][nprtemplatedocs] [patterns][tarbelldocs] of those two open source projects, alongside my own experiences, presents a fairly clear picture of the component parts of the stack:

* Project bootstrapping
* Local development workflow
* Data access
* Staging & deployment
* Testing & continuous integration

Admittedly, the last item -- testing & continuous integration -- should come before deployment, but it appears to be the least "conceptually complete" part of the static app stack so far.

Luckily (for me!), I'm only going to look at project bootstrapping today, so we can return to testing and CI when I've had a bit more time to research and ponder. If you've got examples of great testing & CI approaches for static apps, drop them in the comments.

So, on to **bootstrapping!**

The get a project underway, there are typically a handful of concerns: installation of the libraries and modules required by the static app stack, project layout & source code repository creation, setting stack-specific configuration options and secrets, and a process for extending or building on existing templates or blueprints. 

Let's take those one at a time:

## Installing libraries & modules

I would put forward the theory that static apps in general are popular because of their simplicity. Even so, many static app generators require a fair bit of help from external modules and libraries to get underway. 

Chicago Tribune's Tarbell take a mostly self-contained approach, thus the user only needs to use Python's `pip` command to install Tarbell and its requirements. 

The NPR app template set-up is a bit more manual and requires Node and NPM to be installed to manage the static assets pipeline (compiling, compressing, and minifying resources). 

There are many different approaches that can be seen in the range of [static site generators][staticsitegenerators] out there.  You can pretty much pick-and-choose based on the features you're after and programming language you're most familiar with, and then replace Python's `pip install` with the equivalent of `gem install`, `npm install`, or `cpanm install` to download and install the required modules. 

Before installing these modules, it's important to think about how they're going to be managed going forward, both on a local development machine and when deployed (if any tooling is necessary during deployment). Both Tarbell and NPR's template work with virtual environments in Python, and there's an equivalent in most other languages, e.g., Ruby's [rbenv](https://github.com/sstephenson/rbenv) and [Bundler](http://bundler.io/) and Perl's [plenv](https://github.com/tokuhirom/plenv) and [Carton](https://github.com/miyagawa/carton). These tools are incredibly useful as your "collection" of static apps grow and their requirements start to drift apart.

## Project creation & scaffolding

Most static site generators, NPR's app template and Tarbell included, provide commands for initiating a project, e.g., `fab bootstrap` or `tarbell newproject` or `jekyll new`. What those commands actually do varies, as do the actual initialization steps, but the essential ingredients are: create a minimal set of files and directories (a project skeleton or scaffolding), configuring options, and possibly connecting a source code repository. 

In the NPR's app template, the user would manually `git clone` the template first. In the case of Tarbell, the user would be asked a few more questions. But at the end of this step, the user should be able to "start" or view a basic version of the project from which they can build on.

## Project-specific configuration options

Typically, the project initialization step will generate a configuration file (or one will have been included in the initial source code check out) that provides some "sensible defaults." At this point, it's usually up to the user to extend the configuration according to the project's specific requirements, e.g., staging and deployment targets, data sources, and so on.

In the case of Tarbell, some data can be passed into the project directly from the project's configuration file. This is true of other static site generators like [Jekyll][jekyllrb] also, and it's something that I'd like to explore a bit more in the future, i.e. specifically the opportunity to pass data into templates directly via configuration files.

## Templates or blueprints

Last but not least, no static app stack would be complete without templates to extend or build on top of. These templates can be as sparse as providing an example of a "page" and a "post," or extensive enough to provide a the building blocks for many different types of content, e.g., slides, maps, timelines, and so on. 

At minimum, these template folders typically contain boilerplate code for each page's "wrapper" elements (head, header, footer, etc) and a pattern for including various widgets for advertising, analytics, and common inner-page elements (sidebars, etc.). 

Each system's approach to working with templates is a little different: Tarbell's pages inherit or override the included blueprints; NPR app template pages extend from a base template; Jekyll projects can build on the provided layouts. 

Each of these areas of concern and approaches has a set of opinions about how things should be done. If you're not too opinionated yourself, you might be able to see a pattern above that works for you! If so, give it a try. 

When you're done bootstrapping your new projects, you should have the necessary components at your disposal to start adding pages and data to your project.

## Up next: local development

The next post will explore **local development:** specifically, the approaches to "serving" static projects locally, running common tasks, asset pipelines (compiling, compressing, and minification), and some of the project management commands provided by some of these tools.

Did I miss something? Drop me a note in the comments below, or find me on [Twitter][twitter]

Subscribe to the comments to be notified of upcoming posts. It all started [here](http://phillipadsmith.com/2014/07/recipes-for-delicious-tasting-static-news-apps.html) or [here](http://phillipadsmith.com/2014/01/the-return-of-static-site-generators.html). 


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





















