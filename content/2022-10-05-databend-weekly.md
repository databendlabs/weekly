+++
title = "This week in Databend #62"
date = 2022-10-05
slug = "2022-10-05-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is a powerful cloud data warehouse. Built for elasticity and efficiency. Free and open. Also available in the cloud: <https://app.databend.com> .

## What's Changed

Below is a list of some major changes that we don't want you to miss.

### Exciting New Features :sparkles:

**meta**

- add snapshot_id codec support ([#8005](https://github.com/datafuselabs/databend/pull/8005))

**planner**

- support update ast and planner ([#7925](https://github.com/datafuselabs/databend/pull/7925))

**query**

- jsonb parser optimize ([#7947](https://github.com/datafuselabs/databend/pull/7947))
- impl externalLocation for create table ([#7789](https://github.com/datafuselabs/databend/pull/7789))
- use `common_jsonb::compare` to compare variants ([#8027](https://github.com/datafuselabs/databend/pull/8027))

**storage**

- accept `SESSION_TOKEN` for AWS temporary credentials ([#7946](https://github.com/datafuselabs/databend/pull/7946))

**cluster**

- experimental distributed eval index ([#7867](https://github.com/datafuselabs/databend/pull/7867))

**new expression**

- migrate `retention` to v2 ([#7952](https://github.com/datafuselabs/databend/pull/7952))
- support constructing array and CAST(... AS VARIANT) ([#7781](https://github.com/datafuselabs/databend/pull/7781))

### Code Refactor :tada:

**settings**

- add prefix "format_" for format related settings ([#7960](https://github.com/datafuselabs/databend/pull/7960))

**new expression**

- reorder comparision funciton priority ([#7991](https://github.com/datafuselabs/databend/pull/7991))

**unit tests**

- use goldenfile in tests on system tables ([#7978](https://github.com/datafuselabs/databend/pull/7978) & [#7982](https://github.com/datafuselabs/databend/pull/7982))

### Thoughtful Bug Fix :wrench:

**legacy parser**

- use unicode_segmentation to truncate `INSERT` statement ([#8011](https://github.com/datafuselabs/databend/pull/8011))

**planner**

- find smallest column for pruning unused columns ([#7955](https://github.com/datafuselabs/databend/pull/7955) & [#7962](https://github.com/datafuselabs/databend/pull/7962)
- union needs more than one coercion type ([#8007](https://github.com/datafuselabs/databend/pull/8007))

**processor**

- try fix cannot kill optimize table ([#7959](https://github.com/datafuselabs/databend/pull/7959))
- try fix cannot kill drop table ([#7963](https://github.com/datafuselabs/databend/pull/7963))

**storage**

- shrink min max index ([#7958](https://github.com/datafuselabs/databend/pull/7958))

**new expression**

- fix the bug in logic expression `or` and add test cases ([#7966](https://github.com/datafuselabs/databend/pull/7966))

## News

Let's take a look at what's new at Datafuse Labs & Databend each week.

**Better Index in Databend**

In the past, Databend used a Bloom Filter (Bitmap Index) to check if a key was exists. Databend has enabled Bloom Index at the block level ([#6639](https://github.com/datafuselabs/databend/pull/6639)) and delivered an 8x read performance improvement in certain scenarios (`index / data ~= 10%`). Due to the implementation policy, it can take up very large amounts of storage space and has poor performance when it comes to point queries.

Now, Databend is making a number of improvements to enhance the insert and read capabilities of large data sets. Some of this work revolves around the index.

We introduced the [Xor Fliter](https://arxiv.org/pdf/2201.01174.pdf) to replace the Bloom Filter ([#7870](https://github.com/datafuselabs/databend/pull/7870)), which in some scenarios gives about twice the performance improvement and requires very little data to be scanned. Recent work has also included distributed index pruning ([#7867](https://github.com/datafuselabs/databend/pull/7870)) and local parallel execution of bloom index pruning ([#7893](https://github.com/datafuselabs/databend/pull/7870)) , which we believe will further improve cpu and network utilisation and hence performance.

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.8.54-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.54-nightly)
- [v0.8.55-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.55-nightly)
- [v0.8.56-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.56-nightly)
- [v0.8.57-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.57-nightly)
- [v0.8.58-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.58-nightly)
- [v0.8.59-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.59-nightly)
- [v0.8.60-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.60-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) |[<img alt="ariesdevil" src="https://avatars.githubusercontent.com/u/7812909?v=4&s=117" width="117">](https://github.com/ariesdevil) |[<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="Chasen-Zhang" src="https://avatars.githubusercontent.com/u/15354455?v=4&s=117" width="117">](https://github.com/Chasen-Zhang) |[<img alt="ClSlaid" src="https://avatars.githubusercontent.com/u/44747719?v=4&s=117" width="117">](https://github.com/ClSlaid) |
:---: |:---: |:---: |:---: |:---: |:---: |
[andylokandy](https://github.com/andylokandy) |[ariesdevil](https://github.com/ariesdevil) |[b41sh](https://github.com/b41sh) |[BohuTANG](https://github.com/BohuTANG) |[Chasen-Zhang](https://github.com/Chasen-Zhang) |[ClSlaid](https://github.com/ClSlaid) |

[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |[<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |[<img alt="junaire" src="https://avatars.githubusercontent.com/u/77525145?v=4&s=117" width="117">](https://github.com/junaire) |[<img alt="leiysky" src="https://avatars.githubusercontent.com/u/22445410?v=4&s=117" width="117">](https://github.com/leiysky) |[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |[<img alt="PsiACE" src="https://avatars.githubusercontent.com/u/36896360?v=4&s=117" width="117">](https://github.com/PsiACE) |
:---: |:---: |:---: |:---: |:---: |:---: |
[dantengsky](https://github.com/dantengsky) |[drmingdrmer](https://github.com/drmingdrmer) |[junaire](https://github.com/junaire) |[leiysky](https://github.com/leiysky) |[mergify[bot]](https://github.com/apps/mergify) |[PsiACE](https://github.com/PsiACE) |

[<img alt="RinChanNOWWW" src="https://avatars.githubusercontent.com/u/33975039?v=4&s=117" width="117">](https://github.com/RinChanNOWWW) |[<img alt="sandflee" src="https://avatars.githubusercontent.com/u/5102100?v=4&s=117" width="117">](https://github.com/sandflee) |[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |[<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |[<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) |
:---: |:---: |:---: |:---: |:---: |:---: |
[RinChanNOWWW](https://github.com/RinChanNOWWW) |[sandflee](https://github.com/sandflee) |[sundy-li](https://github.com/sundy-li) |[Xuanwo](https://github.com/Xuanwo) |[xudong963](https://github.com/xudong963) |[youngsofun](https://github.com/youngsofun) |

[<img alt="zenria" src="https://avatars.githubusercontent.com/u/1299045?v=4&s=117" width="117">](https://github.com/zenria) |[<img alt="zhang2014" src="https://avatars.githubusercontent.com/u/8087042?v=4&s=117" width="117">](https://github.com/zhang2014) |[<img alt="zhyass" src="https://avatars.githubusercontent.com/u/34016424?v=4&s=117" width="117">](https://github.com/zhyass) | | | |
:---: |:---: |:---: |:---: |:---: |:---: |
[zenria](https://github.com/zenria) |[zhang2014](https://github.com/zhang2014) |[zhyass](https://github.com/zhyass) | | | |

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
- [I'm feeling lucky](https://link.databend.rs/i-m-feeling-lucky) (Pick up a good first issue now!)
