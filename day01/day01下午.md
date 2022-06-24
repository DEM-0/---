---

---

# day01下午

## 1.数据绑定

### 		1.1方式一：简单绑定

​			`{{变量}}`方式在view中使用变量

### 		1.2方式二：

​			标签属性中使用data中的数据`{{}}`，view标签类似于html中的div。

## 2.常见的wx指令

​		指令：wx框架，提前写好的对应的代码！通过对应指令的形式去使用

​		指令的语法规则为： `wx:指令名称  if elif else, for...`

### 		2.1 `wx:if-elif-else` 指令

​		`wx:if=表达式`，如果表达式为真，显示该组件（标签），结果为假，则隐藏。

​		`wx:if wx:else wx:elif` 主要用来渲染节点

​		`hidden属性（ture，false）`可以隐藏显示组件，避免页面重绘的问题，从DOM树中频繁插入和移除

​		区别：两者都具备显示和隐藏组件的功能，而wx:if比较消耗资源，如果组件切换比较频繁，不建议使用if，用hide来代替（html中的visibility:hidden和display:none的区别差不多：一个不占位，一个消失）

### 		2.2 `wx:for` 指令

​		在组件上使用 `wx:for` 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。

#### wx:for-item和wx:for-index

​		默认数组的当前项的下标变量名默认为 `index`，数组当前项的变量名默认为 `item`，在当前view中有用。

​		使用 `wx:for-item` 可以指定数组当前元素的变量名，

​		使用 `wx:for-index` 可以指定数组当前下标的变量名。

```html
<view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">
  {{idx}}: {{itemName.message}}
</view>
```

#### wx:key

如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态（如 [input](https://developers.weixin.qq.com/miniprogram/dev/component/input.html) 中的输入内容，[switch](https://developers.weixin.qq.com/miniprogram/dev/component/switch.html) 的选中状态），需要使用 `wx:key` 来指定列表中项目的唯一的标识符。

`wx:key` 的值以两种形式提供

1. 字符串，代表在 for 循环的 array 中 item 的某个 property（属性名），该 property 的**值**需要是列表中**唯一的字符串或数字**，且不能动态改变。（该属性的值必须在该对象中是唯一的）
2. 保留关键字 `*this` 代表在 for 循环中的 item 本身，这种表示需要 **item 本身是一个唯一的字符串或者数字**。
3. 总结：*this用于遍历的元素是**数组**，属性名用在**对象**中，用index时不一定是最好的选择

当数据改变触发渲染层重新渲染的时候，会校正带有 key 的组件，框架会确保他们被重新排序，而不是重新创建，以确保使组件保持自身的状态，并且提高列表渲染时的效率。

**如不提供 `wx:key`，会报一个 `warning`， 如果明确知道该列表是静态，或者不必关注其顺序，可以选择忽略。**
