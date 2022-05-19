+++
title = "This week in Databend #42"
date = 2022-05-18
slug = "2022-05-18-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- support date_add for new parser ([#5419](https://github.com/datafuselabs/databend/pull/5419))
- add metrics in metasrv ([#5208](https://github.com/datafuselabs/databend/pull/5208))

**Migrate to new planner**

- support limit for new planner ([#5301](https://github.com/datafuselabs/databend/pull/5301))
- support `TRY_CAST`, `EXTRACT` and `INTERVAL` ([#5362](https://github.com/datafuselabs/databend/pull/5362))
- enhance GROUP BY semantic check ([#5431](https://github.com/datafuselabs/databend/pull/5431))

**Work around `JOIN`**

- support `using` and `natural` ([#5423](https://github.com/datafuselabs/databend/pull/5423))

### RFC

- [Config Backward Compatibility](https://databend.rs/doc/contributing/rfcs/config-backward-compatibility)

### Improvement

- avoid ub and delele unnecessary unsafe ([#5338](https://github.com/datafuselabs/databend/pull/5338))
- fix get function unnecessary double column loop ([#5349](https://github.com/datafuselabs/databend/pull/5349))
- display friendly error if not started with valid flags ([#5443](https://github.com/datafuselabs/databend/pull/5443))

### Build / Testing / CI

- Sql logic test framework ([#5416](https://github.com/datafuselabs/databend/pull/5416))

### Bug fixes

- fix some cases in aggregator plan ([#5307](https://github.com/datafuselabs/databend/pull/5307))
- fix wrong result of memory table engine ([#5364](https://github.com/datafuselabs/databend/pull/5364))
- fix server hang when processor panic ([#5394](https://github.com/datafuselabs/databend/pull/5394))

## Tips

Let's learn a weekly tip from Databend.

### Analyze User Retention With Databend

User retention helps you analyze how many users return to your product or service. Let's go through an example and see how to analyze it in Databend.

**Create a Table**

```SQL
CREATE TABLE events(`user_id` INT, `login_date` DATE);
```

Now we have a table with the following fields:

- `user_id` - a unique identifier for user
- `login_date` - user login date

**User Retention Analysis**

It's easy and performance to use Databend Retention Function to do the user retention analysis.

```SQL
SELECT
    sum(r[0]) AS r1,
    sum(r[1]) AS r2,
    sum(r[2]) AS r3
FROM
(
    SELECT
        user_id,
        retention(login_date = '2022-05-15', login_date = '2022-05-16', login_date = '2022-05-17') AS r
    FROM events
    GROUP BY user_id
);
```

**Learn more:**

- [How to Analyze User Retention With Databend](https://databend.rs/doc/learn/analyze-user-retention-with-databend)
- [Databend Retention Function](https://databend.rs/doc/reference/functions/aggregate-functions/aggregate-retention)
- [Support aggregate function `RETENTION`](https://github.com/datafuselabs/databend/pull/4970)

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.7.51-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.51-nightly)
- [v0.7.50-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.50-nightly)
- [v0.7.49-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.49-nightly)
- [v0.7.48-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.48-nightly)
- [v0.7.47-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.47-nightly)
- [v0.7.46-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.46-nightly)
- [v0.7.45-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.45-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

| [<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) | [<img alt="ariesdevil" src="https://avatars.githubusercontent.com/u/7812909?v=4&s=117" width="117">](https://github.com/ariesdevil) | [<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) | [<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) | [<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) | [<img alt="everpcpc" src="https://avatars.githubusercontent.com/u/1808802?v=4&s=117" width="117">](https://github.com/everpcpc) |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
|                                             [andylokandy](https://github.com/andylokandy)                                             |                                             [ariesdevil](https://github.com/ariesdevil)                                             |                                             [b41sh](https://github.com/b41sh)                                             |                                            [BohuTANG](https://github.com/BohuTANG)                                             |                                            [drmingdrmer](https://github.com/drmingdrmer)                                            |                                             [everpcpc](https://github.com/everpcpc)                                             |

| [<img alt="fkuner" src="https://avatars.githubusercontent.com/u/39162698?v=4&s=117" width="117">](https://github.com/fkuner) | [<img alt="junnplus" src="https://avatars.githubusercontent.com/u/8097526?v=4&s=117" width="117">](https://github.com/junnplus) | [<img alt="leiysky" src="https://avatars.githubusercontent.com/u/22445410?v=4&s=117" width="117">](https://github.com/leiysky) | [<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) | [<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) | [<img alt="RinChanNOWWW" src="https://avatars.githubusercontent.com/u/33975039?v=4&s=117" width="117">](https://github.com/RinChanNOWWW) |
| :--------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: |
|                                             [fkuner](https://github.com/fkuner)                                              |                                             [junnplus](https://github.com/junnplus)                                             |                                             [leiysky](https://github.com/leiysky)                                              |                                             [lichuang](https://github.com/lichuang)                                             |                                            [mergify[bot]](https://github.com/apps/mergify)                                             |                                             [RinChanNOWWW](https://github.com/RinChanNOWWW)                                              |

| [<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) | [<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) | [<img alt="usamoi" src="https://avatars.githubusercontent.com/u/79277854?v=4&s=117" width="117">](https://github.com/usamoi) | [<img alt="weakish" src="https://avatars.githubusercontent.com/u/114114?v=4&s=117" width="117">](https://github.com/weakish) | [<img alt="wubx" src="https://avatars.githubusercontent.com/u/320680?v=4&s=117" width="117">](https://github.com/wubx) | [<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |
| :-----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: |
|                                             [sundy-li](https://github.com/sundy-li)                                             |                                             [TCeason](https://github.com/TCeason)                                              |                                             [usamoi](https://github.com/usamoi)                                              |                                            [weakish](https://github.com/weakish)                                             |                                            [wubx](https://github.com/wubx)                                             |                                             [Xuanwo](https://github.com/Xuanwo)                                             |

| [<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) | [<img alt="ygf11" src="https://avatars.githubusercontent.com/u/3428089?v=4&s=117" width="117">](https://github.com/ygf11) | [<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) | [<img alt="ZeaLoVe" src="https://avatars.githubusercontent.com/u/10904090?v=4&s=117" width="117">](https://github.com/ZeaLoVe) | [<img alt="zhang2014" src="https://avatars.githubusercontent.com/u/8087042?v=4&s=117" width="117">](https://github.com/zhang2014) |     |
| :--------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: | :-: |
|                                             [xudong963](https://github.com/xudong963)                                              |                                             [ygf11](https://github.com/ygf11)                                             |                                             [youngsofun](https://github.com/youngsofun)                                             |                                             [ZeaLoVe](https://github.com/ZeaLoVe)                                              |                                             [zhang2014](https://github.com/zhang2014)                                             |     |

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://datafusecloud.slack.com/join/shared_invite/zt-nojrc9up-50IRla1Y1h56rqwCTkkDJA)
