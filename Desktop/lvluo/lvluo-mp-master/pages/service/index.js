// pages/service/index.js
import { PENDING, DEFAULT, FAIL, SUCCESS } from './../../utils/async-status.js'
import DataGet from './../../utils/data-store'

const PAGE_ID = 'page/service'
const MC_KEY = `${PAGE_ID}_MC`
const PAGE_API = '/api/page/server'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    fetchStatus: DEFAULT,
    pageData: null,
    "img": [
      {
        "id": 1,
        "categoryType": {
          "name": "法律咨询"
        },

        "coverImage": 'image/photo1.png'
      },
      {
        "id": 2,
        "categoryType": {
          "name": "法律咨询2"
        },
        "coverImage": 'image/photo2.png'
      },
      {
        "id": 3,
        "categoryType": {
          "name": "法律咨询3"
        },
        "coverImage": 'image/photo3.png'
      }
    ]
  },
  information:function(){
    wx.navigateTo({
      url: '../service/informationexpress',
      success: function(res) {
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  server: function (e) {
    //  let {id}  = e.currentTarget.dataset;
    var postId = e.currentTarget.dataset.id;
    console.log("on post id is " + postId);
    console.log(e)
    wx.navigateTo({
      url: '../service/credit?id=' + postId,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // server1:function(){
  //   wx.navigateTo({
  //     url: '../service/credit',
  //     success: function(res) {},
  //     fail: function(res) {},
  //     complete: function(res) {},
  //   })
  // },
  // server2: function () {
  //   wx.navigateTo({
  //     url: '',
  //     success: function (res) { },
  //     fail: function (res) { },
  //     complete: function (res) { },
  //   })
  // },
  // server3: function () {
  //   wx.navigateTo({
  //     url: '',
  //     success: function (res) { },
  //     fail: function (res) { },
  //     complete: function (res) { },
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    var that=this 
    wx.login({
     success:function(){
       wx.getUserInfo({
         success:function(res){
           var user=res.userInfo;
           that.setData({
             userInfo:user
           })
         }
       })
     }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.userInfo)
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