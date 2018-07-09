/**
 * json to string
 * like:
 * input:
 *  {
 *    size: 10,
 *    page: 1
 *  }
 * 
 *  return:
 *    size=10&page=1
 */
export default (data, encode, empty = false) => {
  let _data = Object.assign({}, data)

  if (empty) {
    Object.keys(_data).map((key) => {
      if (_data[key] === undefined || _data[key] === null) {
        delete _data[key]
      }
    })
  }

  let params = Object.keys(_data).map((key) => {
    if (encode) {
      return `${key}=${encodeURIComponent(_data[key])}`
    }
    return `${key}=${_data[key]}`
  }).join('&')

  return params
}