---
layout: post
title: "Deploying your static news app like a Samurai"
date: 2014-07-29 11:33:38 # This is used in place of the filename
files_url: /files/2014/07/29/deploying-your-static-news-app-like-a-samurai/
dek:     The Way of the Deployment Warrior 
summary: # 140 characters or less!
img_opt: 'cover'                                        # Options: 'cover' or 'inlne' or 'none'
img_sml: '/files/2014/07/29/deploying-your-static-news-app-like-a-samurai/samurai_sml.jpg'                          # Default on cover or inline
img_med: '/files/2014/07/29/deploying-your-static-news-app-like-a-samurai/samurai_med.jpg'                          # 640x512px cover, inline
img_lrg: '/files/2014/07/29/deploying-your-static-news-app-like-a-samurai/samurai_lrg.jpg'                          # 800x640px cover, inline
img_xlg: '/files/2014/07/29/deploying-your-static-news-app-like-a-samurai/samurai_xlg.jpg'                         # 1200x960px cover only
img_alt: 'Deploying your static news app like a Samurai:  The Way of the Deployment Warrior. Creative Commons Flickr photo by user Pascal'    # Alt for inline
img_caption: 'Creative Commons Flickr photo by user Pascal'      # Caption for either
img_url: 'https://www.flickr.com/photos/pasukaru76/5681034598/'                                             # URL to original image
category: coding                                        # Just one of the 4xCs
tags:                                                   # E.g., frontpage
- frontpage
- staticnewsapps
- newstechstacks
- jekyll
---

Picking up [where we left off last week][localdevelopment], today's addition to the [series][staticappseries] is going to explore deployment options that can be mixed into a static news app recipe. 
{: .lead}

Like any Web application, the final step of publishing a news app -- whether it's static or dynamic -- involves getting files onto a publicly-accessible server so that users can interact with it. There are two fairly distinct deployment paths:  

1. The K.I.S.S.S. or "Keep it Simple Storage Service" approach
1. The "Elastic Compute Cloud" or "Elastic Beanstalk" approach

## KISSS-compatible static apps
KISSS-friendly static news apps only require their compiled assets -- HTML, CSS, images, JavaScript, and data files (CSV, JSON, etc.) -- to be fully functional. The advantage of building a KISSS-compatible static news app is the fast, inexpensive deployment to infinitely-scalable services like Amazon's S3, [Google Storage](https://developers.google.com/storage/) or [Eucalyptus](https://www.eucalyptus.com/) -- basically, any storage service that is Web-accessible and includes index document and error document support.

It doesn't get any less expensive than deploying an app to a service like Amazon's S3, which is literally fractions of a penny per visitor, infinitely scaleable, and [blazingly fast](http://blog.dmpatierno.com/post/3359880951/s3-hosting-vs-ec2-micro). Some well-known people, using static site generators like [Jekyll][jekyllrb], were [pioneering users of S3 for website hosting purposes](http://www.allthingsdistributed.com/2011/08/Jekyll-amazon-s3.html).

In contrast, some static news apps -- as simple as they are -- can still benefit from access to server-side processing functionality, like cron jobs that run the occasional dynamic script to collect or munge data. Amazon S3, however, does not support server-side scripting, so this is when the "server light" approach comes into focus. 

## A little bit more computing power
Because the [objective of a static news app](http://phillipadsmith.com/2014/07/recipes-for-delicious-tasting-static-news-apps.html) is to keep things as scalable, fast, and cheap as possible -- when a little more computing power is needed -- the next-best option is often cloud computing.  Services like [Amazon's Elastic Compute Cloud][ec2], [Digital Ocean][digitalocean], and [Linode][linode] provide "scalable computing capacity" in the form of virtual servers that you configure to your specific needs. Provisioning is fast, and the cost is still very low for small applications. The trade-off is a steeper learning curve and the need to "manage" those servers.

Another option for many is the newer ecosystem of "Platform as a Service" (PaaS) providers, like [Amazon's Elastic Beanstalk][beanstalk] or [Heruko][heroku]. However, the advantages that PaaS typically provides -- automated app deployment, scaling, and management -- is quickly offset by the more expensive pricing. Probably not a great fit for a static news apps most of the time.

All of the "server light" options above support adding a little extra power to a static app in the form of some Node.js, PHP, Python, Ruby, and [even](https://github.com/judofyr/perloku) [Perl](https://github.com/masakyst/aws-perloneb_simple).

## How the pros handle deployment
So, taking all of the above into consideration, how do the pros like NPR and the Chicago Tribune do it? 

The Tribune's [Tarbell][tarbell] app takes the approach of building the static assets (combining data and templates) and pushing them to pre-defined S3 buckets. That's pretty much the only obvious deployment option with Tarbell. 

NPR's [app template][nprtemplate] is also meant to be deployed as static assets to S3, but it also provides the option of deploying the app as [dynamic Flask app](https://github.com/nprapps/app-template/blob/94181834dbf8bf3f4a4d955d899de787740d353d/PROJECT_README.md#deploy-to-ec2).  But wait, this is a series on _static_ news apps! 

The NPR approach is an interesting idea -- a dynamic app that can "bake" out to a static app, similar to the LA Times' work with [Django bakery](http://datadesk.latimes.com/posts/2012/03/introducing-django-bakery/) -- but I'm curious about the trade-offs with this approach. For example, does the approach make sense to less technical contributors who are involved with the project? On the surface, it appears to provide a lot of flexibility at the expense of simplicity. 

## Pondering the deployment workflow
Okay, so how does this all work in practice, day-to-day, with a team? If you read through the documentation, the typical workflow for both the NPR app template and Tarbell appear to be:

* Copy a template, or install an app (Tarbell)
* Bootstrap or configure the project, which will create a git repository (and possibly add a remote repository on Github)
* Work on the project locally
* Build the assets & deploy the project remotely

I may just be overlooking something, but it appears to me that both of these workflows don't force the developer to commit their current work before deployment, nor do they appear to force the developer to make a pull request to ensure they've got the latest code before deployment. No doubt these steps are almost like a reflex to the news app developers on those two teams, but may be overlooked by the less experienced.

I'm also left wondering how both avoid a situation where two developers deploy updates to S3 at the same time from different versions of the code that they have running locally? Again, it may just be second nature to the people working with these projects day-in and day-out to take the necessary precautions. 

(NPR's app template is smart about this for the EC2 deployment, I should note.)

## Other routes to deployment

There is a middle ground between these two approaches, however, for those seeking a balance between the simplicity of deployment and speed of development. It's also an approach that would seem on the surface to enforce good collaboration habits vis-a-vis source code management.

There are many variations and customizations, but the main patterns described in the [Jekyll deployment documentation](http://jekyllrb.com/docs/deployment-methods/) are good examples of middle ground approaches:

* Automated deployment with a [Git post-update hook](http://jekyllrb.com/docs/deployment-methods/#git-post-update-hook)
* Automated deployment with a [Git post-receive hook](http://jekyllrb.com/docs/deployment-methods/#git-post-receive-hook)
* Automated deployment using a [Jeykll-hook server](http://jekyllrb.com/docs/deployment-methods/#jekyll-hook)

The concept that really stands out to me when looking at the [DevelopmentSeed's](http://developmentseed.org/) [Jeykll-hook server](http://jekyllrb.com/docs/deployment-methods/#jekyll-hook) approach is that it could enforce good workflow practices around deployment, even to services like S3 -- it's basically a proxy between the source code, the built code, and the deployment destination. Using a service like this means that the app is deployed _using_ Git/Github, which means that all local changes to the app are committed _before_ the deployment happens.

I'm curious to see that if that "source code to S3 proxy" concept will be extended to other static site generators, like the app template and Tarbell eventually, or to understand if they have another step in their workflow that handles those concerns.

Well folks, there you have it. There are LOTS of options for deploying your own delicious-tasting static news app recipe. Experiment, explore, and pick the option that best fits with your own way of doing things. 

I'll move on to "Working with data in static apps" in the next post. 

If you have thoughts on the above – examples of other approaches, corrections, tricks, or just opinions – please add them in the comments or drop me a line on [Twitter][twitter].

If you’d like to be notified of the next post, just subscribe to the comments and I’ll post the link there.

[staticappseries]: http://phillipadsmith.com/2014/07/recipes-for-delicious-tasting-static-news-apps.html
[ec2]: http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html
[digitalocean]: https://www.digitalocean.com/
[linode]: https://www.linode.com/
[nprtemplate]: https://github.com/nprapps/app-template/
[nprtemplatedocs]: https://github.com/nprapps/app-template/blob/94181834dbf8bf3f4a4d955d899de787740d353d/PROJECT_README.md#whats-in-here
[localdevelopment]: http://phillipadsmith.com/2014/07/the-tao-of-static-news-app-development.html

[tarbell]:  https://github.com/newsapps/flask-tarbell/
[tarbelldocs]: https://github.com/newsapps/flask-tarbell/blob/0.9-beta6/tarbell/docs/build.rst#anatomy-of-a-project-directory
[jekyllrb]: http://jekyllrb.com/

[nprvisuals]: http://blog.apps.npr.org/
[chinewsapps]:  http://blog.apps.chicagotribune.com/

[id]: http://example.com/  "Optional Title Here"
[twitter]: http://twitter.com/phillipadsmith "Phillip Smith on Twitter"
[srccon]: http://srccon.org/ "SRCCON is a conference for developers, interactive designers, and other people who love to code in and near newsrooms."
[staticsitegenerators]: http://staticsitegenerators.net/ "A comprehensive list of static site generation tools"
