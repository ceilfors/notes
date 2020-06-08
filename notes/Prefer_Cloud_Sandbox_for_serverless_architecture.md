# Prefer Cloud Sandbox for serverless architecture
[[Fake Sandbox]] and [[Cloud Sandbox]] comes with their own advantages and disadvantages ([[How might we create a sandbox for a cloud application?]]). It is difficult to choose an option when there’s no context is given. Given a context that you are building serverless architecture, you should default to the cloud sandbox approach. All of the downsides of cloud sandbox are invalid when you’re building serverless architecture.

Here are the downsides of cloud sandbox:
1. Slow sandbox creation given heavy cloud resources
2. High cloud spending given pay per hour model
3. You can’t create the sandbox given no internet connection
4. It’s impossible to induce failure given the services are not fake

When you’re building serverless application, you wouldn’t use heavy cloud resources like Amazon EC2 or Amazon RDS. These resources are the ones that are slow to be provisioned. Provisioning AWS Lambda or AWS S3 though, is really quick. The slowness I tend to see is when you create your cloud sandbox for the first time, subsequent update will be faster as you’d only deploy changes. Downside 1 therefore is not valid for serverless architecture.

High cloud spending tend to come to resources with pay per hour model, like Amazon EC2 or Amazon RDS. When you are using pay per use services like AWS Lambda though, you tend to pay almost nothing. The services that you’d use on serverless architecture are mostly pay per use services, therefore downside 2 is invalid for serverless architecture.

Not having an internet connection is quite a rare use case in my opinion. Unless this is a deal breaker for you, I’d render downside 3 as invalid 

Even though it’s impossible to induce failures when you’re using a real service, [it is possible to do them via code](https://blog.thundra.io/chaos-engineering-with-serverless). As most of the operational complexity of your service is offloaded to the cloud, the need for you to induce failures is also reduced. It is no longer necessary to randomly kill your machines as they will be fully managed by a service like AWS Lambda, for example. For that reason, downside 4 is invalid. Even though it’s possible to inject failures from code, I’d still argue that [[Testing should be the first-class citizen in the cloud]].

---
## References
[Why you should use temporary stacks when you do serverless | theburningmonk.com](https://theburningmonk.com/2019/09/why-you-should-use-temporary-stacks-when-you-do-serverless/)
> Instead of spending lots of time to get tools such as  [localstack](https://github.com/localstack/localstack)  working, I find it much more productive to deploy a temporary CloudFormation stack in AWS and run against the real thing.

[Chaos Engineering with Serverless](https://blog.thundra.io/chaos-engineering-with-serverless)
> Implementing a Latency Monkey in your system is, at its core, a straightforward addition of an artificial delay to your running code. The very center of any Latency Monkey will be some variation on a sleep command. The key to getting an effective measurement from your system’s failure state is to implement “controllable chaos.”

## Backlinks
* [[§Serverless]]
	* [[Prefer Cloud Sandbox for serverless architecture]]

<!-- #evergreen #serverless -->

<!-- {BearID:1374B04D-C21E-486D-9B20-03889611E49C-1211-000038A2F36A3B17} -->
