
let DEV = true
let DEV_SERVE = 'http://localhost:3000'

export default (url) => {
  if (!DEV) {
    return url
  }
  return `${DEV_SERVE}${url}`
}