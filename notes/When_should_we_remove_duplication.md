# When should we remove duplication?
We should only DRY code when it's a knowledge duplication. Unfortunately, [[Code duplication can either be a knowledge duplication or similarities]]. It's hard to tell whether a duplication is a knowledge.

Defining what a coincidence or what a knowledge duplication is difficult. We can get philosophical and define knowledge in code, but it's not practical enough.

One angle we can use is [[DRY helps forgetting]]. Because the intention is so that we can forget, we can different duplication by what we should remember.

When you encounter a duplication, ask yourself: "When this changes, do you have to remember changing that too?"

If the answer is probably not, leave it, do not remove the duplication. If the answer is probably yes, DRY it.

<!-- #evergreen -->

<!-- {BearID:9BF0BC78-E5E8-4A6D-8CAF-FA2F7E8181B1-91861-000013F0BD24A77C} -->
