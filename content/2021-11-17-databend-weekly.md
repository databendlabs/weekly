+++
title = "This week in Databend #16"
date = 2021-11-17
slug = "2021-11-17-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **add metrics to dal operations (label with tenant_id and cluster_id)** by [@dantengsky](https://github.com/dantengsky). ([#2821](https://github.com/datafuselabs/databend/pull/2821))
- **add monotonicity check visitor** by [@junli1026](https://github.com/junli1026) ([#2743](https://github.com/datafuselabs/databend/pull/2743))
- **alter user support** by [@GrapeBaBa](https://github.com/GrapeBaBa) ([#2771](https://github.com/datafuselabs/databend/pull/2771))
- **add /v1/query api** by [@youngsofun](https://github.com/youngsofun). ([#2688](https://github.com/datafuselabs/databend/pull/2688))
- **add functions**
  - `mod`/`exp` by [@Junnplus](https://github.com/Junnplus) ([#2850](https://github.com/datafuselabs/databend/pull/2850) & [#2847](https://github.com/datafuselabs/databend/pull/2847))
  - `ceil`/`ceiling`/`floor` by [@kyon0304](https://github.com/kyon0304) ([#2759](https://github.com/datafuselabs/databend/pull/2759))
  - `inet_ntoa` by [@pymongo](https://github.com/pymongo) ([#2824](https://github.com/datafuselabs/databend/pull/2824))

## Improvement

- **mysql query writer support struct datatype** by [@zhyass](https://github.com/zhyass). ([#2832](https://github.com/datafuselabs/databend/pull/2832))
- **reuse common::streams::parquetsource** by [@Veeupup](https://github.com/Veeupup). ([#2848](https://github.com/datafuselabs/databend/pull/2848))
- **test membership after restarting MetaNode; test join a node twice** by [@drmingdrmer](https://github.com/drmingdrmer) ([#2826](https://github.com/datafuselabs/databend/pull/2826))
- **user grant privileges** by [@Junnplus](https://github.com/Junnplus) ([#2797](https://github.com/datafuselabs/databend/pull/2797))
- **add tuple expression support** by [@zhyass](https://github.com/zhyass). ([#2785](https://github.com/datafuselabs/databend/pull/2785))
- **async datastream** by [@sundy-li](https://github.com/sundy-li). ([#2786](https://github.com/datafuselabs/databend/pull/2786))
- **make partial cast to float works** by [@sundy-li](https://github.com/sundy-li). ([#2789](https://github.com/datafuselabs/databend/pull/2789))
- **namespace -> cluster, tenant -> tenant_id** by [@BohuTANG](https://github.com/BohuTANG) ([#2750](https://github.com/datafuselabs/databend/pull/2750))

### Bug fixes

- **fix not projection schema for fuse table** by [@zhang2014](https://github.com/zhang2014). ([#2839](https://github.com/datafuselabs/databend/pull/2839))
- **create users with different hostnames** by [@Junnplus](https://github.com/Junnplus) ([#2727](https://github.com/datafuselabs/databend/pull/2727))

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.5.20-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.20-nightly)
- [v0.5.19-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.19-nightly)
- [v0.5.18-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.18-nightly)
- [v0.5.17-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.17-nightly)
- [v0.5.16-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.16-nightly)
- [v0.5.15-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.15-nightly)
- [v0.5.14-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.14-nightly)

## Ecosystem/Upstream

From open source, for open source. Our team is also committed to contributing to the Rust ecosystem and upstream dependencies.

- [datafuse-extras/sqlparser-rs  #8: Add tuple expression](https://github.com/datafuse-extras/sqlparser-rs/pull/8) by [@zhyass](https://github.com/zhyass/)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
