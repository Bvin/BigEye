//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    images: [{ imgUrl:""}]
  },
  
  onLoad: function () {
    var _this = this;
    wx.getStorageInfo({
      success: function(res) {
        console.log(res)
        _this.setData({ 
          hasHistory: res.keys.length > 0}
          )

        var histiryImages = [];
        for (var i = 0; i <= res.keys.length; i++){
          var key = res.keys[i];
          if (!key) continue;
          var img = {};
          img.imgUrl = res.keys[i];
          histiryImages.push(img);
        }
        _this.setData({ images: histiryImages})
      },
    })
  },

  gotoSupport: function(e){
    wx.navigateTo({
      url: '../support/support',
    })
  },

  gotoUsage: function(e){
    wx.navigateTo({
      url: '../usage/usage',
    })
  },

  gotoShow: function(e){
    var imgUrl;
    if (e.currentTarget.dataset.imgUrl){
      imgUrl = '../show/show?img=' + e.currentTarget.dataset.imgUrl;
    }else{
      imgUrl = '../show/show'
    }
    wx.navigateTo({
      url: imgUrl,
    })
  },

  showImage: function (e) {
    wx.previewImage({
      urls: [e.currentTarget.dataset.imgUrl],
    })
  },

})
