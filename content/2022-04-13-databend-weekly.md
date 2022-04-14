+++
title = "This week in Databend #37"
date = 2022-04-13
slug = "2022-04-13-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **databend-query(expressions): add try_cast function** by [@sundy-li](https://github.com/sundy-li), ([#4794](https://github.com/datafuselabs/databend/pull/4794))
- **common-functions: support cast variant to other data types** by [@b41sh](https://github.com/b41sh), ([#4787](https://github.com/datafuselabs/databend/pull/4787))
- **common-functions: support `REGEXP_SUBSTR` function** by [@nange](https://github.com/nange), ([#4771](https://github.com/datafuselabs/databend/pull/4771))
- **databend-query: support show table status** by [@TCeason](https://github.com/TCeason), ([#4757](https://github.com/datafuselabs/databend/pull/4757))
- **common-functions: support semi-structured function `GET/GET_IGNORE_CASE/GET_PATH`** by [@b41sh](https://github.com/b41sh), ([#4684](https://github.com/datafuselabs/databend/pull/4684))

## Improvement

- **databend-query: pass parameter from query to functions** by [@Veeupup](https://github.com/Veeupup), ([#4805](https://github.com/datafuselabs/databend/pull/4805))
- **databend-query(mysql_handler): add more federated command for some old drivers** by [@BohuTANG](https://github.com/BohuTANG), ([#4809](https://github.com/datafuselabs/databend/pull/4809))
- **databend-query(compact): add transform compact** by [@sundy-li](https://github.com/sundy-li), ([#4784](https://github.com/datafuselabs/databend/pull/4784))
- **databend-query(storage): show fuse engine table status** by [@dantengsky](https://github.com/dantengsky), ([#4786](https://github.com/datafuselabs/databend/pull/4786))
- **databend-query(mysql_handler): sqlalchemy execute work** by [@BohuTANG](https://github.com/BohuTANG), ([#4774](https://github.com/datafuselabs/databend/pull/4774))

## Performance Improvement

- **databend-query: try to avoid string copy in insert-values again** by [@ygf11](https://github.com/ygf11), ([#4730](https://github.com/datafuselabs/databend/pull/4730))

## Bug fixes

- **databend-query(fuse): limit push down respect orders** by [@sundy-li](https://github.com/sundy-li), ([#4818](https://github.com/datafuselabs/databend/pull/4818))
- **common-meta(state_machine): rename table should keep table_id nochange** by [@ariesdevil](https://github.com/ariesdevil), ([#4838](https://github.com/datafuselabs/databend/pull/4838))
- **common-building:  try persist credits at build time** by [@PsiACE](https://github.com/PsiACE), ([#4791](https://github.com/datafuselabs/databend/pull/4791))
- **databend-query: `select *` shouldn't return results** by [@xudong963](https://github.com/xudong963), ([#4796](https://github.com/datafuselabs/databend/pull/4796))

## Tips

Let's learn a weekly tip from Databend.

### Databend Performance Data Collection and Visualization

Late last week, we proudly announced the <https://perf.databend.rs/>. This is a website for monitoring the performance of Databend's nightly releases.

All benchmarks are currently running on an Amazon EC2 server of size `c5n.9xlarge`, with 36 vCPUs and 96 GiB of memory, and Intel Xeon Platinum 8000 processors.

![Databend Performance Data](https://weekly.databend.rs/images/databend-performance-data.png)

The current benchmarks consists of:
- A set of numerical computation SQLs for evaluating the performance of in-memory vectorization engines, based on Databend's numbers table function providing ten billions data.
- A common set of SQLs for air traffic analysis, based on the publicly available OnTime dataset from the U.S. Department of Transportation, 60.8 GB of CSV, 202687654 records.

To view the source code, please visit [GitHub - datafuselabs/databend-perf](https://github.com/datafuselabs/databend-perf):

- [collector](https://github.com/datafuselabs/databend-perf/tree/main/collector): stores daily performance data for each nightly release.
- [benchmarks](https://github.com/datafuselabs/databend-perf/tree/main/benchmarks): contains the benchmark suite defined by the yaml format.

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.7.17-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.17-nightly)
- [v0.7.16-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.16-nightly)
- [v0.7.15-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.15-nightly)
- [v0.7.14-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.14-nightly)
- [v0.7.13-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.13-nightly)
- [v0.7.12-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.12-nightly)
- [v0.7.11-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.11-nightly)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://datafusecloud.slack.com/join/shared_invite/zt-nojrc9up-50IRla1Y1h56rqwCTkkDJA)
