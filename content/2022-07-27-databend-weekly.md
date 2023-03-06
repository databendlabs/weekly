+++
title = "This week in Databend #52"
date = 2022-07-27
slug = "2022-07-27-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

**logging**

- implement RFC The New Logging ([#6845](https://github.com/datafuselabs/databend/pull/6845))

**meta**

- add grant and revoke object API in ShareApi ([#6724](https://github.com/datafuselabs/databend/pull/6724))
- show share api ([#6790](https://github.com/datafuselabs/databend/pull/6790))
- add get_share_grant_objects API in ShareApi ([#6798](https://github.com/datafuselabs/databend/pull/6798))

**http handle**

- http handler return session state ([#6846](https://github.com/datafuselabs/databend/pull/6846))

**processor**

- implement explain fragments ([#6851](https://github.com/datafuselabs/databend/pull/6851))
- support distributed subquery in new cluster framework ([#6666](https://github.com/datafuselabs/databend/pull/6666))

**new planner**

- support order by expression ([#6725](https://github.com/datafuselabs/databend/pull/6725))
- enable delete stmt ([#6768](https://github.com/datafuselabs/databend/pull/6768))
- implement distributed query ([#6440](https://github.com/datafuselabs/databend/pull/6440))
- support push down predicates to storage ([#6842](https://github.com/datafuselabs/databend/pull/6842))

**storage**

- add support for COPY from https ([#6691](https://github.com/datafuselabs/databend/pull/6691))
- construct leaf column statistics ([#6731](https://github.com/datafuselabs/databend/pull/6731))
- support read nested columns ([#6612](https://github.com/datafuselabs/databend/pull/6612))

**new expression**

- support `float32`, `float64` and `Map(T)` datatype ([#6711](https://github.com/datafuselabs/databend/pull/6711) & [#6838](https://github.com/datafuselabs/databend/pull/6838))
- add serializable expression ([#6712](https://github.com/datafuselabs/databend/pull/6712))
- support user-defined `CAST` and `TRY_CAST` ([#6663](https://github.com/datafuselabs/databend/pull/6663))
- migrate Boolean functions to new expression framework ([#6763](https://github.com/datafuselabs/databend/pull/6763))
- migrate some String functions to new expression framework ([progress of migration #6766](https://github.com/datafuselabs/databend/issues/6766))

### Improvement

- purge mapping data in DB/table GC ([#6753](https://github.com/datafuselabs/databend/pull/6753))
- fuzz with afl ([#6793](https://github.com/datafuselabs/databend/pull/6793))
- make auto-nullable and auto-vectorization independent ([#6797](https://github.com/datafuselabs/databend/pull/6787))
- refactor pipeline builder ([#6820](https://github.com/datafuselabs/databend/pull/6820))

**new planner**

- make `PRESIGN` works on old planner by forwarding  ([#6713](https://github.com/datafuselabs/databend/pull/6713))
- forward COPY and STAGE to new planner entirely ([#6853](https://github.com/datafuselabs/databend/pull/6853))
- migrate more new planners to be enabled ([#6716](https://github.com/datafuselabs/databend/pull/6716))

### Build/Testing/CI

-  migrate stateless test 00-05 to logic test ([progress of migration](https://github.com/datafuselabs/databend/discussions/5838#discussioncomment-3204610))
- add more args option to logictests ([#6818](https://github.com/datafuselabs/databend/pull/6818))

### Bug fixes

- fix uncorrelated scalar subquery returns error results ([#6720](https://github.com/datafuselabs/databend/pull/6720))
- fix bug in FileSplitter skip header ([#6732](https://github.com/datafuselabs/databend/pull/6732))
- fix oom when returning large results in clickhouse tcp handler ([#6789](https://github.com/datafuselabs/databend/pull/6789))
- Any/Exists subquery in projection ([#6809](https://github.com/datafuselabs/databend/pull/6809))

## Tips

Let's learn a weekly tip from Databend.

### COPY INTO `<table>` FROM REMOTE FILES

After [#6691](https://github.com/datafuselabs/databend/pull/6691) has been merged, Databend now supports loading data into a table from one or more remote files by their URL.

**Syntax**

```sql
COPY INTO [<database>.]<table_name>
FROM 'https://<site>/<directory>/<filename>'
[ FILE_FORMAT = ( TYPE = { CSV | JSON | PARQUET } [ formatTypeOptions ] ) ]
```

**Example**

This example loads data into the table `ontime200` from the remote files `ontime_2006_200.csv`, `ontime_2007_200.csv`, and `ontime_2008_200.csv`:

```sql
copy into ontime200 from 'https://repo.databend.rs/dataset/stateful/ontime_200{6,7,8}_200.csv' FILE_FORMAT = (type = 'CSV' field_delimiter = ','  record_delimiter = '\n' skip_header = 1)
```

Of course, this example could also be written in the following form: 

```sql 
copy into ontime200 from 'https://repo.databend.rs/dataset/stateful/ontime_200[6-8]_200.csv' FILE_FORMAT = (type = 'CSV' field_delimiter = ','  record_delimiter = '\n' skip_header = 1)
```

**Learn More**

- [DOC | COPY INTO `<table>` FROM REMOTE FILES](https://databend.rs/doc/reference/sql/dml/dml-copy-into-table-url)
- [PR| add support for COPY from https](https://github.com/datafuselabs/databend/pull/6691)

## Changelogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.7.143-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.143-nightly)
- [v0.7.142-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.142-nightly)
- [v0.7.141-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.141-nightly)
- [v0.7.140-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.140-nightly)
- [v0.7.139-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.139-nightly)
- [v0.7.138-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.138-nightly)
- [v0.7.137-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.137-nightly)
- [v0.7.136-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.136-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) |[<img alt="ariesdevil" src="https://avatars.githubusercontent.com/u/7812909?v=4&s=117" width="117">](https://github.com/ariesdevil) |[<img alt="aseaday" src="https://avatars.githubusercontent.com/u/3927355?v=4&s=117" width="117">](https://github.com/aseaday) |[<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="ClSlaid" src="https://avatars.githubusercontent.com/u/44747719?v=4&s=117" width="117">](https://github.com/ClSlaid) |
:---: |:---: |:---: |:---: |:---: |:---: |
[andylokandy](https://github.com/andylokandy) |[ariesdevil](https://github.com/ariesdevil) |[aseaday](https://github.com/aseaday) |[b41sh](https://github.com/b41sh) |[BohuTANG](https://github.com/BohuTANG) |[ClSlaid](https://github.com/ClSlaid) |

[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |[<img alt="leiysky" src="https://avatars.githubusercontent.com/u/22445410?v=4&s=117" width="117">](https://github.com/leiysky) |[<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |[<img alt="PsiACE" src="https://avatars.githubusercontent.com/u/36896360?v=4&s=117" width="117">](https://github.com/PsiACE) |[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |
:---: |:---: |:---: |:---: |:---: |:---: |
[dantengsky](https://github.com/dantengsky) |[leiysky](https://github.com/leiysky) |[lichuang](https://github.com/lichuang) |[mergify[bot]](https://github.com/apps/mergify) |[PsiACE](https://github.com/PsiACE) |[soyeric128](https://github.com/soyeric128) |

[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |[<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) |[<img alt="TianLangStudio" src="https://avatars.githubusercontent.com/u/20293523?v=4&s=117" width="117">](https://github.com/TianLangStudio) |[<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |[<img alt="ygf11" src="https://avatars.githubusercontent.com/u/3428089?v=4&s=117" width="117">](https://github.com/ygf11) |
:---: |:---: |:---: |:---: |:---: |:---: |
[sundy-li](https://github.com/sundy-li) |[TCeason](https://github.com/TCeason) |[TianLangStudio](https://github.com/TianLangStudio) |[Xuanwo](https://github.com/Xuanwo) |[xudong963](https://github.com/xudong963) |[ygf11](https://github.com/ygf11) |

[<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) |[<img alt="ZeaLoVe" src="https://avatars.githubusercontent.com/u/10904090?v=4&s=117" width="117">](https://github.com/ZeaLoVe) |[<img alt="zhang2014" src="https://avatars.githubusercontent.com/u/8087042?v=4&s=117" width="117">](https://github.com/zhang2014) |[<img alt="zhyass" src="https://avatars.githubusercontent.com/u/34016424?v=4&s=117" width="117">](https://github.com/zhyass) | | |
:---: |:---: |:---: |:---: |:---: |:---: |
[youngsofun](https://github.com/youngsofun) |[ZeaLoVe](https://github.com/ZeaLoVe) |[zhang2014](https://github.com/zhang2014) |[zhyass](https://github.com/zhyass) | | |

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
