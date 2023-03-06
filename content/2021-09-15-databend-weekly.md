+++
title = "This week in Databend #7"
date = 2021-09-15
slug = "2021-09-15-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don’t want you to miss.

### Refactor

- **rename datafuse to databend** by [Databend Authors](mailto:opensource@datafuselabs.com)
- **refactor datasources** by [@BohuTANG](https://github.com/BohuTANG). ([#1808](https://github.com/datafuselabs/databend/pull/1808), [#1813](https://github.com/datafuselabs/databend/pull/1813), [#1817](https://github.com/datafuselabs/databend/pull/1817) etc.)
- **refactor and add mTLS client auth for http service** by [@ZhiHanZ](https://github.com/ZhiHanZ) ([#1771](https://github.com/datafuselabs/databend/pull/1771))

### Features

- **add LocalKVStore: a KVApi impl backed with a sled tree** by [@drmingdrmer](https://github.com/drmingdrmer). ([#1754](https://github.com/datafuselabs/databend/pull/1754))
- **initial work for saving table meta in obj storage** by [@dantengsky](https://github.com/dantengsky). ([#1694](https://github.com/datafuselabs/databend/pull/1694))
- **add Interval support** by [@junli1026](https://github.com/junli1026) ([#1752](https://github.com/datafuselabs/databend/pull/1752))
- **add toStartOfYear,toStartOfISOYear** by [@dust1](https://github.com/dust1) ([#1826](https://github.com/datafuselabs/databend/pull/1826))
- **add toYYYYMMDDhhmmss** by [@ygf11](https://github.com/ygf11) ([#1767](https://github.com/datafuselabs/databend/pull/1767))
- **add a basic credits table** by [@PsiACE](https://github.com/PsiACE) ([#1778](https://github.com/datafuselabs/databend/pull/1778))

### Bug fixes

- **fix count function with not null column**  by [@zhang2014](https://github.com/zhang2014). ([#1794](https://github.com/datafuselabs/databend/pull/1794))
- **fix insert remote table of parquet format with DateTime types** by [@sundy-li](https://github.com/sundy-li). ([#1765](https://github.com/datafuselabs/databend/pull/1765))
- **fix unary arithmetics function err fix unary arithmetics function err** by [@zhyass](https://github.com/zhyass). ([#1842](https://github.com/datafuselabs/databend/pull/1842))

### RFCs

- **RFC: New SQL planner framework** by [@leiysky](https://github.com/leiysky). ([#1837](https://github.com/datafuselabs/databend/pull/1837)


## Changelogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.4.109-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.109-nightly)
- [v0.4.108-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.108-nightly)
- [v0.4.107-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.107-nightly)
- [v0.4.106-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.106-nightly)
- [v0.4.105-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.105-nightly)
- [v0.4.104-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.104-nightly)
- [v0.4.103-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.103-nightly)

## Ecosystem/Upstream

From open source, for open source. Our team is also committed to contributing to the Rust ecosystem and upstream dependencies.

- [cargo-license #49: bump deps](https://github.com/onur/cargo-license/pull/49) by [@PsiACE](https://github.com/PsiACE/)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
