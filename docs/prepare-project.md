# 准备 CMS 项目

> 目标：调整文件及目录，安装 ElementUI，为项目开发做好准备。

## 一. 调整文件及目录

1. 删除几个由脚手架生成的文件，文件列表如下：

   ```bash
   components/HelloWorld.vue
   views/Home.vue
   views/About.vue
   assets/logo.png
   ```

2. 修改 `src/router/index.js` 内容如下：

   ```js
   import Vue from 'vue'
   import VueRouter from 'vue-router'

   Vue.use(VueRouter)

   const router = new VueRouter({
     routes: []
   })

   export default router
   ```

3. 修改 `src/App.vue` 内容如下：

   ```vue
   <template>
     <div id="app">
       <router-view />
       <h1>Hello Vue</h1>
     </div>
   </template>

   <style lang="less">

   </style>
   ```

4. 在 `src` 目录下新建 `api`、`styles`、`utils` 三个子目录，调整后的目录结构如下：

   ```bash
   .
   ├── api                      # 接口函数模块
   ├── assets                   # 图片资源
   ├── components               # 通用组件
   ├── router                   # 路由
   ├── store                    # Vuex 仓库
   ├── styles                   # 全局样式
   ├── utils                    # 工具函数模块
   ├── views                    # 视图组件
   ├── App.vue
   └── main.js
   ```

## 二. 导入资源配置 @src 路径

### 2.1 导入资源

1. 将**图片资源**复制到 `assets` 目录
2. 将**全局样式**复制到 `styles` 目录

### 2.2 配置 @src 路径

1. 安装 VSCode 插件：**Path Intellisense**
2. 修改 VSCode 的 `settings.json` 文件，增加以下配置：

   ```json
   "path-intellisense.mappings": {
     "@": "${workspaceFolder}/src"
   }
   ```

### 2.3 导入全局样式

- 修改 `main.js` 导入全局样式，代码如下：

  ```js
  // 导入全局样式
  import '@/styles/global.css'
  ```

## 三. 引入 Element UI 组件库

官方文档：<https://element.eleme.io/#/zh-CN>

在实际开发中可以全部引入整个 Element，也可以根据需要仅引入部分组件，其中：

- **全部引入**（不推荐使用）会引入所有的组件，使用方便，但是将来打包的体积会大
- **按需引入**（推荐使用）只引入项目中需要的组件，将来打包的体积会小，需要借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)

### 3.1 全部引入（不推荐）

1. 安装

   ```bash
   yarn add element-ui
   ```

2. 修改 `main.js` 引入 ElementUI，代码如下：

   ```js
   // 引入 ElementUI
   import ElementUI from 'element-ui'
   import 'element-ui/lib/theme-chalk/index.css'

   Vue.use(ElementUI)
   ```

3. 修改 `App.vue` 增加测试按钮，代码如下：

   ```js
   <el-button type="primary">点我啊</el-button>
   ```

### 3.2 按需引入

1. 安装

   ```bash
   yarn add element-ui
   yarn add babel-plugin-component -D
   ```

2. 修改 `babel.config.js` 配置如下：

   ```js
   module.exports = {
     presets: [
       '@vue/cli-plugin-babel/preset'
     ],
     plugins: [
       [
         'component',
         {
           libraryName: 'element-ui',
           styleLibraryName: 'theme-chalk'
         }
       ]
     ]
   }
   ```

3. 新建 `utils/element.js` 并实现以下代码：

   ```js
   import Vue from 'vue'
   // 导入 element-ui 样式
   import 'element-ui/lib/theme-chalk/index.css'
   // 按需导入组件
   import { Button, Link } from 'element-ui'
   
   // 注册全局组件
   Vue.use(Button).use(Link)
   ```

4. 修改 `main.js` 直接导入 `/utils/element.js`，代码如下：

   ```js
   // 导入 element.js
   import '@/utils/element'
   ```

5. 修改 `App.vue` 增加测试按钮和，代码如下：

   ```js
   <el-button type="primary">按需引入按钮</el-button>
   <el-link
     type="info"
     href="https://www.baidu.com"
     target="_blank">链接文字</el-link>
   ```
