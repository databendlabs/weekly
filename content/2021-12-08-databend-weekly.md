+++
title = "This week in Databend #19"
date = 2021-12-08
slug = "2021-12-08-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **add query log table write** by [@BohuTANG](https://github.com/BohuTANG). ([#3273](https://github.com/datafuselabs/databend/pull/3273))
- **return nodes list in metasrv server** by [@sunisdown](https://github.com/sunisdown). ([#2943](https://github.com/datafuselabs/databend/pull/2943))
- **support create stage statement** by [@GrapeBaBa](https://github.com/GrapeBaBa). ([#3253](https://github.com/datafuselabs/databend/pull/3253))
- **default expression support** by [@sundy-li](https://github.com/sundy-li/). ([#3282](https://github.com/datafuselabs/databend/pull/3282))
- **add system.query_log** by [@SGZW](https://github.com/SGZW). ([#3234](https://github.com/datafuselabs/databend/pull/3234))
- **add revoke statement** by [@flaneur2020](https://github.com/flaneur2020). ([#3194](https://github.com/datafuselabs/databend/pull/3194))
- **add strings functions**
  - `INSTR`, `FIELD`, `SUBSTRING`, `SUBSTR`, `MID`, `SUBSTRING_INDEX`, `REVERSE`, `REPLACE`, `STRCMP`, `SPACE`, `LEFT`, `RIGHT`, `LPAD`, `RPAD`, `CHARACTER_LENGTH`, `CHAR_LENGTH`, `ORD` by [@mshauneu](https://github.com/mshauneu) ([#3217](https://github.com/datafuselabs/databend/pull/3217), [#3215](https://github.com/datafuselabs/databend/pull/3215), [#3231](https://github.com/datafuselabs/databend/pull/3231), etc.)
  - `bin_length` by [@radmirnovii](https://github.com/radmirnovii) ([#3232](https://github.com/datafuselabs/databend/pull/3232))
  - `octet_length` by [@unconsolable](https://github.com/unconsolable) ([#3227](https://github.com/datafuselabs/databend/pull/3227))
  - `trim` by [@QuantumBear](https://github.com/QuantumBear) ([#3196](https://github.com/datafuselabs/databend/pull/3196))
  - `CONCAT`, `CONCAT_WS` by [@Veeupup](https://github.com/Veeupup) ([#3214](https://github.com/datafuselabs/databend/pull/3214), [#3260](https://github.com/datafuselabs/databend/pull/3260))

## Improvement

- **replace AppendOperationLogEntry vec[] with stream** by [@junli1026](https://github.com/junli1026) ([#3296](https://github.com/datafuselabs/databend/pull/3296))
- **support create table like statement** by [@junli1026](https://github.com/junli1026) ([#3292](https://github.com/datafuselabs/databend/pull/3292))
- **show table options** by [@Junnplus](https://github.com/Junnplus) ([#3252](https://github.com/datafuselabs/databend/pull/3252))
- **make `StateMachine::apply` use transaction to perform operations** by [@ariesdevil](https://github.com/ariesdevil). ([#3102](https://github.com/datafuselabs/databend/pull/3102))
- **complete dates function monotonicity check** by [@zhyass](https://github.com/zhyass). ([#3228](https://github.com/datafuselabs/databend/pull/3228))
- **http: refine the mod import and add http usage function** by [@BohuTANG](https://github.com/BohuTANG). ([#3246](https://github.com/datafuselabs/databend/pull/3246))
- **refactoring insert interpreter** by [@dantengsky](https://github.com/dantengsky). ([#3226](https://github.com/datafuselabs/databend/pull/3226))
- **[common/function] simplify get_layout_offsets** by [@drmingdrmer](https://github.com/drmingdrmer) ([#3223](https://github.com/datafuselabs/databend/pull/3223))
- **add monotonicity in range filter** by [@zhyass](https://github.com/zhyass). ([#3195](https://github.com/datafuselabs/databend/pull/3195))
- **introduce compact statement** by [@dantengsky](https://github.com/dantengsky). ([#3182](https://github.com/datafuselabs/databend/pull/3182))

## Performance Improvement

- **string performence improvement** by [@Veeupup](https://github.com/Veeupup). ([#3288](https://github.com/datafuselabs/databend/pull/3288))

### Bug fixes

- **fix try_from_literal** by [@dust1](https://github.com/dust1). ([#3197](https://github.com/datafuselabs/databend/pull/3197))
- **fix github table engine inits** by [@BohuTANG](https://github.com/BohuTANG). ([#3204](https://github.com/datafuselabs/databend/pull/3204))

## Tips

Let's learn a weekly tip from Databend.

### How to explore github repos via Databend

Databend now supports GitHub as a data source, and you can read the relevant code at [storages/github](https://github.com/datafuselabs/databend/tree/main/query/src/storages/github).

**create github-engine based database**

Before running databend, your [Github Access Token](https://github.com/settings/tokens) should be set.

```shell
export GITHUB_TOKEN=<your_token>;
```

Create a Github powered database.

```sql
databend :) create database datafuselabs engine=github;

0 rows in set. Elapsed: 2.611 sec. 
```

**show all tables**

Show all tables in this database, which are currently flattened. This means that Repos, issues and PRs are all in the form of tables.

```sql
databend :) use datafuselabs;

0 rows in set. Elapsed: 0.013 sec.

databend :) show tables;

+---------------------------------+
| name                            |
+---------------------------------+
| .github                         |
| .github_comments                |
| .github_issues                  |
| .github_prs                     |
| databend                        |
| databend-playground             |
| databend-playground_comments    |
| databend-playground_issues      |
| databend-playground_prs         |
| databend_comments               |
| databend_issues                 |
| databend_prs                    |
| ...                             |
+---------------------------------+

36 rows in set. Elapsed: 0.053 sec. 

```

**View basic information about a repo**

```
databend :) select * from databend;

+------------+----------+------------+------------+-------------+----------------+-------------------+-------------------+
| reposiroty | language | license    | star_count | forks_count | watchers_count | open_issues_count | subscribers_count |
+------------+----------+------------+------------+-------------+----------------+-------------------+-------------------+
| databend   | Rust     | apache-2.0 |       2661 |         252 |           2661 |               349 |                63 |
+------------+----------+------------+------------+-------------+----------------+-------------------+-------------------+

1 rows in set. Elapsed: 1.368 sec. 
```

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.5.38-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.38-nightly)
- [v0.5.37-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.37-nightly)
- [v0.5.36-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.36-nightly)
- [v0.5.35-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.35-nightly)
- [v0.5.34-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.34-nightly)
- [v0.5.33-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.33-nightly)
- [v0.5.32-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.32-nightly)

## Ecosystem/Upstream

From open source, for open source. Our team is also committed to contributing to the Rust ecosystem and upstream dependencies.

- arrow2 [#641](https://github.com/jorgecarleitao/arrow2/pull/641) & [#664](https://github.com/jorgecarleitao/arrow2/pull/664): Add lower and upper support for string. by [@Xuanwo](https://github.com/Xuanwo)
- [arrow2 #651: Improved performance in cast Primitive to Binary/String again (4x)](https://github.com/jorgecarleitao/arrow2/pull/651): `Memcpy` style write, no extra copy. by [@sundy-li](https://github.com/sundy-li/)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
