// pages/index/index.js
import { PENDING, DEFAULT, FAIL, SUCCESS } from './../../utils/async-status.js'
import DataGet from './../../utils/data-store'

// const PAGE_ID = 'page/service'
// const MC_KEY = `${PAGE_ID}_MC`
// const PAGE_API = '/api/page/index'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    fetchStatus: DEFAULT,
    pageData: null,
    displayName:"公司宣传"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
       fetchStatus: PENDING
    })
    //API数据的引用
    // DataGet(PAGE_ID, PAGE_API).then((res) => {
    //   console.log('res.data', res.data)
    //   this.setData({
    //     fetchStatus: SUCCESS,
    //     pageData: res.data
    //   })
    // }).catch((err) => {
    //   this.setData({
    //     fetchStatus: FAIL
    //   })
    // })
    wx.request({
      url: 'http://47.104.150.10:8080/lvluo-api/v1/index/banner',
      header: { 
        'Content-Type': 'application/json'
      },
      data: {//这里写你要请求的参数
        // categoryType:"",
        // coverImage:"",
        // id:"",
        // name:""
      },

      success: function (res) {
        //这里就是请求成功后，进行一些函数操作
        fetchStatus: SUCCESS
        pageData: res.data.data.data,
        console.log(res.data.data.data)
      }
    })
    wx.request({
      url: 'http://47.104.150.10:8080/lvluo-api/v1/index/news',
      header: {
        'Content-Type': 'application/json'
      },
      data: {//这里写你要请求的参数
        // categoryType:"",
        // coverImage:"",
        // id:"",
        // name:""
      },

      success: function (res) {
        //这里就是请求成功后，进行一些函数操作
        fetchStatus: SUCCESS
        pageData: res.data.data.data,
          console.log(res.data.data.data)
      }
    })
    wx.request({
      url: 'http://47.104.150.10:8080/lvluo-api/v1/index/service',
      header: {
        'Content-Type': 'application/json'
      },
      data: {//这里写你要请求的参数
        // categoryType:"",
        // coverImage:"",
        // id:"",
        // name:""
      },

      success: function (res) {
        //这里就是请求成功后，进行一些函数操作
        fetchStatus: SUCCESS
        pageData: res.data.data.data,
          console.log(res.data.data.data)
      }
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
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete

      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    setTimeout(() => {
      this.setData({
        isHideLoadMore: false,
        recommends: [
          
          
         
        ],
      })
    }, 1000)
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