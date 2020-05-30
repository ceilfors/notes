# My note writing system
<!-- #evergreen #writing -->
2020-05-20

This system has been inspired by these systems:
- Zettelkasten: [Zettelkasten knowledge and info management • Zettelkasten Method](https://zettelkasten.de/) and [Zettelkasten — How One German Scholar Was So Freakishly Productive](https://writingcooperative.com/zettelkasten-how-one-german-scholar-was-so-freakishly-productive-997e4e0ca125)
- Evergreen notes: [About these notes](https://notes.andymatuschak.org/About_these_notes)
- Bliki: [WhatIsaBliki](https://www.martinfowler.com/bliki/WhatIsaBliki.html)

Initially, the system started as an attempt for copy the Zettelkasten method, until I realise that what [Andy Matuschak’s evergreen note is different to Zettelkasten](https://notes.andymatuschak.org/z4AX7pHAu5uUfmrq4K4zig9x8jmmF62XgaMXm):

> the primary purpose of my system is to develop ideas in my core creative projects. Most people in the contemporary Zettelkasten culture seem to use their systems primarily to write notes about others’ ideas. If they’re developing their own ideas with them, those ideas are an interesting hobby, not their core creative work.

## Workflow
1. Process daily note todo list
2. Process untagged notes:
	1. The priority is to make to tag is as an evergreen note
	2. If the idea is not maturing yet, mark as a transient note for now
	3. Add at least one link
3. Process interconnected notes into connection notes.
4. Process all above into outline notes.

## Tagging
- Don’t use nested tags
- Tag the object, not topic

[The Difference Between Good and Bad Tags • Zettelkasten Method](https://zettelkasten.de/posts/object-tags-vs-topic-tags/)
> I try to come up with a similar problem in my programming notes. I learned a lot of Python in recent weeks, but it doesn’t make sense to put # Python anywhere I *talk about* the language. Or say I come up with an algorithm to illustrate something, and the algorithm is written in Python — I wouldn’t tag the note with # python at all, since it’s not a note *about* Python. When I compare code snippets in 5 different languages, I apply tags for all 5 languages, though.

> but I found this doesn’t scale. It creates the same problems like directory hierarchies, where topics come up in different contexts, like in “
> # productivity/reading” and  # hobby/reading, or # webdesign/layout and # print/layout. 

## Building blocks

### Constrained by Bear
I’ve decided that I’m [[2020-05-21 Going with Bear for Zettelkasten]]. Therefore there are constraints that are set by Bear. These constraints are good as it restricts my template convention to pure Markdown file.

These are some of the convention that I was looking into but are not supported by Bear:
- YAML frontmatter
- Dated filename: Therefore transient notes title must be dated.

### Daily log
This is my dumping ground. May or may not contain ideas.

Template:
```
<!-- #yyyy-mm-dd -->
<!-- #daily -->

Here is the content.
- [ ] really transient idea
```

### Transient note
Evergreen notes won’t emerge by itself. Transient note is meant to be a very frictionless way to create notes. Whenever there is a new idea that pops in your head, you should start by writing them as transient notes.

Transient notes generally will start without any tags so that it’ll be processed further in our workflow.

```
<!-- #yyyy-mm-dd The Title -->
<!-- #transient #tag1 #tag2 -->

Here is the content.
```

### Evergreen note
Evergreen note is a processed transient note(s). It will evolve and overtime be updated. It’s important to keep the revision section as evergreen note will evolve over time.

```
# The Title
<!-- #evergreen #tag1 #tag2 -->
yyyy-mm-dd

Here is the content.

---
## Revision
yyyy-mm-dd: ...
```

### Connection note
When you have many random notes and finally you can see how they are connected to each other, create a ([connection note](https://writingcooperative.com/zettelkasten-how-one-german-scholar-was-so-freakishly-productive-997e4e0ca125)).

```
# The Title
<!-- #evergreen #connection #tag1 #tag2 -->

Here is the content.
```

### Outline note
Interlinks and sequence all other notes into a narrative. This note can grow and is not dated.
```
# §The Title
<!-- #outline #tag1 #tag2 -->

Here is the content.
```

I have no idea what § is for, it’s [practiced](https://notes.andymatuschak.org/zhmLXArqiCMDr9Q13ViqN3hh3SmrKzjQxWAr) by Andy Matuschak.

### References
```
...content...

---

## References

[Name of reference](link)
> quote from the reference
```

<!-- {BearID:CAB21B59-A446-4221-B9EC-3B674F3AF2EC-5962-00000FA1AC26E170} -->
