/**
 * 获取数据
 * 1. 未过期页面直接返回 localStorage 中的数据
 * 2. 已过期页面获取新数据
 */
import isExpired from './is-expired.js'
import Fetch from './fetch.js'

export default (key, url, query, restQuery) => {
  return new Promise((resolve, reject) => {
    if (isExpired(key)) {
      return Fetch.get(url, query, restQuery)
              .then((res) => {
                let data = res.data
                let r = parseInt(data.r, 10)
                if (r === 0) {
                  wx.setStorageSync(key, data.data)
                  resolve(data)
                } else {
                  reject(res.error)
                }
              })
              .catch((err) => {
                reject(err)
              })
    } else {
      let data = wx.getStorageSync(key)
      resolve(data)
    }
  })
  
}