---
layout: post
title: Ending Web form abuse and spam
date: '2007-06-26 00:20:42 -0500'
excerpt: |-
  <p>Lately, "form spam" has been the bane of my existence. Anyone who runs more than one or two Web sites has probably had the experience of dealing with what can amount to hundreds of junk messages a day coming through different types of Web-based contact forms. "Report a bug," "Contact the Web team," "Write a letter to the Editor," etc. -- they're all targets for malicious spam bots and their ilk.</p>

  <p>Recently I decided to double my previous efforts to find some solutions to Web-based form abuse. </p>

  <p>Many of the organizations that I'm working with rely on a number of different systems to deliver content to the Web, which makes it more challenging to find a one-size-fits-all solution. That said, they all use a <a href="http://en.wikipedia.org/wiki/LAMP_%28software_bundle%29">LAMP</a> stack and several of them are using the <a href="http://drupal.org/">Drupal</a> content-management system in some capacity, e.g., to provide some front-end interactivity, user management, etc. So, the real opportunity was to find something that either played nice with Drupal, or was built in PHP/Perl/Python so that it could be integrated with Drupal where necessary.</p>
mt_id: 1771
---
<p>Lately, "form spam" has been the bane of my existence. Anyone who runs more than one or two Web sites has probably had the experience of dealing with what can amount to hundreds of junk messages a day coming through different types of Web-based contact forms. "Report a bug," "Contact the Web team," "Write a letter to the Editor," etc. -- they're all targets for malicious spam bots and their ilk.</p>

<p>Recently I decided to double my previous efforts to find some solutions to Web-based form abuse. </p>

<p>Many of the organizations that I'm working with rely on a number of different systems to deliver content to the Web, which makes it more challenging to find a one-size-fits-all solution. That said, they all use a <a href="http://en.wikipedia.org/wiki/LAMP_%28software_bundle%29">LAMP</a> stack and several of them are using the <a href="http://drupal.org/">Drupal</a> content-management system in some capacity, e.g., to provide some front-end interactivity, user management, etc. So, the real opportunity was to find something that either played nice with Drupal, or was built in PHP/Perl/Python so that it could be integrated with Drupal where necessary.</p>

<p>The biggest challenge was that I'd been using a Web-form processing script that I was pretty happy with until now; it made it possible to set up a number of rather complicated forms with relative ease and lots of processing flexibility (automated e-mail responses, etc.). The shortcomings were no form protection and the data wasn't stored in a database. So, the first options that I looked at were ways to simply improve the existing forms with a "<a href="http://en.wikipedia.org/wiki/Captcha">captcha</a>" or something similar. The short-list of options were:</p>

<ul>
<li><a href="http://15daysofjquery.com/safer-contact-forms-without-captchas/11/">Safer Contact Forms Without CAPTCHA’s</a></li>
<li><a href="http://captchas.net/">Captchas.net - Free CAPTCHA-Service</a></li>
<li><a href="http://www.archreality.com/jcap/">Jcap (Captcha Validation Javascript)</a></li>
<li><a href="http://sourcefirst.wordpress.com/2007/05/02/simple-javascript-captcha/">Simple Javascript CAPTCHA</a></li>
<li><a href="http://pear.php.net/manual/en/package.html.html-quickform.php">HTML_QuickForm</a></li>
</ul>

<p>And, last but not least, the rather socially-responsible <a href="http://recaptcha.net/">reCaptcha</a> -- a service that helps the folks at <a href="http://archive.org">Archive.org</a> to digitize books. </p>

<p>Looking at reCaptcha got me thinking about Drupal again. Since the release of Drupal 5, I hadn't done a good review of what "Web form" capabilities and options were available -- so I thought it might be a good idea to have a quick look there too. A scan of the <a href="http://drupal.org/Project/">Projects</a> page revealed a number of potential options including:</p>

<ul>
<li><a href="http://drupal.org/project/advcontact">Advanced Contact</a></li>
<li><a href="http://drupal.org/project/contact_list">Contact List &amp; Forms</a></li>
</ul>

<p>Both of these only deal with Drupal's basic site-wide contact form ... so they weren't quite right for my needs. Next stop was the <a href="http://drupal.org/project/feedback">Feeback</a> module (which is maintained by Khalid Baheyeldin of <a href="http://drupalcamptoronto.org">DrupalCampToronto</a> fame), which was quite close to what I was after, but didn't have enough form customization flexibility and appeared to have an issue with captcha integration.</p>

<p>Last stop was <a href="http://drupal.org/project/webform">Web form</a> (my new favourite module!). It offers complete form flexibility, validation and post-processing rules, and a great form data management interface. I guess this module's been around for a while, but this was the first time I'd taken the time to install it and play around. </p>

<p>After a quick tip from <a href="http://commentisfree.guardian.co.uk/adam_maanit/profile.html">Adam Ma'anit</a> that lead me to the <a href="http://drupal.org/project/form_store">Form store</a> module, I was able to create some test contact forms and attach math-based "captcha points" to them. </p>

<p>And, finally, to make it possible for these Drupal-powered contact forms to play nice with non-Drupal pages, Webform allowed me to drop in a hidden field with a "%server[HTTP_REFERER]" variable, which pretty much reproduced the behaviour of the old forms by grabbing the URL of the referring (non-Drupal) page. </p>

<p>Score one for the good guys. Next up: making <a href="">Forward</a> module's "Send this page to a friend" functionality play nice with non-Drupal pages. </p>
