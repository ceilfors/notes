# Use emoji to retain meaning in compressed object
When you’re storing objects in a document-oriented database, the attributes of your object count towards your document size. The increase of your payload size will have performance impacts to your query, and you may also hit the technical limit imposed by the database.

> I was working with a university customer, I think 80% of the data they had in their system was attribute names and 64 terabytes data — Rick Houlihan

There are various way of compressing your object, but emoji will retain the meaning of your attributes. For example if you have an object of:
```
{ “capacity”: 1, “pricePerDesk”: 500 }
```

You can compress the object with emoji into:
```
{ “👨‍💼”: 1, “🪑”: 500 }
```

Now, compare this with:
```
{ “c”: 1, “p”: 500 }
```

Not only the object is more readable when you are browsing through your database, but all of the database features should still work.

I personally still wouldn’t use this as a first class object in my code, so if you want to experiment with this idea, do it in your data transfer objects.

---
## References
[Episode 34: Advanced NoSQL Data Modeling in DynamoDB with Rick Houlihan (Part 1) - Serverless Chats Podcast](https://www.serverlesschats.com/34/)
> Rick: As a matter of fact, one of my favorite stories is from my days at MongoDB, I was working with a university customer, I think 80% of the data they had in their system was attribute names and 64 terabytes data.

<!-- #evergreen #optimisation #nosql -->

<!-- {BearID:3877FC4E-01CF-4462-BC56-BF4A4135803E-1211-000031C0B444E455} -->
