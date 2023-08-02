# Sandbox environment
Sandbox is an isolated environment where developers can safely test their code changes. The isolation protects the higher deployment environments, such the staging or production environment, to be affected by the code changes. A sandbox is also isolated only for a single developer, typically being setup in your local machine. Testing your code in a sandbox before pushing to the mainline is important, so that you can keep the mainline branch green (Continuous Integration).

- - -
## References
[Sandbox (software development) - Wikipedia](https://en.wikipedia.org/wiki/Sandbox_%28software_development%29)
> Sandboxing protects “live” servers and their data

## Backlinks
* [[Cloud sandbox]]
	* Cloud sandbox is an approach of creating a [[Sandbox environment]] in the cloud. This approach can be seen as unconventional as a sandbox is normally running in developers’ local machine. In order for you to test your application, you would have to deploy your changes to the cloud, and run your tests against the cloud.
* [[Fake sandbox]]
	* Fake sandbox is an approach of creating a [[Sandbox environment]] that fakes all of your application external dependencies. The fake external dependencies you create are usually not suitable for production use as they are designed lightweight to be used on a local machine.
* [[How might we create a sandbox for a cloud application?]]
	* Cloud applications are built on the cloud, leveraging many cloud services. A [[Sandbox environment]] is typically being created in developers’ local machine, hence it’s difficult to create a sandbox when these cloud services are not available locally. These cloud services are not open sourced, and are fully managed by the cloud providers, like AWS S3, for example. You can’t run AWS S3 locally.

<!-- #evergreen #test -->

<!-- {BearID:E72658B0-B672-4A1A-8C98-BF66059F0098-1543-0000ABFD39B14645} -->
