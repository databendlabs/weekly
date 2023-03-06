+++
title = "This week in Databend #34"
date = 2022-03-23
slug = "2022-03-23-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **databend-query: support Semi-structured variant data type** by [@b41sh](https://github.com/b41sh), ([#4348](https://github.com/datafuselabs/databend/pull/4348))
- **databend-query: support stage list & stage streaming upload** by [@sundy-li](https://github.com/sundy-li), ([#4472](https://github.com/datafuselabs/databend/pull/4472) & [#4477](https://github.com/datafuselabs/databend/pull/4477))
- **databend-query: integrate fuse table with new processor** by [@zhang2014](https://github.com/zhang2014), ([#4444](https://github.com/datafuselabs/databend/pull/4444))
- **databend-query: add support for alter table rename statement ** by [@kevinw66](https://github.com/kevinw66), ([#4532](https://github.com/datafuselabs/databend/pull/4532))
- **\*: add bootstrap_tenant procedure for tenant management** by [@Junnplus](https://github.com/Junnplus), ([#4530](https://github.com/datafuselabs/databend/pull/4530))
- **http handler: support server-side-session** by [@youngsofun](https://github.com/youngsofun), ([#4538](https://github.com/datafuselabs/databend/pull/4538))
- **metactl: dump data from a running metasrv** by [@light4](https://github.com/light4), ([#4473](https://github.com/datafuselabs/databend/pull/4473))
- **common-functions: support `PARSE_JSON` / `TRY_PARSE_JSON` function** by [@b41sh](https://github.com/b41sh), ([#4534](https://github.com/datafuselabs/databend/pull/4534))

## Improvement

- **common-functions: simplify function creator && adaptor** by [@sundy-li](https://github.com/sundy-li), ([#4485](https://github.com/datafuselabs/databend/pull/4485))
- **common-management: add escape for management key** by [@BlackSmith96](https://github.com/BlackSmith96), ([#4363](https://github.com/datafuselabs/databend/pull/4363))
- **databend-query: refine count optimization** by [@dantengsky](https://github.com/dantengsky), ([#4508](https://github.com/datafuselabs/databend/pull/4508))
- **\*: adapt reqsign and separate IO runtime** by [@Xuanwo](https://github.com/Xuanwo), ([#4481](https://github.com/datafuselabs/databend/pull/4481))

## Performance Improvement

- **datavalues: Simd selected for BooleanColumn** by [@LiuYuHui](https://github.com/LiuYuHui), ([#4484](https://github.com/datafuselabs/databend/pull/4484))
- **databend-query: enable new processor by default(standalone mode)** by [@zhang2014](https://github.com/zhang2014), ([#4486](https://github.com/datafuselabs/databend/pull/4486))

## Build/Test/CI

- **add musl support & release musl compiled binaries** by [@Xuanwo](https://github.com/Xuanwo) & [@ZhiHanZ](https://github.com/ZhiHanZ), ([#4520](https://github.com/datafuselabs/databend/pull/4520) & [#4535](https://github.com/datafuselabs/databend/pull/4535))
- **drop databend-benchmark and old perf tool, add benchmark solution with hyperfine** by [@PsiACE](https://github.com/PsiACE), ([#4545](https://github.com/datafuselabs/databend/pull/4545))

## Bug fixes

- **databend-query: fix groupby single string in new processor** by [@sundy-li](https://github.com/sundy-li), ([#4475](https://github.com/datafuselabs/databend/pull/4475))
- **clickhouse handler: to_clickhouse_block always convert to full column if constant** by [@sundy-li](https://github.com/sundy-li), ([#4514](https://github.com/datafuselabs/databend/pull/4514))

## Tips

Let's learn a weekly tip from Databend.

### How to Benchmark with Hyperfine

Databend recommends using hyperfine to perform benchmarking via the ClickHouse/MySQL client. With a simple script, we can run benchmark easily:

```shell
#!/bin/bash

WARMUP=3
RUN=10

export script="hyperfine -w $WARMUP -r $RUN"

script=""
function run() {
        port=$1
        sql=$2
        result=$3
        script="hyperfine -w $WARMUP -r $RUN"
        while read SQL; do
                n="-n \"$SQL\" "
                s="echo \"$SQL\" | mysql -h127.0.0.1 -P$port -uroot -s"
                script="$script '$n' '$s'"
        done <<< $(cat $sql)

        script="$script  --export-markdown $result"
        echo $script | bash -x
}


run "$1" "$2" "$3"
```

For details, please read [databend.rs - How to Benchmark with Hyperfine](https://databend.rs/doc/faq/how-to-benchmark-with-hyperfine)

We've also updated some of Databend's performance, if you're interested in that, check out the following articles:

- [Databend Vectorized Engine Performance](https://databend.rs/doc/performance/local-vector-performance)
- [Databend On Amazon S3 Performance](https://databend.rs/doc/performance/ec2-s3-performance)
- [Databend On Wasabi Performance](https://databend.rs/doc/performance/ec2-wasabi-performance)

## Changelogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.6.100-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.100-nightly)
- [v0.6.99-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.99-nightly)
- [v0.6.98-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.98-nightly)
- [v0.6.97-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.97-nightly)
- [v0.6.96-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.96-nightly)
- [v0.6.95-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.95-nightly)
- [v0.6.94-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.6.94-nightly)

## Ecosystem/Upstream

From open source, for open source. Our team is also committed to contributing to the Rust ecosystem and upstream dependencies.

- [reqsign - Signing API requests without effort](https://github.com/Xuanwo/reqsign): minimal dependencies and support AWS & Azure Storage, by [@Xuanwo](https://github.com/Xuanwo)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
