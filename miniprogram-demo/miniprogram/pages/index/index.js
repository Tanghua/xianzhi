// pages/index/index.js
import { IndexModel } from "../../models/IndexModel.js"
let indexModel = new IndexModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //自动轮播
    interval: 3000, // 自动切换时间间隔
    duration: 1000, // 滑动动画时长
    circular: true,//是否采用衔接滑动 
    /** 
    themes: [
      { theme_icon: 'images/theme@1.png', theme_name: '新品糖果', theme_type: 1 },
      { theme_icon: 'images/theme@2.png', theme_name: '精品果干', theme_type: 2 },
      { theme_icon: 'images/theme@3.png', theme_name: '美味坚果', theme_type: 3 },
      { theme_icon: 'images/theme@4.png', theme_name: '优质推荐', theme_type: 4 },
    ],
    */
    themes: [
      { theme_icon: 'images/theme@1.png', theme_name: '鸭苗', theme_type: 1 },
      { theme_icon: 'images/theme@2.png', theme_name: '饲料', theme_type: 2 },
      { theme_icon: 'images/theme@3.png', theme_name: '禽具', theme_type: 3 },
    ],
    banners: [
      { image: "images/001.png", product_id: 1},
      { image: "images/002.png", product_id: 2}
    ],
    products: [
      { product_name: "一日龄出壳苗 大种白番鸭苗", 
        product_img: "../../pages/index/images/003.png", 
        product_price: "5", 
        birth_time: "2020/07/12", 
        supplier_name: "蒋国强孵化厂", 
        supplier_address: "铅山/上饶/江西",
        sales_details: "10000人已付款"
      },
      { product_name: "一日龄出壳苗 麻鸭苗", 
        product_img: "../../pages/index/images/003.png", 
        product_price: "10", 
        birth_time: "2020/07/17", 
        supplier_name: "蒋国强孵化厂", 
        supplier_address: "铅山/上饶/江西",
        sales_details: "10000人已付款"
      }
    ],
    isSearch: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._init()
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

  },
  themeNavigation: function (event) {
    let theme_type = indexModel.getDataSet(event, "themetype")
    /**
    wx.navigateTo({
      url: '../theme/theme?theme_type=' + theme_type,
    })
    */
    if (theme_type == 1) {
      this.data.isSearch = false
      this.setData({
        isSearch: this.data.isSearch
      })
      console.log('isSearch', this.data.isSearch)
    } else {
      this.data.isSearch = true
      this.setData({
        isSearch: this.data.isSearch
      })
      console.log('isSearch', this.data.isSearch)
    }
    console.log('themeNavigation......', event, theme_type)
  },
  _init: function () {
    //轮播图
    indexModel.getBanner(res => {
      this.setData({
        banners: res.result.data.data
      })
    })
    // 主题
    indexModel.getTheme(res => {
      this.setData({
        themes: res.result.data.data
      })
    })
    // 最新商品
    indexModel.getProductNew(res => {
      this.setData({
        products: res.result.data.data
      })
    })
    this.setData({
      isSearch: this.data.isSearch
    })
  },
  // 跳转商品详情
  productDetails: function (event) {
    this._navProductDetail(event.detail.productId)
  },
  productBanner: function (event) {
    let product_id = indexModel.getDataSet(event, "productid")
    this._navProductDetail(product_id)
  },
  // 跳转详情
  _navProductDetail: function (product_id) {
    wx.navigateTo({
      url: '/pages/product/product?product_id=' + product_id,
    })
  }
})