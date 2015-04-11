---
layout: post
published: true
title: Pretty Good Privacy in 10 minutes or less
category: commentary
img_opt: cover
dek: "A step-by-step guide to getting started with Keybase"
img_xlg: /files/phillipadsmith_on_keybase_xlg.jpg
tags: 
  - frontpage
  - security
  - privacy
  - PGP
date: "2015-04-10"
img_lrg: /files/phillipadsmith_on_keybase_lrg.jpg
img_med: /files/phillipadsmith_on_keybase_med.jpg
img_sml: /files/phillipadsmith_on_keybase_med.jpg
---

Encryption is the real deal folks. Love it or hate it, we know that [Pretty Good Privacy](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) works well enough to have [protected sources like Edward Snowden](http://www.businessinsider.com/edward-snowden-email-encryption-works-against-the-nsa-2013-6?op=1). The time for excuses is over. If you work in world where protecting your sources, contacts, or colleagues is important, it's time to stop procrastinating and to get yourself up to speed. This post will help you do that in 10 minutes.
{: .lead}

I receive approximately two encrypted e-mails a day at the moment. That's probably a 200% increase over this time last year. I expect it will only continue to increase.

One of the reasons why it's increasing for me is because I've made time to try to explain encyption to my friends and work colleagues. I've walked many through the steps to get set-up. And, I'm happy to say, over the years it's become easier and easier -- the tools have gotten better, the user experience smoother, and the problems fewer.

Last year, the founders of the well-known online dating site OKCupid put their weight behind the reamaining problems with adoption of Pretty Good Privacy (PGP) and launched an alpha version of a service called [Keybase](https://keybase.io/). Keybase aims to address some of the challenges of getting started and building a "[Web of Trust](https://en.wikipedia.org/wiki/Web_of_trust)" using contemporary "social proofs" like our online social indentities.

Opinions are mixed about Keybase. Some experts like [Tim Bray](https://www.tbray.org/) -- a security buff and software developer at Amazon -- [give it a thumbs up](https://www.tbray.org/ongoing/When/201x/2014/03/19/Keybase). Others, like one of the developers of the popular security tools [TextSecure and Redphone](https://whispersystems.org/), [are ready to give up on PGP entirely](http://www.thoughtcrime.org/blog/gpg-and-me/).

I'm personally of the opinion that some security is better than none, and that -- as the tools will always be evolving -- putting a stake in the ground is an important step toward a committment to learning.

So, with all that said, let's get started with setting up PGP on Keybase...

### Register a Keybase account

[Keybase](https://keybase.io/) is still in "private alpha," so if you don't have an invite code you're going to be stuck in their queue for a little while. There are obviously lots of ways to jump the queue, including asking your friends for an invite. 

I've successfully invited more than twenty people to Keybase over the last few months. In exchange for the invite code, I try to encourage and support them in getting a public key published and exchanging an encrypted message with me. 

If you've received an invitation from me, the process looks something like this:

![Keybase.io e-mail invitation from me!]({{site.baseurl}}/files/0_keybase_email_invite.jpg)
Look for an e-mail from `keybase.io` in your e-mail client. If you can't find it at first, check your "Promotions" tab in Gmail, or your "junk" folder or what-have-you. Maybe search for it.

![Confirm that e-mail address]({{site.baseurl}}/files/0_keybase_email_confirm.jpg)
Clicking the link in the e-mail will lead you to this page.

![1_keybase_already_have_a_code.jpg]({{site.baseurl}}/files/1_keybase_already_have_a_code.jpg)
Alternately, you can simply head to the [Keybase](https://keybase.io) site, click "Join" in the top right corner, and then click the "Already have a code?" link.

![Keybase.io: pick a good passphrase]({{site.baseurl}}/files/2_keybase_passphrase.jpg)
The most important step when registering your Keybase account is picking an important passphrase. If you need some inspiration or coaching on this aspect of security, I suggest you put four minutes of your life into the hands of none other than [John Oliver and Edward Snowden (Facebook video link)](https://www.facebook.com/video.php?v=687975607998118&pnref=story).

### Hold on: You're not done yet!

![Keybase.io: No public key (yet!)]({{site.baseurl}}/files/3_keybase_no_public_key.jpg)
Right about now you're feeling all smug and thinking "I'm one of the cool kids, yo! I got me an alpha Keybase account." But your work doesn't end there: in fact, the journey has only begun...

For some reason that I haven't figure out yet, about one in ten of the people I invite to Keybase stop at the previous step and never actually set-up a public PGP key. However, without a public PGP key, nobody can send you an encrypted message. Having a Keybase account without a public key is actually kinda' lame. Let that be your public shaming and incentive to finish the job you started.

![Keybase.io: Add or create a key]({{site.baseurl}}/files/4_keybase_add_a_key.jpg)
To get started, click the "Action required" button (kinda' obvious, right!?).

### Add or create a key

![Keybase.io: To add, or create, that is the question.]({{site.baseurl}}/files/5_keybase_add_or_create_key.jpg)
You now have a choice, you can either `add` or `create` a public key. 

If you alrady have a public PGP key, you can upload that public key to Keybase at this point. Just click the `add` button.

If you don't have a public key yet, this is a fine time to create one and Keybase can help you with that. Click "Add or create a key" to get started.

![Keybase.io: You picked a good passphrase, right?]({{site.baseurl}}/files/6_keybase_passphrase_again.jpg)
You picked a [good passphrase](https://www.facebook.com/video.php?v=687975607998118&pnref=story), right? Something memorable that you didn't need to write down on a piece of paper that is now sitting beside your computer on your desk?

![Keybase.io: Math is hard!]({{site.baseurl}}/files/7_keybase_math_is_hard.jpg)
Sit back and relax while Keybase handles the hard math for you.


### To host or not to host, that is the question

![Keybase.io: to host or not to host.]({{site.baseurl}}/files/8_keybase_host_private_key2.jpg)

This is a hotly-debated step in the security community. [There's a good explanatory conversation thread](https://github.com/keybase/keybase-issues/issues/160) on the site that hosts Keybase's code where various folks weigh-in on the options -- if you're concerned about this step, [it's worth a read](https://github.com/keybase/keybase-issues/issues/160).

I'm not hear to preach one way or the other. Choose an option that is a fit with your security needs.

If you don't feel comfortable hosting your private key on Keybase, then you have the option of not doing so. You won't be able to decrypt files using the Web interface, but -- if you're concerns are that high -- you probably know how to decrypt files elsewhere already.

If if helps you to make a decision, here are a couple of points to consider:
- I don't personally host my private key on Keybase, [but I've been using PGP since 2009](http://pgp.mit.edu/pks/lookup?op=vindex&search=0x518BF15DD63C5D49) so the other tools are very familar to me
- You can always delete your private key from Keybase once you've got the hang of encrypting and decrypting messages elsewhere

### Hurray, you've got a public PGP key

![Keybase.io: You got key!]({{site.baseurl}}/files/10_keybase_published_a_key_yeah.jpg)
Horray! You've got a public key hosted on Keybase. You are now officially one of the "cool kids." You can pat yourself on the back for a job well done.

Of course, the real test of coolness is using your new skills to start exchanging encrypted messages with your friends, family, and colleagues.

There are a couple of ways to do that. Let's dive right in.

### How to use your new PGP key via the Web

Now that you've got a public key (and possibly a private key) on Keybase, you can start to encrypt messages to people you know.

![Keybase.io: Track yo friends!]({{site.baseurl}}/files/12_keybase_track_yo_friends2.jpg)
The easiest way to do this is to start `tracking` them. To track someone on Keybase through the Web interface, simply:
- Search for them by a handle they typically use
- Use the provided "social proofs" to verify that is actually the person you think it is
- Then click the `Track` button to indicate that you believe this person is who they say they are, and to add them to the list of people that you track

![Keybase.io: encryption and decryption]({{site.baseurl}}/files/11_keybase_encrypt_decrypt.jpg)
Now, when you click the `encrypt` button, you'll have the option fo typing in the names of people you're tracking and not tracking. The only difference is that people you track will have an icon indicating that they are someone you've tracked (helpful if there are people with similar names).

Type your message. Click `encrypt`. And you should get a large block of [cyphertext](https://en.wikipedia.org/wiki/Ciphertext) that you can e-mail, instant message, SMS, or otherwise transmit to the recipient.

On receiving cyphertext, you should now also be able to decrypt it (either through the Web, if you've hosted your private key with Keybase, or through the Keybase command-line client or similar tools if you keep your private key elsewhere).

### Next up: E-mail and public keyservers

That's where I'm going to leave it for today. In the next post, I'll walk you through:

- Getting encryption working smoothly in your e-mail client
- Adding your e-mail address to your keys
- Publishing your updated public key, with your e-mail address(es) to a public keyserver so that you're more easily found by friends, family and colleagues

Stay tuned. 

Questions, comments, suggested edits? Please drop them in the comments below, find me on [Twitter](http://twitter.com/phillipadsmith), or [send me an encrypted e-mail](https://keybase.io/phillipadsmith).



