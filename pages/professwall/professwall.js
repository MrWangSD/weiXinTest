// pages/professwall/professwall.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textList: [],
    textItems: [
      '喜欢你',
      '不管我多么平庸,对你的爱我觉得很美',
      '我希望有一天我可以不用每天对着手机和你说晚安,你就在我身边',
      '好喜欢你',
      '我想把世界上最好的都给你,却发现世界上最好的就是你',
      '除了你之外都不想要',
      '没遇到你之前,没想过结婚,遇见你之后,结婚这事我没想过和别人',
      '超级喜欢你',
      '我不是温柔的人,却想为你做尽温柔的事',
      '我不习惯晚睡,只是睡前想你，然后想了很久',
      '很幸运能够遇见你',
      '往后余生请多指教',
      '我 喜欢你呀',
      '我承认我喜欢你、我想你、我爱你',
      '往后余生,有你有我',
      '想要一直陪着你',
    ],
    colors:[
      '#333333',
      '#aaaaaa',
      '#d87c7c',
      '#919e8b',
      '#d7ab82',
      '#6e7074',
      '#61a0a8',
      '#cc7e63',
      '#724e58',
      '#787464',
      '#4b565b'
    ]
  },

  onShow(){
    // console.log("show");
    var length = parseInt(Math.random() * 30) + 20
    var textList = []
    var textLength = this.data.textItems.length - 1
    var colorsLength = this.data.colors.length - 1
    for(var i = 0; i < length; i+=1){
      var textIndex = parseInt(Math.random() * textLength)
      var colorIndex = parseInt(Math.random() * colorsLength)
      textList.push({
        text: this.data.textItems[textIndex],
        right: parseInt(Math.random() * 10) - 40,
        translateX: parseInt(Math.random() * 350 + 400),
        top: parseInt(Math.random() * 450 + 50),
        color: this.data.colors[colorIndex],
        animation: {},
      })
    }
    
    // console.log(textList)

    this.setData({
      textList: textList
    })

    this.timeout = setTimeout(function (){
      this.showAnimation()
    }.bind(this), 500)
  },

  onHide(){
    // console.log("hide");
    if(this.timeout){
      clearTimeout(this.timeout)
    }

    if(this.interval){
      clearInterval(this.interval)
    }

  },

  showAnimation: function() {
    // console.log('animation')
    this.animation = wx.createAnimation({
      duration: 6000,
      timingFunction: 'linear',
    })

    var textList = this.data.textList
    var length = textList.length
    var index = 0;
    this.interval = setInterval(function (){
      this.animation.translateX(-parseInt(Math.random() * 250 + 500)).step()
      textList[index].animation = this.animation.export()
      index += 1
      
      this.setData({
        textList: textList,
      })

      if (index == length) {
        clearInterval(this.interval)
      }
    }.bind(this), 1000)

    /*
    setTimeout(function () {
      var textList = this.data.textList
      var length = textList.length
      for (var i = 0; i < length; i += 1) {
        
        this.animation.translateX(-100).step()
        textList[i].animation = this.animation.export()
      }
      this.setData({
        textList: textList,
      })
    }.bind(this), 1000)
    */
    // console.log(textList)
    
  }
})