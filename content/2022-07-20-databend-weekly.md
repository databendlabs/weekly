+++
title = "This week in Databend #51"
date = 2022-07-20
slug = "2022-07-20-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- add StageFileFormatType::Tsv ([#6651](https://github.com/datafuselabs/databend/pull/6651))

**meta**

- add share metasrv ShareApi(create_share,drop_share) ([#6582](https://github.com/datafuselabs/databend/pull/6582))
- add share metasrv ShareApi {add|remove}_share_account ([#6656](https://github.com/datafuselabs/databend/pull/6656))
- add share id to share name map, add share test suites ([#6670](https://github.com/datafuselabs/databend/pull/6670))
- adds cli command to send RPC to a running meta cluster ([#6559](https://github.com/datafuselabs/databend/pull/6559))

**hive catalog**

- support read boolean, float, double, date, array columns ([#6629](https://github.com/datafuselabs/databend/pull/6629))

**new planner**

- support create table as select ([#6618](https://github.com/datafuselabs/databend/pull/6618))
- optimize correlated subquery by decorrelation ([#6632](https://github.com/datafuselabs/databend/pull/6632))

**new expression**

- Implement domain calculation ([#6649](https://github.com/datafuselabs/databend/pull/6649))
- implement error report ([#6661](https://github.com/datafuselabs/databend/pull/6661))
- allow function to return runtime error ([#6662](https://github.com/datafuselabs/databend/pull/6662))
- support UInt32, UInt64, Int32, Int64 ([#6660](https://github.com/datafuselabs/databend/pull/6660))
- support conversion between arrow ([#6674](https://github.com/datafuselabs/databend/pull/6674))

### Improvement

- support insert zero date and zero datetime ([#6592](https://github.com/datafuselabs/databend/pull/6592))
- Stage Copy use internal InputFormat ([#6638](https://github.com/datafuselabs/databend/pull/6638))
- decouple `Table` from `QueryContext` ([#6665](https://github.com/datafuselabs/databend/pull/6665))
- refactor pipeline builder ([#6695](https://github.com/datafuselabs/databend/pull/6695))

**new planner**

- stage/tables/databases DDL statements defaults to use new planner ([#6648](https://github.com/datafuselabs/databend/pull/6648))
- users/roles/grants DDL statements default to use new planner ([#6687](https://github.com/datafuselabs/databend/pull/6687))

### Build/Testing/CI

- add ydb test cases ([#6681](https://github.com/datafuselabs/databend/pull/6681))

### Bug fixes

- fix range delete panic and incorrect statistics (of in_memory_size) ([#6609](https://github.com/datafuselabs/databend/pull/6609))
- disable null values in join ([#6616](https://github.com/datafuselabs/databend/pull/6616))
- `COPY` shoud be able to run under new planner ([#6624](https://github.com/datafuselabs/databend/pull/6624))
- fix InSubquery returns error result ([#6641](https://github.com/datafuselabs/databend/pull/6641))
- fix variant map access filter ([#6645](https://github.com/datafuselabs/databend/pull/6645))
- adhoc fix session leak ([#6672](https://github.com/datafuselabs/databend/pull/6672))
- support read i96 timestamp from parquet file ([#6668](https://github.com/datafuselabs/databend/pull/6668))
- check parquet schema mismatch ([#6690](https://github.com/datafuselabs/databend/pull/6690))

## Tips

Let's learn a weekly tip from Databend.

### Send & Receive gRPC Metadata

Databend allows you to send and receive gRPC (gRPC Remote Procedure Calls) metadata (key-value pairs) to and from a running meta service cluster with the command-line interface (CLI) commands.

**Update and Create a Key-Value Pair**

```bash
./databend-meta --grpc-api-address "<grpc-api-address>" --cmd kvapi::upsert --key <key> --value <value>
```

**Get Value by a Key**

```bash
./databend-meta --grpc-api-address "<grpc-api-address>" --cmd kvapi::get --key <key>
```

**Get Values by Multiple Keys**

```bash
./databend-meta --grpc-api-address "<grpc-api-address>" --cmd kvapi::mget --key <key1> <key2> ...
```

**List Key-Value Pairs by a Prefix**

```bash
./databend-meta --grpc-api-address "<grpc-api-address>" --cmd kvapi::list --prefix <prefix>
```

**Learn More**

- [DOC | Send & Receive gRPC Metadata](https://databend.rs/doc/manage/metasrv/metasrv-grpc)
- [Tracking Issue | databend-meta adds cli command to send RPC to a running meta cluster](https://github.com/datafuselabs/databend/issues/6084)

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.7.135-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.135-nightly)
- [v0.7.134-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.134-nightly)
- [v0.7.133-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.133-nightly)
- [v0.7.132-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.132-nightly)
- [v0.7.131-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.131-nightly)
- [v0.7.130-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.130-nightly)
- [v0.7.129-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.129-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) |[<img alt="ariesdevil" src="https://avatars.githubusercontent.com/u/7812909?v=4&s=117" width="117">](https://github.com/ariesdevil) |[<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |[<img alt="dependabot[bot]" src="https://avatars.githubusercontent.com/in/29110?v=4&s=117" width="117">](https://github.com/apps/dependabot) |
:---: |:---: |:---: |:---: |:---: |:---: |
[andylokandy](https://github.com/andylokandy) |[ariesdevil](https://github.com/ariesdevil) |[b41sh](https://github.com/b41sh) |[BohuTANG](https://github.com/BohuTANG) |[dantengsky](https://github.com/dantengsky) |[dependabot[bot]](https://github.com/apps/dependabot) |

[<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |[<img alt="everpcpc" src="https://avatars.githubusercontent.com/u/1808802?v=4&s=117" width="117">](https://github.com/everpcpc) |[<img alt="jiaoew1991" src="https://avatars.githubusercontent.com/u/2297455?v=4&s=117" width="117">](https://github.com/jiaoew1991) |[<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |[<img alt="PsiACE" src="https://avatars.githubusercontent.com/u/36896360?v=4&s=117" width="117">](https://github.com/PsiACE) |
:---: |:---: |:---: |:---: |:---: |:---: |
[drmingdrmer](https://github.com/drmingdrmer) |[everpcpc](https://github.com/everpcpc) |[jiaoew1991](https://github.com/jiaoew1991) |[lichuang](https://github.com/lichuang) |[mergify[bot]](https://github.com/apps/mergify) |[PsiACE](https://github.com/PsiACE) |

[<img alt="RinChanNOWWW" src="https://avatars.githubusercontent.com/u/33975039?v=4&s=117" width="117">](https://github.com/RinChanNOWWW) |[<img alt="sandflee" src="https://avatars.githubusercontent.com/u/5102100?v=4&s=117" width="117">](https://github.com/sandflee) |[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |[<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |
:---: |:---: |:---: |:---: |:---: |:---: |
[RinChanNOWWW](https://github.com/RinChanNOWWW) |[sandflee](https://github.com/sandflee) |[soyeric128](https://github.com/soyeric128) |[sundy-li](https://github.com/sundy-li) |[Xuanwo](https://github.com/Xuanwo) |[xudong963](https://github.com/xudong963) |

[<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) |[<img alt="yuuch" src="https://avatars.githubusercontent.com/u/14847010?v=4&s=117" width="117">](https://github.com/yuuch) |[<img alt="ZeaLoVe" src="https://avatars.githubusercontent.com/u/10904090?v=4&s=117" width="117">](https://github.com/ZeaLoVe) |[<img alt="zhang2014" src="https://avatars.githubusercontent.com/u/8087042?v=4&s=117" width="117">](https://github.com/zhang2014) | | |
:---: |:---: |:---: |:---: |:---: |:---: |
[youngsofun](https://github.com/youngsofun) |[yuuch](https://github.com/yuuch) |[ZeaLoVe](https://github.com/ZeaLoVe) |[zhang2014](https://github.com/zhang2014) | | |

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
