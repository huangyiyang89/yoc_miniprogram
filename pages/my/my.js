const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },
  onShow: function() {
    this.setData({
      user : app.globalData.user
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
  },
  bindUpdate(e) {
    wx.navigateTo({
      url: '/pages/my/register',
    })
  }
})