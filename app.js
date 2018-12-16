//app.js

App({
  globalData: {
    user:null
  },
  onLaunch: function() {
    var that=this;
    wx.getStorage({
      key: 'user',
      success(res) {
        console.log("已登录");
        console.log(res.data);
        that.globalData.user=res.data;
      },
      fail(res){
        // 登录
        wx.login({
          success(res) {
            if (res.code) {
              // 发起网络请求
              wx.request({
                url: 'https://yoc.huangyiyang.com/api/login',
                data: {
                  code: res.code
                },
                success(res) {
                  console.log(res);
                  if(res.data!=""){
                    that.globalData.user = res.data;
                    wx.setStorage({
                      key: 'user',
                      data: that.globalData.user,
                    })
                  }
                  else{
                    console.log('登录失败! ');
                  }

                  if(!res.data.name&&!res.data.phone){
                    wx.navigateTo({
                      url: '/pages/my/register',
                    })
                  }
                }
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
      }
    })
  }
})