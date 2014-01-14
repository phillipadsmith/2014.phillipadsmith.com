---
layout: post
title: 'Beautiful Trouble online toolkit update: Rebooting for the June 1st launch.'
date: '2012-05-02 11:09:00 -0500'
mt_id: 2821
---

<img src="http://beautifultrouble.org/ui/img/h/Beautiful_Trouble_Book_Cover.png" style="float: right;margin: 0 0 10px 10px;" />

In the spirit of trying to [introduce a bit more "open" into my work](http://www.phillipadsmith.com/2012/04/reflecting-on-the-transformational-power-of-open.html), I'm going to try to post more frequent updates about the project I'm working on, the challenges I'm facing in those projects, and the eventual solutions.

Back in February, [I wrote about the idea of producing a Web site for Beautiful Trouble that would be completely powered by Google Docs](http://www.phillipadsmith.com/2012/02/beautiful-trouble-quick-update-on-building-a-google-docs-powered-toolkit-for-revolution.html). The idea is sound, and I built a prototype of a "CMS without a CMS" whereby adding documents to a Google Docs collection would output them as pages or posts on a front-end Web site. Think of it as a thin layer between a Web site and Google Docs, but without the need to log-in to anything resembling a CMS. Like so may things these days, the focus was minimalism and simplicity.

Unfortunately, in terms of using it for Beautiful Trouble, I hit a serious road block: each "module" in the book is collection of various component parts -- the "document model," if you're familiar with that term, is very complex. For example, each module links to other modules, and also to practitioners and contributors, and also has various component parts -- epigraphs, insights, best & worst examples, and so on -- in addition to the main blob of text that makes up the "meat" of the module.

In the end, parsing the component parts out of unstructured Google Docs, which were not entirely consistent across the collection, looked like the wrong way to go because it would be neither "minimalist" nor "simple," and that seemed like a slippery slope to start going down.

So, I went back to the drawing board. The first step was re-evaluating the usual CMS suspects: Django, Drupal, Worpress, and -- my own personal favorite -- [Bricolage](http://bricolagecms.org). I've been building sites with Bricolage for more than eight years now, so it's always been a top contender when I'm starting a new project. However, it's a big system and the hosting requirements to run it are not insignificant, so I wanted to take a closer look at how the others handled complex documents these days, e.g., how far along as Drupal's CCK module has come, how easy would it be to build these complex documents in Django, etc.

I'll skip the blow-by-blow and simply say that the top three requirements were: familiarity and ease of use for the editors, inexpensive and uncomplicated hosting, and the ability to create complex documents with many component parts. To my own surprise, Wordpress emerged as the most obvious choice.

I haven't developed with Wordpress in years, so I was a bit reluctant to go down that road at first. But the developer documentation is surprisingly thorough and there are abundant resources on the Web that cover almost every possible customization. Specifically, I was looking to set up custom posts types for each of the types of content that are in the book (Theories, Principles, Tactics, Case Studies, Practitioners, and Contributors), and to display the right custom fields on the right edit pages. Both were easily accomplished, thanks to some straightforward [theme functions](http://codex.wordpress.org/Post_Types) and the impressive [Advanced Custom Fields](http://www.advancedcustomfields.com/) module.

I walked Andrew and Dave [through the edit screens](https://docs.google.com/presentation/d/1Cc_v6auYQ8a1U8LfFiOA9Ox1FtcgjGdLIrjpW42m65w/edit) yesterday and they seemed encouraged by the familiarity of the interface and the straightforward ways that content can be entered on each screen. We're not past the finish line yet, but it now feels like we're running on the right track.

More updates to follow...

_By the way, [we're looking for a Web intern](http://blog.beautifultrouble.org/2012/04/26/activist-toolkit-project-looking-for-a-web-intern-and-an-editorialpromotions-intern/), should you happen to be looking for a radically awesome part-time project this summer. :)_
