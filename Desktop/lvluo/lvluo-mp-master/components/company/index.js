// components/company/index.js
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
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    image: [{ photo: "./image/introduce.png" }, { photo: "./image/introduce.png" }, { photo: "./image/introduce.png" }, { photo: "./image/introduce.png" }]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
