+++
title = "This week in Databend #25"
date = 2022-01-19
slug = "2022-01-19-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **support `[NOT] IN (a, b, c, ...)` InList SQL** by [@Veeupup](https://github.com/Veeupup) ([#3805](https://github.com/datafuselabs/databend/pull/3805))

## Improvement

- **range filter support more multi-column expression scenarios** by [@zhyass](https://github.com/zhyass). ([#3851](https://github.com/datafuselabs/databend/pull/3851)
- **refine the error code** by [@BohuTANG](https://github.com/BohuTANG). ([#3833](https://github.com/datafuselabs/databend/pull/3833))
- **lower the memory usage of BlockStreamWriter** by [@dantengsky](https://github.com/dantengsky). ([#3818](https://github.com/datafuselabs/databend/pull/3818))
- **manage role storage in metasrv** by [@flaneur2020](https://github.com/flaneur2020). ([#3878](https://github.com/datafuselabs/databend/pull/3878))

## Build/Test/CI

- **introduce databend Dev container** by [@ZhiHanZ](https://github.com/ZhiHanZ). ([#3853](https://github.com/datafuselabs/datafuse/pull/3853))
- **use peotry to manage all python packages** by [@Xuanwo](https://github.com/Xuanwo). ([#3902](https://github.com/datafuselabs/datafuse/pull/3902))

### Bug fixes

- **fix bug that list_databases return all tenants' databases** by [@ariesdevil](https://github.com/ariesdevil/). ([#3876](https://github.com/datafuselabs/databend/pull/3876))
- **optimize table cause of meta data damage** by [@dantengsky](https://github.com/dantengsky). ([#3873](https://github.com/datafuselabs/databend/pull/3873))
- **fix MySQL 8.0 JDBC compatibility error** by [@TCeason](https://github.com/TCeason). ([#3852](https://github.com/datafuselabs/databend/pull/3852))

### Experimental

- **add datavalues2** by [@sundy-li](https://github.com/sundy-li). ([#3857](https://github.com/datafuselabs/databend/pull/3857)).

A series of refactorings will be carried out at [datavalues-dev](https://github.com/datafuselabs/databend/tree/datavalues-dev) branch to complete the migration. See [RFC - new datavalues system design](https://databend.rs/dev/rfcs/query/new-datavalues-system).

## Tips

Let's learn a weekly tip from Databend.

### Build/Test Databend with Dev container

In [#3853](https://github.com/datafuselabs/datafuse/pull/3853) , we have introduced a development container to make it easy for contributors to build and test Databend.

**build binary artifacts**

```shell
./scripts/setup/run_docker.sh  make build
```

**run test**

```shell
./scripts/setup/run_docker.sh  make test
```

**debug or get into dev container**

```shell
./scripts/setup/run_docker.sh /bin/bash
```

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.6.38-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.38-nightly)
- [v0.6.37-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.37-nightly)
- [v0.6.36-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.36-nightly)
- [v0.6.35-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.35-nightly)
- [v0.6.34-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.34-nightly)
- [v0.6.33-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.33-nightly)

## Ecosystem/Upstream

From open source, for open source. Our team is also committed to contributing to the Rust ecosystem and upstream dependencies.

- [A ton of updates to openraft](https://github.com/datafuselabs/openraft/pulse#merged-pull-requests). by [@drmingdrmer](https://github.com/drmingdrmer) & [@lichuang](https://github.com/lichuang)
- [release naive-cityhash v0.2.0](https://crates.io/crates/naive-cityhash/0.2.0): add basic 64 bit cityhash support. by [@PsiACE](https://github.com/PsiACE/)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://datafusecloud.slack.com/join/shared_invite/zt-nojrc9up-50IRla1Y1h56rqwCTkkDJA)
