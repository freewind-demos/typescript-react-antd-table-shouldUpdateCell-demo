TypeScript React AntDesign Table Demo
=================================

可以通过 `shouldCellUpdate` 来判断一个cell是否应该重新re-render，在大表格时可以提升性能

需要注意的是，state每次更新时必须保证原state不变，创建一个全新的，`shouldCellUpdate`参数才能得到正确的数据。

这就意味着有时候我们为了偷懒而在数据复杂时使用的以下办法：

```
setData(data => {
  data[0].aaa.bbb.ccc.ddd.value = newValue;
  return [...data];
}) 
```
不能使用。

但可以使用下面的变通办法：

```
setData(data => {
  const clone = deepClone(data);
  clone[0].aaa.bbb.ccc.ddd.value = newValue;
  return clone;
}) 
```


```
npm install
npm run demo
```

It will open page on browser automatically.
