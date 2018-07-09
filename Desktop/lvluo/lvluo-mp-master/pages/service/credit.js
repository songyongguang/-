// pages/service/credit.js
import { PENDING, DEFAULT, FAIL, SUCCESS } from './../../utils/async-status.js'
import DataGet from './../../utils/data-store'

const PAGE_ID = 'page/service'
const MC_KEY = `${PAGE_ID}_MC`
const PAGE_API = '/api/page/service'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fetchStatus: DEFAULT,
    pageData: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id
    console.log(postId)
    this.setData({
      fetchStatus: PENDING
    })
    DataGet(PAGE_ID, PAGE_API).then((res) => {
      console.log('res.data', res.data)
      this.setData({
        fetchStatus: SUCCESS,
        pageData: res.data
      })
    }).catch((err) => {
      this.setData({
        fetchStatus: FAIL
      })
    })
  },

  gotoservicedetail: function (e) {
    //  let {id}  = e.currentTarget.dataset;
    var postId = e.currentTarget.dataset.id;
    console.log("on post id is " + postId);
    console.log(e)
    wx.navigateTo({
      url: '../service/servicedetail?id=' + postId,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
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
  
  }
})