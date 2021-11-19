import Vue from 'vue'
// 导入 element-ui 样式
import 'element-ui/lib/theme-chalk/index.css'
// 按需导入组件
import { Button, Link } from 'element-ui'

// 注册全局组件
Vue.use(Button).use(Link)
