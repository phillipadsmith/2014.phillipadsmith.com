---
layout: post
title: 'Managing large e-mail lists: One list to rule them all'
date: '2009-04-23 14:28:23 -0500'
excerpt: " <p><em>Originally posted on the <a href=\"http://blog.newint.org/tech/2009/04/23/managing-large-e-mail-lists-part-1/\">New
  Internationalist Tech blog</a></em></p>\r\n\r\n<p>Over the past several years, I&#8217;ve
  worked with many organizations and campaigns that have seen their e-mail subscriber
  lists grow dramatically. As these e-mail lists grow past the thousands of subscribers
  mark and head into the tens of thousands, or hundreds of thousands, new strategies
  for list management are often required. </p>\r\n\r\n<p>A couple of weeks ago I wrote
  about <a href=\"http://blog.newint.org/tech/2009/03/30/email-list-data-corrupti/\">Avoiding
  e-mail list data corruption</a> and &#8211; continuing on that theme &#8211; I&#8217;ll
  attempt to start documenting some of the approaches that I have explored to keep
  large lists growing, manageable, and insightful. </p>\r\n\r\n<p>This week I&#8217;ll
  focus on making them more manageable. </p>"
mt_id: 1812
---
 <p><em>Originally posted on the <a href="http://blog.newint.org/tech/2009/04/23/managing-large-e-mail-lists-part-1/">New Internationalist Tech blog</a></em></p>

<p>Over the past several years, I&#8217;ve worked with many organizations and campaigns that have seen their e-mail subscriber lists grow dramatically. As these e-mail lists grow past the thousands of subscribers mark and head into the tens of thousands, or hundreds of thousands, new strategies for list management are often required. </p>

<p>A couple of weeks ago I wrote about <a href="http://blog.newint.org/tech/2009/03/30/email-list-data-corrupti/">Avoiding e-mail list data corruption</a> and &#8211; continuing on that theme &#8211; I&#8217;ll attempt to start documenting some of the approaches that I have explored to keep large lists growing, manageable, and insightful. </p>

<p>This week I&#8217;ll focus on making them more manageable. </p>
<!--break-->
<h3 id="ad-hocbeginnings">Ad-hoc beginnings</h3>

<p>Many big e-mail lists come from humble beginnings. Perhaps they emerge from an online campaign that &#8220;went viral&#8221; or the result of a great promotion or contest. Often, in the scramble to get an e-mail management system (EMS) into place, there&#8217;s little time to think about the &#8220;right way(tm)&#8221; to set things up. Eventually, these (often ad-hoc) initial configuration decisions, can limit an organization&#8217;s ability to proactively monitor and analyze their subscriber data, or &#8211; equally as important &#8211; can impact the subscribers&#8217; self-care experience. </p>

<p>Though some will argue there are many &#8220;right ways&#8221; to approach e-mail list management, over the years I&#8217;ve come to understand that &#8211; for organizations with tens or hundreds of thousands of e-mail addresses &#8211; there really is only one right way. And that is: One big list.  </p>

<h3 id="onelisttorulethemall">One list to rule them all</h3>

<p>Depending on your EMS, you may be presented with a dizzying array of options for what to do with subscribers, where to put them, and how to manage them, and that&#8217;s why I believe it&#8217;s so important to keep things simple in whatever system you&#8217;re using. Specifically, that starts with ignoring all of the enticing buttons, links, and documentation that lure you toward creating more than one list of subscribers. Trust me: it&#8217;s a mistake. </p>

<p><strong>One organization should only have one list of e-mail subscribers.</strong> I&#8217;ll explain why&#8230; limiting your e-mail subscribers to one list means:</p>

<ul>
<li>Less confusion about which list to use for a particular campaign</li>
<li>Greatly improved reporting and analysis opportunities</li>
<li>More manageable deliverability and list auditing processes</li>
<li>Easier backups (you&#8217;re backing up your e-mail list, right?)</li>
<li>And, most importantly, easier subscribe and unsubscribe options for the subscribers (and fewer places to search for them, should they send you an request to update their record)</li>
</ul>

<p>So, when setting up an EMS from scratch, my advice is to stick to one list, and avoid the one-list-per-campaign or one-list-per-region approach. Read on and I&#8217;ll explain how to make it work. (And for those that don&#8217;t agree, I&#8217;ll see you in the comments section below!)</p>

<h3 id="interestseditionsandmore">Interests, editions, and more</h3>

<p>Inevitably, the reason that an organization ever ends up with more than one list is because there&#8217;s a need to segment subscribers according to some specific event, or interest, or characteristic of the subscriber. Typical examples for an organization like New Internationalist would be: </p>

<ul>
<li>People who subscribe to the print magazine</li>
<li>People who have purchased something from the <a href="http://www.newint.org/shop" title="Fair trade and ethical products from New Internationalist">New Internationalist fair trade catalog or ethical online shops</a></li>
<li>People who have donated to one of New Internationalist&#8217;s campaigns</li>
<li>People who live in a specific region of the world and would like a more focused monthly edition of the <a href="http://www.newint.org/misc/newsletter/" title="Join over 30,000 people like you who want to be a part of the ideas and the action in the fight for global justice.">New Internationalist e-newsletter</a></li>
<li>People who&#8217;ve attended a <a href="http://www.newint.org/cleanstart" title="On 15 December, 2008, New Internationalist hosted an inspiring evening of the best analysis and the hottest debate.">specific event</a> and provided their e-mail address</li>
</ul>

<p>In each of these situations, it would be typical for an organization to create a new &#8220;list&#8221; in their EMS and to subscribe people to that list based on some action the subscriber took (like donating); this would often happen in an automated fashion, or would be accomplished via a regular import of new subscribers to the appropriate list. </p>

<p>Unfortunately, this list-itis only leads to the opposite of the opportunities that I&#8217;ve presented above, that is: confusion, lack of good reporting options, deliverability challenges, and &#8211; all too often &#8211; poor experiences for the subscribers when trying to manage their subscription(s).</p>

<p>The magic concept here is segments. Each of the potential lists I referenced earlier are simply characteristics of the person who subscribed. For example, this person is  a donor, they attended an event, and they live in Toronto, Canada. Knowing that, I can use segmentation to target messages to this person, and to other people with similar characteristics.</p>

<p>Sounds simple enough, right? It is, to be sure: simple and powerful. And the real power of this approach becomes visible as soon as you want to target characteristics that would typically be stranded on different lists, e.g.: catalog or online shop customers that aren&#8217;t already donors or magazine subscribers, who live in Canada and haven&#8217;t already received some kind of subscription promotion campaign in the past.  </p>

<p><strong>Try to figure that out with your e-mail subscribers scattered across five or ten lists.</strong></p>

<h3 id="customfieldsandsegmentationrules">Custom fields and segmentation rules</h3>

<p>The secret to keeping all of your e-mail subscribers on one big list <strong>AND</strong> being able to deliver the right campaigns, to the right subscribers, is  <em>custom fields</em> and <em>segmentation rules</em>. </p>

<p>For all of their differences, most (good) e-mail management systems offer these two building blocks in one form or another, or by one name or another. In their most basic form they are:</p>

<ul>
<li>The ability to add custom information to a subscriber record (think First Name and Last Name, only these are characteristics that you define)</li>
<li>The ability to use simple, or advanced, logic to build a rule about who will receive a mailing (typically referred to as a &#8220;segment&#8221;)</li>
</ul>

<p>For example, a simple rule might look like:</p>

<blockquote>
  <p>The value in the field &#8220;Donor&#8221; is equal to &#8220;1&#8221;</p>
</blockquote>

<p>This would be equivalent to a list of e-mail subscribers who have donated (or donors that you have an e-mail address for). A more advanced rule might look like:</p>

<blockquote>
  <p>The text in the &#8220;Country&#8221; field equals Canada, and the value in the field &#8220;Donor&#8221; is equal to &#8220;1&#8221;</p>
</blockquote>

<p>This would be equivalent to a list of e-mail subscribers who have donated that live in Canada. And a more advanced rule might look like:</p>

<blockquote>
  <p>The text in the &#8220;Country&#8221; field equals Canada, and the value in the field &#8220;Donor&#8221; is equal to &#8220;1&#8221;, and the value in the &#8220;Subscriber&#8221; field is not equal to &#8220;1&#8221;, and the value in the &#8220;Received subscription offer&#8221; field is less than &#8220;1&#8221;</p>
</blockquote>

<p>Advanced rules like this can be used to finely tune campaigns based on the specific characteristics of that subscriber, in New Internationalist&#8217;s case this would be to send a subscription offer to people that have donated (possibly during an online fundraising campaign unrelated to the print magazine) that aren&#8217;t currently subscribing to the print magazine, and only where they haven&#8217;t already received an e-mail promotion. </p>

<p>And this is only the beginning of where the concept of one big list and segments start to out perform the many-lists approach. The other improvements I&#8217;ve mentioned are better reporting and analysis, increased deliverability and easier auditing, as well as improved user experience for your subscribers. </p>

<p>I&#8217;ll dig into each of these over the coming weeks and months. Hope you stay tuned. </p>

<p><em>Comments? Please post them over on the <a href="http://blog.newint.org/tech/2009/04/23/managing-large-e-mail-lists-part-1/">New Internationalist Tech blog</a></em></p>
