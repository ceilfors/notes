# Designing software against a standard makes it more resilient to change
[[Software architecture is the hard to change part of the software]]. If there are things that can be made change less, that would be even better as the part that the probability of what's becoming hard to change will be even less.

When we design a REST API that returns a date, we have various options on how that date can be represented, but returning a string based on an ISO 8601 standard makes this part of the software to never change.
- - -
## References
[Martin Fowler on Twitter](https://twitter.com/martinfowler/status/1285644606726602754)
> One popular definition of architecture is "stuff that's hard to change". I'd argue that a good architect makes change easier - thus reducing architecture

<!-- #evergreen -->

<!-- {BearID:8E903CFF-3001-40AE-A788-214E08BFE8C5-5449-00000227AE8F5891} -->
