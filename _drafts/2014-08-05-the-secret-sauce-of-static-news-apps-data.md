---
layout: post
title: "Data is the secret sauce of static news apps"
date: 2014-08-05 09:20:48 # This is used in place of the filename
files_url: /files/2014/08/05/the-secret-sauce-of-static-news-apps:-data/
dek:  How to give your static app that powerful wasabi kick
summary: # 140 characters or less!
img_opt: 'cover'                                        # Options: 'cover' or 'inlne' or 'none'
img_sml: '/files/2014/08/05/the-secret-sauce-of-static-news-apps:-data/320x256.jpg'                          # Default on cover or inline
img_med: '/files/2014/08/05/the-secret-sauce-of-static-news-apps:-data/640x512.jpg'                          # 640x512px cover, inline
img_lrg: '/files/2014/08/05/the-secret-sauce-of-static-news-apps:-data/800x640.jpg'                          # 800x640px cover, inline
img_xlg: '/files/2014/08/05/the-secret-sauce-of-static-news-apps:-data/1200x960.jpg'                         # 1200x960px cover only
img_alt: ''                                             # Alt for inline
img_caption: ''                                         # Caption for either
img_url: ''                                             # URL to original image
category: coding                                        # Just one of the 4xCs
tags:                                                   # E.g., frontpage
- frontpage
---
Many might think that static site generation concepts can only be applied when developing exceedingly simple news applications. However, nothing could be further from the truth: static site development patterns provide several hooks that allow both content creators and content consumers to enjoy a rich "Web app"-like experience, while still meeting the [architectural requirements of being scaleable, fast, and cheap][staticappseries].
 {: .lead}

The secret "back-end" sauce that make [static site generators][staticsitegenerators] so practical and exciting is compile-time data access: the ability to consume data from a variety of sources and to emit that data at various points during the process of site generation. This is how static apps free themselves from the shackles of a database.

The not-so-secret sauce that can transform a relatively static news app into something even more interactive -- at times approaching the experience of a "full stack" Web app -- is the addition of client-side data access.

Put together, these two opportunities for accessing data create a killer recipe for a static news app. We're going to explore both of these ideas a bit more today.

## Why data matters
So, what's all this talk about "data" in static apps? If you're less familiar with the concept, there are two big roles that data typically provides in a static news app: 

* **Editorial workflow**: Letting non-technical users provide content -- copy, images, links, etc. -- in a way that is more familiar to them, and that stays out of the way of your development workflow.

* **Apps that update themselves**: Thinking through typical news app scenarios -- crime, budgets, public officials, etc. -- it's likely that newer information will be available over time. Data lets that information get updated without much hassle.

Like any well-designed app, it's helpful if there's a separation of concerns and static apps try to implement that pattern using data, templates, and generators.

## Getting data from spreadsheets
Let's start with our two usual suspects, [NPR's static app template][nprtemplate] and the Chicago Tribune's [Tarbell][tarbell] project. 

NPR's app template provides two out-of-the-box ways of accessing data: [using a Google Spreadsheet as a simple key/value store](https://github.com/nprapps/app-template/blob/master/PROJECT_README.md#copy-editing) and [downloading a Google Spreadsheets and converting it to a CSV file](https://github.com/nprapps/app-template/blob/master/PROJECT_README.md#arbitrary-google-docs).

Quoting from the [Tarbell](http://tarbell.readthedocs.org/en/0.9-beta6/build.html#using-context-variables) documentation: 

> "data can come from Google spreadsheets, a local or remote CSV or Excel file, or tarbell_config.py’s DEFAULT_CONTEXT." 

The last part about `DEFAULT_CONTEXT` just means that the app will read data from its configuration file, which is fairly standard stuff.

Another group that is following the "showing your code" mantra, and also building editorial news apps using a [static site generator][middleman], is the [product team at Vox Media][voxproduct]. Taking a quick look at their template for the [Verge 50](https://github.com/voxmedia/verge-50), we can see that they're also using a Google Spreadsheet to provide data to one of their recent [editorial apps](http://www.theverge.com/a/the-verge-50).

## Using local data files
One of the ways of getting data into a static app that excites me the most is local data files. Though some will say that local data files are not as easy to edit for non-technical folks, I believe that is a challenge already on route to being solved.

One of the advantages of local data files in my experience is the opportunity to `git commit -am` all of them along with the app itself, making the project somewhat self-contained and not reliant on an external service for copy editing.

Both [Jekyll][jekyllrb], which I've talked about before, and [Middleman][middleman] -- the virtually identical static site generator used in the Vox Product example -- "allow you to create .yml, .yaml or .json files in a folder called data, and makes this information available in your templates." Mind-blowing implications, no?

Jekyll takes this concept further with it's new [collections feature](http://jekyllrb.com/docs/collections/), which combines the concept of a file that provides data to the app, with the convenience of using a standard markdown-formatted file that provides a large amounts of easily-editable text. 

It's probably easiest to think about this like a collection of book or music reviews, where each review is kept in a `_reviews/great_review.md` file, and where that file contains both structured data (album name, tracks, ratings, etc.) and unstructured text (the review itself). Useful, when you think about it!

## Where data can be used
Now that there's lots of data available to the app at the point where it's going to be generating static files, that data can be used in all sorts of interesting ways. 

For example, with [Tarbell](http://tarbell.readthedocs.org/en/0.9-beta6/build.html#where-can-context-variables-be-used), "variables can be used in HTML, CSS, and Javascript files." And, with Jekyll, data can be use "anywhere that has front matter," which is just a fancy way for saying any file that has some standard markers at the top, including HTML, markdown, CSS, JavaScript and even other data files.

This is an incredibly powerful feature when you think about it. It enables you to store data once that you can use over-and-over again in your templates or other files (DRY!), and to set site-specific options outside of a project's configuration file.

Combining this technique with a dynamic stylesheet language, like Less or Sass, could make it easy to create quickly-adjustable "themes" in a static news app template. Or one could use it with JavaScript in any number of interesting ways, like providing an initial data set directly, thus avoiding the need to request and parse it from somewhere when the page or app is first loading.

## Accessing external data from the client
Last but not least, as I'm sure is obvious to most readers here, once your static news app is deployed to a user-accessible location -- [either a server, or S3 buckets, or what-have-you](http://phillipadsmith.com/2014/07/deploying-your-static-news-app-like-a-samurai.html) -- there's all kinds of modern-day client-side Web magic available to take advantage of.

Several earlier and pioneering efforts at static news app development explored the client-side approach even for the "copy" data -- the text, images, and other information that actually constitutes the useful bits of the app. They did this using tools like [Tabletop.js][tabletopjs] at first. However, Google Docs proved to be at time unreliable and at time a black box, which lead to work arounds like [Flatware](https://github.com/jsoma/flatware). 

I think most have decided, for a number of reasons -- scale, reliability, SEO, etc. -- that having the content and copy "baked" right into the app makes the most sense.

What's exciting to think about these days is the opportunity to "bake-in" the basic experience, and then layer on top additional data or interactivity with client-side techniques. This can be done using any number of well-known libraries, patterns, and approaches, and a limitless and growing stable of data sources JSON, CSV, AJAX/J/H, etc.

## Where this all leads
There are so many new options these days that it's impossible to mention them all in the context of this post -- but, as new services and products like [Deployed](http://deployd.com/) become available, I can't help but think of the growing number of ways to get up-and-running quickly with a static news app that is also able authenticate a user and create/read/update/delete data from an very simple data store. Just think of the possibilities!

If you have thoughts on the above – examples of other approaches, corrections, tricks, or just opinions – please add them in the comments or drop me a line on [Twitter][twitter].

If you’d like to be notified of the next post, just subscribe to the comments and I’ll post the link there.

[staticappseries]: http://phillipadsmith.com/2014/07/recipes-for-delicious-tasting-static-news-apps.html
[nprtemplate]: https://github.com/nprapps/app-template/
[nprtemplatedocs]: https://github.com/nprapps/app-template/blob/94181834dbf8bf3f4a4d955d899de787740d353d/PROJECT_README.md#whats-in-here
[localdevelopment]: http://phillipadsmith.com/2014/07/the-tao-of-static-news-app-development.html

[tarbell]:  https://github.com/newsapps/flask-tarbell/
[tarbelldocs]: https://github.com/newsapps/flask-tarbell/blob/0.9-beta6/tarbell/docs/build.rst#anatomy-of-a-project-directory
[jekyllrb]: http://jekyllrb.com/

[nprvisuals]: http://blog.apps.npr.org/
[chinewsapps]:  http://blog.apps.chicagotribune.com/

[twitter]: http://twitter.com/phillipadsmith "Phillip Smith on Twitter"
[staticsitegenerators]: http://staticsitegenerators.net/ "A comprehensive list of static site generation tools"
[middleman]: http://middlemanapp.com/
[voxproduct]: http://product.voxmedia.com/

[tabletopjs]: https://github.com/jsoma/tabletop
