+++
title = "This week in Databend #38"
date = 2022-04-20
slug = "2022-04-20-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- **databend-query(parser): add select statement** by [@andylokandy](https://github.com/andylokandy), ([#4941](https://github.com/datafuselabs/databend/pull/4941))
- **databend-query: support mysqldump dump schema** by [@BohuTANG](https://github.com/BohuTANG), ([#4972](https://github.com/datafuselabs/databend/pull/4972))
- **databend-query: refine new planner framework**: use trait object to represent plans to make it more extensible. by [@leiysky](https://github.com/leiysky), ([#4895](https://github.com/datafuselabs/databend/pull/4895))
- **databend-query: create user if not exists on JWT authenticate** by [@Junnplus](https://github.com/Junnplus), ([#4924](https://github.com/datafuselabs/databend/pull/4924))
- **databend-meta: support watch api** by [@lichuang](https://github.com/lichuang), ([#4779](https://github.com/datafuselabs/databend/pull/4779))
- **databend-query(parser): support keyword `DATABASE` synonym `SCHEMA`** by [@TCeason](https://github.com/TCeason), ([#4855](https://github.com/datafuselabs/databend/pull/4855))

## Improvement

- **databend-query: reconstruct type: `date/datetime` to simplify date type** by [@Veeupup](https://github.com/Veeupup), ([#4921](https://github.com/datafuselabs/databend/pull/4921))
- **common-functions: refine the functions name from `xY` to `x_y`** by [@BohuTANG](https://github.com/BohuTANG), ([#4915](https://github.com/datafuselabs/databend/pull/4915), [#4906](https://github.com/datafuselabs/databend/pull/4906) and [#4884](https://github.com/datafuselabs/databend/pull/4884))
- **common-meta: metasrv has to be compatible with 20220413-34e89c9** by [@drmingdrmer](https://github.com/drmingdrmer ), ([#4901](https://github.com/datafuselabs/databend/pull/4901))
- **databend-query: compatible with mysql insert and select** by [@TCeason](https://github.com/TCeason), ([#4883](https://github.com/datafuselabs/databend/pull/4883))
- **common-functions: replace `FactoryCreator` with `FactoryCreatorWithTypes`` for functions** by [@zhyass](https://github.com/zhyass), ([#4688](https://github.com/datafuselabs/databend/pull/4688))

## Build / Testing / CI

- **tests: add native mysql client uexpect** by [@sundy-li](https://github.com/sundy-li), ([#4956](https://github.com/datafuselabs/databend/pull/4956))

## Performance Improvement

- **databend-query(processor): replace global mutex with atomic** by [@zhang2014](https://github.com/zhang2014), ([#4905](https://github.com/datafuselabs/databend/pull/4905))

## Bug fixes

- **common-functions(cast): fix the behavior of null to boolean** by [@sundy-li](https://github.com/sundy-li), ([#4911](https://github.com/datafuselabs/databend/pull/4911))
- **databend-query(group_by): fix group by with negative value** by [@zhang2014](https://github.com/zhang2014), ([#4902](https://github.com/datafuselabs/databend/pull/4902))
- **databend-query(transform_limit): fixes limit and offset with one block** by [@zhang2014](https://github.com/zhang2014), ([#4907](https://github.com/datafuselabs/databend/pull/4907))
- **databend-query(interpreters): fix empty query** by [@cadl](https://github.com/cadl), ([#4894](https://github.com/datafuselabs/databend/pull/4894))
- **\*: fix show grants from inherited role** by [@Junnplus](https://github.com/Junnplus), ([#4873](https://github.com/datafuselabs/databend/pull/4873))

## Tips

Let's learn a weekly tip from Databend.

### Visualization Databend data in Jupyter Notebook

The Jupyter Notebook is the original web application for creating and sharing computational documents. It offers a simple, streamlined, document-centric experience.

Recently, we have worked on improving Databend's compatibility with the MySQL/Clickhouse ecosystem to provide a better experience. Thanks to improved support for sqlalchemy, we can now interact with data in Databend in Jupyter Notebook.

To experience it, there are only three steps:

- Create a Databend User, see also [databend.rs - CREATE USER](https://databend.rs/doc/reference/sql/ddl/user/user-create-user).
- Install Some Python Package: `jupyterlab`, `notebook`, `sqlalchemy` and `pandas`.
- Edit/Download [databend.ipynb](https://datafuse-1253727613.cos.ap-hongkong.myqcloud.com/integration/databend.ipynb), start the notebook.

![Databend with Jupyter Notebook](https://datafuse-1253727613.cos.ap-hongkong.myqcloud.com/integration/integration-gui-jupyter.png)

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.7.24-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.24-nightly)
- [v0.7.23-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.23-nightly)
- [v0.7.22-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.22-nightly)
- [v0.7.21-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.21-nightly)
- [v0.7.20-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.20-nightly)
- [v0.7.19-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.19-nightly)
- [v0.7.18-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.18-nightly)

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://datafusecloud.slack.com/join/shared_invite/zt-nojrc9up-50IRla1Y1h56rqwCTkkDJA)
