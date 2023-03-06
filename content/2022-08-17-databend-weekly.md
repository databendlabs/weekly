+++
title = "This week in Databend #55"
date = 2022-08-17
slug = "2022-08-17-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

**RFC**

- share [#7059](https://github.com/datafuselabs/databend/pull/7059)

**CTE**

- support common table expression in planner ([#6056](https://github.com/datafuselabs/databend/pull/7056))

**share**

- add alter share tenants sql ([#7044](https://github.com/datafuselabs/databend/pull/7044))
- add desc share sql ([#7105](https://github.com/datafuselabs/databend/pull/7105))
- add show shares sql ([#7145](https://github.com/datafuselabs/databend/pull/7145))
- add `get_grant_tenants_of_share` and `get_grant_privileges_of_object` api ([#7157](https://github.com/datafuselabs/databend/pull/7157))

**planner**

- support explain raw query ([#7079](https://github.com/datafuselabs/databend/pull/7079))
- support tuple map access pushdown to storage ([#7080](https://github.com/datafuselabs/databend/pull/7080))
- support explain syntax ([#7124](https://github.com/datafuselabs/databend/pull/7124))

**query**

- parquet schema case in-sensitive match [#7045](https://github.com/datafuselabs/databend/pull/7045)

**new expression**

- support 3 args function ([#7075](https://github.com/datafuselabs/databend/pull/7075))
- add a helper trait ColumnFrom ([#7067](https://github.com/datafuselabs/databend/pull/7067))
- add arithmetics functions ([#7096](https://github.com/datafuselabs/databend/pull/7096) & [#7140](https://github.com/datafuselabs/databend/pull/7140))

### Improvement

**meta**

- add defensive check to raft-store ([#7125](https://github.com/datafuselabs/databend/pull/7125))
- get_share_grant_objects API should return name instead of id ([#7088](https://github.com/datafuselabs/databend/pull/7088))
- refactor show share api ([#7142](https://github.com/datafuselabs/databend/pull/7142))

**query**

- predicate push down support multi expressions ([#7078](https://github.com/datafuselabs/databend/pull/7078))
- use common hashtable to store the numeric distinct state ([#7135](https://github.com/datafuselabs/databend/pull/7135))
- improve performance of aggregate function distinct ([#7110](https://github.com/datafuselabs/databend/pull/7110))

**workspace**

- reorg workspace, a basic structure ([#7074](https://github.com/datafuselabs/databend/pull/7074))

### Build/Testing/CI

- add logictest in cluster mode ([#7099](https://github.com/datafuselabs/databend/pull/7099))
- add part of crdb logictest suites ([#7154](https://github.com/datafuselabs/databend/pull/7154))

### Bug fixes

**meta**

- when handling append-entries, if prev_log_id is purged, it should not delete any logs ([#7113](https://github.com/datafuselabs/databend/pull/7113))

**planner**

- fix left join using() return error result ([#7086](https://github.com/datafuselabs/databend/pull/7086))
- fix `ColumnPruner` finds wrong smallest column index ([#7097](https://github.com/datafuselabs/databend/pull/7097))

**processor**

- use flight `do_exchange` replace flight `do_put` ([#7025](https://github.com/datafuselabs/databend/pull/7025))
- try fix invalid physical exchange plan for http handle ([#7095](https://github.com/datafuselabs/databend/pull/7095))

**handle**

- streaming mysql resultset ([#7022](https://github.com/datafuselabs/databend/pull/7022))

## News

Let's take a look at what's new at Datafuse Labs & Databend each week.

**common table expressions**

Databend supports common table expressions (CTEs) and allows you to use a WITH clause to define one or multiple named temporary result sets that are used by the query that follows. The "temporary" means that the result sets will be not permanently stored anywhere in the database schema. They act as temporary views that are only available to the query that follows.

Learn more: <https://databend.rs/doc/reference/sql/query-syntax/dml-with>

**crates**

- [openraft](https://github.com/datafuselabs/openraft) has released v0.7.0, which includes a number of refactorings and reliability improvements, and adds examples of rocksdb and sled.
- [opendal](https://github.com/datafuselabs/opendal) has just added support for Google Cloud Storage and released 0.13.0. Recent improvements include a new `Builder` with sync support and some useful layers.
- The v0.2.0 release of [opensrv](https://github.com/datafuselabs/opensrv) supports streaming writes to mysql result sets and simplifies metadata for clickhouse.

## Changelogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.7.172-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.172-nightly)
- [v0.7.171-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.171-nightly)
- [v0.7.170-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.170-nightly)
- [v0.7.169-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.169-nightly)
- [v0.7.168-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.168-nightly)
- [v0.7.167-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.167-nightly)
- [v0.7.166-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.166-nightly)
- [v0.7.165-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.165-nightly)
- [v0.7.164-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.164-nightly)
- [v0.7.163-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.163-nightly)
- [v0.7.162-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.162-nightly)
- [v0.7.161-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.161-nightly)
- [v0.7.160-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.160-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) |[<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="ClSlaid" src="https://avatars.githubusercontent.com/u/44747719?v=4&s=117" width="117">](https://github.com/ClSlaid) |[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |[<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |
:---: |:---: |:---: |:---: |:---: |:---: |
[andylokandy](https://github.com/andylokandy) |[b41sh](https://github.com/b41sh) |[BohuTANG](https://github.com/BohuTANG) |[ClSlaid](https://github.com/ClSlaid) |[dantengsky](https://github.com/dantengsky) |[drmingdrmer](https://github.com/drmingdrmer) |

[<img alt="e1ijah1" src="https://avatars.githubusercontent.com/u/30852919?v=4&s=117" width="117">](https://github.com/e1ijah1) |[<img alt="everpcpc" src="https://avatars.githubusercontent.com/u/1808802?v=4&s=117" width="117">](https://github.com/everpcpc) |[<img alt="gaoxinge" src="https://avatars.githubusercontent.com/u/16648345?v=4&s=117" width="117">](https://github.com/gaoxinge) |[<img alt="IDJack" src="https://avatars.githubusercontent.com/u/14247115?v=4&s=117" width="117">](https://github.com/IDJack) |[<img alt="Kikkon" src="https://avatars.githubusercontent.com/u/19528375?v=4&s=117" width="117">](https://github.com/Kikkon) |[<img alt="leiysky" src="https://avatars.githubusercontent.com/u/22445410?v=4&s=117" width="117">](https://github.com/leiysky) |
:---: |:---: |:---: |:---: |:---: |:---: |
[e1ijah1](https://github.com/e1ijah1) |[everpcpc](https://github.com/everpcpc) |[gaoxinge](https://github.com/gaoxinge) |[IDJack](https://github.com/IDJack) |[Kikkon](https://github.com/Kikkon) |[leiysky](https://github.com/leiysky) |

[<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |[<img alt="PsiACE" src="https://avatars.githubusercontent.com/u/36896360?v=4&s=117" width="117">](https://github.com/PsiACE) |[<img alt="sandflee" src="https://avatars.githubusercontent.com/u/5102100?v=4&s=117" width="117">](https://github.com/sandflee) |[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |
:---: |:---: |:---: |:---: |:---: |:---: |
[lichuang](https://github.com/lichuang) |[mergify[bot]](https://github.com/apps/mergify) |[PsiACE](https://github.com/PsiACE) |[sandflee](https://github.com/sandflee) |[soyeric128](https://github.com/soyeric128) |[sundy-li](https://github.com/sundy-li) |

[<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |[<img alt="ZeaLoVe" src="https://avatars.githubusercontent.com/u/10904090?v=4&s=117" width="117">](https://github.com/ZeaLoVe) |[<img alt="zhang2014" src="https://avatars.githubusercontent.com/u/8087042?v=4&s=117" width="117">](https://github.com/zhang2014) | | |
:---: |:---: |:---: |:---: |:---: |:---: |
[Xuanwo](https://github.com/Xuanwo) |[xudong963](https://github.com/xudong963) |[ZeaLoVe](https://github.com/ZeaLoVe) |[zhang2014](https://github.com/zhang2014) | | |

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
