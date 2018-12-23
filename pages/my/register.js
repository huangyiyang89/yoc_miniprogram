// pages/my/register.js
var app = getApp();
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
    this.setData({
      name: app.globalData.user.name == null ? "" : app.globalData.user.name,
      phone: app.globalData.user.phone == null ? "" : app.globalData.user.phone
    })
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
    app.globalData.user.name=this.data.name;
    app.globalData.user.phone = this.data.phone
    wx.request({
      url: 'https://yoc.huangyiyang.com/api/users/' + app.globalData.user.id,
      method: 'PUT',
      data: app.globalData.user,
      success(res) {
        if(res.statusCode==200){
          app.globalData.user=res.data;
          console.log(app.globalData.user)
        }
        wx.navigateBack()
      }
    })
  }

})