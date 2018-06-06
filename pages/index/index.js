//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  
  onLoad: function () {
    
  },

  gotoSupport: function(e){
    wx.navigateTo({
      url: '../show/show',
    })
  },

  getUserInfo: function(e) {
    wx.navigateTo({
      url: '../show/show?img=https://mp.weixin.qq.com/wxopen/qrcode?action=download&fakeid=3853039357&token=1040002260&type=0&pixsize=224&line_r=undefined&line_g=undefined&line_b=undefined',
    })
  }
})
