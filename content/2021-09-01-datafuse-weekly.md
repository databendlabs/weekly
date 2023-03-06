+++
title = "This week in Datafuse #5"
date = 2021-09-01
slug = "2021-09-01-datafuse-weekly"
draft = false
+++

Datafuse is an open source elastic and scalable cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don’t want you to miss.

- **custom logic types on arrow2** by [@sundy-li](https://github.com/sundy-li). ([#1648](https://github.com/datafuselabs/datafuse/pull/1648))
- **add a basic lru memory/disk cache** by [@PsiACE](https://github.com/PsiACE) ([#1600](https://github.com/datafuselabs/datafuse/pull/1600)).
- **use custom HashMap for `HashMethodKind::Serializer`** by [@zhang2014](https://github.com/zhang2014). ([#1500](https://github.com/datafuselabs/datafuse/pull/1500))
- **a series of refactors on catalog** by [@BohuTANG](https://github.com/BohuTANG). ([#1642](https://github.com/datafuselabs/datafuse/pull/1642), [#1643](https://github.com/datafuselabs/datafuse/pull/1643), [#1644](https://github.com/datafuselabs/datafuse/pull/1644))
- **cross compile for arm-based architecture** by [@ZhiHanZ](https://github.com/ZhiHanZ). ([#1689](https://github.com/datafuselabs/datafuse/pull/1689))
- **refactor some warp services to axum** by [@ZhiHanZ](https://github.com/ZhiHanZ). ([#1654](https://github.com/datafuselabs/datafuse/pull/1654))

## Changelogs

You can check the changelogs of Datafuse nightly to learn about our latest developments.

- [v0.4.95-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.95-nightly)
- [v0.4.94-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.94-nightly)
- [v0.4.93-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.93-nightly)
- [v0.4.92-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.92-nightly)
- [v0.4.91-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.91-nightly)
- [v0.4.90-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.90-nightly)
- [v0.4.89-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.89-nightly)

## Ecosystem/Upstream

From open source, for open source. The Datafuse team is also committed to contributing to the Rust ecosystem and upstream dependencies.

- [arrow2 #344: Bumped tonic and prost in flight](https://github.com/jorgecarleitao/arrow2/pull/344) by [@PsiACE](https://github.com/PsiACE/)

## Thanks

Thanks to your contribution, datafuse becomes better!

- [@jyz0309](https://github.com/jyz0309): Add v1/logs http api ([#1657](https://github.com/datafuselabs/datafuse/pull/1657))
- [@b41sh](https://github.com/b41sh): support aggregate function STDDEV_POP() ([#1671](https://github.com/datafuselabs/datafuse/pull/1671))
- [@ygf11](https://github.com/ygf11):support where option in show databases ([#1510](https://github.com/datafuselabs/datafuse/pull/1510)) and add doc for `SHOW DATABASES WHERE/LIKE` ([#1615](https://github.com/datafuselabs/datafuse/pull/1615))
- [@cppcoffee](https://github.com/cppcoffee): use arrow2 bitmap to improve memory usage ([#1638](https://github.com/datafuselabs/datafuse/pull/1638))
- [@GrapeBaBa](https://github.com/GrapeBaBa): improve error msg for address in use ([#1645](https://github.com/datafuselabs/datafuse/pull/1645)) and fix mysqlhandler log bug ([#1646](https://github.com/datafuselabs/datafuse/pull/1646)), etc.

## Meet Us

Please join the [Datafuse Community](https://github.com/datafuselabs/) if you are interested in Datafuse.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.
You can submit [issues](https://github.com/datafuselabs/datafuse/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [GitHub Discussions](https://github.com/datafuselabs/datafuse/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
