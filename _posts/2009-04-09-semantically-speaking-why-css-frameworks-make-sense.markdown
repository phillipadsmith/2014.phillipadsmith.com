---
layout: post
title: 'Semantically speaking: Why CSS frameworks make sense'
date: '2009-04-09 02:53:01 -0500'
excerpt: "<p><i>Cross-posted from the <a href=\"http://blog.newint.org/tech/2009/04/08/semantically-speaking/\">New
  Internationalist Tech blog</a></i></p>\r\n<p>After a good banter back-and-forth
  with my colleague here on the New Internationalist Web Team about CSS frameworks,
  I thought it would be helpful to jot down the key themes of the debate and possible
  solutions. Hopefully this will benefit other teams that are managing large collections
  of inter-linked sites that evolve over long periods of time. </p>\r\n\r\n<p>Many
  of the leading minds of the &#8220;semantic Web&#8221; movement, like <a href=\"http://www.zeldman.com/\">Jeffrey
  Zeldman</a> and <a href=\"http://www.stuffandnonsense.co.uk/\">Andy Clarke</a> (full
  disclosure: Andy is leading the upcoming New Internationalist online re-design),
  have <a href=\"http://twitter.com/zeldman/status/1470855033\">recently</a> <a href=\"http://twitter.com/Malarkey/status/1470955477\">compared</a>
  CSS frameworks like <a href=\"http://www.blueprintcss.org/\">Blueprint CSS</a> to
  <a href=\"http://www.adobe.com/products/dreamweaver/\">Dreamweaver</a>. For those
  Web producers that develop skillfully handcrafted sites, tools like Dreamweaver
  are akin to training wheels on a bike, or a &#8220;colouring between the lines.&#8221;</p>\r\n\r\n<p>That
  is argument number one against CSS frameworks: they are too prescriptive in their
  approach, and limit creativity.</p>\r\n\r\n<p>The second argument is that they are
  not purely &#8220;semantic,&#8221; that is that their markup contains both semantic
  class names, and names that are purely for presentation or layout purposes. </p>\r\n\r\n<p>I
  think that both of these arguments are mostly (<em>cough</em>) malarkey, and only
  serve to divert the debate from where it should really be: <em>manageability</em>
  (And this is an area that really needs some creative, and innovative, thinking).</p>"
mt_id: 1811
---
<p><i>Cross-posted from the <a href="http://blog.newint.org/tech/2009/04/08/semantically-speaking/">New Internationalist Tech blog</a></i></p>
<p>After a good banter back-and-forth with my colleague here on the New Internationalist Web Team about CSS frameworks, I thought it would be helpful to jot down the key themes of the debate and possible solutions. Hopefully this will benefit other teams that are managing large collections of inter-linked sites that evolve over long periods of time. </p>

<p>Many of the leading minds of the &#8220;semantic Web&#8221; movement, like <a href="http://www.zeldman.com/">Jeffrey Zeldman</a> and <a href="http://www.stuffandnonsense.co.uk/">Andy Clarke</a> (full disclosure: Andy is leading the upcoming New Internationalist online re-design), have <a href="http://twitter.com/zeldman/status/1470855033">recently</a> <a href="http://twitter.com/Malarkey/status/1470955477">compared</a> CSS frameworks like <a href="http://www.blueprintcss.org/">Blueprint CSS</a> to <a href="http://www.adobe.com/products/dreamweaver/">Dreamweaver</a>. For those Web producers that develop skillfully handcrafted sites, tools like Dreamweaver are akin to training wheels on a bike, or a &#8220;colouring between the lines.&#8221;</p>

<p>That is argument number one against CSS frameworks: they are too prescriptive in their approach, and limit creativity.</p>

<p>The second argument is that they are not purely &#8220;semantic,&#8221; that is that their markup contains both semantic class names, and names that are purely for presentation or layout purposes. </p>

<p>I think that both of these arguments are mostly (<em>cough</em>) malarkey, and only serve to divert the debate from where it should really be: <em>manageability</em> (And this is an area that really needs some creative, and innovative, thinking).</p>
<!--break-->
<p>There&#8217;s no point re-hashing the semantic debate here; put simply: it <em>is</em> possible to use a CSS framework <em>and</em> strictly semantic markup. The supposedly &#8220;messy&#8221; presentational class names can be removed once the initial layout work is complete. Presto: no more problem, semantically speaking. </p>

<p>As for creativity: I find it hard to imagine that any experienced Web producer these days wouldn&#8217;t have some &#8220;sensible defaults,&#8221; or templates, to work from in Illustrator, Photoshop, or &#8211; more precisely &#8211; for developing HTML and CSS. And I don&#8217;t see how CSS frameworks offer anything more (or more constraining) than that, when it comes to discussing grids, typography, and forms. </p>

<p>Where I do feel there is a strong argument in favour of frameworks is in the benefits they provide toward long-term manageability of those pesky, constantly growing and changing, cascading style sheets. </p>

<p><a href="http://jeffcroft.com/">Jeff Croft</a> &#8211; one of the idea innovators around the concept of a CSS framework &#8211; <a href="http://www.the-haystack.com/2007/08/11/semantic-markup-and-css-frameworks/#comment-10172">explains the benefits</a> of a CSS framework like so: </p>

<blockquote>
  <p>When I work at the <a href="http://www2.ljworld.com/">Journal-World</a>, it was common for me to be expected to create complex grid-based layouts for a story or special section in a matter of an hour or two. These needed to work in many browsers, including IE6 and lower. It was simply unpractical for me to build these from scratch every time — I just didn’t have the time for it. By coming up with a set of classes that could be reused, I was able to achieve this kind of speed.</p>
</blockquote>

<p>If you&#8217;re not intimately familiar with Blueprint CSS (and possibly other frameworks like <a href="http://developer.yahoo.com/yui/">YUI</a>, etc.), you&#8217;ll probably skim right over some of the work that&#8217;s been done to address the needs of people managing large, or multiple, sites that go through frequent design and layout iterations to meet ever-expanding (and unplanned for) needs. </p>

<p>Many of these frameworks provide tools to <a href="http://github.com/joshuaclayton/blueprint-css/tree/2e1a5383f2d74e030880f58c5b22491a609008a0/lib">configure</a> your &#8220;core&#8221; CSS and deploy it to multiple sites, and to do so with site-specific settings and overrides. This configurability makes it possible to keep the &#8220;core&#8221; of the CSS &#8211; the part that specifies sensible defaults, typography, browser compatibility, basic print and form styles, etc. &#8211; to be managed centrally, deployed, and updated as one would other types of Web application code. Some of these frameworks also offer validation and testing tools &#8211; the kind of tools that have been available to software developers for what seems like ages now. </p>

<p><b>Finally, software application development processes applied to Web site structure and design!</b> It&#8217;s a Web site manager&#8217;s dream come true. </p>

<p>The advantages here often present themselves after most Web designers have handed over their HTML and CSS to various teams for implementation. In the case of the New Internationalist, there will be separate teams that manage the development of the online stores and the main NI sites, like the <a href="http://blog.newint.org">blog</a> and microsites like <a href="http://www.newint.org/cleanstart">Clean Start campaign</a>. Each of these teams will likely have to implement some of their own &#8211; site-specific &#8211; changes to the HTML and CSS to deal with the various bits and bobs that come up during the implementation of a design, or development of a Web application.</p>

<p>In this scenario, CSS frameworks offer modularity: keeping the core maintainable, while providing a way for specific site developers to introduce their own site-specific overrides. Going a step further, they offer the option of rolling those site-specific customizations back <em>into</em> the core CSS file (for that specific site) at a later date. <strong>One less HTTP request and we can all sleep at night</strong>. </p>

<p>So, all semantic and creative arguments aside, what frameworks provide that appeals to me is some of the same &#8211; somewhat software-development-centric &#8211; tools and processes that I&#8217;ve come to appreciate over the years. </p>

<p>If you manage a large site, or &#8211; as is the case for New Internationalist &#8211; a large collection of sites with ever more on the horizon, I think you&#8217;ll find an exploration of the CSS frameworks useful too. One that I&#8217;ll be keeping an eye on (thanks to Adam for the reminder) is <a href="http://compass-style.org">Compass</a>, which promises &#8220;maintainable, semantic CSS.&#8221;</p>

<p>P.S. I should note that &#8211; in the middle of writing this post &#8211; Andy Clarke, Adam, and I had a great conversation about these questions and Andy presented some solid recommendations for addressing the maintainability and manageability questions head on. I look forward to seeing what we come up with and blogging about the results.</p>
<p><i>Comments? Please post them on the <a href="http://blog.newint.org/tech/2009/04/08/semantically-speaking/">New Internationalist Tech blog</a></i></p>
