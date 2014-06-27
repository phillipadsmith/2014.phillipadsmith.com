---
layout: post
title: The ultimate data backup triple-play for under $500
dek: Continuous, offsite, and encrypted -- just do it.
date: '2010-08-12 16:52:19 -0500'
mt_id: 1849
---
<p>For the last couple years I've struggled to find the <strong>perfect</strong> backup solution. The perfect backup solution I was after had to meet certain criteria:</p>

<ul>
<li>It had to be continuous and require almost no thought;</li>
<li>It had to be both onsite (for fast access) and offsite (in case of theft);</li>
<li>It had to to be encrypted so that my client's data was protected.</li>
</ul>

<p>Recently, it all came into focus... so I thought I'd share my "ultimate data backup triple-play for under $500" in case you're in a similar situation. </p>

<p>The first thing I did was ditch my <a href="http://www.buffalo-technology.com/products/network-storage/linkstation/ls-wsxl-linkstation-mini/">Buffalo Linkstation Mini</a> 1TB Network Attached Storage (<a href="http://en.wikipedia.org/wiki/Network-attached_storage">NAS</a>) device (great conceptually, terrible in practice) and bought a <a href="http://www.wdc.com/en/products/products.asp?driveid=410">Western Digital My Book Studio</a> 2TB drive with firewire 800 and USB 2.0 interfaces. Unlike the NAS device, the <a href="http://en.wikipedia.org/wiki/IEEE_1394_interface">firewire 800</a> connection means that my local, onsite backups are <strong>blazingly fast</strong> and the device only cost <a href="http://www.canadacomputers.com/product_info.php?cPath=15_213_603&amp;item_id=028764">$210 CAD at Canada Computers</a>. </p>

<p>Next I signed-up for <a href="https://secure.backblaze.com/r/00nj61">Backblaze</a> -- an online (thus offsite) backup service -- after reading <a href="http://blog.backblaze.com/2009/09/01/petabytes-on-a-budget-how-to-build-cheap-cloud-storage/">this (very convincing) article</a> about their hardware and HTTP-based backup software. The Backblaze service costs $50/year for one computer with unlimited data (wich is the key, as I have a lot of data to backup). </p>

<p>Finally, I found a way to make the process of backing up to my 160GB "classic" iPod painless and functional by ditching my hand-crafted <a href="http://en.wikipedia.org/wiki/Rsync">rsync</a> scripts and replacing them with the easy-as-pie <a href="http://www.amake.us/software/ipodbackup/">iPodBackup software</a>. The current cost for a 160GB iPod is roughly $259.00 and you can probably find one a lot cheaper on eBay or Craigslist. </p>

<p>Those pieces in place, here's how it all works:</p>

<ul>
<li>I have a full backup of my computer on the 2TB hard drive that runs continuously via <a href="http://www.apple.com/macosx/what-is-macosx/time-machine.html">Apple's Time Machine software</a> (not as terrible a piece of software as I thought it would be, to be honest). The hard drive mentioned above is one of the few at that price that comes with built-in hardware-based encryption -- so the drive is locked and encrypted when I dismount it. </li>
<li>A continuous encrypted backup of my essential client files (~40GB) happens via Backblaze so that I never need to think about it and can access the data in a pinch from the road. Backblaze lets you provide your own private encryption key, so that data is also encrypted both on-route to Backblaze and at their facility. </li>
<li>Finally, I perform a semi-regular encrypted backup of my essential client files (~40GB) on to my iPod, which I bring along with me on trips so that I have a copy of all my client data in my pocket. The iPodBackup software handles the creation of an <a href="http://en.wikipedia.org/wiki/Sparse_image">encrypted "sparse image"</a> before it moves the backup to the iPod, so I never have to worry that much about losing the iPod or having it stolen, as the data is encrypted. </li>
</ul>

<p>All this for under $500. That's a low price to pay for complete piece of mind. :)</p>

<p>And, because <a href="http://twitter.com/rolfkleef/status/20975549276">I saw a tweet from my friend Rolf about it this morning</a>, I should mention quickly what I do on the server that hosts my e-mail and Web sites. Basically, after much futzing around, I ended up with a simple solution using rsync and <a href="http://en.wikipedia.org/wiki/Expect">expect</a> (to handle authentication prompts) that backs-up all of my Web site data, e-mail, and anything else lying around my account. This is all backed up to the free 100GB <a href="https://www.strongspace.com/">Strongspace</a> account that I received as part of my <a href="http://www.markwiens.net/gab/2006/05/lifetime_hosting_plans.html">lifetime hosting account</a> with Textdrive (now <a href="http://www.joyent.com/">Joyent</a>). That backup runs every day by itself -- never have to think about it! -- and makes those files available via sFTP and a nifty Web interface. </p>

<p>Note to those of you that use a Linux desktop operating system: obviously, a lot of the above is Mac-centric. If you have some suggestions on how to achieve roughly the same set-up on open hardware and free software, it would be great if you could pop it into the comments.  :-)</p>

<!--break-->
