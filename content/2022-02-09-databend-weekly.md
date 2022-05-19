+++
title = "This week in Databend #28"
date = 2022-02-09
slug = "2022-02-09-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **support `SHOW ENGINES` statement** by [@SGZW](https://github.com/SGZW). ([#4050](https://github.com/datafuselabs/databend/pull/4050))
- **merge `datavalues-dev` into `main`** by [@sundy-li](https://github.com/sundy-li). ([#4074](https://github.com/datafuselabs/databend/pull/4074))

## Improvement

- **refactor some ErrorCode to MetaError in metasrv** by [@lichuang](https://github.com/lichuang). ([#4023](https://github.com/datafuselabs/databend/pull/4023))
- **implment backtrack for parser and add a human-friendly pretty printer for errors** by [@andylokandy](https://github.com/andylokandy). ([#4045](https://github.com/datafuselabs/databend/pull/4045))
- **add tenant empty check** by [@BohuTANG](https://github.com/BohuTANG). ([#4057](https://github.com/datafuselabs/databend/pull/4057))
- **refactor all string2number functions** by [@Xuanwo](https://github.com/Xuanw). ([#4070](https://github.com/datafuselabs/databend/pull/4070))

### Experimental

- **dal2: implement DAL Layer support** by [@Xuanwo](https://github.com/Xuanwo). ([#4067](https://github.com/datafuselabs/databend/pull/4067)).
- **dal2: implement Context support** by [@Xuanwo](https://github.com/Xuanwo). ([#4096](https://github.com/datafuselabs/databend/pull/4096)).

## Tips

Let's learn a weekly tip from Databend.

### Databend Release & Maintenance

Release and maintenance are routine tasks for the Databend team, let's take a look at how the processes probably works.

**Release channels**

Databend release process following the 'release train' model used by e.g. Rust, Firefox and Chrome, as well as 'feature staging'.

Databend is in its early stages and we are only updating the nightly version number for now.
We also release a minor version periodically, about 6 weeks, influenced by the iteration cycle.

For more information, please see [databend.rs - Databend release channels](https://databend.rs/dev/development/release-channels).

**Routine maintenance**

Databend always tries to use newer toolchains and dependencies to ensure performance and reliability.

We currently have almost a thousand dependencies and have had to intervene manually in this process.
If possible, it is essential to introduce a proper automatic batch upgrade mechanism with a rollback scheme.

For more information, please see [databend.rs - Databend routine maintenance](https://databend.rs/dev/development/routine-maintenance).

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.6.59-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.59-nightly)
- [v0.6.58-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.58-nightly)
- [v0.6.57-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.57-nightly)
- [v0.6.56-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.56-nightly)
- [v0.6.55-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.55-nightly)
- [v0.6.54-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.54-nightly)
- [v0.6.53-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.53-nightly)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
