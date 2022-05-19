+++
title = "This week in Databend #22"
date = 2021-12-29
slug = "2021-12-29-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **support user defined function** by [@lianghanzhen](https://github.com/lianghanzhen)
  - support user defined function ([#3655](https://github.com/datafuselabs/databend/pull/3655))
  - alter function feature ([#3670](https://github.com/datafuselabs/databend/pull/3670))
  - support expression as definition ([#3684](https://github.com/datafuselabs/databend/pull/3684))
- **add new planner framework** by [@leiysky](https://github.com/leiysky) ([#2983](https://github.com/datafuselabs/databend/pull/2983))
- **add more strings functions**
  - `CHAR` by [@BlackSmith96](https://github.com/BlackSmith96) ([#3552](https://github.com/datafuselabs/databend/pull/3552), merging in [#3644](https://github.com/datafuselabs/databend/pull/3644) by [@sundy-li](https://github.com/sundy-li))

## Improvement

- **add new ArrayBuilder & Improve merge result** by [@Veeupup](https://github.com/Veeupup) ([#3665](https://github.com/datafuselabs/databend/pull/3665))
- **add DataTypeAndNullable** by [@zhang2014](https://github.com/zhang2014) ([#3658](https://github.com/datafuselabs/databend/pull/3658))
- **support append columns in create table as select** by [@Junnplus](https://github.com/Junnplus) ([#3668](https://github.com/datafuselabs/databend/pull/3668))
- **change nullable function's signature to accept data field** by [@junli1026](https://github.com/junli1026) ([#3632](https://github.com/datafuselabs/databend/pull/3632))
- **use codegen script to generate the arithmetic result type** by [@zhyass](https://github.com/zhyass) ([#3652](https://github.com/datafuselabs/databend/pull/3652))
- **merge all tracing layer to one** by [@BohuTANG](https://github.com/BohuTANG). ([#3647](https://github.com/datafuselabs/databend/pull/3647))
- **refactor fuse readers and fuse cache** by [@Veeupup](https://github.com/Veeupup) ([#3604](https://github.com/datafuselabs/databend/pull/3604))
- **replace lazy_static with once_cell** by [@PsiACE](https://github.com/PsiACE) ([#3631](https://github.com/datafuselabs/databend/pull/3631))
- **support datetime64** by [@b41sh](https://github.com/b41sh). ([#3580](https://github.com/datafuselabs/databend/pull/3580))

## Performance Improvement

- **improve performance of arithmetic plus functions** by [@zhyass](https://github.com/zhyass) ([#3615](https://github.com/datafuselabs/databend/pull/3615))

### Bug fixes

- **try fix stack overflow** by [@zhang2014](https://github.com/zhang2014) ([#3603](https://github.com/datafuselabs/databend/pull/3603))
- **fix insert select in clickhouse handler** by [@sundy-li](https://github.com/sundy-li) ([#3682](https://github.com/datafuselabs/databend/pull/3682))
- **fix de function for String hash key** by [@sundy-li](https://github.com/sundy-li) ([#3643](https://github.com/datafuselabs/databend/pull/3643))

## Tips

Let's learn a weekly tip from Databend.

### Have fun with Databend UDF (User Defined Function)

In the last week we have introduced an experimental UDF engine, thanks [@lianghanzhen](https://github.com/lianghanzhen). Let's try it out together.

**Create a UDF**

Databend supports the use of expressions as user defined functions. We can easily create a user-defined function in [lambda-like style](https://github.com/datafuselabs/databend/discussions/3672) with `CREATE FUNCTION <fn-name> AS (<fn-param0>, ...) -> <fn-expr>`. Let's create a custom function to calculate the mean of two numbers together.

```sql
mysql> CREATE FUNCTION mean2number AS (x, y) -> (x + y) / 2;
Query OK, 0 rows affected (0.05 sec)
Read 0 rows, 0 B in 0.037 sec., 0 rows/sec., 0 B/sec.
```

**Call a UDF**

Calling UDF is the same as calling any other function. In the following example we have calculated the mean of 150 and 250.

```sql
mysql> SELECT mean2number(150, 250);
+-------------------+
| ((150 + 250) / 2) |
+-------------------+
|               200 |
+-------------------+
1 row in set (0.02 sec)
Read 1 rows, 1 B in 0.018 sec., 55.59 rows/sec., 55.59 B/sec.
```

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.6.18-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.18-nightly)
- [v0.6.17-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.17-nightly)
- [v0.6.16-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.16-nightly)
- [v0.6.15-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.15-nightly)
- [v0.6.14-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.14-nightly)
- [v0.6.13-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.13-nightly)
- [v0.6.12-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.12-nightly)

## Ecosystem/Upstream

From open source, for open source. Our team is also committed to contributing to the Rust ecosystem and upstream dependencies.

- [datafuselabs/openraft](https://github.com/datafuselabs/openraft): An implementation of the Raft distributed consensus protocol using the Tokio framework. The async-raft fork, maintained by the databend team, fixes serious bugs.

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
