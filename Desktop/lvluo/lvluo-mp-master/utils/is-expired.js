/**
 * 判断当前页面数据是否已失效
 */
import { expiration } from './../config.js'

export default (page_id) => {
  let key = `${page_id}_expired`
  let now = new Date().getTime()
  let expiredTime = wx.getStorageSync(key)
  // 如果没有过期时间
  // 则设置一个
  if (!expiredTime) {
    wx.setStorage({
      key: key,
      data: now + expiration,
    })
    return false
  }

  if (now > expiredTime) {
    return true
  }
  return false
}