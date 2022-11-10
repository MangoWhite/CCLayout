# CCLayout

Cocos Creator cc.Layout组件引擎文档增加居中属性：horizontalCenter、verticalCenter，主要是解决layout组件各节点居中显示问题

# 版本适用

我测试2.4.x基本都适用

# 原文件地址

`2.4.x引擎地址\resources\engine\cocos2d\core\components\CCLayout.js`

# 使用方法

因为修改部分引擎组件需要修改对应的inspector文件，2.4.3及以下版本可参考论坛
- https://forum.cocos.org/t/cocos-creator-inspector/91178/11  方法修改，
2.4.4及以上版本官方将inspector相关打包加密至app.asar内，我尝试解压asar之后，发现文档经过加密了，暂未找到修改方式，
所以我用了一个相对简单的方式，从2.4.3版本复制cclayout的inspector.js文档，放在自己项目空白扩展插件，即项目根目录下的`packages\custom-component\inspector`内，
并在代码中添加属性标签，然后将引擎源文件CCLayout内的inspector引用修改为`inspector: 'packages://custom-component/inspector/cclayout.js'`即可

我已将packages文件夹上传至git，可直接复制至项目路径即可

# 声明

此次修改为本人第一次尝试修改引擎组件，如有错误及可改进的地方，还望提醒，谢谢
