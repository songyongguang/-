/**
 * promise style request
 */
import proxy from './proxy'

let DEFAULT_CONFIG = {
  url: '',
  method: 'GET',
  data: null,
  header: {
    'content-type': 'application/json;'
  },
  dataType: 'json'
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
    let _url = proxy(_config.url)
    for (let key in _config.data) {
      let reg = new RegExp(`:${key}`, 'gi')
      _url = _url.replace(reg, _config.data[key])
    }

    wx.request({
      url: _url,
      method: _config.method,
      data: _config.data,
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
  return function (url, data, header, dataType) {
    return new Request({
      url,
      data,
      method,
      header,
      dataType
    })
  }
}

const Fetch = {
  get: createRequest('GET'),
  post: createRequest('POST'),
  put: createRequest('PUT'),
  delete: createRequest('DELETE')
}

export default Fetch