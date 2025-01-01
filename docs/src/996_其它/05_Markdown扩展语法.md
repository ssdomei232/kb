## 在 Hexo 中 {#Hexo}
### NOTE 提示块
#### 基本语法
```md
{% note success %}
[内容]
{% endnote %}
```
提示块可以实现折叠   
```md
{% note success [标题] %}
[内容]
{% endnote %}
```
#### 更多风格  
```md
{% note default %}
一个 default 提示
{% endnote %}

{% note primary %}
一个 primary 提示
{% endnote %}

{% note success %}
一个 success 提示
{% endnote %}

{% note info %}
一个 info 提示
{% endnote %}

{% note warning %}
一个 warning 提示
{% endnote %}

{% note danger %}
一个 danger 提示
{% endnote %}
```

### Tabs 标签
用于在文章内设置选项卡     
```md
{% tabs 标签, 1 %} 
<!-- tab -->
**选项卡 1** 
<!-- endtab -->
<!-- tab -->
**选项卡 2**
<!-- endtab -->
<!-- tab 标签三 -->
**选项卡 3** , 名字为 `TAB三`
<!-- endtab -->
{% endtabs %}
```
第一行 `{% tabs 标签, 1 %}` 设置每个子标签在不指定标题时显示为 `标签 + 数字序号`   
`1` 表示默认展开第 1 个选项卡，如果是 `-1` 则只显示标签标题，隐藏内容，点击可以显示内容

## 在 Github 中 {#Github}
在Github上使用特殊markdown来强调警报样式内容块中的内容
```md
> [!NOTE]  
> 强调用户在浏览时应考虑的信息。

> [!TIP]
> 可选信息，可帮助用户更成功。

> [!IMPORTANT]  
> 用户成功所必需的关键信息。

> [!WARNING]  
> 由于潜在风险，需要用户立即注意的关键内容。

> [!CAUTION]
> 行动的负面潜在后果。
```

## 在 VitePress 中 {#VitePress}
### 语法高亮
VitePress 提供由 [Shiki](https://github.com/shikijs/shiki) 提供支持的语法高亮，以及行高亮等附加功能：
**输入**
````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````
**输出**
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
除了单行之外，还可以指定多个单行、多行，或两者均指定：

* 多行：例如 `{5-8}、{3-10}、{10-17}`
* 多个单行：例如 `{4,7,9}`
* 多行与单行：例如 `{4,7-13,16,23-27,40}`

也可以使用 `// [!code highlight]` 注释实现行高亮。
**输入**
````md
```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code highlight]
    }
  }
}
```
````
**输出**
```js
export default {
  data() {
    return {
      msg: 'Highlighted!' // [!code highlight]
    }
  }
}
```
### 自定义容器
**输入**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**输出**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

> [!IMPORTANT]
> VitePress 同样支持以标注的方式渲染 GitHub 风格的警报。它们和自定义容器的渲染方式相同。

### 标题锚点
```
# 使用自定义锚点 {#my-anchor}
```
这允许将标题链接为 `#my-anchor`，而不是默认的 `#使用自定义锚点`

### 代码块中聚焦 
在某一行上添加 `// [!code focus]` 注释将聚焦它并模糊代码的其他部分。   
此外，可以使用 `// [!code focus:<lines>]` 定义要聚焦的行数。
**输入**
````md
```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```
````

**输出**
```
export default {
  data() {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```
## 参考
[在 Hexo 中使用 NOTE 提示块](https://homulilly.com/post/hexo-use-note-and-tabs-block.html)   
[GitHub上的Markdown警示样式内容块](https://typorachina.com/articles/1714104012888.html)   
[Markdown 扩展 | VitePress](https://vitepress.dev/zh/guide/markdown)   