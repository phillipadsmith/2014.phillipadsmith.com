---
layout: post
title: "Installing Net::SSLeay on OS X El Capitan"
date: "2016-03-22 23:14"
link: "https://medium.com/@deepak.gulati/installing-net-ssleay-on-os-x-el-capitan-446c40cffeba#.9oyy7w1m2"
dek: The correct way to fix it...
summary: ""
category: commentary
tags: 
  - links
  - perl
  - openssl
  - osx
img_opt: inline
img_sml: ""
img_med: ""
img_lrg: ""
img_alt: ""
published: true
crosspost_to_medium: "false"
img_xlg: ""
img_caption: ""
img_url: ""
---


[Installing Net::SSLeay on OS X El Capitan](https://medium.com/@deepak.gulati/installing-net-ssleay-on-os-x-el-capitan-446c40cffeba#.9oyy7w1m2)

> On OS X El Capitan (10.11.1), building Net::SSLeay fails with the following error:
> SSLeay.xs:163:10: fatal error: ‘openssl/err.h’ file not found
> #include <openssl/err.h>
> The problem is that Apple no longer ships openssl headers

Hit this super-annoying issue today.

Contrary to this fellow's post, the right solution is simply to install the OpenSSL libraries with Homebrew:

`brew install openssl`
`brew link openssl --force`

Then Net::SSLeay can be successfully installed using `cpanm Net::SSLeay`.

C'est tout.
