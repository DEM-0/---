# day03 2022年6月22日

## 1.学习笔记

### 1.1 WXSS

WXSS (WeiXin Style Sheets)是一套样式语言，用于描述 WXML 的组件样式。

WXSS 用来决定 WXML 的组件应该怎么显示。

为了适应广大的前端开发者，WXSS 具有 CSS 大部分特性。同时为了更适合开发微信小程序，WXSS 对 CSS 进行了扩充以及修改。

与 CSS 相比，WXSS 扩展的特性有：

- 尺寸单位

- 样式导入

- **尺寸单位：**

    **rpx（responsive pixel）**: 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。

### 1.2 字体图标的使用

- 1.阿里图库里添加

- 2.添加到购物车

- 3.将购物车中的内容添加到项目中

- 4.进行项目设置 编码格式为 ttf和base64 并下载

- 5.解压并复制iconfont.css到项目文件中

- 6.重命名iconfont.css为 iconfont.wxss

- 7.在app.wxss中引入字体文件 @import '本地文件地址'

- 8.在需要的文件中添加相应的类名例：		

    ```html
    <icon class="iconfont icon-fanhui2">查看更多</icon>
    ```

### 1.3 flex布局

​		Flex是Flexible Box的缩写，意为”弹性布局”，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为Flex布局。

​		注意，设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。

**属性**：

​	flex-direction属性决定主轴的方向（即项目的排列方向）。

​	默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何	换行。

​	flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

​	justify-content属性定义了项目在主轴上的对齐方式。

​	align-items属性定义项目在交叉轴上如何对齐。

​	align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

### 1.4 navigator组件

页面链接

|       url       | string     |                     | 否     | 当前小程序内的跳转链接                                       |      |
| :-------------: | ---------- | ------------------- | ------ | ------------------------------------------------------------ | ---- |
| **hover-class** | **string** | **navigator-hover** | **否** | 指定点击时的样式类，当`hover-class="none"`时，没有点击态效果 |      |

实例代码：

```html
 <navigator url="/page/navigate/navigate?title=navigate" hover-class="navigator-hover">跳转到新页面</navigator
```

### 1.5 wx.request

发起 HTTPS 网络请求。

**参数:**

|      | 属性    | 类型                      | 默认值 | 必填 | 说明                                                         |
| :--- | :------ | :------------------------ | :----- | :--- | :----------------------------------------------------------- |
|      | url     | string                    |        | 是   | 开发者服务器接口地址                                         |
|      | data    | string/object/ArrayBuffer |        | 否   | 请求的参数                                                   |
|      | header  | Object                    |        | 否   | 设置请求的 header，header 中不能设置 Referer。 `content-type` 默认为 `application/json` |
|      | timeout | number                    |        | 否   | 超时时间，单位为毫秒。默认值为 60000                         |
|      | method  | string                    | GET    | 否   | HTTP 请求方法                                                |

 **data 参数说明:**

​	最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。

## 2.每日收获

今天的学习主要是在项目的练习和昨日项目的讲解上，理解别人的代码是如何写的，在布局的时候要有合理的规划，组件的class要遵守见名知意的原则方便后续的开发。同时今天对字体图标的导入更加熟练了，虽然之前使用过字体图标，但是今天学会了只采用类名的方法，更加方便和快捷，需要注意的是使用类名时前要在`icon`组件加上**iconfont**类名不然不会起作用

# 201906581248 傅崧玲