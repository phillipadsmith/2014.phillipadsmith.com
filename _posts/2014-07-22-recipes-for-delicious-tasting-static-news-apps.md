---
layout: post
title: "Recipes for delicious tasting static news apps"
date: 2014-07-22 09:23:48 # This is used in place of the filename
files_url: /files/2014/07/22/recipes-for-delicious-tasting-static-news-apps/
dek:     "Never bake again, go the raw route!"
summary: # 140 characters or less!
img_opt: 'cover'                                        # Options: 'cover' or 'inlne' or 'none'
img_sml: '/files/2014/07/22/recipes-for-delicious-tasting-static-news-apps/sushi_sml.jpg'                          # Default on cover or inline
img_med: '/files/2014/07/22/recipes-for-delicious-tasting-static-news-apps/sushi_med.jpg'                          # 640x512px cover, inline
img_lrg: '/files/2014/07/22/recipes-for-delicious-tasting-static-news-apps/sushi_lrg.jpg'                          # 800x640px cover, inline
img_xlg: '/files/2014/07/22/recipes-for-delicious-tasting-static-news-apps/sushi_xlg.jpg'                         # 1200x960px cover only
img_alt: 'Preparing Sushi Salmon'                                             # Alt for inline
img_caption: 'Preparing Sushi Salmon is like preparing a static news app'                                         # Caption for either
img_url: 'https://www.flickr.com/photos/chrisada/13916577767'                                             # URL to original image
category: coding                                        # Just one of the 4xCs
tags:                                                   # E.g., frontpage
- frontpage
- staticnewsapps
- newstechstacks
---
_The following is adapted from a session idea submitted to [SRCCON][srccon]._

The "iron triangle" of the ideal news app could be described as: scalable, fast, and cheap. As the saying goes "pick two."  
{: .lead}

News apps should be inexpensive to deploy, respond quickly to user interaction, and scale to handle large volumes of traffic. However, trade-offs make it hard to achieve news app nirvana.  

In the past, news app teams have developed specialized tools to ["bake out" their dynamic, database-driven applications](http://datadesk.latimes.com/posts/2012/03/introducing-django-bakery/) or have gone down the path of [learning the ins-and-outs of the latest-and-greatest caching technology](http://www.propublica.org/nerds/item/our-news-app-tech) -- oh, the horror!

Fear not, dear reader, there is a way to have the dream of scalable, fast, and cheap: the static news app!

NPR and others have been making impressive headway on static apps over the last couple of years: For example, the NPR Visuals team has developed a "[opinionated project template for client-side apps](http://blog.apps.npr.org/2013/02/14/app-template-redux.html)" and  the News Apps team at the Chicago Tribune developed a "very simple content management system" called [Tarbell](http://tarbell.readthedocs.org/en/0.9-beta6/). Both result in apps that consist of a nice simple, static "stack" that uses -- almost exclusively -- just HTML, CSS, and JavaScript to deliver the final news app experience, i.e., Look Ma No Database!

The question remains, is there room to take these ideas further, while at the same time aiming to simplify, simplify, simplify? And, with [so many "static site generators" already out there][staticsitegenerators], is it always necessary to develop something new and specific to the needs of your newsroom? 

The answer is a definite **maybe**.

Over  the next few posts, I'm hoping to explore:

* The magic behind some of the existing static news app tools and templates
* A list of the "minimum viable ingredients" that are typically necessary to make your own static news app architecture
* Guiding principles to think about when making the buy vs. borrow vs. build decision

More technically, I'll try to dig into the  [common architectural patterns](http://www.staticapps.org/) that static news apps will need to consider. For example:

* Everything is a service: thinking about design of static apps & data wrangling
* Preprocessors, build tools, generators, scaffolding, etc. 
* Back-end services & options for client-side storage 
* Authentication & authorization in a static app:  Dave Winer's developed a great example recently that I'd like to look at.
* Error handling, logging, and notifications
* CORS, CSRF, XSS and other security concerns for static apps  

Ideally, you'll arrive here a baker, and leave a sushi chef!   

If you have experience with building scalable, fast, and cheap static news apps, please subscribe to the comments below (I'll pop a note there as new post go up) and leave a note with your thoughts (or drop me a line on [Twitter][twitter]).

[id]: http://example.com/  "Optional Title Here"
[twitter]: http://twitter.com/phillipadsmith "Phillip Smith on Twitter"
[srccon]: http://srccon.org/ "SRCCON is a conference for developers, interactive designers, and other people who love to code in and near newsrooms."
[staticsitegenerators]: http://staticsitegenerators.net/ "A comprehensive list of static site generation tools"
