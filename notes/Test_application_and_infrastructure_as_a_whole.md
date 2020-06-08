# Test application and infrastructure as a whole
The importance of testing the integration between your application and infrastructure should not be neglected when you’re developing a cloud application, especially on a serverless platform. When you’re using a cloud workflow service, like AWS Step Function for example, application logic will leak into your infrastructure — this is an IaC, not an application configuration, therefore it can’t be tested just from the application point of view.

[[Cloud sandbox]] allows you to test your application and infrastructure as a whole stack, altogether. That means, if there’s a system behaviour that you’d like to assert, you’ll be able to test it before you push changes to mainline.

Even though you can achieve a similar test coverage with [[Fake Sandbox]], there is a risk of “but it works on my machine” — where integration doesn’t work in the cloud. It’s difficult to fake the cloud services well because [[Can we fake unstable system?]]. This late integration issue introduces a slow feedback cycle as you’ll only discover problems further in your deployment pipeline.

## Backlinks
* [[§Serverless]]
	* [[Test application and infrastructure as a whole]]

<!-- #evergreen #infrastructure #serverless -->

<!-- {BearID:6CA52B63-B523-41DC-957D-706777A38B04-1543-00002B68F10AEFEE} -->
