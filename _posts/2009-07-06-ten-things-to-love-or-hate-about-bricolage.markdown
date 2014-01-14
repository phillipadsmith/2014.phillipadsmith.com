---
layout: post
title: Ten things to love (or hate) about Bricolage
date: '2009-07-06 00:00:00 -0500'
excerpt: " <p><i>Cross-posted from the <a href=\"http://blog.newint.org/tech/2009/07/06/ten-things-to-love-or-hate-about-bricolage/\">New
  Internationalist Tech blog.</a></i><br />\r\n\t</p><p>Behinds the scenes at <a href=\"http://www.newint.org/\">www.newint.org</a>
  and <a href=\"http://blog.newint.org/\">blog.newint.org</a> is a tireless workhorse
  -- a system that just keeps giving and giving -- and that system is <strong>Bricolage</strong>.
  <a href=\"http://bricolagecms.org/\">Bricolage</a> is the open-source enterprise-class
  content management system (<span class=\"caps\">CMS</span>) that greatly simplifies
  the complex tasks of creating, managing, and publishing <strong>New Internationalist</strong>'s
  archive of content and media&nbsp;assets.&nbsp; </p> \r\n  <p>"
mt_id: 1820
---
 <p><i>Cross-posted from the <a href="http://blog.newint.org/tech/2009/07/06/ten-things-to-love-or-hate-about-bricolage/">New Internationalist Tech blog.</a></i><br />
	</p><p>Behinds the scenes at <a href="http://www.newint.org/">www.newint.org</a> and <a href="http://blog.newint.org/">blog.newint.org</a> is a tireless workhorse -- a system that just keeps giving and giving -- and that system is <strong>Bricolage</strong>. <a href="http://bricolagecms.org/">Bricolage</a> is the open-source enterprise-class content management system (<span class="caps">CMS</span>) that greatly simplifies the complex tasks of creating, managing, and publishing <strong>New Internationalist</strong>'s archive of content and media&nbsp;assets.&nbsp; </p> 
  <p>
<!--break-->
	As we embark on the <a href="http://blog.newint.org/tag/redesign">redesign and redevelopment</a> of <strong>New Internationalist</strong> online, after four years on our current platform, we will be retiring some systems and <a href="http://blog.newint.org/tech/2009/05/04/exploring-perl-web-frameworks/">adding new ones</a> -- and, for another few years at least, Bricolage will continue to serve <strong>New Internationalist's</strong> content management and online publishing&nbsp;needs.&nbsp;
</p> 
  <p>

	In the spirit of Cal Henderson's "<a href="http://www.youtube.com/watch?v=i6Fr65PFqfk">Why I hate Django</a>," James Walkah's "<a href="http://www.slideshare.net/walkah/why-i-hate-drupal">Why I hate Drupal</a>," and Vince Veselosky's "<a href="http://www.webquills.net/scroll/2009/05/10-things-i-lovehate-about-mov.html">10 Things I Love/Hate About Movable Type</a>," and after so many years working with Bricolage, I thought it was only fair to write up some of the reasons I keep advocating for Bricolage, and some of the reasons I sigh in frustration from time to&nbsp;time.&nbsp;
</p> 
  <ol> 
    <li> 
      <p> <em>Love:</em> <strong>Bricolage is written in Perl.</strong> And not just any Perl, Bricolage is written in <em>eye-pleasing</em> -- some might say object-oriented -- Perl (or as close as one could reasonably get in 2001). Just a quick look at the <a href="http://github.com/bricoleurs/bricolage/tree/master">application's source</a> reveals a thoroughly and thoughtfully considered approach to building a large application, which uses the best object-oriented practices of the day and provides copious tests and ample documentation to get you up-and-running. 
			<br /> <em>Hate:</em> <strong>Bricolage is written in Perl.</strong> On the other hand, it drives me nuts that people roll their eyes when I mention that Bricolage is written in Perl, which many folks seem to think is a dead (or dead-end) language. On the contrary, as described in "<a href="http://www.h-online.com/open/Healthcheck-Perl-The-Perl-Future--/features/112388/0">The Perl Future</a>" I like to believe that Perl is about to enter its&nbsp;renaissance.&nbsp;

		</p> 
    </li> 
    <li> 
      <p> <em>Love:</em> <strong>An entirely "back-end" system.</strong> Unlike other open-source content management systems (which is why I tend to refer to Bricolage as a "publishing system"), Bricolage does not serve content to the end user or web site visitor. Instead, it focuses on managing the workflow behind the publishing process and, when instructed, delivers content to a front-end system of your choice. It's not particular about what it delivers to the front-end -- <span class="caps">HTML</span>, <span class="caps">XML</span>, <span class="caps">JSON</span>, whatever-your-heart-desires pretty much -- but once those assets are handed off, Bricolage's job is done.&nbsp; 
			<br /> <em>Hate:</em> <strong>An entirely "back-end" system.</strong> Specifically, I hate that the concept of "an entirely back-end system" is so hard for people to understand. It was relatively common in the days of big, proprietary, CMSs like <a href="http://www.interwoven.com/">Interwoven</a>, but in today's environment of lightweight "community-focused" CMSs, not so much. For me, Bricolage exemplifies the ethos of "<a href="http://en.wikipedia.org/wiki/Small_Pieces_Loosely_Joined">Small Pieces Loosely Joined</a>," but -- for many -- this presents too many questions about how to achieve common, front-end, web site functionality like search, user registration, user generated content, and so on. The Bricolage community needs to do a better job of explaining the relative advantages of the keeping the <span class="caps">CMS</span> and the front-end web server separated. It would also be helpful to present developers with some "out-of-the-box" options to meet the expectations that people have for a "complete" web site&nbsp;experience.&nbsp;

		</p> 
    </li> 
    <li> 
      <p> <em>Love:</em> <strong>Small, dedicated, community.</strong> Like most of the Perl community at large, the Bricolage community is intensely knowledgeable and imminently helpful. The signal-to-noise ratio on the <a href="http://www.gossamer-threads.com/lists/bricolage/">malling lists</a> is incredibly high, and very, very, few questions go unanswered or undocumented.
			<br /> <em>Hate:</em> <strong>Small, dedicated, community.</strong> Following on the "Perl is dead" thing, many outside the community perceive Bricolage as having a relatively small number of users and developers and take that as a sign of waning interest in the system, and possibly limited options for professional development and support. I once heard the publisher of a daily online news site that uses Bricolage refer to it as the "<a href="http://en.wikipedia.org/wiki/Bugatti">Bugati</a>" of content management&nbsp;systems.&nbsp;

		</p> 
    </li> 
    <li> 
      <p> <em>Love:</em> <strong>The release cycle.</strong> Bricolage doesn't take an aggressively forward-looking development philosophy that can leave users facing frequent upgrades that lack backward compatibility, making the upgrade process potentially challenging. Instead, Bricolage releases new major versions relatively infrequently and includes all the tools needed to make the process fairly painless.&nbsp; 
			<br /> <em>Hate:</em> <strong>The release cycle.</strong> That said -- historically -- the development of Bricolage could almost be described as "glacial." And, while bug-fix releases are common, major releases that introduce new functionality have been quite rare. (That said, there has been a renewed level of development recently. The migration of the source code to GitHub seems to be leading to more visibly around the development of the&nbsp;product.)&nbsp;

		</p> 
    </li> 
    <li> 
      <p> <em>Love:</em> <strong>The new Bricolage repository on GitHub.</strong> A few months ago, thanks to the <a href="http://justatheory.com/computers/vcs/git/bricolage-to-git.html">Herculean efforts of David Wheeler</a>, the Bricolage source code repository was migrated from Subversion to Git, and -- more importantly -- to <a href="http://github.com/bricoleurs">GitHub</a>. Now, with source code that is easily forked, and helpful Wiki pages to guide those new to Git, the barrier to getting new developers involved is reduced.&nbsp; 
			<br /> <em>Hate:</em> <strong>The www.bricolagecms.org web site.</strong> Unfortunately, the Bricolage web site did not receive the same upgrade. Though the domain name changed from the rather esoteric www.bricolage.cc to the slightly more obvious <a href="http://www.bricolagecms.org/">www.bricolagecms.org</a>, the actual web site is in need of either a serious update or a major simplification to help avoid the need for ongoing maintenance. Somewhat outdated, and a less-than-great presentation of Bricolage's relative strengths in the current online content management and publishing environment, it's sorely in need of a refresh, rethink, and its own&nbsp;renaissance.
		</p> 
    </li> 
  </ol> 
  <p>

	That's where I'll leave it for today. As you can see, that's only five things to love (or hate) about Bricolage. Rest assured I'll have (at least) another five ready to post in the coming&nbsp;days.&nbsp;
</p> 
  <p>
	And, as part of the Bricolage community, I should state that these gripes are mostly a big, fat, "note to self" on where I need to focus some of my energy in the coming weeks, months, and&nbsp;years.&nbsp;
</p> 
  <p>
	Got a beef or big-up for Bricolage? The comments are&nbsp;open.&nbsp; <br /></p><p><i>Cross-posted from the <a href="http://blog.newint.org/tech/2009/07/06/ten-things-to-love-or-hate-about-bricolage/">New Internationalist Tech blog.</a></i><br />

	</p>
