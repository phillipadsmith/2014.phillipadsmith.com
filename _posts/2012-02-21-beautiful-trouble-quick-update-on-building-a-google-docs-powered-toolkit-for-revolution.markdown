---
layout: post
title: 'Beautiful Trouble: Quick update on building a Google Docs-powered toolkit
  for revolution'
date: '2012-02-21 11:29:50 -0600'
category: convening
tags:
- frontpage
- beautifultrouble
mt_id: 2809
---

In late 2010 we embarked on a mission to bring more [Beautiful Trouble](http://beautifultrouble.org/) into the world. Over the course of the summer and fall last year, more than seventy contributors were pulled together to make the project a reality. The contributors were brought together physically, in New York, during several [book sprints](http://www.phillipadsmith.com/2011/06/a-beautiful-book-sprint-for-beautiful-trouble-tips-on-collaboratively-writing-a-book.html) and virtually from around the world thanks to the modern-day magic of the Internet and [Google Docs](http://docs.google.com).

In fact, Google Docs, for better and for worse, is "the medium" of this project: the project consists of more than 450 documents in total.

When it came time for our publisher, the innovative [OR Books](http://orbooks.com), to start their edit of the content, they happily obliged us and made their edits in Google Docs. The talented team at [The Public Society](http://thepublicsociety.com/) that are currently laying out the physical book also relied on Google Docs to bring content into their InDesign templates. We've used Google Docs for our weekly meeting minutes, for the growing list of practitioner profiles, for the resources that will be included in the book, and more -- in fact, a Google Spreadsheet is updating the list of contributors and their bios on the on the [beautifultrouble.org](http://beautifultrouble.org) site right now. During the book sprints, [we used the data in Google Docs to encourage a little friendly competition](http://www.flickr.com/photos/phillipadsmith/5825279911/).

Now comes the fun part: putting all of the book content online, into what we're calling an "evolving Web toolkit."

Last spring at [BarCamp News Innovation Philly](http://bcniphilly.com/), I had the opportunity to speak with [William P. Davis](https://twitter.com/#!/williampd) and to learn about how the [Bangor Daily News](http://bangordailynews.com/) was [using Google Docs as their newsroom content-management system](http://dev.bangordailynews.com/2011/06/13/bangor-daily-news-completes-final-switch-to-wordpress/). Their approach of using Google Doc "collections" (folders) to indicate the state of a document -- Editing, Published, etc. -- gave me inspiration to think about how we could continue to use Google Docs as a contributor-friendly editing environment for Beautiful Trouble too.

In the fall of 2011, Andrew and I met with Adam Hyde in Berlin, he's one of the brilliant people behind a technology for collaborating on book-type projects that was at that time called Booki, which has been recently re-released at [Booktype](http://www.sourcefabric.org/en/booktype/). We were too far along to seriously look at Booki for the Beautiful Trouble project, but it did give me some ideas about how the Web experience of a project like this can avoid being a copy of the static experience that exists as a book.

So, here's where things are today:

* I'm in a sprint to try and get the content online _before_ the book is published (woo-hoo, "digital first," I hope). One of my all-to-frequent gripes during the whole process was that the Beautiful Trouble team kept referring to the project as a "book." I'm keen to think [beyond the book](http://www.phillipadsmith.com/2011/06/code-meet-print-to-where-texts-meet-technology-and-context-comes-first.html) (hat tip to [Brian O'Leary](http://vimeo.com/20179653)) and to think about ways that the online experience of this content can be more than a snapshot of the book's content.

* I didn't take enough head of William P. Davis' comments about adding an easily parse-able structure to the Google Docs, nor did I fully appreciate how challenging it is to work through the tag soup that Google Docs produces when you export a document as HTML. I've explored exporting the documents as RTF and Open Document format -- neither is much better, to be honest. So, short of a major algorithmic epiphany, there are at least 145 finished modules that will need to have a _tiny_ bit more structure added to them before they can make their way online. (We did use templates, and they are quite structured, but they don't have an obvious "closing tag" that clearly demarcates the end of, say, a pull quote or the body.)

* The [(rather helpful) Perl module](https://metacpan.org/module/Net::Google::DocumentsList) that I'm using to search through Google Docs by collection and export them, along with their meta data, doesn't currently support the "changes feed" for documents -- i.e., notifications of when edits have been made -- so I'm pondering the Bangor Daily News approach of using collections to indicate that a document should be updated on the Web site, or writing a patch to provide access to the changes feed.

* The current plan is to avoid a content-management system entirely, and to simply build a thin interface to Google Docs that drives the Web version of the book's content, and all of content to come that you won't find in the book. This is still fairly conceptual in my head -- I'm still working through the document parsing at the moment -- so we'll see how that pans out. (Suggestions and links to other resources welcome.)

All that to say, there are lots of interesting puzzles that lay ahead in the quest to create an experience of the Beautiful Trouble content online. The publisher is going to produce the usual suspects for digital readers -- ePub, Kindle, PDF, and so on -- but one of the other questions we're asking ourselves is "are there other digital reading experiences that we can enable using only the Web?" To that end, we've been looking at projects like [Isotope](http://isotope.metafizzy.co/) for inspiration, and thinking about how the content might organize itself according to how the reader would like to explore it: for example, instead of reading from "front-to-back," instead sorting the content by practitioner, or by date, or by some other piece of meta data.

So, if you have some links or ideas that might provide us with even more inspiration, please send them along. The comments here, or Twitter, or Google+ or what-have-you all work.
