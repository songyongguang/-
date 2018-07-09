/**
 * 给 url 添加 params
 */
import { getQuery } from './url-parse'
import json2string from './json2string'

export default function (url, params) {
  if (!url) {
    return ''
  }
  let origin = url.split('?').shift()
  let exist = getQuery(url)
  let new_params = Object.assign({}, exist, params)
  return `${origin}?${json2string(new_params)}`
}