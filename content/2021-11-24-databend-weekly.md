+++
title = "This week in Databend #17"
date = 2021-11-24
slug = "2021-11-24-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **add stage to management** by [@BohuTANG](https://github.com/BohuTANG). ([#2984](https://github.com/datafuselabs/databend/pull/2984))
- **support Copy command from stage location into table** by [@sundy-li](https://github.com/SGZW). ([#2878](https://github.com/datafuselabs/databend/pull/2878))
- **support drop user** by [@SGZW](https://github.com/SGZW). ([#2913](https://github.com/datafuselabs/databend/pull/2913))
- **support insert select query** by [@ygf11](https://github.com/ygf11). ([#2765](https://github.com/datafuselabs/databend/pull/2765))
- **add digests functions**: `md5`, `sha1`, `sha256` by [@mshauneu](https://github.com/mshauneu) ([#2881](https://github.com/datafuselabs/databend/pull/2881))
- **add math functions**
  - `inet_aton`, `sign`, `round`, `truncate`, `rand` by [@mshauneu](https://github.com/mshauneu) ([#2862](https://github.com/datafuselabs/databend/pull/2862), [#2862](https://github.com/datafuselabs/databend/pull/2862), [#2923](https://github.com/datafuselabs/databend/pull/2923), [#2989](https://github.com/datafuselabs/databend/pull/2989))
  - `arc`, `pow`, `sqrt` by [@Junnplus](https://github.com/Junnplus) ([#2888](https://github.com/datafuselabs/databend/pull/2888), [#2949](https://github.com/datafuselabs/databend/pull/2949), [#2905](https://github.com/datafuselabs/databend/pull/2905))

## Improvement

- **store Database.engine to metasrv** by [@Veeupup](https://github.com/Veeupup). ([#2985](https://github.com/datafuselabs/databend/pull/2985))
- **clickhouse-srv support tuple type** by [@zhyass](https://github.com/zhyass). ([#2940](https://github.com/datafuselabs/databend/pull/2940))
- **ImmutableCatalog and MutableCatalog** by [@BohuTANG](https://github.com/BohuTANG). ([#2930](https://github.com/datafuselabs/databend/pull/2930))
- **add parser on GRANT .. TO database.table** by [@flaneur2020](https://github.com/flaneur2020). ([#2901](https://github.com/datafuselabs/databend/pull/2901))
- **asynchronous read partitions** by [@zhang2014](https://github.com/zhang2014). ([#2524](https://github.com/datafuselabs/databend/pull/2524))

### Bug fixes

- **bugfix show processlist** by [@flaneur2020](https://github.com/flaneur2020). ([#2988](https://github.com/datafuselabs/databend/pull/2988))
- **check read_only when creating/dropping database** by [@Veeupup](https://github.com/Veeupup). ([#2867](https://github.com/datafuselabs/databend/pull/2867))
- **wrong query result when use alias** by [@miamia0](https://github.com/miamia0). ([#2891](https://github.com/datafuselabs/databend/pull/2891))

## Tips

Let's learn a weekly tip from Databend.

**What's scalar functions**

> Scalar functions (sometimes referred to as User-Defined Functions / UDFs) return a single value as a return value for each row, not as a result set, and can be used in most places within a query or SET statement, except for the FROM clause.

Want to learn how to add scalar functions to Databend? We have a document discussing this topic. [learn more: how to write scalar functions](https://databend.rs/development/how-to-write-scalar-functions/).

**Good First Issues**

> If you are interested in scalar functions that work with strings, you can check [#3004](https://github.com/datafuselabs/databend/issues/3004). You can comment like: `/assignme` in the subtask issue to make this subtask assigned to you.

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.5.26-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.26-nightly)
- [v0.5.25-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.25-nightly)
- [v0.5.24-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.24-nightly)
- [v0.5.23-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.23-nightly)
- [v0.5.22-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.22-nightly)
- [v0.5.21-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.21-nightly)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://datafusecloud.slack.com/join/shared_invite/zt-nojrc9up-50IRla1Y1h56rqwCTkkDJA)
