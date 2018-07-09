// components/banner/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    displayName: {
      type: "string",
      value: ''
    },
    data: {
      type: Array,
      value: []
    }
  },
   
  /**
   * 组件的初始数据
   */
  data: {
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    goto: function () {
      wx.navigateTo({
        url: '../contact/joinus',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
  },
})
