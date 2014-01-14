---
layout: post
title: A template for successful 'Hack Days.' What are your tips?
date: '2011-04-21 10:06:24 -0500'
mt_id: 2644
---

> _"Always be releasing."_

I'm going to be helping with some '[Hack Days](http://en.wikipedia.org/wiki/Hack_Day)' later this year for the [Knight-Mozilla partnership](http://knightmozilla.org/). One in Berlin in September or October, and another with the Boston Hacks/Hackers chapter during the [Online News Association conference](http://ona11.journalists.org/).

I'd also like to organize some here in Toronto with our local [Hacks/Hackers chapter](http://meetupto.hackshackers.com), and support from the local start-up community, and the media organizations that come out to our event, i.e.: CBC, The Globe & Mail, <strike>Postmedia</strike> National Post, Global News, OpenFile.ca, and so on.

_(Hey, while I'm thinking of it, the Toronto chapter of Hacks/Hackers is pushing toward 300 members -- if you haven't joined yet, [why don't you?](http://meetupto.hackshackers.com/) It only [takes a minute.](http://meetupto.hackshackers.com/))_

I've attended more than a few hack days in my life (or hackathons, code jams, or whatever the kids are calling them now). Let me tell you, in case you don't already know from experience, that _building useful software in 1-2 days with people you don't know is **fucking hard.**_

That's why I admire events that have the infrastructure figured out (and I'm not talking about pizza and Jolt cola). Specifically, I'm impressed when they've answered the question "how are we going to host these apps, show them off publicly, and make the code available for others to build on?"

It sounds like the recent [Buttercamp in NYC](http://annasob.wordpress.com/2011/03/28/buttercamp-new-york/) did a great job, but they didn't get 100% of the demos online at the end of the event, and that's a missed opportunity.

That should be the target that teams strive for, and the eligibility criteria to 'win' at the event. Code and demos should be online and visible to the other teams and to the public. _Always be releasing._

_This must be a solved problem?_ I'm hoping that there's a write-up somewhere out there that will be posted in the comments. But, if that's not the case, here's what I'm proposing:

* The event organizers do a fair bit of prep-work in advance to make the above possible. Specifically, by setting up an event-specific [Github'organization'](https://github.com/blog/674-introducing-organizations) that participants will be added to.

* There should be a straightforward [LAMP-stack](http://en.wikipedia.org/wiki/LAMP_(software_bundle) [Amazon EC2](http://aws.amazon.com/ec2/) instance made available for each team, or a bare bones instance that they can set-up with their preferred stack.

* Each of the public URLs for the instances should be listed, so that teams and organizers can check on progress. _Always be releasing._  (One could even have fun with a leader board type set-up, e.g., a simple HTML page with a bunch of iframes -- one for each teams instance -- that reloads their app every minute or so. Same goes for a tally of Github commits by team.)

* With a bit more planning, organizers could even look into using something like [DotCloud](http://www.dotcloud.com/) -- or one of the [PaaS](http://en.wikipedia.org/wiki/Platform_as_a_service) providers -- or a fancy set-up like [this one](http://annasob.wordpress.com/2011/03/28/buttercamp-new-york/) for [Node.js](http://nodejs.org/) that auto-deploys to the EC2 instance with the 'git push' command.

For the finale at the hack day, each team should have to present their work **live**, via the EC2 instance URL. It should also be required that what's running on the EC2 is a straightforward 'git pull' of the code in their Github repository.

Maybe that's the suspense-building moment, where the teams -- live, in front of an audience -- have to run a 'git pull' and deploy their app, and then load it in a browser. **Oh, the suspense!**

That's how I would add some exponential gnerativity to a hack day. Mark my words, it would work.

UPDATE: While I'm thinking of it, it would also be great if each team had a person willing to live blog, or status update, during the event, to expose the whole process -- the challenges, the breakthroughs, and opportunities for others to check out their app.

UPDATE 2: Rather humorously, Amazon EC2 [had an outage on the day I wrote this](http://gigaom.com/cloud/more-than-100-sites-went-down-with-ec2-including-your-paas-provider/). I guess the lesson is: have a back-up plan prepared.
