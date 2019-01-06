let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginFail: false
  },
  login: function() {
    wx.showLoading({
      title: '登录中',
    })
    wx.login({
      success: res => {
        if (res.code) {
          wx.request({
            url: 'https://yoc.huangyiyang.com/api/users/login/' + res.code,
            success: res => {
              if (res.statusCode == 200) {
                app.globalData.user = res.data;
                wx.switchTab({
                  url: '/pages/activity/activity'
                })
              } else {
                this.setData({
                  loginFail: true
                })
              }
            },
            fail: res => {
              this.setData({
                loginFail: true
              })
            },
            complete: res => {
              wx.hideLoading();
            }

          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.login();
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

  },

  retry:function(){
    this.login();
  }
})