---
slug: 2021-08-08-datafuse-cloud-warehouse-arch
title: Rust, Datafuse and the Cloud Warehouse（1）云时代数仓架构设计
author: Bohu Tang
author_title: 数据库
tags: [datafuse, snowflake, firebolt]
hide_table_of_contents: true
---

传统数仓架构不适合云？

Cloud Warehouse 解决了什么问题？

Cloud Warehouse 架构应该是什么样？

带着问题，通过实战，向 Cloud Warehouse 出发。

<!--truncate-->

## Sharding Warehouse

首先，来看看传统式 Sharding Warehouse 架构，以及它在云上的局限性。

![](https://bohutang-1253727613.cos.ap-beijing.myqcloud.com/blog-datafuse/sharding-warehouse.png)

每个 shard 数据区间是固定的，很容易发生数据热点(data skew)问题，一般解决办法：

① 提升该 shard 硬件配置，如果热点很难预估，整个集群配置都需要提升，资源上粒度控制粗暴。

② 扩容，扩容过程(增加 shard-4)涉及数据迁移，如果数据量大，shard-4 可服务等待时间也会加长。

![](https://bohutang-1253727613.cos.ap-beijing.myqcloud.com/blog-datafuse/sharding-warehouse-scale.png)

如果只是把 Sharding Warehouse 简单的搬到云上，资源控制粒度还是很粗糙，很难做到精细化控制，从而无法实现比较精确的按需、按量计费。

也就说，虽然我们可以随意扩展，但是成本依然高昂。

## Cloud Warehouse

如果一个 Cloud Warehouse 满足:

1. 按需的弹性扩展
2. 按量的精细化资源控制

那么它的架构应该是什么样子呢？

![](https://bohutang-1253727613.cos.ap-beijing.myqcloud.com/blog-datafuse/cloud-warehouse-v1.png)

首先它是一个存储和计算分离的架构，其次是计算节点尽量无状态，这样我们可以根据需要添加/删除计算节点，算力随时增加和减少，是一个很平滑的过程，不涉及数据的迁移。
node-4 基本是 severless 的，可认为是一个进程，运行完毕自动消亡，在调度上可以做到更加精细化。

![](https://bohutang-1253727613.cos.ap-beijing.myqcloud.com/blog-datafuse/cloud-warehouse-v1-scale.png)

大家看到这个架构后或许有一个疑问：
Cloud Warehouse 架构比传统架构更简单啊 :)
Shared Storage 可以是 AWS S3，还可以是 Azure Blob Storage，都让云来做了，compute 使用类似 Presto 的计算引擎不就是完美的 Cloud Warehouse 了吗？

这里有一个现实问题挡住了通往理想的大道：

Shared Storage 通常不是为低延迟、高吞吐而设计，偶尔性的抖动也很难控制，如果靠计算引擎蛮力硬刚，这看起来并不是一个好的产品。

## 如何设计？

首先我们看下 Cloud Warehouse 里的数据有几种状态:

1. Persistent data：通常指用户的数据，重度依赖 Shared Storage
2. Intermediate data：一般指计算的临时中间结果，比如排序、JOIN 等产生的临时数据
3. Metadata：object catalogs, table schema, user 等元数据

既然 Shared Storage 已经假设是不可靠的，那我们尽量减少从 Shared Storage 读取数据好了，增加 Cache 来解决。

新的问题又来了，这个 Cache 到底 Cache 什么数据呢，是原始的块数据还是索引？是一个全局 Cache 还是计算节点内的 Cache？

### Snowflake 架构

我们先看看 Snowflake 老大哥的设计:

![](https://bohutang-1253727613.cos.ap-beijing.myqcloud.com/blog-datafuse/cloud-warehouse-distributed-cache.png)

Snowflake 在计算和存储之间加了一个共享的 Ephemeral Storage，主要用于 Intermediate data 存储，同时肩负着 Persistent data cache，好处是缓存可以充分利用，缺点是这个 Distributed Emphemeral Storage 做到 Elastic 同样面临一些挑战，比如多租户情况下资源隔离等问题。

### Datafuse 架构

Cloud Warehouse 强调状态分离，我们可以把 Persistent data 预先生成足够多的索引放到 Metadata Service，每个计算节点进行订阅，根据需要更新本地的 Cache，这个架构跟 FireBolt 比较相似。

这是目前比较简单可行的方式，增加计算节点，只要加热 Cache 即可，同样会面临一些挑战，比如海量的索引信息快速同步问题。

![](https://bohutang-1253727613.cos.ap-beijing.myqcloud.com/blog-datafuse/cloud-warehouse-cache-index.png)

## 总结

[Datafuse](https://github.com/datafuselabs/datafuse) 是一个开源的 Cloud Warehouse，重在计算和状态分离，专注云上的弹性扩展，让大家轻松打造出自己的 Data Cloud。

很高兴，又开了新系列来讲 Datafuse，一个把 Rust 和 Cloud 进行连接的 Warehouse 项目，充满乐趣和挑战。

## References

1. [Datafuse: A Modern Real-Time Data Processing & Analytics DBMS with Cloud-Native Architecture](https://github.com/datafuselabs/datafuse)
2. [Building An Elastic Query Engine on Disaggregated](https://www.usenix.org/system/files/nsdi20-paper-vuppalapati.pdf)
3. [Eon Mode: Bringing the Vertica Columnar Database to the Cloud](http://www.vertica.com/wp-content/uploads/2018/05/Vertica_EON_SIGMOD_Paper.pdf)
4. [The Firebolt Cloud Data Warehouse Whitepaper](https://www.firebolt.io/resources/firebolt-cloud-data-warehouse-whitepaper)
