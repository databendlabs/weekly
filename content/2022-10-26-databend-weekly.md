+++
title = "This week in Databend #65"
date = 2022-10-26
slug = "2022-10-26-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is a powerful cloud data warehouse. Built for elasticity and efficiency. Free and open. Also available in the cloud: <https://app.databend.com> .

## What's Changed

Below is a list of some major changes that we don't want you to miss.

### Exciting New Features :sparkles:

**RFC**

- Multiple Catalog ([#8254](https://github.com/datafuselabs/databend/pull/8254))

**meta**

- allow to join a cluster if a meta node has no log ([#8384](https://github.com/datafuselabs/databend/pull/8384))
- add key space `Expire` ([#8441](https://github.com/datafuselabs/databend/pull/8441))

**datablock**

- add metainfo in datablock ([#8417](https://github.com/datafuselabs/databend/pull/8417))

**functions**

- improve performance of count distinct ([#8317](https://github.com/datafuselabs/databend/pull/8317))

**parser**

- relax the order requirement about the `COPY` options ([#8341](https://github.com/datafuselabs/databend/pull/8341))
- support `SELECT` output nothing ([#8390](https://github.com/datafuselabs/databend/pull/8390))

**planner**

- optimize join plan to make filter push down ([#8377](https://github.com/datafuselabs/databend/pull/8377))

**handlers**

- http handler no longer need to call `final_uri` explicitly. ([#8299](https://github.com/datafuselabs/databend/pull/8299))

**rbac**

- support SET ROLE and current_role() ([#8392](https://github.com/datafuselabs/databend/pull/8392))

**storage**

- Compact Segment ([#8261](https://github.com/datafuselabs/databend/pull/8261))
- Add cache operator in common-storage ([#8306](https://github.com/datafuselabs/databend/pull/8306))
- introduce data metrics for table ([#8363](https://github.com/datafuselabs/databend/pull/8363))
- add gc status to data metrics and show in processlist ([#8389](https://github.com/datafuselabs/databend/pull/8389))
- allow loading data from local fs ([#8431](https://github.com/datafuselabs/databend/pull/8431))
- new system table: `system.catalogs` ([#8423](https://github.com/datafuselabs/databend/pull/8423))

**new expression**

- implement array function `slice`, `remove_fist`, `remove_last` ([#8326](https://github.com/datafuselabs/databend/pull/8326))
- add `tuple()` and `get()` for tuple ([#8372](https://github.com/datafuselabs/databend/pull/8372))

**tests**

- add join tests under large dataset ([#8351](https://github.com/datafuselabs/databend/pull/8351))

### Code Refactor :tada:

**meta**

- merge two to-meta-server rpc into one ([#8308](https://github.com/datafuselabs/databend/pull/8308))
- try best to leave a cluster ([#8298](https://github.com/datafuselabs/databend/pull/8298))

**planner**

- use right mark join as subquery's default join type ([#8427](https://github.com/datafuselabs/databend/pull/8427))

**query**

- optimize get/upsert copied file info ([#8282](https://github.com/datafuselabs/databend/pull/8282))
- re-org query crates ([#8336](https://github.com/datafuselabs/databend/pull/8336))

**storage**

- use commit_mutation in segment compaction ([#8350](https://github.com/datafuselabs/databend/pull/8350))
- decouple meta readers from TableContext ([#8395](https://github.com/datafuselabs/databend/pull/8395))

**new expression**

- move expressoin test to function-v2 ([#8397](https://github.com/datafuselabs/databend/pull/8397))

### Build/Testing/CI Infra Changes :electric_plug:

- replace cargo udeps with cargo machete ([#8343](https://github.com/datafuselabs/databend/pull/8343))
- migrate deprecating set-output commands ([#8381](https://github.com/datafuselabs/databend/pull/8381))

### Thoughtful Bug Fix :wrench:

**config**

- throw errors while loading config failed ([#8462](https://github.com/datafuselabs/databend/pull/8462))

**planner**

- fix aggregation in cluster mode ([#8333](https://github.com/datafuselabs/databend/pull/8333))
- left join panic ([#8325](https://github.com/datafuselabs/databend/pull/8325))
- remove unnecessary required columns ([#8443](https://github.com/datafuselabs/databend/pull/8443))

**processor**

- try fix data lost when resize multi outputs ([#8319](https://github.com/datafuselabs/databend/pull/8319))
- try fix lost last message if finish at same time ([#8333](https://github.com/datafuselabs/databend/pull/8333))

**query**

- StringSearchLike vector_vector can not match '\n' ([#8359](https://github.com/datafuselabs/databend/pull/8359))
- optimize upsert table copied file info ([#8409](https://github.com/datafuselabs/databend/pull/8409))
- div zero return err ([#8464](https://github.com/datafuselabs/databend/pull/8464))

**storage**

- support mutation during insertion ([#8205](https://github.com/datafuselabs/databend/pull/8205))
- add a threshold for compact block ([#8322](https://github.com/datafuselabs/databend/pull/8322))

## News

Let's take a look at what's new at Datafuse Labs & Databend each week.

#### RFC: Multiple Catalog

Databend supports multiple catalogs now, but only in a static way.

To allow accessing the hive catalog, users need to configure `hive` inside `databend-query.toml` in this way:

```toml
[catalog]
meta_store_address = "127.0.0.1:9083"
protocol = "binary"
```

Users can't add/alter/remove the catalogs during runtime.

By allowing users to maintain multiple catalogs for the databend, we can integrate more catalogs like `iceberg` more quickly.

**Learn More**

- [RFC | Multiple Catalog](https://databend.rs/doc/contributing/rfcs/multiple-catalog)

#### Jepsen Test for Databend Meta Service

Jepsen is an open source software library for system testing.  It is an effort to improve the safety of distributed databases, queues, consensus systems, etc.

For the past period of time, [@lichuang](https://github.com/lichuang) has been working on the design and implementation of a Jepsen test solution for the Databend Meta Service.

If you are interested in this test, please check the corresponding GitHub Repo, which contains the steps, scripts and clients for the test.

**Learn More**

- GitHub Repo: <https://github.com/datafuselabs/jepsen.meta>

## Issues

Meet issues you may be interested in and try to solve it.

#### New Key-Value services support for OpenDAL

[OpenDAL](https://github.com/datafuselabs/opendal) means **Open** **D**ata **A**ccess **L**ayer and its goal is *Access data freely, painlessly, and efficiently* .

In past, OpenDAL has completed support for different storage backends such as local file system, AWS s3, Azure Blob, etc. And to support storing volatile data to provide cache solutions and temporary storage of data, OpenDAL has designed and implemented Key-Value service support (with [`kv::Adapter`](https://opendal.databend.rs/opendal/adapters/kv/trait.Adapter.html)). 

The following backends are currently available for the Key-Value service: 

- [memory](https://opendal.databend.rs/opendal/services/memory/index.html): Service based on BtreeMap
- [moka](https://opendal.databend.rs/opendal/services/moka/index.html): Service based on the high-performance caching library [moka](https://github.com/moka-rs/moka).
- [redis](https://opendal.databend.rs/opendal/services/redis/index.html): Service based on [redis](https://redis.io/).

The community also plans to add support for the following Key-Value services:

- [Issue 854: Implement tikv services support via kv adapter](https://github.com/datafuselabs/opendal/issues/854)
- [Issue 855: Implement rocksdb services support via kv adapter](https://github.com/datafuselabs/opendal/issues/855)
- [Issue 856: Implement memcached services support via kv adapter](https://github.com/datafuselabs/opendal/issues/856)

If you find these interesting, try to solve them or participate in discussions and PR reviews. Or you can click on <https://link.databend.rs/i-m-feeling-lucky> to pick up a good first issue, good luck!

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.8.90-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.90-nightly)
- [v0.8.89-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.89-nightly)
- [v0.8.88-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.88-nightly)
- [v0.8.87-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.87-nightly)
- [v0.8.86-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.86-nightly)
- [v0.8.85-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.85-nightly)
- [v0.8.84-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.84-nightly)
- [v0.8.83-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.83-nightly)
- [v0.8.82-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.82-nightly)
- [v0.8.81-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.81-nightly)
- [v0.8.80-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.80-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) |[<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="ClSlaid" src="https://avatars.githubusercontent.com/u/44747719?v=4&s=117" width="117">](https://github.com/ClSlaid) |[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |[<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |
:---: |:---: |:---: |:---: |:---: |:---: |
[andylokandy](https://github.com/andylokandy) |[b41sh](https://github.com/b41sh) |[BohuTANG](https://github.com/BohuTANG) |[ClSlaid](https://github.com/ClSlaid) |[dantengsky](https://github.com/dantengsky) |[drmingdrmer](https://github.com/drmingdrmer) |

[<img alt="everpcpc" src="https://avatars.githubusercontent.com/u/1808802?v=4&s=117" width="117">](https://github.com/everpcpc) |[<img alt="flaneur2020" src="https://avatars.githubusercontent.com/u/129800?v=4&s=117" width="117">](https://github.com/flaneur2020) |[<img alt="guzzit" src="https://avatars.githubusercontent.com/u/36326251?v=4&s=117" width="117">](https://github.com/guzzit) |[<img alt="leiysky" src="https://avatars.githubusercontent.com/u/22445410?v=4&s=117" width="117">](https://github.com/leiysky) |[<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |
:---: |:---: |:---: |:---: |:---: |:---: |
[everpcpc](https://github.com/everpcpc) |[flaneur2020](https://github.com/flaneur2020) |[guzzit](https://github.com/guzzit) |[leiysky](https://github.com/leiysky) |[lichuang](https://github.com/lichuang) |[mergify[bot]](https://github.com/apps/mergify) |

[<img alt="miles170" src="https://avatars.githubusercontent.com/u/106059172?v=4&s=117" width="117">](https://github.com/miles170) |[<img alt="RinChanNOWWW" src="https://avatars.githubusercontent.com/u/33975039?v=4&s=117" width="117">](https://github.com/RinChanNOWWW) |[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |[<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) |[<img alt="TszKitLo40" src="https://avatars.githubusercontent.com/u/18443139?v=4&s=117" width="117">](https://github.com/TszKitLo40) |
:---: |:---: |:---: |:---: |:---: |:---: |
[miles170](https://github.com/miles170) |[RinChanNOWWW](https://github.com/RinChanNOWWW) |[soyeric128](https://github.com/soyeric128) |[sundy-li](https://github.com/sundy-li) |[TCeason](https://github.com/TCeason) |[TszKitLo40](https://github.com/TszKitLo40) |

[<img alt="wubx" src="https://avatars.githubusercontent.com/u/320680?v=4&s=117" width="117">](https://github.com/wubx) |[<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |[<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) |[<img alt="zhang2014" src="https://avatars.githubusercontent.com/u/8087042?v=4&s=117" width="117">](https://github.com/zhang2014) |[<img alt="zhyass" src="https://avatars.githubusercontent.com/u/34016424?v=4&s=117" width="117">](https://github.com/zhyass) |
:---: |:---: |:---: |:---: |:---: |:---: |
[wubx](https://github.com/wubx) |[Xuanwo](https://github.com/Xuanwo) |[xudong963](https://github.com/xudong963) |[youngsofun](https://github.com/youngsofun) |[zhang2014](https://github.com/zhang2014) |[zhyass](https://github.com/zhyass) |

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
