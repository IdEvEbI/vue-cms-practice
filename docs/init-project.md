# 项目准备

## 一. 环境准备

1. 检查 node 版本，确保 node 的版本 ≥ 12

   ```bash
   node -v
   ```

2. 修改 yarn 的淘宝镜像

   ```bash
   # 设置淘宝镜像地址
   yarn config set registry  https://registry.npm.taobao.org/

   # 查看镜像地址
   yarn config get registry
   ```

3. 安装 VSCode 插件：**ESLint** + **Vetur**

## 二. 创建项目

1. 在终端输入如下命令创建 **vue-cms-practice** 项目：

   ```bash
   vue create vue-cms-practice
   ```

2. 参考以下步骤选择**项目特性**：

   1. 选择**手动选择特性**，如下图：
      ![手动选择特性](assets/01-manully-select-features.png)

   2. 选择项目中需要使用的特性，如下图：
      ![选择项目特性](assets/02-selected-features.png)

   3. 选择 **Vue.js 2.x**，如下图：
      ![选择 Vue.js 版本](assets/03-selected-vue-version.png)

   4. 不使用 `history` 模式路由，如下图：
      ![不使用 history 模式路由](assets/04-not-use-history-mode-router.png)

   5. 选择 **Less** 作为 CSS 预处理器，如下图：
      ![选择 less 预处理器](assets/05-selected-less.png)

   6. 选择 **ESLint + 标准配置**，如下图：
      ![选择 eslint + standard 配置](assets/   06-selected-eslint-standard-config.png)

   7. 选择**在保存文件时启用代码规范检测**，如下图：
      ![保存文件时 lint](assets/07-selected-lint-on-save.png)

   8. 选择分开独立保存 **Babel**、**ESLint** 的配置文件，如下图：
      ![独立保存配置文件](assets/08-in-dedicated-config-files.png)

   9. 不选择将项目配置用于未来的项目，如下图：
      ![不用于未来项目](assets/09-not-for-future-projects.png)

3. 等待脚手架安装项目，完成后的界面效果如下图所示：
   ![项目安装完成](assets/10-created-project-finished.png)

## 三. 推送到 GitHub 代码仓库

在终端输入如下命令将项目推送到 **GitHub**（**提示**：需要提前在 GitHub 上建好空仓库）：

```bash
# 进入项目目录
cd vue-cms-practice

# 修改分支名
git branch -M main

# 添加远程仓库
git remote add origin [仓库地址]

# 将代码推送到服务器
git push -u origin main

# 配置项目拉取策略
git config pull.rebase true
```
