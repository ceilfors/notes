# Cloud Sandbox necessitates Infrastructure as code
Many organisations today don’t apply enough rigour to their infrastructure automation. Big problems due to the lack of automation normally come too late. The solution to these problems is to introduce new practices like infrastructure as code. Unfortunately, new practices are usually slow to be adopted, because [[All changes require marginal adjustment]].

One of the principle from XP is if something is painful, we should do it more often, and bring the pain forward. It is, however, hard to apply this principle into infrastructure automation because it’s too easy to get away from the pain. When you’re developing a new product, for example, you can support the product development by provisioning just a couple of deployment environments, like staging and production. Since the number of deployment environments remain static, you can easily make a change manually and defer the need of infrastructure as code. Even though this can be sustainable for a long time, the problem is you would have formed a wrong organisational habit, and it’s big change when you realise the need for infrastructure as code.

[[Cloud Sandbox]] brings the pain of your infrastructure automation forward. Taking the example of a new product development again, the number of developers you have will scale faster than the number of deployment environments you have. It’s quite common for a team to have 4 - 6 developers, even when a product is not launched yet. Making infrastructure change manually to every sandboxes will be a pain. Cloud sandbox therefore necessitates infrastructure as code, and you should invest in infrastructure as code as early as possible.

With the cloud sandbox approach, your infrastructure as code will also be tested more often because every developers will have to create and update their own cloud sandboxes — [[Cloud Sandbox serves dual testing]]. As the infrastructure as code runs all the time, the code will also never rot. It brings confidence that infrastructure of code will work when you run it against the higher deployment environments.

---
## References
[Macro trends in the tech industry | May 2020 | ThoughtWorks](https://www.thoughtworks.com/insights/blog/macro-trends-tech-industry-may-2020)
> Today, we’re seeing many organizations get into trouble with their cloud migrations in part because they aren’t applying enough rigor to cloud infrastructure definitions, management and automation. 

[Continuous Integration - Continuous Delivery](https://continuousdelivery.com/foundations/continuous-integration/)
> The practice of continuous integration was invented to address these problems. CI (continuous integration) follows the XP (extreme programming) principle that if something is painful, we should do it more often, and bring the pain forward.

<!-- #evergreen #infrastructure #test**** -->

<!-- {BearID:05347D32-1E36-452B-89E6-7EC97846C762-1211-000031C0A9A55371} -->
