---
layout: post
title: Ten things to love (or hate) about Bricolage. Part II.
date: '2009-07-15 00:00:00 -0500'
category: coding
tags:
- perl
- bricolage
excerpt: " <p><i>Cross-posted from the <a href=\"http://blog.newint.org/tech/2009/07/06/ten-things-to-love-or-hate-about-bricolage/\">New
  Internationalist Tech blog.</a></i><br />\r\n    </p>\r\n\r\n<p>\r\n\tOkay, here
  we go — because you’ve all been so anxious for it — the second part of the infamous
  \"<a href=\"http://blog.newint.org/tech/2009/07/06/ten-things-to-love-or-hate-about-bricolage/\">Ten
  things to love (or hate) about Bricolage.</a>\" \r\n\r\n</p>"
mt_id: 1821
---
 <p><i>Cross-posted from the <a href="http://blog.newint.org/tech/2009/07/06/ten-things-to-love-or-hate-about-bricolage/">New Internationalist Tech blog.</a></i><br />
    </p>

<p>
	Okay, here we go — because you’ve all been so anxious for it — the second part of the infamous "<a href="http://blog.newint.org/tech/2009/07/06/ten-things-to-love-or-hate-about-bricolage/">Ten things to love (or hate) about Bricolage.</a>" 

</p> 
<!--break-->
  <p>
	In this week’s post I’ll focus on the things that, as a Bricolage implementer (which I’ll refer to here as a "developer," not to be confused with a <a href="http://bricolagecms.org/docs/current/api/?Bric::Hacker">Bricolage hacker</a>), you might love (or hate) about Bricolage, the open-source enterprise-class content management system (<span class="caps">CMS</span>) that is used at <a href="http://www.newint.org">New Internationalist</a>.
</p> 
  <ul> 
    <li> 
      <p> <em>Love:</em> <strong>The integrated development environment.</strong> Bricolage is the only Web publishing tool that I’ve worked with that ships with a multi-user "integrated development environment." When working on template assets in Bricolage (akin to "theme" or "skin" assets in other content-management systems), each developer has their own workspace and, more importantly, development sandbox. Check out a template and it’s locked from editing by others — cool. Even cooler? Edit that template, preview a content asset, and see the template changes reflected (while others previewing the asset still see the last "deployed" version of the template). This makes day-to-day site tweaks a breeze, and doesn’t require a separate development server or, often problematic, "syncing." 
			<br /> <br /> <em>Hate:</em> <strong>The integrated development environment.</strong> This one feature of Bricolage is so exceptionally useful, that I wish the concept was present in every other content-management system. <a href="http://www.movabletype.org/">Movable Type</a>, <a href="http://openmelody.org/">Open Melody</a>, and so on — take&nbsp;notice. 
		</p> 
    </li> 
    <li> 
      <p> <em>Love:</em> <strong>Virtual <span class="caps">FTP</span> interface.</strong> As if the integrated development environment for templates wasn’t enough, Bricolage goes on to offer "<a href="http://bricolagecms.org/docs/current/api/?Bric::Util::FTP::Server">virtual <span class="caps">FTP</span></a>" access to those templates. That’s right: just fire up your <span class="caps">FTP</span> client and you’re interacting with that template <span class="caps">IDE</span> as if it were files in a filesystem. Only, when you make an edit to a template, the template is instantly moved into your workspace and sandbox. Save that edit and you can preview the content asset with the template changes. Best part yet: add a <strong>.deploy</strong> to the end of the template file name and the template is instantly deployed for use by live content assets on the site. Genius. 
			<br /> <br /> <em>Hate:</em> <strong>Virtual <span class="caps">FTP</span> interface.</strong> The only gripe I have here is that this feature isn’t implemented for all of Bricolage’s assets. As someone who’s inclined toward development tools over Web-based user interfaces, I’d love to be able to edit content and media assets via the virtual <span class="caps">FTP</span> interface&nbsp;also. 
		</p> 
    </li> 
    <li> 
      <p> <em>Love</em>: <strong>Elements <span class="amp">&amp;</span> sub-elements.</strong> The core of Bricolage’s ewwy-chewy-goodness as a publishing platform for large organizations is its flexible approach to describing assets and creating interfaces that enable humans to create those (potentially complex) assets. Unlike the common "Title," "Teaser," "Text," approach provided by most content-management systems, Bricolage enables endless possibilities for entering well-structured data. This flexibility is something that other CMSs are only starting to incorporate, e.g., <a href="http://drupal.org/project/cck">Content Construction Kit</a> in Drupal, <a href="http://plone.org/documentation/manual/archetypes-developer-manual/what-is-archetypes/what-is-archetypes">Archetypes</a> in Plone (which, incidentally, <a href="http://svn.zope.de/plone.org/collective/filter/trunk/doc/walkthrough.rst">was inspired by Bricolage’s approach to forms and views</a>). 
			<br /> <br /> <em>Hate:</em> <strong>Elements <span class="amp">&amp;</span> sub-elements.</strong> Historically, the step-by-step process of adding groups of elements (called sub-elements) was, frankly, a pain-in-the-ass. Now, thanks to some recent, <span class="caps">AJAX</span>-powered, <span class="caps">UI</span> improvements, this has become more palatable. However, the lack of sub-element "sets" for common input element groupings — e.g., street address, contact information, and so on — and the lack of field-validation or input-masking options still leaves room for&nbsp;improvement.
		</p> 
    </li> 
    <li> 
      <p> <em>Love:</em> <strong>Powerful, well-documented, <span class="caps">API</span>.</strong> As if the above wasn’t enough to make a developer smile, Bricolage just doesn’t let up. Its thorough and comparatively well-documented <span class="caps">API</span> is (most days) a pleasure to work with. And, like all good Perl software, the documentation comes <strong>with</strong> the application. No Web access, no problem. 
			<br /> <br /> <em>Hate:</em> <strong>Lousy <span class="caps">API</span> browser. Mediocre documentation.</strong> The one downside is — probably because I’m so used to software that <em>doesn’t</em> come <strong>with</strong> the documentation — that my first instinct is to visit the <a href="http://bricolagecms.org/docs/current/api/"><span class="caps">API</span> browser online</a>. To date, that’s been a mediocre experience due to some less-than-perfect browser support in the output of <a href="http://github.com/theory/pod-site/tree/master">Pod::Site</a>. Good news is that <a href="http://justatheory.com/">David</a> has been busy improving Pod::Site and the <span class="caps">API</span> browser (sneak peak <a href="http://bricolagecms.org/docs/devel/api/">here</a>). Other gripe: though the developer documentation is fairly good, the general documentation — for administrators, for content editors, and so on — is somewhat lacking. (Actually, the in-application "help" is pretty good, but needs to be ported to a Web-friendly&nbsp;format.)
		</p> 
    </li> 
    <li> 
      <p> <em>Love:</em> <strong><span class="caps">SOAP</span> interface.</strong> Last but not least is the uber-powerful <a href="http://bricolagecms.org/docs/devel/api/Bric::SOAP"><span class="caps">SOAP</span> interface</a>. Bricolage’s <span class="caps"><span class="caps">SOAP</span></span> interface provides a standardized way to access most assets programmatically. Content and media assets, element types, templates, and managing workflow, can all be accessed and managed via SOAP. This comes in pretty handy when importing content from legacy systems, automating parts of the publishing process, and syncing data between Bricolage instances (should you want to). 
			<br /> <br /> <em>Hate:</em> <strong><span class="caps">SOAP</span> interface.</strong> Well, what can I say, it’s <span class="caps">SOAP</span>. It’s huge, verbose, slow, and — at times — very annoying. But, until there’s an <span class="caps">XML</span>-<span class="caps">RPC</span> interface or similar, it gets the job&nbsp;done. 
		</p> 
    </li> 
  </ul> 
  <p>

	That’s it for today’s developer-centric look at things to love (or hate) about Bricolage. Hope you enjoyed. (And, as mentioned previously, these gripes are mostly a big, fat, "note to&nbsp;self.")
</p> 
  <p>
	Got a beef or big-up for Bricolage? The comments are open. (And maybe, just maybe, I might have another five things to love (or hate) in store for&nbsp;you.)
</p>
 <p><i>Cross-posted from the <a href="http://blog.newint.org/tech/2009/07/06/ten-things-to-love-or-hate-about-bricolage/">New Internationalist Tech blog.</a></i><br />
	</p>
