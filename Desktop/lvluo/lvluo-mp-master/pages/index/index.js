// pages/index/index.js
import { PENDING, DEFAULT, FAIL, SUCCESS } from './../../utils/async-status.js'
import DataGet from './../../utils/data-store'

const PAGE_ID = 'page/index'
const MC_KEY = `${PAGE_ID}_MC`
const BANNER_API = '/lvluo-api/v1/index/banner'
const SERVICE_API = '/lvluo-api/v1/index/service'
const NEWS_API = '/lvluo-api/v1/index/news'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    fetchStatus: DEFAULT,
    banner: null,
    serivce: null,
    news: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      fetchStatus: PENDING
    })
    // 加载 banner
    DataGet(`${PAGE_ID}/banner`, BANNER_API)
      .then((res) => {
        this.setData({
          banner: res.data,
          fetchStatus: SUCCESS
        })
      })
      .catch((err) => {
        console.error(err)
      })
    // 加载 service
    DataGet(`${PAGE_ID}/service`, SERVICE_API)
      .then((res) => {
        this.setData({
          service: res.data,
          fetchStatus: SUCCESS
        })
      })
      .catch((err) => {
        console.error(err)
      })

    // 加载 news
    DataGet(`${PAGE_ID}/news`, NEWS_API)
      .then((res) => {
        this.setData({
          news: res.data,
          fetchStatus: SUCCESS
        })
      })
      .catch((err) => {
        console.error(err)
      })
  },

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

  /**
   * 加载数据
   */
  fetchData: function () {

  }
})
