// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product_id : "000",

    product: { 
      product_id: 1,
      product_name: "一日龄出壳苗 大种白番鸭苗", 
      product_img: "../../pages/index/images/003.png", 
      product_price: "5", 
      product_unit: "/只",
      birth_time: "2020/07/12", 
      supplier_name: "蒋国强孵化厂", 
      supplier_address: "铅山/上饶/江西",
      sales_details: "10000人已付款"
    }
    
  },

  buyNow: function(e) {
    wx.navigateTo({
      url: '../order/order?productId=' + this.data.product.product_id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      product_id: options.product_id
    })
    wx.cloud.callFunction({
      name: 'ProductInfoApi',
      data: {
        "action": "getProductInfoByPid",
        "pid": this.data.product_id
      },
    }).then(res => {
      console.log("callFunction ProductInfoApi getProductInfoByPid res:", res)
      if (res.result.data == undefined) {
        return
      }
      var data = res.result.data[0]
      console.log("data:", data)
      var object = Object()
      object.product_id = data.productId
      object.product_name = data.productDetail + " " + data.productName
      object.product_img = "../../pages/index/images/003.png"
      object.product_price = data.productPrice
      var curType = data.productType
      if (curType == "鸭苗") {
        object.product_unit = "/只"
      } else if(curType == "饲料") {
        object.product_unit = "/斤"
      } else if(curType == "禽具") {
        object.product_unit = ""
      }
      object.birth_time = data.birthTime
      object.supplier_name = data.supplierName
      object.supplier_address = data.supplierAddress
      object.sales_details = data.productStock
      this.setData({
        product: object
      })
      console.log("setProduct:", this.data.product)
    }).catch(err => {
      console.log("callFunction ProductInfoApi error:", err)
    })
    console.log("product_id", this.data.product_id)
  },
/*  */
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