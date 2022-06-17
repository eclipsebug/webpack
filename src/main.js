console.log('实现轮播图的业务逻辑')
console.log('实现tabs标签页的逻辑')

import './banner.js'
import './tabs.js'

import './styles/index.css'
import './styles/index.less'

// 1.引入图片
import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'

// 2. 创建图片节点
const gif = document.createElement('img')
const png = document.createElement('img')

// 3. 给src赋值
gif.src = gifSrc
png.src = pngSrc

// 4. 插入节点
document.body.appendChild(gif)
document.body.appendChild(png)
import './assets/fonts/iconfont.css'

import app from '../src/app.vue'

const fn = () =>
    console.log("你好");

console.log(fn);
