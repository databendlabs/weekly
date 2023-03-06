+++
title = "This week in Databend #69"
date = 2022-11-23
slug = "2022-11-23-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is a powerful cloud data warehouse. Built for elasticity and efficiency. Free and open. Also available in the cloud: <https://app.databend.com> .

## What's Changed

Below is a list of some major changes that we don't want you to miss.

### Exciting New Features :sparkles:

**multiple catalog**

- implement drop user defined catalog ([#8820](https://github.com/datafuselabs/databend/pull/8820))

**meta**

- add cli command to delete a key and to expire a key ([#8858](https://github.com/datafuselabs/databend/pull/8858))

**planner**

- support broadcast join ([#8779](https://github.com/datafuselabs/databend/pull/8779))
- extract or clause to push down potential predicates for join ([#8855](https://github.com/datafuselabs/databend/pull/8855))

**query**

- optimize count(Nullable(col)) ([#8805](https://github.com/datafuselabs/databend/pull/8805))
- support unset settings ([#8870](https://github.com/datafuselabs/databend/pull/8870))
- add distinct count aggregator and column distinct count ([#8825](https://github.com/datafuselabs/databend/pull/8825))

**storage**

- compact segments in reversed order ([#8806](https://github.com/datafuselabs/databend/pull/8793))

**new expression**

- geo functions ([#8481](https://github.com/datafuselabs/databend/pull/8481))
- add methods to get memory size of `ValueType`s ([#8875](https://github.com/datafuselabs/databend/pull/8875))
- add a global builtin function registry ([#8912](https://github.com/datafuselabs/databend/pull/8912))

### Code Refactor :tada:

**memory tracker**

- send pointer addresses to mem tracker ([#8879](https://github.com/datafuselabs/databend/pull/8879))
- add `StatBuffer` to provide fine grained mem allocation stats buffer ([#8880](https://github.com/datafuselabs/databend/pull/8880))

**new expression**

- allow sparse column id for constant folder ([#8821](https://github.com/datafuselabs/databend/pull/8821))

### Build/Testing/CI Infra Changes :electric_plug:

- separate sqllogic test with handler ([#8836](https://github.com/datafuselabs/databend/pull/8836))

### Thoughtful Bug Fix :wrench:

**base**

- support track processor async task ([#8871](https://github.com/datafuselabs/databend/pull/8871))

**http handler**

- avoid dropping runtime when task on it not finished ([#8894](https://github.com/datafuselabs/databend/pull/8894))

**query**

- remove useless memcpy when group long string ([#8851](https://github.com/datafuselabs/databend/pull/8851))

**storage**

- snapshot removed unsafely during meta commit failure ([#8850](https://github.com/datafuselabs/databend/pull/8850))

## News

Let's take a look at what's new at Datafuse Labs & Databend each week.

#### Preview of New Expressions: Geo Functions

By supporting Geo functions, Databend will have the ability to perform operations on geographic inputs.

With the merging of [#8481](https://github.com/datafuselabs/databend/pull/8481), geo functions like `great_circle_distance`, `geo_distance`, `great_circle_angle` and `point_in_ellipses` are already supported in the new expression system.

Databend is currently actively working on the migration to the new expressions, so keep an eye on the [expression](https://github.com/datafuselabs/databend/tree/expression) branch for progress!

**Learn More**

- [PR | geo functions](https://github.com/datafuselabs/databend/pull/8481)

#### Unset Settings

The merging of [#8870](https://github.com/datafuselabs/databend/pull/8870) brings the ability to unset settings to Databend

`UNSET` means to restore one or more settings to their default values. The settings will also be reset to the initial SESSION level if they were set to GLOBAL level.

```sql
UNSET <setting_name> | ( <setting_name> [, <setting_name> ...])
```

**Learn More**

- [PR | support unset settings](https://github.com/datafuselabs/databend/pull/8870)
- [Docs | UNSET](https://databend.rs/doc/sql-commands/setting-cmds/unset)

## Issues

Meet issues you may be interested in and try to solve it.

#### Add Compression Option to Create Table

Compression helps to reduce the size of databases. For IO-intensive loads, compression may provide some performance improvements.

Databend plans to introduce `compression` option in the `create table` statement and support compression algorithms such as LZ4 (default) and Snappy.

```sql
create table t1(a int) [compression="LZ4|SNAPPY"]
```

[Issue 8903: feat: add compression option to create table](https://github.com/datafuselabs/databend/issues/8903)

If you find it interesting, try to solve it or participate in discussions and PR reviews. Or you can click on <https://link.databend.rs/i-m-feeling-lucky> to pick up a good first issue, good luck!

## Changelogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.8.125-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.125-nightly)
- [v0.8.124-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.124-nightly)
- [v0.8.123-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.123-nightly)
- [v0.8.122-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.122-nightly)
- [v0.8.121-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.121-nightly)
- [v0.8.120-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.120-nightly)
- [v0.8.119-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.119-nightly)
- [v0.8.118-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.118-nightly)
- [v0.8.117-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.117-nightly)
- [v0.8.116-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.116-nightly)


## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) |[<img alt="ariesdevil" src="https://avatars.githubusercontent.com/u/7812909?v=4&s=117" width="117">](https://github.com/ariesdevil) |[<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="Chasen-Zhang" src="https://avatars.githubusercontent.com/u/15354455?v=4&s=117" width="117">](https://github.com/Chasen-Zhang) |[<img alt="ClSlaid" src="https://avatars.githubusercontent.com/u/44747719?v=4&s=117" width="117">](https://github.com/ClSlaid) |
:---: |:---: |:---: |:---: |:---: |:---: |
[andylokandy](https://github.com/andylokandy) |[ariesdevil](https://github.com/ariesdevil) |[b41sh](https://github.com/b41sh) |[BohuTANG](https://github.com/BohuTANG) |[Chasen-Zhang](https://github.com/Chasen-Zhang) |[ClSlaid](https://github.com/ClSlaid) |

[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |[<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |[<img alt="everpcpc" src="https://avatars.githubusercontent.com/u/1808802?v=4&s=117" width="117">](https://github.com/everpcpc) |[<img alt="kemingy" src="https://avatars.githubusercontent.com/u/12974685?v=4&s=117" width="117">](https://github.com/kemingy) |[<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |
:---: |:---: |:---: |:---: |:---: |:---: |
[dantengsky](https://github.com/dantengsky) |[drmingdrmer](https://github.com/drmingdrmer) |[everpcpc](https://github.com/everpcpc) |[kemingy](https://github.com/kemingy) |[lichuang](https://github.com/lichuang) |[mergify[bot]](https://github.com/apps/mergify) |

[<img alt="RinChanNOWWW" src="https://avatars.githubusercontent.com/u/33975039?v=4&s=117" width="117">](https://github.com/RinChanNOWWW) |[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |[<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) |[<img alt="wubx" src="https://avatars.githubusercontent.com/u/320680?v=4&s=117" width="117">](https://github.com/wubx) |[<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |
:---: |:---: |:---: |:---: |:---: |:---: |
[RinChanNOWWW](https://github.com/RinChanNOWWW) |[soyeric128](https://github.com/soyeric128) |[sundy-li](https://github.com/sundy-li) |[TCeason](https://github.com/TCeason) |[wubx](https://github.com/wubx) |[Xuanwo](https://github.com/Xuanwo) |

[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |[<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) |[<img alt="zhang2014" src="https://avatars.githubusercontent.com/u/8087042?v=4&s=117" width="117">](https://github.com/zhang2014) |[<img alt="zhyass" src="https://avatars.githubusercontent.com/u/34016424?v=4&s=117" width="117">](https://github.com/zhyass) | | |
:---: |:---: |:---: |:---: |:---: |:---: |
[xudong963](https://github.com/xudong963) |[youngsofun](https://github.com/youngsofun) |[zhang2014](https://github.com/zhang2014) |[zhyass](https://github.com/zhyass) | | |

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
