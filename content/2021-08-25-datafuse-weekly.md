+++
title = "This week in Datafuse #4"
date = 2021-08-25
slug = "2021-08-25-datafuse-weekly"
draft = false
+++

Datafuse is an open source elastic and scalable cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don’t want you to miss.

- **IDX-1428: common indexing** by [@BohuTANG](https://github.com/BohuTANG). ([#1437](https://github.com/datafuselabs/datafuse/pull/1437))
- **add windowFunnel function** by [@sundy-li](https://github.com/sundy-li). ([#1519](https://github.com/datafuselabs/datafuse/pull/1519))
- **add if function** by [@zhyass](https://github.com/zhyass). ([#1505](https://github.com/datafuselabs/datafuse/pull/1505))
- **refactor SQL parser (WIP)** by [@leiysky](https://github.com/leiysky). ([#1477](https://github.com/datafuselabs/datafuse/pull/1477) & [#1523](https://github.com/datafuselabs/datafuse/pull/1523) & [#1505](https://github.com/datafuselabs/datafuse/pull/1540))
- **Object Store Data Access Layer** by [@dantengsky](https://github.com/dantengsky). ([#1442](https://github.com/datafuselabs/datafuse/pull/1442))
- **making distributed systems more robust** by [@drmingdrmer](https://github.com/drmingdrmer). ([#1569](https://github.com/datafuselabs/datafuse/pull/1569) [#1546](https://github.com/datafuselabs/datafuse/pull/1546) etc.)

## Changelogs

You can check the changelogs of Datafuse nightly to learn about our latest developments.

- [v0.4.88-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.88-nightly)
- [v0.4.87-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.87-nightly)
- [v0.4.86-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.86-nightly)
- [v0.4.85-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.85-nightly)
- [v0.4.84-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.84-nightly)
- [v0.4.83-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.83-nightly)
- [v0.4.82-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.82-nightly)

## Ecosystem/Upstream

From open source, for open source. The Datafuse team is also committed to contributing to the Rust ecosystem and upstream dependencies.

- [sqlparser-rs #312: Add fuzzer based on honggfuzz](https://github.com/sqlparser-rs/sqlparser-rs/pull/312): Generate some random bytes for the fuzz test. by [@PsiACE](https://github.com/PsiACE/)
- [hashbrown #261: Upgrade rand to 0.8.3](https://github.com/rust-lang/hashbrown/pull/261): Use `seed_from_u64` instead of `from_seed` to avoid cross-platform issues. by [@PsiACE](https://github.com/PsiACE/)

## Thanks

Thanks to your contribution, datafuse becomes better!

- [@jyz0309](https://github.com/jyz0309):Add parser used time metric ([#1586](https://github.com/datafuselabs/datafuse/pull/1586)) and add optimize histogram metric ([#1524](https://github.com/datafuselabs/datafuse/pull/1524))
- [@mapleFU](https://github.com/mapleFU): Support SHOW TABLES LIKE pattern and Where expr ([#1518](https://github.com/datafuselabs/datafuse/pull/1518)) and add SHOW TABLES LIKE pattern and Where expr to doc ([#1541](https://github.com/datafuselabs/datafuse/pull/1541))
- [@dust1](https://github.com/dust1): Add Support SHOW TABLES FROM statament ([#1555](https://github.com/datafuselabs/datafuse/pull/1555))

## Meet Us

Please join the [Datafuse Community](https://github.com/datafuselabs/) if you are interested in Datafuse.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.
You can submit [issues](https://github.com/datafuselabs/datafuse/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [GitHub Discussions](https://github.com/datafuselabs/datafuse/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
