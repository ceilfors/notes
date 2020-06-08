# How might we create a sandbox for a cloud application?
Cloud applications are built on the cloud, leveraging many cloud services. A [[Sandbox Environment]] is typically being created in developers’ local machine, hence it’s difficult to create a sandbox when these cloud services are not available locally. These cloud services are not open sourced, and are fully managed by the cloud providers, like AWS S3, for example. You can’t run AWS S3 locally.

How could you create a sandbox if you’re building a cloud-based application then? There are two approaches:
1. [[Fake Sandbox]]: Create fake cloud services locally
2. [[Cloud Sandbox]]: Create your sandbox in the cloud

Fake sandbox is an attractive approach because of developers’ familiarity — a sandbox would normally run locally. Faking cloud services locally is expensive, but fortunately the open source community has put a joint effort to create [localstack](https://github.com/localstack/localstack). Fake sandbox is also an environment that you can control, and you’ll not have to pay the cloud as you’ll be utilising your local machine’s compute power.

Even though you can fake the cloud services locally, there are risks where the behaviour of these fake services to not be the same with the cloud, which will reduce confidence in your test. The biggest problem though is how the cloud providers are moving rapidly, and [[You can’t fake unstable system]].

By creating a cloud sandbox on the other hand, the behaviour of your application will exactly be the same with the higher deployment environments. This inspires confidence in testing, as it’s guaranteed that your code change will work when you push to the mainline. You will also be able to leverage the new features from the cloud services.

Having an exactly like for like environment would also mean that it’s harder to mock the cloud services. How would you induce a failure in AWS S3, for example? A sandbox should be isolated for every developers, that means for every cloud sandbox that you provision, there’s an associated cost to that. If you’re working with cloud services that require slow provisioning, the creation of the sandbox will be slow. If you normally work offline, this approach will also not work for you.

## Backlinks
* [[Prefer Cloud Sandbox for serverless architecture]]
	* [[Fake Sandbox]] and [[Cloud Sandbox]] comes with their own advantages and disadvantages ([[How might we create a sandbox for a cloud application?]]. It is difficult to choose an option when there’s no context is given. Given a context that you are building serverless architecture, you should default to the cloud sandbox approach. All of the downsides of cloud sandbox are invalid when you’re building serverless architecture.
* [[§Serverless]]
	* [[How might we create a sandbox for a cloud application?]]

<!-- #evergreen #test #cloud -->

<!-- {BearID:0CF2C2B8-C516-4A35-AD3B-F003C4E30D77-1543-0000AC4844754E37} -->
