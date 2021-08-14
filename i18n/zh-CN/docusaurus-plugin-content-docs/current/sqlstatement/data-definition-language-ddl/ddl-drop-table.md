---
id: ddl-drop-table
title: DROP TABLE
sidebar_position: 4
---

Deletes the table.

## Syntax

```sql
DROP TABLE [IF EXISTS] [db.]name
```

## Examples

```sql
mysql> CREATE TABLE test(a UInt64, b Varchar) Engine = Memory;
mysql> DROP TABLE test;
```
