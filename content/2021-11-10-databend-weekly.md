+++
title = "This week in Databend #15"
date = 2021-11-10
slug = "2021-11-10-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **support add api and support local deployment with a singe line of code** by [@ZhiHanZ](https://github.com/ZhiHanZ). ([#2644](https://github.com/datafuselabs/databend/pull/2644))
- **add system.columns table** by [@flaneur2020](https://github.com/flaneur2020). ([#2624](https://github.com/datafuselabs/databend/pull/2624))
- **support create user** by [@BohuTANG](https://github.com/BohuTANG) ([#2646](https://github.com/datafuselabs/databend/pull/2646))
- **add system users table** by [@GrapeBaBa](https://github.com/GrapeBaBa) ([#2684](https://github.com/datafuselabs/databend/pull/2684))
- **add show uses statement** by [@Junnplus](https://github.com/Junnplus). ([#2694](https://github.com/datafuselabs/databend/pull/2694))
- **add join API to join a node to cluster** by [@drmingdrmer](https://github.com/drmingdrmer) ([#2701](https://github.com/datafuselabs/databend/pull/2701))
- **support graceful shutdown in metasrv** by [@sunisdown](https://github.com/sunisdown). ([#2699](https://github.com/datafuselabs/databend/pull/2699))
- **add math functions**
  - `degress`/`radians` by [@Junnplus](https://github.com/Junnplus) ([#2643](https://github.com/datafuselabs/databend/pull/2643))
  - `log`/`ln`/`log2`/`log10` by [@flaneur2020](https://github.com/flaneur2020) ([#2669](https://github.com/datafuselabs/databend/pull/2669) & [#2733](https://github.com/datafuselabs/databend/pull/2733))

## Improvement

- **migrate from Axum to Poem** by [@sunli829](https://github.com/sunli829) ([#2670](https://github.com/datafuselabs/databend/pull/2670))
- **impl KVApi for MetaNode to simplify upper level callers** by [@drmingdrmer](https://github.com/drmingdrmer) ([#2726](https://github.com/datafuselabs/databend/pull/2726))
- **impl KVApi for StateMachine** by [@drmingdrmer](https://github.com/drmingdrmer) ([#2721](https://github.com/datafuselabs/databend/pull/2721))
- **make push_downs work in table's read** by [@sundy-li](https://github.com/sundy-li). ([#2660](https://github.com/datafuselabs/databend/pull/2660))

### Bug fixes

- **statistics returned by Table::read_partitions should take push-down projections into account** by [@dantengsky](https://github.com/dantengsky). ([#2700](https://github.com/datafuselabs/databend/pull/2700))
- **fix number table fail to generate rows**  by [@junli1026](https://github.com/junli1026) ([#2691](https://github.com/datafuselabs/databend/pull/2691))
- **transform like pattern to regex** by [@zhyass](https://github.com/zhyass). ([#2661](https://github.com/datafuselabs/databend/pull/2661))

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.5.13-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.13-nightly)
- [v0.5.12-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.12-nightly)
- [v0.5.11-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.11-nightly)
- [v0.5.10-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.10-nightly)
- [v0.5.9-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.9-nightly)
- [v0.5.8-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.8-nightly)
- [v0.5.7-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.7-nightly)

## Ecosystem/Upstream

From open source, for open source. Our team is also committed to contributing to the Rust ecosystem and upstream dependencies.

- [arrow2 #589: Allow NullArray to be casted to all other types](https://github.com/jorgecarleitao/arrow2/pull/589): A port of [apache/arrow-rs#884](https://github.com/apache/arrow-rs/pull/884). by [@flaneur2020](https://github.com/flaneur2020/)
- [arrow2 #561: Compute: add partial option into CastOptions](https://github.com/jorgecarleitao/arrow2/pull/561): Trying to be compatible with MySQL behavior. by [@sundy-li](https://github.com/sundy-li/)
- [datafuse-extras/sqlparser-rs  #7: Process escape character in quoted string](https://github.com/datafuse-extras/sqlparser-rs/pull/7) by [@zhyass](https://github.com/zhyass/)
- [axum-server rev:390b84cf7: rustls implementation](https://github.com/programatik29/axum-server/commit/390b84cf7) Bump rustls and its friends. by [@PsiACE](https://github.com/PsiACE/)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://datafusecloud.slack.com/join/shared_invite/zt-nojrc9up-50IRla1Y1h56rqwCTkkDJA)
