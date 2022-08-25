+++
title = "This week in Databend #56"
date = 2022-08-24
slug = "2022-08-24-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

**share**

- add show grant on object and show grant of share sql ([#7181](https://github.com/datafuselabs/databend/pull/7181))

**storage**

- Google Cloud Storage as storage backend for databend ([#7171](https://github.com/datafuselabs/databend/pull/7171) & [#7197](https://github.com/datafuselabs/databend/pull/7197))

**planner**

- support settings set sql_dialect ([#7175](https://github.com/datafuselabs/databend/pull/7175))
- support union/union all ([#7160](https://github.com/datafuselabs/databend/pull/7160))

**query**

- support datetime format ([#7126](https://github.com/datafuselabs/databend/pull/7126))
- introduce custom allocator for HashTable ([#7221](https://github.com/datafuselabs/databend/pull/7221))

**new expression**

- add function-v2 `concat`/`concat_ws` ([#7167](https://github.com/datafuselabs/databend/pull/7167))
- migrate `bin`, `oct`, `hex`, and `unhex` ([#7219](https://github.com/datafuselabs/databend/pull/7219))

### Improvement

**meta**

- simplify `open_create_boot()` ([#7212](https://github.com/datafuselabs/databend/pull/7212))
- improve join-cluster ([#7198](https://github.com/datafuselabs/databend/pull/7198))

**storage**

- use pipline to refactor compact ([#7244](https://github.com/datafuselabs/databend/pull/7244))

**sessions**

- decoupling session manager and other managers ([#7093](https://github.com/datafuselabs/databend/pull/7093))

**planner**

- use Evaluator to refactor insert ([#7201](https://github.com/datafuselabs/databend/pull/7201))

**workspace**

- reorg workspace, distinguish between common and query ([#7188](https://github.com/datafuselabs/databend/pull/7188))

### Build/Testing/CI

- add tpch stateless test of factor 0.1 ([#6739](https://github.com/datafuselabs/databend/pull/6739))
- logictest support regex with new query type R ([#7230](https://github.com/datafuselabs/databend/pull/7230))

### Bug fixes

**parser**

- fix parse float with E failed ([#7186](https://github.com/datafuselabs/databend/pull/7186))

**functions**

- fix function if result incorrect bug ([#7239](https://github.com/datafuselabs/databend/pull/7239))

**service**

- rewrite desc stage query ([#7205](https://github.com/datafuselabs/databend/pull/7205))
- fix statements `desc share` and `show shares` may have resultset ([#7177](https://github.com/datafuselabs/databend/pull/7177))

**cluster**

- remove invalid cluster node in current query ([#7246](https://github.com/datafuselabs/databend/pull/7246))

**new expression**

- make `multi_if` accept null conditions ([#7226](https://github.com/datafuselabs/databend/pull/7226))

## News

Let's take a look at what's new at Datafuse Labs & Databend each week.

**Databend 0.8.0 Is Out!**

Development of Databend v0.8 started on March 28th, with 5000+ commits and 4600+ file changes. In the last 5 months, the community of 120+ contributors added 420K lines of code and removed 160K lines, equivalent to rewriting Databend once. In this release, the community made significant improvements to the SQL Planner framework and migrated all SQL statements to the new Planner, providing full JOIN and subquery support.

Learn more: <https://databend.rs/blog/databend-release-v0.8>

**Deploy Databend on Kubernetes**

Databend now provides official K8s deployment documentation showing how to install and configure a Databend query cluster on Kubernetes with MinIO as the storage backend.

In addition to an easy to follow 4 step deployment guide, it also covers how to deploy a Databend cluster using the official [Helm Charts](https://github.com/datafuselabs/helm-charts).

Learn more: <https://databend.rs/doc/deploy/deploying-databend-on-kubernetes>

**Using Databend as a Destination for Airbyte**

* Airbyte is an open-source data integration platform that syncs data from applications, APIs & databases to data warehouses lakes & DBs.
* You could load data from any airbyte source to Databend.

Currently we implemented an experimental airbyte destination allow you to send data from your airbyte source to databend.

Learn more: <https://databend.rs/doc/integrations/data-tool/airbyte>

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.8.7-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.7-nightly)
- [v0.8.6-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.6-nightly)
- [v0.8.5-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.5-nightly)
- [v0.8.4-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.4-nightly)
- [v0.8.3-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.3-nightly)
- [v0.8.2-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.2-nightly)
- [v0.8.1-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.1-nightly)
- [v0.8.0-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.0-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) |[<img alt="ariesdevil" src="https://avatars.githubusercontent.com/u/7812909?v=4&s=117" width="117">](https://github.com/ariesdevil) |[<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="ClSlaid" src="https://avatars.githubusercontent.com/u/44747719?v=4&s=117" width="117">](https://github.com/ClSlaid) |[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |
:---: |:---: |:---: |:---: |:---: |:---: |
[andylokandy](https://github.com/andylokandy) |[ariesdevil](https://github.com/ariesdevil) |[b41sh](https://github.com/b41sh) |[BohuTANG](https://github.com/BohuTANG) |[ClSlaid](https://github.com/ClSlaid) |[dantengsky](https://github.com/dantengsky) |

[<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |[<img alt="edPanda" src="https://avatars.githubusercontent.com/u/47907932?v=4&s=117" width="117">](https://github.com/edPanda) |[<img alt="flaneur2020" src="https://avatars.githubusercontent.com/u/129800?v=4&s=117" width="117">](https://github.com/flaneur2020) |[<img alt="gaoxinge" src="https://avatars.githubusercontent.com/u/16648345?v=4&s=117" width="117">](https://github.com/gaoxinge) |[<img alt="leiysky" src="https://avatars.githubusercontent.com/u/22445410?v=4&s=117" width="117">](https://github.com/leiysky) |[<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |
:---: |:---: |:---: |:---: |:---: |:---: |
[drmingdrmer](https://github.com/drmingdrmer) |[edPanda](https://github.com/edPanda) |[flaneur2020](https://github.com/flaneur2020) |[gaoxinge](https://github.com/gaoxinge) |[leiysky](https://github.com/leiysky) |[lichuang](https://github.com/lichuang) |

[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |[<img alt="PsiACE" src="https://avatars.githubusercontent.com/u/36896360?v=4&s=117" width="117">](https://github.com/PsiACE) |[<img alt="RinChanNOWWW" src="https://avatars.githubusercontent.com/u/33975039?v=4&s=117" width="117">](https://github.com/RinChanNOWWW) |[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |[<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) |
:---: |:---: |:---: |:---: |:---: |:---: |
[mergify[bot]](https://github.com/apps/mergify) |[PsiACE](https://github.com/PsiACE) |[RinChanNOWWW](https://github.com/RinChanNOWWW) |[soyeric128](https://github.com/soyeric128) |[sundy-li](https://github.com/sundy-li) |[TCeason](https://github.com/TCeason) |

[<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |[<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) |[<img alt="ZeaLoVe" src="https://avatars.githubusercontent.com/u/10904090?v=4&s=117" width="117">](https://github.com/ZeaLoVe) |[<img alt="zhang2014" src="https://avatars.githubusercontent.com/u/8087042?v=4&s=117" width="117">](https://github.com/zhang2014) |[<img alt="ZhiHanZ" src="https://avatars.githubusercontent.com/u/25170437?v=4&s=117" width="117">](https://github.com/ZhiHanZ) |
:---: |:---: |:---: |:---: |:---: |:---: |
[Xuanwo](https://github.com/Xuanwo) |[xudong963](https://github.com/xudong963) |[youngsofun](https://github.com/youngsofun) |[ZeaLoVe](https://github.com/ZeaLoVe) |[zhang2014](https://github.com/zhang2014) |[ZhiHanZ](https://github.com/ZhiHanZ) |

[<img alt="zhyass" src="https://avatars.githubusercontent.com/u/34016424?v=4&s=117" width="117">](https://github.com/zhyass) | | | | | |
:---: |:---: |:---: |:---: |:---: |:---: |
[zhyass](https://github.com/zhyass) | | | | | |

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
