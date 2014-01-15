---
layout: post
title: 'The post-post-CMS CMS: Loosely coupled monoliths & read-only APIs'
date: '2011-07-28 11:04:29 -0500'
category: coding
tags:
- cms
mt_id: 2725
---
<div align="center">
<img src="/files/newspaper_layout_old_school.jpg" alt="Photo of an 'old school' newspaper layout by 'limonada' on Flickr" /><br />
<small>Creative commons photo by <a href="http://www.flickr.com/photos/limonada/76719132/">limonada</a> on Flickr</a></small>
</div>

As I sat down with my colleagues on Tuesday for a little hack day on our [favourite open-source content management system](http://bricolagecms.org), we had a familiar conversation -- one that is probably familiar to all people who hack on CMSs -- which is, _What is the future of content management?_

It's a conversation that has been unfolding and evolving for many, many years, but seems to be a gaining a lot of steam again in 2011.

The essence of some of the more recent conversation is nicely summarized over on [Stijn's blog](http://stdout.be/2011/07/11/the-post-cms-cms/).

One of the questions presented is: will tomorrow's CMS be a monolithic app, or a 'confederation' of purpose-built micro-applications -- like the app that [Talking Points Memo demonstrates](http://www.youtube.com/watch?v=2ADKEHAaf_Y) for managing their front page, for example.

In the [blog post](http://labs.talkingpointsmemo.com/2011/07/the-twilight-of-the-cms.php) on the TPM media lab about the '[Twilight of the CMS](http://labs.talkingpointsmemo.com/2011/07/the-twilight-of-the-cms.php),' they describe their solution to the problem of the monolithic CMS -- "a simple and flexible API that digests manifold requests from the different applications."

As I ponder these ideas in the context of my work for online-only publishers like [TheTyee.ca](http://thetyee.ca), I struggle with a few competing notions...

### Read-only API, or Read/Write API

In the case of TheTyee.ca, the [monolithic CMS](http://bricolagecms.org) writes data to a data store ([Elastic Search](http://www.elasticsearch.org/)) that directly provides the (soon to _actually_ be public) public API. From there, various applications can request the data from the API and receive a structured JSON representation of that data back as a response. Basically, once these clients have the data, they can do what they want.

This is great. It's a read-only scenario. The CMS is still the 'authority' on the state and structure of the data (along with a lot of other information), but there is an identical copy of that data in the store that provides the API.

Now, let's think about that TPM front page management app: it clearly needs read/write access to their API, because it can change not just layout, but editorial content like the story title, deck, teaser, and so on.

So, if the API is read/write, the questions I have are:

* The schema for the documents (the stories, etc.) must be validated somewhere, right? So... does that logic live in each purpose-built app, or as a layer on top of the data store? And does that then violate a bit of the 'Don't Repeat Yourself' design pattern?

* Do these content-centric writes to the API make their way back to the CMS or editorial workflow system? And, if they don't, does that not introduce some confusion about mis-matched titles, decks, teasers, and so on? For example, say I change title of a story on the front page, but now I see a typo in the _body_ of story and want to fix that, so I go into the _other_ CMS and search for ... whoops! ... what was the title of that story again?

* How does this new 'front page app,' or the read/write API, handle typically CMS-y things like competing or conflicting write requests? Or version control? Or audit trails of who made which edits? If one, or the other, or both, actually handle these concerns, is this not a duplication of logic that's already in the CMS?

Perhaps I'm not thinking about this right, but my gut is saying that the idea of a read/write API -- a scenario where you have _both_ a CMS (Movable Type in TPM's case) and a 'front page management' app -- starts to get a bit tricky when you think about all the roles that the CMS plays in the day-to-day of a site like TPM.

It gets even more tricky when you think about all the delivery mediums that have their own 'front page' -- tablet experiences, scaled down mobile experiences, feeds, e-newsletters, and so on.

### Presentation management or editorial management

The other thing that is immediately striking about the TPM demo is the bizarrely print-centric feel to the experience -- I'm immediately transported back to my (very brief) days working at [The Varsity](http://thevarsity.ca/) where the editors and designers would literally paste up the newspaper's pages on big boards.

For a publication like the TPM -- an entirely online 'paper' -- it seems like an odd, slightly 'retro,' approach in an age that is defined by [content that defies containers](http://www.phillipadsmith.com/2011/06/code-meet-print-to-where-texts-meet-technology-and-context-comes-first.html). One must ask: where does it end? Should there be a purpose-built app for each section's front page, e.g., Sports, Arts, Life, etc.? For each regional section? For each-and-every article?

Isn't this just vanity at some level? Endless bit-twiddling to make things look 'just right'? Kinda' like those mornings when I just can't decide whether to wear a black shirt or a white shirt and stand in front of the mirror trying them on for what seems like eternity.

So, coming back to my point: **in a time when many believe (like a religion!) that content and presentation should be separated -- not as an exercise, but because that content is delivered to literally hundreds of different end-user experiences (phones, tablets, readers, etc.) -- do we really want to be building tools that focus on the presentation for just one of those experiences? If so, where does it end?**

For the most part, the modern-day CMS has been designed to alleviate these myriad challenges by providing a way for non-technical people to input structured data, and the tools for developers to output that structured data in a variety of ways, formats, and mediums.

Watching the TPM video gives me some ideas about how to improve the experience for an editor to quickly edit headlines, decks, teasers, photos of the morning's stories -- and even to indicate their relative priority in terms of newsworthiness -- but I would want to stop there, at the editorial, and let the presentation layer be handled according to the medium, device, or experience the content is being delivered to.

### Loosely coupled monoliths & read-only APIs

[Many moons ago](http://www.gossamer-threads.com/lists/bricolage/users/7408#7408), I proposed that Wienberger's [Small Pieces Loosely Joined](http://www.smallpieces.com/) idea held true for content management also. The proposal was simple: instead of investing in one monolithic CMS -- a CMS that did everything from manage content to advertising delivery to comments to search to who-knows-what (a trend in CMS projects at the time) -- an organization could choose the current 'best in class' solution for each need and connect them together through loose coupling. Then, if a better solution came out for, say, comments, the old system could be replaced with the newer system without having to re-build the whole enchilada.

(Of course, the flip side often is that louse coupling can feel like bubble gum and string when you have to work with it every day.)

So, while my own experience is that loose coupling is great, and that purpose-specific applications are usually better than apps that try to do everything, I would personally want to draw the line somewhere. For me, that line is between distinct 'areas of responsibility,' like editorial, advertising, design, community, search, and so on.

In this scenario, each area would have the authority over its own data, and the logic for how that data is structured and validated, and so on. If that data was written to a central data store that provided an API -- something simple, flexible, and RESTful -- the other apps in a 'confederation' could read from it, choose what to do with it, how to present it, and so on, but the final 'say' on that data would be from the app that is responsible for creating it.

For me, this is a sensible way to allow these apps to work in concert without having the logic about the data living in multiple places, i.e., the API, and the clients that can write to it (which makes sense if you're Twitter with hundreds of external clients, but not if you're one organization building exclusively internal client apps).

Would love to hear otherwise, or experiences of how others are handling this or thinking about the challenge.
