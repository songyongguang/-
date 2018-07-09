/**
 * get url query
 */
import json2string from './json2string'

export const getQuery = function (url, name) {
  let query = url.indexOf('?') > 0 ? url.split('?').pop() :
                                     (window ? window.location.search.substring(1) : '')
  let vars = query.split('&')
  let result = {}

  for (let i = 0, len = vars.length; i < len; i++) {
    let pair = vars[i].split('=');
    if (name && pair[0] === name) {
      return pair[1]
    }
    if (pair[0]) {
      result[pair[0]] = pair[1]
    }
  }

  if (name && !Object.keys(params).includes(name)) {
    return null
  }

  return result
}


export const getQueryPageUrl = function (redirect) {
  let page = getCurrentPages().reverse().find((item) => {
    return `/${item.route}` === redirect
  })

  if (page) {
    let opt = Object.keys(page.options)
    if (opt.length !== 0) {
      return `${redirect}?${json2string(page.options)}`
    }
  }

  return redirect
}
