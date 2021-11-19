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
