+++
title = "This week in Databend #59"
date = 2022-09-14
slug = "2022-09-14-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## What's Changed

Below is a list of some major changes that we don't want you to miss.

### Exciting New Features :sparkles:

**RFC**

- Idempotent Copy ([#7541](https://github.com/datafuselabs/databend/pull/7541))

**meta**

- new RPC to echo client ip ([#7538](https://github.com/datafuselabs/databend/pull/7538))
- save table stage file info into meta, remove these data when truncate table ([#7558](https://github.com/datafuselabs/databend/pull/7558))
- add grpc API `kv_api` for replacing `read_msg` and `write_msg`. ([#7605](https://github.com/datafuselabs/databend/pull/7605))

**query**

- support distributed insert select ([#7527](https://github.com/datafuselabs/databend/pull/7527))
- support purge option in copy into table ([#7518](https://github.com/datafuselabs/databend/pull/7518))

**storage**

- add clustering_history system table ([#7535](https://github.com/datafuselabs/databend/pull/7535))

**metrics**

-  abstract active instance counting ([#7545](https://github.com/datafuselabs/databend/pull/7545))

**new expression**

- support variant type ([#7572](https://github.com/datafuselabs/databend/pull/7572))
- migrate string func `insert` to func-v2 ([#7564](https://github.com/datafuselabs/databend/pull/7564))

### Code Refactor :tada:

**meta**

- remove redundant `ActionHandler`; move logic into `MetaServiceImpl` ([#7555](https://github.com/datafuselabs/databend/pull/7555))

**planner**

- Old Planner Never See Again (Part 1) ([#7576](https://github.com/datafuselabs/databend/pull/7576))
- make planner depends on `TableContext` trait ([#7600](https://github.com/datafuselabs/databend/pull/7600))

**query**

- replace recursion for fast-path insert with loop ([#7530](https://github.com/datafuselabs/databend/pull/7530))
- always list from OpenDAL instead of meta ([#7547](https://github.com/datafuselabs/databend/pull/7547))
- fix set operation err format ([#7575](https://github.com/datafuselabs/databend/pull/7575))

**new expression**

- codegen function registers ([#7556](https://github.com/datafuselabs/databend/pull/7556))
- extract number types ([#7553](https://github.com/datafuselabs/databend/pull/7553))
- improve floats ([#7574](https://github.com/datafuselabs/databend/pull/7574))

### Build/Testing/CI Infra Changes :electric_plug:

- add compat test for `CopyOptions::purge` ([#7526](https://github.com/datafuselabs/databend/pull/7526))
- run sqllogic test with docker image ([#7650](https://github.com/datafuselabs/databend/pull/7650))

### Thoughtful Bug Fix :wrench:

**planner**

- change generated alias name for scalar expression to lowercase ([#7525](https://github.com/datafuselabs/databend/pull/7525))

**query**

- add missing EOI ([#7534](https://github.com/datafuselabs/databend/pull/7534))

**cluster**

- stop tasks in cluster when select limit ([#7542](https://github.com/datafuselabs/databend/pull/7542))

**storege**

- `scan_progress` should be incr before prewhere filter ([#7566](https://github.com/datafuselabs/databend/pull/7566))

**new expression**

- fix ceil return type ([#7520](https://github.com/datafuselabs/databend/pull/7520))

## News

Let's take a look at what's new at Datafuse Labs & Databend each week.

**RFC: Idempotent Copy**

When streaming copy stage files into a table, there is a chance that some files have already been copied, So it needs some ways to avoid duplicate copying files, make it an `idempotent` operation.

- Save copy into table stage files meta information in meta service
- Avoiding duplicates when copy stage files into a table

Learn more: <https://databend.rs/doc/contributing/rfcs/idempotent-copy>

**Databend Perf with Ontime JOIN**

With several recent patches, Databend can fully support Ontime JOIN queries, so you can now also see them in the Databend Perf dashboard.

- Q5 JOIN

    ```sql
    SELECT Carrier, c, c2, c*100/c2 as c3 FROM( SELECT IATA_CODE_Reporting_Airline AS Carrier, count(*) AS c FROM ontime WHERE DepDelay>10 AND Year=2007 GROUP BY Carrier) q JOIN ( SELECT IATA_CODE_Reporting_Airline AS Carrier, count(*) AS c2 FROM ontime WHERE Year=2007 GROUP BY Carrier ) qq USING (Carrier) ORDER BY c3 DESC;
    ```

- Q6 JOIN


    ```sql
    SELECT Carrier, c, c2, c*100/c2 as c3 FROM( SELECT IATA_CODE_Reporting_Airline AS Carrier, count(*) AS c FROM ontime WHERE DepDelay>10 AND Year>=2000 AND Year<=2008 GROUP BY Carrier) q JOIN ( SELECT IATA_CODE_Reporting_Airline AS Carrier, count(*) AS c2 FROM ontime WHERE Year>=2000 AND Year<=2008 GROUP BY Carrier ) qq USING (Carrier) ORDER BY c3 DESC;
    ```

- Q7 JOIN

    ```sql
    SELECT Year, c1/c2 FROM( select Year, count(*)*100 as c1 from ontime WHERE DepDelay>10 GROUP BY Year) q JOIN ( select Year, count(*) as c2 from ontime GROUP BY Year ) qq USING (Year) ORDER BY Year;
    ```

View dashboard: <https://perf.databend.rs/>

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.8.35-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.35-nightly)
- [v0.8.34-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.34-nightly)
- [v0.8.33-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.33-nightly)
- [v0.8.32-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.32-nightly)
- [v0.8.31-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.31-nightly)
- [v0.8.30-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.30-nightly)
- [v0.8.29-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.29-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) |[<img alt="ariesdevil" src="https://avatars.githubusercontent.com/u/7812909?v=4&s=117" width="117">](https://github.com/ariesdevil) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="Chasen-Zhang" src="https://avatars.githubusercontent.com/u/15354455?v=4&s=117" width="117">](https://github.com/Chasen-Zhang) |[<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |[<img alt="everpcpc" src="https://avatars.githubusercontent.com/u/1808802?v=4&s=117" width="117">](https://github.com/everpcpc) |
:---: |:---: |:---: |:---: |:---: |:---: |
[andylokandy](https://github.com/andylokandy) |[ariesdevil](https://github.com/ariesdevil) |[BohuTANG](https://github.com/BohuTANG) |[Chasen-Zhang](https://github.com/Chasen-Zhang) |[drmingdrmer](https://github.com/drmingdrmer) |[everpcpc](https://github.com/everpcpc) |

[<img alt="flaneur2020" src="https://avatars.githubusercontent.com/u/129800?v=4&s=117" width="117">](https://github.com/flaneur2020) |[<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |[<img alt="RinChanNOWWW" src="https://avatars.githubusercontent.com/u/33975039?v=4&s=117" width="117">](https://github.com/RinChanNOWWW) |[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |
:---: |:---: |:---: |:---: |:---: |:---: |
[flaneur2020](https://github.com/flaneur2020) |[lichuang](https://github.com/lichuang) |[mergify[bot]](https://github.com/apps/mergify) |[RinChanNOWWW](https://github.com/RinChanNOWWW) |[soyeric128](https://github.com/soyeric128) |[sundy-li](https://github.com/sundy-li) |

[<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) |[<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |[<img alt="zhang2014" src="https://avatars.githubusercontent.com/u/8087042?v=4&s=117" width="117">](https://github.com/zhang2014) |[<img alt="zhyass" src="https://avatars.githubusercontent.com/u/34016424?v=4&s=117" width="117">](https://github.com/zhyass) | |
:---: |:---: |:---: |:---: |:---: |:---: |
[TCeason](https://github.com/TCeason) |[Xuanwo](https://github.com/Xuanwo) |[xudong963](https://github.com/xudong963) |[zhang2014](https://github.com/zhang2014) |[zhyass](https://github.com/zhyass) | |

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
