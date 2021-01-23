const svgtofont = require('svgtofont')
const path = require('path')

svgtofont({
  src: path.resolve(process.cwd(), 'src/icons'), // svg 图标目录路径
  dist: path.resolve(process.cwd(), 'src/assets/fonts'), // 输出到指定目录中
  styleTemplates: path.resolve(process.cwd(), "src/icons/styles"),
  fontName: 'icon', // 设置字体名称
  css: {
    fontSize: '14px'
  }, // 生成字体文件
}).then(() => {
  console.log('done!')
})
