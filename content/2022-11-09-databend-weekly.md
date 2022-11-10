+++
title = "This week in Databend #67"
date = 2022-11-09
slug = "2022-11-09-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is a powerful cloud data warehouse. Built for elasticity and efficiency. Free and open. Also available in the cloud: <https://app.databend.com> .

## What's Changed

Below is a list of some major changes that we don't want you to miss.

### Exciting New Features :sparkles:

**toolchain**

- upgrade to 1.67 nightly ([#8631](https://github.com/datafuselabs/databend/pull/8631))

**multiple catalog**

- multiple catalog create (planner and catalog manager) ([#8620](https://github.com/datafuselabs/databend/pull/8620))

**compact**

- optimize compact for data load ([#8644](https://github.com/datafuselabs/databend/pull/8644))

**planner**

- optimize left/single join ([#8583](https://github.com/datafuselabs/databend/pull/8583))

**query**

- support copy from xml ([#8404](https://github.com/datafuselabs/databend/pull/8404))
- add collation ([#8610](https://github.com/datafuselabs/databend/pull/8610))
- copy files order by last modified time asc ([#8628](https://github.com/datafuselabs/databend/pull/8628))
- improve sort, 10%~50% faster than the old one ([#8452](https://github.com/datafuselabs/databend/pull/8452))

**new expression**

- add to_xxx() cast functions ([#8599](https://github.com/datafuselabs/databend/pull/8599))
- add inlist expr in new expression ([#8676](https://github.com/datafuselabs/databend/pull/8676))

### Code Refactor :tada:

**format**

- refactor output format with FieldEncoders ([#8700](https://github.com/datafuselabs/databend/pull/8700))

**planner**

- move plan from query/planner to sql/planner ([#8660](https://github.com/datafuselabs/databend/pull/8660))

**query**

- remove sqlparser-rs ([#8670](https://github.com/datafuselabs/databend/pull/8670))
- try move list files to read_partitions ([#8673](https://github.com/datafuselabs/databend/pull/8673))

**storage**

- move and group sub-crates in storages ([#8613](https://github.com/datafuselabs/databend/pull/8613), [#8621](https://github.com/datafuselabs/databend/pull/8621), [#8627](https://github.com/datafuselabs/databend/pull/8627), etc.)
- compact segments, which strictly preserves the order of ingestion ([#8590](https://github.com/datafuselabs/databend/pull/8590))

**new expression**

- migrate deserializations to expression ([#8637](https://github.com/datafuselabs/databend/pull/8637))
- use to_xxx() to evaluate CAST(xxx AS xxx) ([#8637](https://github.com/datafuselabs/databend/pull/8637))

### Build/Testing/CI Infra Changes :electric_plug:

- rust-toolchain nightly 1.67.0 (nightly-2022-11-07) ([#8641](https://github.com/datafuselabs/databend/pull/8641))

### Thoughtful Bug Fix :wrench:

**compatibility**

- problem when using Trino Mysql connector ([#8668](https://github.com/datafuselabs/databend/pull/8668))

**meta**

- emit kv change events after committing a transaction ([#8674](https://github.com/datafuselabs/databend/pull/8674))

**query**

- union's pairs are handled incorrectly ([#8638](https://github.com/datafuselabs/databend/pull/8638))
- max_threads can not determined automatically ([#8707](https://github.com/datafuselabs/databend/pull/8707))

## News

Let's take a look at what's new at Datafuse Labs & Databend each week.

#### Support Copy from XML

After [#8404](https://github.com/datafuselabs/databend/pull/8404) was merged, Databend now offers support for loading data from XML formatted files.

Similar to the use of other formats, in the SQL statement it is only necessary to set the `format` option to `XML` and an example of using the streaming load API is given below.

```sql
curl -sH "insert_sql:insert into test_xml format XML" \
-F "upload=@/tmp/simple_v1.xml" \
-u root: -XPUT "http://localhost:${QUERY_HTTP_HANDLER_PORT}/v1/streaming_load"
```

The content of your XML file needs to match one or more of the following types:

- Column names as attributes and column values as attribute values:

```xml
<row column1="value1" column2="value2" .../>
```

- Column names as tags and column values as the content of these tags: 

```xml
<row>
  <column1>value1</column1>
  <column2>value2</column2>
</row>
```

-  Column names are the name attributes of <field> tags, and values are the contents of these tags:

```xml
<row>
  <field name='column1'>value1</field>
  <field name='column2'>value2</field>
</row>
```

**Learn More**

- [PR | support copy from xml](https://github.com/datafuselabs/databend/pull/8404)

#### Support for Char Collation

After [#8610](https://github.com/datafuselabs/databend/pull/8610) was merged, Databend now supports setting `collation` to select the string encoding to be considered.

By default, `collation` is set to `'binary'`, as Databend stores string columns in binary format by default, which you can change to `'utf-8'` with a statement like the following:

```sql
set collation = 'utf8';
```

This may help you to get the expected results when working with non-English strings.

```sql
statement query TI
select substr('城区主城区其他', 1, 6), length('我爱中国');

----
城区	12


statement ok
set collation = 'utf8';


statement query TI
select substr('城区主城区其他', 1, 6), length('我爱中国');

----
城区主城区其	4
```

**Learn More**

- [PR | add collation](https://github.com/datafuselabs/databend/pull/8610)

## Issues

Meet issues you may be interested in and try to solve it.

#### Enable Xor Filter Index for IN

Databend introduced the [Xor Fliter](https://arxiv.org/pdf/2201.01174.pdf) to replace the Bloom Filter ([#7870](https://github.com/datafuselabs/databend/pull/7870)), which in some scenarios gives about twice the performance improvement and requires very little data to be scanned. 

Initially, we simply added this index for the string columns.Then, in [#7958](https://github.com/datafuselabs/databend/pull/7958), it is enabled for the integer columns.

Now, we want to enable Xor Filter index for `IN` .

```
SELECT * FROM t1 where xx IN ('', '')
```

[Issue 8625: performance: enable xor filter index for IN](https://github.com/datafuselabs/databend/issues/8625)

If you find it interesting, try to solve it or participate in discussions and PR reviews. Or you can click on <https://link.databend.rs/i-m-feeling-lucky> to pick up a good first issue, good luck!

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.8.105-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.105-nightly)
- [v0.8.104-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.104-nightly)
- [v0.8.103-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.103-nightly)
- [v0.8.102-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.102-nightly)
- [v0.8.101-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.101-nightly)
- [v0.8.100-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.8.100-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) |[<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="Chasen-Zhang" src="https://avatars.githubusercontent.com/u/15354455?v=4&s=117" width="117">](https://github.com/Chasen-Zhang) |[<img alt="ClSlaid" src="https://avatars.githubusercontent.com/u/44747719?v=4&s=117" width="117">](https://github.com/ClSlaid) |[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |
:---: |:---: |:---: |:---: |:---: |:---: |
[andylokandy](https://github.com/andylokandy) |[b41sh](https://github.com/b41sh) |[BohuTANG](https://github.com/BohuTANG) |[Chasen-Zhang](https://github.com/Chasen-Zhang) |[ClSlaid](https://github.com/ClSlaid) |[dantengsky](https://github.com/dantengsky) |

[<img alt="dependabot[bot]" src="https://avatars.githubusercontent.com/in/29110?v=4&s=117" width="117">](https://github.com/apps/dependabot) |[<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |[<img alt="eliasyaoyc" src="https://avatars.githubusercontent.com/u/46013886?v=4&s=117" width="117">](https://github.com/eliasyaoyc) |[<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |[<img alt="RinChanNOWWW" src="https://avatars.githubusercontent.com/u/33975039?v=4&s=117" width="117">](https://github.com/RinChanNOWWW) |
:---: |:---: |:---: |:---: |:---: |:---: |
[dependabot[bot]](https://github.com/apps/dependabot) |[drmingdrmer](https://github.com/drmingdrmer) |[eliasyaoyc](https://github.com/eliasyaoyc) |[lichuang](https://github.com/lichuang) |[mergify[bot]](https://github.com/apps/mergify) |[RinChanNOWWW](https://github.com/RinChanNOWWW) |

[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |[<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) |[<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |[<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) |
:---: |:---: |:---: |:---: |:---: |:---: |
[soyeric128](https://github.com/soyeric128) |[sundy-li](https://github.com/sundy-li) |[TCeason](https://github.com/TCeason) |[Xuanwo](https://github.com/Xuanwo) |[xudong963](https://github.com/xudong963) |[youngsofun](https://github.com/youngsofun) |

[<img alt="zhang2014" src="https://avatars.githubusercontent.com/u/8087042?v=4&s=117" width="117">](https://github.com/zhang2014) |[<img alt="ZhiHanZ" src="https://avatars.githubusercontent.com/u/25170437?v=4&s=117" width="117">](https://github.com/ZhiHanZ) | | | | |
:---: |:---: |:---: |:---: |:---: |:---: |
[zhang2014](https://github.com/zhang2014) |[ZhiHanZ](https://github.com/ZhiHanZ) | | | | |

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
