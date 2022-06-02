+++
title = "This week in Databend #44"
date = 2022-06-01
slug = "2022-06-01-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

- support correlated subquery ([#5593](https://github.com/datafuselabs/databend/pull/5593))
- support `select ... at` ([#5617](https://github.com/datafuselabs/databend/pull/5617) & [#5628](https://github.com/datafuselabs/databend/pull/5628))
- exchange protocol version with client ([#5645](https://github.com/datafuselabs/databend/pull/5645))
- add decompress support for COPY INTO and streaming loading ([#5655](https://github.com/datafuselabs/databend/pull/5655))

**new parser**

- implment string unescape ([#5638](https://github.com/datafuselabs/databend/pull/5638))
- allow mysql-style hex number and single-item array ([#5654](https://github.com/datafuselabs/databend/pull/5654))

**stage related**

- copy into stage support ([#5579](https://github.com/datafuselabs/databend/pull/5579))
- add system.stages table and show stages ([#5581](https://github.com/datafuselabs/databend/pull/5581))

**call functions**

- add call stats functions ([#5646](https://github.com/datafuselabs/databend/pull/5646))
- add call function `system$search_tables` ([#5643](https://github.com/datafuselabs/databend/pull/5663))

**new planner**

- support `explain` for new planner ([#5587](https://github.com/datafuselabs/databend/pull/5587))
- support tuple in new planner ([#5640](https://github.com/datafuselabs/databend/pull/5640))
- support cross join ([#5715](https://github.com/datafuselabs/databend/pull/5715))

**Variant related**

- support variant group by ([#5694](https://github.com/datafuselabs/databend/pull/5694))
- support variant order by ([#5668](https://github.com/datafuselabs/databend/pull/5668))

### Improvement

- refine table optimize ([#5589](https://github.com/datafuselabs/databend/pull/5589))
- parse integer to u64 ([#5692](https://github.com/datafuselabs/databend/pull/5692))
- support `FixedKey` u128, u256, u512 in group query ([#5678](https://github.com/datafuselabs/databend/pull/5678))
- introduce `ScalarEvaluator` to evaluate `Scalar` ([#5689](https://github.com/datafuselabs/databend/pull/5689))
- utilize with `HashMethodFixedKeys` in hash join ([#5693](https://github.com/datafuselabs/databend/pull/5693))
- record count of tables for a tenant in KV space ([#5708](https://github.com/datafuselabs/databend/pull/5708))

### Build / Testing / CI

- add mock module, add test of out retention time data ([#5707](https://github.com/datafuselabs/databend/pull/5707))

### Bug fixes

- retry while meeting error during load_credential ([#5590](https://github.com/datafuselabs/databend/pull/5590))
- deny the root login from others host ([#5588](https://github.com/datafuselabs/databend/pull/5588))

## Tips

Let's learn a weekly tip from Databend.

### `COPY INTO` Databend with `COMPRESSION` Option

After [PR 5655](https://github.com/datafuselabs/databend/pull/5655), Databend started to support decompression reads in `COPY INTO` and streaming leading.

**Loading Compressed Files from Amazon S3**

Try to load data from a gzip compressed csv and insert into `mytable`.

```sql
COPY INTO mytable
  FROM s3://mybucket/data.csv.gz
  credentials=(aws_key_id='<AWS_ACCESS_KEY_ID>' aws_secret_key='<AWS_SECRET_ACCESS_KEY>')
  FILE_FORMAT = (type = "CSV" field_delimiter = ',' record_delimiter = '\n' 
  skip_header = 1 compression = GZIP) size_limit=10;
```

**`COMPRESSION` Option**

The `COMPRESSION` option is a string that represents the compression algorithm.

```
| Values        | Notes                                                           |
| ------------- | --------------------------------------------------------------- |
| `AUTO`        | Auto detect compression via file extensions                     |
| `GZIP`        |                                                                 |
| `BZ2`         |                                                                 |
| `BROTLI`      | Must be specified if loading/unloading Brotli-compressed files. |
| `ZSTD`        | Zstandard v0.8 (and higher) is supported.                       |
| `DEFLATE`     | Deflate-compressed files (with zlib header, RFC1950).           |
| `RAW_DEFLATE` | Deflate-compressed files (without any header, RFC1951).         |
| `NONE`        | Indicates that the files have not been compressed.              |
```

**Learn more:**

- [Doc | COPY INTO \<table\>](https://databend.rs/doc/reference/sql/dml/dml-copy-into-table)
- [PR 5655 | Add decompress support for COPY INTO and streaming loading](https://github.com/datafuselabs/databend/pull/5655)

## Changlogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.7.68-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.68-nightly)
- [v0.7.67-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.67-nightly)
- [v0.7.67-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.66-nightly)
- [v0.7.65-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.65-nightly)
- [v0.7.64-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.64-nightly)
- [v0.7.63-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.63-nightly)
- [v0.7.62-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.62-nightly)
- [v0.7.61-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.61-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

| [<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) | [<img alt="ariesdevil" src="https://avatars.githubusercontent.com/u/7812909?v=4&s=117" width="117">](https://github.com/ariesdevil) | [<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) | [<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) | [<img alt="Chasen-Zhang" src="https://avatars.githubusercontent.com/u/15354455?v=4&s=117" width="117">](https://github.com/Chasen-Zhang) | [<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: |
|                                             [andylokandy](https://github.com/andylokandy)                                             |                                             [ariesdevil](https://github.com/ariesdevil)                                             |                                             [b41sh](https://github.com/b41sh)                                             |                                            [BohuTANG](https://github.com/BohuTANG)                                             |                                             [Chasen-Zhang](https://github.com/Chasen-Zhang)                                              |                                             [dantengsky](https://github.com/dantengsky)                                              |

| [<img alt="devillove084" src="https://avatars.githubusercontent.com/u/15782923?v=4&s=117" width="117">](https://github.com/devillove084) | [<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) | [<img alt="everpcpc" src="https://avatars.githubusercontent.com/u/1808802?v=4&s=117" width="117">](https://github.com/everpcpc) | [<img alt="flaneur2020" src="https://avatars.githubusercontent.com/u/129800?v=4&s=117" width="117">](https://github.com/flaneur2020) | [<img alt="hanyisong" src="https://avatars.githubusercontent.com/u/71937758?v=4&s=117" width="117">](https://github.com/hanyisong) | [<img alt="junnplus" src="https://avatars.githubusercontent.com/u/8097526?v=4&s=117" width="117">](https://github.com/junnplus) |
| :--------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
|                                             [devillove084](https://github.com/devillove084)                                              |                                            [drmingdrmer](https://github.com/drmingdrmer)                                            |                                             [everpcpc](https://github.com/everpcpc)                                             |                                            [flaneur2020](https://github.com/flaneur2020)                                             |                                             [hanyisong](https://github.com/hanyisong)                                              |                                             [junnplus](https://github.com/junnplus)                                             |

| [<img alt="leiysky" src="https://avatars.githubusercontent.com/u/22445410?v=4&s=117" width="117">](https://github.com/leiysky) | [<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) | [<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) | [<img alt="PsiACE" src="https://avatars.githubusercontent.com/u/36896360?v=4&s=117" width="117">](https://github.com/PsiACE) | [<img alt="RinChanNOWWW" src="https://avatars.githubusercontent.com/u/33975039?v=4&s=117" width="117">](https://github.com/RinChanNOWWW) | [<img alt="ryanrussell" src="https://avatars.githubusercontent.com/u/523300?v=4&s=117" width="117">](https://github.com/ryanrussell) |
| :----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: |
|                                             [leiysky](https://github.com/leiysky)                                              |                                             [lichuang](https://github.com/lichuang)                                             |                                            [mergify[bot]](https://github.com/apps/mergify)                                             |                                             [PsiACE](https://github.com/PsiACE)                                              |                                             [RinChanNOWWW](https://github.com/RinChanNOWWW)                                              |                                            [ryanrussell](https://github.com/ryanrussell)                                             |

| [<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) | [<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) | [<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) | [<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) | [<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) | [<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
|                                              [soyeric128](https://github.com/soyeric128)                                              |                                             [sundy-li](https://github.com/sundy-li)                                             |                                             [TCeason](https://github.com/TCeason)                                              |                                             [Xuanwo](https://github.com/Xuanwo)                                             |                                             [xudong963](https://github.com/xudong963)                                              |                                             [youngsofun](https://github.com/youngsofun)                                             |

| [<img alt="ZeaLoVe" src="https://avatars.githubusercontent.com/u/10904090?v=4&s=117" width="117">](https://github.com/ZeaLoVe) | [<img alt="zhyass" src="https://avatars.githubusercontent.com/u/34016424?v=4&s=117" width="117">](https://github.com/zhyass) |       |       |       |       |
| :----------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :---: | :---: | :---: | :---: |
|                                             [ZeaLoVe](https://github.com/ZeaLoVe)                                              |                                             [zhyass](https://github.com/zhyass)                                              |       |       |       |       |

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
