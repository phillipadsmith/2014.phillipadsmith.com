---
layout: post
title:   Template
dek:     
summary:         # 140 characters or less!
date:    '2014-01-11 09:28:39 -0600'                    # This is used in place of the filename
img_opt: 'cover'                                        # Options: 'cover' or 'inlne' or 'none'
img_sml: '/ui/img/320x256.jpg'                          # Default on cover or inline
img_med: '/ui/img/640x512.jpg'                          # 640x512px cover, inline
img_lrg: '/ui/img/800x640.jpg'                          # 800x640px cover, inline
img_xlg: '/ui/img/1200x960.jpg'                         # 1200x960px cover only
img_alt: ''                                             # Alt for inline
img_caption: ''                                         # Caption for either
img_url: ''                                             # URL to original image
category: coding                                        # Just one of the 4xCs
tags:                                                   # E.g., frontpage
- frontpage
body:                                                   # Add some class
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

