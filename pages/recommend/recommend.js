// recommend.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMovie();
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


  //获取电影信息
  getMovie: function () {
    var that = this
    var url = "https://api.douban.com/v2/movie/top250";
    wx.request({
      url: url,
      header: {
        "content-type": "json"
      },
      success: function (res) {
        that.setData({
          subjects: res.data.subjects
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  //跳转页面
  go2Detail: function (event) {
    app.go2Detail(event)
  }

})