# Compare technical solution with business language

I was designing [the technical solution for the dynamic aggregate problem](https://strategy.upmooffices.io/decisions/0008-introduce-aggregate-api.html), it occurred to me that it’ll be useful if I can weigh the solutions more effectively by myself. Unfortunately I find it to be difficult when I contemplating the choice by myself. [[To write is to rubber duck]] is really helpful, but it wasn’t enough for me to weigh the choice.

It occurred to me that it was difficult because I couldn’t weight the values properly with technical language, for example like:
- The client side will be too smart
- Increased network latency
- We will hit 10KB payload limit

It strikes me that none of them really bring any thought on which of them are more important than others. So I thought I need to understand what’s the business implication of these, then I translated it to become:

- Increased development cost to support multiple devices
- Slower performance on our search experience
- We couldn’t support more than 100 active offices

It’s becoming really obvious now on how we want to prioritise the solution. Not supporting more than 100 active offices is a conversation that you can have with the business.

If they feel reluctant to limit the active offices, it’s quite obvious that we could sacrifice our performance a little now.

After all, architectural decisions is a business decision, and the business needs to understand what they’re trading off with.

<!-- {BearID:A367412E-F85C-4D54-8CF3-92BCEEDEA04D-9954-000042561D5F0F52} -->
