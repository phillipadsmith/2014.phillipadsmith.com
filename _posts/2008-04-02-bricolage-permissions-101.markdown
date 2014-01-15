---
layout: post
title: Bricolage permissions 101
date: '2008-04-02 16:20:16 -0600'
category: coding
tags:
- perl
- bricolage
excerpt: |-
  <p><center><img src="http://communitybandwidth.ca/files/bricolage-permissions-101.gif" alt="Bricolage permissions 101" /></center></p>

  <p>If you are a client, or a colleague, you probably have heard me talk about <a href="http://bricolage.cc/">Bricolage</a> -- the industrial-strength content management system. If you're a client of mine, you probably know why I talk about it (in fact, you're probably using it every day). And, if you're a colleague, you've probably wondered what the hell I was going on about. Well, I figured it's about time that I explain why <a href="http://www.eweek.com/c/a/Enterprise-Apps/Bricolage-181/">some people claim</a> that "Bricolage is quite possibly the most capable enterprise-class, open-source application available."</p>
mt_id: 1797
---
<p><center><img src="http://communitybandwidth.ca/files/bricolage-permissions-101.gif" alt="Bricolage permissions 101" /></center></p>

<p>If you are a client, or a colleague, you probably have heard me talk about <a href="http://bricolage.cc/">Bricolage</a> -- the industrial-strength content management system. If you're a client of mine, you probably know why I talk about it (in fact, you're probably using it every day). And, if you're a colleague, you've probably wondered what the hell I was going on about. Well, I figured it's about time that I explain why <a href="http://www.eweek.com/c/a/Enterprise-Apps/Bricolage-181/">some people claim</a> that "Bricolage is quite possibly the most capable enterprise-class, open-source application available."
<!--break--></p>

<p>Rather than write at length about client requirements that keep me coming back to this capable, free and open-source software platform, I'm just going to capture some typical scenarios that come up -- case studies if you will -- and how they're easily accomplished in Bricolage. This is not to say that they can't, or couldn't be accomplished in other content management systems, but simply serves to expose how it is done by the <a href="http://en.wikipedia.org/wiki/Bricolage">bricoleurs</a>. </p>

<h3>Today's lesson: Permissions 101</h3>

<p>(Or how to set-up basic permissions to limit a group of users to a certain group of assets, or categories.)</p>

<p>The typical scenario goes like this: </p>

<ul>
<li>I have a group of users (let's call them "Bloggers") that I want to limit to a certain set of assets, or categories</li>
<li>I'd like to limit them to the creation of "Blog posts" (the asset)</li>
<li>And I'd like to limit them to creating those assets in the /blog/ category</li>
</ul>

<p>Bricolage is well suited to running large sites with thousands of stories and hundreds of categories (or several sites, with thousands of stories, and hundreds of categories) and potentially many languages -- think <a href="http://www.who.int/en/">World Health Organization</a>, or <a href="http://grist.org/">Grist</a>. These site often have a large number of users that need access to certain things, but not others -- or are allowed to perform certain tasks (editing, proof reading) but not others (publishing, or developing templates, etc.).</p>

<p>Permissions, though confusing as hell, is one of the areas where Bricolage really shines. For a general overview, just have a scan through the <a href="http://bricolage.cc/docs/current/api/?Bric::Security">Bricolage Security Guide</a>. And, if you want to know more, just read it another five times.  ;-)  In short: it doesn't get more fine-grained and sensible than this, once you get your head around the concepts. </p>

<p>However, reading about permissions is one thing (and that thing is boring), and seeing them in action is another thing entirely. So, for your viewing pleasure, I've put together a couple of five-minute screen casts on <a href="">Bricolage permissions 101</a>. I've also typed up some <a href="http://wiki.bricolage.cc/bin/view/Bric/PermissionsOneOhOne">quick notes on the steps I took and I've put them on the Bricolage wiki</a>. And, if you're still curious, you can always go <a href="http://www.gossamer-threads.com/lists/engine?list=bricolage;do=search_results;search_forum=forum_2;search_string=permissions;search_type=AND&amp;sb=post_time">mining in the mailing list for permissions gems</a>. </p>

<p>So, back to our scenario above: Bloggers (user group) need to be able to create blog posts (element type group) in the /blog/ category (category group). This is actually quite straightforward and only took about 10 minutes to set-up from beginning to end. Here's how:</p>

<ul>
<li><a href="http://screencast.com/t/G6s9goLNJ">Bricolage permissions 101, Part I (5 minutes)</a></li>
<li><a href="http://screencast.com/t/UPxGOSej">Bricolage permissions 101, Part II (5 minutes)</a></li>
</ul>

<p>Let me know if you have any questions. And keep your eyes out for the next installment in the journey of a self-appointed bricoleur.</p>
