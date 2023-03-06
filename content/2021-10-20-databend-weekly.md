+++
title = "This week in Databend #12"
date = 2021-10-20
slug = "2021-10-20-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don’t want you to miss.

### Features

- **new features for cli** by [@ZhiHanZ](https://github.com/ZhiHanZ), like
    - **support mirror** ([#2267](https://github.com/datafuselabs/databend/pull/2267))
    - **support query** ([#2323](https://github.com/datafuselabs/databend/pull/2323))
- **store Database in sled** by [@drmingdrmer](https://github.com/drmingdrmer) ([#2237](https://github.com/datafuselabs/databend/pull/2237))
- **add RangeFilter for index pruning** by [@zhyass](https://github.com/zhyass). ([#2256](https://github.com/datafuselabs/databend/pull/2256))
- **add mem alloc and derive macro** by [@Veeupup](https://github.com/Veeupup). ([#2299](https://github.com/datafuselabs/databend/pull/2299))
- **add toHour/toMinute/ToSecond** [@GrapeBaBa](https://github.com/GrapeBaBa) ([#2309](https://github.com/datafuselabs/databend/pull/2309))
- **add toMonday function** by [@sundy-li](https://github.com/sundy-li). ([#2317](https://github.com/datafuselabs/databend/pull/2317))
- **add azure blob DAL** by [@junli1026](https://github.com/junli1026) ([#2330](https://github.com/datafuselabs/databend/pull/2330))


## Improvement

- **fuse table append/read (local mode only)** by [@dantengsky](https://github.com/dantengsky). ([#2214](https://github.com/datafuselabs/databend/pull/2214))
- **store StateMachine::client_last_resp in sled::Tree** by [@ariesdevil](https://github.com/ariesdevil). ([#2223](https://github.com/datafuselabs/databend/pull/2223))
- **refactor: decouple MetaRemoteSync into 3 componennt: remote meta access, caching, and async-to-sync conversion** by [@drmingdrmer](https://github.com/drmingdrmer) ([#2283](https://github.com/datafuselabs/databend/pull/2283))
- **remove DatabaseEngine** by [@drmingdrmer](https://github.com/drmingdrmer) ([#2296](https://github.com/datafuselabs/databend/pull/2296)) & [@yufan022](https://github.com/yufan022) ([#2297](https://github.com/datafuselabs/databend/pull/2297))
- **add metrics for s3 client** by [@flaneur2020](https://github.com/flaneur2020). ([#2298](https://github.com/datafuselabs/databend/pull/2298))
- **add flight client timeout**  by [@BohuTANG](https://github.com/BohuTANG). ([#2301](https://github.com/datafuselabs/databend/pull/2301))
- **use tokio signal to process terminal signal** by [@zhang2014](https://github.com/zhang2014). ([#2307](https://github.com/datafuselabs/databend/pull/2307))
- **use arrow-format instead of arrow-flight** by [@PsiACE](https://github.com/PsiACE). ([#2328](https://github.com/datafuselabs/databend/pull/2328))

### Bug fixes

- **fix graceful shutdown takes at most 1 minute** by [@zhang2014](https://github.com/zhang2014). ([#2249](https://github.com/datafuselabs/databend/pull/2249)) 
- **fix query metrics exporter issue in prometheus** by [@ZhiHanZ](https://github.com/ZhiHanZ). ([#2333](https://github.com/datafuselabs/databend/pull/2333)) 

## Changelogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.4.142-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.142-nightly)
- [v0.4.141-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.141-nightly)
- [v0.4.140-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.140-nightly)
- [v0.4.139-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.139-nightly)
- [v0.4.138-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.138-nightly)
- [v0.4.137-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.4.137-nightly)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
