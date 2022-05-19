+++
title = "This week in Datafuse #6"
date = 2021-09-08
slug = "2021-09-08-datafuse-weekly"
draft = false
+++

Datafuse is an open source elastic and scalable cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don’t want you to miss.

- **remove DataType::Utf8** by [@zhyass](https://github.com/zhyass). ([#1606](https://github.com/datafuselabs/datafuse/pull/1606))
- **support system.engines table** by [@b41sh](https://github.com/b41sh) ([#1755](https://github.com/datafuselabs/datafuse/pull/1755), [#1758](https://github.com/datafuselabs/datafuse/pull/1758))
- **support system.config table** by [@GrapeBaBa](https://github.com/GrapeBaBa) ([#1738](https://github.com/datafuselabs/datafuse/pull/1738))
- **refactor Aggregator for improve performance and prepare refactor transform_aggregator_final**  by [@zhang2014](https://github.com/zhang2014). ([#1701](https://github.com/datafuselabs/datafuse/pull/1701))
- **support user namespace API** by [@BohuTANG](https://github.com/BohuTANG). ([#1727](https://github.com/datafuselabs/datafuse/pull/1727))
- **add timezone support for DateTime32** by [@sundy-li](https://github.com/sundy-li). ([#1750](https://github.com/datafuselabs/datafuse/pull/1750))
- **refactor all warp services to axum** by [@ZhiHanZ](https://github.com/ZhiHanZ). ([#1702](https://github.com/datafuselabs/datafuse/pull/1702)) & [@PsiACE](https://github.com/PsiACE) ([#1716](https://github.com/datafuselabs/datafuse/pull/1716), [#1753](https://github.com/datafuselabs/datafuse/pull/1753))
- **streaming put for DAL** by [@dantengsky](https://github.com/dantengsky). ([#1707](https://github.com/datafuselabs/datafuse/pull/1707))
- **support substring(string, start, length)** by [@tangwz](https://github.com/tangwz). ([#1710](https://github.com/datafuselabs/datafuse/pull/1710) & [datafuse-extras/sqlparser-rs#6](https://github.com/datafuse-extras/sqlparser-rs/pull/6))
- **add date functions**
  - `yesterday`/`tomorrow`/`timeSlot()` by [@dust1](https://github.com/dust1) ([#1673](https://github.com/datafuselabs/datafuse/pull/1673), [#1715](https://github.com/datafuselabs/datafuse/pull/1715))
  - `toYYYYMM` by [@ygf11](https://github.com/ygf11) ([#1726](https://github.com/datafuselabs/datafuse/pull/1726), [#1742](https://github.com/datafuselabs/datafuse/pull/1742))

## Changlogs

You can check the changelogs of Datafuse nightly to learn about our latest developments.

- [v0.4.102-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.102-nightly)
- [v0.4.101-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.101-nightly)
- [v0.4.100-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.100-nightly)
- [v0.4.99-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.99-nightly)
- [v0.4.98-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.98-nightly)
- [v0.4.97-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.97-nightly)
- [v0.4.96-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.96-nightly)

## Ecosystem/Upstream

From open source, for open source. The Datafuse team is also committed to contributing to the Rust ecosystem and upstream dependencies.

- [arrow2 #346: Added support for compute to BinaryArray](https://github.com/jorgecarleitao/arrow2/pull/346) by [@zhyass](https://github.com/zhyass/)

## Meet Us

Please join the [Datafuse Community](https://github.com/datafuselabs/) if you are interested in Datafuse.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.
You can submit [issues](https://github.com/datafuselabs/datafuse/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [GitHub Discussions](https://github.com/datafuselabs/datafuse/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
