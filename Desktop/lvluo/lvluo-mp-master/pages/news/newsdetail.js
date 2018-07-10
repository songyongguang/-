// pages/news/newsdetail.js
import { PENDING, DEFAULT, FAIL, SUCCESS } from './../../utils/async-status.js'
import DataGet from './../../utils/data-store'

const PAGE_ID = 'page/news'
const MC_KEY = `${PAGE_ID}_MC`
const NEWS_API = '/lvluo-api/v1/index/news'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    fetchStatus: DEFAULT,
    news: null
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id;
    console.log(postId)
    this.setData({
      fetchStatus: PENDING
    })
    // api数据 的调用
    DataGet(`${PAGE_ID}/news`, NEWS_API)
      .then((res) => {
        this.setData({
          news:res.data,
          fetchStatus: SUCCESS
        })
        console.log(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  },
  // URI: /v1/api / news / type 使用这个api
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  fetchData: function () {

  }
})