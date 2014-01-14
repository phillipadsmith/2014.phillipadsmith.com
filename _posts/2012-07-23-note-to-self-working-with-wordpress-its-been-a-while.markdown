---
layout: post
title: 'Note to self: Working with WordPress, how I roll these days.'
date: '2012-07-23 14:25:44 -0500'
mt_id: 2844
---

<div align="center">
<img src="http://s.wordpress.org/screenshots/3.3/ss2-media.png?1" />
</div>

Here's roughly how I'm starting new WordPress projects these days:

+ Start a new project on [Github with a WordPress-centric .gitignore](https://github.com/github/gitignore)

+ Clone the repository to my local development environment

+ Download WordPress and commit it to the repository (just the wp-content folder, basically)

+ Create a new theme folder for the project where stylesheets, templates, and customizations to functions.php will go

+ If I'm going to use a parent theme, check to see if it's on Github so that I can load it a as a Git submodule and track the updates and fixes to it (e.g., [BootstrapWP](http://bootstrapwp.rachelbaker.me/)) (Although, I've had some problems with submodules recently, which makes this step a bit of a pain in the ass... but that's another story)

+ Put the necessary plug-ins into the repository (would rather track these as Git submodules, but a surprising number are not on Github. Also, I hit same issue as above with submodules.)

+ Initialize [git-flow](https://github.com/nvie/gitflow/), so that I have a 'master' and 'development' branch, one for the production version of the site (master) and one for the development version (development, obviously).

+ Implement various customizations, e.g., setting up wp-config.php so that it can figure out if it's running locally in my development sandbox, or remotely on the development sub-domain, or live site and fix up the URLs as well as change the database settings.

+ I'm looking into the [WP-Deploy](http://wordpress.org/extend/plugins/wordpressdeploy/other_notes/) plug-in to prevent users from installing code on the remote sites, which would not necessarily make it back to the Git repository

+ I'm still futzing with different approaches to syncing the database(s), i.e., after a new plug-in is installed and configured, pushing those changes up to the development site and, ultimately, out to the live site.

+ Finally, I set up the remote development site on the server to track/pull from the 'development' branch and the live site to track the 'master' branch, and then I use git-flow to ensure that there are a couple of steps and some testing between the implementation of a new feature or theme update and that change making its way out to the live site. It's not perfect, and I suspect there are a million better ways to do these things, but it's working for now. (I haven't developed in WordPress for several years, so I'm all ears on suggestions for how to do this!)

Here a couple challenges that I'm still having:

+ **Database synchronization:** Some basic issues with synchronizing the WordPress database between these various environments are handled by the custom wp-config.php set-up, which basically re-writes the 'siteurl' and 'home' values in the database with the URL of the site that is currently in context. But there are still some challenges, for example: I'd like to have database changes, which are a result of plug-in configuration I do locally pushed up to the remote development site and, eventually, to the live site. I'd also like content, user, widget, and other changes to the 'wp_options' table made directly by end-users on the live site pulled back into the remote development database and my local development database so that I'm always working with the latest data from the live site and can (hopefully) preemptively catch any issues that might surface as new featured are rolled out.

+ **Git submodules:** I seen to keep hitting issues with Git submodules. Initially, it was just getting my head around how to work them into my Git workflow. Then it was issues with pulling in updates from the upstream repository. Lately, it's been issues with getting them to update at all (currently dying with some message about the remote host hanging up ... Grrr.). Git submodules **seem** like a great idea, but -- in practice -- they've been more of a time waster than a time saver.

+ **Keeping the WordPress source in Git vs. just the wp-content folder**. Obviously, keeping all of WordPress in Git would mean that I could manage updates/upgrades with Git instead of using the WordPress built-in upgrade process. However, it also means that I'm tracking a bunch of files that I don't really want to have any "agency" over at the end of the day, i.e., if I'm actually editing any of those files, I'm probably doing it wrong.

Anyway, thanks to two recent projects where WordPress came out as the best solution, I've had the opportunity to be delightfully surprised by how flexible Wordpress has become over the years, how much fun -- not a word I use lightly -- it can be to work with, and how end users love using it. All very important aspects of a project.

That's this week's geeky update.
