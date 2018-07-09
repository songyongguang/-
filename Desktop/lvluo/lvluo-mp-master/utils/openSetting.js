/**
 * 打开微信设置页面
 */
import showModal from './showModal'

let DEFAULT = {
  'title': '',
  'content': '需要您授权获取登录信息',
  'confirmText': '去设置',
}

export default (config) => {
  let _config = Object.assign({}, DEFAULT, config)

  showModal(_config).then((res) => {
    if (res.confirm) {
      wx.openSetting({
        success: (res) => {
          console.log(res)
        }
      })
    }
  })
}
