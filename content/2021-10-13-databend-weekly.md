+++
title = "This week in Databend #11"
date = 2021-10-13
slug = "2021-10-13-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don’t want you to miss.

### Features

- **new features for cli** by [@ZhiHanZ](https://github.com/ZhiHanZ), like
    - **local profile for meta service bootstrap** ([#1981](https://github.com/datafuselabs/databend/pull/1981))
    - **auto complete scripts** ([#2171](https://github.com/datafuselabs/databend/pull/2171))
- **add aggregate covariance functions** by [@junli1026](https://github.com/junli1026) ([#2042](https://github.com/datafuselabs/databend/pull/2042))
- **cast functions between String and Date16/Date32/DateTime32** by [@sundy-li](https://github.com/sundy-li). ([#2075](https://github.com/datafuselabs/databend/pull/2075))

## Improvement

- **support remove constant conditions** by [@zhyass](https://github.com/zhyass). ([#2177](https://github.com/datafuselabs/databend/pull/2177))
- **add filter block to data_blocks kernels** by [@zhang2014](https://github.com/zhang2014). ([#2114](https://github.com/datafuselabs/databend/pull/2114))
- **impl table with embedded TableInfo** by [@drmingdrmer](https://github.com/drmingdrmer) ([#2178](https://github.com/datafuselabs/databend/pull/2178))
- **use TableIOContext as argument instead of DatabendQueryContext** by [@drmingdrmer](https://github.com/drmingdrmer) ([#2111](https://github.com/datafuselabs/databend/pull/2111))
- **col encoding mapping & stats accumulator** by [@dantengsky](https://github.com/dantengsky). ([#2159](https://github.com/datafuselabs/databend/pull/2159))
- **window funnel support date and datetime** by [@b41sh](https://github.com/b41sh). ([#2094](https://github.com/datafuselabs/databend/pull/2094))

### Bug fixes

- **fix namespace failure when restart query** by [@zhang2014](https://github.com/zhang2014). ([#2108](https://github.com/datafuselabs/databend/pull/2108)) 

## Changelogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.4.136-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.136-nightly)
- [v0.4.135-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.135-nightly)
- [v0.4.134-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.134-nightly)
- [v0.4.133-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.133-nightly)
- [v0.4.132-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.132-nightly)
- [v0.4.131-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.131-nightly)
- [v0.4.130-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.130-nightly)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
