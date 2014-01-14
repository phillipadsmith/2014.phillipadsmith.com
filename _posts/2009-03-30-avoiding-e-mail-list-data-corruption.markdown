---
layout: post
title: Avoiding e-mail list data corruption
date: '2009-03-30 17:03:31 -0600'
excerpt: |-
  <p><em>Re-posted from the <a href="http://blog.newint.org/tech/2009/03/30/email-list-data-corrupti/">New Internationalist Tech Blog</a></em></p>

  <p>A few weeks ago, I started a major upgrade to New Internationalist's broadcast e-mail infrastructure. In the process of the upgrade, I noticed that a small number of e-mail subscriber records had been maliciously injected with arbitrary data (in this case, URLs to some other site). </p>
mt_id: 1810
---
<p><em>Re-posted from the <a href="http://blog.newint.org/tech/2009/03/30/email-list-data-corrupti/">New Internationalist Tech Blog</a></em></p>

<p>A few weeks ago, I started a major upgrade to New Internationalist's broadcast e-mail infrastructure. In the process of the upgrade, I noticed that a small number of e-mail subscriber records had been maliciously injected with arbitrary data (in this case, URLs to some other site). </p>

<p>Upon investigating the issue, it occurred to me that many other sites and organizations with larger e-mails list could be susceptible to this type of e-mail data corruption. So here's a quick run-down of the problem and some possible solutions. </p>

<p>The injection is relatively unsophisticated, and is not specific to one e-mail broadcast tool (i.e., I think it would be an issue for almost any e-mail platform on the market). Basically, the "attacker" is:</p>

<ul>
<li>Posting data into existing e-mail list subscription forms</li>
<li>Guessing for common e-mail addresses (think of addresses like jane@isp.com)</li>
<li>Posting in malicious data and links for text fields like "First name" and "Last name"</li>
</ul>

<p>What results is a record that looks like:</p>

<blockquote>
  <p>Email: email@isp.com <br />
  First: http://my-malicious-url.com<br />
  Last: http://my-other-malicious-url.com<br /></p>
</blockquote>

<p>If we were to send out an e-mail campaign with personalization using the First name and Last name, we would inadvertently send that content to the subscriber. </p>

<p>Though the attack is fairly limited by the requirement of guessing existing subscribers e-mail addresses and, depending on the e-mail broadcast system, possibly a message triggered to the subscriber about a record change, or a subscription confirmation, it does point out that groups with larger e-mail lists could take steps to avoid this proactively.</p>

<p>In New Internationalist's case, I added some <a href="http://docs.jquery.com/Plugins/Validation">client-side form validation</a> to help ensure that the data going into our broadcast tool was less likely to contain URLs or obviously bad data. </p>

<p>On the broadcaster side of things, I set up regular reports to look for cases of questionable data in our database, which I can then investigate manually. </p>

<p>Down the road, I'd like us to implement a "middleware" solution that also provides server-side data validation and does some pre-screening of the data to be posted to the broadcaster (using something like <a href="http://search.cpan.org/~ilyam/Mail-CheckUser-1.21/CheckUser.pm">Mail-CheckUser</a> or similar). </p>

<p>Would be great to know if other organizations have implemented anything similar, or have experienced similar attempts at corrupting their e-mail list data. </p>
