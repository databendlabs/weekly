+++
title = "This week in Databend #41"
date = 2022-05-11
slug = "2022-05-11-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **multi-catalog** by [@dantengsky](https://github.com/dantengsky), ([#4947](https://github.com/datafuselabs/databend/pull/4947))
- **implement hash inner join** by [@leiysky](https://github.com/leiysky), ([#5175](https://github.com/datafuselabs/databend/pull/5175))
- **support timezone** by [@Veeupup](https://github.com/Veeupup), ([#4878](https://github.com/datafuselabs/databend/pull/4878))
- **impl alter database rename** by [@TCeason](https://github.com/TCeason), ([#5286](https://github.com/datafuselabs/databend/pull/5286))
- **change all the KV from serde to protobuf** by [@lichuang](https://github.com/lichuang), ([#5289](https://github.com/datafuselabs/databend/pull/5289) & [#5296](https://github.com/datafuselabs/databend/pull/5296))

**Migrate to new planner**

- planning subqueries by [@leiysky](https://github.com/leiysky), ([#5283](https://github.com/datafuselabs/databend/pull/5283))
- `having`, `scalar expression in group by` and `order by` by [@xudong963](https://github.com/xudong963), ([#5200](https://github.com/datafuselabs/databend/pull/5200) & [#5253](https://github.com/datafuselabs/databend/pull/5253))

**Work around `Array`**

- `ArrayType` support inner `DataType` by [@b41sh](https://github.com/b41sh), ([#5049](https://github.com/datafuselabs/databend/pull/5049))
- `get` generic Array elements via index by [@b41sh](https://github.com/b41sh), ([#5244](https://github.com/datafuselabs/databend/pull/5244))
- `length` function for `Array` & `Array<T>` by [@fkuner](https://github.com/fkuner), ([#5274](https://github.com/datafuselabs/databend/pull/5274))

## Improvement

- **databend-query: support two-level hashmap** by [@fkuner](https://github.com/fkuner), ([#5075](https://github.com/datafuselabs/databend/pull/5075))
- **databend-query: implement format trait, load CSV/Parquet will be a streaming read** by [@zhang2014](https://github.com/zhang2014), ([#5167](https://github.com/datafuselabs/databend/pull/5167) & [#5271](https://github.com/datafuselabs/databend/pull/5271))
- **databend-query: make expression serialized to raw sql** by [@sundy-li](https://github.com/sundy-li), ([#5260](https://github.com/datafuselabs/databend/pull/5260))
- **databend-meta: store endpoints to metasrv and use balance endpoints grpc connection channel** by [@ariesdevil](https://github.com/ariesdevil), ([#4987](https://github.com/datafuselabs/databend/pull/4987))

## Bug fixes

- **databend-query(pipeline): fix state machine of hash join** by [@leiysky](https://github.com/leiysky), ([#5242](https://github.com/datafuselabs/databend/pull/5242))
- **databend-query(parser):  show alternative tokens even if the branch is optional** by [@andylokandy](https://github.com/andylokandy), ([#5230](https://github.com/datafuselabs/databend/pull/5230))

## Tips

Let's learn a weekly tip from Databend.

### Start a Databend Cluster

Databend has been designed from day one to be a cloud-native and distributed data warehouse.

The new databend-query node only needs to register itself to the databend-meta with the same `cluster_id`, they will autodiscovery and formed into a cluster.

![Cluster Arch](https://datafuse-1253727613.cos.ap-hongkong.myqcloud.com/deploy-minio-cluster.png)

Read the following article to start your first Databend cluster:

- [Start a Local Query Cluster](https://databend.rs/doc/deploy/cluster-minio)
- [Start a Query Cluster on Kubernetes](https://databend.rs/doc/deploy/cluster-k8s-minio)

**Note**

- Databend Cluster mode only works on shared storage(AWS S3 or MinIO s3-like storage).
- This cluster mainly used for testing purpose, it is not targeted for production use.

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.7.44-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.44-nightly)
- [v0.7.43-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.43-nightly)
- [v0.7.42-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.42-nightly)
- [v0.7.41-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.41-nightly)
- [v0.7.40-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.40-nightly)
- [v0.7.39-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.39-nightly)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://datafusecloud.slack.com/join/shared_invite/zt-nojrc9up-50IRla1Y1h56rqwCTkkDJA)
