/**
 * promise style storage
 */

export default function(method, key, value = null) {
  return new Promise((resolve, reject) => {
    if (method === 'get') {
      return wx.getStorage({
        'key': key,
        'success': resolve,
        'fail': reject
      })
    } else if (method === 'set') {
      return wx.setStorage({
        'key': key,
        'data': value,
        'success': resolve,
        'fail': reject
      })
    }
  })
}
