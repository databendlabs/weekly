+++
title = "This week in Databend #33"
date = 2022-03-16
slug = "2022-03-16-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **databend-query: support copy csv/parquet files from s3 directory** by [@sundy-li](https://github.com/sundy-li), ([#4373](https://github.com/datafuselabs/databend/pull/4373))
- ***: add management mode support to manage warehouse metadata** by [@ZhiHanZ](https://github.com/ZhiHanZ), ([#4379](https://github.com/datafuselabs/databend/pull/4379))
- **databend-query: support show roles** by [@Junnplus](https://github.com/Junnplus), ([#4400](https://github.com/datafuselabs/databend/pull/4400))
- **databend-query: implement admin$reload_config procedure** by [@zhang2014](https://github.com/zhang2014), ([#4407](https://github.com/datafuselabs/databend/pull/4407))
- **databend-query: support grant role and revoke role** by [@Junnplus](https://github.com/Junnplus), ([#4451](https://github.com/datafuselabs/databend/pull/4451))
- **databend-query: add rename table command** by [@kevinw66](https://github.com/kevinw66), ([#4425](https://github.com/datafuselabs/databend/pull/4425))
- **databend-query: limit pushdown in read plan** by [@dantengsky](https://github.com/dantengsky), ([#4428](https://github.com/datafuselabs/databend/pull/4428))
- **http server: query add http api /v1/status** by [@youngsofun](https://github.com/youngsofun), ([#4454](https://github.com/datafuselabs/databend/pull/4454))

## Improvement

- **databend-query: embed more column meta data inside SegmentInfo** by [@dantengsky](https://github.com/dantengsky), ([#4372](https://github.com/datafuselabs/databend/pull/4372))
- **databend-query: change async rwlock to sync to avoid async drop** by [@ariesdevil](https://github.com/ariesdevil), ([#4394](https://github.com/datafuselabs/databend/pull/4394))
- **databend-query: implement new block reader for fuse engine** by [@zhang2014](https://github.com/zhang2014), ([#4383](https://github.com/datafuselabs/databend/pull/4383))
- **databend-query: support copy from stage** by [@sundy-li](https://github.com/sundy-li), ([#4437](https://github.com/datafuselabs/databend/pull/4437))
- **databend-query: change bloom filter to use datavalue2** by [@junli1026](https://github.com/junli1026), ([#4418](https://github.com/datafuselabs/databend/pull/4418))
- **functions: refactor ScalarExpression and add simd operator** by [@zhyass](https://github.com/zhyass), ([#4375](https://github.com/datafuselabs/databend/pull/4375))

## Performance Improvement

- **databend-query&datablocks: introduce HashMethodSingleString** by [@sundy-li](https://github.com/sundy-li), ([#4417](https://github.com/datafuselabs/databend/pull/4417))
- **databend-query: dedicated runtime for io tasks** by [@dantengsky](https://github.com/dantengsky), ([#4404](https://github.com/datafuselabs/databend/pull/4404))

## Bug fixes

- **databend-query: fix hang after async processor throw error** by [@zhang2014](https://github.com/zhang2014), ([#4380](https://github.com/datafuselabs/databend/pull/4380))
- **databend-query: global MetaGrpcClient cause dispatch drop error** by [@ariesdevil](https://github.com/ariesdevil), ([#4361](https://github.com/datafuselabs/databend/pull/4361))

## Tips

Let's learn a weekly tip from Databend.

### Deploy Databend and try to develop

Databend has now completely updated its online documentation, supports for multiple deployment scenarios including local disk, s3, minio, and more, and provides first step for application developers in Go and Python.

**Deploy**

- [With local disk](https://databend.rs/doc/deploy/local): https://databend.rs/doc/deploy/local
- [With AWS S3](https://databend.rs/doc/deploy/s3): https://databend.rs/doc/deploy/s3
- [With MinIO](https://databend.rs/doc/deploy/minio): https://databend.rs/doc/deploy/minio

**Develop**

- [With Go](https://databend.rs/doc/develop/go): https://databend.rs/doc/develop/go
- [With Python](https://databend.rs/doc/develop/python): https://databend.rs/doc/develop/python

## Changelogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.6.93-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.93-nightly)
- [v0.6.92-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.92-nightly)
- [v0.6.91-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.91-nightly)
- [v0.6.90-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.90-nightly)
- [v0.6.89-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.89-nightly)
- [v0.6.88-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.88-nightly)
- [v0.6.87-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.87-nightly)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
