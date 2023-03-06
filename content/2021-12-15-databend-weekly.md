+++
title = "This week in Databend #20"
date = 2021-12-15
slug = "2021-12-15-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

> This week, Databend releases v0.6.0-nightly and begins a new six-week iteration.
> To learn about the main changes in v0.6, please see [Checklist proposal: Nightly v0.6](https://github.com/datafuselabs/databend/issues/2525).
>
> Get a sneak peek at the goals of v0.7 ? Check out [Checklist proposal: Nightly v0.7](https://github.com/datafuselabs/databend/issues/3428).

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **[common/containers] add conn pool** by [@drmingdrmer](https://github.com/drmingdrmer) ([#3468](https://github.com/datafuselabs/databend/pull/3468))
- **add SHOW GRANTS [FOR xxx] statement** by [@flaneur2020](https://github.com/flaneur2020). ([#3366](https://github.com/datafuselabs/databend/pull/3366))
- **KVApi support cross nodes read-after-write** by [@drmingdrmer](https://github.com/drmingdrmer) ([#3405](https://github.com/datafuselabs/databend/pull/3405))
- **describe stage** by [@sundy-li](https://github.com/sundy-li/). ([#3361](https://github.com/datafuselabs/databend/pull/3361))
- **fuse sys funcs** by [@dantengsky](https://github.com/dantengsky). ([#3302](https://github.com/datafuselabs/databend/pull/3302))
- **[common/meta/sled-store] txn-tree: add update_and_fetch()** by [@drmingdrmer](https://github.com/drmingdrmer) ([#3329](https://github.com/datafuselabs/databend/pull/3329))
- **add strings functions**
  - `EXPORT_SET`, `FIND_IN_SET` by [@mshauneu](https://github.com/mshauneu) ([#3343](https://github.com/datafuselabs/databend/pull/3343) & [#3375](https://github.com/datafuselabs/databend/pull/3375))
  - `BIN` by [@dust1](https://github.com/dust1) ([#3300](https://github.com/datafuselabs/databend/pull/3300))
  - `LENGTH` by [@BlackSmith96](https://github.com/BlackSmith96) ([#3448](https://github.com/datafuselabs/databend/pull/3448))

## Improvement

- **add expression nullable support** by [@junli1026](https://github.com/junli1026) ([#3452](https://github.com/datafuselabs/databend/pull/3452))
- **grant all privileges to the root user of localhost** by [@silathdiir](https://github.com/silathdiir) ([#3404](https://github.com/datafuselabs/databend/pull/3404))
- **support CTAS(Create Table As Select) statement** by [@junli1026](https://github.com/junli1026) ([#3400](https://github.com/datafuselabs/databend/pull/3400))
- **github issues/prs table add created/updated/closed time** by [@Veeupup](https://github.com/Veeupup) ([#3327](https://github.com/datafuselabs/databend/pull/3327))
- **follower forward request to leader**
  - `GetDatabase` by [@drmingdrmer](https://github.com/drmingdrmer) ([#3347](https://github.com/datafuselabs/databend/pull/3347))
  - `ListTables`, `ListDatabase`, `GetTableInfo` by [@ariesdevil](https://github.com/ariesdevil). ([#3360](https://github.com/datafuselabs/databend/pull/3360), [#3369](https://github.com/datafuselabs/databend/pull/3369))
- **add more query log events to query log table** by [@BohuTANG](https://github.com/BohuTANG). ([#3299](https://github.com/datafuselabs/databend/pull/3299))

## Build / Test / CI

- **refactor the whole ci into stages** by [@Xuanwo](https://github.com/Xuanwo) ([#3344](https://github.com/datafuselabs/databend/issues/3344))
- **apply the new test style to databend** by [@PsiACE](https://github.com/PsiACE) (track at [#1866](https://github.com/datafuselabs/databend/issues/1866))

### Bug fixes

- **make logs_handler return a bytes stream** by [@sunli829](https://github.com/sunli829). ([#3422](https://github.com/datafuselabs/databend/pull/3422))
- **fix string2string** by [@mshauneu](https://github.com/mshauneu). ([#3332](https://github.com/datafuselabs/databend/pull/3332))

## Tips

Let's learn a weekly tip from Databend.

### Discuss proposals for Databend

We currently have some discussions about proposals on the GitHub that may help you understand the mechanics of the work or get involved.

- **Query Cache**

  Clever use of caching can provide effective acceleration for Databend. We are implementing a single node memory-disk level 2 cache. Perhaps we will be moving towards distributed caching soon, more discussion on design and implementation is welcome, let's hear your thoughts. Related discussion [#3478](https://github.com/datafuselabs/databend/discussions/3478).

- **Re-organise our building systems**

  Our current build / test system is quite complex. We have Makeflie, Dockerfile(s), and a lot of shell / python scripts. We want to build a build/test/benchmark system based on the Rust style, so if you have any good ideas, please feel free to share to us. Related discussion [#3419](https://github.com/datafuselabs/databend/discussions/3419).

- **Refactor CI pipeline into stages**

  If you're interested in GitHub workflows, then take a look at this proposal. By [refactoring CI](https://github.com/datafuselabs/databend/issues/3344), we have effectively reduced blocking and been able to maintain it better. Related discussion [#3415](https://github.com/datafuselabs/databend/discussions/3415).

## Changelogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.6.4-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.4-nightly)
- [v0.6.3-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.3-nightly)
- [v0.6.2-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.2-nightly)
- [v0.6.1-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.1-nightly)
- [v0.6.0-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.0-nightly)
- [v0.5.41-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.41-nightly)
- [v0.5.40-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.40-nightly)
- [v0.5.39-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.5.39-nightly)

## Ecosystem/Upstream

From open source, for open source. Our team is also committed to contributing to the Rust ecosystem and upstream dependencies.

- [datafuse-extras/sqlparser-rs #11: add column comment for create table](https://github.com/datafuse-extras/sqlparser-rs/pull/11) by [@Junnplus](https://github.com/Junnplus/)
- [datafuse-extras/sqlparser-rs #12: support negative numbers as value](https://github.com/datafuse-extras/sqlparser-rs/pull/12) by [@sundy-li](https://github.com/sundy-li/) & [@PsiACE](https://github.com/PsiACE/)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
