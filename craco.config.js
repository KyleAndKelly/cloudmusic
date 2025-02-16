const path = require("path");
const CracoLessPlugin = require("craco-less");

module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: { "@primary-color": "#1DA57A" }, // 自定义主题颜色（可选）
          },
        },
      },
    },
  ],
};
