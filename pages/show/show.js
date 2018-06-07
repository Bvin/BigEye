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
    this.setData({ images: [{ imgUrl: "http://www.gzsghj.gov.cn/Uploads/Editor/2017-10-17/59e5bdcce1235.jpg" }, { imgUrl: "http://www.gzsghj.gov.cn/Uploads/Editor/2017-10-17/59e5bdb394cdf.jpg" }, { imgUrl: "http://www.gzsghj.gov.cn/Uploads/Editor/2017-10-17/59e5bd9b44a86.jpg" }, { imgUrl: "http://www.gzsghj.gov.cn/Uploads/Editor/2018-05-29/5b0d2c54b4215.jpg" }, { imgUrl: "http://www.gzsghj.gov.cn/Uploads/Editor/2018-05-29/5b0d2c8926fc8.jpg" }] })
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
    console.log('onShow');
    wx.getStorageInfo({
      success: function(res) {
        for (let i = 0; i <= res.keys.length; i++){
          console.log(res.keys[i])
        }
      },
    })
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