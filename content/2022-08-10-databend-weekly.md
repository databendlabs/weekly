+++
title = "This week in Databend #54"
date = 2022-08-10
slug = "2022-08-10-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

**cte**

- support cte in parser [#7030](https://github.com/datafuselabs/databend/pull/7030) 

**share**

- add Create/Drop Share sql support ([#6975](https://github.com/datafuselabs/databend/pull/6975) & [#6987](https://github.com/datafuselabs/databend/pull/6987))
- add Grant and Revoke Share Object sql support ([#7009](https://github.com/datafuselabs/databend/pull/7009))

**parser**

- add mysql dialect [#7071](https://github.com/datafuselabs/databend/pull/7071) 

**RBAC**

- avoid making cycle between roles ([#7051](https://github.com/datafuselabs/databend/pull/7051))

**handlers**

- deprecate clickhouse's tcp protocol support ([#7012](https://github.com/datafuselabs/databend/pull/7012))
- add tenant tables status api ([#7037](https://github.com/datafuselabs/databend/pull/7037))

**optimizer**

- implement column pruning for heuristic optimizer ([#6478](https://github.com/datafuselabs/databend/pull/6478))

**planner**

- support name resolution for alias ([#6979](https://github.com/datafuselabs/databend/pull/6979))
- enable projection pushdown ([#6938](https://github.com/datafuselabs/databend/pull/6938))
- enable new planner by default ([#6869](https://github.com/datafuselabs/databend/pull/6869))
- enhanced case-sensitivity of identifiers ([#7026](https://github.com/datafuselabs/databend/pull/7026))

**storage**

- generate cluster statistics in deletion ([#7041](https://github.com/datafuselabs/databend/pull/7041))

**new expression**

- add concat/filter/scatter/take kernel for chunk ([#7038](https://github.com/datafuselabs/databend/pull/7038))
- implement adaptive constant folding ([#7054](https://github.com/datafuselabs/databend/pull/7054))

### Improvement

**split query**

- extract storages into sub crates ([#6981](https://github.com/datafuselabs/databend/pull/6981))

**share**

- refactor add/remove share accounts API ([#7029](https://github.com/datafuselabs/databend/pull/7029))

**proto conv**

- pb::S3StorageConfig should be decoded into StorageS3Config, instead of into enum StorageParams ([#7047](https://github.com/datafuselabs/databend/pull/7047))
- trait FromToPB use associated type instead of type parameter ([#7048](https://github.com/datafuselabs/databend/pull/7048))

**meta api**

- introduce Id for KVApi ([#7055](https://github.com/datafuselabs/databend/pull/7055))
- merge TableIdGen, DatabaseIdGen and ShareIdGen into one id-generator key ([#7062](https://github.com/datafuselabs/databend/pull/7062))

### Build/Testing/CI

- enable subquery tests in ydb suit ([#6948](https://github.com/datafuselabs/databend/pull/6948))
- add mini hits dataset 100k to stateful test ([#6964](https://github.com/datafuselabs/databend/pull/6964))
- test fuse-table compatibility ([#6990](https://github.com/datafuselabs/databend/pull/6990))

### Bug fixes

- fix hive table read when pushdowns is None ([#7008](https://github.com/datafuselabs/databend/pull/7008))
- fix column prune for `COUNT(*)` ([#7000](https://github.com/datafuselabs/databend/pull/7000))
- fix prune projection ([#7013](https://github.com/datafuselabs/databend/pull/7013))
- fix clickhouse handler, try catch error before response ([#7019](https://github.com/datafuselabs/databend/pull/7019))
- fix case sensitivity of cluster by expression ([#7060](https://github.com/datafuselabs/databend/pull/7060))

## News

Let's take a look at what's new at Databend each week.

**Release proposal: Nightly v0.9**

Databend plans to release v0.8 in the coming week, with new parser and planner support. 

The call for proposals for the release of v0.9 is now open. See [Release proposal: Nightly v0.9 #7052](https://github.com/datafuselabs/databend/issues/7052)

**Benchmarking Databend using TPC-H**

Databend has recently enabled the new Planner by default, which means that we have fully enabled support for JOIN queries and correlated subqueries.

Now you can easily run the TPC-H test suite with Databend and perform benchmark tests. See [Benchmarking Databend using TPC-H](https://databend.rs/blog/2022/08/08/benchmark-tpc-h)

**Deprecate clickhouse's tcp protocol support**

As the Clickhouse TCP protocol is almost a black box and requires a lot of effort to ensure compatibility, Databend has removed compatibility with the Clickhouse TCP protocol. See [Deprecate clickhouse's tcp protocol support #7012](https://github.com/datafuselabs/databend/pull/7012)

Databend will focus on Clickhouse HTTP protocol compatibility to ensure compatibility with the existing ecosystem.

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.7.159-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.159-nightly)
- [v0.7.158-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.158-nightly)
- [v0.7.157-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.157-nightly)
- [v0.7.156-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.156-nightly)
- [v0.7.155-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.155-nightly)
- [v0.7.154-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.154-nightly)
- [v0.7.153-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.153-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) |[<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |[<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |[<img alt="flaneur2020" src="https://avatars.githubusercontent.com/u/129800?v=4&s=117" width="117">](https://github.com/flaneur2020) |
:---: |:---: |:---: |:---: |:---: |:---: |
[andylokandy](https://github.com/andylokandy) |[b41sh](https://github.com/b41sh) |[BohuTANG](https://github.com/BohuTANG) |[dantengsky](https://github.com/dantengsky) |[drmingdrmer](https://github.com/drmingdrmer) |[flaneur2020](https://github.com/flaneur2020) |

[<img alt="leiysky" src="https://avatars.githubusercontent.com/u/22445410?v=4&s=117" width="117">](https://github.com/leiysky) |[<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |[<img alt="pymongo" src="https://avatars.githubusercontent.com/u/42347370?v=4&s=117" width="117">](https://github.com/pymongo) |[<img alt="sandflee" src="https://avatars.githubusercontent.com/u/5102100?v=4&s=117" width="117">](https://github.com/sandflee) |[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |
:---: |:---: |:---: |:---: |:---: |:---: |
[leiysky](https://github.com/leiysky) |[lichuang](https://github.com/lichuang) |[mergify[bot]](https://github.com/apps/mergify) |[pymongo](https://github.com/pymongo) |[sandflee](https://github.com/sandflee) |[soyeric128](https://github.com/soyeric128) |

[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |[<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |[<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) |[<img alt="ZeaLoVe" src="https://avatars.githubusercontent.com/u/10904090?v=4&s=117" width="117">](https://github.com/ZeaLoVe) |[<img alt="zhyass" src="https://avatars.githubusercontent.com/u/34016424?v=4&s=117" width="117">](https://github.com/zhyass) |
:---: |:---: |:---: |:---: |:---: |:---: |
[sundy-li](https://github.com/sundy-li) |[Xuanwo](https://github.com/Xuanwo) |[xudong963](https://github.com/xudong963) |[youngsofun](https://github.com/youngsofun) |[ZeaLoVe](https://github.com/ZeaLoVe) |[zhyass](https://github.com/zhyass) |

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
