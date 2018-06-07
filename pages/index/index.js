//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    images:[{imgUrl:''}]
  },
  
  onLoad: function () {
    this.setData({ images: [{ imgUrl: 'http://www.gzsghj.gov.cn/Uploads/Editor/2017-10-17/59e5bdcce1235.jpg' }, { imgUrl: 'http://www.gzsghj.gov.cn/Uploads/Editor/2017-10-17/59e5bdb394cdf.jpg' }, { imgUrl:'http://www.gzsghj.gov.cn/Uploads/Editor/2017-10-17/59e5bd9b44a86.jpg'}]})
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
