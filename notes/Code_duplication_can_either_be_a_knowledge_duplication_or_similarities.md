# Code duplication can either be a knowledge duplication or similarities
- - -
## References
[[The Pragmatic Programmer]] (p. 34).
> During code review, the resident know-it-all bounces this code, claiming it's a DRY violation: both function bodies are the same.
> They are wrong, The code is the same, but the knowledge they represent is different. The two functions validate two separate things that just happen to have the same rules. That's a coincidence, not a duplication.

[Damian Plaza DM Twitter exchange](https://twitter.com/raimeyuu)
BEGIN:
I can imagine a scenario where we have two contexts: archiving pdf documents and archiving personal information.

There is a need to get both the latest archived doc and the latest archived info. Initially, we might have the same logic: sort by date, and pick the first/last (depending on the sorting way).

It seems similar, or even identical. So we decide to go with DRY to not duplicate the logic (code duplication) - we provide a single function/class to cover that logic.

At some point in time, there's a new requirement saying that documents are considered the latest archived not only by when it was requested to be put into the archive but also when a responsible employee signed accepted archiving.

It might be tempting to modify the existing function to not duplicate code by adding some parameter. We risk tomatoes being thrown into our direction and we split the function into two: one for archiving pdf documents and one for archiving personal information.

Again, requirements change and there is a new type of document to archive - scanned png images. We are very cautious from our past experience so we decide to separate logic for getting archived documents: one for pdfs and one for pngs (knowledge duplication).
END.

## Backlinks
* [[DRY misconceptions]]
	* [[Code duplication can either be a knowledge duplication or similarities]]
* [[When should we remove duplication?]]
	* We should only DRY code when it's a knowledge duplication. Unfortunately, [[Code duplication can either be a knowledge duplication or similarities]]. It's hard to tell whether a duplication is a knowledge.

<!-- #evergreen -->

<!-- {BearID:AB818607-35F5-4C3A-A76E-0B3DF46935AB-91861-0000126DC92AF69F} -->
