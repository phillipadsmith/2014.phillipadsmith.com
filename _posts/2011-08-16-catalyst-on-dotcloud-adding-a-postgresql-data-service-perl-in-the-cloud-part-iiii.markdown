---
layout: post
title: '#Catalyst on @dot_cloud Adding a #PostgreSQL data service. (#Perl in the cloud,
  Part IIII)'
date: '2011-08-16 13:09:15 -0500'
mt_id: 2740
---

<style>
code { background: #fcf9ce; padding 2em; }
</style>

_Cross-posted from [blogs.perl.org](http://blogs.perl.org/users/phillip_smith/2011/08/catalyst-on-dotcloud-adding-a-postgresql-data-service-perl-in-the-cloud-part-iiii.html)_

Following up on [my previous post](http://blogs.perl.org/users/phillip_smith/2011/08/dotcloud-loves-catalyst-apps-up-and-running-in-10-minutes-perl-in-the-cloud-part-iii.html) that demonstrated how to get a basic [Catalyst](http://www.catalystframework.org/) application up-and-running on [dotCloud](https://www.dotcloud.com/) in under ten minutes, let's explore how to take things a step further by adding a database service.

For convenience sake, I'm just going to walk you through the [Catalyst::Manual::Tutorial](http://search.cpan.org/~bobtfish/Catalyst-Manual-5.8008/lib/Catalyst/Manual/Tutorial.pod).

However, unlike the tutorial (or most Catalyst tutorials for that matter), we're going to use PostgreSQL instead of SQLite -- and we're going to deploy the app into the cloud vs. just developing locally (thanks to the magic of dotCloud, which makes it so easy).

Luckily, it looks like the [Catalyst::Manual::Tutorial Chapter 3](http://search.cpan.org/~bobtfish/Catalyst-Manual-5.8008/lib/Catalyst/Manual/Tutorial/03_MoreCatalystBasics.pod) has been updated with a [PostgreSQL-specific appendix](http://search.cpan.org/~hkclark/Catalyst-Manual-5.8004/lib/Catalyst/Manual/Tutorial/10_Appendices.pod#PostgreSQL), which makes things a lot easier (and means that I can spare you from my terrible SQLite-to-PosgreSQL conversion skills).

Here we go:

* Following along with the tutorial, we go ahead and add [Catalyst::Plugin::StackTrace](http://search.cpan.org/dist/Catalyst-Plugin-StackTrace/) to the base application module and the Makefile.PL, which ensures it will get auto-installed and built by dotCloud when we push our app. Here's the [commit](https://github.com/phillipadsmith/Catalyst-Default/commit/5477539014741388d630202c887df2c132ec06bd) on Github.

* Next, we use the [Catalyst::Helper](http://search.cpan.org/~flora/Catalyst-Devel-1.33/lib/Catalyst/Helper.pm) script to create a controller for 'books' (and a simple test), and update the controller per the tutorial. [Commit](https://github.com/phillipadsmith/Catalyst-Default/commit/7528af68e7711aa54247c6838d51acecc71482fc)

* Then, using the Catalyst::Helper script again, we create a simple view called HTML that will use Template Toolkit as its rendering engine. Finally, we set the component path to let the application know where to find the templates. [Commit](https://github.com/phillipadsmith/Catalyst-Default/commit/33a252704b965c93847905ba4922ea1f5e91cf6a)

* Last but not least, we create the TT2 template to accompany the /books/list action. [Commit](https://github.com/phillipadsmith/Catalyst-Default/commit/268cac856cdaa1995a15f4f83da3abe2f91d40ab)

Now we diverge a little bit and head over to the [PostgreSQL appendix]((http://search.cpan.org/~hkclark/Catalyst-Manual-5.8004/lib/Catalyst/Manual/Tutorial/10_Appendices.pod#PostgreSQL) and create our application's database for managing books. This assumes that you're familiar with [PostgreSQL](http://www.postgresql.org/), have installed the PostgreSQL server and client and the Perl [DBD::Pg](http://search.cpan.org/~turnstep/DBD-Pg-2.18.1/Pg.pm) module.

* So, working locally for now, let's create a user for this application and then a database [per the instructions](http://search.cpan.org/~hkclark/Catalyst-Manual-5.8004/lib/Catalyst/Manual/Tutorial/10_Appendices.pod#PostgreSQL).

* The data file provided by the appendix had a couple of typos, so I fixed this up [here](https://github.com/phillipadsmith/Catalyst-Default/commit/1ae6c212aa98f61652e4e862c37a8e336e56c885). Use that data file and load up your PostgreSQL database and check that everything loaded properly.

* Next create the some [DBIC schema models](http://search.cpan.org/~rkitover/Catalyst-Model-DBIC-Schema-0.54/lib/Catalyst/Model/DBIC/Schema.pm#DESCRIPTION) with the assistance of [Catalyst::Helper::Model::DBIC::Schema](http://search.cpan.org/~rkitover/Catalyst-Model-DBIC-Schema-0.54/lib/Catalyst/Helper/Model/DBIC/Schema.pm)
<script src="https://gist.github.com/1147843.js?file=gistfile1.txt"></script>

This creates the application's database model files automatically from the database tables and relationships; see this [commit](https://github.com/phillipadsmith/Catalyst-Default/commit/b782e1e886de198568d8363d2f3ada5af23be148).

* Now, with the models auto-generated and some data in the database, we need to enable our model in our 'books' controller. [Commit](https://github.com/phillipadsmith/Catalyst-Default/commit/f4c74e153e218a93138a033a541da98ecff6c3dc)


At this point, you can check out your application locally to ensure that everything is running. In fact, this is a good point to mention a Catalyst development trick: If you run the development server with <code>script/appname_server.pl -r</code> option, the server reloads when you update an application file. Thus, if there's an error, you can see it right away. I usually leave this window with the server output visible next to my editing window. Good for caching typos right away.

* Okay, so finishing up, we configure the HTML view to use a 'wrapper' (think header, footer, etc.) for our action-specific views, and we add a CSS file, etc. [Commit](https://github.com/phillipadsmith/Catalyst-Default/commit/5e316ee3c0487d563a90f4d20c266052d65c3774)

* Even though we're not going to use them yet, to stay consistent with the tutorial, we update generated DBIx::Class result class files for many-to-many relationships. [Commit](https://github.com/phillipadsmith/Catalyst-Default/commit/f811188dcae9dbed6e294f6a3ef2ecc742092512)

* Update the books/list view template to include authors. [Commit](https://github.com/phillipadsmith/Catalyst-Default/commit/d74ee12db26123c2834f7563f13271dc192ef914)

Great. That was all pretty straightforward, so let's deploy this on dotCloud:

* Add the additional requirement DBIx::Class to the make file. (In fact, I forgot a few requirements along the way -- typical! -- so let's also add: Catalyst::Model::DBIC::Schema, DBD::Pg, Catalyst::View::TT, and MooseX::NonMoose. Curiously, I thought that MooseX::NonMoose should have been built as a dependency of Catalyst::Model::DBIC::Schema, but wasn't ... so I had to add it manually to the Makefile.)


Okay, now for the fun part, let's add a PostgreSQL data service to our dotCloud instance by adding a couple lines to the dotcloud.yml file ([Commit](https://github.com/phillipadsmith/Catalyst-Default/commit/1259dd84bd0784b9ca1fa623a6695add7eeba615)) as described in their [documentation on PostgreSQL](http://docs.dotcloud.com/services/postgresql/). Pretty simple, eh?

Now, let's deploy these new files to dotCloud (_note that our Catalyst application and the new data service are not connected yet_) with <code>dotcloud push catalyst .</code> and watch dotCloud do it's incredible magic of installing all of the CPAN modules that your Catalyst app needs. It _really_ is magic.

If all goes well, you should see:

> Deployment finished. Your application is available at the following URLs
www: http://9f385357.dotcloud.com/

Run <code>dotcloud info catalyst.data</code> and you should see something like:

<script src="https://gist.github.com/1147948.js?file=gistfile1.txt"></script>

Now, you just need to connect up your new data service with your app (well, almost, we'll still need to create the remote database and load it with data). To do that, you can either put the database connection info directly into your lib/MyApp/Name/Model/DB.pm file, or read it from the dotCloud environment.json file.

However, at this point, if you put your dotCloud database connection info into your app your local development version is going to complain loudly and will stop being useful as a way to see what you're doing before you push the app to the cloud. So, this becomes a good opportunity to get our local environment set-up to be as similar as possible as our cloud environment.

On dotCloud, the database connection information is automatically put into a handy <code>environment.json</code> file at the root of our dotCloud environment (/home/dotcloud/). So, to make things easy, let's also create a <code>environment.json</code> file at the root of our application directory. So, my application root now looks like this:

<script src="https://gist.github.com/1148393.js?file=gistfile1.txt"></script>

And I set my local version of <code>environment.json</code> to match the variable names that dotCloud provides, but with my local connection information, like so:

<script src="https://gist.github.com/1148397.js?file=gistfile1.json"></script>

Okay, we're in the home stretch now! So, to finish things off:

* To read these environment.json files, we can just add the handy [JSON](http://search.cpan.org/dist/JSON/) and [IO:All](http://search.cpan.org/dist/IO-All/) modules to the Makefile. [Commit](https://github.com/phillipadsmith/Catalyst-Default/commit/102dd7874102eec6c26327686b5b7390c62deebf)

* Now we can update our [Model::DB file](https://github.com/phillipadsmith/Catalyst-Default/blob/master/lib/Catalyst/Default/Model/DB.pm) to read the environment.json on dotCloud if it exists, or to fall back to our local version if not.

* We're all set now to actually create the _database_ (earlier, we simply created the data _service_). We'll do that by running <code>dotcloud run catalyst.data -- createdb default-catalyst</code>. **Note that this is using version 0.4 of the dotCloud command-line client -- future versions might change this format.** The <code>.data</code> targets the command to run for the data _service_ that we set-up (vs. the www service running the app). If that all worked, you should see: <code># createdb default-catalyst</code>

* Last but not least, we load the data from our local development environment to the cloud database. There are probably other (possibly better!) ways to do this, but I found this approach straightforward: <code>su - postgres</code> and then <code>./bin/pg_dump default-catalyst | ./bin/psql -h XXXXXX.dotcloud.com -p XXXXX -U root default-catalyst</code>. Obviously, replace the Xs with the sub-domain and port of your data service.

With all of that done -- phew! -- we can run one last <code>dotcloud push catalyst .</code> to push the latest changes to into the cloud, install any remaining dependencies, and restart nginx. If all went well, you should see:

* The Catalyst welcome screen here: [http://9f385357.dotcloud.com](http://9f385357.dotcloud.com)

* The database-connected book list here: [http://9f385357.dotcloud.com/books/list](http://9f385357.dotcloud.com/books/list)

Hopefully your PostgreSQL-backed app is now running in the cloud. Hurray!

If you find an error in this post, or have improvement suggestions, please let me know in the comments.

_P.S. If your app is not running, the one thing to check that tripped me us is how dotCloud integrates with [git](http://git-scm.com/). They key take-away is: be sure to commit your changes to git, or dotCloud won't pick them up! Personally, I found this a bit confusing, and -- in the future -- I'll probably use the <code>dotcloud ssh catalyst.www</code> command to do my dotCloud-specific debugging **on** dotCloud and then manually bring those changes back into the local version and **then** commit the changes. Without doing that, I ended up with a lot of unecessary commits in the repository as I futzed about with a connection issue._

_Cross-posted from [blogs.perl.org](http://blogs.perl.org/users/phillip_smith/2011/08/catalyst-on-dotcloud-adding-a-postgresql-data-service-perl-in-the-cloud-part-iiii.html). Feel free to comment here, or on the original._
