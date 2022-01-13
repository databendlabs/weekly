+++
title = "This week in Databend #24"
date = 2022-01-12
slug = "2022-01-12-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **meta support multi-tenant** by [@ariesdevil](https://github.com/ariesdevil/). ([#3790](https://github.com/datafuselabs/databend/pull/3790))
- **support USE TENANT 'tenant_id'** by [@BohuTANG](https://github.com/BohuTANG). ([#3793](https://github.com/datafuselabs/databend/pull/3793))
- **add priv check** by [@flaneur2020](https://github.com/flaneur2020). ([#3710](https://github.com/datafuselabs/databend/pull/3710))

## Improvement

- **range filter support multi-column expression** by [@zhyass](https://github.com/zhyass). ([#3835](https://github.com/datafuselabs/databend/pull/3835)
- **refine transaction impl** by [@ariesdevil](https://github.com/ariesdevil/). ([#3837](https://github.com/datafuselabs/databend/pull/3837))
- **add storage configs to system.configs** by [@lianghanzhen](https://github.com/lianghanzhen). ([#3822](https://github.com/datafuselabs/databend/pull/3822))
- **split the apply_cmd function to sub functions** by [@lichuang](https://github.com/lichuang). ([#3831](https://github.com/datafuselabs/databend/pull/3831))
- **refine cache** by [@dantengsky](https://github.com/dantengsky). ([#3798](https://github.com/datafuselabs/databend/pull/3798))
- **improve for expression monotonicity visitor** by [@zhyass](https://github.com/zhyass). ([#3783](https://github.com/datafuselabs/databend/pull/3783)
- **simplify the grant verify logic** by [@flaneur2020](https://github.com/flaneur2020). ([#3804](https://github.com/datafuselabs/databend/pull/3804))

### Bug fixes

- **MySQL driver compalibility** by [@TCeason](https://github.com/TCeason). ([#3830](https://github.com/datafuselabs/databend/pull/3830))

## Tips

Let's learn a weekly tip from Databend.

### New datatype system design

We need to redesign the `datatype` system because current implementation had some shortcomes.

Now, `DataType` is an enum type:

- We must use specific type after matching.
- We can't use it as generic argument.
- It may involve some nested datatypes.
- And hard to put attributes into it.

Want to find out how we will improve the DataType system? Please check the [RFC - New datatype system design](https://databend.rs/dev/rfcs/query/new-datatype-system).

Plan to jump to specific implementation and track progress? [Databend#3794](https://github.com/datafuselabs/databend/pull/3794) might be for you.

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.6.32-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.32-nightly)
- [v0.6.31-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.31-nightly)
- [v0.6.30-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.30-nightly)
- [v0.6.29-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.29-nightly)
- [v0.6.28-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.28-nightly)
- [v0.6.27-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.27-nightly)
- [v0.6.26-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.26-nightly)

## Ecosystem/Upstream

From open source, for open source. Our team is also committed to contributing to the Rust ecosystem and upstream dependencies.

- [anyerror](https://github.com/drmingdrmer/anyerror): Error for transport in rust. by [@drmingdrmer](https://github.com/drmingdrmer/)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://datafusecloud.slack.com/join/shared_invite/zt-nojrc9up-50IRla1Y1h56rqwCTkkDJA)
