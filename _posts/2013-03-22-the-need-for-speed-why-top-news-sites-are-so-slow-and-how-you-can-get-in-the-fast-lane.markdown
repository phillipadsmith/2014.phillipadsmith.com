---
layout: post
title: 'The need for speed: Why top news sites are so slow, and how you can get in
  the fast lane.'
date: '2013-03-22 09:34:23 -0600'
category: commentary
tags:
- frontpage
- pagespeed
- mobile
- newsteckstacks

mt_id: 2902
---
_Cross-posted from [PBS MediaShift Idea Lab](http://www.pbs.org/idealab/2013/03/ranking-the-slowest-loading-news-sites-and-how-they-can-speed-up074.html)._

I present your winner (or loser?) for slowest loading feature article, the Chicago Tribune, at 16.68 seconds, almost 6 megabytes of data, and with more than 300 requests for resources to display the page in question. In fact, the Tribune was the slowest out of the 15 sites tested three out of five times. 

How can this be? The Chicago Tribune, ranked as one of the [most trafficked U.S. news sites](http://www.pbs.org/idealab/2013/02/investigating-the-technology-underlying-top-news-organizations036.html), is also one of the **slowest** sites on the Internet (well, not quite, but in the context of these tests is really, honestly, objectively, "dog slow"). I reached out to several people at the Tribune for comment on this story, but did not hear back before publication.

At a time when even the mainstream media is reporting that "[bloated web pages are costly for smartphone users](http://www.theglobeandmail.com/technology/tech-news/bloated-web-pages-costly-for-smartphone-users/article9355125/)" and when [Google has made it clear that slow pages impact a page's rank and that it takes speed into account in its search rankings](http://googlewebmastercentral.blogspot.ca/2010/04/using-site-speed-in-web-search-ranking.html), how is it that some of the Internet's most-visited news sites can get away with thumbing their nose at the need for speed?

The Tribune is not alone in their sluggish response to this issue. This chart shows how the other "Top 10 global news sites by traffic" measure up (based on tests of feature articles):

<script type="text/javascript" src="//ajax.googleapis.com/ajax/static/modules/gviz/1.0/chart.js"> {"dataSourceUrl":"//docs.google.com/spreadsheet/tq?key=0AgZzmiG9MvT4dFVIWjI0Z0R3eHhKdkxDYVctME5lVnc&transpose=0&headers=0&range=B58%3AC71&gid=8&pub=1","options":{"titleTextStyle":{"bold":true,"color":"#000","fontSize":"18"},"series":{"0":{"color":"#134f5c"}},"fontName":"Georgia","animation":{"duration":0},"backgroundColor":{"fill":"#f3f3f3"},"hAxis":{"title":"Page load time in seconds","useFormatFromData":false,"minorGridlines":{"count":"2"},"formatOptions":{"source":"inline","scaleFactor":null},"minValue":null,"textStyle":{"color":"#434343","fontSize":12},"format":"0.##","viewWindow":{"min":null,"max":null},"logScale":true,"gridlines":{"count":"10"},"maxValue":null},"vAxes":[{"title":"","useFormatFromData":true,"minValue":null,"viewWindowMode":null,"viewWindow":null,"maxValue":null},{"useFormatFromData":true}],"booleanRole":"certainty","title":"Top News Websites Ranked by Page Load Time","domainAxis":{"direction":1},"legend":"none","isStacked":false,"tooltip":{},"width":550,"height":350},"state":{},"view":{},"isDefaultVisualization":true,"chartType":"BarChart","chartName":"Chart 1"} </script>

(Test results courtesy of [GTmetrix](http://gtmetrix.com/). Data from all of the tests is [here](https://docs.google.com/spreadsheet/ccc?key=0AgZzmiG9MvT4dFVIWjI0Z0R3eHhKdkxDYVctME5lVnc#gid=8).)

## Why speed is still important, in a nutshell

I called Alex Krohn, founder of Vancouver, B.C.-based hosting company [Gossamer Threads](http://www.gossamer-threads.com/), the company that created the GTmetrix performance testing tool, to ask if speed still is still important in this age (and on this continent) of abundant, cheap, and fast high-speed broadband Internet. Specifically, I wanted to know, is it still as relevant today [as it was in 2007](http://www.codinghorror.com/blog/2007/08/yslow-yahoos-problems-are-not-your-problems.html)?

"Speed is still a critical factor," said Krohn. "In fact, it's getting more important, not less important as time goes on. For example, we understand that people's attention spans and patience are shrinking. Meanwhile, Google is making lots of changes with things like instant search and autocomplete to make that interaction with the user more real-time, and with less delays."

"There is a lot of data and analytics on on how speed impacts shopping sites; the faster the page loads, the more likely the user is to continue along in the process and eventually make purchases. Delays risk losing that visitor," Krohn continued. "Five or six years ago, people would happily wait five or more seconds for something to load. Nowadays, if it doesn't come up within a couple of seconds -- especially if the person is arriving from search results -- people will hit the back button and try the next result."

I also asked [Irakli Nadareishvili](http://twitter.com/inadarei), Director of Engineering/Digital Media, at NPR about speed, given that NPR was the real winner here, consistently delivering a page load time for feature articles well under three seconds. Nadareishvili said "NPR's software design is based on a set of architectural principles [...] One of the main principles is: Speed is a Feature. Our tech team has been investing heavy effort in getting great page load-times."

So, if speed is getting _more_ important, why are so many top news sites around the globe so damn slow?

## Widgets, buttons, and badges, oh my

I had a hunch it might be widgets, buttons and badges. The Web is now awash in third-party services -- Facebook, Google+, Twitter, just to name a few -- that all provide their own handy little code snippet for you to embed on your site. Each of these little code snippets is time-saving for the developer implementing it, but potentially _time-consuming_ for the end user. Could widgets be to blame? I asked Krohn that question too.

"Each one of these adds a 'hit' to the site, in terms of the resources required and the total time to load everything. If you do it in a way that's smart and doesn't slow things down for the user, then it can be a good thing. However, if you do it wrong, it can impact the speed of the site," Krohn said. He went on to explain, "It's important to have a good understanding of the numbers and what they mean. So, for example, a '15-second page load time' doesn't necessarily mean the user is staring at a blank screen that whole time, and using a lot of resources may be OK if the user gets what they want out of the site within the first couple of seconds."

This specific question was one of the reasons that GTmetrix added video analysis to its performance testing toolkit; turning it on provides a real-time video capture of a Web page as it loads as users would see it in their browser. Curious, as always, I tried it on the Chicago Tribune (a site that loads more than 300 resources on an average article):

<iframe width="510" height="383" src="http://www.youtube.com/embed/8Y8VQjQBQdc" frameborder="0" allowfullscreen></iframe>

A quick [review of the timeline for how long it takes resources to load on that page](http://gtmetrix.com/reports/www.chicagotribune.com/wM8aPpk2#report-timeline) does indicate that both the Facebook and Twitter widgets are causing _some_ delays, as well as a handful of surprisingly slow requests for resources on the Tribune's own site. But widgets and buttons alone were not enough to be the sole culprit here.

That said, using performance tools like this to analyze your own site could help to uncover similar speed bottlenecks or opportunities for performance improvements. Another option is to explore ways to only load those widgets when the user request them, like [SocialCount](https://github.com/filamentgroup/SocialCount) developed by the Filament Group.

## Mobile optimized sites vs. responsive Web design

My next thought was that perhaps the Chicago Tribune and others are only slow on my desktop computer, and they're investing their energy in improving the speed of the experience they deliver to mobile users, where it really matters. 

I ran this possibility by Krohn also and he said: "Optimizing for mobile users is important, and delivering a mobile-optimized experience is certainly a good thing. Nonetheless, you need to optimize for both because different devices have different priorities." He went on to explain that "it may be acceptable to deliver 2-3 megabytes of data to a desktop user (while that might not be acceptable for mobile users), but you would still want to do that in an intelligent 'non-blocking' way so that a user is not staring at a blank screen while that data loads."

This consideration is becoming even more important as mobile traffic increases globally, and as more and more news sites turn to [responsive Web design](http://thetyee.ca/Mediacheck/2011/12/28/ResponsiveDesign/) as a way to address the needs of users regardless of device, as the [Boston Globe has recently done](http://www.filamentgroup.com/lab/introducing_the_new_responsive_designed_bostonglobecom/), and as the [New York Times is planning to do in an upcoming redesign](http://www.nytimes.com/marketing/prototype/).

Although concepts like responsive and "mobile first" Web design aim to put the mobile experience -- the currently slower network connection -- at the center of the design process, there are still a lot of details to work out in terms of only delivering the resources that the device needs, and not a desktop-centric resource simply squished to look good on a smaller screen. Initiatives like [responsive images](http://www.filamentgroup.com/lab/responsive_images_experimenting_with_context_aware_image_sizing) are a push in that direction, but for sites that have very large amounts of mobile traffic, it is still worth exploring other ways of delivering a smaller amount of data across the network.

## Page Speed vs. YSlow

OK, so where do you start training to compete against sites like NPR, USA Today, and CNN in the amazing race to be the _fastest_ news site online? It's actually quite easy, and there are several tools built right into your Web browser that can help.

Two options for investigating your site's performance (and I always recommend testing article pages, prior to testing index pages or front pages, as they often receive the most traffic) are Google's [Page Speed tool](https://developers.google.com/speed/pagespeed/) and [Yahoo's YSlow](http://developer.yahoo.com/yslow/). Both are available as extensions for Firefox and Google Chrome so that you can run them at the click of a button while looking at your article page. 

Using a Web-based performance testing tool like GTmetrix has the advantage of storing results over time, setting up alerts, being able to test from different locations around the world, and recording a video of what the user is experiencing as the page loads (as well as a nifty developer API, for automating the tests, like I've done for this column). 

Getting a clear picture of how the page is loading, what order resources are loading in, and which requests are adding a lot of time to the page load can provide a lot of insight into where to start with your optimizations. All three tools mentioned above will provide you with some clear starting points, and indicate how important each is toward improving the user's experience.

## The most important considerations

There are more than [60 recommendations](http://gtmetrix.com/recommendations.html) if you combine advice from both Page Speed and YSlow, which can feel overwhelming at first. So I asked Krohn to boil it down for us and to suggest the top three low-effort, high-impact site optimizations:

* **Optimizing images:** "Put into your workflow the process of getting your images optimized" through a service like [Smush.it](http://www.smushit.com/), Krohn said. "Make sure you're sending the user an image that is as small as possible." As well, you should be specifying image dimensions everywhere possible (less computing for the browser) and [combining images into sprites](http://alistapart.com/article/sprites) where it makes sense.

* **Enable gzip compression**: "There are still a large number of sites that don't use [gzip compression](http://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/). What that means is that the server is sending information to the user uncompressed. It could be 150kb of HTML, but that compresses incredibly well. Turning gzip on will get the initial page to the user orders of magnitude faster and is widely supported by browsers," he said. You should be able to ask your Web host to do this for you, or to enable it yourself in your Web server software quite easily.

* **Caching**: "Coming up with a good cache-control policy and headers to let your users' Web browsers know what they can and can't store locally," Krohn  said. "A lot of the time your JavaScript, images, and CSS can all be cached for a lengthy amount of time. And that applies not only in the browser, but also country and corporate level proxies will often cache that data too, which means that it reaches users faster." For more on straightforward and inexpensive caching, see the next section.

I'd add to that list the recommendations that I've seen good results from in my own work: 

* **Defer loading and parsing of JavaScript**: [Google tells us](http://code.google.com/speed/page-speed/docs/payload.html#DeferLoadingJS) that "deferring loading of JavaScript functions that are not called at startup reduces the initial download size, allowing other resources to be downloaded in parallel, and speeding up execution and rendering time" and that "in order to load a page, the browser must parse the contents of all script tags, which adds additional time to the page load." Most contemporary boilerplate HTML templates, such as the [HTML5 Boilerplate](http://html5boilerplate.com/), move JavaScript to the bottom of the page for this reason.

* **Minify everything**: Along with services like [Smush.it](http://www.smushit.com/), there are many free tools that will help you compress other resources like stylesheets and JavaScript, like [YUI Compressor](http://yui.github.com/yuicompressor/) and [Google's Closure Compiler](http://googlecode.blogspot.ca/2009/11/introducing-closure-tools.html). Many of these compressors and minify-ers integrate with contemporary Web development workflow tools like [Grunt](http://gruntjs.com/), making it a snap to work on uncompressed files and then have the resources compressed when deployed to a production environment.

## You don't have to lay out serious cash for a cache

As suggested, putting a long cache lifetime on routinely accessed, infrequently updated, resources like JavaScript libraries, CSS frameworks, user interface images, and so on is a great, low-effort, way to speed up your page load time for frequent visitors to your site. While that may sound tricky at first, it's actually pretty straightforward: 

* Start by separating your static assets from the rest of your Web site. This is often done by moving them to a separate domain like static.mydomain.com.
* Next, keep in mind that, for caching purposes, one and only one URL should point to one version of each resource. So, for example, you may start with a resource like static.mydomain.com/**v1**/js/script.js and when you deploy a new version of that resource, you will increment the version number in the URL, e.g.: static.mydomain.com/**v2**/js/script.js You can choose how and where to implement the version number, according to how you manage your resources. While using query strings -- e.g., static.mydomain.com/js/script.js?**v1** -- can work, it's not considered as effective.
* The last step is to ask your Web hosting company to set a long cache policy and headers for resources served from static.mydomain.com (or to do that yourself, if you manage your system). A year is not too long, if you've got a good system for incrementing your versioned URLs as described above.

News App teams at NPR and ProPublica have also started to increasingly "[bake out"](http://datadesk.latimes.com/posts/2012/03/introducing-django-bakery/) their data-heavy, but infrequently changing, news apps -- which means, instead of serving those applications as a live Web application with a data connection, the application is served as a large collection of static files. Serving static files is typically one of the things that most Web servers like Apache or Nginx are really good at (without much optimization), hence those news apps become very responsive.

Another option is using an HTTP accelerator, like [Varnish Cache](https://www.varnish-cache.org/), as recommended by [Scott Klein in his post about ProPublica's "News App Tech"](http://www.propublica.org/nerds/item/our-news-app-tech) and [Jeff Reifman in his series on setting up Wordpress on Amazon](http://jeffreifman.com/detailed-wordpress-guide-for-aws/). 

All of the above are no-cost ways to do caching with your existing technology and a bit of elbow grease. No content delivery network or cloud hosting magic required.

## Staying on top of your performance

If you've stuck with me this far, I'm impressed! And you must be obsessed with speed as much as  I am. One final thing to remember is that even the news sites I've analyzed for this article were probably fast at one point in their existence. Performance optimization is the kind of thing that, unfortunately, gets done somewhat irregularly. Ideally it would be an ongoing concern and a part of the process for a site's development, but that's rarely the reality: Sites evolve, get slower, and it isn't until someone takes an interest and leads a charge that things speed up again. 

You can help avoid that cycle for your site by making speed and performance one of things you test regularly, and even build into your development and analytics process. Here are three tools to get you started:

* **GTmetrix's alerts**: The free version of GTmetrx lets you monitor up to five URLs, and run up to 20 reports a day.

* **Google Analytics**: The free analytics tool makes it easy to set up a dashboard that focuses on site speed. Many other analytics tools also have this capability. Set up the report and set it to be e-mailed to you regularly (and then read it! And then look for problems!)

* **Chartbeat**: [Chartbeat](http://chartbeat.com) and many similar "real time" traffic analytics tools have alerts for site speed problems. This can often help uncover issues that only occur under unusual circumstances, like a traffic spike, and can pinpoint real opportunities for performance when you need it most.

Last, but not least, don't forget to test those alternate experiences of your site's content, e.g., mobile optimized, iPad editions, and standalone "news apps" and micro-sites. 

<hr />

This is [part of an ongoing series on the technology behind popular news brands](http://www.pbs.org/idealab/2013/02/investigating-the-technology-underlying-top-news-organizations036.html): the who, what, when, where, and why of news operations and their online decisions. If you have ideas for future columns, please [contact me on Twitter](https://twitter.com/phillipadsmith) or leave a comment over at [PBS MediaShift Idea Lab](http://www.pbs.org/idealab/2013/03/ranking-the-slowest-loading-news-sites-and-how-they-can-speed-up074.html)
