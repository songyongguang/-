// pages/service/agentinformationexpress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // age: "",
    // warn: "",
    // phone: "",
    // name: "",
    // sex: "",
    // child:"",
    array3: [
     { src: 'image/license.gif' },
     { src: 'image/cretificate.gif'},
     { src: 'image/company.gif' },
     { src: 'image/other.gif' },
    ],
    array1: [
      { src: 'image/letter.gif' },
      { src: 'image/court.gif' },
      { src: 'image/other.gif' },
    ],
     array2: [
      { src: 'image/letter.gif' },
      { src: 'image/court.gif' },
      { src: 'image/other.gif' },
    ],
    array: ['美国', '中国', '巴西', '日本'],
    sexArr:['男','女'],
    marryArr:['是','否'],
    ageArr:['18','19','20','21','22','23','24','25'],
    hasChild: ['是', '否'],
    consultFromName: ['服务', '贷款', '咨询'],
    companyIndustry:['金融','政府','软件'],
    companyLife:['10','20','30','40'],
    objectcompanyLife: [
      {
        id: 0,
        name: '10',
      },
      {
        id: 1,
        name: '20',
      },
      {
        id: 2,
        name: '30',
      },
      {
        id: 3,
        name: '40',
      }
    ],
    objectcompanyIndustry: [
      {
        id: 0,
        name: '金融',
      },
      {
        id: 1,
        name: '政府',
      },
      {
        id: 2,
        name: '咨询',
      }
    ],
    objectconsultFromName: [
      {
        id: 0,
        name: '软件',
      },
      {
        id: 1,
        name: '贷款',
      },
      {
        id: 2,
        name: '咨询',
      }
    ],
    objectageArr: [
      {
        id: 0,
        name: '18'
      },
      {
        id: 1,
        name: '19'
      },
      {
        id: 2,
        name: '20'
      },
      {
        id: 3,
        name: '21'
      },
      {
        id: 4,
        name: '22'
      },
      {
        id: 5,
        name: '23'
      },
      {
        id: 6,
        name: '24'
      },
      {
        id: 7,
        name: '25'
      }
    ],
     objectsexArr:[
        {
          id:0,
          name:'男',
        },
         {
          id: 1,
          name: '女',
        }
    ],
     objectmarryArr:[
      {
        id: 0,
        name: '是',
      },
      {
        id: 1,
        name: '否',
      }
    ],
     objecthasChild: [
       {
         id: 0,
         name: '是',
       },
       {
         id: 1,
         name: '否',
       }
     ],
    objectArray: [
      {
        id: 0,
        name: '美国'
      },
      {
        id: 1,
        name: '中国'
      },
      {
        id: 2,
        name: '巴西'
      },
      {
        id: 3,
        name: '日本'
      }
    ],
  },
  // bindPickerChange: function (e) {
  //   console.log('picker发送选择改变，携带值为', e.detail.value)
  //   this.setData({
  //     index: e.detail.value
  //   })
  // },
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  bindPickerChange3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },
  bindPickerChange4: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index4: e.detail.value
    })
  },
  bindPickerChange5: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index5: e.detail.value
    })
  },
  bindPickerChange6: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index6: e.detail.value
    })
  },
  bindPickerChange7: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index7: e.detail.value
    })
  },
  // submit:function(){
  //   wx.navigateTo({
  //     url: '../service/result',
  //     success: function(res) {},
  //     fail: function(res) {},
  //     complete: function(res) {},
  //   })
  // },
  formSubmit: function (e){
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let  { phone, name, age, sex ,child} = e.detail.value;
    if (!phone || !name) {
      wx.showModal({
        title: '提示',
        content: '您有未填写的选项',
      })
      return;
    }
    this.setData({
      phone,
      age,
      name,
      sex,
      child
    })
    wx.request({
      url: '',
      method: 'post',
      data: {
        openid: 'openid'  //这里是发送给服务器的参数（参数名：参数值）  
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      success: function (res) {
        that.setData({ //这里是修改data的值  
          test: res.data //test等于服务器返回来的数据  
        });
        console.log(res.data)
      }  

    })

  },
  chooseImg:function(){
     wx.navigateTo({
       url: '../service/uploadphoto',
       success: function (res) { },
       fail: function (res) { },
       complete: function (res) { },
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
  onShareAppMessage: function () {
  
  }
})