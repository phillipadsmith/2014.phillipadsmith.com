---
layout: post
date: "2015-12-14 9:00:00"
dek: "Reinventing the newsroom content-management system: What would Google do?"
summary: ""
category: commentary
crosspost_to_medium: true
tags: 
  - frontpage
  - google
  - googlenewslab
  - cms
  - contentmanagementsystem
img_opt: cover
img_sml: "/files/the_google_cms_xlg.jpg"
img_med: "/files/the_google_cms_xlg.jpg"
img_lrg: "/files/the_google_cms_xlg.jpg"
img_xlg: "/files/the_google_cms_xlg.jpg"
img_alt: ""
img_caption: ""
img_url: ""
title: The Google CMS
---
Many newsrooms already rely on Google Sheets, Docs, Maps, and Tables to power an increasing array of news interactives and micro sites. The business side of publishing has long relied on products like DoubleClick for Publishers, AdSense, Analytics and First Click Free. As new [products for monetization][consumersurveys] and [speed][amp] are introduced, it begs the question: why not go all the way and reinvent the CMS?
{: .lead}

Google products already make up a significant part of the mechanics of modern-day storytelling in many newsrooms around the world, thanks to projects like [Tarbell](http://www.tarbell.io/) and tools like [Timeline.js](http://timeline.knightlab.com/). What newsroom has not experimented with a Google Sheet-powered interactive in the last few years? And what editor would prefer to work in Word, when Google Docs can solve so many collaboration challenges?

However, these almost magical Docs and Sheets are not without their shortcomings, as evidenced by the list of projects that have been developed in newsrooms just to address them, for example: 

* We all love [Tabletop.js](https://github.com/jsoma/tabletop) for giving our spreadsheets legs, and yet the need for a [caches](https://github.com/jsoma/flatware), [proxies](https://github.com/MinnPost/gs-proxy) and [conversion services](https://newsdev.github.io/driveshaft/) is well documented;

* [Doctop.js](https://github.com/times/doctop) is similarly genius, and yet it needs to [jump through some serious hoops](https://github.com/times/doctop#preserveformatting-default-true) to deliver clean, structured data;

* To solve that problem, the NYTimes developed and released [ArchieML](http://archieml.org/) -- a light-weight markup that can be used in Google Docs to denote keys and values -- and one has to wonder if that would be necessary if Docs simply supported input fields like a "fillable form" in Word documents, or forms in PDFs?

This last feature alone would likely catapult Docs to the top spot in the Web-content editing race — well ahead of Wordpress and Medium’s editing environments. Clearly, the "I want this" is demonstrated, and the pain with existing solutions is well documented.

## Five years later, little major progress has been made
Newsrooms have been innovating on top of Google Drive for several years now. [As early as 2011 the Bangor Daily News was experimenting with using Docs as a key part of their digital _and_ print workflow](http://www.adweek.com/fishbowlny/how-to-run-a-news-site-and-newspaper-using-wordpress-and-google-docs/245737?red=kw). Once implemented, staff could simply drag & drop Docs into folders and have them appear in their CMS -- complete with comments -- ready to be published to the Web and flowed into print layout programs. Some years later, BDN also introduced a [story budgeting tool build on the Google Drive API, as well as Google Docs integration within their CMS](http://dev.bangordailynews.com/2013/08/28/google-drive-to-wordpress-to-indesign-refined/).

Inspired by the Bangor Daily News, [I personally tried to shorten path required to edit and publish content for the Beautiful Trouble project from several steps to just one](http://phillipadsmith.com/2012/02/beautiful-trouble-quick-update-on-building-a-google-docs-powered-toolkit-for-revolution.html): mark the Google Doc as "published" in the Google Doc itself -- essentially elliminating the need for the CMS all together. I didn't get us quite there at the time, because tools like Doctop and ArchieML were still several years away.

A few years later, however, [we are taking another run at the idea with Beautiful Rising](https://github.com/BeautifulTrouble/google-docs-etl#google-docs-etl): using Google Docs + ArchieML to provide the content and configuration, Goole Drive folders as the user interface, a small application that loads the documents and listens for changes, and an API that provides a consistent way to access the documents and configurations across a variety of platforms. We are working toward an experience where editors and contributors never need to leave Google Drive & Docs to develop, manage, and publish content across Web, mobile, and messaging channels.

Though progress has been slow, I believe that a Google-powered CMS is not only within reach, but most likely inevitable. It's just a question of who builds it.

## Dizzying array of products & APIs
What’s also become more evident to me over the last several weeks is that many publisher are not able to keep up with all of the newsroom-relevant products that Google offers. For example, take this quick quiz... Did you know that Google offers:

* A powerful [sign-on service](https://developers.google.com/identity/), making user registration easy on the Web, iOS, and Android?

* A flexible [pattern matching and machine learning system](https://cloud.google.com/prediction/docs/getting-started), making it possible to look at a user’s past viewing habits, to predict what other articles that user might like.

* [Push notifications](https://developers.google.com/cloud-messaging/) to Chrome desktop & Android, making it easier to re-engage and retain users? 

* [Several options](https://cloud.google.com/) for running your _entire infrastructure_ in the cloud, including NoSQL, SQL, and realtime options?

* A [suite of solutions](https://www.google.com/admob/platform.html) to help monitor, engage, and transact with mobile app users on iOS and Android?

* [An easy to use interactive tool for large-scale data exploration, analysis, and visualization](https://cloud.google.com/datalab/)?

* A way to use [special markup in your transactional e-mails](https://developers.google.com/gmail/markup/overview) to your audience to make it easier for them to take actions from within Gmail? 

* And [many more libraries, tools, solutions, and APIs](https://developers.google.com/products/) that address challenges that news publishers face every day?

How did you score? How would your fellow newsroom developers or senior technical colleagues score? In my experience, the ecosystem of tooling is changing so quickly that it's challenging for all but the largest news organizations to keep abreast of what's avaialble. Initiatives like the [Google News Lab](https://newslab.withgoogle.com/) are working to address that challenge, and yet the [focus is still on a very narrow set of products](https://newslab.withgoogle.com/tools).

## The Google CMS: A modern-day, predictive CMS
Looking beyond simple "hacks" and extensions of Google Drive, Docs, and Sheets, I believe that a flexible, modular CMS product by Google could be so much more than just a content publishing engine. Imagine the opportunities for example:

* To plug-in Google Trends data to provide editors & reporters with realtime data on search terms relevant to their obsessions.

* To provide article or series-level analytics right _in_ the CMS interface.

* To put the [power of Google Docs realtime collaborative editing](https://developers.google.com/google-apps/realtime/overview) into other aspects of the CMS, not just the content input box.

* To preview and output "furiously fast & compelling content" in the new [AMP HTML](https://www.ampproject.org/) format automatically.

* Or using the [Places API](https://developers.google.com/places/) to automatically correct and tag over 100 million interesting places around the wold; or to have the ability to [add and test structured data](https://developers.google.com/structured-data/) right within the CMS.

* How about Google search across the newsrooms' entire photo, video, or archived content library?

Sure, it would be possible today to shoe-horn these services into existing content-management products — but where’s the fun in that!? Isn’t reinvention just that much more fun? :-)

If you’re using Google services in your CMS today, I’d really like to hear about it. Perhaps pop a note in the comments below, or drop me a quick line on [Twitter](http://twitter.com/phillipadsmith).

[consumersurveys]: https://www.google.com/insights/consumersurveys/home
[amp]: https://www.ampproject.org/
