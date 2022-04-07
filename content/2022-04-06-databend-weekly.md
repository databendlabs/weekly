+++
title = "This week in Databend #36"
date = 2022-04-06
slug = "2022-04-06-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **common-functions:  support `REGEXP_INSTR` function** by [@nange](https://github.com/nange), ([#4629](https://github.com/datafuselabs/databend/pull/4629))
- **databend-query(processor): support complete executor** by [@zhang2014](https://github.com/zhang2014), ([#4639](https://github.com/datafuselabs/databend/pull/4639))
- **databend-query: support logical view** by [@Veeupup](https://github.com/Veeupup), ([#4628](https://github.com/datafuselabs/databend/pull/4628))
- **databend-query: support information_schema database** by [@Veeupup](https://github.com/Veeupup), ([#4672](https://github.com/datafuselabs/databend/pull/4672))
- **\*: refactor type deserialization** by [@sundy-li](https://github.com/sundy-li), ([#4634](https://github.com/datafuselabs/databend/pull/4634))

## Improvement

- **databend-query: hide table opt `SNAPSHOT_LOC` in `show create`** by [@dantengsky](https://github.com/dantengsky), ([#4677](https://github.com/datafuselabs/databend/pull/4677))
- **\*: refactor User/Role identity** by [@Junnplus](https://github.com/Junnplus), ([#4644](https://github.com/datafuselabs/databend/pull/4644))
- **databend-query: support show full tables** by [@TCeason](https://github.com/TCeason), ([#4702](https://github.com/datafuselabs/databend/pull/4702))

## Build/Test/CI

- **link with mold in build-tool** by [@everpcpc](https://github.com/everpcpc), ([#4681](https://github.com/datafuselabs/databend/pull/4681))

## Bug fixes

- **databend-query: prohibit using reserved table option in create table statement.** by [@dantengsky](https://github.com/dantengsky), ([#4632](https://github.com/datafuselabs/databend/pull/4632))
- **bump to OpenDAL v0.4 to fix copy into don't support special filename** by [@Xuanwo](https://github.com/Xuanwo), ([#4678](https://github.com/datafuselabs/databend/pull/4678))

## Tips

Let's learn a weekly tip from Databend.

### Analyzing Nginx Logs with Databend and Vector

Systems are producing all kinds metrics and logs time by time, do you want to gather them and analyze the logs in real time?

Databend provides [integration with Vector](https://databend.rs/doc/integrations/vector), easy to do it now!

You can use Databend to analyze Nginx access logs in just four steps:

1. Deploy Databend, Create a Database and a Table for Nginx logs, Create a User for Vector Auth
2. Install and Configure Nginx
3. Install and Configure Vector, Run it
4. Generate Nginx logs and Analyze them in Databend

To learn more about how to implement it, check out [Analyzing Nginx Logs with Databend and Vector](https://databend.rs/doc/learn/analyze-nginx-logs-with-databend-and-vector#11-deploy-databend).

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.7.10-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.10-nightly)
- [v0.7.9-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.9-nightly)
- [v0.7.8-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.8-nightly)
- [v0.7.7-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.7-nightly)
- [v0.7.6-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.6-nightly)
- [v0.7.5-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.5-nightly)
- [v0.7.4-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.4-nightly)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://datafusecloud.slack.com/join/shared_invite/zt-nojrc9up-50IRla1Y1h56rqwCTkkDJA)
