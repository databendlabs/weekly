+++
title = "This week in Databend #23"
date = 2022-01-05
slug = "2022-01-05-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) aimed to be an open source **elastic** and **reliable** cloud warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **add proxy mode access check** by [@BohuTANG](https://github.com/BohuTANG). ([#3776](https://github.com/datafuselabs/databend/pull/3776))
- **add basic tokio-console support** by [@PsiACE](https://github.com/PsiACE). ([#3739](https://github.com/datafuselabs/databend/pull/3739))
- **add generate command for bendctl** by [@kevinw66](https://github.com/kevinw66). ([#3732](https://github.com/datafuselabs/databend/pull/3732))

## Improvement

- **add more metrics to query_log** by [@dantengsky](https://github.com/dantengsky). ([#3773](https://github.com/datafuselabs/databend/pull/3773))
- **make parquet reader works with only one stream reader** by [@dantengsky](https://github.com/dantengsky). ([#3757](https://github.com/datafuselabs/databend/pull/3757))
- **fuse metadata cache** by [@Veeupup](https://github.com/Veeupup). ([#3761](https://github.com/datafuselabs/databend/pull/3761))
- **UDF refinement** by [@lianghanzhen](https://github.com/lianghanzhen). ([#3743](https://github.com/datafuselabs/databend/pull/3743))
- **cli up improvement** by [@sundy-li](https://github.com/sundy-li/). ([#3699](https://github.com/datafuselabs/databend/pull/3699))
- **replace arrow flight with gRPC** by [@ariesdevil](https://github.com/ariesdevil/). ([#3606](https://github.com/datafuselabs/databend/pull/3606))
- **improve origin array builder & make nullable/no-nullable builder support** by [@Veeupup](https://github.com/Veeupup). ([#3700](https://github.com/datafuselabs/databend/pull/3700))

## Performance Improvement

- **improve performance of arithmetic functions** by [@zhyass](https://github.com/zhyass) ([#3697](https://github.com/datafuselabs/databend/pull/3697))
- **table read performance tweaking** by [@dantengsky](https://github.com/dantengsky). ([#3718](https://github.com/datafuselabs/databend/pull/3718))

### Bug fixes

- **support as case-insensitive when create udf** by [@kevinw66](https://github.com/kevinw66). ([#3703](https://github.com/datafuselabs/databend/pull/3703))

## Tips

Let's learn a weekly tip from Databend.

### Tracing in Databend

Databend using Rust's tracing ecosystem [tokio-tracing](https://github.com/tokio-rs/tracing) to do log and profile.

**Distributed tracing with Jaeger**

[Jaeger](https://github.com/jaegertracing/jaeger), is a distributed tracing platform. It can be used for monitoring microservices-based distributed systems.

- 4 steps to enable Jaeger monitor

  - build databend-query: `cargo build --bin databend-query`
  - run with `DEBUG` log level: `LOG_LEVEL=DEBUG ./databend-query`
  - start jaeger: `docker run -d -p6831:6831/udp -p6832:6832/udp -p16686:16686 jaegertracing/all-in-one:latest`
  - Open http://127.0.0.1:16686/

- Jaeger Tracing Show

![jaeger-tracing-show](../images/jaeger-tracing-show.png)

- Read More: https://databend.rs/dev/development/tracing#distributed-tracing-with-jaeger

**Explore and diagnose with tokio-console**

[tokio-console](https://github.com/tokio-rs/console) is a diagnostics and debugging tool for asynchronous Rust programs.

- 3 steps to enable console subscriber

  - build databend-query with rustflags & features: `RUSTFLAGS="--cfg tokio_unstable" cargo build --bin databend-query --features tokio-console`
  - run with the log level of `TRACE`: `LOG_LEVEL=TRACE databend-query`
  - run `tokio-console`

- Run tokio-console to explore databend-query

![query-console](../images/query-console.png)

- Read More: https://databend.rs/dev/development/tracing#explore-and-diagnose-with-tokio-console

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.6.25-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.25-nightly)
- [v0.6.24-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.24-nightly)
- [v0.6.23-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.23-nightly)
- [v0.6.22-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.22-nightly)
- [v0.6.21-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.21-nightly)
- [v0.6.20-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.20-nightly)
- [v0.6.19-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.19-nightly)

## Ecosystem/Upstream

From open source, for open source. Our team is also committed to contributing to the Rust ecosystem and upstream dependencies.

- [arrow2 #73: add cargo check to benchmarks](https://github.com/jorgecarleitao/arrow2/pull/730) by [@sundy-li](https://github.com/sundy-li/).

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://datafusecloud.slack.com/join/shared_invite/zt-nojrc9up-50IRla1Y1h56rqwCTkkDJA)
