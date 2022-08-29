#### 11.1 Warming up

- The following tools are examples of tools that can be used in a CI setup for Python. The first step, linting, can be performed with tools called _flake8_ or _Pylama_. The second step, testing, can be done using programs called _PyUnit_ and _PyTest_. The third and final step discussed, building, is not required in Python, since it is an interpreted language.

- Some alternative CI setup tools besides _Jenkins_ are _GitLab_, _AWS CodePipeline_, _Travis CI_, _CircleCI_, _TeamCity_, and _Bamboo_.

- In my opinion, there is not a simple answer that which is better in this use case, a self-hosted or a cloud-based environment. A team of 6 people actively developing an application could be relatively small so time can't be wasted. This point suggests that a cloud-based environment could be better since all you need to do is to tell the program what to do. Also, the configuration process of a cloud-based solution can be a little simpler. On the other hand, if you need to do something more special or for example the build process of your application is slow, using a self-hosted environment might be the better solution, since a self-hosted environment can be harder to configure, but at least you have the freedom to choose the hardware used in it.
