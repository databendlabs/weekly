+++
title = "This week in Databend #39"
date = 2022-04-27
slug = "2022-04-27-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **mem-allocator&databend-query: support memory profiling** by [@dantengsky](https://github.com/dantengsky), ([#5050](https://github.com/datafuselabs/databend/pull/5050))
- **databend-meta: transaction api** by [@lichuang](https://github.com/lichuang), ([#5030](https://github.com/datafuselabs/databend/pull/5030))
- **databend-query(parser):  switch to the new sql parser** by [@andylokandy](https://github.com/andylokandy), ([#4983](https://github.com/datafuselabs/databend/pull/4983))
- **databend-query(planners): add switch to enable new planner** by [@leiysky](https://github.com/leiysky), ([#4989](https://github.com/datafuselabs/databend/pull/4989))
- **databend-query: implement azblob support** by [@Xuanwo](https://github.com/Xuanwo), ([#5025](https://github.com/datafuselabs/databend/pull/5025))
- **common-functions: support semi-structured function `json_extract_path_tex `** by [@b41sh](https://github.com/b41sh), ([#4992](https://github.com/datafuselabs/databend/pull/4992))
- **common-functions: support aggregate function `retention`** by [@fkuner](https://github.com/fkuner), ([#4970](https://github.com/datafuselabs/databend/pull/4970))
- **common-functions: support `REGEXP_REPLACE` function** by [@nange](https://github.com/nange), ([#4944](https://github.com/datafuselabs/databend/pull/4944))


## Improvement

- **databend-query: rewrite config parser to respect the order** by [@Xuanwo](https://github.com/Xuanwo), ([#4971](https://github.com/datafuselabs/databend/pull/4971))
- **databend-query(interpreter): introduce new processor for insert interpreter** by [@sundy-li](https://github.com/sundy-li), ([#4862](https://github.com/datafuselabs/databend/pull/4862))
- **datavalues: add `TypeSerializerImpl` to relpace `Box<dyn TypeDeserializer>`** by [@sundy-li](https://github.com/sundy-li), ([#5040](https://github.com/datafuselabs/databend/pull/5040))
- **databend-query: date/timestamp bound check** by [@Veeupup](https://github.com/Veeupup), ([#5054](https://github.com/datafuselabs/databend/pull/5054))
- **datavalues: `TimeStamp` as basic and alias datetime to timestamp.** by [@Veeupup](https://github.com/Veeupup), ([#5031](https://github.com/datafuselabs/databend/pull/5031))

## Performance Improvement

- **row granularity stream values insert** by [@ygf11](https://github.com/ygf11), ([#4764](https://github.com/datafuselabs/databend/pull/4764))

## Bug fixes

- **databend-query(parser):  allow to omit semicolon** by [@andylokandy](https://github.com/andylokandy), ([#5058](https://github.com/datafuselabs/databend/pull/5058))
- **databend-query: report error when try to use an empty database** by [@chowc](https://github.com/chowc), ([#4939](https://github.com/datafuselabs/databend/pull/4939))

## Tips

Let's learn a weekly tip from Databend.

### Load Data from MySQL

Databend now supports loading data into Databend from MySQL using `mysqldump`.

Before you start, you need to install the MySQL client and mysqldump. Of course, Databend also needs to be deployed and connected via the MySQL client, see [How to Deploy Databend](https://databend.rs/doc/deploy).

**Dump MySQL table schema and data to file**

```shell
mysqldump --single-transaction --compact -uroot -proot book_db books > dumpbooks.sql
```

Note that here we need to use the `--single-transaction` and `--compact` options of mysqldump

**Load Data into Databend from the sql File**

```shell
mysql -uroot -h127.0.0.1 -proot -P3307 < dumpbook.sql
```

All tables and data from users will now be loaded into Databend.

**Verify the Loaded Data**

```shell
SELECT * FROM books;
+------------------------------+----------------------+-------+
| title                        | author               | date  |
+------------------------------+----------------------+-------+
| Transaction Processing       |  Jim Gray            |  1992 |
| Readings in Database Systems |  Michael Stonebraker |  2004 |
+------------------------------+----------------------+-------+
```

Congratulations, now you can use Databend to analyze data.

You can check out <https://databend.rs/doc/load-data/mysql> to learn more.

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.7.31-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.31-nightly)
- [v0.7.30-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.30-nightly)
- [v0.7.29-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.29-nightly)
- [v0.7.28-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.28-nightly)
- [v0.7.27-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.27-nightly)
- [v0.7.26-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.26-nightly)
- [v0.7.25-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.25-nightly)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://datafusecloud.slack.com/join/shared_invite/zt-nojrc9up-50IRla1Y1h56rqwCTkkDJA)
