# custom-component

Cocos Creator 创建继承类似cc.Button的组件扩展，引擎组件使用了inspector属性查看器，而扩展组件未使用，导致扩展组件属性全部显示出来。
这时就需要手动创建inspector来控制组件上属性显示。


## 项目使用

1. 找到原引擎组件inspector .js文件地址（2.4.4以下在引擎地址 `resources/inspector/inspector/comps/... ` 下，2.4.4以上则打包在 `resources/app.asar` 内）

2. 将inspector .js文件复制到本插件目录下新建路径 例如：`custom-component/button/...`

3. 修改复制的inspector .js文件，添加扩展的属性名

4. 重启Cocos Creator

5. 扩展组件脚本添加inspector，并修改为新建路径 例如：`@inspector('packages://custom-component/button/inspector.js')`


## 参考论坛

- https://forum.cocos.org/t/cocos-creator-inspector/91178/11
