---
layout: post
title: Consistency and simplicity are keys to better databases (and spreadsheets)
  for journalists
date: '2013-02-22 11:58:24 -0600'
category: commentary
tags:
- frontpage
- pbs
- journalism
- workingwithdata

mt_id: 2901
---
<i>This post originally appeared on <a href="http://www.pbs.org/idealab/2013/02/how-journalists-can-think-like-programmers051.html">PBS MediaShift Idea Lab</a></i>

I'm working on a fun little project at the moment that involves pulling data out of a Google Spreadsheet that is being curated by a team of journalists. The interesting thing about this project is that it so clearly illustrates the difference in thinking between people who _regularly_ work with databases (herein called programmers) and those who use them less frequently (herein called journalists). In this particular case, the spreadsheet was initially developed by a more technically inclined editor, but -- nonetheless -- it exhibits some humorous and illustrative shortcomings, which we'll explore here.

h2. What is a column, what is a row

In one of the earliest books that I read on databases design (and still a personal favorite), <a href="http://www.amazon.com/gp/product/0321884493/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0321884493&linkCode=as2&tag=phillipadsmit-20">Database Design for Mere Mortals</a>, under the heading of "Objectives of good design," it says:

bq. Each table in the database represents a single subject, is composed of relatively distinct fields, keeps redundant data to an absolute minimum, and is identified throughout the database by a field with unique values.

In fact, most day-to-day use of SQL-type databases utilizes terminology that matches a spreadsheet quite nicely, specifically: tables, rows, and columns (or, as C.J. Date would insist in his excellent book, <a href="http://www.amazon.com/gp/product/0596100124/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0596100124&linkCode=as2&tag=phillipadsmit-20">Database in Depth: Relational Theory for Practitioners</a>: relations, tuples, and attributes).

Thus, we can think of a Google Spreadsheet as a simple database of sorts that describes a single domain, for example, an upcoming election. Within the spreadsheet there are worksheets (those little tabs along the bottom that I encourage you to use!), and each worksheet represents a table that describes "only one kind of thing, an entity, with its (non-repeating) attributes. A common way to name each table is with a plural noun name, e.g., "Customers, Products, Aircraft":http://www.fredosaurus.com/notes-db/design/terminology.html, etc." 

So, extending that logic to our example domain, an upcoming election, in our Google Spreadsheet we might want to have:

* **worksheets** for the various "subjects" that are often part of an election, like Districts, Candidates, Incumbents, and so on. 

* In each of these worksheets, the **columns** would represent attributes of that type of thing: For example, a Candidates worksheet might have a column for party affiliation, website, and so on. 

* Each **row** would represent one instance of that type of thing, a candidate, and would contain all of the various attributes that relate to that one candidate.

My sense is that most journalists who've worked with a spreadsheet -- knowingly, or unconsciously -- kind of "get" the concepts presented above. However, where the conceptual meets the practical, there can be some bumpy landings.

h2. It's all in the name

The bumpy landing that I experience most often, and most viscerally, is the seemingly innocuous worksheet column called "Name." How often have I stared in dismay, dumbfounded even, and grumbled to myself "You didn't really put all of that into one column, did you!?" 

Names are surprisingly tricky things, programatically, because they're made up of several component parts like the first name, middle name, and last name, not to mention the honorific, suffix, and so on. And, in today's multicultural world, even these distinctions are not always straightforward or obvious. 

Take for example a name like <a href="http://www.leg.bc.ca/mla/38thparl/kwan.htm">Jenny Wai Ching Kwan</a>. What is the first, middle, and last name? For a computer program, names like that can be difficult to guess (or to "parse") from the individual words. This is where the editorial judgment trumps robot journalism: A subject matter expert needs to break that name up into its component parts so that it's easy to work with.

Thus, as a rule of thumb, it's often best not to exclusively use "Name" as a column in your worksheet, and instead to separate that into "First name" and "Last name," and -- if you need more information about the name -- create more columns. 

Another common challenge with names is that they can be represented in all kinds of short forms -- for example, Caitlin/Kate/Katie, Michael/Mike, Robert/Bob, and so on. Back to our running example, an election, even though a candidate might prefer to be called Kate and might publicly promote herself as Kate in her material or on her website and so on, that doesn't mean you should enter "Kate" in the "First name" column for her row in the worksheet. Why not? Well, technically speaking, that's not her proper name -- the one most likely used on the government website, and in other online databases and data sources -- and that could mean missed opportunities.

Just one quick example: If you happen to have a fantastic "Open Data non-profit":http://opennorth.ca in your country and they happen to provide a "great data source for accessing basic information about elected representatives":http://represent.opennorth.ca, like photos, contact information, and so on, you might want to use that service instead of collecting the information yourself because it would save a lot of time. However, being good open data citizens, this data service has used the proper names for each representative because that's how it was presented on the government website where the data was pulled from.

So, in your worksheet you have "Kate" and you do a lookup for "Kate Smith," and sadly the fantastic Web service responds with "No results." Why? Well, because the lookup you needed to use was "Caitlin Smith." Enough said about that. If you want to use preferred names or nicknames in your worksheet, then -- that's right, you guessed it! -- create more columns.

h2. A little consistency please

So, at this point, hopefully it has hit home that it's really helpful to have each distinct "bit" of information in it's own field, and each field under a column that clearly identifies that bit of information as one single attribute of the subject. That said, should you choose to ignore this guideline -- which no doubt you will at some point -- there is one other guideline that can help to mitigate the potential problem: **consistency.**

For example, if for some unknown reason, it was agreed upon to put three distinct bits of information into one field under one column heading, it should be entered the same way -- exactly -- every time it's entered. So, continuing with our running example of an election, maybe you've decided to list all of the candidate's social media links in one column (why you would do this, I have no idea!) like so: 

<pre>
    @somecandidate,
    candidatewebsite.com,
    facebook.com/somecandidate,
    instagram.com/somecandidate
</pre>
<br />

On it's own, that field or cell would actually be fairly easy to work with, because the individual items are ordered (Twitter, website, Facebook, Instagram) and separated by a comma. Phew! 

However, if the next cell looks like this, which it often does, things start getting a bit more complicated:

<pre>
   @someothercandidate,
   othercandidatewebsite.com
   instagram.com/someothercandidate
</pre>
<br />

At first glance, that might look pretty much the same, but it's not consistent with the first. For starters, one of the links is not present (Facebook), which means that the order of the information is not something that can be relied on. Second, the comma is no longer consistently used to separate the distinct parts.

Now your poor overworked programmer has a lot of edge cases to sort through to turn this into meaningful data that can be presented to your readers. At this point, no doubt, any lazy programmer is simply going to add some columns to your spreadsheet and ask you to separate the data (which, per above, you should have done in the first place). Or, because programmers love a good challenge, she will develop some complex logic to deal with all of the various ways that data could be entered in that column (and your project will launch late).

OK, so there's a simple lesson here: One column should contain just one piece of information (a single attribute of the subject at hand), and keep it really, really consistent. (For example, in Google Spreadsheets, you can use the comments feature to leave formatting guidance on the column headings).

h2. Don't overwork the data

OK, those considerations out of the way, let's move on to working with the data, i.e., calculations, sorting, and so on. Looking at the inspiration for this post and our running example, our basic infrastructure is a Google Spreadsheet and a "Web application" that will display the data to users in a friendly format. Here our much-maligned journalist has not one, but _two_, tools in the mix for doing data manipulation: the ever-powerful spreadsheet and the even-more-powerful programmer. For this reason, there really is no (good) reason to try to do these manipulations manually.

So, continuing with our example of an election, the spreadsheet might contain a worksheet for a previous election, and that worksheet might have columns for district, candidate, party, and votes received. With that information, it's very, very easy to determine who the "winner" of a given race was, and who was in second, third, fourth place, and so on.

It's also easy to determine the total number of votes (assuming that there's a row for each and every one of the candidates who ran and not just the first five or something) and to indicate the percentage of the total votes that each candidate won. However, if you don't want to list all 10 candidates who ran, you'll also need to store the total number of votes cast, somewhere, so that an accurate calculation can be made. 

In general, I'd suggest just including a row for each candidate that ran -- then your data is 100% complete and you can avoid the question of where to put the "Total votes counted in this district" information. If you need to include it, because you only want to research the top five candidates, it's probably best to add a column for "Total votes counted in this district" and add that number to every row, according to what election the row is referring to. This introduces some redundancy in the data, which is a trade-off for less data entry.

So, just to be clear, there's really no need to manually indicate in the spreadsheet with columns like "XYZ Election Winner Name" and "XYZ Election Winner Runner Up." This can, and probably should, be done either by using functions in your spreadsheet (which enables you to check your data entry vs. the official record), or in the Web application that presents the data (again, letting you double-check the numbers and helping to catch data entry problems). 

h2. SUM()ing it all up

That was a lot of information to digest, no doubt, so let's conclude this with a quick review: 

* Spreadsheets map to databases quite nicely (when used efficiently): They have the equivalent of tables, columns, and rows that can describe a subject like people, places, or things. 
* Worksheets, collectively, can describe a broader knowledge domain, like an election, or a parliamentary session, or city contracts.
* Using these efficiently means keeping each distinct "bit" of data in its own field, under a descriptive column heading. 
* When in doubt, create a new column.
* Be consistent. If the data is being entered by more than one person, then use built-in features like comments to provide guidance on the format that should be used.
* Names of people and places should be as accurate, and proper, as possible. (Think about the data sources you might be referencing and cross-check the entry with that source.)
* Keep the data clean, concise, and descriptive, and leave the sorting, joining, calculating and manipulation for later.

No doubt you -- as a journalist, or a programmer -- have some of your own tip, tricks, and pet peeves when working with spreadsheets. I hope that you'll take a moment to share the love (or the pain) here in the comments, or on "Twitter":http://twitter.com/phillipadsmith.

P.S. Do you have a great example of a Google Spreadsheet-powered Web app? Please drop a link in the comments! 

<i>This post originally appeared on <a href="http://www.pbs.org/idealab/2013/02/how-journalists-can-think-like-programmers051.html">PBS MediaShift Idea Lab</a>, please post any comments on the original post!</i>
