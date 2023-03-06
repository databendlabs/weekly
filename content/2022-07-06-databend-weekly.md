+++
title = "This week in Databend #49"
date = 2022-07-06
slug = "2022-07-06-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- add call procedure for sync stage ([#6344](https://github.com/datafuselabs/databend/pull/6344))
- `show settings` support `like` ([#6394](https://github.com/datafuselabs/databend/pull/6394))
- support all `JsonEachRowOutputFormat` variants ([#6434](https://github.com/datafuselabs/databend/pull/6434))
- support any, all and some subquery in parser ([#6438](https://github.com/datafuselabs/databend/pull/6438))
- support `geo_to_h3` function ([#6389](https://github.com/datafuselabs/databend/pull/6389))

**storage**

- add xz compression support ([#6421](https://github.com/datafuselabs/databend/pull/6421))
- introduce system.tables_with_history ([#6435](https://github.com/datafuselabs/databend/pull/6435))

**new planner**

- migrate call statement to new planner ([#6361](https://github.com/datafuselabs/databend/pull/6361))
- support `IS [NOT] DISTINCT FROM` in planner_v2 ([#6170](https://github.com/datafuselabs/databend/pull/6170))
- support qualified column name with database specified ([#6444](https://github.com/datafuselabs/databend/pull/6444))
- support mark join, (not)in/any subquery, make tpch16 and tpch18 happy ([#6412](https://github.com/datafuselabs/databend/pull/6412))

**RFC**

- add Presign statement ([#6503](https://github.com/datafuselabs/databend/pull/6503))

### Improvement

- add span info for `TableReference` ([#6370](https://github.com/datafuselabs/databend/pull/6370))
- improve optimize table compact ([#6373](https://github.com/datafuselabs/databend/pull/6373))

**refactor**

- split formats ([#6443](https://github.com/datafuselabs/databend/pull/6443))
- intro common-http to reduce duplicate code ([#6484](https://github.com/datafuselabs/databend/pull/6484))

### Build/Testing/CI

- logic test with clickhouse handler ([#6329](https://github.com/datafuselabs/databend/pull/6329))
- enable semantic PRs and fully migrate to mergify and gh cli ([#6386](https://github.com/datafuselabs/databend/pull/6386), [#6419](https://github.com/datafuselabs/databend/pull/6419) and more)

### Bug fixes

- fix hashmap memory leak ([#6354](https://github.com/datafuselabs/databend/pull/6354))
- fix array inner type with null ([#6407](https://github.com/datafuselabs/databend/pull/6407))
- fix lost event in resize processor ([#6501](https://github.com/datafuselabs/databend/pull/6501))

**cluster**

- show correctly progress in cluster mode ([#6253](https://github.com/datafuselabs/databend/pull/6253))
- fix cannot destroy thread in cluster mode ([#6436](https://github.com/datafuselabs/databend/pull/6436))

**format**

- add `NestedCheckpointReader` for input format parser ([#6385](https://github.com/datafuselabs/databend/pull/6385))
- fix tsv deserialization ([#6453](https://github.com/datafuselabs/databend/pull/6453))

## Tips

Let's learn a weekly tip from Databend.

### Monitoring Databend with Sentry

[Sentry](https://github.com/getsentry/sentry) is cross-platform application monitoring, with a focus on error reporting. 

[Databend](https://github.com/datafuselabs/databend) supports error tracking and performance monitoring with Sentry.

#### Preparing

- Use the SaaS service provided by [sentry.io](https://sentry.io/), or deploy it yourself by following [Self-Hosted Sentry](https://develop.sentry.dev/self-hosted/).
- Create a project in Sentry and get a `DSN`. The `DSN` looks the same as `http://0c44e65426cb4f87ba059464c0740502@127.0.0.1:9000/5`.

#### Error Tracking

This will only use the sentry-log feature, which will help us with error tracking.

```bash
DATABEND_SENTRY_DSN="<your-sentry-dsn>" ./databend-query
```

![sentry-error](https://databend.rs/img/tracing/sentry-error.png)

#### Performance Monitoring

Setting `SENTRY_TRACES_SAMPLE_RATE` greater than 0.0 will allow sentry to perform trace sampling, which will help set up performance monitoring.

```bash
DATABEND_SENTRY_DSN="<your-sentry-dsn>" SENTRY_TRACES_SAMPLE_RATE=1.0 LOG_LEVEL=DEBUG ./databend-query
```

**Note:** Set `SENTRY_TRACES_SAMPLE_RATE` to a lower value in production.

![sentry-performance](https://databend.rs/img/tracing/sentry-performance.png)

#### Learn more

- [DOC | Error Tracking and Performance Monitoring with Sentry](https://databend.rs/doc/faq/how-to-tracing#error-tracking-and-performance-monitoring-with-sentry)
- [PR | Integration with Sentry](https://github.com/datafuselabs/databend/pull/6226)

## Changelogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.7.120-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.120-nightly)
- [v0.7.119-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.119-nightly)
- [v0.7.118-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.118-nightly)
- [v0.7.117-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.117-nightly)
- [v0.7.116-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.116-nightly)
- [v0.7.115-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.115-nightly)
- [v0.7.114-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.114-nightly)
- [v0.7.113-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.113-nightly)
- [v0.7.112-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.112-nightly)
- [v0.7.111-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.111-nightly)
- [v0.7.110-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.110-nightly)
- [v0.7.109-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.109-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="ariesdevil" src="https://avatars.githubusercontent.com/u/7812909?v=4&s=117" width="117">](https://github.com/ariesdevil) |[<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="ClSlaid" src="https://avatars.githubusercontent.com/u/44747719?v=4&s=117" width="117">](https://github.com/ClSlaid) |[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |[<img alt="databend-bot" src="https://avatars.githubusercontent.com/u/82190365?v=4&s=117" width="117">](https://github.com/databend-bot) |
:---: |:---: |:---: |:---: |:---: |:---: |
[ariesdevil](https://github.com/ariesdevil) |[b41sh](https://github.com/b41sh) |[BohuTANG](https://github.com/BohuTANG) |[ClSlaid](https://github.com/ClSlaid) |[dantengsky](https://github.com/dantengsky) |[databend-bot](https://github.com/databend-bot) |

[<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |[<img alt="everpcpc" src="https://avatars.githubusercontent.com/u/1808802?v=4&s=117" width="117">](https://github.com/everpcpc) |[<img alt="flaneur2020" src="https://avatars.githubusercontent.com/u/129800?v=4&s=117" width="117">](https://github.com/flaneur2020) |[<img alt="junnplus" src="https://avatars.githubusercontent.com/u/8097526?v=4&s=117" width="117">](https://github.com/junnplus) |[<img alt="leiysky" src="https://avatars.githubusercontent.com/u/22445410?v=4&s=117" width="117">](https://github.com/leiysky) |[<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |
:---: |:---: |:---: |:---: |:---: |:---: |
[drmingdrmer](https://github.com/drmingdrmer) |[everpcpc](https://github.com/everpcpc) |[flaneur2020](https://github.com/flaneur2020) |[junnplus](https://github.com/junnplus) |[leiysky](https://github.com/leiysky) |[lichuang](https://github.com/lichuang) |

[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |[<img alt="PragmaTwice" src="https://avatars.githubusercontent.com/u/20042607?v=4&s=117" width="117">](https://github.com/PragmaTwice) |[<img alt="PsiACE" src="https://avatars.githubusercontent.com/u/36896360?v=4&s=117" width="117">](https://github.com/PsiACE) |[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |[<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) |
:---: |:---: |:---: |:---: |:---: |:---: |
[mergify[bot]](https://github.com/apps/mergify) |[PragmaTwice](https://github.com/PragmaTwice) |[PsiACE](https://github.com/PsiACE) |[soyeric128](https://github.com/soyeric128) |[sundy-li](https://github.com/sundy-li) |[TCeason](https://github.com/TCeason) |

[<img alt="Veeupup" src="https://avatars.githubusercontent.com/u/26339429?v=4&s=117" width="117">](https://github.com/Veeupup) |[<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |[<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) |[<img alt="ZeaLoVe" src="https://avatars.githubusercontent.com/u/10904090?v=4&s=117" width="117">](https://github.com/ZeaLoVe) |[<img alt="zhang2014" src="https://avatars.githubusercontent.com/u/8087042?v=4&s=117" width="117">](https://github.com/zhang2014) |
:---: |:---: |:---: |:---: |:---: |:---: |
[Veeupup](https://github.com/Veeupup) |[Xuanwo](https://github.com/Xuanwo) |[xudong963](https://github.com/xudong963) |[youngsofun](https://github.com/youngsofun) |[ZeaLoVe](https://github.com/ZeaLoVe) |[zhang2014](https://github.com/zhang2014) |

[<img alt="ZhiHanZ" src="https://avatars.githubusercontent.com/u/25170437?v=4&s=117" width="117">](https://github.com/ZhiHanZ) |[<img alt="zhyass" src="https://avatars.githubusercontent.com/u/34016424?v=4&s=117" width="117">](https://github.com/zhyass) | | | | |
:---: |:---: |:---: |:---: |:---: |:---: |
[ZhiHanZ](https://github.com/ZhiHanZ) |[zhyass](https://github.com/zhyass) | | | | |

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
