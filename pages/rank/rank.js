var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankings: {}
  },

  onLoad: function(options) {
    this.getData();
  },
  getData() {
    wx.showLoading({
      title: '加载中'
    });
    wx.request({
      url: 'https://yoc.huangyiyang.com/api/wcl/rankings/character/' + app.globalData.user.characterName + '/' + app.globalData.user.serverName + '/CN',
      success: res => {
        if (res.statusCode == 200) {
          this.setData({
            rankings: res.data.filter(value => {
              return value.difficulty == 5
            })
          });
        } else {}
      },
      fail: res => {},
      complete: res => {
        wx.hideLoading();
      }
    })
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
    this.getData();
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