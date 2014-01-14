---
layout: post
title: Exploring Perl Web frameworks
date: '2009-05-07 12:49:23 -0500'
excerpt: "<p><em>Cross-posted from the <a href=\"http://blog.newint.org/tech/2009/05/04/exploring-perl-web-frameworks/\">New
  Internationalist Tech blog</a></em></p>\r\n<p>A couple of years ago I started looking
  at options to deliver common “front end” functionality for sites using <a href=\"http://www.bricolagecms.org\">Bricolage</a>,
  the content-management system that is used at <a href=\"http://www.newint.org\">New
  Internationalist</a></p> \r\n  <p>Initially, what I had in mind to provide this
  front-end functionality was a “swarm” of micro-applications, where each little application
  provided one simple, specific, function, e.g., user registration, comments on content,
  voting and rating, sharing content, etc. There were other people thinking along
  these lines too, and – eventually – I came across the <a href=\"http://microapps.org/\">MicroApps
  project</a>, which stated its philosophy as:&nbsp;</p> \r\n  <blockquote> \r\n    <p>MicroApps
  are small REST applications that are designed from the ground up to be integrated
  with other applications. Usually, they are not directly useful on their own, but
  must be integrated into other applications (this is what differentiates a MicroApp
  from a regular REST application).</p> \r\n  </blockquote> \r\n  <p>Unfortunately,
  the project appeared to be at a standstill, and my experience with Python was pretty
  limited. Most of my experience is with Perl, so my investigation headed in that
  direction, and eventually lead to the topic of this post: Perl Web frameworks.&nbsp;</p>"
mt_id: 1815
---
<p><em>Cross-posted from the <a href="http://blog.newint.org/tech/2009/05/04/exploring-perl-web-frameworks/">New Internationalist Tech blog</a></em></p>
<p>A couple of years ago I started looking at options to deliver common “front end” functionality for sites using <a href="http://www.bricolagecms.org">Bricolage</a>, the content-management system that is used at <a href="http://www.newint.org">New Internationalist</a></p> 
  <p>Initially, what I had in mind to provide this front-end functionality was a “swarm” of micro-applications, where each little application provided one simple, specific, function, e.g., user registration, comments on content, voting and rating, sharing content, etc. There were other people thinking along these lines too, and – eventually – I came across the <a href="http://microapps.org/">MicroApps project</a>, which stated its philosophy as:&nbsp;</p> 
  <blockquote> 
    <p>MicroApps are small REST applications that are designed from the ground up to be integrated with other applications. Usually, they are not directly useful on their own, but must be integrated into other applications (this is what differentiates a MicroApp from a regular REST application).</p> 
  </blockquote> 
  <p>Unfortunately, the project appeared to be at a standstill, and my experience with Python was pretty limited. Most of my experience is with Perl, so my investigation headed in that direction, and eventually lead to the topic of this post: Perl Web frameworks.&nbsp;</p> 
<!--break-->
  <p>While they may not often be used for micro-applications, <a href="http://en.wikipedia.org/wiki/Web_application_framework">Web frameworks</a> are all the rage. You’ve probably heard of <a href="http://rubyonrails.org/">Ruby on Rails</a>, and you may have even heard of <a href="http://www.djangoproject.com/">Django</a> (a Python-based Web framework) or <a href="http://www.symfony-project.org/">Symphony</a> (PHP). Put simply: these Web frameworks aim to make Web application development faster and commonly “bake in” some best practices.&nbsp;</p> 
  <h3 id="yesperlhascrudtoo">Yes, Perl has CRUD too</h3> 
  <p>Perl, though frequently dismissed by the youngsters, is not a language that likes to get left behind, and there are now several Perl Web frameworks to choose from.&nbsp;</p> 
  <p>Around the time of thinking about micro-applications, I stumbled on <a href="http://jifty.org">Jifty</a>. Jifty was developed by <a href="http://bestpractical.com/">Best Practical</a> – an established software company in the Perl world – and was used in the production and delivery of their <a href="http://hiveminder.com">Hiveminder application</a>.&nbsp;</p> 
  <p>I had heard of <a href="http://usegantry.org/">Gantry</a>, <a href="http://maypole.perl.org/">Maypole</a>, and <a href="http://www.catalystframework.org/">Catalyst</a> (and – of course – <a href="http://cgi-app.org/">CGI::Appliation</a>) but I had not really given them much attention until I first <a href="http://www.oreillynet.com/onlamp/blog/2006/08/hey_thats_pretty_jifty_er_nift.html">read about Jifty</a>.&nbsp;</p> 
  <p>Fast forward to 2009. We’re underway with a number of initiatives of strategic importance to the <a href="http://www.newint.org">New Internationalist</a> – re-launching NI’s various Web properties – and so it’s time to start thinking again about the technologies that will carry NI forward.&nbsp;</p> 
  <p>My colleague Charlie had been recently experimenting with Jifty and Catalyst, and – in the interest of the experience to be gained by getting one’s hands dirty – I also decided to jump in and re-explore the state of Perl Web frameworks.&nbsp;</p> 
  <p>This time I thought I’d look at the three most active, or promising, options: Catalyst, Jifty, and <a href="http://mojolicious.org/">Mojo/Mojolicious</a>. (I also took a pretty close look at <a href="http://cgi-app.org/">CGI::Application</a>, but decided to pass on that for now.)</p> 
  <p>So, far from an evaluation, I thought I’d just jot down my first impressions of where these frameworks are by exploring how easy it is to get up-and-running and working through their tutorials.&nbsp;</p> 
  <h3 id="catalyst">Catalyst</h3> 
  <p>My development environment for this adventure was <a href="http://www.vmware.com/products/fusion/">VMware’s Fusion</a> on a MacBook Pro and a stock Debian 5.0 “Lenny” installation.&nbsp;</p> 
  <p>I started with the <a href="http://search.cpan.org/~hkclark/Catalyst-Manual-5.7020/lib/Catalyst/Manual/Tutorial/Intro.pod#CATALYST_INSTALLATION">Catalyst installation documentation</a> and followed their instructions for an installation using <a href="http://wiki.debian.org/Aptitude">aptitude</a>. Though the basic installation went well, it seemed to leave me with many missing modules, including <a href="http://search.cpan.org/~flora/Catalyst-Devel-1.12/lib/Catalyst/Devel.pm">Catalyst::Devel</a> (which is odd, as that appears to be a rather critical piece). After various attempts to create an application skeleton or start up the Web server, I was able to get the various missing bits installed via CPAN and to get everything working. On to the documentation and tutorials…</p> 
  <p>My first impression was that the documentation was very well maintained. The tutorials are abundant and thorough, and make attempts to address the various versions of Catalyst that are out there in the wild. Thanks to the tutorials, I was able to get a simple test application set up relatively quickly.&nbsp;</p> 
  <p>However, what Catalyst makes up for in documentation, it lacks in simplicity. As the Catalyst documentation states:</p> 
  <blockquote> 
    <p>Catalyst is designed for flexibility and power; to an extent, this comes at the expense of simplicity. Programmers have many options for almost everything they need to do, which means that any given need can be done in many ways, and finding the one that’s right for you, and learning the right way to do it, can take time. TIMTOWDI works both ways.</p> 
  </blockquote> 
  <p>Compared to the competing Perl Web frameworks or Web frameworks in other languages, I found that Catalyst required more effort to get started and doesn’t provide an out-of-the-box experience. Not a bad thing but a consideration nonetheless.&nbsp;</p> 
  <h3 id="jifty">Jifty</h3> 
  <p>For Jifty, this time I went with the suggested <em>apt-get install</em> route to get things downloaded and installed. Unfortunately, the first thing I ran into was this rather intimidating warning:</p> 
  <blockquote> 
    <p>WARNING: This key is not certified with a trusted signature!</p> 
  </blockquote> 
  <p>Moving right along, I installed the package anyway and tried to set up my first application. Like Catalyst, I was presented with various errors about missing modules. One <a href="http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=506176">Google search</a> and several CPAN installations later, as promised, I got a Pony.&nbsp;</p> 
  <p>One nice thing that Jifty gives you out-of-the-box is an administration interface, making it easy to start adding test data to your model. The other really helpful thing that Jifty provides is, well, <em>everything.</em> Part of what makes Jifty so cool is:</p> 
  <blockquote> 
    <p>Out of the proverbial box, Jifty comes with one way to do everything you should need to do: one database mapper, one templating system, one Web services layer, one AJAX toolkit, one set of handlers for standalone or FastCGI servers. We work hard to make all the bits play well together, so you don’t have to.</p> 
  </blockquote> 
  <p>Which means trading off options (as in the case of Catalyst) for simplicity.</p> 
  <p>Jifty’s documentation is a little rough around the edges, but the tutorials are up-to-date and I was able to get my test application running and doing fancy, AJAX-y, stuff in no time.</p> 
  <h3 id="mojomojolicious">Mojo/Mojolicious</h3> 
  <p><a href="http://mojolicious.org/">Mojo</a> is a “A next generation Web framework for the Perl programming language” and <a href="http://mojolicious.org/">Mojolicious</a> is a <a href="http://en.wikipedia.org/wiki/Model-view-controller">MVC</a> framework built on top of Mojo. The primary author of Mojo – Sebastian Riedel – was one of the founders of Catalyst and, with Mojo, he sets out to create something more like Jifty – or, if you prefer, “the Web in a box.”</p> 
  <p>Mojo was by far the easiest to install: just a straightforward tarball to download and a few Perl “make” commands and Mojo was up-and-running.&nbsp;</p> 
  <p>Unfortunately, the fun stops there at the moment. Mojo is very new and provides fairly limited documentation to work from. And, idling in the IRC channel, one can see lots of activity and signs that there is much work to be done before Mojo becomes a practical alternative to Catalyst or Jifty. However, once it does, it’s going to be one to watch.&nbsp;</p> 
  <h3 id="conclusions">Conclusions</h3> 
  <p>So, a few parting thoughts on my exploration of Perl Web frameworks:</p> 
  <ul> 
    <li> 
      <p>I worry that some of the installation issues I ran into will discourage other people to try these incredibly powerful frameworks. It’s been years since I’ve looked at any of the competing frameworks in other languages, but my guess would be that most installation issues are ironed out and the process is dead-simple.&nbsp;</p> 
    </li> 
    <li> 
      <p>However, any time I ran into a problem, I was able to hop into the IRC channel for the project and find friendly and helpful advice. All three project’s channels are active and filled with idling contributors.&nbsp;</p> 
    </li> 
  </ul> 
  <p>And, for me, the current prize goes to Jifty for being friendly to developers of all experience levels. For rapid application prototyping, Jifty makes the set-up process fast and easy, provides a full stack for application development, and makes a lot of relatively unimportant decisions (database mapper, Javascript toolkit, templating language, etc.) for you right upfront.&nbsp;</p> 
  <p>I’m anxious to see what Charlie comes up with during his explorations of the same.&nbsp;</p>
  <p><em>Cross-posted from the <a href="http://blog.newint.org/tech/2009/05/04/exploring-perl-web-frameworks/">New Internationalist Tech blog</a>. Comments? Please post them <a href="http://blog.newint.org/tech/2009/05/04/exploring-perl-web-frameworks/">over here</a>.</em></p>
