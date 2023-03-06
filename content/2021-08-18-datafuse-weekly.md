+++
title = "This week in Datafuse #3"
date = 2021-08-18
slug = "2021-08-18-datafuse-weekly"
draft = false
+++

Datafuse is an open source elastic and scalable cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don’t want you to miss.

- **add ValuesSource and CsvSource** by [@sundy-li](https://github.com/sundy-li). ([#1484](https://github.com/datafuselabs/datafuse/pull/1484))
- **introducing a custom HashMap to try to improve group by performance** by [@zhang2014](https://github.com/zhang2014). ([#1443](https://github.com/datafuselabs/datafuse/pull/1443))
- **cli: change to clap from structopt** by [@ZhiHanZ](https://github.com/ZhiHanZ). ([#1491]https://github.com/datafuselabs/datafuse/pull/1491))
- **implement Contains operation** by [@jyizheng](https://github.com/jyizheng). ([#1379](https://github.com/datafuselabs/datafuse/pull/1379))
- **a series of new features make the storage layer better** by [@drmingdrmer](https://github.com/drmingdrmer). ([#1461](https://github.com/datafuselabs/datafuse/pull/1461) [#1479](https://github.com/datafuselabs/datafuse/pull/1479) [#1439](https://github.com/datafuselabs/datafuse/pull/1439) etc.)
- **fix panic while reading data parts** by [@dantengsky](https://github.com/dantengsky). ([#1489](https://github.com/datafuselabs/datafuse/pull/1489))
- **add datafuse design whitepaper to website** by [@BohuTANG](https://github.com/BohuTANG). ([#1490](https://github.com/datafuselabs/datafuse/pull/1490) & [#1493](https://github.com/datafuselabs/datafuse/pull/1493))

## Changelogs

You can check the changelogs of Datafuse nightly to learn about our latest developments.

- [v0.4.81-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.81-nightly)
- [v0.4.80-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.80-nightly)
- [v0.4.79-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.79-nightly)
- [v0.4.78-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.78-nightly)
- [v0.4.77-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.77-nightly)
- [v0.4.76-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.76-nightly)
- [v0.4.75-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.75-nightly)

## Thanks

Thanks to your contribution, datafuse becomes better!

- [@junli1026](https://github.com/junli1026):Fix read_opt_scalar and add test ([#1446](https://github.com/datafuselabs/datafuse/pull/1446)) and add test for array builder ([#1468](https://github.com/datafuselabs/datafuse/pull/1468))
- [@yjhmelody](https://github.com/yjhmelody): Fix variadic_arguments of LogicFunction ([#1486](https://github.com/datafuselabs/datafuse/pull/1486))
- [@koushiro](https://github.com/koushiro): Use `#[from]` attribute of `thiserror::Error` proc macro, and remove some boilerplate code ([#1507](https://github.com/datafuselabs/datafuse/pull/1507))
- [@jackwener](https://github.com/jackwener): Send slack notification when performance tests standalone start, fail or success ([#1450](https://github.com/datafuselabs/datafuse/pull/1450))

## Meet Us

Please join the [Datafuse Community](https://github.com/datafuselabs/) if you are interested in Datafuse.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.
You can submit [issues](https://github.com/datafuselabs/datafuse/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [GitHub Discussions](https://github.com/datafuselabs/datafuse/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
