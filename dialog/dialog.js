// components/placeholder/placeholder.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    _onDialogClose: function (e) {
      this.hide();
    },

    show: function () {
      this._baseDialog.showDialog();
    },

    hide: function () {
      this._baseDialog.hideDialog();
    },
    isShow: function () {
      return this._baseDialog.isShow();
    }
  },

  ready: function () {
    this._baseDialog = this.selectComponent("#baseDialog");
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
});
