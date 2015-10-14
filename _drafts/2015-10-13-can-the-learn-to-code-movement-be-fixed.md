---
layout: post
date: ""
dek: ""
summary: ""
category: coding
tags: null
img_opt: cover
img_sml: ""
img_med: ""
img_lrg: ""
img_xlg: ""
img_alt: ""
img_caption: ""
img_url: ""
published: false
title: "Can the \"learn to code\" movement be fixed?"
---

Are ready to become a full stack web developer? If so, [at least one online school](https://makerscabin.com/web/) proposes a mix of [more than 20 subjects](https://makerscabin.com/web/): HTML, CSS, Sass, JavaScript, jQuery, PHP, Laravel, SQL, MySQL, Git, GitHub, Ubuntu, Linux Command Line Tools, Gulp, NPM, Bower, Amazon AWS, Website Design, Zurb Foundation, Bootstrap, Web App Design, Sketch 3, Sublime Text 3, Server Architecture, Apache, Nginx, and Redis.

The learn to code movement has gained a lot of steam. Every week, I read about somebody new learning to code, or supporting the idea — from celebrities to Presidents, everyone seems on-board. This is a “good thing(tm)” without question. More people with more knowledge is a win-win for society.

And yet, I wonder if we’re setting people up for a rude awakening? Or worse, the kind of failure that leads people to give up too soon.[^1]

## Program or be programmed
Over the past few years, I’ve had the opportunity to onboard new people to technical teams and to meet with young people who are exploring opportunities in the field of “making things with software.” Both experiences are enlightening. Explaining “How we build things at organization X,” or “How web things are built today” in general is a surprisingly complex task. It ain’t 1995 anymore, unfortunately.

I’ve experienced this when [teaching journalists](tk), whether it’s [data literacy skills](TK) or [basic security skills](tk). It’s hard. The concepts are difficult. And the knowledge often isn’t “sticky,” because people aren’t using the skills or tools every day.

And I’ve experienced it when working with colleagues in related fields like design. Just to be able to co-create with someone who’s an *expert* in their field — admittedly, a field that has typically worked with very different tool up until recently — has required significant time investment to set-up the tooling and knowledge necessary to [actually collaborate on a project efficiently](https://github.com/TheTyee/bottom-lines).

So, I wonder, when we encourage the world to code, do we spell out for them that fluency is a long-term endeavour? Is it clear at the outset that the mythical 10,000 hour mark requires a 20-hour-a-week investment *for the next ten years*? And it’s not just the time, it’s a commitment to a field that never stops evolving, areal commitment to life-long learning.

## The challenge / The landscape is changing too quickly
Part of the challenge is the pace of change, and the breath of knowledge required. For example, even if the range of subjects required to be a “full stack Web developer” (as described by Makers Cabin) were language agnostic and narrowed just one tool from each part of the stack, there would still be more than ten different tools to learn. And, at each layer of the stack, several decisions for the learner to make.

Just one tool at each layer still requires our learning to understand: the basics work working at the command-line and using a package manager for their operating system, a programming language, a library manager for the programming language, possibly a tool like [AnyEnv](TK) or similar for managing version of the language and libraries, an Web application framework to match URLs to functionality, a database of some kind, as well as the basic Web tooling of HTML, CSS, and JavaScript and probably the tooling there too, i.e., preprocessors, compressors, library managers, task runners, and maybe a front-end framework too. And, of course, a text editor and the developer tools for your browser. Oh wait: how does the application get “deployed?” Let’s throw in “hosting” as another requirement. Collaboration? Oh right! Let’s add Git and GitHub to the list. </wipes sweat from brow>

Now, let’s dig in! Which language? Which framework? Which database? Which preprocessor? Which editor? Not to mention the whole category of front-end frameworks and browser APIs like local storage and workers, web sockets, and so on.

Just when many thought the the “evils” of building Web apps with vanilla JavaScript or jQuery had been solved thanks to libraries like Backbone, a whole new era of solutions like Angular and Ember matured, and then a whole new cohort emerged: React, Flux, and more. And this has all happened in the last few years!

How can a “learn to code” movement be effective in this age of infinity-expanding possibilities? How can even Resig’s sage wisdom of [30 minutes of coding a day](http://ejohn.org/blog/write-code-every-day/) move forward our learner’s side projects and learning aspirations? I worry that people will tune out, or turn off too soon.

## The disconnect
This is not just a challenge for newcomers. 

Web veterans are asking their peers and browser makers to [Stop pushing the web forward](http://www.quirksmode.org/blog/archives/2015/07/stop_pushing_th.html). Others are responding saying “don’t learn everything,” or to take a [T-shaped approach to skill development](http://bradfrost.com/faq/#industry). All point to the reality that there is just too much for the average person to learn (there are exceptions, of course, like the [James McKinneys](TK), [Friedrich Lindenbergs](TK), and [Max Ogdens](TK) of the world, who make it look all too easy).

I’ve even watched as veteran programmers like Dave Winer — who’s own aspiration was to provide tools for the whole world to blog — [grapple with basics of modern the Web like CSS](http://scripting.com/stories/2011/09/02/basicCssQuestion.html). And after reading [Coders at Work](TK) years ago, I remember being left with the impression that almost all of the all great programmers of my time debug their work using simple print statements, not elaborate debuggers, speaking at the time to a disconnect between what is used vs. what is often taught.

Just to give you an idea of how this plays out in the “real world,” let’s stay that you’re a young, aspiring news-application developer and you want to work for [NPR](TK). Just skimming their [news app template](http://blog.apps.npr.org/2014/07/29/everything-our-app-template-does.html) and blog post on [how to setup a development environment](http://blog.apps.npr.org/2013/06/06/how-to-setup-a-developers-environment.html), you would need to learn (assuming knowledge of the command line and a text editor already): [Homebrew](TK), Python, pip, virtualenv, Flask, Fabric, Jinja, LESS, Bootstrap, Node, NPM, Git/GitHub, PostgreSQL, and a bit about Amazon’s AWS service including the [awscli](https://pypi.python.org/pypi/awscli) library.

If you have some years behind you, these are probably familiar tools and perhaps you use them regularly. For others, does this seem like a plausible list of subjects to learn through an online course, or even a short bootcamp?

## The opportunity / solution
I don’t know if there’s a solution to this quandary. I want more people to learn to code, or — perhaps more realistically —  to learn how to co-create using the building blocks of the Open Web. And yet, I want them to start with a complete idea of what’s ahead, to pace themselves, and to stick with it for the long-term.

Not that I have it all figured out. Here’s what I’d recommend to those starting on the journey:

* Project-based work:
* Document your process: 
* Learn to ask good questions:
* Learn how to learn:
* Learn how to prototype quickly, and how to show you work quickly:
* Learn to not fear feedback:

Conclusion TK.

[^1]The folks at Viking Code School have summarized some of the challenges quite well here: http://www.vikingcodeschool.com/posts/why-learning-to-code-is-so-damn-hard