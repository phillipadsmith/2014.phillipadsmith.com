---
layout: post
date: "2015-10-22 9:00:00"
dek: "Thinking about the upcoming Mozilla Festival, I'm left pondering some big challenges ahead..."
summary: ""
category: commentary
tags: 
  - frontpage
  - makers
  - programming
  - learning
img_opt: cover
img_sml: /files/makers_cabin_screenshot.jpg
img_med: /files/makers_cabin_screenshot.jpg
img_lrg: /files/makers_cabin_screenshot.jpg
img_xlg: /files/makers_cabin_screenshot.jpg
img_alt: Screenshot of Makers Cabin
img_caption: Screenshot of Makers Cabin
img_url: ""
published: true
title: "The &ldquo;learn to code&rdquo; problem: Can #Mozfest help?"
---


Are ready to become a full stack web developer? If so, [at least one online school](https://makerscabin.com/web/) proposes a mix of [more than 20 subjects](https://makerscabin.com/web/): HTML, CSS, Sass, JavaScript, jQuery, PHP, Laravel, SQL, MySQL, Git, GitHub, Ubuntu, Linux Command Line Tools, Gulp, NPM, Bower, Amazon AWS, Website Design, Zurb Foundation, Bootstrap, Web App Design, Sketch 3, Sublime Text 3, Server Architecture, Apache, Nginx, and Redis.
{: .lead}

The learn to code movement has gained a lot of steam. Every week I read in the media about somebody new learning to code, or supporting the idea — from celebrities to Presidents -- everyone seems on-board. This is a “good thing(<sup>tm</sup>)” without question. More people with more knowledge is a win-win for society.

And yet, I wonder if we’re setting people up for a rude awakening? Or worse, the kind of failure that leads people to give up too soon.[^1]

As I prepare to set sail for London to [facilitate a session on making things with GitHub](http://phillipadsmith.com/2015/09/github-gitdown.html) at the [Mozilla Festival](https://2015.mozillafestival.org/), I keep asking myself: *How can we really help the Web makers of tomorrow to navigate the rough seas ahead?*

## Program or be programmed
Over the past several years, I’ve had the opportunity to onboard new people to technical teams and to meet with young people who are exploring opportunities in the field of “making things with software.” Both experiences are enlightening. Explaining “How we build things at organization X,” or “How Web stuff is built in 2015” in general is a surprisingly complex task. It ain’t 1995 anymore, unfortunately.

I’ve experienced this when [teaching journalists](http://phillipadsmith.com/2014/02/ipys-venezuela-data-journalism-workshops.html), whether it’s [data literacy skills](http://phillipadsmith.com/2012/02/a-tyee-master-class-telling-stories-with-data-june-2-3-2012-vancouver-bc.html) or [basic security skills](http://phillipadsmith.com/2015/03/digital-security-encryption-resources-for-journalists.html). It’s hard. The concepts are difficult. And the knowledge often isn’t “sticky,” because people aren’t using the skills or tools _every day_.

I’ve also experienced this when working with colleagues in related fields like design. Just to be able to co-create with someone who’s an *expert* in their field — admittedly, a field that has typically worked with very different tool up until recently — has required significant time investment to set-up the tooling and knowledge necessary to [actually collaborate on a project efficiently](https://github.com/TheTyee/bottom-lines).

*So, I wonder, when we encourage the world to code, do we spell out that fluency is a long-term endeavour?* Is it clear at the outset that the mythical 10,000 hour mark requires a 20-hour-a-week investment *for the next ten years*? And it’s not just the time investment, it’s a ongoing commitment to a field that never stops evolving -- making software is a commitment to lifelong learning.

## Lots of questions, few answers
[Part of the challenge is the pace of change](http://www.vikingcodeschool.com/posts/why-learning-to-code-is-so-damn-hard), and the breadth of knowledge required. For example, even if the range of subjects required to be a “full stack Web developer” ([as described by Makers Cabin](https://makerscabin.com/web/)) were language agnostic and narrowed just one tool from each part of the stack, there would still be more than ten different tools to learn. And, at each layer of the stack, several decisions for the learner to make.

Just one tool at each layer still requires our learner to understand: basics of working at the command-line and using a package manager for their operating system, a programming language, a library manager for the programming language, possibly a tool like [AnyEnv](https://github.com/riywo/anyenv) or similar for managing versions of the language and related libraries, a Web application framework to match URLs to functionality, a database of some kind, as well as the basic Web stack of HTML, CSS, and JavaScript and probably the tooling there too, i.e., preprocessors, compressors, library managers, task runners, and maybe a front-end framework. And, of course, a decent text editor and the developer tools for their browser. Oh wait: how does the application get “deployed?” Let’s throw in “hosting” as another requirement. Collaboration? Oh right! Let’s add Git and GitHub to the list. </wipes sweat from brow>

Now, let’s dig in! Which language? Which framework? Which database? Which editor? Not to mention the whole category of front-end frameworks and browser APIs and features like local storage and workers, web sockets, and so on.

Just when many thought the the “evils” of building Web apps with vanilla JavaScript or jQuery had received a steak through the heart (manditory Halloween reference...) thanks to libraries like Backbone, a whole new era of solutions like Angular and Ember matured, and then -- very shortly after -- a whole new cohort emerged: React, Flux, and more. And all of this has happened in the last *few years!*

How can a “learn to code” movement be effective in this age of infinity-expanding possibilities? How can even Resig’s sage wisdom of [30 minutes of coding a day](http://ejohn.org/blog/write-code-every-day/) move forward a learner’s side projects and learning aspirations? I worry that people will tune out, or turn off, too soon.

## The promise, and the reality
This is not just a challenge for newcomers. 

Web veterans are asking their peers and browser makers to ["stop pushing the web forward"](http://www.quirksmode.org/blog/archives/2015/07/stop_pushing_th.html). Others responded saying “don’t learn everything,” or to take a [T-shaped approach to skill development](http://bradfrost.com/faq/#industry). All point to the reality that there is just too much for the average person to learn (there are exceptions, of course, like the [James McKinneys](https://github.com/jpmckinney), [Friedrich Lindenbergs](http://pudo.org/), and [Max Ogdens](http://maxogden.com/) of the world, who make it look all too easy to know absolutely everything about everything -- they're not human, trust me).

I’ve watched as veteran programmers like Dave Winer — who’s own aspiration was to provide tools for the whole world to blog — [grapple with basics of modern the Web like CSS](http://scripting.com/stories/2011/09/02/basicCssQuestion.html). And while reading [Coders at Work](http://amzn.to/1GUWOJp) some years ago, I remember being left with the impression that almost all of the all great programmers of my time had debugged their work using simple print statements, not elaborate debuggers, speaking at the time to a disconnect between what is used vs. what is often taught.

Just to give you an idea of how this plays out in the “real world,” let’s say that you’re a young, aspiring news-application developer and you want to work for [NPR](http://blog.apps.npr.org/K). Just skimming their [news app template](http://blog.apps.npr.org/2014/07/29/everything-our-app-template-does.html) and blog post on [how to setup a development environment](http://blog.apps.npr.org/2013/06/06/how-to-setup-a-developers-environment.html), you would need to learn (assuming knowledge of the command line and a text editor already): homebrew, Python, pip, virtualenv, Flask, Fabric, Jinja, LESS, Bootstrap, Node, NPM, Git/GitHub, PostgreSQL, and a bit about Amazon’s AWS service including the [awscli](https://pypi.python.org/pypi/awscli) library. I'm guessing they've got a testing library in there somewhere too.

If you have some years behind you, these are probably familiar tools and perhaps you use them, or equivalents, regularly. For others, does this seem like a plausible list of subjects to learn through an online course, or even a short bootcamp?

## A noble cause, without clear outcomes
I don’t know if there’s a solution to this quandary. I want more people to learn to code, or — perhaps more realistically —  to learn how to co-create using the building blocks of the open Web. And yet, I want them to start with a complete idea of what’s ahead, to pace themselves, and to stick with it for the long term.

Too often, in my experience, the "learn to code" moments at meetups and conferences are little more than a magic trick: some seemingly accessible slight-of-hand that makes it all seem easy, leaving out the fact that it took years to perfect. Or worse, an illusion conjured up to make the presenter appear smart and leaving the learner feeling overwhelmed.

It's amazing that more than 25 million people have started the exploration "learning to code" for time on sites like these, and still I wonder how many of these learners finish even a single course, let alone take the necessary step of building something beyond the provided examples and excercises.

I don't have a lot of confidence that efforts like [Codecademy](https://www.codecademy.com/), [Code School](https://www.codeschool.com/), and similar are going to lead to *significantly* more programmers in the world, just as I have my doubts that any a single programming book has ever been enough either. Learning to make great stuff on the Web takes practice, effort, time, and attention. There is no silver bullet, and yet I believe that Mozilla's "maker" focus is at least part of the answer.

## Five suggestions for a journey of lifeline learning
I don't have it all figured out myself, and -- [like many in my field](https://en.wikipedia.org/wiki/Impostor_syndrome) -- I cringe when others refer to me as someone who makes things with software, believing instead that after a more than two decades of professional experience I have only just begun the *real* learning. And yet, tools I developed more than a ten years ago are (somewhat amazingly) still running on the Internet today -- so that must count for something.

Here are there five paths that I've often shared with those who are also on the journey:

* **Scratch your own itch first:** Start with a problem that you want to solve, not a problem that is set out by a book or online course. As many have said before, the path to making great software is solving something personal, something that you're passionate about. Working to solve *that* problem in its entirety will often walk you through most of the layers of the stack described above.

* **Document your process:** There's nothing more satisfying than the breakthrough moment when you've figure out where to put that particular piece of the puzzle, or uncovered the magic incantation that makes the whole thing work. There's also nothing more frustrating than coming back to your project a few hours, days, or weeks later and not remembering what you learned. Keep a journal for each project, or -- better yet -- learn to use Git and GitHub and, as they say, "always be committing." 

* **Learn to ask answerable questions:** 99% of problems that you encounter, have been experienced before by someone else -- and 99% of the time, [they've also been answered](http://stackoverflow.com). So the first warp speed jump you can make is learning how and where to search for answers. And yet the real magic comes when you learn how to ask questions that are easier for others to answer. That means learning how to provide all of the necessary information and, ideally, [something like a small demonstration of the problem you are trying to solve](https://github.com/times/doctop/pull/12).

* **Prototype quickly. Show your work early.:** As I've  noted above, Making stuff on the Web has become a relatively complex task when compared to how it was a decade ago (or even a five years ago, frankly). With that complexity comes a lot of distractions, "rabbit holes," and potentially dead-end paths. Don't let your efforts languish in obscurity! Get it out in the open where it can get some air, be seen, and get it out there as quickly and frequently as possible. 

* **Be fearless about feedback:** There are times when I've looked at a friend or colleague's work and thought "Wow, you've just re-written an existing library from scratch -- how long did that take!?" And there are times when that's totally the right thing to do, don't get me wrong! Still I would propose that you should aim to do that with intention, not lack of awareness. All that to say, if you learn to ask for feedback early and often, you'll probably have the information you need to make the most informed decisions. Better yet, just [work open](http://blog.workopen.org) and practice "thinking out loud" about your work.

These suggestions aren't going to fix the problems I believe are inherent in the broader learn to code movement, and yet I hope they might help some people stick with what has be one of the most rewarding life pursuits I've ever known.

*Do you have your own set of guiding principles around making stuff on the Web? Drop a note for other readers in the comments below, or hit me on [Twitter][phillipadsmithtw].*

[^1]: The folks at Viking Code School have summarized some of the challenges quite well here: http://www.vikingcodeschool.com/posts/why-learning-to-code-is-so-damn-hard
[phillipadsmithtw]: http://twitter.com/phillipadsmith
