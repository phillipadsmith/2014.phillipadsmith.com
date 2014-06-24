---
layout: post
title:   'Weekend reading: Backbone.js'
dek:   Two quick backbone.js book reviews
summary:         # 140 characters or less!
img_opt: 'inline'                                        # Options: 'cover' or 'inlne' or 'none'
img_sml: '/files/books_backbone_sml.png'                          # Default on cover or inline
img_med: '/files/books_backbone_med.png'                          # 640x512px cover, inline
img_lrg: '/files/books_backbone_lrg.png'                          # 800x640px cover, inline
img_alt: ''                                             # Alt for inline
img_caption: ''                                         # Caption for either
img_url: ''                                             # URL to original image
category: coding                                        # Just one of the 4xCs
tags:                                                   # E.g., frontpage
- javascript
- backbonejs
- books
---


With several hours of road between Vancouver and [Tofino][tofino], not to mention a couple of ferry boat journeys, I threw two recently published books into my "offline book bag" and started reading.
{: .lead}

In the few moments when I wasn't out on a boat, getting sunburnt, or watching whales off the majestic coast of B.C. this past weekend, I was hiding out with an espresso and my iPad taking furious notes on everyone's favourite JavaScript library, [Backbone.js][backbone].

Though Backbone has been around for almost four years now, it only reached 1.0 status -- typically a release that developers consider to be stable enough to  support for a while -- around this time last year. 

As I sat down and sketched out a couple of projects on the horizon that would need to facilitate a fair amount of user interaction with data, I realized that it was time to do some catch-up reading…

## Developing a Backbone.js Edge

Many years ago, I made one of the best investments of my business life: A subscription to [Safari Books Online][safari]. I believe that I get a big return on investment for the $400 that it costs each year -- basically, every technical book under the sun at my fingertips. And thanks to the "offline book bag" feature, I can load up the iPad version of the app with my current reading list for Internet-free enjoyment.

The first book I read was by _[Developing a Backbone.js Edge][backboneedge]_ Bleeding Edge Press (one of the nice things about [Safari Online Books][safari] is that they've got agreements with just about every publisher in the technology books space). 

_Developing a Backbone.js Edge_ was a quick read. It covered all of the basics of the library without going into too much detail. Definitely a better starting point than the Backbone documentation for those not familiar with the basic concepts that separate this library from other JavaScript frameworks. 

The example app that this book steps through builds on the Github API, which is a nice demonstration of the Backbone approach to working with RESTful resources. This book also explains how to use technologies like [localstorage][localstorage] to reduce the HTTP requests or to keep apps responsive in low-bandwidth situations (like ferry boats!).

It was a solid read, but left me wanting more.

## Beginning Backbone.js

The other book I had in my offline book bag was _[Beginning Backbone.js][beginningbackbone]_, published by Apress. This book was published eight months after _[Developing a Backbone.js Edge][backboneedge]_, also roughly eight months after the 1.0 release, is about twice is long, and already has some high ratings from reviewers.  

Though it covered a lot of the same terrain, this book was particularly well organized and aimed at connecting the Backbone concepts to other familiar patterns in software and Web development. I finished reading it feeling like I had a fuller understanding of where Backbone is positioned in the field of similar library and framework options, and where to go next in terms of the Backbone ecosystem of extensions or with related projects like [Marionette][marionette]. 

This book also introduced topics like testing, pre-processing, and so on, but at the end of the book which made more sense to me. The section on best practices, as well as the one on manageable code, where both useful additions. 

Both books skim across the concept of test-driven development. As mentioned, given that its something people are likely already doing or unlikely to start doing based on one of these books, I preferred it left until after some "meat" had been put on the bones. _[Beginning Backbone.js][beginningbackbone]_, however, provided a more thorough overview of testing in JavaScript, including practical sections on creating mock objects and fake servers using [Sinon.JS](http://sinonjs.org/).

The complete app example in this book -- a Twitter-based application -- similarly takes a journey through RESTful concepts, as well as more contemporary example of using [localstorage][localstorage], and then continues to demonstrate how to evolve the application to use Marionette, Thorax, and even RequireJS. Seeing the relationship between Backbone and other libraries and was the real learning in this book for me.

## Backbone patterns

There are lots of great resources online for Backbone.js: from the [project's own documentation][backbone] to [tutorials][backbonetuts]. Probably enough to keep even a ravenous reader going for days, in fact. 

However, the one resource that I found the most exceptionally useful was: [Backbone patterns](http://ricostacruz.com/backbone-patterns/). Specifically, the sections on:

* Conventions: naming, namespaces, and so on.
* Anti-patterns: how to play nice with jQuery and more.

So, there you go, two quick book reviews. Enjoy. 

And, while we're here, let me ask: What are your favourite reads or resources on Backbone.js? Drop them in the comments or send me a note on [Twitter][phillipadsmith].

[tofino]:[https://en.wikipedia.org/wiki/Tofino]
[safari]:[http://www.safaribooksonline.com/]
[backboneedge]:[http://www.amazon.com/gp/product/B00CBP7N3O/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00CBP7N3O&linkCode=as2&tag=phillipadsmit-20&linkId=6CBTGUWGBPLBYOGN]
[localstorage]:[http://diveintohtml5.info/storage.html]
[beginningbackbone]:[http://www.amazon.com/gp/product/1430263342/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1430263342&linkCode=as2&tag=phillipadsmit-20&linkId=OBDQOHTRSAUIYALC]
[backbone]:[http://backbonejs.org/]
[marionette]:[http://marionettejs.com/]
[backbonetuts]:[https://github.com/jashkenas/backbone/wiki/Tutorials,-blog-posts-and-example-sites]
[phillipadsmith]:[http://twitter.com/phillipadsmith]
 
