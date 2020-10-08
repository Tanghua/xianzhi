// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnstate: "default",
    disabled: true,
    account: "",
    password: ""
  },

  accountInput: function(e) {
    // e 事件对象
    // e.detail 触发事件的组件对象
    var value = e.detail.value
    console.log(value)
    if (value != "") {
      this.setData({
        disabled: false, 
        btnstate: "primary",
        account: value
      })
    } else {
      this.setData({
        disabled: true,
        btnstate: "default"
      })
    }
  },

  pwBlur: function(e) {
    // e 事件对象
    // e.detail 触发事件的组件对象
    var value = e.detail.value
    console.log(value)
    if (value != "") {
      this.setData({
        disabled: false, 
        btnstate: "primary",
        password: value
      })
    } else {
      this.setData({
        disabled: true,
        btnstate: "default"
      })
    }
  },

  bindGetUserInfo: function(e) {
    console.log(e.detail.userInfo)
    if (e.detail.userInfo) {
      wx.switchTab({
        url: '../index/index',
      })
    } else {
      wx.showToast({
        title: '请先授权',
        icon: "none"
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  login: function () {
    var account = this.data.account
    var password = this.data.password
    console.log("account:", account, "password:", password)
    if (account == "admin" && password == "admin") {
      console.log("跳转页面")
      wx.switchTab({
        url: '../index/index',
      })
    } else {
      wx.showToast({
        title: '用户名或密码错误',
        icon: "none",
        duration: 2000
      })
    }
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