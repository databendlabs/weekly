+++
title = "This week in Databend #46"
date = 2022-06-15
slug = "2022-06-15-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- `WINDOW` function ([#5401](https://github.com/datafuselabs/databend/pull/5401))
- new table engine: `RANDOM` ([#5896](https://github.com/datafuselabs/databend/pull/5896))
- clickhouse http handler support TsvWithNamesAndTypes ([#5898](https://github.com/datafuselabs/databend/pull/5898))
- add benchmark scripts of metasrv ([#5865](https://github.com/datafuselabs/databend/pull/5865))
- support remove stage files ([#5788](https://github.com/datafuselabs/databend/pull/5788))
- support struct data type ([#5940](https://github.com/datafuselabs/databend/pull/5940))

**optimizer**

- support some common optimizer rules to refine optimizer framework ([#5877](https://github.com/datafuselabs/databend/pull/5877))
- support predicate push down through join ([#5914](https://github.com/datafuselabs/databend/pull/5914))
- support constant folding ([#5924](https://github.com/datafuselabs/databend/pull/5924))

**new planner**

- support left outer join and right outer join ([#5972](https://github.com/datafuselabs/databend/pull/5972))
- support semi and anti join in new planner ([#5869](https://github.com/datafuselabs/databend/pull/5869))
- support set operators in parser and planner ([#5833](https://github.com/datafuselabs/databend/pull/5833))
- support table statements in new planner ([#5907](https://github.com/datafuselabs/databend/pull/5907))
- add `DDL STAGE` for new planner framework ([#5821](https://github.com/datafuselabs/databend/pull/5821))
- support rename database in new planner ([#5887](https://github.com/datafuselabs/databend/pull/5887))
- support `alter/drop view` in new planner ([#5862](https://github.com/datafuselabs/databend/pull/5862) & [#5920](https://github.com/datafuselabs/databend/pull/5920))
- migrate CREATE/DROP ROLE statement to new planner ([#5935](https://github.com/datafuselabs/databend/pull/5935))

### Improvement

- row base serializer  ([#5791](https://github.com/datafuselabs/databend/pull/5791))
- renaming for better readability ([#5879](https://github.com/datafuselabs/databend/pull/5879))
- list/remove stage files from meta api ([#5857](https://github.com/datafuselabs/databend/pull/5857))
- use unboxed_simple to simple GAT in async-trait ([#5999](https://github.com/datafuselabs/databend/pull/5999))
- add meta grpc client network metrics ([#5978](https://github.com/datafuselabs/databend/pull/5978))
- improve clickhouse http handler ([#5933](https://github.com/datafuselabs/databend/pull/5933))
- use micromarshal to make references clearer ([#5974](https://github.com/datafuselabs/databend/pull/5974))

### Build / Testing / CI

- use fuse engine instead of memory engine in test ([#5530](https://github.com/datafuselabs/databend/pull/5530))

### Bug fixes

- fix read quoted string ([#5870](https://github.com/datafuselabs/databend/pull/5870))
- corretly handle catalog in statements ([#5909](https://github.com/datafuselabs/databend/pull/5909))
- fix correlated subquery with joins ([#5947](https://github.com/datafuselabs/databend/pull/5947))
- server panic when exceeds max active sessions ([#5928](https://github.com/datafuselabs/databend/pull/5928))
- fix status cause mysql client hang ([#5961](https://github.com/datafuselabs/databend/pull/5961))
- `ProcessorExecutorStream` lost data ([#5983](https://github.com/datafuselabs/databend/pull/5983))
- fix incorrect return datatype of function if ([#5980](https://github.com/datafuselabs/databend/pull/5980))

## Tips

Let's learn a weekly tip from Databend.

### Using Join with Databend

As you can see, one of the major efforts of Databend in recent times has been the development and migration to the new Planner. We have implemented support for Join on the new Planner to better accommodate multi-table queries.

> To use JOIN, you must enable the new Databend planner first. To do so, perform the following command in the SQL client:
> ```SQL
> set enable_planner_v2=1;
> ```

A join allows you to combine columns from two or more tables into a single result set. Databend supports the following join types:

- Inner Join
- Natural Join
- Cross Join
- Left Join
- Right Join

**Let's see a `CROSS JOIN` example**

A *cross join* returns a result set that includes each row from the first table joined with each row from the second table.

```sql    
SELECT select_list
FROM table_a
	CROSS JOIN table_b
```

Imagine we have the following tables:

Table "vip_info": This table stores the VIP client information.

```
| Client_ID | Region    |
| --------- | --------- |
| 101       | Toronto   |
| 102       | Quebec    |
| 103       | Vancouver |
```

Table "gift": This table lists the gift options for the VIP clients.

```
| Gift      |
| --------- |
| Croissant |
| Donut     |
| Coffee    |
| Soda      |
```

The following command returns a result set that assigns each gift option to each VIP client:

```sql    
select * from vip_info cross join gift;
```

Output:

```
| Client_ID | Region    | Gift      |
| --------- | --------- | --------- |
| 101       | Toronto   | Croissant |
| 101       | Toronto   | Donut     |
| 101       | Toronto   | Coffee    |
| 101       | Toronto   | Soda      |
| 102       | Quebec    | Croissant |
| 102       | Quebec    | Donut     |
| 102       | Quebec    | Coffee    |
| 102       | Quebec    | Soda      |
| 103       | Vancouver | Croissant |
| 103       | Vancouver | Donut     |
| 103       | Vancouver | Coffee    |
| 103       | Vancouver | Soda      |
```

**Learn more:**

- [DOC | JOIN](https://databend.rs/doc/reference/sql/query-syntax/dml-join)

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.7.87-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.87-nightly)
- [v0.7.86-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.86-nightly)
- [v0.7.85-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.85-nightly)
- [v0.7.84-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.84-nightly)
- [v0.7.83-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.83-nightly)
- [v0.7.82-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.82-nightly)
- [v0.7.81-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.81-nightly)
- [v0.7.80-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.80-nightly)
- [v0.7.79-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.79-nightly)
- [v0.7.78-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.78-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

| [<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) | [<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) | [<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) | [<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) | [<img alt="doki23" src="https://avatars.githubusercontent.com/u/11144133?v=4&s=117" width="117">](https://github.com/doki23) | [<img alt="everpcpc" src="https://avatars.githubusercontent.com/u/1808802?v=4&s=117" width="117">](https://github.com/everpcpc) |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
|                                             [andylokandy](https://github.com/andylokandy)                                             |                                             [b41sh](https://github.com/b41sh)                                             |                                            [BohuTANG](https://github.com/BohuTANG)                                             |                                             [dantengsky](https://github.com/dantengsky)                                              |                                             [doki23](https://github.com/doki23)                                              |                                             [everpcpc](https://github.com/everpcpc)                                             |

| [<img alt="fkuner" src="https://avatars.githubusercontent.com/u/39162698?v=4&s=117" width="117">](https://github.com/fkuner) | [<img alt="hantmac" src="https://avatars.githubusercontent.com/u/7600925?v=4&s=117" width="117">](https://github.com/hantmac) | [<img alt="junnplus" src="https://avatars.githubusercontent.com/u/8097526?v=4&s=117" width="117">](https://github.com/junnplus) | [<img alt="Kikkon" src="https://avatars.githubusercontent.com/u/19528375?v=4&s=117" width="117">](https://github.com/Kikkon) | [<img alt="leiysky" src="https://avatars.githubusercontent.com/u/22445410?v=4&s=117" width="117">](https://github.com/leiysky) | [<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |
| :--------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
|                                             [fkuner](https://github.com/fkuner)                                              |                                             [hantmac](https://github.com/hantmac)                                             |                                             [junnplus](https://github.com/junnplus)                                             |                                             [Kikkon](https://github.com/Kikkon)                                              |                                             [leiysky](https://github.com/leiysky)                                              |                                             [lichuang](https://github.com/lichuang)                                             |

| [<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) | [<img alt="PsiACE" src="https://avatars.githubusercontent.com/u/36896360?v=4&s=117" width="117">](https://github.com/PsiACE) | [<img alt="RinChanNOWWW" src="https://avatars.githubusercontent.com/u/33975039?v=4&s=117" width="117">](https://github.com/RinChanNOWWW) | [<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) | [<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) | [<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) |
| :------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
|                                            [mergify[bot]](https://github.com/apps/mergify)                                             |                                             [PsiACE](https://github.com/PsiACE)                                              |                                             [RinChanNOWWW](https://github.com/RinChanNOWWW)                                              |                                              [soyeric128](https://github.com/soyeric128)                                              |                                             [sundy-li](https://github.com/sundy-li)                                             |                                             [TCeason](https://github.com/TCeason)                                              |

| [<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) | [<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) | [<img alt="ygf11" src="https://avatars.githubusercontent.com/u/3428089?v=4&s=117" width="117">](https://github.com/ygf11) | [<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) | [<img alt="ZeaLoVe" src="https://avatars.githubusercontent.com/u/10904090?v=4&s=117" width="117">](https://github.com/ZeaLoVe) | [<img alt="zhyass" src="https://avatars.githubusercontent.com/u/34016424?v=4&s=117" width="117">](https://github.com/zhyass) |
| :-------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
|                                             [Xuanwo](https://github.com/Xuanwo)                                             |                                             [xudong963](https://github.com/xudong963)                                              |                                             [ygf11](https://github.com/ygf11)                                             |                                             [youngsofun](https://github.com/youngsofun)                                             |                                             [ZeaLoVe](https://github.com/ZeaLoVe)                                              |                                             [zhyass](https://github.com/zhyass)                                              |

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
