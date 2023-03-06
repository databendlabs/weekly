+++
title = "This week in Databend #27"
date = 2022-02-02
slug = "2022-02-02-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

> Happy Chinese New Year, 春节快乐，虎年大吉！

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **grpc-API: export() all meta data** by [@drmingdrmer](https://github.com/drmingdrmer). ([#4016](https://github.com/datafuselabs/databend/pull/4016))
- **add tokenizer for the new sql parser** by [@andylokandy](https://github.com/andylokandy). ([#4024](https://github.com/datafuselabs/databend/pull/4024))

## Improvement

- **cluster level global settings** by [@BohuTANG](https://github.com/BohuTANG). (track in [#3933](https://github.com/datafuselabs/databend/issues/3933), there have been 4 related PRs)

### Bug fixes

- **fix unable to get field name bug** by [@zhyass](https://github.com/zhyass). ([#4014](https://github.com/datafuselabs/databend/pull/4014))

### Build / Test / CI

- **add UT for catalogsL** by [@sunisdown](https://github.com/sunisdown). ([#3893](https://github.com/datafuselabs/databend/pull/3893)).
- **refact test dir** by [@wangzhen11aaa](https://github.com/wangzhen11aaa) ([#4020](https://github.com/datafuselabs/databend/pull/4020)) and [@BohuTANG](https://github.com/BohuTANG) ([#4032](https://github.com/datafuselabs/databend/pull/4032)).

Databend has always wanted to build stable, highly reliable data warehouses, we welcome everyone to come along and help us improve code quality & test coverage.

### Experimental

- **dal2: eliminate type parameters in DAL** by [@Xuanwo](https://github.com/Xuanwo). ([#4001](https://github.com/datafuselabs/databend/pull/4001)).
- **other functions migrate to Function2 trait** by [@junli1026](https://github.com/junli1026). ([#4036](https://github.com/datafuselabs/databend/pull/4036), merged into `datavalues-dev` branch).

## Tips

Let's learn a weekly tip from Databend.

### Roadmap 2022

It's February 2022 and just in time for the Chinese New Year, let's take a look at Databend's roadmap for 2022.

**Work in Progress**

- Query cluster track [#747](https://github.com/datafuselabs/databend/issues/747)
- RBAC Privileges [#2793](https://github.com/datafuselabs/databend/issues/2793)
- New planner framework [#1217](https://github.com/datafuselabs/databend/issues/1217)
- Database sharings [#3430](https://github.com/datafuselabs/databend/issues/3430)
- Stage [#2976](https://github.com/datafuselabs/databend/issues/2976)
- Index design [#3711](https://github.com/datafuselabs/databend/issues/3711)
- Push-Based + Pull-Based processor
- Continuous Benchmarking [#3084](https://github.com/datafuselabs/databend/issues/3084)
- Databend cli [#938](https://github.com/datafuselabs/databend/issues/938)
- Online playground

For more information, please see [databend.rs - Roadmap 2022](https://databend.rs/dev/roadmap) or [issue - Roadmap 2022](https://github.com/datafuselabs/databend/issues/3706) .

## Changelogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.6.52-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.52-nightly)
- [v0.6.51-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.51-nightly)
- [v0.6.50-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.50-nightly)
- [v0.6.49-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.49-nightly)
- [v0.6.48-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.48-nightly)
- [v0.6.47-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.47-nightly)
- [v0.6.46-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.46-nightly)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
