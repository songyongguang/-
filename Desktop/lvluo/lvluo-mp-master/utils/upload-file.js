/**
 * promise upload file
 */

let DEFAULT_CONFIG = {
  url: '',
  method: 'POST',
  data: null,
  header: {
    'content-type': 'multipart/form-data'
  }
}

function Request(config) {
  let _config = Object.assign({}, DEFAULT_CONFIG, config)

  if (!_config.header) {
    _config.header = {}
  }

  // set Authorization
  if (!_config.header.Authorization) {
    let access_token = wx.getStorageSync('access_token')
    _config.header.Authorization = `Bearer ${access_token}`
  }

  return new Promise((resolve, reject) => {
    let _url = _config.url

    for (let key in _config.data) {
      let reg = new RegExp(`:${key}`, 'gi')
      _url = _url.replace(reg, _config.data[key])
    }

    wx.uploadFile({
      url: _url,
      filePath: _config.filePath,
      name: 'images',
      formData: _config.data,
      header: _config.header,
      success: (res) => {
        return resolve(res)
      },
      fail: (err) => {
        return reject(err)
      }
    })
  })
}

function createRequest(method) {
  return function (url, filePath, data) {
    return new Request({
      url,
      filePath,
      data
    })
  }
}

const UploadFile = {
  post: createRequest('POST')
}

export default UploadFile
