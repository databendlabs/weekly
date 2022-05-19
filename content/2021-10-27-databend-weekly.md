+++
title = "This week in Databend #13"
date = 2021-10-27
slug = "2021-10-27-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don’t want you to miss.

### Features

- **add system.metrics table** by [@flaneur2020](https://github.com/flaneur2020). ([#2349](https://github.com/datafuselabs/databend/pull/2349))
- **a simple rest api (http handler) for query** by [@youngsofun](https://github.com/youngsofun). ([#2379](https://github.com/datafuselabs/databend/pull/2379))
- **new features for cli** by [@ZhiHanZ](https://github.com/ZhiHanZ), like
    - **support admin and sql mode in interactive scenario** ([#2448](https://github.com/datafuselabs/databend/pull/2448))
    - **query via http** ([#2417](https://github.com/datafuselabs/databend/pull/2417))

## Improvement

- **add tokio runtime memory tracker** by [@zhang2014](https://github.com/zhang2014). ([#2356](https://github.com/datafuselabs/databend/pull/2356))
- **enable VerifiableExpression in fuse table** by [@dantengsky](https://github.com/dantengsky). ([#2369](https://github.com/datafuselabs/databend/pull/2369))
- **remote backend for fuse table** by [@dantengsky](https://github.com/dantengsky). ([#2355](https://github.com/datafuselabs/databend/pull/2355))
- **move some cli commands from sync to async** by [@yufan022](https://github.com/yufan022) ([#2297](https://github.com/datafuselabs/databend/pull/2297))
- **store TableInfo to sled tree** by [@ariesdevil](https://github.com/ariesdevil). ([#2387](https://github.com/datafuselabs/databend/pull/2387))
- **add optimization for literal false filter** by [@junli1026](https://github.com/junli1026) ([#2427](https://github.com/datafuselabs/databend/pull/2427))
- **eliminate Limit to optmize source to empty source** by [@junli1026](https://github.com/junli1026) ([#2447](https://github.com/datafuselabs/databend/pull/2447))
- **add databend_main and databend_test proc macros** by [@zhang2014](https://github.com/zhang2014). ([#2434](https://github.com/datafuselabs/databend/pull/2434))

### Bug fixes

- **fix query server hang when start failure** by [@zhang2014](https://github.com/zhang2014). ([#2465](https://github.com/datafuselabs/databend/pull/2465))
- **fix docker build and release issues** by [@ZhiHanZ](https://github.com/ZhiHanZ). ([#2372](https://github.com/datafuselabs/databend/pull/2372))
- **make ReadDataSource schema return schema after projection** by [@sundy-li](https://github.com/sundy-li). ([#2423](https://github.com/datafuselabs/databend/pull/2423))
- **fix: http services force shutdown after some secs** by [@youngsofun](https://github.com/youngsofun). ([#2425](https://github.com/datafuselabs/databend/pull/2425))
- **fix get_table bug and parquet table bug** by [@drmingdrmer](https://github.com/drmingdrmer) ([#2400](https://github.com/datafuselabs/databend/pull/2400))

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.4.149-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.149-nightly)
- [v0.4.148-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.148-nightly)
- [v0.4.147-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.147-nightly)
- [v0.4.146-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.146-nightly)
- [v0.4.145-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.145-nightly)
- [v0.4.144-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.144-nightly)
- [v0.4.143-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.143-nightly)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
