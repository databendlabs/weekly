+++
title = "This week in Databend #29"
date = 2022-02-16
slug = "2022-02-16-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **add metactl to dump data in json from a sled db**  by [@drmingdrmer](https://github.com/drmingdrmer). ([#4167](https://github.com/datafuselabs/databend/pull/4167))
- **integrate select query with new processor** by [@zhang2014](https://github.com/zhang2014). ([#3932](https://github.com/datafuselabs/databend/pull/3932))
- **add hash function city64WithSeed** by [@junli1026](https://github.com/junli1026). ([#4131](https://github.com/datafuselabs/databend/pull/4131))

## Improvement

- **refactorings about show plan** by [@BohuTANG](https://github.com/BohuTANG). ([#4130](https://github.com/datafuselabs/databend/pull/4130), [#4138](https://github.com/datafuselabs/databend/pull/4138), etc.)
- **scalar introduce Viewer & ViewerIter GATs** by [@sundy-li](https://github.com/sundy-li). ([#4093](https://github.com/datafuselabs/databend/pull/4093))
- **migrate more functions for datavalue2**
  - interval function by [@zhyass](https://github.com/zhyass). ([#4096](https://github.com/datafuselabs/databend/pull/4096))
  - most of string functions by [@Veeupup](https://github.com/Veeupup) & [@sundy-li](https://github.com/sundy-li). (track in #[3975](https://github.com/datafuselabs/databend/issues/3975))
  - some math functions by [@PsiACE](https://github.com/PsiACE) & [@sundy-li](https://github.com/sundy-li). (track in #[3972](https://github.com/datafuselabs/databend/issues/3972))

## Performance Improvement

- **refactor if to get better performence** by [@Veeupup](https://github.com/Veeupup). ([#4160](https://github.com/datafuselabs/databend/pull/4160))
- **improve storage accessor initate logic** by [@BohuTANG](https://github.com/BohuTANG). ([#4159](https://github.com/datafuselabs/databend/pull/4159))

## Bug fixes

- **Fix Analyze between** by [@sundy-li](https://github.com/sundy-li). ([#4136](https://github.com/datafuselabs/databend/pull/4136))
- **app-error should not fail state machine txn**  by [@drmingdrmer](https://github.com/drmingdrmer). ([#4099](https://github.com/datafuselabs/databend/pull/4099))

## Tips

Let's learn a weekly tip from Databend.

### Announce OpenDAL

**Open** **D**ata **A**ccess **L**ayer that connect the whole world together.

- General: designed for any workload, not only for Databend.
- Zero-Overhead: Using this lib is just like using the native SDK.
- Easy to understand: Both for using and implementing.

This project has now been separated from Databend and is offered as a separate project -> [datafuselabs/opendal](https://github.com/datafuselabs/opendal).

Please see [proposal: Vision of Databend DAL](https://github.com/datafuselabs/databend/discussions/3662) for the vision of OpenDAL.

See its change history details in [#3677](https://github.com/datafuselabs/databend/issues/3677).

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.6.66-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.66-nightly)
- [v0.6.65-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.65-nightly)
- [v0.6.64-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.64-nightly)
- [v0.6.63-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.63-nightly)
- [v0.6.62-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.62-nightly)
- [v0.6.61-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.61-nightly)
- [v0.6.60-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.60-nightly)

## Ecosystem/Upstream

From open source, for open source. Our team is also committed to contributing to the Rust ecosystem and upstream dependencies.

- [datafuselabs/opendal](https://github.com/datafuselabs/opendal): *O*pen *D*ata *A*ccess *L*ayer that connect the whole world together. Work led by [@Xuanwo](https://github.com/Xuanwo/)
- [bitsvec](https://github.com/PsiACE/bitsvec): A bit vector with the Rust standard library's portable SIMD API. by [@PsiACE](https://github.com/PsiACE/)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://datafusecloud.slack.com/join/shared_invite/zt-nojrc9up-50IRla1Y1h56rqwCTkkDJA)- [Slack Channel](https://datafusecloud.slack.com/join/shared_invite/zt-nojrc9up-50IRla1Y1h56rqwCTkkDJA)

