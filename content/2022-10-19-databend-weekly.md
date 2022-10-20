+++
title = "This week in Databend #64"
date = 2022-10-19
slug = "2022-10-19-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is a powerful cloud data warehouse. Built for elasticity and efficiency. Free and open. Also available in the cloud: <https://app.databend.com> .

## What's Changed

Below is a list of some major changes that we don't want you to miss.

### Exciting New Features :sparkles:

**meta**

- add API `list_all_tables` ([#8254](https://github.com/datafuselabs/databend/pull/8254))

**jsonb**

- jsonb functions support json string ([#8222](https://github.com/datafuselabs/databend/pull/8222))

**planner**

- optimize right join ([#8204](https://github.com/datafuselabs/databend/pull/8204))
- optimize subquery by deleting redundancy join ([#8264](https://github.com/datafuselabs/databend/pull/8264))

**query**

- parallel read of ndjson in copy ([#8199](https://github.com/datafuselabs/databend/pull/8199))

**storage**

- add share table query ([#8198](https://github.com/datafuselabs/databend/pull/8198))
- add limit push down to fuse_snapshot ([#8201](https://github.com/datafuselabs/databend/pull/8201))
- retry fuse table write operations ([#8244](https://github.com/datafuselabs/databend/pull/8244))

**new expression**

- migrate array func to func-v2 ([#8169](https://github.com/datafuselabs/databend/pull/8169))
- support cast between date/timestamp and string ([#8147](https://github.com/datafuselabs/databend/pull/8147))
- implement arithmetic functions for `Date` and `Timestamp` ([#8202](https://github.com/datafuselabs/databend/pull/8202))
- migrate date to number functions to v2 ([#8257](https://github.com/datafuselabs/databend/pull/8257))
- migrate datetime rounder functions to v2 ([#8281](https://github.com/datafuselabs/databend/pull/8281))

### Code Refactor :tada:

**meta**

- refactor the sled-store , remove unnecessary methods ([#8176](https://github.com/datafuselabs/databend/pull/8176), [#8190](https://github.com/datafuselabs/databend/pull/8190) & [#8203](https://github.com/datafuselabs/databend/pull/8203))

**new expression**

- improve `combine_nullable` ([#8191](https://github.com/datafuselabs/databend/pull/8191))

**planner**

- refactor hash join ([#8173](https://github.com/datafuselabs/databend/pull/8173))

### Thoughtful Bug Fix :wrench:

**meta**

- `AsKeySpace::clear()` should not entire sled tree ([#8288](https://github.com/datafuselabs/databend/pull/8288))

**sessions**

- fix dead lock when force kill sessions ([#8242](https://github.com/datafuselabs/databend/pull/8242))

**pipelines**

- support abort for semi or anti join, right join, left join, etc. ([#8165](https://github.com/datafuselabs/databend/pull/8165), [#8212](https://github.com/datafuselabs/databend/pull/8212), [#8245](https://github.com/datafuselabs/databend/pull/8245), etc.)

**query**

- query version is incorrect ([#8272](https://github.com/datafuselabs/databend/pull/8272))

**storage**

- fix undrop not working as expected if table is dropped by using `drop table t all` ([#8177](https://github.com/datafuselabs/databend/pull/8177))
- fix dead lock caused by incorrect semaphore permit control ([#8226](https://github.com/datafuselabs/databend/pull/8226))

## News

Let's take a look at what's new at Datafuse Labs & Databend each week.

**Add cache support for Databend Query**

In past discussions (Issues: [#6786](https://github.com/datafuselabs/databend/pull/6786)), Databend has planned to introduce a new cache solution to help better handle hot data.

We have recently tried to push this forward and have now implemented two cache layers in OpenDAL for metadata and content data respectively, and introduced a `CacheOperator` to Databend.

Next, we will consider using OpenDAL to take over Databend's existing in-memory cache, and then tune it according to practice.

**Learn More**

- [RFC | Cache](https://databend.rs/doc/contributing/rfcs/cache)
- [Tracking issue for Cache Support in databend](https://github.com/datafuselabs/databend/issues/6803)

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.8.79-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.79-nightly)
- [v0.8.78-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.78-nightly)
- [v0.8.77-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.77-nightly)
- [v0.8.76-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.76-nightly)
- [v0.8.75-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.75-nightly)
- [v0.8.74-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.74-nightly)
- [v0.8.73-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.73-nightly)
- [v0.8.72-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.72-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) |[<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |[<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |[<img alt="everpcpc" src="https://avatars.githubusercontent.com/u/1808802?v=4&s=117" width="117">](https://github.com/everpcpc) |
:---: |:---: |:---: |:---: |:---: |:---: |
[andylokandy](https://github.com/andylokandy) |[b41sh](https://github.com/b41sh) |[BohuTANG](https://github.com/BohuTANG) |[dantengsky](https://github.com/dantengsky) |[drmingdrmer](https://github.com/drmingdrmer) |[everpcpc](https://github.com/everpcpc) |

[<img alt="leiysky" src="https://avatars.githubusercontent.com/u/22445410?v=4&s=117" width="117">](https://github.com/leiysky) |[<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |[<img alt="PsiACE" src="https://avatars.githubusercontent.com/u/36896360?v=4&s=117" width="117">](https://github.com/PsiACE) |[<img alt="RinChanNOWWW" src="https://avatars.githubusercontent.com/u/33975039?v=4&s=117" width="117">](https://github.com/RinChanNOWWW) |[<img alt="sandflee" src="https://avatars.githubusercontent.com/u/5102100?v=4&s=117" width="117">](https://github.com/sandflee) |
:---: |:---: |:---: |:---: |:---: |:---: |
[leiysky](https://github.com/leiysky) |[lichuang](https://github.com/lichuang) |[mergify[bot]](https://github.com/apps/mergify) |[PsiACE](https://github.com/PsiACE) |[RinChanNOWWW](https://github.com/RinChanNOWWW) |[sandflee](https://github.com/sandflee) |

[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |[<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) |[<img alt="wubx" src="https://avatars.githubusercontent.com/u/320680?v=4&s=117" width="117">](https://github.com/wubx) |[<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |
:---: |:---: |:---: |:---: |:---: |:---: |
[soyeric128](https://github.com/soyeric128) |[sundy-li](https://github.com/sundy-li) |[TCeason](https://github.com/TCeason) |[wubx](https://github.com/wubx) |[Xuanwo](https://github.com/Xuanwo) |[xudong963](https://github.com/xudong963) |

[<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) |[<img alt="zhang2014" src="https://avatars.githubusercontent.com/u/8087042?v=4&s=117" width="117">](https://github.com/zhang2014) |[<img alt="zhyass" src="https://avatars.githubusercontent.com/u/34016424?v=4&s=117" width="117">](https://github.com/zhyass) | | | |
:---: |:---: |:---: |:---: |:---: |:---: |
[youngsofun](https://github.com/youngsofun) |[zhang2014](https://github.com/zhang2014) |[zhyass](https://github.com/zhyass) | | | |

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
