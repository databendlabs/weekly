+++
title = "This week in Databend #32"
date = 2022-03-09
slug = "2022-03-09-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **databend-query: external source with new processor**: make external source(like S3) as table engine. by [@BohuTANG](https://github.com/BohuTANG), ([#4277](https://github.com/datafuselabs/databend/pull/4277))
- **functions: support `EXTRACT` && `toYear`** by [@clark1013](https://github.com/clark1013), ([#4329](https://github.com/datafuselabs/databend/pull/4329))

## Improvement

- **databend-query: add more metrics into query_log table**: io metrics of dal level. by [@sundy-li](https://github.com/sundy-li), ([#4365](https://github.com/datafuselabs/databend/pull/4365))
- **databend-meta: refactor role identity**: remove host for role identity. by [@Junnplus](https://github.com/Junnplus), ([#4370](https://github.com/datafuselabs/databend/pull/4370))
- **databend-query: refactor the comparison function by using `ScalarBinaryExpression`** by [@zhyass](https://github.com/zhyass), ([#4285](https://github.com/datafuselabs/databend/pull/4285))
- **databend-query: add CALL command**: impl CALL syntax parser, add Trait for system function. by [@Junnplus](https://github.com/Junnplus), ([#4315](https://github.com/datafuselabs/databend/pull/4315))

## Performance Improvement

- **datablocks&datavalues: support nullable group by**: improved by 60% on the second query with metacache. by [@sundy-li](https://github.com/sundy-li), ([#4340](https://github.com/datafuselabs/databend/pull/4340))
- **datablocks: use `SmallVec`` to improve HashMethod Serialize**: improved by 30%~50% in ontime dataset. by [@sundy-li](https://github.com/sundy-li), ([#4353](https://github.com/datafuselabs/databend/pull/4353))
- **datavalues: Simd Selection of column filter**: improved by ~25%. by [@platoneko](https://github.com/platoneko), ([#4271](https://github.com/datafuselabs/databend/pull/4271))

## Bug fixes

- **databend-query: fix broken tracing spans** by [@dantengsky](https://github.com/dantengsky), ([#4356](https://github.com/datafuselabs/databend/pull/4356))
- **mysql servers: make async executor running inside the right runtime** by [@sundy-li](https://github.com/sundy-li), ([#4334](https://github.com/datafuselabs/databend/pull/4334))
- **mysql servers: fix hangs on authenticate** by [@flaneur2020](https://github.com/flaneur2020), ([#4317](https://github.com/datafuselabs/databend/pull/4317))

## Tips

Let's learn a weekly tip from Databend.

### RFC: Semi-structured Data Types

Semi-structured data types are used to represent schemaless data formats, such as JSON, XML, and so on.
In order to be compatible with [Snowflake's SQL syntax](https://docs.snowflake.com/en/sql-reference/data-types-semistructured.html), we plan to support the following three semi-structured data types:

- `Variant`: A tagged universal type, which can store values of any other type, including `Object` and `Array`.
- `Object`: Used to represent collections of key-value pairs, where the key is a non-empty string, and the value is a value of `Variant` type.
- `Array`: Used to represent dense or sparse arrays of arbitrary size, where the index is a non-negative integer (up to 2^31-1), and values are `Variant` types.

**For more information** see [Semi-structured data types design](https://databend.rs/dev/rfcs/query/semi-structured-data-types). **For ongoing work** see [databend#4348](https://github.com/datafuselabs/databend/pull/4348).

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.6.86-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.86-nightly)
- [v0.6.85-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.85-nightly)
- [v0.6.84-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.84-nightly)
- [v0.6.83-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.83-nightly)
- [v0.6.82-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.82-nightly)
- [v0.6.81-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.81-nightly)
- [v0.6.80-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.80-nightly)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://datafusecloud.slack.com/join/shared_invite/zt-nojrc9up-50IRla1Y1h56rqwCTkkDJA)
