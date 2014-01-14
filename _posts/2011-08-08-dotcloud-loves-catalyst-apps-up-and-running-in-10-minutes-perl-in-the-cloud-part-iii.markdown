---
layout: post
title: '@dotCloud loves Catalyst apps: Up-and-running in 10-minutes (#Perl in the
  cloud, Part III)'
date: '2011-08-08 15:00:42 -0500'
mt_id: 2734
---
<p><em>Cross-posted from <a href="http://blogs.perl.org/users/phillip_smith/2011/08/dotcloud-loves-catalyst-apps-up-and-running-in-10-minutes-perl-in-the-cloud-part-iii.html">Phillip Smith</a></em></p></small>

<style>
code { background: #fcf9ce; padding 2em; }
</style>

Lots is happening in the Perl Web framework world these days. The [three](http://mojolicio.us/) [main](http://www.catalystframework.org/) [frameworks](http://perldancer.org/) are getting better at a faster-and-faster rate, [great screencasts are starting to appear](http://mojocasts.com/), and -- finally -- Perl is moving into the cloud, thanks to support from new Platform-as-a-Service vendors like [dotCloud](http://dotcloud.com).

Now, I've been known to kvetch a bit about "Perl in the cloud" [once](http://www.phillipadsmith.com/2011/03/ten-million-dollars-to-dotcloud-but-still-no-perl-support.html) or [twice](http://www.phillipadsmith.com/2011/05/from-perl-slacker-to-perl-hacker-perl-in-the-cloud-part-ii.html) before. But this is not a kvetch. No, no, my friend: this is a "Forget the ode, show me the code" post.

I cracked open an old project this weekend with the intention of getting back to work on it. I thought I'd give dotCloud another try, as I wanted a quick way to have this application interact with OAuth providers (hard to do on my local machine). But I quickly noticed that many of the existing Perl Web framework on dotCloud posts -- of which [there](http://blog.kraih.com/mojolicious-in-the-cloud-hello-dotcloud) [are](http://blogs.perl.org/users/marco_fontani/2011/04/dancing-on-a-cloud-made-of-pearls.html) [several](http://onionstand.blogspot.com/2011/04/catalyst-in-cloud.html) -- were a bit out of date, and didn't reference dotCloud's new command-line tool or way of deploying services. (Though, I should note, that they're excellent posts and I steal from them liberally here.)

Anyway, after a bit of poking around, I had my app deployed on dotCloud and wanted to share the newer process for getting a bare-bones [Catalyst application](http://www.catalystframework.org/) up-and-running in the cloud in 10-minutes:

* I'm going to start by assuming that you have Catalyst running properly on your local development computer. If you're not at that stage yet, you should probably read the [Catalyst::Manual](http://search.cpan.org/perldoc?Catalyst::Manual) or grab a copy of the rather excellent [The Definitive Guide to Catalyst](http://www.amazon.co.uk/Definitive-Guide-Catalyst-Maintainable-Applications/dp/1430223650?&camp=2486&linkCode=wey&tag=enligperlorga-21&creative=8882).

* Once you've got that sorted, run <code>catalyst.pl App::Name</code> to create the scaffolding for your application. I used <code>Catalyst::Default</code> for this example application, and I'll use that app name throughout. Catalyst will create the scaffolding in a directory called <code>App-Name</code> -- so, in my case, that's <code>Catalyst-Default</code>.

* Change your working directory to the app that you've just created, in my case that's <code>cd Catalyst-Defualt</code>. Let's call this your app's root directory for convenience to this walk through.

* Next, you'll want to link your <code>root/static</code> directory from the app's root directory, because that's where dotCloud will look for static files. You can do this with a simple <code>ln -s root/static static</code>.

* Then you'll want to set-up support for [PSGI](http://plackperl.org/). To do that, you can simply:

<script src="https://gist.github.com/1132562.js?file=gistfile1.pl"></script>

* Now edit the 'app.psgi' file and add the line <code>use lib 'lib'</code> after the <code>use warnings</code> line. Here's mine:

<script src="https://gist.github.com/1132491.js?file=app.psgi"></script>

* At this point, if you're aiming to deploy a real application, you should update your Makefile.PL with the modules, plugins, and so on that are required by the application. By doing this, dotCloud is able to install all the required Perl modules from CPAN automatically. This is the most impressive part of dotCloud to me --  it's simply amazing to watch how it handles complex dependency chains without breaking a sweat.

* If you're just going to deploy the default Catalyst application that is built by the scaffolding to follow along, you'll want to add <code>requires 'Catalyst::Engine::PSGI';</code> to your Makefile.PL. Add that after the other lines that start with <code>requires</code>.

* Now you're ready to run your Makefile.PL (<code>perl Makefile.PL</code>). Without this step, dotCloud won't be able to parse your Makefile.PL and you'll be stuck updating the dotcloud.yml with your dependencies. Not the end of the world, but create unnecessary redundancy.

* Now we're ready to let dotCloud know about our application. First, you'll need to [download and install the dotCloud command-line client](http://docs.dotcloud.com/firststeps/install/).

* Use the <code>dotcloud create appname</code>  command to create your app. In my case, I just used <code>dotcloud create catalyst</code>. (dotCloud doens't seem to like names with any special characters, so you'll need to choose something like 'catalystdefault' or 'catalystappname'.)

* You'll need a dotcloud.yml file to tell dotCloud about the service your app requires -- e.g., Perl, Python, Ruby, etc. -- so fire up your favourite editor and open up dotcloud.yml and add these lines:

<script src="https://gist.github.com/1132566.js?file=dotcloud.yml"></script>

* Save that file in the root directory of your app. At this point, your app's root directory should look like so:

<script src="https://gist.github.com/1132569.js?file=gistfile1.txt"></script>

* Now you're ready to deploy your application into the dotCloud cloud. Drum roll please.... So, to do that, simply run <code>dotcloud push appname .</code>.

At this point, you'll want to go grab a coffee or beer or something because, if you've done everything right, the dotCloud build system will review your Mekefile.PL for dependencies and start installing Catalyst in your cloud instance so that your app can run properly. If that's happening, you should see something like:

<script src="https://gist.github.com/1132570.js?file=gistfile1.txt"></script>

At the end of the process, you should see this line:

<script src="https://gist.github.com/1132572.js?file=gistfile1.txt"></script>

Visit the URL that dotCloud provided in your browser and, if you're lucky, you should [see this](http://9f385357.dotcloud.com/).

If you get a 404 or some other page, there was a problem along the way. To troubleshoot, just run <code> dotcloud logs catalyst.www</code> (replacing 'catalyst' with the name you gave your app on dotCloud) -- the 'www' indicates the name of the service you created in your dotcloud.yml. (We'll dig a bit more into the different services in the next post.)

Let me know in the comments if you have any questions, if anything above is unclear (or could be clearer), or if you run into any problems. I'm not a dotCloud expert by any means, but I am starting to get my head around it.

Next up: Setting up a PostgreSQL data service.

<p><em>Feel free to comment here or on the <a href="http://blogs.perl.org/users/phillip_smith/2011/08/dotcloud-loves-catalyst-apps-up-and-running-in-10-minutes-perl-in-the-cloud-part-iii.html">original post</a></em></small>
