// pages/discovery/discovery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news: null,
    tops: null
  },
  refresh() {
    wx.showLoading({
      title: '加载中'
    });
    wx.request({
      url: 'https://yoc.huangyiyang.com/api/news/',
      success: res => {
        this.setData({
          news: res.data.filter(function (value) {
            return value.type != "top"
          }),
          tops: res.data.filter(function(value) {
            return value.type == "top"
          })
        });
        wx.hideLoading();
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.refresh();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    this.refresh();
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})