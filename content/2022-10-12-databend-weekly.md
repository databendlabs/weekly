+++
title = "This week in Databend #63"
date = 2022-10-12
slug = "2022-10-12-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is a powerful cloud data warehouse. Built for elasticity and efficiency. Free and open. Also available in the cloud: <https://app.databend.com> .

## What's Changed

Below is a list of some major changes that we don't want you to miss.

### Exciting New Features :sparkles:

**sharing**

- add shared layer to read data from sharing endpoint ([#8044](https://github.com/datafuselabs/databend/pull/8044))

**planner**

- top-down optimization ([#8080](https://github.com/datafuselabs/databend/pull/8080))
- convert outer join to inner join ([#7967](https://github.com/datafuselabs/databend/pull/7967))
- convert mark join to semi join ([#8064](https://github.com/datafuselabs/databend/pull/8064))
- support `EXPLAIN MEMO` statement ([#8125](https://github.com/datafuselabs/databend/pull/8125))

**storage**

- parallel index pruning ([#7893](https://github.com/datafuselabs/databend/pull/7893))
- oss backend support ([#8066](https://github.com/datafuselabs/databend/pull/8066) & [#8079](https://github.com/datafuselabs/databend/pull/8079))
- try to get segments parallel ([#8076](https://github.com/datafuselabs/databend/pull/8076))
- table column statistics api ([#8152](https://github.com/datafuselabs/databend/pull/8152))

**new expression**

- migrate agg function: stddev, window_funnel to func-v2 ([#8034](https://github.com/datafuselabs/databend/pull/8034))
- migrate variant func to func-v2 ([#7972](https://github.com/datafuselabs/databend/pull/7972))
- numeric/string can cast to boolean when it's in filter ([#8051](https://github.com/datafuselabs/databend/pull/8051))
- support `Date` and `Interval` in new expression framework ([#8058](https://github.com/datafuselabs/databend/pull/8058))
- add take_chunks kernel ([#8137](https://github.com/datafuselabs/databend/pull/8137))

### Code Refactor :tada:

**cache**

- remove not used disk cache ([#8166](https://github.com/datafuselabs/databend/pull/8166))

**meta**

- move `MetaStorageError` to a standalone crate ([#8161](https://github.com/datafuselabs/databend/pull/8161))

**query**

- remove precision in timestamp type ([#8154](https://github.com/datafuselabs/databend/pull/8154))

**deps**

- move several common dependency declarations to workspace `Cargo.toml` ([#8171](https://github.com/datafuselabs/databend/pull/8171))

### Build/Testing/CI Infra Changes :electric_plug:

**ci**

- try to upload checksums ([#7940](https://github.com/datafuselabs/databend/pull/7940) & [#8148](https://github.com/datafuselabs/databend/pull/8148))

### Thoughtful Bug Fix :wrench:

**build**

- fix build failure on newer versions of protoc ([#8047](https://github.com/datafuselabs/databend/pull/8047))

**datavalues**

- `only_null` for nullable column should return false when column is empty ([#8045](https://github.com/datafuselabs/databend/pull/8045))

**parser**

- fix version() ([#8126](https://github.com/datafuselabs/databend/pull/8126))

**pipelines**

- right semi join returns wrong answer ([#8083](https://github.com/datafuselabs/databend/pull/8083))
- support interrupt join build side ([#8037](https://github.com/datafuselabs/databend/pull/8037))

**storage**

- using table owned dal operator instead of get from query context ([#8113](https://github.com/datafuselabs/databend/pull/8113))
- pruning not work as expected ([#8131](https://github.com/datafuselabs/databend/pull/8131))

**new expression**

- properly repeat Scalar::Null to column ([#8111](https://github.com/datafuselabs/databend/pull/8111))

## News

Let's take a look at what's new at Datafuse Labs & Databend each week.

#### EXPLAIN MEMO

Databend supports EXPLAIN MEMO statement to visualize memo structure now.

**Syntax**

```sql
EXPLAIN MEMO <query_statement>
```

![explain memo](../images/memo.jpg)

**Learn More**

- [PR | support `EXPLAIN MEMO` statement](https://github.com/datafuselabs/databend/pull/8125)
- [DOC | EXPLAIN MEMO](https://databend.rs/doc/reference/sql/explain-cmds/explain-memo)

#### Tips on `PRESIGN`

Since x was merged, Databend supports `PRESIGN` to generate the pre-signed URL for a staged file.

```SQL
PRESIGN [{ DOWNLOAD | UPLOAD }] @<stage_name>/.../<file_name> [ EXPIRE = <expire_in_seconds> ]
```

`[{ DOWNLOAD | UPLOAD }]` specifies that the pre-signed URL is used for download or upload. So once you have the corresponding pre-signed URL, you can use `curl` to download or upload the file.

```bash
# download
curl '<pre-signed-url>' -o <file_name>
# upload
curl -F 'upload=@<file_path>' -XPUT '<pre-signed-url>' 
```

**Learn More**

- [DOC | PRESIGN](https://databend.rs/doc/reference/sql/ddl/presign/presign)

#### Remove Precision in Timestamp Type

Timestamp datatype now keep the precision which can be used to output the DateTime with a custom style.

The storage stores the same value for `now()` which represents instants as the number of microseconds (µs) since `1970-01-01 00:00:00+00`. The precision is only for output style, so it's useless to keep it in datatype, we can use other functions like: `to_yyyy_mm_dd` to handle the style.

**Learn More**

- [Proposal: Datatype Timestamp Remove the Precision Argument](https://github.com/datafuselabs/databend/discussions/8149)
- [PR | remove precision in timestamp type](https://github.com/datafuselabs/databend/pull/8154)

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.8.61-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.61-nightly)
- [v0.8.62-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.62-nightly)
- [v0.8.63-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.63-nightly)
- [v0.8.64-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.64-nightly)
- [v0.8.65-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.65-nightly)
- [v0.8.66-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.66-nightly)
- [v0.8.67-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.67-nightly)
- [v0.8.68-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.68-nightly)
- [v0.8.69-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.69-nightly)
- [v0.8.70-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.70-nightly)
- [v0.8.71-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.71-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) |[<img alt="ariesdevil" src="https://avatars.githubusercontent.com/u/7812909?v=4&s=117" width="117">](https://github.com/ariesdevil) |[<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="ClSlaid" src="https://avatars.githubusercontent.com/u/44747719?v=4&s=117" width="117">](https://github.com/ClSlaid) |[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |
:---: |:---: |:---: |:---: |:---: |:---: |
[andylokandy](https://github.com/andylokandy) |[ariesdevil](https://github.com/ariesdevil) |[b41sh](https://github.com/b41sh) |[BohuTANG](https://github.com/BohuTANG) |[ClSlaid](https://github.com/ClSlaid) |[dantengsky](https://github.com/dantengsky) |

[<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |[<img alt="flaneur2020" src="https://avatars.githubusercontent.com/u/129800?v=4&s=117" width="117">](https://github.com/flaneur2020) |[<img alt="leiysky" src="https://avatars.githubusercontent.com/u/22445410?v=4&s=117" width="117">](https://github.com/leiysky) |[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |[<img alt="PsiACE" src="https://avatars.githubusercontent.com/u/36896360?v=4&s=117" width="117">](https://github.com/PsiACE) |[<img alt="rdettai" src="https://avatars.githubusercontent.com/u/7913347?v=4&s=117" width="117">](https://github.com/rdettai) |
:---: |:---: |:---: |:---: |:---: |:---: |
[drmingdrmer](https://github.com/drmingdrmer) |[flaneur2020](https://github.com/flaneur2020) |[leiysky](https://github.com/leiysky) |[mergify[bot]](https://github.com/apps/mergify) |[PsiACE](https://github.com/PsiACE) |[rdettai](https://github.com/rdettai) |

[<img alt="RinChanNOWWW" src="https://avatars.githubusercontent.com/u/33975039?v=4&s=117" width="117">](https://github.com/RinChanNOWWW) |[<img alt="sandflee" src="https://avatars.githubusercontent.com/u/5102100?v=4&s=117" width="117">](https://github.com/sandflee) |[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |[<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) |[<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |
:---: |:---: |:---: |:---: |:---: |:---: |
[RinChanNOWWW](https://github.com/RinChanNOWWW) |[sandflee](https://github.com/sandflee) |[soyeric128](https://github.com/soyeric128) |[sundy-li](https://github.com/sundy-li) |[TCeason](https://github.com/TCeason) |[Xuanwo](https://github.com/Xuanwo) |

[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |[<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) |[<img alt="zhang2014" src="https://avatars.githubusercontent.com/u/8087042?v=4&s=117" width="117">](https://github.com/zhang2014) | | | |
:---: |:---: |:---: |:---: |:---: |:---: |
[xudong963](https://github.com/xudong963) |[youngsofun](https://github.com/youngsofun) |[zhang2014](https://github.com/zhang2014) | | | |

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
