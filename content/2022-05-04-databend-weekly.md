+++
title = "This week in Databend #40"
date = 2022-05-04
slug = "2022-05-04-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **databend-query(common): introduce a helper ExpressionEvaluator to simplify expression evaluation** by [@leiysky](https://github.com/leiysky), ([#5108](https://github.com/datafuselabs/databend/pull/5108))
- **databend-query(parser):  support more statements** by [@andylokandy](https://github.com/andylokandy), ([#5089](https://github.com/datafuselabs/databend/pull/5089))
- **databend-query: aggregator in new planner** by [@xudong963](https://github.com/xudong963), ([#5027](https://github.com/datafuselabs/databend/pull/5027) & [#5115](https://github.com/datafuselabs/databend/pull/5115))
- **common-functions: add scalar function `humanize`** by [@cadl](https://github.com/cadl), ([#5073](https://github.com/datafuselabs/databend/pull/5073))

## Improvement

- **databend-query(processor): refactor insert into query for fuse engine** by [@zhang2014](https://github.com/zhang2014), ([#5139](https://github.com/datafuselabs/databend/pull/5139))
- **datablocks: add gather kernels for datablock** by [@sundy-li](https://github.com/sundy-li), ([#5114](https://github.com/datafuselabs/databend/pull/5114))
- **common-meta: `CreateDatabaseReq`/`DropDatabaseReq` use `DatabaseNameIdent` to specify to db to create/delete** by [@drmingdrmer](https://github.com/drmingdrmer ), ([#5102](https://github.com/datafuselabs/databend/pull/5102) & [#5104](https://github.com/datafuselabs/databend/pull/5104))
- **common-functions: specialize `CastFunction` with from type** by [@leiysky](https://github.com/leiysky), ([#5124](https://github.com/datafuselabs/databend/pull/5124))
- **datavalues: remove useless precision convert & remove tz in type timestamp** by [@Veeupup](https://github.com/Veeupup), ([#5084](https://github.com/datafuselabs/databend/pull/5084))
- **datavalues: using enum_dispatch to represent data_type** by [@PsiACE](https://github.com/PsiACE), ([#5063](https://github.com/datafuselabs/databend/pull/5063))

## Documentation

- **add how-to guides page** by [@BohuTANG](https://github.com/BohuTANG), ([#5113](https://github.com/datafuselabs/databend/pull/5113))
- **add category for some functions** by [@jiahui-97](https://github.com/jiahui-97), ([#4843](https://github.com/datafuselabs/databend/pull/4843))

## Bug fixes

- **databend-query:  fix `trim` function** by [@jiahui-97](https://github.com/jiahui-97), ([#5136](https://github.com/datafuselabs/databend/pull/5136))
- **databend-query: manually drop the aggregate states to avoid memory leak** by [@sundy-li](https://github.com/sundy-li), ([#5056](https://github.com/datafuselabs/databend/pull/5056))
- **databend-query: fix clickhouse worker hang when interpreter fail to execute** by [@chowc](https://github.com/chowc), ([#5091](https://github.com/datafuselabs/databend/pull/5091))

## Tips

Let's learn a weekly tip from Databend.

### RFC | New SQL Logic Test Framework

The Stateless/Stateful test suite is used in Databend to ensure that the query results are correct. However, it has some shortages in current logic test which should be improved.

- Comparing output from binary to a result file cannot be extended to other protocols.
- The result file cannot show the result for each statement.
- Currently, we do not provide error handling for sql logic tests
- We could not extend sql logic statement with sorting, retry and other logics.

So, we plan to refactor this testing solution to introduce an extended version of [sqllogictest](https://www.sqlite.org/sqllogictest/doc/trunk/about.wiki). The statement spec could be categorized to following fields:

- `statement ok`: the sql statement is correct and the output is expected success.
- `statement error <error regex>`: the sql statement output is expected error.
- `statement query <desired_query_schema_type> <options> <labels>`: the sql statement output is expected success with desired result.

You can check out [RFC | New SQL Logic Test Framework](https://databend.rs/doc/contributing/rfcs/new_sql_logic_test_framework) to learn more.

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.7.38-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.38-nightly)
- [v0.7.37-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.37-nightly)
- [v0.7.36-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.36-nightly)
- [v0.7.35-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.35-nightly)
- [v0.7.34-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.34-nightly)
- [v0.7.33-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.33-nightly)
- [v0.7.32-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.25-nightly)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
