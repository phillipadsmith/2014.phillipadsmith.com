---
layout: post
title: Investigating the Technology Underlying Top News Organizations
date: '2013-02-07 10:36:39 -0600'
mt_id: 2900
---
_Cross-posted from [PBS MediaShift Idea Lab](http://www.pbs.org/idealab/2013/02/investigating-the-technology-underlying-top-news-organizations036.html)_

<a href="http://www.pbs.org/idealab/assets_c/2013/02/DSCF0705-2926.html" onclick="window.open('http://www.pbs.org/idealab/assets_c/2013/02/DSCF0705-2926.html','popup','width=1024,height=680,scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=0,top=0'); return false"><img src="http://www.pbs.org/idealab/assets_c/2013/02/DSCF0705-thumb-500x332-2926.jpg" width="500" height="332" alt="Phillip Smith's personal &quot;technology stack&quot;" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

> "We Like Lists Because We Don't Want to Die" -- Umberto Eco

Ever since PBS MediaShift contacted me about contributing to their Idea Lab site again ([past posts here](http://www.pbs.org/idealab/psmith/)), I've been taking the opportunity to ponder a new "beat" of sorts, one that would be both interesting to read, and also a contribution in some way to the larger conversation about shifts that are underway in news, media, and technology. 

What I've decided to try is an experiment: a structured investigation into the technology behind some of the Web operations that are generally considered to be "top news organizations," something that I've been following casually for quite a while. The experiment is to see if I can bring some thoroughness to this line of investigation, and not simply cherry-pick the good technology stories that advance my own views. ([It's easy to discover](https://duckduckgo.com/?q=phillipadsmith+open+source+software) that I'm a shameless promoter of open-source software and open access.)

This will also be an investigation to explore the who, what, when, where, and why of news operations that are putting their money where their mouth is (or not). For example, do they claim to be in support of user privacy but [continue to quietly collect and share users' information](https://www.mozilla.org/en-US/collusion/)? Do they promote their use of open-source stacks for news application development but run proprietary software to handle day-to-day workflow and content management needs, and -- more generally -- where do these news organizations fall on a range of technology choices like Web and e-mail service providers, analytics tools, commenting systems, and so on? Hopefully, the answers we find will be informative and useful to other news operations that are facing the same questions.

The first order of business, then, is to come up with an initial set of data to work with. A list of news organizations' Web sites, if you will, that we can peer into and glean some information.

### Building a list (or two)

As a starting point, I looked at lists of top news sites by traffic on the [Guardian UK](http://www.guardian.co.uk/news/datablog/2012/jun/22/website-visitor-statistics-nielsen-may-2012-google) as well as the [2012 report from the Nielsen Group]( http://blog.nielsen.com/nielsenwire/online_mobile/may-2012-top-u-s-web-brands-and-news-websites/) on "Top U.S. Web brands and news Web sites."

I also scanned a few other lists, which added sites like Mail Online, and then I removed aggregators and sites without much original content, specifically Yahoo News, Google News, Drudge Report, and Reddit.

The final list I plan to work with for "top news sites" is the following:

* [CNN Interactive](http://cnn.com)
* [The Huffington Post](http://huffingtonpost.com)
* [BBC News](http://bbc.co.uk/news/)
* [New York Times](http://nytimes.com)
* [FoxNews.com](http://foxnews.com)
* [The Guardian](http://guardian.co.uk)
* [The Times of India](http://timesofindia.indiatimes.com)
* [NBC News](http://nbcnews.com)
* [Forbes Magazine](http://forbes.com)
* [The Wall Street Journal Interactive Edition](http://online.wsj.com)
* [Reuters Group PLC](http://reuters.com)
* [Washington Post](http://washingtonpost.com)
* [USA Today](http://usatoday.com)
* [ABCNews.com](http://abcnews.go.com)
* [Bloomberg.com](http://bloomberg.com)
* [Examiner.com](http://examiner.com)
* [Chicago Tribune](http://www.chicagotribune.com/)
* [Mail Online](http://www.dailymail.co.uk.com/)

I also thought it would be fun to track some niche lists -- here are a couple that came immediately to mind:

The [Open News](http://www.mozillaopennews.org/) partner news organizations:

* Al Jazeera English
* BBC
* Boston Globe/Boston.com
* Guardian UK
* Zeit Online
* New York Times
* Spiegel Online
* ProPublica
* La Nacion


And a "[Semi-comprehensive list of newsrooms doing news applications](http://help.hackshackers.com/questions/semi-comprehensive-list-of-newsrooms-doing-news-applications/)":

* Associated Press
* Chicago Tribune 
* Cincinnati Enquirer
* CQ-Roll Call Group
* Dallas Morning News
* Los Angeles Times
* New York Times 
* ProPublica
* St. Petersburg Times
* The Texas Tribune
* Washington Post
* MSNBC.com

I have a few ideas for other collections of news sites to look at, e.g., Canadian news sites (because I'm a Canuck), online-only news operations (a personal passion), and perhaps the independent newsrooms that make up [The Media Consortium](http://www.themediaconsortium.org/our-members/) membership.

If you have some ideas for other list of news operations and news Web sites to investigate, please drop me a line (Twitter, or the comments here work nicely) or -- better yet -- [just edit the list in Google Spreadsheets directly](https://docs.google.com/spreadsheet/ccc?key=0AgZzmiG9MvT4dFVIWjI0Z0R3eHhKdkxDYVctME5lVnc).

### Where we go from here

I've asked the folks at [BuiltWith](http://builtwith.com/About/) -- a Web site profiler, competitive analysis, and business intelligence tool -- to help provide the basic information for this series. They've generously agreed to provide access to their API for the purpose of this column. Using BuiltWith, we'll have a look at the collections of sites above, explore what technology stacks they are using, and start digging for trends or interesting outliers.

From there, I hope to jump off and dig into the initiatives that aren't so easily compared such as the technology underlying these news organizations' mobile and tablet strategies, technical approaches to pay walls, authentication and identity management, and how each organization engages with readers, and so on.

Much of this information is outside the reach of  simple profiling tools, so -- when I hit those limits -- I'll do something very unnatural for a technically inclined person: I will pick up the phone and start asking questions. All that to say, when the phone rings and it's me on the other end of the line, I hope you'll take a moment to field my inquiries.

If there are specific questions that you have for your own news operations, which might be influenced by knowing how other organizations are approaching a specific technical challenge, please [drop me a line](http://twitter.com/phillipadsmith) or leave a comment below. I'd be encouraged to have some reader input on what questions are the most interesting to answer. 

Here we go.

_Cross-posted from [PBS MediaShift Idea Lab](http://www.pbs.org/idealab/2013/02/investigating-the-technology-underlying-top-news-organizations036.html). Have comments? Please post them on the [original post](http://www.pbs.org/idealab/2013/02/investigating-the-technology-underlying-top-news-organizations036.html)_
