---
layout: post
title: "Every Candidate Unplugged"
date: 2014-11-16 19:00:55 # This is used in place of the filename
files_url: /files/2014/11/15/every-candidate-unplugged/
dek: "Unpacking our experimental municipal election candidate tracking platform"
summary: # 140 characters or less!
img_opt: 'cover'                                        # Options: 'cover' or 'inlne' or 'none'
img_sml: '/files/2014/11/15/every-candidate-unplugged/everycandidate_sml.jpg'                          # Default on cover or inline
img_med: '/files/2014/11/15/every-candidate-unplugged/everycandidate_med.jpg'                          # 640x512px cover, inline
img_lrg: '/files/2014/11/15/every-candidate-unplugged/everycandidate_lrg.jpg'                          # 800x640px cover, inline
img_xlg: '/files/2014/11/15/every-candidate-unplugged/everycandidate_xlg.jpg'                         # 1200x960px cover only
img_alt: 'Every Candidate'                                             # Alt for inline
img_caption: 'Every Candidate Unplugged'                                         # Caption for either
img_url: ''                                             # URL to original image
category: coding                                        # Just one of the 4xCs
tags:                                                   # E.g., frontpage
- frontpage
---

What started as the glimmer of an idea in 2010, slowly turned into a reality over a three stolen weekends this summer. From there it was blood, sweat and tears all the way to election day.
{: .lead}

<blockquote class="twitter-tweet" lang="en"><p>Curious how the money in elections works? We&#39;ve done some of the math: <a href="http://t.co/sbvwDJcgKH">http://t.co/sbvwDJcgKH</a> <a href="https://twitter.com/hashtag/TOpoli?src=hash">#TOpoli</a> <a href="https://twitter.com/hashtag/TOcouncil?src=hash">#TOcouncil</a> <a href="https://twitter.com/hashtag/FollowTheMoney?src=hash">#FollowTheMoney</a></p>&mdash; Every Candidate (@EveryCandidate) <a href="https://twitter.com/EveryCandidate/status/525344966475010048">October 23, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Three months ago, I launched the [first Every Candidate site][ec] with my colleague, [Tim Groves, a Toronto-based investigative reporter](http://timgrovesreports.wordpress.com/) that I met while organizing [a Canadian national media alliance](http://phillipadsmith.com/2006/05/a-progressive-media-alliance.html) several years ago.

[As I wrote shortly after the site was launched](http://phillipadsmith.com/2014/09/introducing-every-candidate.html): Every Candidate was kicked out the door later than I had hoped, and even calling it a "minimum viable product" was probably a stretch, but -- in the spirit of "done is better than perfect" -- it was alive, out in the world, and what we believed to be the most complete set of information on the [358 candidates who were running for city council][candidates] across [Toronto’s 44 wards][wards].

## Perfect is the enemy of good

Like all well-intentioned sketches of a wild-eyed, data-driven project, Every Candidate as originally envisioned was a behemoth even before the first line of code was written. 

Thankfully, that version was never built (blame those every-demanding constrains: time & attention). 

Thus, to get some momentum it had to start quite simply, as most successful products do. I sat down one weekend in late April and [wrote a scraper for the City of Toronto's candidate information pages](https://github.com/phillipadsmith/EveryCandidate_bot). Like so many city data sets, the city site didn't make it easy for visitors to get at _all_ of the information, so [a scraper & an online spreadsheet solved that problem](https://docs.google.com/spreadsheets/d/1ePIktd1I-U9DsVfeSrHWAN9-dMfefCgaBWwwHFwH0J0/edit?usp=sharing).

## Testing the idea, finding an audience

Next was the question: does anyone really care? To answer this question, I wanted to test the waters quickly and with the minimum possible effort. That meant that a full-blown Web site was pretty much out.

Given the [generally positive response to news bots](https://source.opennews.org/en-US/articles/tags/botweek/), I decided to put together [a simple Twitter bot](https://github.com/phillipadsmith/EveryCandidate_bot) that would announce when candidates registered, and withdrew, and the ward involved. After a few funny misfires, [it worked](https://twitter.com/everycandidate): 

<blockquote class="twitter-tweet" lang="en"><p>New nomination for councillor in <a href="https://twitter.com/hashtag/Ward13?src=hash">#Ward13</a> in <a href="https://twitter.com/hashtag/Toronto?src=hash">#Toronto</a>: István Tar (2 May 2014). Got tips? Send them our way. <a href="https://twitter.com/hashtag/TOpoli?src=hash">#TOpoli</a> <a href="https://twitter.com/hashtag/TOcouncil?src=hash">#TOcouncil</a></p>&mdash; Every Candidate (@EveryCandidate) <a href="https://twitter.com/EveryCandidate/status/462341499032985600">May 2, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

It also announced a candidate count down in the days, hours, and minutes leading up the registration cut-off date.

<blockquote class="twitter-tweet" lang="en"><p>353 candidates registered to run for city council. Just 1 minute to go until nominations close. <a href="https://twitter.com/hashtag/TOpoli?src=hash">#TOpoli</a> <a href="https://twitter.com/hashtag/TOcouncil?src=hash">#TOcouncil</a></p>&mdash; Every Candidate (@EveryCandidate) <a href="https://twitter.com/EveryCandidate/status/510487670775369728">September 12, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Information bots are fairly addictive: they are simple to build, infinitely expandable. I could have easily focused 100% of my attention on just the ideas that bubbled up while thinking about what an information bot could accomplish during an election. 

## Going analogue

![Toronto Star newsroom, 1930](/files/2014/11/15/every-candidate-unplugged/toronto_star.jpg)
{: .responsive}

All that nerd-satisfying itch-scratching stuff aside, the _real work_ got underway in earnest when Tim set out to gather information on the 358 candidates that was out of the reach the automated scraper: the databases & paper records at city hall.

Spending hours in the belly of the beast and making all kinds of friends, Tim worked tirelessly to manually transcribe information from the candidate's registration forms ([which some candidates seemed to believe were not public information](https://twitter.com/EveryCandidate/status/515157164353421312)), the city's lobbyist registry database, and other systems only accessible from city hall.

Tim's work resulted in some of the most successful posts on the Every Candidate site, like this one on [where candidates lived](http://everycandidate.org/2014/10/14/running-close-to-home/) and this one on [the lobbyist registry](http://everycandidate.org/2014/09/26/lobbyist-registry/). Working with Tim was an eye-opener and I highly recommend you try it -- he's unstoppable.

## By the numbers

![Google Analytics](/files/2014/11/15/every-candidate-unplugged/google-analytics.png)
{: .responsive}

Here are some other interesting take-aways of the project:

* The site attracted 23,146 sessions from 19,233 users that resulted in 92,822 page views over a period of six weeks
The biggest spikes in traffic were, not surprisingly, election day (5000+ sessions) and [being interviewed on CBC's metro morning](https://soundcloud.com/everycandidate/every-candidates-phillip-smith-on-metro-morning).
* The average session spanned four pages and lasted two and a half minutes
* The return rate was almost 20%, which surprised me quite a bit (that's almost 5,000 visitors that returned to the site at least once after their first visit)
* The average "engaged time" for the site was somewhere between one and two minutes, which is quite high compared to many news sites
* Twenty percent of the site's traffic was mobile, and ten percent tablet
* "Organic search" drove more than 70% of the traffic to the site, more than direct traffic, social, or referrals.
* Of referral traffic, the top five referrers were Twitter (probably from the [@EveryCandidate](https://twitter.com/EveryCandidate) account), [metronews.ca](http://metronews.ca/voices/ford-for-toronto/1189320/toronto-voting-101-how-to-choose-your-city-councillor/), [torontolife.com](http://www.torontolife.com/informer/stat-informer/2014/10/14/lot-city-council-candidates-dont-live-wards-theyre-running/), [thestar.com](http://www.thestar.com/news/city_hall/toronto2014election/2014/09/24/want_better_toronto_government_dont_forget_the_other_44_races_keenan.html), and [choicestorm.com](http://choicestorm.com) (thanks!). 

Last but note least, there were [just under 200 commits to the Every Candidate repository on Github](https://github.com/phillipadsmith/everycandidate.org) (admittedly, many were just update to the data files), but at least 10% of those were from one or two volunteer contributors -- the open-source software philosophy at work!

## So, what's next…

The obvious question is: would we do it again? It's an interesting question…

I'm writing this post from Vancouver, where yesterday -- Saturday, November 15th -- [was "General Voting Day" for local elections throughout British Columbia](https://en.wikipedia.org/wiki/British_Columbia_municipal_elections,_2014). That means nearly 150 municipal elections happened almost simultaneously, not to mention the elections for regional districts, island trusts, park boards, and school trustees.

Thinking about how to role out a project like Every Candidate for municipal elections in British Columbia is an interesting challenge to think about (glad there's a few years before we need to cross that bridge!).

That said, I think that Every Candidate will likely make an appearance again at a more straightforward single-city municipal election in the near future. We'll use that opportunity to continue to refine the model, evolve the software, and -- more importantly -- to do the research that helps to answer questions about who actually runs for public office.

If you want to know when we get started again, just follow [Every Candidate][ec] on [Twitter](https://twitter.com/everycandidate) or join the [mailing list](http://everycandidate.us9.list-manage.com/subscribe?u=09074efe2b0086bf8393435b8&id=15bc7ccac5).

[ec]: http://everycandidate.org/
[wards]: http://everycandidate.org/wards/#toronto-wards
[candidates]: http://everycandidate.org/candidates/#toronto-council
