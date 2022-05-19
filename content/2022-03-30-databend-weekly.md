+++
title = "This week in Databend #35"
date = 2022-03-30
slug = "2022-03-30-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **databend-query: add ndjson source for streaming load** by [@sundy-li](https://github.com/sundy-li), ([#4561](https://github.com/datafuselabs/databend/pull/4561))
- **common-functions: embed markdown dos into system.functions** by [@sundy-li](https://github.com/sundy-li), ([#4552](https://github.com/datafuselabs/databend/pull/4552))
- **databend-query: add user option for user info**: introduce user options to separate system management privileges and security object privileges. by [@Junnplus](https://github.com/Junnplus), ([#4553](https://github.com/datafuselabs/databend/pull/4553))
- **common-datavalues: support Semi-structured array, object data type** by [@b41sh](https://github.com/b41sh), ([#4571](https://github.com/datafuselabs/databend/pull/4571))
- **http handler: support basic clickhouse REST handler** by [@youngsofun](https://github.com/youngsofun), ([#4613](https://github.com/datafuselabs/databend/pull/4613))
- **databend-query: add `check_json` function** by [@kevinw66](https://github.com/kevinw66), ([#4606](https://github.com/datafuselabs/databend/pull/4606))
- **databend-query(processor): support pushing executor** by [@zhang2014](https://github.com/zhang2014), ([#4625](https://github.com/datafuselabs/databend/pull/4625))

## Improvement

- **databend-query: version of storage layout** by [@dantengsky](https://github.com/dantengsky), ([#4244](https://github.com/datafuselabs/databend/pull/4244))
- **databend-query: remove manage access check and use tenant statement** by [@Junnplus](https://github.com/Junnplus), ([#4616](https://github.com/datafuselabs/databend/pull/4616))

## Performance Improvement

- **datavalues: Simd selected for StringColumn** by [@LiuYuHui](https://github.com/LiuYuHui), ([#4528](https://github.com/datafuselabs/databend/pull/4528))
- **databend-query: impove performance of insert-into literal values** by [@ygf11](https://github.com/ygf11), ([#4497](https://github.com/datafuselabs/databend/pull/4497))


## Build/Test/CI

- **improve build tools and workflows** by [@everpcpc](https://github.com/everpcpc), ([#4580](https://github.com/datafuselabs/databend/pull/4580), [#4592](https://github.com/datafuselabs/databend/pull/4592), etc.)

## Bug fixes

- **databend-query: fix duplicate count read rows** by [@july2993](https://github.com/july2993), ([#4587](https://github.com/datafuselabs/databend/pull/4587))

## Tips

Let's learn a weekly tip from Databend.

### Announcing Databend v0.7.0-nightly

This release brings Databend architecture to a stable stage!

- Simple primitive data type framework
- New Pull&Push-Based Processor framework
- Git-Like table format with snapshot transaction isolation
- Announce [OpenDAL](https://github.com/datafuselabs/opendal) for object storage data access
- Announce [OpenRaft](https://github.com/datafuselabs/openraft) to improve raft as the next generation consensus protocol

v0.7.0-nightly also includes several new user-facing features, performance optimizations, and many other improvements, activate your object storage for big data analytics!

To learn more, please check out [Announcing Databend v0.7.0 - Deploy easier, query faster](https://databend.rs/blog/databend-0-7-0-release).

Want to know what will happen in v0.8.0? Please check [Checklist proposal: Nightly v0.8](https://github.com/datafuselabs/databend/issues/4591).


## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.7.3-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.3-nightly)
- [v0.7.2-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.2-nightly)
- [v0.7.1-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.1-nightly)
- [v0.7.0-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.0-nightly)
- [v0.6.104-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.104-nightly)
- [v0.6.103-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.103-nightly)
- [v0.6.102-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.102-nightly)
- [v0.6.101-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.101-nightly)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
