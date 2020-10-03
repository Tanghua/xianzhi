// pages/company/company.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnstate: "default",
    disabled: true,
    account: ""
  },

  accountBlur: function(e) {
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

  formSubmit: function(e){
    var user = new Object()
    //通过匹配input.name属性获取value
    user.loginName = e.detail.value.loginName
    user.password = e.detail.value.password
    user.company = e.detail.value.company
    user.userName = e.detail.value.userName
    user.code = e.detail.value.code
    user.mobile = e.detail.value.mobile
    user.switchs = e.detail.value.switch

    console.log("user", user)

    // 存储到本地 Storage
    wx.setStorageSync('user', user)

    // 信息提示框
    wx.showToast({
      title: '注册成功',
      icon: "success",
      duration: 2000,
      success: function() {
        wx.navigateTo({
          url: '../login/login',
        })
      }
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