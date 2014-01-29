---
layout: post
dek:
---

# The future of the CMS: static site generators
## How history repeats itself every ten years

<p class="lead">Started in 2001, [Bricolage CMS](), initially developed at Salon.com, was one of many "static site generators" at the time. It seems that we've returned to static sites in a big way in 2014.</p>

Over the holidays, I migrated [this site](http://phillipadsmith.com) -- after many enjoyable years -- from old faithful CMS, MoveableType, to [Jekyll](http://jekyllrb.com/) -- just one of many of a contemporary bread of what are referred to as "static site generators." 

My earliest forays into blogging were at a time when so-called static site generators were pretty much the way things worked: the [Greymatter software]() I initially used for blogging, though it provided a Web-based interface for writing and management, ultimately output static HTML files. When I later upgraded to Moveable Type it felt familiar because it did the same.

The advantages of having a site served statically back in those days were pretty obvious. Hosting accounts, if you were lucky enough to have one, were pretty paltry offerings, and a simple static site was usually less expensive and more straightforward to maintain. Thus, I get a bit of a chuckle when I read about the renaissance of static sites: really, it seems to be all the rage again, and for good reason.

### Static sites in 2014

Though the hosting situation is radically different today than it was 1999 some of the same category of challenges remain: keeping sites secure, making sites fast, and ensuring that a given site can stay online under surges of traffic. Not surprisingly, static sites handle many of these challenges just as well in 2014 as they did years ago. 

For starters, with static sites there's often no need for [caching]() with Varnish, Memcached, or what-have-you because Web servers are built to serve static file quickly, and browser are built to cache resources that don't change. With a little configuration, it's easy to tell browsers to cache certain resources that change infrequently -- think JavaScript libraries, user interface images, etc. -- for very, very long times. And there are simply ways to invalidate those caches too when the time comes.

I could relate more than one story of a friend who, after slaving over their Varnish set-up for months, cried like a little girl when their site was hit by a load of traffic and for some unknown reason Varnish was brought to its knees (no doubt a misconfiguration, or misunderstanding, or lack of testing). I've never had to worry about that with a static site.  Static sites by their nature can typically handle traffic spikes while only using a very small footprint of server resources.

For example, on February 24, 2008 --  the day that [Ralph Nader was on Meet The Press ]() to announce his entrance into the US Presidential campaign -- the VoteNader.org site -- a static site! -- was serving close to 300 requests a second and pushing 50 mbps at its peak, and the server did not show any significant load.

More than that, static sites are just simpler. There's a heck of a lot less to debug when something goes wrong. On the flip side, in a modern dynamic Web application, one might have to debug the caching system, middleware, the application itself, application templates, a database, and possibly even a job queue -- that's a lot of places to look for a bug!

### How much "dynamic" does a site really need?

Back in 2004, as I was starting to draft a proposal to re-develop the Web site for [Grist.org]() -- at that time one of the highest traffic environmental news sites in the US -- I was asking myself the question "how many of the features on this site actually need to be dynamic?" As it turned out, after some investigation, very few.

In the end, Bricolage CMS was proposed as the content-management solution for Grist.org and -- after its successful implementation -- it was a system they kept in place for more than five years. At the end of the day, Bricolage CMS is a static site generator (on steroids, I'll admit). It's a very powerful Web-based user interface for managing large libraries of content that, when it comes time to publish, simply "[burns](http://bricolagecms.org/docs/current/api/Bric/Util/Burner.html)" out static resources. It's the same CMS that I would turn to some years later for the Nader campaign, and it's the CMS that still runs behind the scenes at the award-winning daily online news site [The Tyee](http://thetyee.ca/).

Some years later when the content-management system space went plug-in crazy, it was easy to see why Bricolage fell out of style. If you wanted comments on your site: they were just a one-click install away ... Wanted discussion forums? One-click! Wanted share tools? One-click! Wanted a slow-to-load Web site and an overloaded database? No need to click anything, you already had it! 

But the de-centralized nature and spirit of rapid innovation that is the Internet has meant that many of the concepts behind these plug-ins eventually graduated to stand-alone services on the Web: [comments](), [discussions](), [sharing](), and even [authentication]() -- they all come in their own convenient little third-party JavaScript widgets. And, even if built in-house, most organizations seem to be thinking distributed, REST-ful, JSON APIs for just about everything.

Beyond that, my sense is that many publishers have ultimately admitted that not everything needs to be "real time," and that most users, in most scenarios, don't experience a noticeable difference between real time and near real time; Or, on the flip side, that the data behind Web sites, and -- similarly -- many news app doesn't actually change that frequently[^1].

### Jekyll for just about everything

I'll be the first to admit that I'm not an expert on all the current options for static-site generators, [there seem to be a few of them out there at least at the moment](http://staticsitegenerators.net/). What I do know is that Jekyll seems to have some steam again, and the smart folks behind Github and Development Seed seem to be pushing it forward at a promising pace. 

More than that, Development Seed is proposing a world in which static site replace the CMS, and they're putting their development practice where their mouth is and rolling out Jekyll-backed sites for the likes of HealthCare.gov (the parts that work) and the TK. 

Having enjoyed such a success with the re-launch of this site on Jekyll, and generally enjoying that static sites are a "thing" again, I've even started to shift my entire front-end development workflow toward Jekyll. More detail to come, but -- suffice it to say -- whenever I'm getting started on a new project that's going to involved some HTML, CSS, and JavaScript, my first step is to bootstrap a new Jekyll project. 

My gut says that we're going to continue to see a fair bit of innovations in this previously "static" space in 2014. 

_Using Jekyll in an interesting way? Have a war story to tell about static sites? Drop a comment below, or on Twitter_


[^1]: For example, when developing [The Tyee's BC 2013 election map & guide](http://election.thetyee.ca), Elections BC forbid me from requesting election result data more than once every five minutes.


