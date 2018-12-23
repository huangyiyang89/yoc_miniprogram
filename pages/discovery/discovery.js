// pages/discovery/discovery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news: null,
    tops:null
  },
  refresh() {
    let that=this;
    wx.request({
      url: 'https://yoc.huangyiyang.com/api/news/',
      success(res) {
        console.log(res.data)
        that.setData({
          tops: res.data
        });
      }
    })
    wx.request({
      url: 'https://yoc.huangyiyang.com/api/news/',
      success(res) {
        console.log(res.data)
        that.setData({
          news: res.data
        });
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
    wx.showNavigationBarLoading();
    this.refresh();
    wx.stopPullDownRefresh();
    wx.hideNavigationBarLoading();
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