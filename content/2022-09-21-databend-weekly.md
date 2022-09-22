+++
title = "This week in Databend #60"
date = 2022-09-21
slug = "2022-09-21-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## What's Changed

Below is a list of some major changes that we don't want you to miss.

### Exciting New Features :sparkles:

**planner**

- support independent right join ([#7634](https://github.com/datafuselabs/databend/pull/7634))

**storage**

- delay start the worker for simple select hive query ([#7595](https://github.com/datafuselabs/databend/pull/7595))
- get all parquet file list for fuse engine ([#7631](https://github.com/datafuselabs/databend/pull/7631))

**query**

- unify pipeline for all inputs with format ([#7613](https://github.com/datafuselabs/databend/pull/7613))
- add security token support for AWS S3 ([#7758](https://github.com/datafuselabs/databend/pull/7758))
- implement copy from ipfs ([#7729](https://github.com/datafuselabs/databend/pull/7729))
- add `and_filters` function ([#7712](https://github.com/datafuselabs/databend/pull/7712))
- idempotent-copy file ([#7719](https://github.com/datafuselabs/databend/pull/7719))
- support jsonb format ([#7522](https://github.com/datafuselabs/databend/pull/7522))
- add select from share db and show tables from share db SQL support ([#7640](https://github.com/datafuselabs/databend/pull/7640))

**cluster**

- auto discover ip when ip is unspecified or loop back ([#7617](https://github.com/datafuselabs/databend/pull/7617))

**new expression**

- migrate regexp func to func-v2 ([#7459](https://github.com/datafuselabs/databend/pull/7459))

### Code Refactor :tada:

**meta**

- refine error usage ([#7633](https://github.com/datafuselabs/databend/pull/7633), [#7647](https://github.com/datafuselabs/databend/pull/7647) and more)

**planner**

- Old Planner Never See Again (Part 2) ([#7767](https://github.com/datafuselabs/databend/pull/7767))

**interpreter**

- remove sendable stream in interpreter ([#7582](https://github.com/datafuselabs/databend/pull/7582))

**processor**

- save pipeline executor into query context ([#7722](https://github.com/datafuselabs/databend/pull/7722))

**query**

- improve in function ([#7645](https://github.com/datafuselabs/databend/pull/7645))
- push all filters to prewhere and prune columns for it ([#7646](https://github.com/datafuselabs/databend/pull/7646))
- streaming load use planner v2 ([#7756](https://github.com/datafuselabs/databend/pull/7756))

**new expression**

- make unit test goldenfile only display the used columns ([#7739](https://github.com/datafuselabs/databend/pull/7739))

### Thoughtful Bug Fix :wrench:

**tracing**

- fix: Jaeger layer not filtered ([#7621](https://github.com/datafuselabs/databend/pull/7621))

**planner**

- fix EXPLAIN AST for invalid query ([#7737](https://github.com/datafuselabs/databend/pull/7737))
- fix left join returns wrong answer ([#7662](https://github.com/datafuselabs/databend/pull/7662))

**settings**

- fix server hang when concurrent requests http auth ([#7733](https://github.com/datafuselabs/databend/pull/7733))

**query**

- fix cast deterministic error ([#7686](https://github.com/datafuselabs/databend/pull/7686))

**cluster**

- add statistics receiver runtime ([#7679](https://github.com/datafuselabs/databend/pull/7679))

## News

Let's take a look at what's new at Datafuse Labs & Databend each week.

**Designing and Using JSON in Databend**

JSON (JavaScript Object Notation) is a commonly used semi-structured data type. With the self-describing schema structure, JSON can hold all data types. The JSON data shared by various platforms through open interfaces, and the public datasets and application logs stored in JSON format. 

Databend supports structured data types, as well as JSON. This post dives deeply into the JSON data type in Databend.

Learn more at <https://databend.rs/blog/json-datatypes>

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.8.42-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.42-nightly)
- [v0.8.41-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.41-nightly)
- [v0.8.40-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.40-nightly)
- [v0.8.39-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.39-nightly)
- [v0.8.38-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.38-nightly)
- [v0.8.37-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.37-nightly)
- [v0.8.36-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.36-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) |[<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="ClSlaid" src="https://avatars.githubusercontent.com/u/44747719?v=4&s=117" width="117">](https://github.com/ClSlaid) |[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |[<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |
:---: |:---: |:---: |:---: |:---: |:---: |
[andylokandy](https://github.com/andylokandy) |[b41sh](https://github.com/b41sh) |[BohuTANG](https://github.com/BohuTANG) |[ClSlaid](https://github.com/ClSlaid) |[dantengsky](https://github.com/dantengsky) |[drmingdrmer](https://github.com/drmingdrmer) |

[<img alt="everpcpc" src="https://avatars.githubusercontent.com/u/1808802?v=4&s=117" width="117">](https://github.com/everpcpc) |[<img alt="hanyisong" src="https://avatars.githubusercontent.com/u/71937758?v=4&s=117" width="117">](https://github.com/hanyisong) |[<img alt="leiysky" src="https://avatars.githubusercontent.com/u/22445410?v=4&s=117" width="117">](https://github.com/leiysky) |[<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |[<img alt="PsiACE" src="https://avatars.githubusercontent.com/u/36896360?v=4&s=117" width="117">](https://github.com/PsiACE) |
:---: |:---: |:---: |:---: |:---: |:---: |
[everpcpc](https://github.com/everpcpc) |[hanyisong](https://github.com/hanyisong) |[leiysky](https://github.com/leiysky) |[lichuang](https://github.com/lichuang) |[mergify[bot]](https://github.com/apps/mergify) |[PsiACE](https://github.com/PsiACE) |

[<img alt="RinChanNOWWW" src="https://avatars.githubusercontent.com/u/33975039?v=4&s=117" width="117">](https://github.com/RinChanNOWWW) |[<img alt="sandflee" src="https://avatars.githubusercontent.com/u/5102100?v=4&s=117" width="117">](https://github.com/sandflee) |[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |[<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) |[<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |
:---: |:---: |:---: |:---: |:---: |:---: |
[RinChanNOWWW](https://github.com/RinChanNOWWW) |[sandflee](https://github.com/sandflee) |[soyeric128](https://github.com/soyeric128) |[sundy-li](https://github.com/sundy-li) |[TCeason](https://github.com/TCeason) |[Xuanwo](https://github.com/Xuanwo) |

[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |[<img alt="xychu" src="https://avatars.githubusercontent.com/u/936394?v=4&s=117" width="117">](https://github.com/xychu) |[<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) |[<img alt="zhang2014" src="https://avatars.githubusercontent.com/u/8087042?v=4&s=117" width="117">](https://github.com/zhang2014) |[<img alt="zhyass" src="https://avatars.githubusercontent.com/u/34016424?v=4&s=117" width="117">](https://github.com/zhyass) | |
:---: |:---: |:---: |:---: |:---: |:---: |
[xudong963](https://github.com/xudong963) |[xychu](https://github.com/xychu) |[youngsofun](https://github.com/youngsofun) |[zhang2014](https://github.com/zhang2014) |[zhyass](https://github.com/zhyass) | |

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
