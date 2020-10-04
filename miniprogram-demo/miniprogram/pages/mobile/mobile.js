// pages/mobile/mobile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnstate: "default",
    disabled: true,
    number: ""
  },

  mobileBlur: function(e) {
    // e 事件对象
    // e.detail 触发事件的组件对象
    var value = e.detail.value
    if (value != "") {
      this.setData({
        disabled: false, 
        btnstate: "primary",
        number: value
      })
    } else {
      this.setData({
        disabled: true,
        btnstate: "default"
      })
    }
  },

  nextStep: function() {

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