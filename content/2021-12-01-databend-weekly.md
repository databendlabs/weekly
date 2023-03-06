+++
title = "This week in Databend #18"
date = 2021-12-01
slug = "2021-12-01-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **add UserGrantSet struct to manage the privileges of an user or role** by [@flaneur2020](https://github.com/flaneur2020) ([#3149](https://github.com/datafuselabs/databend/pull/3149))
- **add GitHub datasource** by [@Veeupup](https://github.com/Veeupup). ([#3093](https://github.com/datafuselabs/databend/pull/3093))
- **support load csv files via HTTP Stream** by [@sundy-li](https://github.com/sundy-li). ([#3126](https://github.com/datafuselabs/databend/pull/3126))
- **add ignore function which can be used in performance tests** by [@sundy-li](https://github.com/sundy-li). ([#3177](https://github.com/datafuselabs/databend/pull/3177))
- **support Projection push down for MemoryTable Engine** by [@ygf11](https://github.com/ygf11) ([#3154](https://github.com/datafuselabs/databend/pull/3154))
- **insert overwrite stmt** by [@Veeupup](https://github.com/Veeupup). ([#3150](https://github.com/datafuselabs/databend/pull/3150))
- **add strings functions**
  - `POSITION`, `INSERT`, `LOCATE`, `base64` by [@mshauneu](https://github.com/mshauneu) ([#3179](https://github.com/datafuselabs/databend/pull/3179), [#3189](https://github.com/datafuselabs/databend/pull/3189), [#3157](https://github.com/datafuselabs/databend/pull/3157), [#3142](https://github.com/datafuselabs/databend/pull/3142))
  - `HEX`, `UNHEX`, `QUOTE`, `LTRIM`, `RTRIM`, `OCT`, `REPEAT` by [@sunli829](https://github.com/sunli829) ([#3116](https://github.com/datafuselabs/databend/pull/3116), [#3092](https://github.com/datafuselabs/databend/pull/3092))
  - `ascii` by [@dust1](https://github.com/dust1) ([#3131](https://github.com/datafuselabs/databend/pull/3131))

## Improvement

- **add monotonicity check for some functions** by [@junli1026](https://github.com/junli1026) ([#3134](https://github.com/datafuselabs/databend/pull/3134))
- **refactor Catalog** by [@BohuTANG](https://github.com/BohuTANG). ([#3136](https://github.com/datafuselabs/databend/pull/3136))
- **introduce distributed insertion** by [@dantengsky](https://github.com/dantengsky). ([#2945](https://github.com/datafuselabs/databend/pull/2945))
- **add time in http handler response** by [@youngsofun](https://github.com/youngsofun). ([#3097](https://github.com/datafuselabs/databend/pull/3097))
- **add ident to Change to indicate what resource is changed** by [@drmingdrmer](https://github.com/drmingdrmer) ([#3080](https://github.com/datafuselabs/databend/pull/3080))
- **refactor insert values** by [@sundy-li](https://github.com/sundy-li). ([#3101](https://github.com/datafuselabs/databend/pull/3101))
- **string template function** by [@sundy-li](https://github.com/sundy-li). ([#3139](https://github.com/datafuselabs/databend/pull/3139))

## Performance Improvement

- **simple chunk strategy in insertion** by [@dantengsky](https://github.com/dantengsky). ([#3122](https://github.com/datafuselabs/databend/pull/3122))
- **speed up min/max agg** by [@sundy-li](https://github.com/sundy-li). ([#3163](https://github.com/datafuselabs/databend/pull/3163))
- **fix performance fallback** by [@zhang2014](https://github.com/zhang2014). ([#3140](https://github.com/datafuselabs/databend/pull/3140))

### Bug fixes

- **make table func case insensitive** by [@Veeupup](https://github.com/Veeupup). ([#3191](https://github.com/datafuselabs/databend/pull/3191))
- **fix compilation error on m1-mac** by [@drmingdrmer](https://github.com/drmingdrmer) ([#3166](https://github.com/datafuselabs/databend/pull/3166))

## Tips

Let's learn a weekly tip from Databend.

**How to load data into Databend**

Databend now supports the loading of data via the following methods:

- Copy data from stage. [> learn more](https://databend.rs/sqlstatement/data-loading/copy-data-from-stage/)
- Load data into a table using HTTP streaming API. [> learn more](https://databend.rs/sqlstatement/data-loading/http-streaming-load/)

## Changelogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.5.31-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.31-nightly)
- [v0.5.30-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.30-nightly)
- [v0.5.29-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.29-nightly)
- [v0.5.28-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.28-nightly)
- [v0.5.27-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.27-nightly)

## Ecosystem/Upstream

From open source, for open source. Our team is also committed to contributing to the Rust ecosystem and upstream dependencies.

- [arrow2 #646: Improved performance in cast Primitive to Binary/String (2x)](https://github.com/jorgecarleitao/arrow2/pull/646): Reuse the temp bytes buffer. by [@sundy-li](https://github.com/sundy-li/)
- [release naive-cityhash v0.1.0: a naive native 128-bit cityhash v102](https://crates.io/crates/naive-cityhash/0.1.0) by [@PsiACE](https://github.com/PsiACE/)
- [octocrab #166: add issue_url in Comment model](https://github.com/XAMPPRocky/octocrab/pull/166/) by [@Veeupup](https://github.com/Veeupup/)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
