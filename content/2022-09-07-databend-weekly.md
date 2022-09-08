+++
title = "This week in Databend #58"
date = 2022-09-07
slug = "2022-09-07-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

**meta**

- add metrics `last_seq` ([#7429](https://github.com/datafuselabs/databend/pull/7429))

**query**

- add Users in config file ([#7477](https://github.com/datafuselabs/databend/pull/7477))
- avoid full tokenizer in parsing insert statement ([#7485](https://github.com/datafuselabs/databend/pull/7485))
- make aggregate function return null on empty set ([#7412](https://github.com/datafuselabs/databend/pull/7412))
- support using `DEFAULT` to fill default value in `INSERT` statement ([#7436](https://github.com/datafuselabs/databend/pull/7436))

**storage**

- keep a hint of last snapshot location while committing new snapshot ([#7418](https://github.com/datafuselabs/databend/pull/7418))

**share**

- save share config whenever share meta has been changed ([#7430](https://github.com/datafuselabs/databend/pull/7430))

**planner**

- implement join reordering ([#7507](https://github.com/datafuselabs/databend/pull/7507))
- fold simple count aggregation ([#7414](https://github.com/datafuselabs/databend/pull/7414))

**new expression**

- migrate math functions to function-v2 ([#7514](https://github.com/datafuselabs/databend/pull/7514))
- migrate string functions to function-v2 ([#7425](https://github.com/datafuselabs/databend/pull/7425))
- add new aggregate function `ANY` ([#7419](https://github.com/datafuselabs/databend/pull/7419))

**http handler**

- the first request no longer wait for query to start ([#7410](https://github.com/datafuselabs/databend/pull/7410))

### Improvement

**meta**

- error handling for upsert-kv [#7503](https://github.com/datafuselabs/databend/pull/7503)
- improve error usage ([#7479](https://github.com/datafuselabs/databend/pull/7479), [#7490](https://github.com/datafuselabs/databend/pull/7490), [#7506](https://github.com/datafuselabs/databend/pull/7506) & [#7512](https://github.com/datafuselabs/databend/pull/7512))

**sessions**

- remove query context ref count ([#7480](https://github.com/datafuselabs/databend/pull/7480))
- eliminate strong ref for sessions manager and session ([#7487](https://github.com/datafuselabs/databend/pull/7487))

**storage**

- enable chunked reading of hive table ([#7373](https://github.com/datafuselabs/databend/pull/7373))

### Bug fixes

**planner**

- column reference is ambiguous in using ([#7431](https://github.com/datafuselabs/databend/pull/7431))

**query**

- fix insert format size ([#7441](https://github.com/datafuselabs/databend/pull/7441))
- type_checker return type support nullable ([#7504](https://github.com/datafuselabs/databend/pull/7504))
- fix hashset capacity overflow ([#7513](https://github.com/datafuselabs/databend/pull/7513))
- cancel task when pipeline is finished ([#7515](https://github.com/datafuselabs/databend/pull/7515))

**cluster**

- fix performance degradation in cluster mode ([#7451](https://github.com/datafuselabs/databend/pull/7451))

**storege**

- fix hive table location not match partition location ([#7398](https://github.com/datafuselabs/databend/pull/7398))
- fix block pruning panic ([#7492](https://github.com/datafuselabs/databend/pull/7492))

**new expression**

- support serde for `Scalar::Array` ([#7421](https://github.com/datafuselabs/databend/pull/7421))

## News

Let's take a look at what's new at Datafuse Labs & Databend each week.

**Deploy Databend with KubeSphere**

Databend officially provides a Helm repository, so you can easily deploy Databend using KubeSphere.

1. In your workspace, go to **App Repositories** under **App Management**, and then click **Add**.
2. In the dialog that appears, specify the app repository name and add Databend repository URL. Enter <https://charts.databend.rs> .
3. After you specify required fields, click Validate to verify the URL. You will see a green check mark next to the URL if it is available and click OK to finish.

After this, Databend has been added to the KubeSphere App Repositories. You can refer to [Deploy Apps from App Templates](https://kubesphere.io/docs/v3.3/project-user-guide/application/deploy-app-from-template/) to complete the deployment.

**New release for OpenDAL: Access data freely, painless, and efficiently**

OpenDAL v0.15.0 has been released with new features 🤩 :

- FTP Support by [@ArberSephirotheca](https://github.com/ArberSephirotheca)
- Observability Improvement by [@ClSlaid](https://github.com/ClSlaid)
- Blocking API Support by [@Xuanwo](https://github.com/Xuanwo)

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.8.28-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.28-nightly)
- [v0.8.27-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.27-nightly)
- [v0.8.26-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.26-nightly)
- [v0.8.25-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.25-nightly)
- [v0.8.24-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.24-nightly)
- [v0.8.23-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.23-nightly)
- [v0.8.22-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.22-nightly)
- [v0.8.21-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.21-nightly)
- [v0.8.20-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.20-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) |[<img alt="ariesdevil" src="https://avatars.githubusercontent.com/u/7812909?v=4&s=117" width="117">](https://github.com/ariesdevil) |[<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="Chasen-Zhang" src="https://avatars.githubusercontent.com/u/15354455?v=4&s=117" width="117">](https://github.com/Chasen-Zhang) |[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |
:---: |:---: |:---: |:---: |:---: |:---: |
[andylokandy](https://github.com/andylokandy) |[ariesdevil](https://github.com/ariesdevil) |[b41sh](https://github.com/b41sh) |[BohuTANG](https://github.com/BohuTANG) |[Chasen-Zhang](https://github.com/Chasen-Zhang) |[dantengsky](https://github.com/dantengsky) |

[<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |[<img alt="hanyisong" src="https://avatars.githubusercontent.com/u/71937758?v=4&s=117" width="117">](https://github.com/hanyisong) |[<img alt="leiysky" src="https://avatars.githubusercontent.com/u/22445410?v=4&s=117" width="117">](https://github.com/leiysky) |[<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |[<img alt="PsiACE" src="https://avatars.githubusercontent.com/u/36896360?v=4&s=117" width="117">](https://github.com/PsiACE) |
:---: |:---: |:---: |:---: |:---: |:---: |
[drmingdrmer](https://github.com/drmingdrmer) |[hanyisong](https://github.com/hanyisong) |[leiysky](https://github.com/leiysky) |[lichuang](https://github.com/lichuang) |[mergify[bot]](https://github.com/apps/mergify) |[PsiACE](https://github.com/PsiACE) |

[<img alt="RinChanNOWWW" src="https://avatars.githubusercontent.com/u/33975039?v=4&s=117" width="117">](https://github.com/RinChanNOWWW) |[<img alt="sandflee" src="https://avatars.githubusercontent.com/u/5102100?v=4&s=117" width="117">](https://github.com/sandflee) |[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |[<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) |[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |
:---: |:---: |:---: |:---: |:---: |:---: |
[RinChanNOWWW](https://github.com/RinChanNOWWW) |[sandflee](https://github.com/sandflee) |[soyeric128](https://github.com/soyeric128) |[sundy-li](https://github.com/sundy-li) |[TCeason](https://github.com/TCeason) |[xudong963](https://github.com/xudong963) |

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
