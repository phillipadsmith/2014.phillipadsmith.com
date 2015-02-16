---
layout: post
published: true
title: "Open data's uneven field"
category: commentary
img_opt: inline
dek: "Can data help BC's soccer moms?"
tags: 
  - frontpage
  - opendata
img_sml: "https://farm8.staticflickr.com/7034/6456639869_ac1ff66e64_b.jpg"
img_med: "https://farm8.staticflickr.com/7034/6456639869_ac1ff66e64_b.jpg"
img_lrg: "https://farm8.staticflickr.com/7034/6456639869_ac1ff66e64_b.jpg"
img_alt: Soccer ball photo by michellemilla on Flickr (cc)
img_caption: Soccer ball
img_url: "https://www.flickr.com/photos/michellemilla/6456639869/sizes/l"
---

Following an invitation from [OpenDataBC's](https://www.opendatabc.ca) director, [Gillian Vrooman](https://www.opendatabc.ca/user/gndv), and some open-data cheerleading from elected officials and government employees at [last week's Canadian Open Data Experience road show](http://www.phillipadsmith.com/2015/02/canadian-open-data-experience.html), I recruited a friend and RSVP'd for the [upcoming Open Data Day hackathon hosted here in Vancouver by OpenDataBC](http://www.meetup.com/OpenDataBC-Vancouver/events/220278027/).
{: .lead}

After a quick brainstorm or two, we decided to focus our efforts on what we thought would be a relatively easy topic: youth soccer. We picked soccer for its ability to connect with all kinds of people of different ages and background, and because my co-conspirator is an asssistant coach for his nephew's team. We had two of the magic ingriedients of a successful minimum viable product for the upcoming one-day hackathon: a big audience of passionate people and a subject-matter expert.

All we needed now was the data...

## Running the data guantlet

Once unpacked, the world of youth soccer is actually quite expansive: different divisions and leagues, different age groups and skill levels, and a variety of clubs, associations, and enthusiast web sites. With the hack day less than a week away, we knew that we needed to narrow the scope of our efforts to just a small subset of all of this. We decided to focus on information about fields, e.g., is a field open or closed and so on.

Something as basic as a soccer field seems disarmingly straightforard at first. As is often the case with open data, however, there's a bit more to it than what's visible at first glance. Fields are located in parks and there are often several fields in a park. Parks are managed by some kind of a political entity -- let's call that a municipality for simplicity sake, e.g., Burnaby, Richmond, Surrey, North Vancouver, West Vancouver, and New Westminster. A single soccer division might play on several different fields, in many different parks, across different municipalities.

Each of these municipalities publishes information about parks in a different way, e.g., Vancouver provides a CSV, Burnaby only a map. As well, the information about field status is published separately from parks information, and again comes in a different format from each municipality. For example, one municipality might publish the status of all fields, either open or closed; whereas another may only provide data on closed fields. And we have to keep in mind that soccer is only played on some fields in some parks.

## Aiming for consistency

All along the path of this data journey, there are surprising nooks and crannies to uncover. For example, the City of Vancouver publishes a [parks dataset](http://data.vancouver.ca/datacatalogue/parkListing.htm) on its [open data site](http://data.vancouver.ca/datacatalogue/index.htm) with all kinds of useful data attributes for each park. However, a closer investigation of the data reveals that the attribute for "advisories," for example, has not been updated since 2011.

Field status is further complicated by the variablity in how a soccer club or association might refer to a field. The game will typically be listed for a specific field, e.g., Park Name Field 1. However, the municipality might choose to describe the status of a park as something like "Park Name SW, closed," which refers to a section of a park, not specific fields (which fields are in the SW section of Adanac Park? Go!).

We wondered aloud many times, as we cobled together our spreadsheet-turned-database, who's in charge of this data? How can we get it from the source? This question becomes exponentially more complicated when one starts to consider other aspects of youth soccer like teams, game schedules, and playoffs (where divisions compete against other divisions).

## Shooting into and open net

If we want to score a big win at Saturday's hackathon, we've got a fair bit of work ahead of us. Of course, we're in it for the fun, not the glory! But, that said, **this would be a convenient moment to note that we're looking for more players on our team: a designers, geographic information systems expert, and a front-end developer would be welcome additions. Drop me a line on [Twitter](http://twitter.com/phillipadsmith) if you'd like to sign-up.**

So what will actually get built? We have a few different ideas that we're exploring -- some fun, some practical -- across a handful of different mediums, e.g., SMS, mobile web, and Twitter. The minimum viable product will be a way for busy Lower Mainland BC soccer families to get consolidated information on field statuses.

This week we'll continue the work of getting people on the phone at the various municipalities to confirm our assumptions about the data, as well as continuing to add new public datasets into the mix to make this product interesting, quirky, and dare we say "useful" to soccer moms (and dads!) everywhere.

If you enjoyed this post, share the love. :)
