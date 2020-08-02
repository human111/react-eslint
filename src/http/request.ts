// axios请求封装
import axios, { AxiosRequestConfig } from 'axios'

// interface IRequestOptions extends AxiosRequestConfig {
//   passCodes?: (number | string)[] | 'all' // 不拦截处理
//   showLoading?: boolean
// }
// import { JFAccount, JFNetFetch, JFPrompt, JFNavigation, JFContext } from '@/native'

// const { commonReqInfo } = JFNetFetch
const commonReqInfo = {
  platform: '',
  memberId: '',
  token: ''
}

let isDuringLogin = false // 当前是否处于登录流程中

// 服务端接口数据结构
export interface IServerResult<T = any> {
  code: string | number
  data?: T
  message: string
  model?: T
}

axios.interceptors.response.use(
  (response) => {
    log(response)
    return response
  },
  (error) => {
    log(error)
    return error
  }
)

/**
 * 应用请求参数模板
 */
async function applyDataTemplate(data?: object): Promise<string> {
  const baseData = commonReqInfo

  return `data=${JSON.stringify({
    ...baseData,
    model: {
      ...data,
      memberId: baseData.memberId,
      token: baseData.token
    }
  })}`
}

/**
 * 基本网络请求 无封装业务常用场景 如：loading、异常拦截
 * @param url 接口地址
 * @param data 接口参数
 * @param options 请求配置
 */
async function request<T>(url: string, data: object = {}, options: AxiosRequestConfig = {}): Promise<T> {
  const {
    method = 'post',
    timeout = 15000,
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  } = options

  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      timeout,
      headers,
      data: method === 'post' ? applyDataTemplate(data) : data
    })
      .then((response) => {
        const res = response.data
        const dataModel = res.model || res.data

        if (res.code !== '000000' && res.code !== 0) {
          reject(res)
        } else if (dataModel) {
          resolve(dataModel)
        } else {
          reject({ code: -999, message: '数据异常请稍后再试！' })
        }
      })
      .catch(() => {
        reject({ code: -1000, message: '网络异常请稍后再试！' })
      })
  })
}

/**
 * 网络请求的异常监听，一般配合request方法使用
 * @param requestHandler 请求执行方法
 * @param errorHandler 请求异常处理方法，return true 标识已处理无需统一处理
 */
function exceptionMonitor(
  requestHandler: () => Promise<void>,
  errorHandler?: (error: IServerResult) => boolean | undefined | void
): void {
  const executor = async (): Promise<void> => {
    try {
      await requestHandler()
    } catch (error) {
      if (!errorHandler || !errorHandler(error)) {
        // 未设置errorHandler || errorHandler执行后返回了假值（理解为异常未被处理，需统一处理）
        commonErrorHandler(error, executor)
      }
    }
  }
  executor()
}

/**
 * 工具方法：包装promise返回数据的格式至：[异常数据,正常数据]
 * 适用于async/await形式的写法，可以避免使用try catch处理异常返回的数据
 * @borrows https://github.com/scopsy/await-to-js
 */
async function awaitTo<T>(promise: Promise<T>): Promise<[IServerResult<T> | null, T]> {
  try {
    const data = await promise
    return [null, data]
  } catch (err) {
    return [err, (undefined as unknown) as T]
  }
}

// 公共异常处理
function commonErrorHandler(result: IServerResult, loginCallback?: () => void): void {
  const { code, message } = result

  if (code === 2023 || code === 2030 || code === '200101' || code === '200102') {
    /**
     * 弹窗提示登录，当处理token超时、失效
     * 2023 / '200101' 您的登录信息已过期，请重新登录
     * 2030 / '200102' 账号在另一个设备上进行登录
     */
    if (isDuringLogin) return
    isDuringLogin = true
    executeLogin()

    // JFAccount.clearToken()

    // JFPrompt.messageBox({
    //   message,
    //   buttons: [
    //     {
    //       text: '我知道了',
    //       onPress: executeLogin
    //     }
    //   ]
    // })
  } else {
    // 通用异常处理方式：toast提示
    // JFPrompt.toast(message)
  }

  function executeLogin(): void {
    const aa: AxiosRequestConfig = {}
    console.log('=======executeLogin===', message, aa)
    if (loginCallback) {
      loginCallback()
    }
    // JFContext.executeLogin()
    //   .then(() => {
    //     isDuringLogin = false
    //     if (loginCallback) {
    //       loginCallback()
    //     }
    //   })
    //   .catch(() => {
    //     isDuringLogin = false
    //     JFNavigation.pop()
    //   })
  }
}

// 打印网络请求日志
function log(result: any): void {
  // if (!__DEV__) return

  // eslint-disable-next-line no-console
  console.log(`
[9F-WALLET-RN]
[接口] ${result.config.url}
[参数] ${result.config.data}
[状态] ${JSON.stringify(result.status || result.response.status)}
[数据] ${JSON.stringify(result.data || result.response.data)}
  `)
}

export default {
  request,
  exceptionMonitor,
  fetch,
  awaitTo,
  commonErrorHandler
}
