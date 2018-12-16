// pages/my/register.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    phone: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  nameInput(e) {
    this.setData({
      name: e.detail.value
    })
  },

  phoneInput(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  submit(e) {
    let that=this;
    wx.request({
      url: 'https://yoc.huangyiyang.com/api/user/' + app.globalData.openid,
      data: {
        name: this.data.name,
        phone: this.data.phone
      },
      success(res) {
        app.globalData.user.name = that.data.name;
        app.globalData.user.phone = that.data.phone;
        wx.setStorage({
          key: 'user',
          data: app.globalData.user,
        })
        wx.navigateBack({
          
        })
      }
    })
  }

})