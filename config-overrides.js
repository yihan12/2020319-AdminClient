//配置文件 yarn add react-app-rewired customize-cra babel-plugin-import
//yarn add less less-loader
const { override, fixBabelImports, addLessLoader } = require("customize-cra");

// override:对以前的配置进行配置进行重写

module.exports = override(
  fixBabelImports("import", {
    //fixBabelImports  配置上babel-plugin-import
    libraryName: "antd", //针对antd组件库
    libraryDirectory: "es", //源码文件夹中的es文件夹
    style: true //自动打包相关的css
  }),
  addLessLoader({
    javascriptEnabled: true
    // modifyVars: { "@primary-color": "#1Da57A" }//改主题按钮颜色
  })
);
