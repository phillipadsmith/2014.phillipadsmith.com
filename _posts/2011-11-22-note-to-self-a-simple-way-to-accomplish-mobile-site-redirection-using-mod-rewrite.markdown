---
layout: post
title: 'Note to self: A simple way to accomplish mobile site redirection using mod_rewrite'
date: '2011-11-22 16:05:46 -0600'
mt_id: 2776
---

In preparation for the launch of [The Tyee's mobile-friendly site](http://m.thetyee.ca) (not to be confused with [The Tyee's HTML5 "app" for mobile devices](http://app.thetyee.ca)), I did some research on approaches to mobile site redirection. The key considerations were straightforward:

* The redirection should happen quickly
* The redirection should be as simple as possible
* There should be a way for the user to enable/disable the redirection

The solution I ended up with, [based largely on this blog post](http://ohryan.ca/blog/2011/01/21/modern-mobile-redirect-using-htaccess/), is as basic as I could get it. It relies on cookies for persistence of the user's choice to view the mobile site, or the full site, but it also works properly without cookies when the user is simply switching between the mobile view and the full site view.

<script src="https://gist.github.com/1386982.js?file=mod_rewrite_rules"></script>

There you go. :) Your mileage may vary.

Remaining questions for me are:

* How long to persist the mobile site vs. full site cookie?
* How to let users know that they can change back to the mobile site from the full site? (Lots of options here.)

Have suggestion or improvements? Drop me a note or a comment.
