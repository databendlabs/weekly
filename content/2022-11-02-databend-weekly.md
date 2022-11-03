+++
title = "This week in Databend #66"
date = 2022-11-02
slug = "2022-11-02-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is a powerful cloud data warehouse. Built for elasticity and efficiency. Free and open. Also available in the cloud: <https://app.databend.com> .

## What's Changed

Below is a list of some major changes that we don't want you to miss.

### Exciting New Features :sparkles:

**RFC**

- User Stage ([#8519](https://github.com/datafuselabs/databend/pull/8519))

**user stage**

- add internal and legacy internal stage support ([#8526](https://github.com/datafuselabs/databend/pull/8526))
- implement user stage support along with stateful tests ([#8556](https://github.com/datafuselabs/databend/pull/8556))

**multiple catalog**

- implement multiple catalog AST ([#8608](https://github.com/datafuselabs/databend/pull/8608))

**hive**

- hive predict pushdown ([#8469](https://github.com/datafuselabs/databend/pull/8469))
- suport substr && order by with null values compatible with hive functions ([#8558](https://github.com/datafuselabs/databend/pull/8558))

**rbac**

- only display available roles in `SHOW ROLES` statement ([#8553](https://github.com/datafuselabs/databend/pull/8553))

**compatibility**

- support mydumper dump data ([#8500](https://github.com/datafuselabs/databend/pull/8500))

**auth**

- add common auth module and support file token on sharing endpoint ([#8607](https://github.com/datafuselabs/databend/pull/8607))

**format**

- allow nested field in TSV ([#8606](https://github.com/datafuselabs/databend/pull/8606))
- unify format settings/options ([#8566](https://github.com/datafuselabs/databend/pull/8566))

**hashtable**

- adaptive string hash table ([#7971](https://github.com/datafuselabs/databend/pull/7971))

**meta**

- auto-clean expired keys ([#8539](https://github.com/datafuselabs/databend/pull/8539))
- export/import supports new key-space: Expire ([#8578](https://github.com/datafuselabs/databend/pull/8578))

**query**

- implement logging format for databend-query ([#8466](https://github.com/datafuselabs/databend/pull/8466))

### Code Refactor :tada:

**error handler**

- add internal error and merge other not needed errors ([#8581](https://github.com/datafuselabs/databend/pull/8581))

**interpreter**

- move `interpreter_common.rs` to common ([#8593](https://github.com/datafuselabs/databend/pull/8593))

**query**

- remove legacy crate codes ([#8412](https://github.com/datafuselabs/databend/pull/8412))
- avoid extra memcpy ([#8569](https://github.com/datafuselabs/databend/pull/8569))
- migrate serializations to expression ([#8582](https://github.com/datafuselabs/databend/pull/8582))

**storage**

- make block meta easier to be cloned ([#8548](https://github.com/datafuselabs/databend/pull/8548))

**new expression**

- cast timestamp to variant string instead of variant int ([#8580](https://github.com/datafuselabs/databend/pull/8580))

### Thoughtful Bug Fix :wrench:

**compatibility**

- fed mysqldump 5.7.16 `/*!code` query ([#8485](https://github.com/datafuselabs/databend/pull/8485))

**planner**

- select view column not exists ([#8543](https://github.com/datafuselabs/databend/pull/8543))

**query**

- div nullable(Int) with null value should not err ([#8495](https://github.com/datafuselabs/databend/pull/8495))
- `CURRENT ROLE` behavior with `AUTH ROLE` is set ([#8546](https://github.com/datafuselabs/databend/pull/8546))

**storage**

- compact limit ([#8473](https://github.com/datafuselabs/databend/pull/8473))
- incorrect index size during reducing block metas ([#8428](https://github.com/datafuselabs/databend/pull/8428))

## News

Let's take a look at what's new at Datafuse Labs & Databend each week.

#### String Adaptive Hash Table

*String Adaptive Hash Table* is one of the Databend community's projects in the Open Source Promotion Plan 2022. [@usamoi](https://github.com/usamoi) helped us with this important work, which has now been merged into [Databend](https://github.com/datafuselabs/databend) repository and has resulted in a 20% - 50% performance improvement in certain scenarios.

[String Adaptive Hash Table](https://www.mdpi.com/2076-3417/10/6/1915) is designed for the key to be a string type, and different data structures are applied to optimise the insertion and reading based on the different lengths of the key.

**Learn More**

- [PR | adaptive string hash table](https://github.com/datafuselabs/databend/pull/7971)
- [Paper | SAHA: A String Adaptive Hash Table for Analytical Databases ](https://www.mdpi.com/2076-3417/10/6/1915)
- [GitHub - usamoi/saha](https://github.com/usamoi/saha)

#### RFC: User Stage

Databend only supports named internal stage:

```sql
CREATE STAGE @my_stage;
COPY INTO my_table FROM @my_stage;
```

However, named internal stages are complex to be used in some cases. Especially for users who only use stages to load data. By supporting the user stage, they can copy data more efficiently:

```sql
COPY INTO my_table from @~;
```

**Learn More**

- [RFC: User Stage](https://databend.rs/doc/contributing/rfcs/user-stage)
- [Tracking issues of RFC: User Stage](https://github.com/datafuselabs/databend/issues/8520)

## Issues

Meet issues you may be interested in and try to solve it.

#### Replace `RwLock<HashMap>` and `Mutex<HashMap>` by Using DashMap

[DashMap](https://github.com/xacrimon/dashmap) is an implementation of a concurrent associative array/hashmap in Rust. it tries to be very simple to use and to be a direct replacement for `RwLock<HashMap<K, V>>`.

Using DashMap will bring two advantages:

- Code will be cleaner, and
- Potential performance improvement

[Issue 8601: Feature: replace RwLock<HashMap> and Mutex<HashMap> by using DashMap](https://github.com/datafuselabs/databend/issues/8601)

If you find it interesting, try to solve it or participate in discussions and PR reviews. Or you can click on <https://link.databend.rs/i-m-feeling-lucky> to pick up a good first issue, good luck!

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.8.99-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.99-nightly)
- [v0.8.98-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.98-nightly)
- [v0.8.97-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.97-nightly)
- [v0.8.96-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.96-nightly)
- [v0.8.95-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.95-nightly)
- [v0.8.94-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.94-nightly)
- [v0.8.93-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.93-nightly)
- [v0.8.92-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.92-nightly)
- [v0.8.91-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.91-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) |[<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="Chasen-Zhang" src="https://avatars.githubusercontent.com/u/15354455?v=4&s=117" width="117">](https://github.com/Chasen-Zhang) |[<img alt="ClSlaid" src="https://avatars.githubusercontent.com/u/44747719?v=4&s=117" width="117">](https://github.com/ClSlaid) |[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |
:---: |:---: |:---: |:---: |:---: |:---: |
[andylokandy](https://github.com/andylokandy) |[b41sh](https://github.com/b41sh) |[BohuTANG](https://github.com/BohuTANG) |[Chasen-Zhang](https://github.com/Chasen-Zhang) |[ClSlaid](https://github.com/ClSlaid) |[dantengsky](https://github.com/dantengsky) |

[<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |[<img alt="everpcpc" src="https://avatars.githubusercontent.com/u/1808802?v=4&s=117" width="117">](https://github.com/everpcpc) |[<img alt="flaneur2020" src="https://avatars.githubusercontent.com/u/129800?v=4&s=117" width="117">](https://github.com/flaneur2020) |[<img alt="leiysky" src="https://avatars.githubusercontent.com/u/22445410?v=4&s=117" width="117">](https://github.com/leiysky) |[<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |
:---: |:---: |:---: |:---: |:---: |:---: |
[drmingdrmer](https://github.com/drmingdrmer) |[everpcpc](https://github.com/everpcpc) |[flaneur2020](https://github.com/flaneur2020) |[leiysky](https://github.com/leiysky) |[lichuang](https://github.com/lichuang) |[mergify[bot]](https://github.com/apps/mergify) |

[<img alt="sandflee" src="https://avatars.githubusercontent.com/u/5102100?v=4&s=117" width="117">](https://github.com/sandflee) |[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |[<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) |[<img alt="TszKitLo40" src="https://avatars.githubusercontent.com/u/18443139?v=4&s=117" width="117">](https://github.com/TszKitLo40) |[<img alt="usamoi" src="https://avatars.githubusercontent.com/u/79277854?v=4&s=117" width="117">](https://github.com/usamoi) |
:---: |:---: |:---: |:---: |:---: |:---: |
[sandflee](https://github.com/sandflee) |[soyeric128](https://github.com/soyeric128) |[sundy-li](https://github.com/sundy-li) |[TCeason](https://github.com/TCeason) |[TszKitLo40](https://github.com/TszKitLo40) |[usamoi](https://github.com/usamoi) |

[<img alt="wubx" src="https://avatars.githubusercontent.com/u/320680?v=4&s=117" width="117">](https://github.com/wubx) |[<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |[<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) |[<img alt="ZhiHanZ" src="https://avatars.githubusercontent.com/u/25170437?v=4&s=117" width="117">](https://github.com/ZhiHanZ) |[<img alt="zhyass" src="https://avatars.githubusercontent.com/u/34016424?v=4&s=117" width="117">](https://github.com/zhyass) |
:---: |:---: |:---: |:---: |:---: |:---: |
[wubx](https://github.com/wubx) |[Xuanwo](https://github.com/Xuanwo) |[xudong963](https://github.com/xudong963) |[youngsofun](https://github.com/youngsofun) |[ZhiHanZ](https://github.com/ZhiHanZ) |[zhyass](https://github.com/zhyass) |

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
