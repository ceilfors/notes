# Cloud sandbox
Cloud sandbox is an approach of creating a [[Sandbox environment]] in the cloud. This approach can be seen as unconventional as a sandbox is normally running in developers’ local machine. In order for you to test your application, you would have to deploy your changes to the cloud, and run your tests against the cloud.

## Backlinks
* [[How might we create a sandbox for a cloud application?]]
	* [[Cloud sandbox]]: Create your sandbox in the cloud
* [[Cloud sandbox necessitates Infrastructure as code]]
	* [[Cloud sandbox]] brings the pain of your infrastructure automation forward. Taking the example of a new product development again, the number of developers you have will scale faster than the number of deployment environments you have. It’s quite common for a team to have 4 - 6 developers, even when a product is not launched yet. Making infrastructure change manually to every sandboxes will be a pain. Cloud sandbox therefore necessitates infrastructure as code, and you should invest in IaC as early as possible.
* [[Prefer cloud sandbox for serverless architecture]]
	* [[Fake sandbox]] and [[Cloud sandbox]] comes with their own advantages and disadvantages ([[How might we create a sandbox for a cloud application?]]). It is difficult to choose an option when there’s no context is given. Given a context that you are building serverless architecture, you should default to the cloud sandbox approach. All of the downsides of cloud sandbox are invalid when you’re building serverless architecture.
* [[Test application and infrastructure as a whole]]
	* [[Cloud sandbox]] allows you to test your application and infrastructure as a whole stack, altogether. That means, if there’s a system behaviour that you’d like to assert, you’ll be able to test it before you push changes to mainline.
* [[§Serverless]]
	* [[Cloud sandbox]]

<!-- #evergreen #test -->

<!-- {BearID:4AAD3B15-BDCC-4A1D-8BF0-C0D5ADD3D00E-1211-000031C0B2B44D8B} -->
