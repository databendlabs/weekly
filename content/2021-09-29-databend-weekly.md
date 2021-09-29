+++
title = "This week in Databend #9"
date = 2021-09-29
slug = "2021-09-29-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don’t want you to miss.

### Features

- **cluster management with namespace**  by [@zhang2014](https://github.com/zhang2014). ([#1731](https://github.com/datafuselabs/databend/pull/1731))
- **add toStartOfWeek** by [@dust1](https://github.com/dust1) ([#1848](https://github.com/datafuselabs/databend/pull/1942))
- **add interval functions add/subtract months, seconds etc.** by [@junli1026](https://github.com/junli1026) ([#1887](https://github.com/datafuselabs/databend/pull/1887))
- **support expr isNull and isNotNull** by [@zhyass](https://github.com/zhyass). ([#1947](https://github.com/datafuselabs/databend/pull/1947))

### Refactor

- **a series of refactorings around common-kv (kvlocal)** by [@drmingdrmer](https://github.com/drmingdrmer), like
    - **move local kv into standalone crate /kvlocal to break potential cyclic dependency** ([#1926](https://github.com/datafuselabs/databend/pull/1926))
    - **kv-local no longer depends on metasrv** ([#1960](https://github.com/datafuselabs/databend/pull/1960))
- **sync style Api Provider and KVApi** by [@dantengsky](https://github.com/dantengsky). ([#1939](https://github.com/datafuselabs/databend/pull/1939))
- **split store API into more fine-grained crates** by [@dantengsky](https://github.com/dantengsky). ([#1952](https://github.com/datafuselabs/databend/pull/1952))
- **move sled based store into a standalone crate** by [@drmingdrmer](https://github.com/drmingdrmer). ([#1953](https://github.com/datafuselabs/databend/pull/1953))

## Improvement

- **reduce 90% release & 70% debug binary size on linux toolchains**
    - **strip the binary size, x86_64-unknown-linux-gnu** by [@PsiACE](https://github.com/PsiACE). ([#1959](https://github.com/datafuselabs/databend/pull/1959))
    - **update docker and striped arm release, aarch64-unknown-linux-gnu** by [@ZhiHanZ](https://github.com/ZhiHanZ). ([#1969](https://github.com/datafuselabs/databend/pull/1969))
- **introduce the query/users for all the user operations in high level** by [@BohuTANG](https://github.com/BohuTANG). ([#1978](https://github.com/datafuselabs/databend/pull/1978))
- **make config clearer** by [@BohuTANG](https://github.com/BohuTANG).([#1989](https://github.com/datafuselabs/databend/pull/1989))
- **make date32 physical type to be int32** by [@sundy-li](https://github.com/sundy-li). ([#1990](https://github.com/datafuselabs/databend/pull/1990))

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.4.123-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.123-nightly)
- [v0.4.122-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.122-nightly)
- [v0.4.121-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.121-nightly)
- [v0.4.120-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.120-nightly)
- [v0.4.119-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.119-nightly)
- [v0.4.118-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.118-nightly)
- [v0.4.117-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.117-nightly)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://datafusecloud.slack.com/join/shared_invite/zt-nojrc9up-50IRla1Y1h56rqwCTkkDJA)
