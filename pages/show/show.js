// pages/show/show.js
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
    var _this = this;
    var imgUrl = options.img;
    if(imgUrl){
      wx.previewImage({
        urls: [imgUrl],
        success:function(data){
          wx.setStorage({
            key: imgUrl,
            data: imgUrl,
          })
        }
      })
    }
    wx.getStorageInfo({
      success: function(res) {
        var histiryImages = [];
        for (var i = 0; i <= res.keys.length; i++) {
          var key = res.keys[i];
          if (!key) continue;
          var img = {};
          img.imgUrl = res.keys[i];
          histiryImages.push(img);
        }
        _this.setData({ images: histiryImages })
      },
    })
    
  },

  showImage: function(e){
    wx.previewImage({
      urls: [e.currentTarget.dataset.imgUrl],
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
    console.log('onHide');
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