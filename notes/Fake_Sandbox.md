# Fake Sandbox
Fake sandbox is an approach of creating a [[Sandbox Environment]] that fakes all of your application external dependencies. The fake external dependencies you create are usually not suitable for production use as they are designed lightweight to be used on a local machine.

This approach comes with the risk of “but it works on my machine” — where the fake external dependency might behave differently when it’s put in production. It’s a good practice to test your application on a production-like environment, therefore if your production is using MySQL for example, you should use MySQL in your sandbox.

---
## References
[Mocks Aren’t Stubs](https://martinfowler.com/articles/mocksArentStubs.html)
> Fake objects actually have working implementations, but usually take some shortcut which makes them not suitable for production (an  [in memory database](https://martinfowler.com/bliki/InMemoryTestDatabase.html)  is a good example).

## Backlinks
* [[How might we create a sandbox for a cloud application?]]
	* [[Fake Sandbox]]: Create fake cloud services locally
* [[Prefer Cloud Sandbox for serverless architecture]]
	* [[Fake Sandbox]] and [[Cloud Sandbox]] comes with their own advantages and disadvantages ([[How might we create a sandbox for a cloud application?]]. It is difficult to choose an option when there’s no context is given. Given a context that you are building serverless architecture, you should default to the cloud sandbox approach. All of the downsides of cloud sandbox are invalid when you’re building serverless architecture.
* [[Test application and infrastructure as a whole]]
	* Even though you can achieve a similar test coverage with [[Fake Sandbox]], there is a risk of “but it works on my machine” — where integration doesn’t work in the cloud. It’s difficult to fake the cloud services well because [[You can’t fake unstable system]]. This late integration issue introduces a slow feedback cycle as you’ll only discover problems further in your deployment pipeline.
* [[§Serverless]]
	* [[Fake Sandbox]]

<!-- #evergreen #test -->

<!-- {BearID:CD1514C4-4645-4415-A07B-1F0A08D2645F-1543-0000965594DD9AFF} -->
