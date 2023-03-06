+++
title = "This week in Databend #53"
date = 2022-08-03
slug = "2022-08-03-databend-weekly"
draft = false
+++

[Databend](https://github.com/datafuselabs/databend) is an open source **elastic** and **reliable** Modern Cloud Data Warehouse, it offers blazing fast query and combines elasticity, simplicity, low cost of the cloud, built to make the Data Cloud easy.

## Big changes

Below is a list of some major changes that we don't want you to miss.

### Features

**RFC**

- recluster ([#6905](https://github.com/datafuselabs/databend/pull/6905))

**meta**

- add raft store fail metrics ([#6927](https://github.com/datafuselabs/databend/pull/6927))
- metasrv unittest logs tracing event with customized formatter ([#6874](https://github.com/datafuselabs/databend/pull/6874))

**storage**

- enable bloom filter index ([#6639](https://github.com/datafuselabs/databend/pull/6639))
- support query hive partition table ([#6906](https://github.com/datafuselabs/databend/pull/6906))

**RBAC**

- add auth role to jwt ([#6829](https://github.com/datafuselabs/databend/pull/6829))

**format**

- pass `FileSplit` instead of `Vec` ([#6873](https://github.com/datafuselabs/databend/pull/6873))

**new expression**

- make chunk support scalar values ([#6918](https://github.com/datafuselabs/databend/pull/6918))
- migrate quote, reverse and ascii ([#6907](https://github.com/datafuselabs/databend/pull/6907))
- migrate trim functions to new expression framework ([#6921](https://github.com/datafuselabs/databend/pull/6921))

### Improvement

- Dedicate `See you again` to the old planner ([#6895](https://github.com/datafuselabs/databend/pull/6895))
- Remove unused reload config ([#6933](https://github.com/datafuselabs/databend/pull/6933))

**new expression**

- add `NullableColumn` and `NullableColumnBuilder` ([#6867](https://github.com/datafuselabs/databend/pull/6867))
- use `Scalar` to store constant in `Expr` ([#6923](https://github.com/datafuselabs/databend/pull/6923))

### Build/Testing/CI

-  migrate all stateless test to logic test ([progress of migration](https://github.com/datafuselabs/databend/discussions/5838#discussioncomment-3204610))
- add mini ontime dataset to stateful test ([#6931](https://github.com/datafuselabs/databend/pull/6931))

### Bug fixes

- don't expand null scalar to column ([#6834](https://github.com/datafuselabs/databend/pull/6834))
- fix mistake using `try_cast` for cast ([#6879](https://github.com/datafuselabs/databend/pull/6879))
- fix session drop early in clickhouse handler ([#6888](https://github.com/datafuselabs/databend/pull/6888))
- fix binder create table ([#6899](https://github.com/datafuselabs/databend/pull/6899))
- fix mysql return 'Empty Set' when result set is empty ([#6841](https://github.com/datafuselabs/databend/pull/6841))
- fix case expr with case operator equal ([#6950](https://github.com/datafuselabs/databend/pull/6950))
- fix cannot kill query in cluster mod ([#6954](https://github.com/datafuselabs/databend/pull/6954))

## Tips

Let's learn a weekly tip from Databend.

### Call for Migrating Functions to the New Expression Framework

If you are interested in typed type system, or maybe you'd like to try your hand at a database project, take a look at how Databend does it.

We are now trying to migrate some old functions to the new expression framework, would you like to try it out?

- [Migrate String functions to new expression framework #6766](https://github.com/datafuselabs/databend/issues/6766)
- [Migrate control-flow functions to new expression framework #6833 ](https://github.com/datafuselabs/databend/issues/6833)

**Background**

Recently Databend is working on a new expression framework that will bring some interesting features.

- Type checking.
- Type-safe downcast. 
- Enum-dispatched columns.
- Generic types.

**How To**

Legacy functions are settle in `common/functions/src/scalars`. The task is to migrate all of them to `common/functions-v2/src/scalars/`. 

Usually you can reuse the logic of the previous implementation, it just needs some rewriting to make it fit the new way.

Similarly, the legacy tests in `common/functions/tests/it/scalars/` should also be migrated to `common/functions-v2/tests/it/scalars/`. 

The new tests will be written using `goldenfile`, so you can easily generate test cases without a lot of painful handwriting. 

**Example**

A unary function `OCTET_LENGTH` can be defined using 6 lines in`common/functions-v2/src/scalars/strings.rs`.

`OCTET_LENGTH` will return the length of a string in bytes.

```rust
registry.register_1_arg::<StringType, NumberType<u64>, _, _>(
    "octet_length",
    FunctionProperty::default(),
    |_| None,
    |val| val.len() as u64,
);
```

`LENGTH` is a synonym for `OCTET_LENGTH`. 

We can easily define function aliases with one line.

```rust
registry.register_aliases("octet_length", &["length"]);
```

Next, let's write some tests to make sure it works correctly. 

Edit `common/functions-v2/tests/it/scalars/string.rs`.

```rust
fn test_octet_length(file: &mut impl Write) {
    run_ast(file, "octet_length('latin')", &[]);
    run_ast(file, "octet_length(NULL)", &[]);
    run_ast(file, "length(a)", &[(
        "a",
        DataType::String,
        build_string_column(&["latin", "кириллица", "кириллица and latin"]),
    )]);
}
```

Register it in the `test_string` function, 

```rust
#[test]
fn test_string() {
    let mut mint = Mint::new("tests/it/scalars/testdata");
    let file = &mut mint.new_goldenfile("string.txt").unwrap();

    ...
    test_octet_length(file);
    ...
}
```

Next, let's try to generate these test cases from the command line.

```bash
REGENERATE_GOLDENFILES=1 cargo test -p common-functions-v2 --test it
```

Well done, we did it.

**Learn More**

- [RFC: Formal Type System](https://github.com/datafuselabs/databend/discussions/5438)
- [Tracking issue for new expression framework](https://github.com/datafuselabs/databend/issues/6547)

## Changelogs

You can check the changelogs of Databend nightly to learn about our latest developments.

- [v0.7.152-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.152-nightly)
- [v0.7.151-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.151-nightly)
- [v0.7.150-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.150-nightly)
- [v0.7.149-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.149-nightly)
- [v0.7.148-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.148-nightly)
- [v0.7.147-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.147-nightly)
- [v0.7.146-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.146-nightly)
- [v0.7.145-nightly](https://github.com/datafuselabs/databend/releases/tag/v0.7.145-nightly)

## Contributors

Thanks a lot to the contributors for their excellent work this week.

[<img alt="andylokandy" src="https://avatars.githubusercontent.com/u/9637710?v=4&s=117" width="117">](https://github.com/andylokandy) |[<img alt="ariesdevil" src="https://avatars.githubusercontent.com/u/7812909?v=4&s=117" width="117">](https://github.com/ariesdevil) |[<img alt="b41sh" src="https://avatars.githubusercontent.com/u/1070352?v=4&s=117" width="117">](https://github.com/b41sh) |[<img alt="BohuTANG" src="https://avatars.githubusercontent.com/u/172204?v=4&s=117" width="117">](https://github.com/BohuTANG) |[<img alt="dantengsky" src="https://avatars.githubusercontent.com/u/22081156?v=4&s=117" width="117">](https://github.com/dantengsky) |[<img alt="drmingdrmer" src="https://avatars.githubusercontent.com/u/44069?v=4&s=117" width="117">](https://github.com/drmingdrmer) |
:---: |:---: |:---: |:---: |:---: |:---: |
[andylokandy](https://github.com/andylokandy) |[ariesdevil](https://github.com/ariesdevil) |[b41sh](https://github.com/b41sh) |[BohuTANG](https://github.com/BohuTANG) |[dantengsky](https://github.com/dantengsky) |[drmingdrmer](https://github.com/drmingdrmer) |

[<img alt="flaneur2020" src="https://avatars.githubusercontent.com/u/129800?v=4&s=117" width="117">](https://github.com/flaneur2020) |[<img alt="gaoxinge" src="https://avatars.githubusercontent.com/u/16648345?v=4&s=117" width="117">](https://github.com/gaoxinge) |[<img alt="leiysky" src="https://avatars.githubusercontent.com/u/22445410?v=4&s=117" width="117">](https://github.com/leiysky) |[<img alt="lichuang" src="https://avatars.githubusercontent.com/u/1998569?v=4&s=117" width="117">](https://github.com/lichuang) |[<img alt="mergify[bot]" src="https://avatars.githubusercontent.com/in/10562?v=4&s=117" width="117">](https://github.com/apps/mergify) |[<img alt="PsiACE" src="https://avatars.githubusercontent.com/u/36896360?v=4&s=117" width="117">](https://github.com/PsiACE) |
:---: |:---: |:---: |:---: |:---: |:---: |
[flaneur2020](https://github.com/flaneur2020) |[gaoxinge](https://github.com/gaoxinge) |[leiysky](https://github.com/leiysky) |[lichuang](https://github.com/lichuang) |[mergify[bot]](https://github.com/apps/mergify) |[PsiACE](https://github.com/PsiACE) |

[<img alt="RinChanNOWWW" src="https://avatars.githubusercontent.com/u/33975039?v=4&s=117" width="117">](https://github.com/RinChanNOWWW) |[<img alt="sandflee" src="https://avatars.githubusercontent.com/u/5102100?v=4&s=117" width="117">](https://github.com/sandflee) |[<img alt="soyeric128" src="https://avatars.githubusercontent.com/u/106025534?v=4&s=117" width="117">](https://github.com/soyeric128) |[<img alt="sundy-li" src="https://avatars.githubusercontent.com/u/3325189?v=4&s=117" width="117">](https://github.com/sundy-li) |[<img alt="TCeason" src="https://avatars.githubusercontent.com/u/33082201?v=4&s=117" width="117">](https://github.com/TCeason) |[<img alt="Xuanwo" src="https://avatars.githubusercontent.com/u/5351546?v=4&s=117" width="117">](https://github.com/Xuanwo) |
:---: |:---: |:---: |:---: |:---: |:---: |
[RinChanNOWWW](https://github.com/RinChanNOWWW) |[sandflee](https://github.com/sandflee) |[soyeric128](https://github.com/soyeric128) |[sundy-li](https://github.com/sundy-li) |[TCeason](https://github.com/TCeason) |[Xuanwo](https://github.com/Xuanwo) |

[<img alt="xudong963" src="https://avatars.githubusercontent.com/u/41979257?v=4&s=117" width="117">](https://github.com/xudong963) |[<img alt="ygf11" src="https://avatars.githubusercontent.com/u/3428089?v=4&s=117" width="117">](https://github.com/ygf11) |[<img alt="youngsofun" src="https://avatars.githubusercontent.com/u/5782159?v=4&s=117" width="117">](https://github.com/youngsofun) |[<img alt="ZeaLoVe" src="https://avatars.githubusercontent.com/u/10904090?v=4&s=117" width="117">](https://github.com/ZeaLoVe) |[<img alt="zhang2014" src="https://avatars.githubusercontent.com/u/8087042?v=4&s=117" width="117">](https://github.com/zhang2014) |[<img alt="zhyass" src="https://avatars.githubusercontent.com/u/34016424?v=4&s=117" width="117">](https://github.com/zhyass) |
:---: |:---: |:---: |:---: |:---: |:---: |
[xudong963](https://github.com/xudong963) |[ygf11](https://github.com/ygf11) |[youngsofun](https://github.com/youngsofun) |[ZeaLoVe](https://github.com/ZeaLoVe) |[zhang2014](https://github.com/zhang2014) |[zhyass](https://github.com/zhyass) |

## Meet Us

Please join the [DatafuseLabs Community](https://github.com/datafuselabs/) if you are interested in Databend.

We are looking forward to seeing you try our code. We have a strong team behind you to ensure a smooth experience in trying our code for your projects.
If you are a hacker passionate about database internals, feel free to play with our code.

You can submit [issues](https://github.com/datafuselabs/databend/issues) for any problems you find. We also highly appreciate any of your pull requests.

- [Databend Website](https://databend.rs)
- [Twitter](https://twitter.com/Datafuse_Labs)
- [GitHub Discussions](https://github.com/datafuselabs/databend/discussions)
- [Slack Channel](https://link.databend.rs/join-slack)
