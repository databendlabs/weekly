+++
title = "This week in Datafuse #2"
date = 2021-08-11
slug = "2021-08-11-datafuse-weekly"
draft = false
+++

Datafuse, is a Modern Real-Time Data Processing & Analytics DBMS with a Cloud-Native Architecture, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don’t want you to miss.

- **add datafuse cli commands for package list & switch** by [@BohuTANG](https://github.com/BohuTANG). ([#1308](https://github.com/datafuselabs/datafuse/pull/1308) & [#1314](https://github.com/datafuselabs/datafuse/pull/1314))
- **use auto vectorized compute for some cases** by [@sundy-li](https://github.com/sundy-li). ([#1395](https://github.com/datafuselabs/datafuse/pull/1395))
- **a series of refactors related to storage layer operations** by [@drmingdrmer](https://github.com/drmingdrmer). ([#1411](https://github.com/datafuselabs/datafuse/pull/1411) [#1410](https://github.com/datafuselabs/datafuse/pull/1410) [#1378](https://github.com/datafuselabs/datafuse/pull/1378) etc.)
- **introduce alpha version performance tests** by [@ZhiHanZ](https://github.com/ZhiHanZ). ([#1281](https://github.com/datafuselabs/datafuse/pull/1281))
- **TLS RPC for Query and Store services/clients** by [@dantengsky](https://github.com/dantengsky). ([#1290](https://github.com/datafuselabs/datafuse/pull/1290))
- **support kill for query or connection statement** by [@zhang2014](https://github.com/zhang2014). ([#1280](https://github.com/datafuselabs/datafuse/pull/1280))
- **flatten the directory structure & unify the name style** by [@PsiACE](https://github.com/PsiACE). ([#1404](https://github.com/datafuselabs/datafuse/pull/1404))

## Changlogs

You can check the changelogs of Datafuse nightly to learn about our latest developments.

- [v0.4.74-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.74-nightly)
- [v0.4.73-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.73-nightly)
- [v0.4.72-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.72-nightly)
- [v0.4.71-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.71-nightly)

## Ecosystem/Upstream

From open source, for open source. The Datafuse team is also committed to contributing to the Rust ecosystem and upstream dependencies.

- [arrow2 #254: Added wrapping_cast to cast kernels](https://github.com/jorgecarleitao/arrow2/pull/254): introduce CastOptions to cast kernels. by [@sundy-li](https://github.com/sundy-li)
- [arrow-rs #656 (WIP)](https://github.com/apache/arrow-rs/pull/656) and [arrow-2 #251](https://github.com/jorgecarleitao/arrow2/pull/251): Prettytable is unmaintained. Change to comfy-table. by [@PsiACE](https://github.com/PsiACE/)

## Thanks

Thanks to your contribution, datafuse becomes better!

- [@SGZW](https://github.com/SGZW): Add config for DFS storage & raft meta storage ([#1288](https://github.com/datafuselabs/datafuse/pull/1288)), and refactor for test ([#1370](https://github.com/datafuselabs/datafuse/pull/1370)).
- [@dust1](https://github.com/dust1): log query string when mysql_session error. ([#1353](https://github.com/datafuselabs/datafuse/pull/1353))
- [@ives9638](https://github.com/ives9638): Improve filter performance. ([#1343](https://github.com/datafuselabs/datafuse/pull/1343))
- [@xuyifangreeneyes](https://github.com/xuyifangreeneyes): fix mysql client borderline missing for EXPLAIN statement. ([#1335](https://github.com/datafuselabs/datafuse/pull/1335))

## Meet Us

Please join the [Datafuse Community](https://github.com/datafuselabs/) if you are interested in Datafuse.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.
You can submit [issues](https://github.com/datafuselabs/datafuse/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [GitHub Discussions](https://github.com/datafuselabs/datafuse/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
