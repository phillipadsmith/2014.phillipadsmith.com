---
layout: post
published: false
title: ""
category: coding
img_opt: inline
dek: "Building an open-data app for soccer families at #VODday"
summary: Quick recap of the Vancouver open data day hackathon
tags: 
  - frontpage
  - hackathon
  - productdev
img_alt: "Team 604-670-SCCR hard at work."
img_caption: "Team 604-670-SCCR hard at work."
img_sml: "/files/Data_BC_2015-Feb-21.jpg"
img_med: "/files/Data_BC_2015-Feb-21.jpg"
img_lrg: "/files/Data_BC_2015-Feb-21.jpg"
img_xlg: "/files/Data_BC_2015-Feb-21.jpg"
---

When we arrived at the Vancouver open data day hackathon, we had a great team and a fuzzy idea. When we left more than twelve hours later, we had a great prototype and a fuzzy team. The [hackathon lessons](http://phillipadsmith.com/2014/12/putting-mediaincontext-making-software.html) stayed consistent: TK minimum viable product, get lots of feedback from people in the room, focus on solving a real-world problem (and just one!). 
{: .lead}

The morning kicked off with an welcome from [OpenDataBC director, Gillan Vrooman](https://twitter.com/gndv) and an energetic pep talk from open-data advocate, [David Eaves](http://eaves.ca/about-david/). Eaves, dressed in hack-day chic hoodie, jeans, nerd-tastic spec and runners, encouraged participants to focus on real-world problem not just available data, and to talk openly about failures (and did so with surprising enthusiasm, given the early hour). 

From there, it was a standard hack-day agenda: pitch ideas, form teams, build some prototypes. Teams presented their projects at 8PM to a panel of impressively-attentive (and patient!) judges: [Councillor Andrea Reimer, City of Vancouver](http://vancouver.ca/your-government/andrea-reimer.aspx), [Bob Nakagawa](http://ca.linkedin.com/pub/bob-nakagawa/13/442/682/en), [Ed Levinson](http://ca.linkedin.com/in/edlevinson/en), [Claire Atkin](http://ca.linkedin.com/pub/claire-atkin/57/962/b35/en), [Adam Lerner](http://ca.linkedin.com/in/adamler/en) and [Brittany Zenger](https://www.linkedin.com/in/bzenger).

By 10:30PM that day, our hackathon team -- [Geoff D'auria](http://ca.linkedin.com/pub/geoff-d-auria/1/427/699), [Hugh Stimson](http://geocology.ca/), and yours truly -- were comfortably situated at a nearby bar drinking away our prize winnings (#HumbleBrag) and telling open-data war stories.

## The problem we set out to solve
[As described last week](http://phillipadsmith.com/2015/02/open-data-s-uneven-field.html), we decided to focus our efforts on busy soccer dads and moms in and around Vancouver. Conservatively speaking, this is upwards of 100,000 people in the lower mainland alone (multiple leagues, multiple divisions in each league, boys and girls, more than 10 municipalities, etc.). And this is just one sport.

The first use case is: You wake up and its raining out (no so uncommon in this parts). You need to know quickly -- before you start getting the kids ready -- "is the soccer even field open today?"

The secondary use case is to provide parents, coaches, referees, and league officials with essential information while on route to the field, e.g., You’re in the car, or running out the door, and it's too late or too cumbersome to Google around.

Unfortunately for a busy parent, there's no comprehensive resource for playing field information across lower mainland.  The information is on municipal websites but teams play across municipalities. Additionally:

*	Fields close all the time, but there's no single place to find that information for all possible fields;
* Playing field information is often not consistent across sites; 
* Parents need coffee after dropping kids at games (45 minutes early) but aren’t familiar with away field neighbourhoods;
* Coaches are required to know the location of closest hospital. 

## The solution: 604-670-SCCR
In the end, we decided to build an SMS app. We chose SMS for its  simplicity and convenience to end-users, as well as Geoff's direct observations as an assistant soccer coach that SMS is key to how recreational sports fans communicate. Many are not yet heavy users of Twitter and other similar service.

The application is quite straightforward. For the first use case above: you text 604-670-SCCR (7227) the name of a field or park and it tells you the status. For the second: you text 604-670-SCCR (7227) COFFEE, HOSPITALS, or SKY and it replies with the closest coffee shops, hospitals, and minute-by-minute weather for the next hour. Plans are in the works to add the ZEN and GIF commands.

To pull this off in just a handful of hours on a surprisingly sunny Saturday in Vancouver, we:

* Aggregated open data from City of Vancouver (parks, fields, etc.), DataBC (hospitals), and Open Street Maps (coffee shops); 
* [Geoff](http://ca.linkedin.com/pub/geoff-d-auria/1/427/699) wrangled much of the park and field information into a [Google Spreadsheet](https://docs.google.com/spreadsheets/d/172HoOQDKJaIMr930fugUK4GkxkzxR3mV3C3zJ0ruGeY/edit?usp=sharing);
* [Hugh](http://geocology.ca/) loaded the coffee shops and hospitals into [CartoDB](https://cartodb.com/) and whipped up some fancy spatial SQL queries to sort by distance from the park;
* After they'd done all the hard work, I wrapped all of that data goodness into a [single-file application](https://github.com/phillipadsmith/field-notes-lite) that leveraged [Twilio](http://twilio.com/) to easily received and responded to users' SMS messages.

Now that's teamwork! :)

## Greater potential 
The potential for a product like this seem surprisingly large. Beyond youth soccer, this same approach could be expanded to all recreational soccer -- that would be a market several times larger than just the youth leagues. If this was expanded to cover other sports leagues, it would be a very, very large market indeed.

[As I mused last week](http://phillipadsmith.com/2015/02/open-data-s-uneven-field.html), there's an opportunity here to solve a surprising hairball of a data problem: pulling together geographic information about fields, parks as well as their condition, across many municipalities and parks boards, not to mention the challenge ahead of incorporating information about divisions, teams, and game schedules. We could probably have a hack day every Sunday for the next few months without running out of ideas to work on...

I gave the team today the last couple of days off. We'll see if they can be rallied again next weekend. :)

A special thanks to the mentors who provided much inspiration that day: [Linda Low at Vancouver's open data catalogue](http://vancouver.ca/your-government/open-data-catalogue.aspx), [Loren Mullane from DataBC](http://ca.linkedin.com/pub/loren-mullane/24/36a/b74/en), [Parveen from Smartful Studios](http://ca.linkedin.com/in/kaler/en) and [Luke Closs](https://twitter.com/lukec) from [Recollect](https://recollect.net/). 

Hearing Luke's candid tale of how his open-data side project [Van Trash](http://eaves.ca/2009/09/17/garbage-collection-now-is-sexy-introducing-vantrash/) quietly became a [juggernaut in the municipal trash collection](https://recollect.net/) space was a particularly big eye-opener for me. All of their comments and suggestions were incredibly helpful.

So, um, go give it a try, eh? Just text a [field or park name](https://docs.google.com/spreadsheets/d/172HoOQDKJaIMr930fugUK4GkxkzxR3mV3C3zJ0ruGeY/edit#gid=0) to 604-670-SCCR (7227).