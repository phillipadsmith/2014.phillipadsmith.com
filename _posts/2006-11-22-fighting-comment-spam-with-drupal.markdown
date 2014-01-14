---
layout: post
title: Fighting comment spam with Drupal
date: '2006-11-22 03:32:45 -0600'
excerpt: |-
  <p>Recently, I asked a colleague why I couldn't comment on their fancy, new, corporate blog and this was their response:</p>

  <blockquote>
    <p>Yeah, it's pretty unfortunate at the moment, I've had to turn off commenting for unregistered users on the
    site, because we were getting spammed so heavily and even though I had the Spam filter on at full strength many were still
    getting through. I'd like to find a better solution, though, because right now you have to create an account to be able to
    post comments (which nobody will do, I'm sure). If you have any wisdom or suggestions from your <a href="http://www.drupal.org">Drupal</a> experience on how
    to deal with such massive spamming issues, I'd love to glean some knowledge</p>
  </blockquote>

  <p>At the risk of attracting a line-up of comment spammers determined to make me look bad, I offer the following recipe for fighting comment spam with Drupal (as I do on my <a href="http://www.communitybandwidth.ca/phillipadsmith">Drupal-powered blog</a>):</p>
mt_id: 1734
---
<p>Recently, I asked a colleague why I couldn't comment on their fancy, new, corporate blog and this was their response:</p>

<blockquote>
  <p>Yeah, it's pretty unfortunate at the moment, I've had to turn off commenting for unregistered users on the
  site, because we were getting spammed so heavily and even though I had the Spam filter on at full strength many were still
  getting through. I'd like to find a better solution, though, because right now you have to create an account to be able to
  post comments (which nobody will do, I'm sure). If you have any wisdom or suggestions from your <a href="http://www.drupal.org">Drupal</a> experience on how
  to deal with such massive spamming issues, I'd love to glean some knowledge</p>
</blockquote>

<p>At the risk of attracting a line-up of comment spammers determined to make me look bad, I offer the following recipe for fighting comment spam with Drupal (as I do on my <a href="http://www.communitybandwidth.ca/phillipadsmith">Drupal-powered blog</a>):
<!--break-->
* First, I use the <a href="http://drupal.org/project/captcha">Captcha module</a> without the image captcha (instead, it uses a simple math question to confirm that the comment is from a human)
* Then I add the <a href="http://drupal.org/node/50733">Comment Mail module</a> (to get notifications of new comments)
* Next, I stir in the <a href="http://drupal.org/node/67414">Comment Info</a> (which allows people to check a "remember me" button)
* Finally, add a quick dash of <a href="http://www.kerneltrap.org/jeremy/drupal/spam/">Spam Module v2</a> (just in case the occasional <a href="http://en.wikipedia.org/wiki/Brute_force_attack">brute force attack</a> on the math question slips through<big><b>*</b></big>)</p>

<p>This way, I don't require that people log-in, or create an account, to leave comments.</p>

<p>The results:</p>

<ul>
<li>People actually comment (on occasion) because there are fewer hurdles to jump over</li>
<li>Increased security, because there are no "privileged" accounts on my system</li>
<li>No spam: ever. (Though, I'm hanging my ass out a bit with this posting!)</li>
<li>No need to pre-screen comments, as the only ones that get through are legit</li>
</ul>

<p>There you go: <a href="http://communitybandwidth.ca/phillipadsmith/fighting-comment-spam-with-drupal">a Drupal comment-spam fighting recipe</a> fresh from your friends at Community Bandwidth. Go <a href="http://www.drupal.org">Drupal</a>!</p>

<p><big><b>*</b></big> Update: <a href="http://pingv.com/about/about-us/people">Laura Scott</a> of <a href="http://pingv.com">Ping Vision</a> reported on the last <a href="http://groups.drupal.org/node/1585">Drupal shops</a> call that she was getting the occasional spam still using a similar recipe -- so, if you have an experience to share -- or, better yet, another recipe -- please post it here!</p>
