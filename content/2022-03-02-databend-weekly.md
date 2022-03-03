+++
title = "This week in Databend #31"
date = 2022-03-02
slug = "2022-03-02-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **databend-meta: add rename_table for meta api**: remove old table record and add a new one in a sled-tree-transaction. by [@Junnplus](https://github.com/Junnplus), ([#4288](https://github.com/datafuselabs/databend/pull/4288))
- **databend-query: support COPY from external location(S3)**: load files from a storage location (Amazon S3). by [@BohuTANG](https://github.com/BohuTANG), ([#4170](https://github.com/datafuselabs/databend/pull/4170) & [#4241](https://github.com/datafuselabs/databend/pull/4241))
- **bendctl: add package purge subcommand** by [@linyihai](https://github.com/linyihai), ([#4245](https://github.com/datafuselabs/databend/pull/4245))

## Improvement

- **databend-query: use database_id/table_id as data file prefix**: no more having all parquet files in one big directory. by [@dantengsky](https://github.com/dantengsky), ([#4273](https://github.com/datafuselabs/databend/pull/4273))
- **databend-query: support aggregate sum/avg booleans** by [@everpcpc](https://github.com/everpcpc), ([#4237](https://github.com/datafuselabs/databend/pull/4237))
- **databend-query: zero extra cost of async trait**: use GAT feature instead of `#[async_trait]` in some hot path. by [@sundy-li](https://github.com/sundy-li), ([#4269](https://github.com/datafuselabs/databend/pull/4269))
- **databend-query: implement new processor for system tables & github & memory & null engine** by [@zhang2014](https://github.com/zhang2014), ([#4166](https://github.com/datafuselabs/databend/pull/4166) & [#4272](https://github.com/datafuselabs/databend/pull/4272))

## Bug fixes

- **dal_context: use ObserveReader to calculate metrics**: calculate the read cost time correctly. by [@Xuanwo](https://github.com/Xuanwo), ([#4298](https://github.com/datafuselabs/databend/pull/4298))

## Tips

Let's learn a weekly tip from Databend.

### Loading files from S3 External Location

Benefit from [#4170](https://github.com/datafuselabs/databend/pull/4170) & [#4241](https://github.com/datafuselabs/databend/pull/4241), Databend now has the ability to load CSV format files from the s3 external location.

Here's an example of reading 5 lines from a file:

```sql
COPY INTO ontime FROM 's3://databend-external/t_ontime/t_ontime.csv'
    CREDENTIALS=(aws_key_id='<your-key-id>' aws_secret_key='<your-secret-key>')
    FILE_FORMAT = (type = "CSV" field_delimiter = '\t'  record_delimiter = '\n' skip_header = 1)
    SIZE_LIMIT=5; /* only read 5 rows */

/* Check. */
SELECT * FROM ontime;
```

**Note** To learn more, check out:

- [Loading files from S3 External Location](https://databend.rs/user/data-loading/loading-from-external-location).
- [COPY command](https://databend.rs/user/sql-statement/dml/dml-copy)

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.6.79-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.79-nightly)
- [v0.6.78-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.78-nightly)
- [v0.6.77-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.77-nightly)
- [v0.6.76-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.76-nightly)
- [v0.6.75-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.75-nightly)
- [v0.6.74-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.74-nightly)
- [v0.6.73-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.73-nightly)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://datafusecloud.slack.com/join/shared_invite/zt-nojrc9up-50IRla1Y1h56rqwCTkkDJA)- [Slack Channel](https://datafusecloud.slack.com/join/shared_invite/zt-nojrc9up-50IRla1Y1h56rqwCTkkDJA)

