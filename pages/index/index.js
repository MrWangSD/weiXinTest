//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    animationOne: {},
    animationTwo: {},
    animationThree: {}
  },
  //事件处理函数
  bindViewTap: function() {
    /*
    wx.navigateTo({
      url: '../logs/logs'
    })
    */
    this.setAnimation()
    wx.showModal({
      title: '实力比心我家小宝贝',
      content: '我家小宝贝最可爱、最贤惠、最聪明、最勤劳、最漂亮💗爱你哦',
      showCancel: false,
      confirmText: '就是这样',
      success: function(res){
        if(res.confirm){
          wx.showToast({
            title: '❤️ 比心比心❤️ ',
            image: '../../image/heart.jpeg',
          });
        }
      },
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {

      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo;
    if(e.detail.userInfo){
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }
  },

  setAnimation: function() {
    const animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',

    })
    // this.animation = animation
    // animationOne
    animation.translateX(400).opacity(0).step()

    this.setData({
      animationOne: animation.export()
    })
    // animationTwo
    animation.translateX(-400).opacity(0).step()

    this.setData({
      animationTwo: animation.export()
    })

    animation.opacity(0).step()

    this.setData({
      animationThree: animation.export()
    })

    setTimeout(function () {
      animation.translateX(0).opacity(1).step()
      this.setData({
        animationOne: animation.export()
      })
      animation.translateX(0).opacity(1).step()
      this.setData({
        animationTwo: animation.export()
      })
      animation.opacity(1).step()
      this.setData({
        animationThree: animation.export()
      })
    }.bind(this), 6000)

    // console.log('animation')
  },
})
