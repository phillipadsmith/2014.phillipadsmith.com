---
layout: post
title: A simple workflow for developing maintainable Wordpress sites
date: '2012-11-19 12:35:38 -0600'
mt_id: 2879
---
A few weeks later, I've refined my [workflow for developing maintainable Wordpress sites](http://www.phillipadsmith.com/2012/07/note-to-self-working-with-wordpress-its-been-a-while.html). This process feels quite well tuned now, and -- as people use these sites, and as their design and functionality start to iterate -- the "maintainable" quality has really lived up to my expectations. 

Here are the major changes from the last post:

* **Wordpress files are now in Git**: After a little research and experimentation, I decided to move the core Wordpress files into Git. Doing that required an amend to the .gitignore file so that Git would pick up on those files. Easy-peasy.

* **Wordpress files are now managed by Subversion**: It's nice having the core Wordpress files in Git, but that doesn't really help me when it comes time to apply an update to those files (something that happens relatively frequently). So what I've done is [check out the files from Wordpress.org's Subversion repository](http://codex.wordpress.org/Installing/Updating_WordPress_with_Subversion) and then added/committed them into my Git repository. It took a bit of futzing to get just right, mostly because the projects were already underway, but now I can just 'svn update' to get the latest updates from Wordpress.org and then 'git add .' and 'git commit' to apply the update locally. The nice part is, if anything goes wrong, I have lots of options for rolling back.

* **Three branches on the remote server**: So, now that the local development is silky smooth, the trick was to make it that way on the remote server too. What I've done is create three sites on the remote server, one for each of the 'develop' and 'master' branch, and one for the "live" production site (also tracking the 'master' branch). This lets me pull my development work from the 'develop' branch on Github to develop.project.com, which is connected to a separate development database that is regularly pulling updates from the live site's database. So, when I make changes locally, I can push them up to Github, pull them to the remove 'develop' site and see those changes in the context of relatively up-to-date user data. If everything looks good, I merge the 'develop' branch into 'master' and push it up to Github.

* **Releasing to the production site**: I use the master.project.com site to test the 'master' branch changes against the production database and to make sure I didn't screw anything up. If all is well, I pull those changes into the live.project.com, or production, site. I should probably be using a 'release' branch for this, per the [Git Flow](http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/) best practices, but it's just one step too many for me.

* **Managing updates & plugins**: The one trick that makes all this especially nice-and-neat is [disabling the ability for users on the remote sites (including me!) from directly updating Wordpress core, or installing plug-ins](https://codex.wordpress.org/Editing_wp-config.php#Disable_Plugin_and_Theme_Update_and_Installation). Those kinds of changes on the remote server would require a whole other level of complexity to manage, in terms of then committing those changes, pushing them up to Github, and then merging them back into my local development environment. Thus, simply disabling them make it possible to manage the upgrades and plug-in installation exclusively in one place. Installing a plug-in is as easy as adding it to my local development environment, testing it, and then committing those changes, pushing them to Github, and pulling them into the various remote sites.

* **Custom wp-config.php files**: The key to much of this set-up, initially, was creating a custom configuration file that figures out what host the Wordpress installation is running on and adjusts the database, WP_HOME and WP_SITEURL accordingly. [Here's the template I'm currently using](https://gist.github.com/4112169).

* **Database synchronization scripts**: The final piece that came together was a simple set of scripts to keep the various databases in sync. Specifically, I set things up so that there's are remote project_live and project_dev databases. The script updates the project_dev from project_live once a day. When I log in to my local development environment, I then sync my local project database with the remote project_dev. 

With the local database up-to-date, I just do a quick 'git pull' to ensure that I have the latest changes from Github (in the scenario that another person is also working on the site), then a 'git log' to see what's been happening, then a 'git flow feature start ...' to get working. 

Web production sure has come a long way since 1999.
