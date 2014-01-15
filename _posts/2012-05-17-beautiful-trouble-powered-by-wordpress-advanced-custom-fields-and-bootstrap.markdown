---
layout: post
title: 'Beautiful Trouble: Powered by Wordpress, Advanced Custom Fields, and Bootstrap'
date: '2012-05-17 11:21:03 -0500'
category: coding
tags:
- frontpage
- beautifultrouble
- wordpress
mt_id: 2828
---

<img src="http://beautifultrouble.org/ui/img/h/Beautiful_Trouble_Book_Cover.png" style="float: right;margin: 0 0 10px 10px;" />

We're hurtling toward the June 1st date for the launch of the [Beautiful Trouble Web toolkit](http://beautifultrouble.org). Hitting that date is going to be challenging, as there's lots of work left to do and I [hit the road](http://www.phillipadsmith.com/2012/05/mexico-month-four-te-ver-pronto-oaxaca.html) in less than a week, but we've made some serious progress [since the last update](http://www.phillipadsmith.com/2012/05/beautiful-trouble-online-toolkit-update-rebooting-for-the-june-1st-launch.html).

The decision to build on Wordpress has turned out to be a huge win. The brave individual who is loading the content, Mara Ranville, was immediately familiar with the interface and has experienced very few technical challenges along the way. Both of the editors, Dave and Andrew, are already Wordpress users and should have no problems keeping the site updated with the minimum of fuss. And, now that we're _finally_ moving toward the goal, [we're moving fast](https://github.com/phillipadsmith/beautifultrouble-dot-org/commits/master).

I've been able to keep the Wordpress set-up nice and simple, and we're only using a handful of plug-ins:

* [Advanced Custom Fields](http://www.advancedcustomfields.com/): This was the critical piece to make everything work. This module, while using the existing Wordpress custom field functionality, super-charges the user interface so that custom fields are presented logically, with help text, and validation. We're also using the "[Flexible Content]()" add-on to make it possible to add repeating elements to a page, i.e., multiple epigraphs and so on. Each module has its own "field group" that is shown on the edit screen, which makes it possible to capture module-specific information quickly and easily. This plug-in, when paired with the paid extra functionality of repeating and flexible fields, gives systems like [Drupal's Content Creation Kit](http://drupal.org/project/cck) a real run for the money.

* [Co-Authors Plus](http://wordpress.org/extend/plugins/co-authors-plus/): Let's us add multiple authors to a post, which is great because there was a lot of collaboration in Beautiful Trouble.

* [CSV User Import](http://luibh.ie/): was the first module I ran across for bulk uploading our list of [Beautiful Trouble contributors](). However, the module was quite minimalist and I needed to [work around that](https://gist.github.com/2640373) to upload each contributor's bio and meta information. Then, of course, I stumbled on the more functional [Import Users from CSV](http://wordpress.org/extend/plugins/import-users-from-csv/). Oh well, next time.

* [CSV Importer](http://wordpress.org/extend/plugins/csv-importer/): Helped with uploading a stub for each module and associating the correct author.

* And for some extra formatting we're using [Graceful Pull-Quotes](http://striderweb.com/nerdaphernalia/features/wp-javascript-pull-quotes/) and [Footnotes for WordPress](http://projects.radgeek.com/wp-footnotes.php). Both pull quotes and footnotes are now very simple to add to a module thanks to the [AddQuicktag](http://bueltge.de/wp-addquicktags-de-plugin/120/) plug-in, which adds a Pullquote and Footnote button to the Wordpress content editor.

As far as presentation goes, I'm currently working with the [Bootstrap theme built by 320press](http://320press.com/wpbs/) to give everyone a quick sense of where the various parts of each module will show up on the screen. However, after some research the other day, I suspect I'll migrate to [BootstrapWP](http://bootstrapwp.rachelbaker.me/) as it appears to be a more straightforward implementation of Bootstrap that will be easier to extend into something that's uniquely Beautiful Trouble.

Anyway, now that we have content flowing into Wordpress, it's time to get down to layout and design. I'm hoping to drag [Michael Barrish](http://lumino.us/) into that process, possible kicking and screaming, as we've been having a great back-and-forth conversation about [Resopnsive Web Design](http://thetyee.ca/Mediacheck/2011/12/28/ResponsiveDesign/) and the [many tools and processes that are being developed for designing with responsive in mind](http://delicious.com/mbarrish/responsive).

Onward!
