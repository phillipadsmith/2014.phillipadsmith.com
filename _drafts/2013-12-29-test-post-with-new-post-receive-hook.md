---
layout: post
title: Template
dek: null
summary: null
date: "2014-01-11 09:28:39 -0600"
img_opt: cover
img_sml: /ui/img/320x256.jpg
img_med: /ui/img/640x512.jpg
img_lrg: /ui/img/800x640.jpg
img_xlg: /ui/img/1200x960.jpg
img_alt: ""
img_caption: ""
img_url: ""
category: coding
tags: 
  - frontpage
body: 
  - class1
---


Lead or intro paragraph, class 'lead' or 'intro'
{: .lead}

Worked nicely! :)

###### Heading 6

### Heading 3

Here is an attribute helper, which adds a class to the containing element. Details [here](http://kramdown.gettalong.org/syntax.html#inline-attribute-lists)

![My helpful screenshot](/ui/img/phillipadsmith-100x100.jpg)
{: .class1}

![brising-card-game.jpg]({{site.baseurl}}/files/brising-card-game.jpg)


The class attribute passed to the image above, actually gets applied to the enclosing p tag

A footnote[^tag] in a sentence like this!

This is a sentence.


#### Heading 4

##### Heading 5

##### Auto IDs


* list item
* list item
* list item
* list item
* list item


<i class="glyphicon glyphicon-adjust"></i> Should be an icon here.

> Blockquote by some very smart person!


~~~ perl
    for my $item ( @items ) {
        print $item->name();
    };
    while (1) {
        do sub {}
    };
~~~

{% highlight perl linenos %}
    for my $item ( @items ) {
        print $item->name();
    };
    while (1) {
        do sub {}
    };
    my $scalar;
    my @array;
    my $coderef = sub {};
    my %hash = (
        item => 1,
        item => 2,
    );
{% endhighlight %}

[^tag]: the footnote the footnote  the footnote the footnote  the footnote the footnote  the footnote the footnote  the footnote the footnote
