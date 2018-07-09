// components/feed/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    displayName: {
      type: String,
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
    gotodetail:function(e){
      //  let {id}  = e.currentTarget.dataset;
      var postId = e.currentTarget.dataset.id;
      console.log("on post id is " + postId);
      console.log(e)
      wx.navigateTo({
        url: '../news/newsdetail?id='+postId,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  }
})
