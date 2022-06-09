+++
title = "This week in Databend #45"
date = 2022-06-08
slug = "2022-06-08-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- undrop database ([#5770](https://github.com/datafuselabs/databend/pull/5770))
- support async insert mode to imporve throughput ([#5567](https://github.com/datafuselabs/databend/pull/5567))
- support alter table cluster key ([#5718](https://github.com/datafuselabs/databend/pull/5718))

**meta**

- add gc out of drop retention time data schema API and unit tests ([#5746](https://github.com/datafuselabs/databend/pull/5746))
- protobuf message has to persist `MIN_COMPATIBLE_VER` ([#5746](https://github.com/datafuselabs/databend/pull/5746))

**functions**

- support function `timezone()` ([#5840](https://github.com/datafuselabs/databend/pull/5840))
- add function `NULLIF` ([#5772](https://github.com/datafuselabs/databend/pull/5772))

**new planner**

- introduce `InterpreterFactoryV2` for new planner ([#5729](https://github.com/datafuselabs/databend/pull/5729))
- support udf ([#5751](https://github.com/datafuselabs/databend/pull/5751))
- `CREATE VIEW` ([#5816](https://github.com/datafuselabs/databend/pull/5816))
- `CREATE DATABASE` ([#5804](https://github.com/datafuselabs/databend/pull/5804)) / `DROP DATABASE` ([#5846](https://github.com/datafuselabs/databend/pull/5846))
- `CREATE USER` ([#5802](https://github.com/datafuselabs/databend/pull/5802)) / `ALTER USER` ([#5823](https://github.com/datafuselabs/databend/pull/5823)) / `DROP USER` ([#5813](https://github.com/datafuselabs/databend/pull/5813))

### Improvement

- refactor location parse logic ([#5790](https://github.com/datafuselabs/databend/pull/5790))
- show tenant quota for current tenant ([#5750](https://github.com/datafuselabs/databend/pull/5750))
- support errorcode hint in new planner ([#5756](https://github.com/datafuselabs/databend/pull/5756))
- don't load credential while reading stage ([#5783](https://github.com/datafuselabs/databend/pull/5783))
- move Clickhouse HTTP handler to its own port ([#5797](https://github.com/datafuselabs/databend/pull/5797))

**new parser**

- support cross join ([#5730](https://github.com/datafuselabs/databend/pull/5730))
- flatten join lists ([#5742](https://github.com/datafuselabs/databend/pull/5742))

### Build / Testing / CI

- enable logic test ([#5836](https://github.com/datafuselabs/databend/pull/5836))

### Bug fixes

- fix compressed buf not consumed correctly ([#5727](https://github.com/datafuselabs/databend/pull/5727))
- support abort for pipeline executor stream ([#5803](https://github.com/datafuselabs/databend/pull/5803))
- lz4raw compression of zero len buffer ([#5806](https://github.com/datafuselabs/databend/pull/5806))
- fix server hang when sync work panic ([#5814](https://github.com/datafuselabs/databend/pull/5814))

## Tips

Let's learn a weekly tip from Databend.

### Databend Supports Async Insert Mode

When thousands of clients concurrently insert a small batch of data, each insert will be executed as follows:

`Parser` -> `Planner` -> `Interpreter` -> `Pipeline`

It's inefficient because of I/O depth and cache locality.

To solve the problem, we want to buffer small inserts into batches in server which sacrifices tiny latency for better insert throughput, smaller block count and larger `DataBlock` in storage.

After doing this, inserts into the same table will be parsed and planned individual. The insert data will be convert to `DataBlock` and buffered. When some conditions are triggered, the buffered `DataBlock` will be interpreted once which also is beneficial for pipelines.

**Learn more:**

- [RFC | Async Insert Mode](https://databend.rs/doc/contributing/rfcs/async-insert)
- [PR 5567 | Support async insert mode to imporve throughput](https://github.com/datafuselabs/databend/pull/5567/)

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.7.77-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.77-nightly)
- [v0.7.76-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.76-nightly)
- [v0.7.75-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.75-nightly)
- [v0.7.74-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.74-nightly)
- [v0.7.73-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.73-nightly)
- [v0.7.72-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.72-nightly)
- [v0.7.71-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.71-nightly)
- [v0.7.70-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.70-nightly)
- [v0.7.69-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.69-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

| [<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) | [<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) | [<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) | [<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) | [<img alt="devillove084" src="https://avatars.githubusercontent.com/u/15782923?v=4&s=117" width="117">](https://github.com/devillove084) | [<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
|                                             [andylokandy](https://github.com/andylokandy)                                             |                                             [b41sh](https://github.com/b41sh)                                             |                                            [BohuTANG](https://github.com/BohuTANG)                                             |                                             [dantengsky](https://github.com/dantengsky)                                              |                                             [devillove084](https://github.com/devillove084)                                              |                                            [drmingdrmer](https://github.com/drmingdrmer)                                            |

| [<img alt="everpcpc" src="https://avatars.githubusercontent.com/u/1808802?v=4&s=117" width="117">](https://github.com/everpcpc) | [<img alt="fkuner" src="https://avatars.githubusercontent.com/u/39162698?v=4&s=117" width="117">](https://github.com/fkuner) | [<img alt="flaneur2020" src="https://avatars.githubusercontent.com/u/129800?v=4&s=117" width="117">](https://github.com/flaneur2020) | [<img alt="hantmac" src="https://avatars.githubusercontent.com/u/7600925?v=4&s=117" width="117">](https://github.com/hantmac) | [<img alt="junnplus" src="https://avatars.githubusercontent.com/u/8097526?v=4&s=117" width="117">](https://github.com/junnplus) | [<img alt="leiysky" src="https://avatars.githubusercontent.com/u/22445410?v=4&s=117" width="117">](https://github.com/leiysky) |
| :-----------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
|                                             [everpcpc](https://github.com/everpcpc)                                             |                                             [fkuner](https://github.com/fkuner)                                              |                                            [flaneur2020](https://github.com/flaneur2020)                                             |                                             [hantmac](https://github.com/hantmac)                                             |                                             [junnplus](https://github.com/junnplus)                                             |                                             [leiysky](https://github.com/leiysky)                                              |

| [<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) | [<img alt="LiuYuHui" src="https://avatars.githubusercontent.com/u/13926137?v=4&s=117" width="117">](https://github.com/LiuYuHui) | [<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) | [<img alt="RinChanNOWWW" src="https://avatars.githubusercontent.com/u/33975039?v=4&s=117" width="117">](https://github.com/RinChanNOWWW) | [<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) | [<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |
| :-----------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
|                                             [lichuang](https://github.com/lichuang)                                             |                                             [LiuYuHui](https://github.com/LiuYuHui)                                              |                                            [mergify[bot]](https://github.com/apps/mergify)                                             |                                             [RinChanNOWWW](https://github.com/RinChanNOWWW)                                              |                                              [soyeric128](https://github.com/soyeric128)                                              |                                             [sundy-li](https://github.com/sundy-li)                                             |

| [<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) | [<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) | [<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) | [<img alt="ygf11" src="https://avatars.githubusercontent.com/u/3428089?v=4&s=117" width="117">](https://github.com/ygf11) | [<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) | [<img alt="ZeaLoVe" src="https://avatars.githubusercontent.com/u/10904090?v=4&s=117" width="117">](https://github.com/ZeaLoVe) |
| :----------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
|                                             [TCeason](https://github.com/TCeason)                                              |                                             [Xuanwo](https://github.com/Xuanwo)                                             |                                             [xudong963](https://github.com/xudong963)                                              |                                             [ygf11](https://github.com/ygf11)                                             |                                             [youngsofun](https://github.com/youngsofun)                                             |                                             [ZeaLoVe](https://github.com/ZeaLoVe)                                              |

| [<img alt="zhang2014" src="https://avatars.githubusercontent.com/u/8087042?v=4&s=117" width="117">](https://github.com/zhang2014) | [<img alt="zhyass" src="https://avatars.githubusercontent.com/u/34016424?v=4&s=117" width="117">](https://github.com/zhyass) |       |       |       |       |
| :-------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :---: | :---: | :---: | :---: |
|                                             [zhang2014](https://github.com/zhang2014)                                             |                                             [zhyass](https://github.com/zhyass)                                              |       |       |       |       |

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
