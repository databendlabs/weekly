+++
title = "This week in Databend #72"
date = 2022-12-14
slug = "2022-12-14-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is a powerful cloud data warehouse. Built for elasticity and efficiency. Free and open. Also available in the cloud: <https://app.databend.com> .

> **Special Note:** [*This Week in Databend*](https://weekly.databend.rs/) will be gradually migrated to the [*Databend Blog*](https://databend.rs/blog). We will keep the content in sync until the final migration is complete.

## What's New

Check out what we've done this week to make Databend even better for you.

### Features & Improvements :sparkles:

**Multiple Catalogs**

- extends show databases SQL ([#9152](https://github.com/datafuselabs/databend/pull/9152))

**Stage**

- support select from URI ([#9247](https://github.com/datafuselabs/databend/pull/9247))

**Streaming Load**

- support `file_format` syntax in streaming load insert sql ([#9063](https://github.com/datafuselabs/databend/pull/9063))

**Planner**

- push down `limit` to `union` ([#9210](https://github.com/datafuselabs/databend/pull/9210))

**Query**

- use `analyze table` instead of `optimize table statistic` ([#9143](https://github.com/datafuselabs/databend/pull/9143))
- fast parse insert values ([#9214](https://github.com/datafuselabs/databend/pull/9214))

**Storage**

- use distinct count calculated by the xor hash function ([#9159](https://github.com/datafuselabs/databend/pull/9159))
- `read_parquet` read meta before read data ([#9154](https://github.com/datafuselabs/databend/pull/9154))
- push down filter to parquet reader ([#9199](https://github.com/datafuselabs/databend/pull/9199))
- prune row groups before reading  ([#9228](https://github.com/datafuselabs/databend/pull/9228))

**Open Sharing**

- add prototype open sharing and add sharing stateful tests ([#9177](https://github.com/datafuselabs/databend/pull/9177))

### Code Refactoring :tada:

**\***

- simplify the global data registry logic  ([#9187](https://github.com/datafuselabs/databend/pull/9187))

**Storage**

- refactor deletion ([#8824](https://github.com/datafuselabs/databend/pull/8824))

### Build/Testing/CI Infra Changes :electric_plug:

- release databend deb package and databend with hive ([#9138](https://github.com/datafuselabs/databend/pull/9138), [#9241](https://github.com/datafuselabs/databend/pull/9241), etc.)

### Bug Fixes :wrench:

**Format**

- support ASCII control code hex as format field delimiter ([#9160](https://github.com/datafuselabs/databend/pull/9160))

**Planner**

- prewhere_column empty and predicate is not const will return empty ([#9116](https://github.com/datafuselabs/databend/pull/9116))
- don't push down topk to Merge when it's child is Aggregate ([#9183](https://github.com/datafuselabs/databend/pull/9183))
- fix nullable column validity not equal ([#9220](https://github.com/datafuselabs/databend/pull/9220))

**Query**

- address unit test hang on test_insert ([#9242](https://github.com/datafuselabs/databend/pull/9242))

**Storage**

- too many io requests for read blocks during compact ([#9128](https://github.com/datafuselabs/databend/pull/9128))
- collect orphan snapshots ([#9108](https://github.com/datafuselabs/databend/pull/9108))

## What's On In Databend

Stay connected with the latest news about Databend.

#### Unifying Format Options and Removing `format_*` Settings

> ***Breaking Change*** We plan to unify the formatting options and remove `format_*` settings in the future. 
> This means that we will **disable** the old format.
>  Work is in progress and support for `FILE_FORMAT` has now been completed in streming load.

##### Propose

In the new implementation, **only** use the snowflake style in any place (insert copy and "select from stage" later):

- `FILE_FORMAT = (type = 'CSV' some_option = '|')`
- `FILE_FORMAT = (format_name = 'MyCustomCSV')`

`FORMAT CSV` is retained for the ClickHouse handler.

MyCustomCSV is created using SQL like `CREATE FILE FORMAT`

**Learn More**

- [Issue | unify format options and remove format_ settings](https://github.com/datafuselabs/databend/issues/8995)
- [PR | support file_format syntax in streaming load insert sql](https://github.com/datafuselabs/databend/pull/9063)

#### Open Sharing

Open Sharing is a cheap and secure data sharing protocol for databend query on multi-cloud environments.

* **Cheap**: Open Sharing allow data sharing via simple RESTful API sharing protocol, which is cheap and easy to understand.
* **Secure**: Open Sharing protocol would verify allow incoming requesters identity and access permission and provide audit log.
* **Multi-cloud**: Open Sharing is designed to work with different cloud platforms, including AWS, Azure, GCP, etc.
* **Open source**: Open Sharing is an open source project

**Learn More**

- [Docs | Open Sharing](https://github.com/datafuselabs/databend/blob/main/src/query/sharing-endpoint/README.md)
- [PR | add prototype open sharing and add sharing stateful tests](https://github.com/datafuselabs/databend/pull/9177)

## What's Up Next

We're always open to cutting-edge technologies and innovative ideas. You're more than welcome to join the community and bring them to Databend.

#### Refactoring Stage-Related Tests

We should use streaming upload to put files directly in the stage instead of in s3.

```bash
aws --endpoint-url ${STORAGE_S3_ENDPOINT_URL} s3 cp s3://testbucket/admin/data/ontime_200.csv s3://testbucket/admin/stage/internal/s1/ontime_200.csv >/dev/null 2>&1
```

This is wrong, and stage's path rule should not be leak.

[Issue 8528: refactor stage related tests](https://github.com/datafuselabs/databend/issues/8528)

Please let us know if you're interested in contributing to this issue, or pick up a good first issue at <https://link.databend.rs/i-m-feeling-lucky> to get started.

## Changelog

You can check the changelog of Databend Nightly for details about our latest developments.

- [v0.8.152-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.152-nightly)
- [v0.8.151-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.151-nightly)
- [v0.8.150-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.150-nightly)
- [v0.8.149-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.149-nightly)
- [v0.8.148-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.148-nightly)
- [v0.8.147-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.147-nightly)
- [v0.8.146-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.146-nightly)
- [v0.8.145-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.145-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="ariesdevil" src="https://avatars.githubusercontent.com/u/7812909?v=4&s=117" width="117">](https://github.com/ariesdevil) |[<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="Chasen-Zhang" src="https://avatars.githubusercontent.com/u/15354455?v=4&s=117" width="117">](https://github.com/Chasen-Zhang) |[<img alt="ClSlaid" src="https://avatars.githubusercontent.com/u/44747719?v=4&s=117" width="117">](https://github.com/ClSlaid) |[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |
:---: |:---: |:---: |:---: |:---: |:---: |
[ariesdevil](https://github.com/ariesdevil) |[b41sh](https://github.com/b41sh) |[BohuTANG](https://github.com/BohuTANG) |[Chasen-Zhang](https://github.com/Chasen-Zhang) |[ClSlaid](https://github.com/ClSlaid) |[dantengsky](https://github.com/dantengsky) |

[<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |[<img alt="hantmac" src="https://avatars.githubusercontent.com/u/7600925?v=4&s=117" width="117">](https://github.com/hantmac) |[<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |[<img alt="PsiACE" src="https://avatars.githubusercontent.com/u/36896360?v=4&s=117" width="117">](https://github.com/PsiACE) |[<img alt="RinChanNOWWW" src="https://avatars.githubusercontent.com/u/33975039?v=4&s=117" width="117">](https://github.com/RinChanNOWWW) |
:---: |:---: |:---: |:---: |:---: |:---: |
[drmingdrmer](https://github.com/drmingdrmer) |[hantmac](https://github.com/hantmac) |[lichuang](https://github.com/lichuang) |[mergify[bot]](https://github.com/apps/mergify) |[PsiACE](https://github.com/PsiACE) |[RinChanNOWWW](https://github.com/RinChanNOWWW) |

[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |[<img alt="wubx" src="https://avatars.githubusercontent.com/u/320680?v=4&s=117" width="117">](https://github.com/wubx) |[<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |[<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) |
:---: |:---: |:---: |:---: |:---: |:---: |
[soyeric128](https://github.com/soyeric128) |[sundy-li](https://github.com/sundy-li) |[wubx](https://github.com/wubx) |[Xuanwo](https://github.com/Xuanwo) |[xudong963](https://github.com/xudong963) |[youngsofun](https://github.com/youngsofun) |

[<img alt="ZhiHanZ" src="https://avatars.githubusercontent.com/u/25170437?v=4&s=117" width="117">](https://github.com/ZhiHanZ) |[<img alt="zhyass" src="https://avatars.githubusercontent.com/u/34016424?v=4&s=117" width="117">](https://github.com/zhyass) |[<img alt="zzzdong" src="https://avatars.githubusercontent.com/u/5125482?v=4&s=117" width="117">](https://github.com/zzzdong) | | | |
:---: |:---: |:---: |:---: |:---: |:---: |
[ZhiHanZ](https://github.com/ZhiHanZ) |[zhyass](https://github.com/zhyass) |[zzzdong](https://github.com/zzzdong) | | | |

## Connect With Us

We'd love to hear from you. Feel free to run the code and see if Databend works for you. Submit an issue with your problem if you need help.

[DatafuseLabs Community](https://github.com/datafuselabs/) is open to everyone who loves data warehouses. Please join the community and share your thoughts.

- [Databend Official Website](https://databend.rs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions) (Feature requests, bug reports, and contributions)
- [Twitter](https://twitter.com/Datafuse_Labs) (Stay in the know)
- [Slack Channel](https://link.databend.rs/join-slack) (Chat with the community)
