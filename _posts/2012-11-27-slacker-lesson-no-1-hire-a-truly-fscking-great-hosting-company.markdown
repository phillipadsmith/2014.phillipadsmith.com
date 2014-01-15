---
layout: post
title: 'Slacker lesson No. 1: Hire a truly fscking great hosting company'
date: '2012-11-27 10:55:00 -0600'
category: coding
tags:
- hosting
mt_id: 2881
---
<a href="http://www.phillipadsmith.com/files/Screenshot%202012-11-27%2010%3A48%20AM.png"><img alt="Gossamer Threads" src="http://www.phillipadsmith.com/assets_c/2012/11/Screenshot 2012-11-27 10:48 AM-thumb-600x282-1499.png" width="600" height="282" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

It can be surprisingly difficult to find a really great hosting company. The reason is simple: if a hosting company is really, really great -- if nothing ever goes wrong -- you, your team, and your users forget they're there at all. But those who've been lucky enough to work with a really excellent hosting company know the value it can bring, especially if/when things do go wrong.

I was reminded of this earlier this month when we decided to migrate [The Tyee's](http://thetyee.ca) content-management system to a new server to improve performance, so I wanted to give credit where it's due and shine some light on the one and only hosting company that I've consistently recommended without hestitation since 2007, [Gossamer Threads](http://www.gossamer-threads.com/).

Server migrations at The Tyee are somewhat simplified by the fact that the content-management system, [BricolageCMS](http://bricolagecms.org), sits on an entirely separate server from the technologies that deliver content to users. Thus, it's possible to take the CMS offline without impacting the public-facing Web site. That said, The Tyee publishes many feature stories and blog posts each day and the CMS is constantly humming with users, and any extended downtime has a price in productivity.

The trick is, however, with more than 15,000 articles and many version of each -- the front page, for example, currently has more than 2000 versions saved -- the PostgreSQL database alone has grown to 40 GBs, and the other files that the CMS generates and stores, HTML pages, images, etc, add up to another 100 GB of data. 

No matter how you slice it, syncing that much data takes time, and _ideally_ you don't want contributors and editors making changes during that time.

The actual migration was a two-part process: first, a complete copy was made of the CMS data and database on the new server where I was able to work through a long list of tests for a week; second, the data and database needed to be re-synchronized and the IP address migrated to the new server.

With thanks to the (often unrecognized) team at [Gossamer Threads](http://www.gossamer-threads.com), we completed the second phase of the migration -- hitch-free and with less than four hours of downtime for CMS users (scheduled for 11PM Thursday night, so they were probably thanking us!) -- on November 10th. Last but not least, I set my alarm for early Friday morning to ensure that I was the first user logging into CMS on the new server: I repeated my tests, checked the cronjobs, and -- everything working -- I sent off a note to the editors at The Tyee _and went back to bed._

Slacker lesson No. 1: Hire a truly fscking great hosting company.
