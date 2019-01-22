// pages/professmail/professmail.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    textList:[
      {
        text: '与你已相识近三年半载',
        translateX: 100,
        translateY: 0,
        opacity: 0,
        animation: {}
      }, {
        text: '你好，我叫汪思达',
        translateX: -100,
        translateY: 0,
        opacity: 0,
        animation: {}
      }, {
        text: '很高兴、很荣幸、很幸运',
        translateX: 130,
        translateY: 0,
        opacity: 0,
        animation: {}
      }, {
        text: '认识你、了解你、走进你心里',
        translateX: -90,
        translateY: 0,
        opacity: 0,
        animation: {}
      }, {
        text: '没有打声招呼，就闯进你的世界',
        translateX: 0,
        translateY: 60,
        opacity: 0,
        animation: {}
      }, {
        text: '花了余生的运气，成了你的男朋友',
        translateX: 0,
        translateY: -60,
        opacity: 0,
        animation: {}
      }, {
        text: '回顾这近两年有你的日子',
        translateX: 100,
        translateY: 0,
        opacity: 0,
        animation: {}
      }, {
        text: '嗯，没错，我很幸福、超幸福',
        translateX: -100,
        translateY: 0,
        opacity: 0,
        animation: {}
      }, {
        text: '嗯，是的，你就是我最想留着的小幸运',
        translateX: 0,
        translateY: 60,
        opacity: 0,
        animation: {}
      }, {
        text: '往后余生，请多指教',
        translateX: 0,
        translateY: 60,
        opacity: 0,
        animation: {}
      },
    ],
    nickName: '',
    titleAnimation: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(app.globalData.userInfo)
    if (app.globalData.userInfo){
      this.setData({
        nickName: app.globalData.userInfo.nickName
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const animation = wx.createAnimation({
      duration: 2500,
      timingFunction: 'ease-in-out'
    })

    this.timeout = setTimeout(function(){
      animation.opacity(1).step()
      this.setData({
        titleAnimation: animation.export()
      })

      var length = this.data.textList.length
      var index = 0
      var textList = this.data.textList

      this.interval = setInterval(function () {
        // console.log(textList)
        animation.translate(0, 0).opacity(1).step()

        textList[index].animation = animation.export()
        textList[index].opacity = 1

        this.setData({
          textList
        })

        index += 1

        if(index == length){
          clearInterval(this.interval)
        }
      }.bind(this), 1000)

    }.bind(this), 500)
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    if(this.timeout){
      clearTimeout(this.timeout)
    }
    if(this.interval){
      clearInterval(this.interval)
    }
  },
})