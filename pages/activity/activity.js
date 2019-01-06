//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    raid: null,
    raider: null,
    description: "拖动滑块描述能够参加活动的可能性"
  },
  onLoad: function() {
    wx.showLoading({
      title: '正在加载',
    })
    wx.request({
      url: 'https://yoc.huangyiyang.com/api/raids/last',
      success: res => {
        console.log(res);
        if (res.statusCode == 200) {
          this.setData({
            raid: res.data
          });

          if (res.data.raiders != null) {
            let raider = this.data.raid.raiders.find(function(value) {
              return value.userId == app.globalData.user.id && value.raidId == res.data.id;
            });
            if (raider) {
              this.setData({
                raider: raider
              })
              this.setDescription(raider.possibility);
            }

          }

        } else {

        }
      },
      complete: res => {
        wx.hideLoading();
      }
    });
  },
  sliderchange(e) {
    this.setData({
      raider: {
        raidId: this.data.raid.id,
        userId: app.globalData.user.id,
        possibility: e.detail.value
      }
    });
    this.setDescription(e.detail.value);
    wx.request({
      url: 'https://yoc.huangyiyang.com/api/raiders/' + this.data.raid.id + '/' + app.globalData.user.id,
      method: 'PUT',
      data: this.data.raider,
      success: res => {
        console.log(res);
        if (res.statusCode == 200 || res.statusCode == 201) {

        } else {

        }
      }
    })
  },
  sliderchanging(e) {
    this.setDescription(e.detail.value)
  },
  setDescription(value){
    switch (value) {
      case null:
        this.setData({
          description: "拖动滑块描述能够参加活动的可能性"
        });
        break;
      case 0:
        this.setData({
          description: "铁定上不了了"
        });
        break;
      case 25:
        this.setData({
          description: "基本上不了了"
        });
        break;
      case 50:
        this.setData({
          description: "还不确定是否能上"
        });
        break;
      case 75:
        this.setData({
          description: "没意外应该能上"
        });
        break;
      case 100:
        this.setData({
          description: "一定确定以及肯定能上"
        });
    }
  }
})