// pages/service/uploadphoto.js

var adds = {};  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true,
    chooseFiles: [
    ],
  },
  chooseImg:function(){
    // wx.showActionSheet({
    //   itemList: ['拍照', '从手机相册选择'],
    //   success: function (res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail: function (res) {
    //     console.log(res.errMsg)
    //   }
    // })
    var imgArr=this.data.chooseFiles;
    var leftCount=6-imgArr.length;
    if(leftCount<=0){
      return;
    }
    var that=this;
    wx.chooseImage({
      count:leftCount,//选取图片的数量
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
      var tempFilePaths = res.tempFilePaths //存放图片的位置
       that.setData({
         chooseFiles:imgArr.concat(res.tempFilePaths)
       });
      //  console.log(res.tempFilePaths)
       console.log(imgArr.concat(res.tempFilePaths))
       wx.setStorage({ key: "card", data: tempFilePaths[0] })
      },
    })
  },
  previewImg: function (e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    //所有图片
    var chooseFiles = this.data.chooseFiles;
    wx.previewImage({
      //当前显示图片
      current: chooseFiles[index],
      //所有图片
      urls: chooseFiles
    })
  },
  // 删除图片
  deleteImg: function (e) {
    var chooseFiles = this.data.chooseFiles;
    var index = e.currentTarget.dataset.index;
    chooseFiles.splice(index, 1);
    this.setData({
      chooseFiles: chooseFiles
    });
  },
  formSubmit:function(e){
    adds = e.detail.value; 
    this.upload()  
  },
  upload: function () {
    var that = this
    for (var i = 0; i < this.data.chooseFiles.length; i++) {
      console.log(this.data.chooseFiles)
      wx.uploadFile({
        url: 'https://www.baidi.com',
        filePath: that.data.chooseFiles[i],
        name: 'content',
        formData: adds,
        success: function (res) {
          console.log(res)
          if (res) {
            wx.showToast({
              title: '已提交发布！',
              duration: 3000
            });
          }
        }
      })
    }
    this.setData({
      formdata: ''
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  
  }
})