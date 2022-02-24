+++
title = "This week in Databend #30"
date = 2022-02-23
slug = "2022-02-23-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **support `REGEXP_LIKE` function**  by [@nange](https://github.com/nange). ([#4220](https://github.com/datafuselabs/databend/pull/4220))

## Improvement

- **add create/drop role, allows grant to roles** by [@flaneur2020](https://github.com/flaneur2020). ([#4194](https://github.com/datafuselabs/databend/pull/4194))
- **use listen addr when start grpc** by [@lichuang](https://github.com/lichuang). ([#4199](https://github.com/datafuselabs/databend/pull/4199))
- **add role cache mgr** by [@flaneur2020](https://github.com/flaneur2020). ([#4165](https://github.com/datafuselabs/databend/pull/4165))
- **migrate more functions for datavalue2**
  - refactor function in basic by [@Veeupup](https://github.com/Veeupup) ([#4192](https://github.com/datafuselabs/databend/pull/4192))
  - migrate abs/degress/radians to function2 by [@PsiACE](https://github.com/PsiACE). ([#4173](https://github.com/datafuselabs/databend/pull/4173))
  - all remaining functions by [@sundy-li](https://github.com/sundy-li). ([#4176](https://github.com/datafuselabs/databend/pull/4176) & [#4200](https://github.com/datafuselabs/databend/pull/4200))

> In particular, with the merging of [#4200 rename datavalues2 to datavalues](https://github.com/datafuselabs/databend/pull/4200), we now have a whole new set of datavalues and have successfully migrated all the relevant code.

## Bug fixes

- **refactor join cluster process** by [@lichuang](https://github.com/lichuang). ([#4219](https://github.com/datafuselabs/databend/pull/4219))
- **fix arithmetic with null type bug** by [@zhyass](https://github.com/zhyass). ([#4221](https://github.com/datafuselabs/databend/pull/4221))
- **fix if bug with null column** by [@Veeupup](https://github.com/veeupup). ([#4207](https://github.com/datafuselabs/databend/pull/4207))

## Tips

Let's learn a weekly tip from Databend.

### How to eliminate OOM at build time

Databend has [a large crate to manage and implement most of the functions](https://github.com/datafuselabs/databend/tree/main/common/functions). This means that the following error may be reported at build time:

> (signal: 9, SIGKILL: kill) warning: build failed, waiting for other jobs to finish... error: build failed.

We observed that this phenomenon is mainly due to memory overflow during linking. This should be a problem that many giant rust projects may have to face, so let's see how to solve it.

1. Use a better linker. Modern linkers like [mold](https://github.com/rui314/mold), which in addition to being faster, are also more memory friendly, can reduce this problem to some extent.
2. Enable the newer symbol mangling scheme. In the latest nightly Rust, this means that `-C symbol-manging-version=v0`. It generates smaller symbols, and we observe a great memory reduction.
3. Consider allocate more virtual memory. Of course, this is definitely a valid approach, but it may require adding another dozen GiB.


## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.6.72-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.66-nightly)
- [v0.6.71-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.65-nightly)
- [v0.6.70-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.64-nightly)
- [v0.6.69-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.63-nightly)
- [v0.6.68-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.62-nightly)
- [v0.6.67-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.61-nightly)

## Ecosystem/Upstream

From open source, for open source. Our team is also committed to contributing to the Rust ecosystem and upstream dependencies.

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://datafusecloud.slack.com/join/shared_invite/zt-nojrc9up-50IRla1Y1h56rqwCTkkDJA)- [Slack Channel](https://datafusecloud.slack.com/join/shared_invite/zt-nojrc9up-50IRla1Y1h56rqwCTkkDJA)

