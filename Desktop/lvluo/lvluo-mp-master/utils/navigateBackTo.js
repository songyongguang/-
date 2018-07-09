/**
 * 关闭当前页面，返回上一页面或多级页面
 * @param url  目标页面的绝对路径（可带参数）
 */

export default function (url) {
  let route = url.split('?')[0].replace('/', '')
  let pages = getCurrentPages().map((page) => {
    return page.route || page.__route__
  })

  let pageIndex = pages.indexOf(route)

  if (pageIndex != -1) {
    wx.navigateBack({
      delta: pages.length - pageIndex - 1
    })
  } else {
    wx.redirectTo({
      url: url
    })
  }
}
