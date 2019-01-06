// pages/my/register.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classes: ['战士', '圣骑士', '猎人', '潜行者', '牧师', '死亡骑士', '萨满祭司', '法师', '术士', '武僧', '德鲁伊', '恶魔猎手'],
    classIndex: null,
    className: "",
    name: "",
    phone: "",
    characterName: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let classIndex = this.data.classes.findIndex(value => value == app.globalData.user.className);
    this.setData({
      name: app.globalData.user.name,
      phone: app.globalData.user.phone,
      className: app.globalData.user.className,
      classIndex: classIndex,
      characterName:app.globalData.user.characterName,
      serverName: app.globalData.user.serverName
    })
  },

  nameInput(e) {
    this.setData({
      name: e.detail.value
    })
  },
  characterNameInput(e) {
    this.setData({
      characterName: e.detail.value
    })
  },
  serverNameInput(e) {
    this.setData({
      serverName: e.detail.value
    })
  },
  phoneInput(e) {
    this.setData({
      phone: e.detail.value
    })
  },

  classChange(e) {
    this.setData({
      classIndex: e.detail.value,
      className: this.data.classes[e.detail.value]
    })
  },

  submit(e) {
    
    app.globalData.user.name = this.data.name;
    app.globalData.user.phone = this.data.phone;
    app.globalData.user.characterName = this.data.characterName;
    app.globalData.user.className = this.data.className;
    app.globalData.user.serverName = this.data.serverName;
    wx.request({
      url: 'https://yoc.huangyiyang.com/api/users/' + app.globalData.user.id,
      method: 'PUT',
      data: app.globalData.user,
      success(res) {
        if (res.statusCode == 200) {
          app.globalData.user = res.data;
          console.log(app.globalData.user)
        }
        wx.navigateBack()
      }
    })
  }

})