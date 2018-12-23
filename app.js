//app.js

App({
  globalData: {
    user: null
  },

  onLaunch: function() {

  },

  login: function() {
    wx.login({
      success: res => {
        if (res.code) {
          wx.request({
            url: 'https://yoc.huangyiyang.com/api/users/login/' + res.code,
            success: res => {
              console.log(res);
              if (res.statusCode == 200) {
                this.globalData.user = res.data;
              } else {
                console.log('登录失败!服务器错误或code错误');
              }
            }
          })
        }
      }
    })
  }
})