# Note-writing system

## Workflow
1. Process daily note todo list
2. Process untagged notes:
	1. The priority is to make to tag is as an evergreen note
	2. If the idea is not maturing yet, tidy up, and mark as a transient note for now
	3. Add at least one link, and object tag
3. Process interconnected notes into connection notes.
4. Process all above into outline notes.

## Building blocks

### Daily log
This is my dumping ground. Any notes that I take during the day will start here. It may or may not contain new ideas. 

Template:
```

Here is the content.
- [ ] really transient idea
```

### Transient note
Evergreen notes won’t emerge by itself. Transient note is meant to be a very frictionless way to create notes. Whenever there is a new idea that pops in my head, I will start by writing them as transient notes.

Transient notes generally will start without any tags so that it’ll be processed further in my workflow.

Template:
```

Here is the content.
```

### Evergreen note
Evergreen note is a processed transient note(s). It will evolve and overtime be updated. Keep the revision section as evergreen note will evolve over time.

```
# The Title

Here is the content.

---
## Revision
yyyy-mm-dd: ...
```

Even though the creation date of the note is useful, I couldn’t find a good way to include that in markdown file nicely. Using YAML front matter will be nice, but as I’ve decided that I’m [[2020-05-21 Going with Bear for Zettelkasten]], it doesn’t support YAML front matter. What I ended up relying on is the Bear stored creation date.

### Connection note
When you have many random notes and finally you can see how they are connected to each other, create a ([connection note](https://writingcooperative.com/zettelkasten-how-one-german-scholar-was-so-freakishly-productive-997e4e0ca125)).

```
# The Title

Here is the content.
```

### Outline note
Interlinks and sequence all other notes into a narrative. Typically this note will have many bullet points.
```
# §The Title

Here is the content.
```

I have no idea what § is for, it’s [practiced](https://notes.andymatuschak.org/zhmLXArqiCMDr9Q13ViqN3hh3SmrKzjQxWAr) by Andy Matuschak.

### References
It’s important to keep references, so follow this format.
```
...content...

---

## References

[Name of reference](link)
> quote from the reference
```

## Tagging
- Don’t use nested tags
- Tag the object, not topic

[The Difference Between Good and Bad Tags • Zettelkasten Method](https://zettelkasten.de/posts/object-tags-vs-topic-tags/)
> I try to come up with a similar problem in my programming notes. I learned a lot of Python in recent weeks, but it doesn’t make sense to put # Python anywhere I *talk about* the language. Or say I come up with an algorithm to illustrate something, and the algorithm is written in Python — I wouldn’t tag the note with # python at all, since it’s not a note *about* Python. When I compare code snippets in 5 different languages, I apply tags for all 5 languages, though.

> but I found this doesn’t scale. It creates the same problems like directory hierarchies, where topics come up in different contexts, like in # productivity/reading and  # hobby/reading, or # webdesign/layout and # print/layout. 

## Inspiration
This system has been inspired by these systems:
- Zettelkasten:
	- [Zettelkasten knowledge and info management • Zettelkasten Method](https://zettelkasten.de/)
	- [Zettelkasten — How One German Scholar Was So Freakishly Productive](https://writingcooperative.com/zettelkasten-how-one-german-scholar-was-so-freakishly-productive-997e4e0ca125)
- Evergreen notes: [About these notes](https://notes.andymatuschak.org/About_these_notes)
- Bliki: [WhatIsaBliki](https://www.martinfowler.com/bliki/WhatIsaBliki.html)

Initially, the system started as an attempt for copy the Zettelkasten method ([[2020-05-20 Discovering Zettelkasten]]), until I realise that [Andy Matuschak’s evergreen note is different to Zettelkasten](https://notes.andymatuschak.org/z4AX7pHAu5uUfmrq4K4zig9x8jmmF62XgaMXm):
> the primary purpose of my system is to develop ideas in my core creative projects. Most people in the contemporary Zettelkasten culture seem to use their systems primarily to write notes about others’ ideas. If they’re developing their own ideas with them, those ideas are an interesting hobby, not their core creative work.

## Backlinks
* [[To write is to rubber duck]]
	* I was presented with an architectural problem, and couldn’t really think clearly on what my options are. As I’m experimenting with my [[Note-writing system]], I started to pour down my thoughts into my daily log. To my surprise, after writing for roughly 1 hour, I progressed really well and got down into a solution. This revelation reminds me of the experience that I got from rubber ducking debugging.

<!-- {BearID:CAB21B59-A446-4221-B9EC-3B674F3AF2EC-5962-00000FA1AC26E170} -->
