+++
title = "This week in Databend #61"
date = 2022-09-28
slug = "2022-09-28-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## What's Changed

Below is a list of some major changes that we don't want you to miss.

### Exciting New Features :sparkles:

**share**

- add share database ([#7932](https://github.com/datafuselabs/databend/pull/7932))

**meta**

- add catalog in `TableMeta` ([#7835](https://github.com/datafuselabs/databend/pull/7835))

**planner**

- support full outer join ([#7783](https://github.com/datafuselabs/databend/pull/7783))
- support right semi/anti join ([#7909](https://github.com/datafuselabs/databend/pull/7909))

**index**

- add XOR filter ([#7860](https://github.com/datafuselabs/databend/pull/7860))
- enable XOR filter index ([#7870](https://github.com/datafuselabs/databend/pull/7870))

**jsonb**

- add jsonb builtin functions build_array and compare ([#7802](https://github.com/datafuselabs/databend/pull/7802))

**query**

- check `memory_size()` for building data block ([#7927](https://github.com/datafuselabs/databend/pull/7927))
- support unload multi files into stage ([#7910](https://github.com/datafuselabs/databend/pull/7910))

**new expression**

- add `try_downcast_builder` for `ValueType` ([#7838](https://github.com/datafuselabs/databend/pull/7838))
- migrate min/max/any functions ([#7787](https://github.com/datafuselabs/databend/pull/7787))
- migrate aggregation covariance functions ([#7926](https://github.com/datafuselabs/databend/pull/7926))

### Code Refactor :tada:

**index**

- split index `Filter` trait to two trait: `FilterBuilder` and `Filter` ([#7937](https://github.com/datafuselabs/databend/pull/7937))

**interpreter**

- try remove `InterceptorInterpreter` ([#7796](https://github.com/datafuselabs/databend/pull/7796))

**query**

- use new `InputFormat`
  - [streaming load #7769](https://github.com/datafuselabs/databend/pull/7769)
  - [clickhouse handler #7843](https://github.com/datafuselabs/databend/pull/7843)
- use `InEvaluator` to reuse the hashset ([#7814](https://github.com/datafuselabs/databend/pull/7814))
- rename `Expression` to `LegacyExpression` and move out ([#7810](https://github.com/datafuselabs/databend/pull/7810))

**new expression**

-  manually vectorize `not()` and `xor()` ([#7801](https://github.com/datafuselabs/databend/pull/7801))

### Thoughtful Bug Fix :wrench:

**storage**

- fix oom when recluster ([#7791](https://github.com/datafuselabs/databend/pull/7791))
- warmup segment cache during insertion [#7803](https://github.com/datafuselabs/databend/pull/7803))
- use shortcut path if filter vector is empty during pruning [#7877](https://github.com/datafuselabs/databend/pull/7877))

**compatibility**

- fix mysql pt-archive compatibility [#7853](https://github.com/datafuselabs/databend/pull/7853))

## News

Let's take a look at what's new at Datafuse Labs & Databend each week.

**External Location for Fuse Engine**

Problems often encountered in the past with cloud services include the fact that data files are often invisible to the user, making it very difficult to migrate back locally. In addition, there is a lack of tools to help exchange data in the Big Data ecosystem and to better exploit the value in the data. In response to this need Databend has proposed an ISSUE: *External Location for Fuse Engine*.

This is part of the plan for *Databend as Lakehouse* and once this support is complete, users will be able to use Databend to manage the lifecycle of their data and perform data governance tasks, as well as having access to key features including Data Share and Time Travel.

Learn more:
- External Location for Fuse Engine: <https://github.com/datafuselabs/databend/issues/7297>
- Databend as Lakehouse: <https://github.com/datafuselabs/databend/issues/7592>

**Databend Automated Testing with SQLancer**

*Databend Automated Testing with SQLancer* is one of the Databend community's projects in the Open Source Promotion Plan 2022. [@hanyisong](https://github.com/hanyisong) helped us with this important work, which has now been merged into [sqlancer/sqlancer](https://github.com/sqlancer/sqlancer) repository.

SQLancer (Synthesized Query Lancer) is a tool to automatically test Database Management Systems (DBMS) in order to find logic bugs in their implementation.

Learn more at <https://github.com/sqlancer/sqlancer/pull/568>

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.8.53-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.53-nightly)
- [v0.8.52-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.52-nightly)
- [v0.8.51-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.51-nightly)
- [v0.8.50-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.50-nightly)
- [v0.8.49-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.49-nightly)
- [v0.8.48-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.48-nightly)
- [v0.8.47-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.47-nightly)
- [v0.8.46-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.46-nightly)
- [v0.8.45-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.45-nightly)
- [v0.8.44-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.44-nightly)
- [v0.8.43-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.43-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) |[<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="ClSlaid" src="https://avatars.githubusercontent.com/u/44747719?v=4&s=117" width="117">](https://github.com/ClSlaid) |[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |[<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |
:---: |:---: |:---: |:---: |:---: |:---: |
[andylokandy](https://github.com/andylokandy) |[b41sh](https://github.com/b41sh) |[BohuTANG](https://github.com/BohuTANG) |[ClSlaid](https://github.com/ClSlaid) |[dantengsky](https://github.com/dantengsky) |[drmingdrmer](https://github.com/drmingdrmer) |

[<img alt="everpcpc" src="https://avatars.githubusercontent.com/u/1808802?v=4&s=117" width="117">](https://github.com/everpcpc) |[<img alt="flaneur2020" src="https://avatars.githubusercontent.com/u/129800?v=4&s=117" width="117">](https://github.com/flaneur2020) |[<img alt="hanyisong" src="https://avatars.githubusercontent.com/u/71937758?v=4&s=117" width="117">](https://github.com/hanyisong) |[<img alt="leiysky" src="https://avatars.githubusercontent.com/u/22445410?v=4&s=117" width="117">](https://github.com/leiysky) |[<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |
:---: |:---: |:---: |:---: |:---: |:---: |
[everpcpc](https://github.com/everpcpc) |[flaneur2020](https://github.com/flaneur2020) |[hanyisong](https://github.com/hanyisong) |[leiysky](https://github.com/leiysky) |[lichuang](https://github.com/lichuang) |[mergify[bot]](https://github.com/apps/mergify) |

[<img alt="PsiACE" src="https://avatars.githubusercontent.com/u/36896360?v=4&s=117" width="117">](https://github.com/PsiACE) |[<img alt="RinChanNOWWW" src="https://avatars.githubusercontent.com/u/33975039?v=4&s=117" width="117">](https://github.com/RinChanNOWWW) |[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |[<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) |[<img alt="TennyZhuang" src="https://avatars.githubusercontent.com/u/9161438?v=4&s=117" width="117">](https://github.com/TennyZhuang) |
:---: |:---: |:---: |:---: |:---: |:---: |
[PsiACE](https://github.com/PsiACE) |[RinChanNOWWW](https://github.com/RinChanNOWWW) |[soyeric128](https://github.com/soyeric128) |[sundy-li](https://github.com/sundy-li) |[TCeason](https://github.com/TCeason) |[TennyZhuang](https://github.com/TennyZhuang) |

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
- [I'm feeling lucky](https://link.databend.rs/i-m-feeling-lucky) (Pick up a good first issue now!)
