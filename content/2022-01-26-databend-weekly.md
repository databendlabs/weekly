+++
title = "This week in Databend #26"
date = 2022-01-26
slug = "2022-01-26-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **add bloom filter for single column equivalent expression** by [@junli1026](https://github.com/junli1026) ([#3887](https://github.com/datafuselabs/databend/pull/3887))
- **Jwt Auth for http handler** by [@youngsofun](https://github.com/youngsofun) ([#3993](https://github.com/datafuselabs/databend/pull/3993))

## Improvement

- **add partitions_scanned and partitions_total to planner statistics** by [@BohuTANG](https://github.com/BohuTANG). ([#3909](https://github.com/datafuselabs/databend/pull/3909))
- **clean up metasrv code and test** by [@drmingdrmer](https://github.com/drmingdrmer). ([#3925](https://github.com/datafuselabs/databend/pull/3925), [#3928](https://github.com/datafuselabs/databend/pull/3928) and more)
- **improve `SHOW FUNCTIONS`** by [@lianghanzhen](https://github.com/lianghanzhen). ([#3945](https://github.com/datafuselabs/databend/pull/3945))
- **async mysql server** by [@PsiACE](https://github.com/PsiACE). ([#3981](https://github.com/datafuselabs/databend/pull/3981))

### Bug fixes

- **support escape `\t` `\n` for field_delimitor & record_delimitor** by [@sundy-li](https://github.com/sundy-li/). ([#3923](https://github.com/datafuselabs/databend/pull/3923))
- **fix pruning get error when expression is not monotonic** by [@zhyass](https://github.com/zhyass). ([#3940](https://github.com/datafuselabs/databend/pull/3940))
- **parallel import data error** by [@dantengsky](https://github.com/dantengsky). ([#3964](https://github.com/datafuselabs/databend/pull/3964))

### Experimental

- **new processor framework** by [@zhang2014](https://github.com/zhang2014). ([#3380](https://github.com/datafuselabs/databend/pull/3380)).
- **dal2: implement SeekableReader** by [@Xuanwo](https://github.com/Xuanwo). ([#3934](https://github.com/datafuselabs/databend/pull/3934)).

Another key plan is that we are **migrating functions to the new datavalues2** and if you are interested, you can track [#3967](https://github.com/datafuselabs/databend/issues/3967) , which is a list of tasks.

## Tips

Let's learn a weekly tip from Databend.

### Analyze OnTime datasets with Databend on AWS EC2 and S3

Now, [databend.rs](https://databend.rs) has a learning section and will be followed by short lessons to help you understand how to use Databend better.

This article provides step-by-step instructions on how to deploy Databend on EC2 and S3 and perform analysis on the OnTime dataset.

> `Reporting Carrier On-Time Performance (1987-present)` contains on-time arrival and departure data for non-stop domestic flights by month and year, by carrier and by origin and destination airport. Includes scheduled and actual departure and arrival times, canceled and diverted flights, taxi-out and taxi-in times, causes of delay and cancellation, air time, and non-stop distance.

- [Analyze OnTime datasets with Databend on AWS EC2 and S3](https://databend.rs/learn/lessons/analyze-ontime-with-databend-on-ec2-and-s3)

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.6.45-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.45-nightly)
- [v0.6.44-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.44-nightly)
- [v0.6.43-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.43-nightly)
- [v0.6.42-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.42-nightly)
- [v0.6.41-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.41-nightly)
- [v0.6.40-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.40-nightly)
- [v0.6.39-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.39-nightly)

## Ecosystem/Upstream

From open source, for open source. Our team is also committed to contributing to the Rust ecosystem and upstream dependencies.

- [sqllogictest-rs #15: runner: Implement validator support](https://github.com/singularity-data/sqllogictest-rs/pull/15) by [@Xuanwo](https://github.com/Xuanwo/).
- [datafuse-extras/msql-srv #18: Try async](https://github.com/datafuse-extras/msql-srv/pull/18): add a simple async srv implementation. by [@PsiACE](https://github.com/PsiACE/).

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)

