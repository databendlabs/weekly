+++
title = "This week in Databend #10"
date = 2021-10-06
slug = "2021-10-06-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don’t want you to miss.

### Features

- **add running difference function** by [@ygf11](https://github.com/ygf11) ([#1961](https://github.com/datafuselabs/databend/pull/1961))
- **add expression transform optimizer** by [@zhyass](https://github.com/zhyass). ([#2038](https://github.com/datafuselabs/databend/pull/2038))
- **add toMonth/toDayOfYear/toDayOfMonth/toDayOfWeek date function** by [@GrapeBaBa](https://github.com/GrapeBaBa) ([#2042](https://github.com/datafuselabs/databend/pull/2042) & [#2050](https://github.com/datafuselabs/databend/pull/2050))

## Improvement

- **deprecate dfs mod** by [@BohuTANG](https://github.com/BohuTANG). ([#2069](https://github.com/datafuselabs/databend/pull/2069))
- **acquiring a DataAccessor without accessing DatabendQueryContext** by [@drmingdrmer](https://github.com/drmingdrmer). ([#2071](https://github.com/datafuselabs/databend/pull/2071))
- **merge GetTableActionResult and TableInfo into one struct TableInfo** by [@drmingdrmer](https://github.com/drmingdrmer) ([#2020](https://github.com/datafuselabs/databend/pull/2020))
- **decouple ScanPlan with Table** by [@dantengsky](https://github.com/dantengsky). ([#1976](https://github.com/datafuselabs/databend/pull/1976))

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.4.130-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.130-nightly)
- [v0.4.129-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.129-nightly)
- [v0.4.128-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.128-nightly)
- [v0.4.127-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.127-nightly)
- [v0.4.126-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.126-nightly)
- [v0.4.125-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.125-nightly)
- [v0.4.124-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.124-nightly)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://datafusecloud.slack.com/join/shared_invite/zt-nojrc9up-50IRla1Y1h56rqwCTkkDJA)
