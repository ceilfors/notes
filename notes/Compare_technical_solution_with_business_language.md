# Compare technical solution with business language

I was designing [a technical solution](https://strategy.upmooffices.io/decisions/0008-introduce-aggregate-api.html), and I couldn’t weigh the options effectively by myself. [[To write is to rubber duck]] is really helpful, but it wasn’t enough for me to weigh the options I have come up with. Normally in this situation, I would grab my colleague and start to brainstorm.

It then occurred to me that I couldn’t weight the options properly because I have written the comparison with technical language:
1. The client side will be too smart
2. Increased network latency
3. We will hit 10KB payload limit

These sentences describe technical problems well, but they didn’t really describe the impact of the problem. You can’t compare technical problems without business context. With this realisation, I translated the technical problems above in business language:

1. Increased development cost to support multiple devices
2. Slower performance on our search experience
3. We can’t support more than 100 active offices

It’s becoming quite obvious now on how I can weigh my options. Writing them in business language also turns the options into business decisions. Most architectural problems are business problems. It’s quite apparent that Option 3 is a business limiting decision, and it’s a decision that you should make with the business.

<!-- {BearID:A367412E-F85C-4D54-8CF3-92BCEEDEA04D-9954-000042561D5F0F52} -->
