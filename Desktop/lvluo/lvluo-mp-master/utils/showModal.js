/**
 * show modal promise
 */
let DEFAULT = {
  'title': '',
  'content': '出错啦！',
  'confirmText': '确定',
  'confirmColor': '#0aa082'
}
export default function (config = DEFAULT) {
  let _config = Object.assign({}, DEFAULT, config)
  return new Promise((resolve, reject) => {
    wx.showModal({
      ..._config,
      success: (res) => {
        if (res.confirm && _config.jumpHome) {
          wx.redirectTo({
            'url': './../index/index'
          })
        }
        resolve(res)
      },
      fail: reject
    })
  })
}
