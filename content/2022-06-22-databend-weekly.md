+++
title = "This week in Databend #47"
date = 2022-06-22
slug = "2022-06-22-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- transient fuse table ([#5968](https://github.com/datafuselabs/databend/pull/5968))
- support field comment ([#5952](https://github.com/datafuselabs/databend/pull/5952))
- stop parsing at insert statement ([#6048](https://github.com/datafuselabs/databend/pull/6048))
- configurable repr of float denormals in output formats ([#6065](https://github.com/datafuselabs/databend/pull/6065))
- integrate cluster select query with new processor ([#4544](https://github.com/datafuselabs/databend/pull/4544))

**optimizer**

- decorrelate `EXISTS` subquery ([#6073](https://github.com/datafuselabs/databend/pull/6073))
- support push down filter through cross apply ([#6079](https://github.com/datafuselabs/databend/pull/6079))

**functions**

- support `ifnull` ([#5921](https://github.com/datafuselabs/databend/pull/5921))
- support `multi_if` ([#6039](https://github.com/datafuselabs/databend/pull/6039))
- support `date_sub` ([#6050](https://github.com/datafuselabs/databend/pull/6050))
- support `to_nullable` and `assume_not_null` ([#6055](https://github.com/datafuselabs/databend/pull/6055))
- support `coalesce` ([#5922](https://github.com/datafuselabs/databend/pull/5922))

**clickhouse handle**

- support settings ([#5945](https://github.com/datafuselabs/databend/pull/5945))
- improve output format ([#6027](https://github.com/datafuselabs/databend/pull/6027))
- support set database. ([#6097](https://github.com/datafuselabs/databend/pull/6097))

**new planner**

- show statements ([#6013](https://github.com/datafuselabs/databend/pull/6013))
- show users/roles statement ([#6016](https://github.com/datafuselabs/databend/pull/6016))
- migrate grant ([#6049](https://github.com/datafuselabs/databend/pull/6049))
- migrate revoke ([#6066](https://github.com/datafuselabs/databend/pull/6066))
- migrate copy ([#6074](https://github.com/datafuselabs/databend/pull/6074))
- migrate insert statement ([#5897](https://github.com/datafuselabs/databend/pull/5897))
- support query log for new planner ([#6053](https://github.com/datafuselabs/databend/pull/6053))
- support `SELECT ... FROM ... { AT TIMESTAMP }` ([#6056](https://github.com/datafuselabs/databend/pull/6056))

### Improvement

- stop supporting multiple statements ([#6052](https://github.com/datafuselabs/databend/pull/6052))
- make uuid return uuid values for each row ([#6114](https://github.com/datafuselabs/databend/pull/6114))
- add more meta cluster status ([#6083](https://github.com/datafuselabs/databend/pull/6083))
- cache panic of http handlers ([#6090](https://github.com/datafuselabs/databend/pull/6090))
- adjust table snapshot timestamp precision to micro second ([#6144](https://github.com/datafuselabs/databend/pull/6144))

### Bug fixes

- fix `de_csv` with escaped quoted ([#6008](https://github.com/datafuselabs/databend/pull/6008))
- consider `NULL` for binary op in type checker ([#6043](https://github.com/datafuselabs/databend/pull/6043))
- fix error of `EXISTS` subquery ([#6073](https://github.com/datafuselabs/databend/pull/6073))
- transient object storage IO operation fault handling ([#6045](https://github.com/datafuselabs/databend/pull/6045))
- remove a wrong cut parser in subquery ([#6111](https://github.com/datafuselabs/databend/pull/6111))

## Tips

Let's learn a weekly tip from Databend.

### Cluster key

Cluster key is intended to improve query performance by physically clustering data together. 

For example, when you set a column as your cluster key for a table, the table data will be physically sorted by the column you set. This will maximize the query performance if your most queries are filtered by the column.

**Sets a cluster key when creating a table**

```sql
CREATE TABLE <name> ... CLUSTER BY ( <expr1> [ , <expr2> ... ] )
```

**Changes the cluster key for a table**

```sql
ALTER TABLE <name> CLUSTER BY ( <expr1> [ , <expr2> ... ] )
```

**Deletes the cluster key for a table**

```sql
ALTER TABLE <name> DROP CLUSTER KEY
```

**Learn more:**

- [DOC | SET CLUSTER KEY](https://databend.rs/doc/reference/sql/ddl/clusterkey/dml-set-cluster-key)
- [DOC | ALTER CLUSTER KEY](https://databend.rs/doc/reference/sql/ddl/clusterkey/dml-alter-cluster-key)
- [DOC | DROP CLUSTER KEY](https://databend.rs/doc/reference/sql/ddl/clusterkey/dml-drop-cluster-key)

## Changelogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.7.97-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.97-nightly)
- [v0.7.96-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.96-nightly)
- [v0.7.95-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.95-nightly)
- [v0.7.94-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.94-nightly)
- [v0.7.93-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.93-nightly)
- [v0.7.92-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.92-nightly)
- [v0.7.91-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.91-nightly)
- [v0.7.90-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.90-nightly)
- [v0.7.89-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.89-nightly)
- [v0.7.88-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.88-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) |[<img alt="AngleNet" src="https://avatars.githubusercontent.com/u/14330209?v=4&s=117" width="117">](https://github.com/AngleNet) |[<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="cadl" src="https://avatars.githubusercontent.com/u/1629582?v=4&s=117" width="117">](https://github.com/cadl) |[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |
:---: |:---: |:---: |:---: |:---: |:---: |
[andylokandy](https://github.com/andylokandy) |[AngleNet](https://github.com/AngleNet) |[b41sh](https://github.com/b41sh) |[BohuTANG](https://github.com/BohuTANG) |[cadl](https://github.com/cadl) |[dantengsky](https://github.com/dantengsky) |

[<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |[<img alt="everpcpc" src="https://avatars.githubusercontent.com/u/1808802?v=4&s=117" width="117">](https://github.com/everpcpc) |[<img alt="fkuner" src="https://avatars.githubusercontent.com/u/39162698?v=4&s=117" width="117">](https://github.com/fkuner) |[<img alt="hantmac" src="https://avatars.githubusercontent.com/u/7600925?v=4&s=117" width="117">](https://github.com/hantmac) |[<img alt="junnplus" src="https://avatars.githubusercontent.com/u/8097526?v=4&s=117" width="117">](https://github.com/junnplus) |[<img alt="leiysky" src="https://avatars.githubusercontent.com/u/22445410?v=4&s=117" width="117">](https://github.com/leiysky) |
:---: |:---: |:---: |:---: |:---: |:---: |
[drmingdrmer](https://github.com/drmingdrmer) |[everpcpc](https://github.com/everpcpc) |[fkuner](https://github.com/fkuner) |[hantmac](https://github.com/hantmac) |[junnplus](https://github.com/junnplus) |[leiysky](https://github.com/leiysky) |

[<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |[<img alt="PsiACE" src="https://avatars.githubusercontent.com/u/36896360?v=4&s=117" width="117">](https://github.com/PsiACE) |[<img alt="RinChanNOWWW" src="https://avatars.githubusercontent.com/u/33975039?v=4&s=117" width="117">](https://github.com/RinChanNOWWW) |[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |
:---: |:---: |:---: |:---: |:---: |:---: |
[lichuang](https://github.com/lichuang) |[mergify[bot]](https://github.com/apps/mergify) |[PsiACE](https://github.com/PsiACE) |[RinChanNOWWW](https://github.com/RinChanNOWWW) |[soyeric128](https://github.com/soyeric128) |[sundy-li](https://github.com/sundy-li) |

[<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) |[<img alt="TennyZhuang" src="https://avatars.githubusercontent.com/u/9161438?v=4&s=117" width="117">](https://github.com/TennyZhuang) |[<img alt="TianLangStudio" src="https://avatars.githubusercontent.com/u/20293523?v=4&s=117" width="117">](https://github.com/TianLangStudio) |[<img alt="Veeupup" src="https://avatars.githubusercontent.com/u/26339429?v=4&s=117" width="117">](https://github.com/Veeupup) |[<img alt="wfxr" src="https://avatars.githubusercontent.com/u/6105425?v=4&s=117" width="117">](https://github.com/wfxr) |[<img alt="wubx" src="https://avatars.githubusercontent.com/u/320680?v=4&s=117" width="117">](https://github.com/wubx) |
:---: |:---: |:---: |:---: |:---: |:---: |
[TCeason](https://github.com/TCeason) |[TennyZhuang](https://github.com/TennyZhuang) |[TianLangStudio](https://github.com/TianLangStudio) |[Veeupup](https://github.com/Veeupup) |[wfxr](https://github.com/wfxr) |[wubx](https://github.com/wubx) |

[<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |[<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) |[<img alt="yuuch" src="https://avatars.githubusercontent.com/u/14847010?v=4&s=117" width="117">](https://github.com/yuuch) |[<img alt="zhang2014" src="https://avatars.githubusercontent.com/u/8087042?v=4&s=117" width="117">](https://github.com/zhang2014) |[<img alt="zhyass" src="https://avatars.githubusercontent.com/u/34016424?v=4&s=117" width="117">](https://github.com/zhyass) |
:---: |:---: |:---: |:---: |:---: |:---: |
[Xuanwo](https://github.com/Xuanwo) |[xudong963](https://github.com/xudong963) |[youngsofun](https://github.com/youngsofun) |[yuuch](https://github.com/yuuch) |[zhang2014](https://github.com/zhang2014) |[zhyass](https://github.com/zhyass) |

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
