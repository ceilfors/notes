# Cloud Sandbox
Sandbox is an isolated environment where developers can safely test their code changes. The isolation protects the higher deployment environments, such the staging or production environment, to be affected by the code changes. A sandbox is also isolated only for a single developer, typically being setup in your local machine. Testing your code in a sandbox before pushing to the mainline is important, so that you can keep the mainline branch green (Continuous Integration).

Many applications are built on the cloud, leveraging many cloud services. Cloud services come in many flavours, one of which are the services that can’t be run locally. These services are normally not open sourced, and is fully managed by the cloud providers, like AWS S3, for example. As sandbox environments are typically being run locally, it’s difficult to create a sandbox when these services are not available locally.

How could you create a sandbox if you’re building a cloud based application then? There are two approaches:
1. Local sandbox: Replicate the cloud services locally
2. Cloud sandbox: Create your sandbox in the cloud

Replicating cloud services locally is expensive, but fortunately the open source community has put in a joint effort to create [localstack](https://github.com/localstack/localstack). Local sandbox is an attractive approach because of developers’ familiarity, as a sandbox environment would normally run locally. Local sandbox also an environment that you can control, and you’ll not have to spend an extra cost as you’ll be utilising your local machine’s compute power.

Even though you can replicate the cloud services locally, there are risks where the behaviour of these replicated services to not be the same with the cloud. These risks may reduce confidence in your test. The cloud providers are also moving rapidly, which means new features might not be replicated locally yet. This problem can be seen in the recently created issues in the [localstack](https://github.com/localstack/localstack/issues/2481) [issue](https://github.com/localstack/localstack/issues/2443#issue-621809232) [tracker](https://github.com/localstack/localstack/issues/2483)). 

By creating a cloud sandbox, the behaviour of your application will exactly be the same with the higher deployment environments. This inspires confidence in testing, as it’s guaranteed that your code change will work when you push to the mainline. You will also be able to leverage the new features from the cloud services.

Having an exactly like for like environment would also mean that it’s harder to mock the cloud services. How would you induce a failure in AWS S3, for example? A sandbox should be isolated for every developers, that means for every cloud sandbox that you provision, there’s an associated cost to that. If you normally work offline, this approach will also not work for you.

<!-- #evergreen #test -->

<!-- {BearID:4AAD3B15-BDCC-4A1D-8BF0-C0D5ADD3D00E-1211-000031C0B2B44D8B} -->
