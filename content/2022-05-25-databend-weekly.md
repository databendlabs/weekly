+++
title = "This week in Databend #43"
date = 2022-05-25
slug = "2022-05-25-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- add `system$clustering_information` function ([#5426](https://github.com/datafuselabs/databend/pull/5426))
- add statistics to `TableMeta` ([#5476](https://github.com/datafuselabs/databend/pull/5476))
- add metasrv time travel functions ([#5468](https://github.com/datafuselabs/databend/pull/5468) & [#5566](https://github.com/datafuselabs/databend/pull/5566))
- snapshot timestamp & navigation ([#5535](https://github.com/datafuselabs/databend/pull/5535))
- undrop table & show history ([#5562](https://github.com/datafuselabs/databend/pull/5562))

**Migrate to new planner**

- translate subquery into apply operator ([#5510](https://github.com/datafuselabs/databend/pull/5510))
- common tree structure formatter for plan display ([#5512](https://github.com/datafuselabs/databend/pull/5512))
- support `TRIM` function in new planner ([#5541](https://github.com/datafuselabs/databend/pull/5541)) 
- support array literal in new planner ([#5551](https://github.com/datafuselabs/databend/pull/5551)) 

**New functions**

- support `object_keys` function ([#5461](https://github.com/datafuselabs/databend/pull/5461))
- support compare variant with other data types ([#5463](https://github.com/datafuselabs/databend/pull/5463))
- support variant max/min functions ([#5525](https://github.com/datafuselabs/databend/pull/5525)) 
- support variant as function ([#5442](https://github.com/datafuselabs/databend/pull/5442)) 
- add `user` function ([#5584](https://github.com/datafuselabs/databend/pull/5584)) 

### Improvement

- replace todos in datavalues with ErrorCode ([#5475](https://github.com/datafuselabs/databend/pull/5475))
- add stage quota for tenant ([#5575](https://github.com/datafuselabs/databend/pull/5575))
- simplify catalog and meta ([#5560](https://github.com/datafuselabs/databend/pull/5560))

**hash join performance improvement**

- optimize hash join, ~6x performance improvement ([#5497](https://github.com/datafuselabs/databend/pull/5497))
- use `DataBlock::gather_blocks` in hash join, ~2x performance improvement in some cases ([#5534](https://github.com/datafuselabs/databend/pull/5534))

### Build / Testing / CI

- fix bugs of logic test scripts and some cases ([#5578](https://github.com/datafuselabs/databend/pull/5578))

### Documentation

- add i18n support with crowdin ([#5545](https://github.com/datafuselabs/databend/pull/5545)), 

### Bug fixes

- fix retention aggregation coredump bug ([#5450](https://github.com/datafuselabs/databend/pull/5450))
- fix server hang when parallel execute query ([#5482](https://github.com/datafuselabs/databend/pull/5482))
- fix wrong output in hash join ([#5538](https://github.com/datafuselabs/databend/pull/5538) & [#5539](https://github.com/datafuselabs/databend/pull/5539))

## Tips

Let's learn a weekly tip from Databend.

### Do Conversion Funnel Analysis With Databend

Funnel analysis measures the number of unique users who has performed a set of actions, and we use it to see drop-off and conversion in multi-step processes.

**Create a Table**

```SQL
CREATE TABLE events(user_id BIGINT, event_name VARCHAR, event_timestamp TIMESTAMP);
```

Now we have a table with the following fields:

- `user_id` - a unique identifier for user
- `event_name` - type of the event, like: login, visit, cart and purchase
- `event_timestamp` - timestamp which event occurred

**Funnel Analysis**

It's easy and performance to use Databend WINDOW_FUNNEL Function to find out how far the user `user_id` could get through the chain in an hour window slides.

```SQL
SELECT
    level,
    count() AS count
FROM
(
    SELECT
        user_id,
        window_funnel(3600000000)(event_timestamp, 
        event_name = 'login', event_name = 'visit', 
        event_name = 'cart', event_name = 'purchase') AS level
    FROM events
    GROUP BY user_id
)
GROUP BY level ORDER BY level ASC;
```

**Learn more:**

- [How to Do Conversion Funnel Analysis With Databend](https://databend.rs/doc/learn/analyze-funnel-with-databend)
- [Doc | Databend `WINDOW_FUNNEL` Function](https://databend.rs/doc/learn/analyze-funnel-with-databend)
- [Source Code | Databend `WINDOW_FUNNEL` Function](https://github.com/datafuselabs/databend/blob/main/common/functions/src/aggregates/aggregate_window_funnel.rs)

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.7.60-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.60-nightly)
- [v0.7.59-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.59-nightly)
- [v0.7.58-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.58-nightly)
- [v0.7.57-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.57-nightly)
- [v0.7.56-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.56-nightly)
- [v0.7.55-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.55-nightly)
- [v0.7.54-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.54-nightly)
- [v0.7.53-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.53-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

| [<img alt="ariesdevil" src="https://avatars.githubusercontent.com/u/7812909?v=4&s=117" width="117">](https://github.com/ariesdevil) | [<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) | [<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) | [<img alt="Chasen-Zhang" src="https://avatars.githubusercontent.com/u/15354455?v=4&s=117" width="117">](https://github.com/Chasen-Zhang) | [<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) | [<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |
| :---------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
|                                             [ariesdevil](https://github.com/ariesdevil)                                             |                                             [b41sh](https://github.com/b41sh)                                             |                                            [BohuTANG](https://github.com/BohuTANG)                                             |                                             [Chasen-Zhang](https://github.com/Chasen-Zhang)                                              |                                             [dantengsky](https://github.com/dantengsky)                                              |                                            [drmingdrmer](https://github.com/drmingdrmer)                                            |

| [<img alt="everpcpc" src="https://avatars.githubusercontent.com/u/1808802?v=4&s=117" width="117">](https://github.com/everpcpc) | [<img alt="fkuner" src="https://avatars.githubusercontent.com/u/39162698?v=4&s=117" width="117">](https://github.com/fkuner) | [<img alt="flaneur2020" src="https://avatars.githubusercontent.com/u/129800?v=4&s=117" width="117">](https://github.com/flaneur2020) | [<img alt="hantmac" src="https://avatars.githubusercontent.com/u/7600925?v=4&s=117" width="117">](https://github.com/hantmac) | [<img alt="hanyisong" src="https://avatars.githubusercontent.com/u/71937758?v=4&s=117" width="117">](https://github.com/hanyisong) | [<img alt="junnplus" src="https://avatars.githubusercontent.com/u/8097526?v=4&s=117" width="117">](https://github.com/junnplus) |
| :-----------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
|                                             [everpcpc](https://github.com/everpcpc)                                             |                                             [fkuner](https://github.com/fkuner)                                              |                                            [flaneur2020](https://github.com/flaneur2020)                                             |                                             [hantmac](https://github.com/hantmac)                                             |                                             [hanyisong](https://github.com/hanyisong)                                              |                                             [junnplus](https://github.com/junnplus)                                             |

| [<img alt="Kikkon" src="https://avatars.githubusercontent.com/u/19528375?v=4&s=117" width="117">](https://github.com/Kikkon) | [<img alt="leiysky" src="https://avatars.githubusercontent.com/u/22445410?v=4&s=117" width="117">](https://github.com/leiysky) | [<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) | [<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) | [<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) | [<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |
| :--------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
|                                             [Kikkon](https://github.com/Kikkon)                                              |                                             [leiysky](https://github.com/leiysky)                                              |                                             [lichuang](https://github.com/lichuang)                                             |                                            [mergify[bot]](https://github.com/apps/mergify)                                             |                                              [soyeric128](https://github.com/soyeric128)                                              |                                             [sundy-li](https://github.com/sundy-li)                                             |

| [<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) | [<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) | [<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) | [<img alt="ygf11" src="https://avatars.githubusercontent.com/u/3428089?v=4&s=117" width="117">](https://github.com/ygf11) | [<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) | [<img alt="ZeaLoVe" src="https://avatars.githubusercontent.com/u/10904090?v=4&s=117" width="117">](https://github.com/ZeaLoVe) |
| :----------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
|                                             [TCeason](https://github.com/TCeason)                                              |                                             [Xuanwo](https://github.com/Xuanwo)                                             |                                             [xudong963](https://github.com/xudong963)                                              |                                             [ygf11](https://github.com/ygf11)                                             |                                             [youngsofun](https://github.com/youngsofun)                                             |                                             [ZeaLoVe](https://github.com/ZeaLoVe)                                              |

| [<img alt="zhang2014" src="https://avatars.githubusercontent.com/u/8087042?v=4&s=117" width="117">](https://github.com/zhang2014) | [<img alt="ZhiHanZ" src="https://avatars.githubusercontent.com/u/25170437?v=4&s=117" width="117">](https://github.com/ZhiHanZ) | [<img alt="zhyass" src="https://avatars.githubusercontent.com/u/34016424?v=4&s=117" width="117">](https://github.com/zhyass) | [<img alt="ZuoFuhong" src="https://avatars.githubusercontent.com/u/19775205?v=4&s=117" width="117">](https://github.com/ZuoFuhong) |       |       |
| :-------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: | :---: | :---: |
|                                             [zhang2014](https://github.com/zhang2014)                                             |                                             [ZhiHanZ](https://github.com/ZhiHanZ)                                              |                                             [zhyass](https://github.com/zhyass)                                              |                                             [ZuoFuhong](https://github.com/ZuoFuhong)                                              |       |       |

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
