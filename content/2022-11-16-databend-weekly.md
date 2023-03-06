+++
title = "This week in Databend #68"
date = 2022-11-16
slug = "2022-11-16-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is a powerful cloud data warehouse. Built for elasticity and efficiency. Free and open. Also available in the cloud: <https://app.databend.com> .

## What's Changed

Below is a list of some major changes that we don't want you to miss.

### Exciting New Features :sparkles:

**metrics**

- add metrics for query detail ([#8800](https://github.com/datafuselabs/databend/pull/8800))

**multiple catalog**

- multiple catalog config ([#8743](https://github.com/datafuselabs/databend/pull/8743))

**query**

- adjust max io requests when read block data to avoid oom ([#8726](https://github.com/datafuselabs/databend/pull/8726))
- change `PrecommitBlock` serde from `serde_json` to `bincode` ([#8726](https://github.com/datafuselabs/databend/pull/8726))
- support parallel final aggregator, 4X faster! ([#8577](https://github.com/datafuselabs/databend/pull/8577))
- parallel merge for distribute query ([#8811](https://github.com/datafuselabs/databend/pull/8811))

**storage**

- shuffle segments during distributed pruning ([#8793](https://github.com/datafuselabs/databend/pull/8793))
- add shuffle policy for Partitions ([#8814](https://github.com/datafuselabs/databend/pull/8814))

**new expression**

- add calc domain for comparison ([#8754](https://github.com/datafuselabs/databend/pull/8754))

### Code Refactor :tada:

**io**

- replace `NestedCheckpointReader` with `Cursor` ([#8716](https://github.com/datafuselabs/databend/pull/8716))

**handler**

- use `FieldEncoder` to encode data ([#8733](https://github.com/datafuselabs/databend/pull/8733))

**format**

- refactor with `FieldEncoder` ([#8778](https://github.com/datafuselabs/databend/pull/8778))

**query**

- unified hashtable interface ([#8681](https://github.com/datafuselabs/databend/pull/8681))

**storage**

- compact block ([#8679](https://github.com/datafuselabs/databend/pull/8679))

**new expression**

- refine domain ([#8755](https://github.com/datafuselabs/databend/pull/8755))
- allow sparse column id in chunk ([#8789](https://github.com/datafuselabs/databend/pull/8789))

### Thoughtful Bug Fix :wrench:

**handler**

- correct databend types to mysql types ([#8745](https://github.com/datafuselabs/databend/pull/8745))

**functions**

- `l_col like r_col` will generate a hashmap based on `r_col`, if `r_col` is huge, it will be oom kill ([#8737](https://github.com/datafuselabs/databend/pull/8737))

## News

Let's take a look at what's new at Datafuse Labs & Databend each week.

#### Shuffle Policy for Partitions

For cache affinity, we consider some strategies when re-shuffle partitions in `plan_fragemnt.rs::redistribute_source_fragment`, default kind is `Seq`.

```
pub enum PartitionsShuffleKind {
    // Bind the Partition to executor one by one with order.
    Seq,
    // Bind the Partition to executor by partition.hash()%executor_nums order.
    Mod,
    // Bind the Partition to executor by partition.rand() order.
    Rand,
}
```

**Learn More**

- [PR | add shuffle policy for Partitions](https://github.com/datafuselabs/databend/pull/8814)

#### Databend x Rust China Hackathon 2022

The first *Rust China Hackathon Online* is here! The theme of this year's Hackathon is **Rust for Fun** and we look forward to working with you to unleash the possibilities of innovation with Rust.

As a co-organiser of this year's hackathon, Databend is sponsoring an enterprise track where participants can explore the appeal of cloud-native data warehouses by creating work around Databend components or the Databend ecosystem.

**Learn More**

- [GitHub -  datafuselabs / hackathon2022](https://github.com/datafuselabs/hackathon2022)

## Issues

Meet issues you may be interested in and try to solve it.

#### Switch to nextest in CI

`cargo-nextest` is a next-generation test runner for Rust projects.

We have noticed that it is very much faster than `cargo test` on many projects. However, there are still some challenges in applying this to Databend. For example, for different types of tests, the number of threads has to be adjusted to ensure that the tests are performed quickly and correctly. Also, some of the tests may need to be rewritten to get better results.

[Issue 4376: switch to nexttest in ci](https://github.com/datafuselabs/databend/issues/4376)

If you find it interesting, try to solve it or participate in discussions and PR reviews. Or you can click on <https://link.databend.rs/i-m-feeling-lucky> to pick up a good first issue, good luck!

## Changelogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.8.115-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.115-nightly)
- [v0.8.114-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.114-nightly)
- [v0.8.113-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.113-nightly)
- [v0.8.112-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.112-nightly)
- [v0.8.111-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.111-nightly)
- [v0.8.110-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.110-nightly)
- [v0.8.109-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.109-nightly)
- [v0.8.108-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.108-nightly)
- [v0.8.107-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.107-nightly)
- [v0.8.106-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.106-nightly)


## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="ClSlaid" src="https://avatars.githubusercontent.com/u/44747719?v=4&s=117" width="117">](https://github.com/ClSlaid) |[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |[<img alt="dependabot[bot]" src="https://avatars.githubusercontent.com/in/29110?v=4&s=117" width="117">](https://github.com/apps/dependabot) |[<img alt="everpcpc" src="https://avatars.githubusercontent.com/u/1808802?v=4&s=117" width="117">](https://github.com/everpcpc) |
:---: |:---: |:---: |:---: |:---: |:---: |
[andylokandy](https://github.com/andylokandy) |[BohuTANG](https://github.com/BohuTANG) |[ClSlaid](https://github.com/ClSlaid) |[dantengsky](https://github.com/dantengsky) |[dependabot[bot]](https://github.com/apps/dependabot) |[everpcpc](https://github.com/everpcpc) |

[<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |[<img alt="RinChanNOWWW" src="https://avatars.githubusercontent.com/u/33975039?v=4&s=117" width="117">](https://github.com/RinChanNOWWW) |[<img alt="sandflee" src="https://avatars.githubusercontent.com/u/5102100?v=4&s=117" width="117">](https://github.com/sandflee) |[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |
:---: |:---: |:---: |:---: |:---: |:---: |
[lichuang](https://github.com/lichuang) |[mergify[bot]](https://github.com/apps/mergify) |[RinChanNOWWW](https://github.com/RinChanNOWWW) |[sandflee](https://github.com/sandflee) |[soyeric128](https://github.com/soyeric128) |[sundy-li](https://github.com/sundy-li) |

[<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) |[<img alt="wubx" src="https://avatars.githubusercontent.com/u/320680?v=4&s=117" width="117">](https://github.com/wubx) |[<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |[<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) |[<img alt="zhang2014" src="https://avatars.githubusercontent.com/u/8087042?v=4&s=117" width="117">](https://github.com/zhang2014) |
:---: |:---: |:---: |:---: |:---: |:---: |
[TCeason](https://github.com/TCeason) |[wubx](https://github.com/wubx) |[Xuanwo](https://github.com/Xuanwo) |[xudong963](https://github.com/xudong963) |[youngsofun](https://github.com/youngsofun) |[zhang2014](https://github.com/zhang2014) |

[<img alt="ZhiHanZ" src="https://avatars.githubusercontent.com/u/25170437?v=4&s=117" width="117">](https://github.com/ZhiHanZ) |[<img alt="zhyass" src="https://avatars.githubusercontent.com/u/34016424?v=4&s=117" width="117">](https://github.com/zhyass) | | | | |
:---: |:---: |:---: |:---: |:---: |:---: |
[ZhiHanZ](https://github.com/ZhiHanZ) |[zhyass](https://github.com/zhyass) | | | | |

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Weekly](https://weekly.databend.rs/) (A weekly newsletter about Databend)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions) (Feature/Bug reports, Contributions)
- [Twitter](https://twitter.com/Datafuse_Labs) (Get the news fast)
- [Slack Channel](https://link.databend.rs/join-slack) (For live discussion with the Community)
