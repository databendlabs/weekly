+++
title = "This week in Databend #21"
date = 2021-12-22
slug = "2021-12-22-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

> This week, the migration of the _**[Databend website](https://databend.rs)**_ to [Docusaurus](https://github.com/facebook/docusaurus) was completed; it is now hosted on a service sponsored by [Vercel](https://vercel.com/). Please enjoy it.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **add show create database statement** by [@Junnplus](https://github.com/Junnplus) ([#3573](https://github.com/datafuselabs/databend/pull/3573))
- **support engine options and refactor github engine** by [@Junnplus](https://github.com/Junnplus) ([#3542](https://github.com/datafuselabs/databend/pull/3542))
- **impl Visitor for SQL AST** by [@jackwener](https://github.com/jackwener) ([#2880](https://github.com/datafuselabs/databend/pull/2880))
- **support drop stage** by [@GrapeBaBa](https://github.com/GrapeBaBa) ([#3550](https://github.com/datafuselabs/databend/pull/3550))
- **add mTLS support for http query server** by [@ZhiHanZ](https://github.com/ZhiHanZ) ([#3507](https://github.com/datafuselabs/databend/pull/3507))
- **add more strings functions**
  - `LOWER & LCASE`, `UPPER & UCASE` by [@Xuanwo](https://github.com/Xuanwo) ([#3521](https://github.com/datafuselabs/databend/pull/3521), [#3558](https://github.com/datafuselabs/databend/pull/3558))
  - `Format` by [@eastfisher](https://github.com/eastfisher) ([#3466](https://github.com/datafuselabs/databend/pull/3466), merging in [#3489](https://github.com/datafuselabs/databend/pull/3489) by [@sundy-li](https://github.com/sundy-li))
  - `SOUNDEX` by [@bestgopher](https://github.com/bestgopher) ([#3446](https://github.com/datafuselabs/databend/pull/3446))
- **add uuid functions**
  - `generateUUIDv4`, `zeroUUID`, `isemptyUUID`, `isnotemptyUUID` by [@lianghanzhen](https://github.com/lianghanzhen) ([#3582](https://github.com/datafuselabs/databend/pull/3582))
- **add more hash functions**
  - `BLAKE3`, `XXHASH32`, `XXHASH64` by [@PsiACE](https://github.com/PsiACE) ([#3527](https://github.com/datafuselabs/databend/pull/3523), [#3556](https://github.com/datafuselabs/databend/pull/3556))

## Improvement

- **optimize table statement** by [@dantengsky](https://github.com/dantengsky). ([#3511](https://github.com/datafuselabs/databend/pull/3511))
- **add more privileges** by [@flaneur2020](https://github.com/flaneur2020). ([#3567](https://github.com/datafuselabs/databend/pull/3567))
- **move validity masking out from function to transform** by [@junli1026](https://github.com/junli1026) ([#3543](https://github.com/datafuselabs/databend/pull/3543))
- **refine load configs from toml file** by [@liubaohai](https://github.com/liubaohai) ([#3545](https://github.com/datafuselabs/databend/pull/3545))
- **refactor string hash functions using String2String template function** by [@mshauneu](https://github.com/mshauneu) ([#3536](https://github.com/datafuselabs/databend/pull/3536))
- **use clap 3.0.0-rc.5 to unify the cli arg parsing** by [@koushiro](https://github.com/koushiro) ([#3499](https://github.com/datafuselabs/databend/pull/3499))
- **add query cache** by [@Veeupup](https://github.com/Veeupup) ([#3433](https://github.com/datafuselabs/databend/pull/3433))
- **add created_on to TableMeta** by [@GanZiheng](https://github.com/GanZiheng) ([#3319](https://github.com/datafuselabs/databend/pull/3319))
- **support historical data truncation** by [@dantengsky](https://github.com/dantengsky). ([#3463](https://github.com/datafuselabs/databend/pull/3463))

## Performance Improvement

- **improve constant filter** by [@sundy-li](https://github.com/sundy-li) ([#3537](https://github.com/datafuselabs/databend/pull/3537))
- **add filters pushdown for read datasource** by [@zhyass](https://github.com/zhyass) ([#3513](https://github.com/datafuselabs/databend/pull/3513))

### Bug fixes

- **check create table of immutable catalog** by [@Junnplus](https://github.com/Junnplus) ([#3554](https://github.com/datafuselabs/databend/pull/3554))
- **fix ClickHouse progress hang in some queries** by [@BohuTANG](https://github.com/BohuTANG). ([#3544](https://github.com/datafuselabs/databend/pull/3544))
- **make pprof work again** by [@PsiACE](https://github.com/PsiACE) ([#3523](https://github.com/datafuselabs/databend/pull/3523))
- **fix intdiv return type** by [@zhyass](https://github.com/zhyass) ([#3497](https://github.com/datafuselabs/databend/pull/3497))

## Tips

Let's learn a weekly tip from Databend.

### What's happening in Databend SQL layer

With [#2983](https://github.com/datafuselabs/databend/pull/2983) ready for review, Databend's SQL layer will see the arrival of a new planner framework.

In fact, we have a number of plans for refactoring the SQL layer, which may even include a rewritten parser.

- **Read the planner RFC**

  [RFC: New SQL planner framework](https://github.com/datafuselabs/databend/blob/main/website/databend/docs/dev/rfcs/query/0005-new-sql-planner-framework.md)

  In summary, this RFC will:

  Introduce a new framework to support planning JOIN and correlated subquery
  Introduce a rule system that allows developer to write transformation rules easily

- **Explore related issues**

  - [[Tracking] Refactor SQL layer](https://github.com/datafuselabs/databend/issues/1217)
  - [[Tracking] Refactor SQL Parser](https://github.com/datafuselabs/databend/issues/1218)
  - [[Tracking] Refactor PlanBuilder](https://github.com/datafuselabs/databend/issues/1219)

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.6.11-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.11-nightly)
- [v0.6.10-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.10-nightly)
- [v0.6.9-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.9-nightly)
- [v0.6.8-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.8-nightly)
- [v0.6.7-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.7-nightly)
- [v0.6.6-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.6-nightly)
- [v0.6.5-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.5-nightly)

## Ecosystem/Upstream

From open source, for open source. Our team is also committed to contributing to the Rust ecosystem and upstream dependencies.

- [succinct-rs - succinct data types](https://github.com/drmingdrmer/succinct-rs): A compressed prefix tree in Rust. by [@drmingdrmer](https://github.com/drmingdrmer/)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
