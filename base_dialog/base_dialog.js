// components/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showClose: {
      type: Boolean,
      value: false
    },
    closeText: {
      type: String,
      value: "点击关闭"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false
  },

  hideCallback: null,

  /**
   * 组件的方法列表
   */
  methods: {
    setShowClose: function (show) {
      this.setData({
        showClose: show
      });
    },

    showDialog: function () {
      this.setData({
        show: true
      });
    },
    hideDialog: function () {
      this.setData({
        show: false
      });

      if (this.hideCallback != null) {
        this.hideCallback();
      }
    },
    isShow: function () {
      return this.data.show;
    },
    isShowClose: function () {
      return this.data.showClose;
    },
    _onCloseTap: function (e) {
      this.triggerEvent("dialog_close", e.detail);
    },
    _onBgTap: function (e) {
      this.triggerEvent("touchEdge", e.detail);
    },
    move: function () {
      // console.log("用来阻止事件传递");
    },

    setHideCallback: function (callback) {
      this.hideCallback = callback;
    }
  }
});