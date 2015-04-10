---
layout: post
published: false
title: Pretty Good Privacy in 10 minutes or less
category: coding
img_opt: cover
dek: "A step-by-step guide to getting started with Keybase"
img_xlg: /files/phillipadsmith_on_keybase_xlg.jpg
---

Some lead in
{: .lead}

[Tim Bray on Keybase](https://www.tbray.org/ongoing/When/201x/2014/03/19/Keybase)

[counter-argument](http://www.thoughtcrime.org/blog/gpg-and-me/)

[Review – Keybase.io, the Social Approach to Public Key Verification](http://www.vmfieldtips.com/2015/03/14/review-keybase-io-alpha/)
http://www.vmfieldtips.com/about/


http://pgp.mit.edu/pks/lookup?op=vindex&search=0x518BF15DD63C5D49
https://keybase.io/phillipadsmith

I receive approximately two encrypted e-mails a day at the moment. That's probably a 200% increase over this time last year.

Let's get started:

## Register a Keybase account

[Keybase](https://keybase.io/) is still in "private alpha," so if you don't have an invite code you're going to be stuck in their queue for a little while. There are obviously lots of ways to jump the queue, including asking your friends for an invite. 

I've successfully invited more than twenty people to Keybase over the last few months. In exchange for the invite code, I try to encourage and support them in getting a public key published and exchanging an encrypted message with me. 

If you're received an invitation from me, the process looks something like this:

![Keybase.io e-mail invitation from me!]({{site.baseurl}}/files/0_keybase_email_invite.jpg)
Look for an e-mail from `keybase.io` in your e-mail client. If you can't find it at first, check your "Promotions" tab in Gmail, or your "junk" folder or what-have-you. Maybe search for it.

![Confirm that e-mail address]({{site.baseurl}}/files/0_keybase_email_confirm.jpg)
Clicking the link in the e-mail will lead you to this page.

![1_keybase_already_have_a_code.jpg]({{site.baseurl}}/files/1_keybase_already_have_a_code.jpg)
Alternately, you can simply head to the [Keybase](https://keybase.io) site, click "Join" in the top right corner, and then click the "Already have a code?" link.

![Keybase.io: pick a good passphrase]({{site.baseurl}}/files/2_keybase_passphrase.jpg)
The most important step when registering your Keybase account is picking an important passphrase. If you need some inspiration or coaching on this aspect of security, I suggest you put four minutes of your life into the hands of none other than [John Oliver and Edward Snowden (Facebook video link)](https://www.facebook.com/video.php?v=687975607998118&pnref=story).

## Hold on: You're not done yet!

![Keybase.io: No public key (yet!)]({{site.baseurl}}/files/3_keybase_no_public_key.jpg)
Right about now you're feeling all smug and thinking "I'm one of the cool kids, yo! I got me an alpha Keybase account." But your work doesn't end there: in fact, the journey has only begun...

For some reason that I haven't figure out yet, about one in ten of the people I invite to Keybase stop at the previous step and never actually set-up a public PGP key. However, without a public PGP key, nobody can send you an encrypted message. Having a Keybase account without a public key is actually kinda' lame. Let that be your public shaming and incentive to finish the job you started.

![Keybase.io: Add or create a key]({{site.baseurl}}/files/4_keybase_add_a_key.jpg)
To get started, click the "Action required" button (kinda' obvious, right!?).

## Add or create a key

![Keybase.io: To add, or create, that is the question.]({{site.baseurl}}/files/5_keybase_add_or_create_key.jpg)
You now have a choice, you can either `add` or `create` a public key. If you don't have a public key yet, this is a fine time to create one and Keybase can help you with that. Click "Add or create a key" to get started.

![Keybase.io: You picked a good passphrase, right?]({{site.baseurl}}/files/6_keybase_passphrase_again.jpg)
You picked a [good passphrase](https://www.facebook.com/video.php?v=687975607998118&pnref=story), right? Something memorable that you didn't need to write down on a piece of paper that is now sitting beside your computer on your desk?

![Keybase.io: Math is hard!]({{site.baseurl}}/files/7_keybase_math_is_hard.jpg)
Sit back and relax while Keybase handles the hard math for you.

If you alrady have a public GPG key, you can upload that public key to Keybase at this point. Just click the `add` button.

# To host or not to host, that is the question

![Keybase.io: to host or not to host.]({{site.baseurl}}/files/8_keybase_host_private_key2.jpg)

This is a hotly-debated step in the security community. [There's a good explanatory conversation thread](https://github.com/keybase/keybase-issues/issues/160) on the site that hosts Keybase's code where various folks weigh-in on the options -- if you're concerned about this step, [it's worth a read](https://github.com/keybase/keybase-issues/issues/160).

I'm not hear to preach one way or the other. Choose an option that is a fit with your security needs.

If you don't feel comfortable hosting your private key on Keybase, then you have the option of not doing so. You won't be able to decrypt files using the Web interface, but -- if you're concerns are that high -- you probably know how to decrypt files elsewhere already.

# Hurray, you've got a public PGP key

![Keybase.io: You got key!]({{site.baseurl}}/files/10_keybase_published_a_key_yeah.jpg)
Horray! You've got a public key hosted on Keybase. You are now officially one of the "cool kids." You can pat yourself on the back for a job well done.

Of course, the real test of coolness is using your new skills to start exchanging encrypted messages with your friends, family, and colleagues.

There are a couple of ways to do that. Let's dive right in.

# How to use your new PGP key via the Web

![Keybase.io: encryption and decryption]({{site.baseurl}}/files/11_keybase_encrypt_decrypt.jpg)


[Keybase.io: Track yo friends!]({{site.baseurl}}/files/12_keybase_track_yo_friends2.jpg)

![Keybase.io: Log-in frequently.]({{site.baseurl}}/files/13_keybase_login_later.jpg)

## How to use your PGP key in your e-mail

![keybase_GPG_cant_send_to_these.jpg]({{site.baseurl}}/files/keybase_GPG_cant_send_to_these.jpg)


### GPG Tools
![keybase_gpg_tools.jpg]({{site.baseurl}}/files/keybase_gpg_tools.jpg)

![keybase_GPG_keychain_access.jpg]({{site.baseurl}}/files/keybase_GPG_keychain_access.jpg)

![keybase_gpg4win.jpg]({{site.baseurl}}/files/keybase_gpg4win.jpg)

### Update your info

### Push your updated key to Keybase

## Bonus points

### Publish your key on public keyservers

### Test your new capabilities


[Tor support!](https://keybase.io/docs/command_line/tor)


