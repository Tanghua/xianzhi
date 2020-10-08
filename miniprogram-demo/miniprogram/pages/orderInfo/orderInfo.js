// pages/orderInfo/orderInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderInfo: {
      uid: "001",
      pid: "001",
      numbers: 1000
    },
    ordetDetails: "订单详情"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var orderInfo = options.orderInfo
    console.log("onLoad orderInfo:", orderInfo)
    var object = JSON.parse(orderInfo)
    console.log("object:", object)
    var uid = object.uid
    var pid = object.pid
    var numbers = object.numbers
    this.setData({
      orderInfo: {
        uid: uid,
        pid: pid,
        numbers: numbers
      }
    })
    console.log("uid:", uid)
    wx.cloud.callFunction({
      name : "OrderInfoApi",
      data : {
        "action" : "getOrderInfoByUid",
        "uid" : uid
      }
    }).then(res => {
      console.log("callFunction OrderInfoApi getOrderInfoByUid result:", res)
      var datas = res.result.data
      if (datas != undefined && datas.length > 0) {
        var details = JSON.stringify(datas)
        this.setData({
          ordetDetails : details
        })
      }
    }).catch(err => {
      console.log("callFunction OrderInfoApi getOrderInfoByUid error:", err)
    })
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