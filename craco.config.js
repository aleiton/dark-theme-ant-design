const { getThemeVariables  } = require('antd/dist/theme');
const CopyPlugin = require("copy-webpack-plugin");
const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack: {
    plugins: {
      add: [
        new CopyPlugin({
          patterns: [
            { from: "./node_modules/antd/dist/ant.less", to: "./public/light-theme.less" },
            { from: "./node_modules/antd/dist/ant.dark.less", to: "./public/dark-theme.less" },
          ],
        }),
      ]
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1DA57A',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
