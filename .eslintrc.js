module.exports = {
  // ...其他配置项
  extends: [
    // ...其他扩展
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: [
    // ...其他插件
    "react",
    "react-hooks",
  ],
  rules: {
    // ...其他规则
    "react/prop-types": "off", // 如果您使用 TypeScript，可以关闭 prop-types 检查
    // ...其他规则
  },
  settings: {
    react: {
      version: "detect", // 自动检测 React 的版本
    },
  },
};
