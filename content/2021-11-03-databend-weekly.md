+++
title = "This week in Databend #14"
date = 2021-11-03
slug = "2021-11-03-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don’t want you to miss.

### Features

- **bendctl: support up api for demo** by [@ZhiHanZ](https://github.com/ZhiHanZ). ([#2488](https://github.com/datafuselabs/databend/pull/2448))
- **raft-store: add Cmd::UpsertTableOptions** by [@drmingdrmer](https://github.com/drmingdrmer) ([#2521](https://github.com/datafuselabs/databend/pull/2521))
- **run query with a embedded meta-store** by [@drmingdrmer](https://github.com/drmingdrmer) ([#2534](https://github.com/datafuselabs/databend/pull/2534))
- **sqlparser: support create user statement** by [@GrapeBaBa](https://github.com/GrapeBaBa) ([#2550](https://github.com/datafuselabs/databend/pull/2550))
- **add top_n plan optimizer** by [@junli1026](https://github.com/junli1026) ([#2515](https://github.com/datafuselabs/databend/pull/2515))
- **add endpoint url param for s3 dal** by [@dantengsky](https://github.com/dantengsky). ([#2555](https://github.com/datafuselabs/databend/pull/2555))
- **add basic data loading api** by [@ZhiHanZ](https://github.com/ZhiHanZ). ([#2611](https://github.com/datafuselabs/databend/pull/2611))
- **add math functions**
  - `pi`/`crc32`/`trigonometric` by [@Junnplus](https://github.com/Junnplus) ([#2584](https://github.com/datafuselabs/databend/pull/2584), [#2610](https://github.com/datafuselabs/datafuse/pull/2610), [#2616](https://github.com/datafuselabs/databend/pull/2616))
  - `abs` by [@flaneur2020](https://github.com/flaneur2020) ([#2596](https://github.com/datafuselabs/databend/pull/2596))

## Improvement

- **add TableMeta containing essential table info** by [@drmingdrmer](https://github.com/drmingdrmer) ([#2479](https://github.com/datafuselabs/databend/pull/2479))
- **refine the bendctl writer format and message hints** by [@BohuTANG](https://github.com/BohuTANG) ([#2545](https://github.com/datafuselabs/databend/pull/2545))
- **introduce fn subcommands() to the Command trait** by [@flaneur2020](https://github.com/flaneur2020). ([#2530](https://github.com/datafuselabs/databend/pull/2530) & [#2546](https://github.com/datafuselabs/databend/pull/2546))
- **compare with implicit cast** by [@sundy-li](https://github.com/sundy-li). ([#2554](https://github.com/datafuselabs/databend/pull/2554))
- **make date32 physical type to be int32** by [@zhyass](https://github.com/zhyass). ([#2578](https://github.com/datafuselabs/databend/pull/2578))
- **introduces RootCommand as the entrypoint of all the commands** by [@flaneur2020](https://github.com/flaneur2020). ([#2577](https://github.com/datafuselabs/databend/pull/2577))
- **simplify meta backend for catalog** by [@drmingdrmer](https://github.com/drmingdrmer) ([#2590](https://github.com/datafuselabs/databend/pull/2590))

### Bug fixes

- **fix bendctl console quit command** by [@flaneur2020](https://github.com/flaneur2020). ([#2491](https://github.com/datafuselabs/databend/pull/2491))
- **fix hang in the second insert query** by [@dantengsky](https://github.com/dantengsky). ([#2485](https://github.com/datafuselabs/databend/pull/2485))
- **fix server hang when use wait in entrypoint** by [@zhang2014](https://github.com/zhang2014). ([#2553](https://github.com/datafuselabs/databend/pull/2553))
- **update file descriptor limit for debug test** by [@sunisdown](https://github.com/sunisdown). ([#2544](https://github.com/datafuselabs/databend/pull/2544) & [#2552](https://github.com/datafuselabs/databend/pull/2552))
- **pass limit+offset to sort pipeline**  by [@junli1026](https://github.com/junli1026) ([#2569](https://github.com/datafuselabs/databend/pull/2569))

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.5.6-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.6-nightly)
- [v0.5.5-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.5-nightly)
- [v0.5.4-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.4-nightly)
- [v0.5.3-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.3-nightly)
- [v0.5.2-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.2-nightly)
- [v0.5.1-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.1-nightly)
- [v0.5.0-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.0-nightly)
- [v0.4.150-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.150-nightly)

## Ecosystem/Upstream

From open source, for open source. Our team is also committed to contributing to the Rust ecosystem and upstream dependencies.

- [arrow-rs #864: Bump deps](https://github.com/apache/arrow-rs/pull/864): Bump some deps, setup ci toolchain, fix error. by [@PsiACE](https://github.com/PsiACE/)
- [arrow2 #550: Bumped Prost and Tonic](https://github.com/jorgecarleitao/arrow2/pull/550): Bump arrow-format to v0.3.0, update ci toolchain, fix error. by [@PsiACE](https://github.com/PsiACE/)
- [arrow-format #2: Bump deps & format](https://github.com/DataEngineeringLabs/arrow-format/pull/2): Bump prost and tonic. by [@PsiACE](https://github.com/PsiACE/)
- [pprof #82: Bump deps and make clippy happy](https://github.com/tikv/pprof-rs/pull/82): Bump prost / tonic / nix , make clippy happy. by [@PsiACE](https://github.com/PsiACE/)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
