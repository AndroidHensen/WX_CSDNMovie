//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      '../../assets/imgs/1.jpg',
      '../../assets/imgs/2.jpg',
      '../../assets/imgs/3.jpg'
    ]
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    that.getMovie()

  },

  //获取电影信息
  getMovie: function () {
    var that = this
    var url = "https://api.douban.com/v2/movie/in_theaters";
    var params = {
      city : "广州"
    };

    wx.request({
      url: url,
      data: params,
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
