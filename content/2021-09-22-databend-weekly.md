+++
title = "This week in Databend #8"
date = 2021-09-22
slug = "2021-09-22-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don’t want you to miss.

### Features

- **add local status management for cli** by [@ZhiHanZ](https://github.com/ZhiHanZ) ([#1892](https://github.com/datafuselabs/databend/pull/1892))
- **add mysql_native_password (double sha1) auth support** by [@sundy-li](https://github.com/sundy-li). ([#1840](https://github.com/datafuselabs/databend/pull/1840))
- **add arithmetic support for interval type** by [@junli1026](https://github.com/junli1026) ([#1809](https://github.com/datafuselabs/databend/pull/1809))
- **add toStartOfQuarter, toStartOfMonth** by [@dust1](https://github.com/dust1) ([#1848](https://github.com/datafuselabs/databend/pull/1848))

### Refactor

- **split metasrv and store** by [@drmingdrmer](https://github.com/drmingdrmer). ([#1879](https://github.com/datafuselabs/databend/pull/1879))
- **a series of refactorings around metasrv** by [@drmingdrmer](https://github.com/drmingdrmer), like
    - **extract state machine into dir metasrv/raft/state_machine** ([#1910](https://github.com/datafuselabs/databend/pull/1910))
    - **remove unused meta API: db, table etc.** ([#1914](https://github.com/datafuselabs/databend/pull/1914))


## Improvement

- **add Table/Database engine providers and registries** by [@dantengsky](https://github.com/dantengsky). ([#1819](https://github.com/datafuselabs/databend/pull/1819))
- **store client factory** by [@dantengsky](https://github.com/dantengsky). ([#1869](https://github.com/datafuselabs/databend/pull/1869))

### Bug fixes

- **fix protocol seq in AuthSwitchRequest** by [@sundy-li](https://github.com/sundy-li). ([#1890](https://github.com/datafuselabs/databend/pull/1890))
- **fix get_sled_db() should not panic while holding a lock** by [@drmingdrmer](https://github.com/drmingdrmer). ([#1918](https://github.com/datafuselabs/databend/pull/1918))

## Changelogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.4.116-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.116-nightly)
- [v0.4.115-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.115-nightly)
- [v0.4.114-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.114-nightly)
- [v0.4.113-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.113-nightly)
- [v0.4.112-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.112-nightly)
- [v0.4.111-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.111-nightly)
- [v0.4.110-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.110-nightly)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)