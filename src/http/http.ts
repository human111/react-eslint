// import axios from 'axios'
// import { stringify } from 'qs'
// import store from '../store'
// import { messageBox, toast, loading } from '@/utils/popups'
// import { login, popWindow } from './app'

// axios.defaults.timeout = 8000

// // 应用请求参数模板，适用于post请求
// function applyDataTemplate (data = {}) {
//   const baseInfo = store.state.baseInfo
//   const template = {
//     token: baseInfo.token,
//     memberId: baseInfo.memberId,
//     channel: 'APP',
//     deviceId: baseInfo.deviceId,
//     versionCode: baseInfo.versionCode,
//     versionName: baseInfo.versionName,
//     sysVersion: baseInfo.versionCode,
//     timestamp: new Date().getTime(),
//     platform: 'h5',
//     osName: /iphone|ipad|ipod|ios/i.test(navigator.userAgent) ? 'iOS' : 'Android',
//     model: data
//   }
//   return { data: JSON.stringify(template) } // 服务端接受格式要求
// }

// /**
//  * 基于axios的请求方法封装
//  * 默认: 使用POST请求方式、套用参数模板格式、统一拦截处理异常code
//  *
//  * @param {string} url 接口
//  * @param {object} options 配置
//  * @param {string} [options.method] - 请求方式，默认post
//  * @param {object} [options.params] - 请求params参数
//  * @param {object} [options.data] - 请求data参数
//  * @param {object} [options.headers] - 请求头配置
//  * @param {object} [options.responseType] - 请求返回数据的格式
//  * @param {boolean} [options.useDataTemplate] - 套用请求参数模板
//  * @param {boolean} [options.isDataNullable] - 请求成功，返回数据中的data或model字段为null。resolve(null) 仅为兼容老接口
//  * @param {object|string} [options.exceptionHandle] - 异常拦截配置: 'skip'-全部不统一拦截处理，'silent'-全部静默无需处理，对象格式配置见下方example
//  * @param {boolean} [options.showLoading] - 自动显示loading，true-显示[默认]，false-不显示
//  *
//  * @returns {Promise<any>}
//  *
//  * @example
//  * request('/data/api/path', {
//  *   data: {},
//  *   useDataTemplate: false,
//  *   exceptionHandle: {
//  *       8801: 'messageBox', // 使用messageBox提示
//  *       8802: 'skip',       // 不拦截处理8802
//  *       2023: 'silent'      // 静默无需处理
//  *   },
//  *   isDataNullable: true
//  * })
//  */
// function request (url, options = {}) {
//   let {
//     method = 'POST',
//     useDataTemplate = true,
//     exceptionHandle = {},
//     showLoading = true,
//     isDataNullable = false
//   } = options

//   // 没有特殊配置，则自动显示加载中loading
//   if (showLoading) {
//     loading(true)
//   }

//   return new Promise((resolve, reject) => {
//     axios({
//       url: url,
//       method: method,
//       responseType: options.responseType || 'json',
//       headers: options.headers || { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
//       params: options.params,
//       data: options.data,
//       transformRequest: [
//         data => (useDataTemplate ? applyDataTemplate(data) : data), // 应用请求参数模板
//         data => (options.headers ? data : stringify(data)) // 无自定义头部，默认对参数序列化为查询字符串
//       ]
//     })
//       .then(response => {
//         const code = response.data.code

//         const isSkipCode = exceptionHandle === 'skip' || exceptionHandle[code] === 'skip'
//         const isSuccess = code === 0 || code === '000000' // 散标订单中成功的code码：'000000'

//         /**
//          * 自动隐藏loading规则
//          * 配置项exceptionHandle里，设置为允许通过的异常code，则不自动隐藏，交由业务场景控制
//          */
//         if (!isSkipCode || isSuccess) {
//           loading(false)
//         }

//         if (isSuccess) {
//           /**
//            * 请求正常
//            */
//           if (response.data.model || response.data.data) {
//             resolve(response.data.model || response.data.data)
//           } else if (isDataNullable) {
//             resolve({})
//           } else {
//             toast({ type: 'fail', message: '数据异常请稍后再试！' })
//           }
//         } else if (exceptionHandle === 'skip') {
//           /**
//            * 允许所有异常code通过:
//            * exceptionHandle: 'skip'
//            */
//           reject(response.data)
//         } else if (exceptionHandle === 'silent') {
//           /**
//            * 所有异常code静默:
//            * exceptionHandle: 'silent'
//            */
//           console.log(`[request] 已配置所有异常静默 ${code}: ${response.data.message}`)
//         } else if (~Object.keys(exceptionHandle).indexOf(code.toString())) {
//           /**
//            * 单个异常code的配置:
//            * exceptionHandle: {
//            *     9999: 'messageBox', // 使用messageBox弹窗提示
//            *     8888: 'skip',       // 不拦截处理
//            *     7777: 'silent'      // 静默无需处理
//            * }
//            */
//           if (exceptionHandle[code] === 'messageBox') {
//             messageBox(response.data.message).finally()
//           } else if (exceptionHandle[code] === 'skip') {
//             reject(response.data)
//           } else if (exceptionHandle[code] === 'silent') {
//             console.log(`[request] 已配置当前code静默 ${code}: ${response.data.message}`)
//           }
//         } else if (code === 2023 || code === 2030 || code === '200101' || code === '200102') {
//           /**
//            * 统一处理账号超时、被踢
//            *  2023-您的登录信息已过期，请重新登录
//            *  2030-账号在另一个设备上进行登录
//            */
//           messageBox(response.data.message)
//             .then(login)
//             .then(() => window.location.reload())
//             .catch(() => popWindow())
//         } else {
//           /**
//            * 通用异常处理方式：toast提示
//            */
//           toast({ type: 'fail', message: response.data.message })
//         }
//       })
//       .catch(error => {
//         loading(false)
//         let message
//         switch (error.response && error.response.status) {
//           case 403: message = '请求接口太快请稍后再试！'
//             break
//           case 404: message = '服务异常请稍后再试！'
//             break
//           default: message = '网络异常请稍后再试！'
//         }

//         if (exceptionHandle === 'skip') {
//           reject({ code: -999, message }) // eslint-disable-line
//         } else if (exceptionHandle === 'silent') {
//           console.log(`[request] 已配置所有异常静默 -999: ${message}`)
//         } else {
//           toast({ type: 'fail', message })
//         }
//       })
//   })
// }

// /**
//  * https://github.com/scopsy/await-to-js
//  * 包装请求请求promise返回数据的格式：[正常数据，异常数据]
//  * 适用于async/await形式的写法，可以避免使用try catch处理异常返回的数据
//  * @param promise
//  * @returns {Q.Promise<*[]>}
//  */
// const to = promise => {
//   return promise.then(data => [data, null]).catch(err => [undefined, err])
// }

// /**
//  * Post请求
//  * 返回数据格式经过to方法处理
//  */
// function fetch (url, options = {}) {
//   return to(request(url, options))
// }

// /**
//  * Get请求
//  * 返回数据格式经过to方法处理
//  */
// function fetchGet (url, params, options = {}) {
//   options.method = 'GET'
//   options.params = params
//   return to(request(url, options))
// }

// /**
//  * Post请求
//  * 返回数据格式经过to方法处理
//  */
// function fetchPost (url, data, options = {}) {
//   options.method = 'POST'
//   options.data = data
//   return to(request(url, options))
// }

// /**
//  * Post请求
//  * 适用于Promise().then().catch()形式的写法、以及用于Promise.all()
//  */
// function rawFetch (url, options = {}) {
//   return request(url, options)
// }

// /**
//  * Get请求
//  * 适用于Promise().then().catch()形式的写法、以及用于Promise.all()
//  */
// function rawFetchGet (url, params, options = {}) {
//   options.method = 'GET'
//   options.params = params
//   return request(url, options)
// }

// /**
//  * Post请求
//  * 适用于Promise().then().catch()形式的写法、以及用于Promise.all()
//  */
// function rawFetchPost (url, data, options = {}) {
//   options.method = 'POST'
//   options.data = data
//   return request(url, options)
// }

// function install (Vue) {
//   Vue.prototype.$fetch = fetch
//   Vue.prototype.$fetchGet = fetchGet
//   Vue.prototype.$fetchPost = fetchPost

//   Vue.prototype.$rawFetch = rawFetch
//   Vue.prototype.$rawFetchGet = rawFetchGet
//   Vue.prototype.$rawFetchPost = rawFetchPost
// }

// export default { install }
