// components/list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: ''
    },
    category: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    item:[],
    id:"1"
  },

  /**
   * 组件的方法列表
   */
  methods: {
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
  }
})
