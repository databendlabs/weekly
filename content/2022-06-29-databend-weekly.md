+++
title = "This week in Databend #48"
date = 2022-06-29
slug = "2022-06-29-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features


- support abort pipeline ([#6174](https://github.com/datafuselabs/databend/pull/6174))
- integration with sentry ([#6226](https://github.com/datafuselabs/databend/pull/6226))
- rewrite predicate and accelerate tpch19 ([#6301](https://github.com/datafuselabs/databend/pull/6301))

**databend meta**

- support leave a cluster with `databend-meta --leave..` ([#6181](https://github.com/datafuselabs/databend/pull/6181))
- add import init cluster support ([#6280](https://github.com/datafuselabs/databend/pull/6280))
 
**statements**

- support `exists` statement ([#6166](https://github.com/datafuselabs/databend/pull/6166))
- statement `delete from...` ([#5691](https://github.com/datafuselabs/databend/pull/5691))
- order by sub stmt support db.table.col ([#6191](https://github.com/datafuselabs/databend/pull/6191))

**new planner**

- introduce serializable physical plan ([#6191](https://github.com/datafuselabs/databend/pull/6191))
- support non-equi conditions in hash join ([#6145](https://github.com/datafuselabs/databend/pull/6145))
- decorrelate EXISTS subquery with non-equi condition ([#6232](https://github.com/datafuselabs/databend/pull/6232))
- migrate Create([#5905](https://github.com/datafuselabs/databend/pull/5905))/Alter([#6319](https://github.com/datafuselabs/databend/pull/6319))/Drop([#6327](https://github.com/datafuselabs/databend/pull/6327)) UDF

### Improvement

- improve compatibility with clickhouse http handler ([#6148](https://github.com/datafuselabs/databend/pull/6148))
- limit push down for table `fuse_snapshot` & proc `system$fuse_snapshot` ([#6167](https://github.com/datafuselabs/databend/pull/6167))
- split ast statements into multiple mods ([#6176](https://github.com/datafuselabs/databend/pull/6176))
- store grpc addr to node info and auto refresh backends addrs for grpc client ([#5495](https://github.com/datafuselabs/databend/pull/5495))

**Join Performance Improvements**

- improve left/semi/anti join performance [~80x] ([#6241](https://github.com/datafuselabs/databend/pull/6241))
- improve join results gather [~7x] ([#6228](https://github.com/datafuselabs/databend/pull/6228))
- improve semi/anti join with other conjuncts [~17x] ([#6366](https://github.com/datafuselabs/databend/pull/6366))

### Build/Testing/CI

- add tpch stateless-test ([#6225](https://github.com/datafuselabs/databend/pull/6225))
- add async insert test ([#5964](https://github.com/datafuselabs/databend/pull/5964))

### Bug fixes

- fix datatype different cause mysql session distroy ([#6150](https://github.com/datafuselabs/databend/pull/6150))
- fix node id truncation when cluster id is escaped ([#6193](https://github.com/datafuselabs/databend/pull/6193))
- fix aggregate count incorrect state place ([#6218](https://github.com/datafuselabs/databend/pull/6218))
- fix grouping check ([#6219](https://github.com/datafuselabs/databend/pull/6219))
- fix output of to_datetime() ([#6252](https://github.com/datafuselabs/databend/pull/6252))
- fix MySQL connection close_wait or fin_wait_2 ([#6341](https://github.com/datafuselabs/databend/pull/6341))


## Tips

Let's learn a weekly tip from Databend.

### `DELETE` in Databend

The `DELETE` statement can delete one or more rows from a table.

**Syntax**

Databend now supports such syntax:

```sql
DELETE FROM table_name
[WHERE search_ condition]
```

**Example**

Suppose that the `bookstore` table currently contains the following data:

|   bookId        |     bookName      |
| --------- | --------- |
| 101       | After the death of Don Juan   |
| 102       | Grown ups    |
| 103       | The long answer |
| 104       | Wartime friends |
| 105       | Deconstructed |

Now let's delete the book with id = 103:

```sql
DELETE from bookstore where bookId = 103;
```

After deletion, the data in the `bookstore` table is shown as follows:

|   bookId        |     bookName      |
| --------- | --------- |
| 101       | After the death of Don Juan   |
| 102       | Grown ups    |
| 104       | Wartime friends |
| 105       | Deconstructed |

**Learn more:**

- [DOC | DELETE](https://databend.rs/doc/reference/sql/dml/dml-delete-from)
- [PR | statement `delete from... `](https://github.com/datafuselabs/databend/pull/5691)

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.7.108-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.108-nightly)
- [v0.7.107-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.107-nightly)
- [v0.7.106-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.106-nightly)
- [v0.7.105-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.105-nightly)
- [v0.7.104-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.104-nightly)
- [v0.7.103-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.103-nightly)
- [v0.7.102-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.102-nightly)
- [v0.7.101-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.101-nightly)
- [v0.7.100-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.100-nightly)
- [v0.7.99-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.99-nightly)
- [v0.7.98-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.98-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="ariesdevil" src="https://avatars.githubusercontent.com/u/7812909?v=4&s=117" width="117">](https://github.com/ariesdevil) |[<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="ClSlaid" src="https://avatars.githubusercontent.com/u/44747719?v=4&s=117" width="117">](https://github.com/ClSlaid) |[<img alt="cuichenli" src="https://avatars.githubusercontent.com/u/29245119?v=4&s=117" width="117">](https://github.com/cuichenli) |[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |
:---: |:---: |:---: |:---: |:---: |:---: |
[ariesdevil](https://github.com/ariesdevil) |[b41sh](https://github.com/b41sh) |[BohuTANG](https://github.com/BohuTANG) |[ClSlaid](https://github.com/ClSlaid) |[cuichenli](https://github.com/cuichenli) |[dantengsky](https://github.com/dantengsky) |

[<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |[<img alt="everpcpc" src="https://avatars.githubusercontent.com/u/1808802?v=4&s=117" width="117">](https://github.com/everpcpc) |[<img alt="fkuner" src="https://avatars.githubusercontent.com/u/39162698?v=4&s=117" width="117">](https://github.com/fkuner) |[<img alt="leiysky" src="https://avatars.githubusercontent.com/u/22445410?v=4&s=117" width="117">](https://github.com/leiysky) |[<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |
:---: |:---: |:---: |:---: |:---: |:---: |
[drmingdrmer](https://github.com/drmingdrmer) |[everpcpc](https://github.com/everpcpc) |[fkuner](https://github.com/fkuner) |[leiysky](https://github.com/leiysky) |[lichuang](https://github.com/lichuang) |[mergify[bot]](https://github.com/apps/mergify) |

[<img alt="PsiACE" src="https://avatars.githubusercontent.com/u/36896360?v=4&s=117" width="117">](https://github.com/PsiACE) |[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |[<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) |[<img alt="TennyZhuang" src="https://avatars.githubusercontent.com/u/9161438?v=4&s=117" width="117">](https://github.com/TennyZhuang) |[<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |
:---: |:---: |:---: |:---: |:---: |:---: |
[PsiACE](https://github.com/PsiACE) |[soyeric128](https://github.com/soyeric128) |[sundy-li](https://github.com/sundy-li) |[TCeason](https://github.com/TCeason) |[TennyZhuang](https://github.com/TennyZhuang) |[Xuanwo](https://github.com/Xuanwo) |

[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |[<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) |[<img alt="zhang2014" src="https://avatars.githubusercontent.com/u/8087042?v=4&s=117" width="117">](https://github.com/zhang2014) |[<img alt="ZhiHanZ" src="https://avatars.githubusercontent.com/u/25170437?v=4&s=117" width="117">](https://github.com/ZhiHanZ) | | |
:---: |:---: |:---: |:---: |:---: |:---: |
[xudong963](https://github.com/xudong963) |[youngsofun](https://github.com/youngsofun) |[zhang2014](https://github.com/zhang2014) |[ZhiHanZ](https://github.com/ZhiHanZ) | | |

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
