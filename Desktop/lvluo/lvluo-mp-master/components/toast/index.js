let timer = null

Component({
  behaviors: [],
  properties: {
    visible: {
      type: Boolean,
      value: false,
      observer: '_visibleChange'
    },
    message: {
      type: String,
      value: ''
    },
    status: {
      type: String,
      value: 'success' // 暂时只支持 success|warn
    },
    duration: {
      type: Number,
      value: 1000
    },
    theme: {
      type: String,
      value: 'light' // 暂时只支持 dark
    },
    externalClasses: {
      type: String,
      value: ''
    }
  },
  data: {},
  methods: {
    _visibleChange() {
      let { visible, duration } = this.data

      if (visible && !this.timer) {
        this.timer = setTimeout(() => {
          this.setData({
            visible: !visible
          })
        }, duration)
      }

      if (!visible) {
        this.triggerEvent('afterHandle')
        clearTimeout(this.timer)
        this.timer = null
      }
    }
  },
  created() { },
  attached() { },
  ready() { },
  moved() { },
  detached() { },
})


