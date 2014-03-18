title: Making government data more accessible in Venezuela
dek: The process of liberating the data from a 150-page PDF and making it useful again
date:
---

Need to mention:

* CADIVI site offline (for me, for some, but not for all) for some days now
* Maduro's statement that CADIVI would be shut down / merged with another body (likely delaying the release of 2013 data)


It's hard for me to believe that it has been almost six weeks since cartographic whiz [Hugh Stimson](TK) and I were in Venezuela [delivering data journalism workshops](TK) organized by the press freedom monitoring organization [IPYS](TK). It feels like yesterday that I started hearing from the participants of those workshops about the quickly unfolding and rapidly escalating political situation on the streets of cities throughout the country that followed just days after our departure. TK...

Hugh and I will be delivering that same bootcamp-style workshop again this summer in Vancouver as part of [The Tyee's Master Class learning series](http://thetyee.ca/MasterClass/Spring2014/Data-Bootcamp/). Fine-tuned for the needs of data-hungry journalists, researchers, activists and anyone with a story to tell in Vancouver, British Columbia, and Canada more broadly, the two-day hands-on workshop will guide participants through the entire workflow of their own personal data project. Like in Venezuela, the workshop will conclude with participants presenting their completed projects.

To give people a sense of what that experience looks like, I'm going to share the process that [Emilia Diaz-Struck](TK) and I went through to take records acquired from the Venezuelan government body [CADIVI](TK) (Comisión de Administración de Divisas/Commission for the Administration of Currency Exchange) -- originally a 150-page PDF document with more than 10,000 rows of data -- and to [make it available as a searchable online "database"](http://phillipadsmith.github.io/cadivi/).

* **Searching for data:** Finding the data was probably the easiest part of this project because data-savvy journalists in Venezuela have been sensibly making copies of whatever data the government releases, divining that it might not be available in the future. During the workshop, Emilia delivered a tour-de-force of how to find data online using site-specific searches and other tricks (all available in Spanish [here](TK)), demonstrating how to search for information about companies that receive government contracts on the [TK](TK) site and about those same companies, or their executives, in the [Venezuelan legal system](TK). We put some of these ideas together in the final version of [CADIVI Abierta](TK), making it easier to search for related records right from the company listing. The PDF that makes up the listing is available on the CADIVI site [here](TK) or -- if that's not available -- on Github [here](TK).

* **Extracting the data:** The next step was to pull the data out of the PDF and into a more manipulation-friendly format. Given that this was a 153-page PDF, that was easier said than done. Historically, this might have required a Herculean effort, but today -- thanks to the work of TK and the others working on [Tabula](TK) -- it was as straightforward as highlighting the table in question and choosing "repeat area" and waiting for the process to finish. The end result was a 10,000+ row comma-separated values (CSV) file that we then uploaded to Google Spreadsheets. This was precisely the problem that Tabula was developed to address, and it did so with impressive accuracy. 

* **Cleaning the data:** 
As accurate as software like Tabula has become, it's inevitable that there will be artifacts of the conversion from PDF to CSV that need to be cleaned-up. This step, without question, required the most time and effort. Checking 10,000+ rows of data by eye was going to require more time than we had available, so we turned to a few data-cleaning tricks to make our spot-checking as accurate as possible. 

It's important to note that while working with the data we would make a new copy at every stage with a descriptive name, so we had a history of how we'd worked with the data. In hindsight, given that it was CSV-type data that we were working with, this could have just been done using Git & Github, thanks to [Github's CSV rendering capabilities](https://help.github.com/articles/rendering-csv-and-tsv-data), with clear commit messages.

The biggest cleaning challenges we had came from some difference in numerical formatting: the PDF in question uses periods a the thousands separator and commas to denote the decimal position (the opposite of what you come to expect working in Canada and the US). The formatting issues were cleaned by opening the document in [Open Office Calc](TK), which I generally find to be better at data cleaning than Excel on Windows or Numbers on Mac, and using its [Find & Replace with regular expressions](TK). Similar transformations could have been done in [Open Refine](TK), but I generally find Open Office faster for simple work.

* **Checking the data:** 
The next step after our clean-up attempt, given that we couldn't check the entire data set by eye, was to make an effort to check that the data was accurate still. To do that, we made use of [conditional statements in Google Spreadsheets](TK) as well as [conditional formatting](TK) to verify at minimum that each row still added up correctly. Rows that didn't add up were highlighted in red, making it easy to check those rows and make adjustments if necessary. You can see this technique at work in the Google Spreadsheet [here](https://docs.google.com/spreadsheet/ccc?key=0AgZzmiG9MvT4dFU5OGVsNWxOcEhESVpKXzhlM2oyVXc&usp=sharing) in column "S" called "Highlight Problems," and you'll note that a rounding error is the culprit for the remaining red rows.

The other issue was related to the extraction of the RIF (company ID) column from the PDF, where extraneous characters had slipped in from the extraction step. Again, knowing what format the RIF should take -- single letter followed by a hyphen followed by a string of nine digits -- these errors where quickly highlighted using the same approach and cleaned by hand.

At this point, we had  10,374 rows of clean data about how many requests companies in Venezuela had made to the government for US dollars, and how much they had received from through the currency control body. Now what? [A quick search for CADIVI on Twitter](TK) will illustrate just how contentious this system of currency control is, so it wasn't a stretch to believe that making it available online in a searchable and sortable format might help people to  better understand how it works, what companies are able to exchange Bolivars for dollars and so on.

* **Publishing the data**

Static site generator
DataTables
Bootstrap


