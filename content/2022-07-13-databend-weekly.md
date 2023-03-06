+++
title = "This week in Databend #50"
date = 2022-07-13
slug = "2022-07-13-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- migrate window function to new pipeline ([#6500](https://github.com/datafuselabs/databend/pull/6500))
- add format diagnostic ([#6530](https://github.com/datafuselabs/databend/pull/6530))
- add date_trunc function ([#6540](https://github.com/datafuselabs/databend/pull/6540))
- support global setting ([#6579](https://github.com/datafuselabs/databend/pull/6579))
- add `{db,table}_id` map to `{(tenant,db_name)`, `(db_id, table_name)}` in metasrv ([#6607](https://github.com/datafuselabs/databend/pull/6607))
- support ALL and SOME subquery, mark join with non-equi condition, and make tpch q20 happy ([#6534](https://github.com/datafuselabs/databend/pull/6534))

**presign statement**

- add presign statement in parser ([#6513](https://github.com/datafuselabs/databend/pull/6513))
- implement presign support ([#6529](https://github.com/datafuselabs/databend/pull/6529))

**storage**

- allow `COPY FROM/INTO` different storage services ([#6573](https://github.com/datafuselabs/databend/pull/6573))
- allow create stage for different services ([#6602](https://github.com/datafuselabs/databend/pull/6602))

**new expression**

- add new crate `common-expression` ([#6576](https://github.com/datafuselabs/databend/pull/6576))
- implement pretty print for `Chunk` ([#6597](https://github.com/datafuselabs/databend/pull/6597))

### Improvement

- improve performances for group by queries ([#6551](https://github.com/datafuselabs/databend/pull/6551))
- try abandon internal parquet2 patches  ([#6067](https://github.com/datafuselabs/databend/pull/6067))
- refactor interpreter factory for reuse interpreters code ([#6566](https://github.com/datafuselabs/databend/pull/6566))
- replace infallible ([#6568](https://github.com/datafuselabs/databend/pull/6568))
- remove old processor useless code ([#6584](https://github.com/datafuselabs/databend/pull/6584))
- pretty format for explain ([#6585](https://github.com/datafuselabs/databend/pull/6585))

### Build/Testing/CI

- add fuzz ci ([#6574](https://github.com/datafuselabs/databend/pull/6574))

### Bug fixes

- big query hang with clickhouse ([#6583](https://github.com/datafuselabs/databend/pull/6583))
- catchup planner update in http handler ([#6572](https://github.com/datafuselabs/databend/pull/6572))
- fix load json value by csv format ([#6548](https://github.com/datafuselabs/databend/pull/6548))
- fix input format CSV ([#6524](https://github.com/datafuselabs/databend/pull/6524))
- show query with limit will failed when enable planner v2 ([#6381](https://github.com/datafuselabs/databend/pull/6381))
- add watch txn unit test ([#6526](https://github.com/datafuselabs/databend/pull/6526))
- fix thread unsafe when processor schedule ([#6533](https://github.com/datafuselabs/databend/pull/6533))
- fix database and user related functions in planner v2 ([#6473](https://github.com/datafuselabs/databend/pull/6473))

## Tips

Let's learn a weekly tip from Databend.

### Presign Statement

Generates the pre-signed URL for a staged file by the stage name and file path you provide. The pre-signed URL enables you to access the file through a web browser or an API request.

**Syntax**

```sql
PRESIGN [ { DOWNLOAD | UPLOAD }] @<stage_name>/.../<file_name> [ EXPIRE = <expire_in_seconds> ]
```

**Example**

This example generates the pre-signed URL for downloading the file `books.csv` on the stage `my-stage`:

```sql
PRESIGN @my_stage/books.csv
+--------+---------+---------------------------------------------------------------------------------+
| method | headers | url                                                                             |
+--------+---------+---------------------------------------------------------------------------------+
| GET    | {}      | https://example.s3.amazonaws.com/books.csv?X-Amz-Algorithm=AWS4-HMAC-SHA256&... |
+--------+---------+---------------------------------------------------------------------------------+
```

**Learn More**

- [DOC | PRESIGN](https://databend.rs/doc/reference/sql/ddl/presign/presign)
- [Tracking Issue | Add PRESIGN Support](https://github.com/datafuselabs/databend/issues/6215)

## Changelogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.7.128-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.128-nightly)
- [v0.7.127-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.127-nightly)
- [v0.7.126-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.126-nightly)
- [v0.7.125-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.125-nightly)
- [v0.7.124-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.124-nightly)
- [v0.7.123-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.123-nightly)
- [v0.7.122-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.122-nightly)
- [v0.7.121-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.121-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) |[<img alt="ariesdevil" src="https://avatars.githubusercontent.com/u/7812909?v=4&s=117" width="117">](https://github.com/ariesdevil) |[<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |[<img alt="Defined2014" src="https://avatars.githubusercontent.com/u/17435596?v=4&s=117" width="117">](https://github.com/Defined2014) |
:---: |:---: |:---: |:---: |:---: |:---: |
[andylokandy](https://github.com/andylokandy) |[ariesdevil](https://github.com/ariesdevil) |[b41sh](https://github.com/b41sh) |[BohuTANG](https://github.com/BohuTANG) |[dantengsky](https://github.com/dantengsky) |[Defined2014](https://github.com/Defined2014) |

[<img alt="everpcpc" src="https://avatars.githubusercontent.com/u/1808802?v=4&s=117" width="117">](https://github.com/everpcpc) |[<img alt="fkuner" src="https://avatars.githubusercontent.com/u/39162698?v=4&s=117" width="117">](https://github.com/fkuner) |[<img alt="gaoxinge" src="https://avatars.githubusercontent.com/u/16648345?v=4&s=117" width="117">](https://github.com/gaoxinge) |[<img alt="GrapeBaBa" src="https://avatars.githubusercontent.com/u/3657859?v=4&s=117" width="117">](https://github.com/GrapeBaBa) |[<img alt="jiaoew1991" src="https://avatars.githubusercontent.com/u/2297455?v=4&s=117" width="117">](https://github.com/jiaoew1991) |[<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |
:---: |:---: |:---: |:---: |:---: |:---: |
[everpcpc](https://github.com/everpcpc) |[fkuner](https://github.com/fkuner) |[gaoxinge](https://github.com/gaoxinge) |[GrapeBaBa](https://github.com/GrapeBaBa) |[jiaoew1991](https://github.com/jiaoew1991) |[lichuang](https://github.com/lichuang) |

[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |[<img alt="PsiACE" src="https://avatars.githubusercontent.com/u/36896360?v=4&s=117" width="117">](https://github.com/PsiACE) |[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |[<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) |[<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |
:---: |:---: |:---: |:---: |:---: |:---: |
[mergify[bot]](https://github.com/apps/mergify) |[PsiACE](https://github.com/PsiACE) |[soyeric128](https://github.com/soyeric128) |[sundy-li](https://github.com/sundy-li) |[TCeason](https://github.com/TCeason) |[Xuanwo](https://github.com/Xuanwo) |

[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |[<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) |[<img alt="ZeaLoVe" src="https://avatars.githubusercontent.com/u/10904090?v=4&s=117" width="117">](https://github.com/ZeaLoVe) |[<img alt="zhang2014" src="https://avatars.githubusercontent.com/u/8087042?v=4&s=117" width="117">](https://github.com/zhang2014) | | |
:---: |:---: |:---: |:---: |:---: |:---: |
[xudong963](https://github.com/xudong963) |[youngsofun](https://github.com/youngsofun) |[ZeaLoVe](https://github.com/ZeaLoVe) |[zhang2014](https://github.com/zhang2014) | | |

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
