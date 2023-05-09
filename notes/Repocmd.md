# Repocmd
I started my programming career back in 2009. I worked for Experian, and we were building a bespoke system that's been architected without an API to create a new data set. To create a new data set, more than 100 of us developers will have to go through a fairly convoluted UI, click around for some time, then we only we'll be ready to start our development.

Having endured this pain for a while, I started to question what I was doing. Why couldn't I just "write" the data I need directly to the database? That would have saved us a lot of time, so I thought.

I began investigating how I could achieve this. I ruled out the option to write directly to the database as there are important business logic that I can't bypass. Therefore the only way was to figure out how our UI was talking to the server (this sounds easy in the modern world, trust me, it's not as simple as you'd think). This led me to a painful journey of understanding how the entire integration works. This could have taken me more than a week.

With my newfound knowledge (I mean loophole), I know what kind of communication method I could make now to create a new data. I've decided to write a simple CLI that hacks around all this and create a simple test data, and it works!

Excitement were in my blood. I quickly drafted an email titled "Save 30mins/day with this tool I made!". I would have thought that everyone would be joyful when I launched this, until I received the first response I got back from a senior QA analyst: "All developers who's been using repocmd locally won't pass quality checks!".

I couldn't recall what exactly went through my head at that point, but I clearly ignored that QA analyst and continue improving the CLI. Not being the same country helps. But most importantly, I [[Ask for forgiveness, not permission]], even when I didn't know about this principle back then.

Three more releases were made, where I subsequently sent emails  titled "Save 45 mins/day", "Save 1h/day", and when finally "Save 1.5h/day" went out, I didn't have to go through any of the UI everyday to create data anymore.

Being a rebellious youth, I thought I have gone out too far at that time. But something amazing happened after.

First, my manager nominated me, and I won an award for this time-saving CLI. I thought everyone hated me. Second, after a few months (or years?), there was a big push on an initiative to further automate our system setup. Guess what? They couldn't have made it without repocmd, it lives on as the core part of the automation.

<!-- #evergreen -->

<!-- {BearID:11EBC5CC-6733-4B26-A6CC-4EBAB914FE4B-91861-0000122AFDCF8BC2} -->
