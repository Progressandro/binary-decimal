/* eslint-disable */
const withPlugins = require('next-compose-plugins')
const withAntdLess = require('next-plugin-antd-less')

const pluginAntdLess = withAntdLess({
  modifyVars: {
    '@THEME--DARK': 'theme-dark'
  },
  lessVarsFilePath: './styles/variables.less'
})

module.exports = withPlugins([[pluginAntdLess]])
