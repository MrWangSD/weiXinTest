Page({
  data: {
    src: '',
    devicePosition: "back",//front
  },

  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },

  changeCamera: function() {
    this.setData({
      devicePosition: this.data.devicePosition == 'front' ? 'back' : 'front'
    })

    // console.log(this.data.devicePosition)
  },

  previousPhoto: function() {
    if(this.data.src != ''){
      wx.previewImage({
        current: this.data.src,
        urls: [this.data.src],
        success: function(res){
          console.log(res)
        }
      })
    }
  },

  saveImageToSystem: function() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.src,
      success: function(res) {
        console.log(res)
      }
    })
  }

})