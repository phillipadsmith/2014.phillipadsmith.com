---
layout: post
title:   'Jekyll with a post-receive hook'
dek:     'This is a test dek, that should sit below the title'
summary: 'This is a quick summary of this post'
date:    '2014-01-11 09:28:39 -0600'
img_opt: 'cover' # cover | inlne
img_sml: '/ui/img/320x256.jpg'  # default on cover or inline
img_med: '/ui/img/640x512.jpg'  # 640x512px cover, inline
img_lrg: '/ui/img/800x640.jpg'  # 800x640px cover, inline
img_xlg: '/ui/img/1200x960.jpg' # 1200x960px cover only
img_alt: ''
img_caption: ''
categories: 
- Coding
tag: frontpage
body:
- class1
- class2
---

<p class="lead">
Here we go. This is a test!
</p>

Worked nicely! :)

###### Heading 6

### Heading 3

And a test of the grunt watch concurrent task.

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

