

let DEV = true
let DEV_SERVE = 'http://47.104.150.10:8080'

export default (url) => {
  if (!DEV) {
    return url
  }
  return `${DEV_SERVE}${url}`
}
