---
layout: post
title: Installing DBD::mysql on Mac OS X 10.7 "Lion"
date: '2012-03-08 12:36:10 -0600'
mt_id: 2812
---
_Cross-posted on [blogs.perl.org](http://blogs.perl.org/users/phillip_smith/2012/03/installing-dbdmysql-on-mac-os-x-107-lion.html)_

I've run into this problem every time I've set-up a new computer recently, so -- in the interest of remembering where to look for the solution next time -- here's a quick "note to future self" post on installing [MySQL](http://www.mysql.com/) and [DBD::mysql](https://metacpan.org/module/DBD::mysql) on Mac OS X 10.7 "Lion."

First, the binary installers for MySQL and PostgreSQL for OS X have gotten so good that I don't bother compiling either from source anymore. In fact, the new PostgreSQL installer comes with a nifty "Application Stack Builder" tool that does 1-click post-installation installation of helpful PostgreSQL add-ons like [PostGIS](http://www.postgis.org/) (previously, one of my least favourite things to install). The same goes for the MySQL binary installer: installing MySQL, a preference pane for starting/stopping the server, and a startup item to ensure that it's always running after a reboot is all included.

Okay, so that's great, but what about when I actually want to connect to MySQL from something like Perl? Well, to get started, I need to install the MySQL driver, [DBD::mysql](https://metacpan.org/module/DBD::mysql). Unfortunately, [cpanm](http://search.cpan.org/~miyagawa/App-cpanminus-1.5007/bin/cpanm) bails with this log message:

<script src="https://gist.github.com/2002033.js?file=gistfile1.txt"></script>

There are a few helpful posts out there on the Internets, but none of the suggestions resolved the issue for me.

In there end, there were two steps that were necessary to get things working:

* Symlinking 'libmysqlclient.XX.dylib' from '/usr/local/mysql/lib' to '/usr/lib/' (where XX is the version of the library that is available to link to).

* Passing arguments to the Makefile to ensure that the tests run using a proper MySQL user (the Makefile defaults to the system user running the tests, if no other user is provided, which fails for me as that user doesn't exist).

There you go. That worked for me. Maybe it'll work for you too. Enjoy.

_Cross-posted on [blogs.perl.org](http://blogs.perl.org/users/phillip_smith/2012/03/installing-dbdmysql-on-mac-os-x-107-lion.html)_
