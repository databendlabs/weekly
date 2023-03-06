+++
title = "This week in Databend #57"
date = 2022-08-31
slug = "2022-08-31-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

**share**

- add create database from share SQL ([#7288](https://github.com/datafuselabs/databend/pull/7288))

**meta**

- add admin api: /v1/ctrl/trigger_snapshot let the leader send a snapshot to every follower ([#7298](https://github.com/datafuselabs/databend/pull/7298))

**storage**

- HuaweiCloud OBS as storage backend for databend ([#7365](https://github.com/datafuselabs/databend/pull/7365))
- add top-N pruner ([#7302](https://github.com/datafuselabs/databend/pull/7302))
- split hive file to small partition and support read more than one rowgroups ([#7311](https://github.com/datafuselabs/databend/pull/7311))

**format**

- add format ndjson ([#7328](https://github.com/datafuselabs/databend/pull/7328))

**planner**

- implement cost-based optimization ([#7187](https://github.com/datafuselabs/databend/pull/7187))
- push limit down further ([#7273](https://github.com/datafuselabs/databend/pull/7273))
- support explain ast ([#7215](https://github.com/datafuselabs/databend/pull/7215))

**query**

- alter table recluster ([#7400](https://github.com/datafuselabs/databend/pull/7400))

**new expression**

- migrate `sign` / `trigonometric` / `abs` ([#7272](https://github.com/datafuselabs/databend/pull/7272))
- implement `is_null` and `is_not_null` ([#7282](https://github.com/datafuselabs/databend/pull/7282))
- add Timestamp type ([#7393](https://github.com/datafuselabs/databend/pull/7393))

### Improvement

**share**

- refactor drop share ([#7341](https://github.com/datafuselabs/databend/pull/7341))

**meta**

- introduce UpserKV to simplify meta command ([#7339](https://github.com/datafuselabs/databend/pull/7339) & [#7345](https://github.com/datafuselabs/databend/pull/7345))

**storage**

- refactor compact and recluster ([#7274](https://github.com/datafuselabs/databend/pull/7274))
- remove Github Engine ([#7289](https://github.com/datafuselabs/databend/pull/7289))
- enable file meta data cache ([#7386](https://github.com/datafuselabs/databend/pull/7386))

**async insert**

- eliminate circular references ([#7411](https://github.com/datafuselabs/databend/pull/7411))

**query**

- make args to be consistent of other popular DBMS ([#7357](https://github.com/datafuselabs/databend/pull/7357))

### Build/Testing/CI

- add part of duckdb logictest suites ([#7394](https://github.com/datafuselabs/databend/pull/7394))

### Bug fixes

**meta**

- when expiring a record, leader and followers should use the same now time ([#7325](https://github.com/datafuselabs/databend/pull/7325))

**parser**

- improve parsing speed for large expr ([#7279](https://github.com/datafuselabs/databend/pull/7279))

**planner**

- scalar subquery in function got error ([#7293](https://github.com/datafuselabs/databend/pull/7293))
- fix case sensitivity of `USING` clause ([#7304](https://github.com/datafuselabs/databend/pull/7304))
- validate duplicated column name when creating table ([#7307](https://github.com/datafuselabs/databend/pull/7307))

**query**

- fix JSON value incorrect memory size ([#7346](https://github.com/datafuselabs/databend/pull/7346))

**cluster**

- optimize the performance for cluster mode ([#7351](https://github.com/datafuselabs/databend/pull/7351))
- fix panic if exchange key is nullable ([#7368](https://github.com/datafuselabs/databend/pull/7368))

## News

Let's take a look at what's new at Datafuse Labs & Databend each week.

**Databend Now Supports Gcs and Huawei Obs as Storage Backends**

Databend uses [opendal](https://github.com/datafuselabs/opendal) as the storage access layer to interface with various storage systems.

Recently, Databend completed support for Google Cloud Storage and Huawei Cloud Object Storage, making it easy to access the data stored on these backends.

Learn more:

- <https://github.com/datafuselabs/databend/pull/7197>
- <https://github.com/datafuselabs/databend/pull/7365>

**Remove Support for GitHub Engine**

In the past, Databend has supported the GitHub engine to easily demonstrate, which pulls data from the GitHub API to form a database.

As the FUSE engine matures, we are officially removing support for the GitHub toy engine to reduce unnecessary maintenance work.

Learn more: <https://github.com/datafuselabs/databend/discussions/7286>

**Databend Have Achieved the OpenSSF Best Practice Badge**

The Open Source Security Foundation (OpenSSF) Best Practices badge is a way for Free/Libre and Open Source Software (FLOSS) projects to show that they follow best practices.

[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/6375/badge)](https://bestpractices.coreinfrastructure.org/projects/6375)

## Changelogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.8.19-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.19-nightly)
- [v0.8.18-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.18-nightly)
- [v0.8.17-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.17-nightly)
- [v0.8.16-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.16-nightly)
- [v0.8.15-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.15-nightly)
- [v0.8.14-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.14-nightly)
- [v0.8.13-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.13-nightly)
- [v0.8.12-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.12-nightly)
- [v0.8.11-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.11-nightly)
- [v0.8.10-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.10-nightly)
- [v0.8.9-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.9-nightly)
- [v0.8.8-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.8-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) |[<img alt="AngleNet" src="https://avatars.githubusercontent.com/u/14330209?v=4&s=117" width="117">](https://github.com/AngleNet) |[<img alt="ariesdevil" src="https://avatars.githubusercontent.com/u/7812909?v=4&s=117" width="117">](https://github.com/ariesdevil) |[<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="ClSlaid" src="https://avatars.githubusercontent.com/u/44747719?v=4&s=117" width="117">](https://github.com/ClSlaid) |
:---: |:---: |:---: |:---: |:---: |:---: |
[andylokandy](https://github.com/andylokandy) |[AngleNet](https://github.com/AngleNet) |[ariesdevil](https://github.com/ariesdevil) |[b41sh](https://github.com/b41sh) |[BohuTANG](https://github.com/BohuTANG) |[ClSlaid](https://github.com/ClSlaid) |

[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |[<img alt="dependabot[bot]" src="https://avatars.githubusercontent.com/in/29110?v=4&s=117" width="117">](https://github.com/apps/dependabot) |[<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |[<img alt="eastfisher" src="https://avatars.githubusercontent.com/u/10803535?v=4&s=117" width="117">](https://github.com/eastfisher) |[<img alt="everpcpc" src="https://avatars.githubusercontent.com/u/1808802?v=4&s=117" width="117">](https://github.com/everpcpc) |[<img alt="leiysky" src="https://avatars.githubusercontent.com/u/22445410?v=4&s=117" width="117">](https://github.com/leiysky) |
:---: |:---: |:---: |:---: |:---: |:---: |
[dantengsky](https://github.com/dantengsky) |[dependabot[bot]](https://github.com/apps/dependabot) |[drmingdrmer](https://github.com/drmingdrmer) |[eastfisher](https://github.com/eastfisher) |[everpcpc](https://github.com/everpcpc) |[leiysky](https://github.com/leiysky) |

[<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |[<img alt="PsiACE" src="https://avatars.githubusercontent.com/u/36896360?v=4&s=117" width="117">](https://github.com/PsiACE) |[<img alt="RinChanNOWWW" src="https://avatars.githubusercontent.com/u/33975039?v=4&s=117" width="117">](https://github.com/RinChanNOWWW) |[<img alt="sandflee" src="https://avatars.githubusercontent.com/u/5102100?v=4&s=117" width="117">](https://github.com/sandflee) |[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |
:---: |:---: |:---: |:---: |:---: |:---: |
[lichuang](https://github.com/lichuang) |[mergify[bot]](https://github.com/apps/mergify) |[PsiACE](https://github.com/PsiACE) |[RinChanNOWWW](https://github.com/RinChanNOWWW) |[sandflee](https://github.com/sandflee) |[soyeric128](https://github.com/soyeric128) |

[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |[<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) |[<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |[<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) |[<img alt="ZeaLoVe" src="https://avatars.githubusercontent.com/u/10904090?v=4&s=117" width="117">](https://github.com/ZeaLoVe) |
:---: |:---: |:---: |:---: |:---: |:---: |
[sundy-li](https://github.com/sundy-li) |[TCeason](https://github.com/TCeason) |[Xuanwo](https://github.com/Xuanwo) |[xudong963](https://github.com/xudong963) |[youngsofun](https://github.com/youngsofun) |[ZeaLoVe](https://github.com/ZeaLoVe) |

[<img alt="zhang2014" src="https://avatars.githubusercontent.com/u/8087042?v=4&s=117" width="117">](https://github.com/zhang2014) |[<img alt="zhyass" src="https://avatars.githubusercontent.com/u/34016424?v=4&s=117" width="117">](https://github.com/zhyass) | | | | |
:---: |:---: |:---: |:---: |:---: |:---: |
[zhang2014](https://github.com/zhang2014) |[zhyass](https://github.com/zhyass) | | | | |

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Weekly](https://weekly.databend.rs/) (A weekly newsletter about Databend)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions) (Feature/Bug reports, Contributions)
- [Twitter](https://twitter.com/Datafuse_Labs) (Get the news fast)
- [Slack Channel](https://link.databend.rs/join-slack) (For live discussion with the Community)
- [I'm feeling lucky](https://link.databend.rs/i-m-feeling-lucky) (Pick up a good first issue now!)
