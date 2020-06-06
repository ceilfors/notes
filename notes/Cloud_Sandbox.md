# Cloud Sandbox
Sandbox is an isolated environment where developers can safely test their code changes. The isolation protects the higher deployment environments, such the staging or production environment, to be affected by the code changes. A sandbox is also isolated only for a single developer, typically being setup in your local machine. Testing your code in a sandbox before pushing to the mainline is important, so that you can keep the mainline branch green (Continuous Integration).

Many applications are built on the cloud, leveraging many cloud services. As sandbox environments are typically being created in developers’ local machine, it’s difficult to create a sandbox when these cloud services are not available locally (serverless platform). These cloud services are not open sourced, and are fully managed by the cloud providers, like AWS S3, for example. You can’t run AWS S3 locally.

How could you create a sandbox if you’re building a cloud-based application then? There are two approaches:
1. Fake sandbox: Create fake cloud services locally
2. Cloud sandbox: Create your sandbox in the cloud

Fake sandbox is an attractive approach because of developers’ familiarity — a sandbox would normally run locally. Faking cloud services locally is expensive, but fortunately the open source community has put a joint effort to create [localstack](https://github.com/localstack/localstack). Fake sandbox is also an environment that you can control, and you’ll not have to pay the cloud as you’ll be utilising your local machine’s compute power.

Even though you can fake the cloud services locally, there are risks where the behaviour of these fake services to not be the same with the cloud, which will reduce confidence in your test. The biggest problem though is how the cloud providers are moving rapidly, and [[You can’t fake unstable system]].

By creating a cloud sandbox on the other hand, the behaviour of your application will exactly be the same with the higher deployment environments. This inspires confidence in testing, as it’s guaranteed that your code change will work when you push to the mainline. You will also be able to leverage the new features from the cloud services.

Having an exactly like for like environment would also mean that it’s harder to mock the cloud services. How would you induce a failure in AWS S3, for example? A sandbox should be isolated for every developers, that means for every cloud sandbox that you provision, there’s an associated cost to that. If you’re working with cloud services that require slow provisioning, the creation of the sandbox will be slow. If you normally work offline, this approach will also not work for you.

---
## References
[Mocks Aren’t Stubs](https://martinfowler.com/articles/mocksArentStubs.html)
> **Fake** objects actually have working implementations, but usually take some shortcut which makes them not suitable for production (an  [in memory database](https://martinfowler.com/bliki/InMemoryTestDatabase.html)  is a good example).

## Backlinks
* [[Cloud Sandbox necessitates Infrastructure as code]]
	* [[Cloud Sandbox]] brings the pain of your infrastructure automation forward. Taking the example of a new product development again, the number of developers you have will scale faster than the number of deployment environments you have. It’s quite common for a team to have 4 - 6 developers, even when a product is not launched yet. Making infrastructure change manually to every sandboxes will be a pain. Cloud sandbox therefore necessitates infrastructure as code, and you should invest in IaC as early as possible.
* [[§Serverless]]
	* [[Cloud Sandbox]]

<!-- #evergreen #test -->

<!-- {BearID:4AAD3B15-BDCC-4A1D-8BF0-C0D5ADD3D00E-1211-000031C0B2B44D8B} -->
