'use strict';

const path = require('path')

const projectPath = '/bfe/9f-app/fusion-core' // 项目gitlab路径，以此为资源的访问路径

const target = process.env.npm_config_target // production、beta、gray、alpha、test0-9
const prefix = target === 'production' ? '' : target
const protocol = ~['production', 'beta', 'gray'].indexOf(target) ? 'https:' : 'http:'

const needProxy = false

const host = {
  dev: {
    apiHost   : needProxy ? '/apiHost' : `https://api3.9f.cn`,
    sbApiHost : needProxy ? '/sbApiHost' : `https://sanbiao.9f.cn`,
    htmlHost  : `http://test1h5.9f.cn`,
    assetsHost: `http://test1static.9f.cn`
  },
  build: {
    apiHost   : `${protocol}//${prefix}api3.9f.cn`,    // api域名
    sbApiHost : `${protocol}//${prefix}sanbiao.9f.cn`, // 散标api域名
    htmlHost  : `${protocol}//${prefix}h5.9f.cn`,      // html访问域名
    assetsHost: `${protocol}//${prefix}static.9f.cn`   // CDN静态资源访问域名
  }
}

module.exports = {
  dev: {
    assetsPublicPath: '/',

    port: 9900,

    proxyTable: {
      '/apiHost': {
        target: 'https://api3.9f.cn',
        changeOrigin: true,
        pathRewrite: { '^/apiHost': '' }
      },
      '/sbApiHost': {
        target: 'https://sanbiao.9f.cn',
        changeOrigin: true,
        pathRewrite: { '^/sbApiHost': '' }
      }
    },

    env: {
      HOST: JSON.stringify(host.dev),
      TARGET: JSON.stringify('development')
    }
  },

  build: {
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsPublicPath: (target === 'production' ? host.build.assetsHost : host.build.htmlHost) + projectPath + '/',
    // assetsPublicPath: '/',

    // View the bundle analyzer report after build finishes by `npm run pro --report`
    bundleAnalyzerReport: process.env.npm_config_report,

    env: {
      HOST: JSON.stringify(host.build),
      TARGET: JSON.stringify(target)
    }
  }
}
