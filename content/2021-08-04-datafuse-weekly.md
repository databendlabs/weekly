+++
title = "This week in Datafuse #1"
date = 2021-08-04
slug = "2021-08-04-datafuse-weekly"
+++

Datafuse, a Modern Real-Time Data Processing & Analytics DBMS with Cloud-Native Architecture, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don’t want you to miss.

- **Datafuse CLI**: All-in-one tool for setting up, managing with Datafuse. by [@BohuTANG](https://github.com/BohuTANG) ([#950](https://github.com/datafuselabs/datafuse/pull/950)).
- **arrow -> arrow2**: Improve performance in some scenarios, especially aggregate functions, [see benchmark](https://github.com/datafuselabs/datafuse/pull/1239#issuecomment-890861288). by [@sundy-li](https://github.com/sundy-li) ([#1239](https://github.com/datafuselabs/datafuse/pull/1239)).
- **catalog as meta-store client & TableMetaCache**. by [@dantengsky](https://github.com/dantengsky) ([#1212](https://github.com/datafuselabs/datafuse/pull/1212))
- **disk backed meta store** under dev. by [@drmingdrmer](https://github.com/drmingdrmer) ([#1212](https://github.com/datafuselabs/datafuse/pull/1248))
- **migrate to rust 2021**: Powered by `nightly-2021-08-03`, thanks to the Rust team. by [@PsiACE](https://github.com/PsiACE) ([#1159](https://github.com/datafuselabs/datafuse/pull/1159)).

## Changlogs

You can check the changelogs of Datafuse nightly to learn about our latest developments.

- [v0.4.69-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.69-nightly)
- [v0.4.68-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.68-nightly)
- [v0.4.67-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.67-nightly)
- [v0.4.66-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.66-nightly)
- [v0.4.65-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.65-nightly)
- [v0.4.64-nightly](https://github.com/datafuselabs/datafuse/releases/tag/v0.4.64-nightly)

## Ecosystem/Upstream

From open source, for open source. The Datafuse team is also committed to contributing to the Rust ecosystem and upstream dependencies.

### In Progress 

- [arrow2 #246: Sort improve](https://github.com/jorgecarleitao/arrow2/pull/246). by [@sundy-li](https://github.com/sundy-li)
- [msql-srv #22: Bump deps](https://github.com/jonhoo/msql-srv/pull/22). by [@PsiACE](https://github.com/PsiACE/)

## Meet Us

You are welcome to join the [Datafuse Community](https://github.com/datafuselabs/). We look forward to you being one of our contributors or trialers.

- [GitHub Discussions](https://github.com/datafuselabs/datafuse/discussions)
- [Slack Channel](https://datafusecloud.slack.com/join/shared_invite/zt-nojrc9up-50IRla1Y1h56rqwCTkkDJA)
