const request = require('../../utils/promise');

Page({

  /**
   * 页面的初始数据
   */
  data: {
      resData:'',
      tempResData:'',
      genre:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that=this;
    // this.getData('id','27088813',20)

    //request 方式 不能立即拿到值
    // wx.request({
    //   url: 'http://120.79.164.150/query',
    //   data:'',
    //   success:function(res){
    //       // console.log(res)
    //       that.setData({
    //         tempResData:res.data
    //       })
    //       console.log(that.data.tempResData)
    //   }
    // })

    //使用异步promise的方法
    let BaseAPI = 'http://120.79.164.150/query';
    let data = {
      }
    request.GET(BaseAPI,'',data).then(res=>{
       console.log(res.data);
       this.setData({
        resData:res.data,
        tempResData:res.data[0]
      })
    })
    
    // request.GET({
    //   url: 'http://120.79.164.150/query',
    //   data:''
    // }).then(res=>console.log('res: ', res));

  },

  /**
   * 自定义函数 根据参数返回数据 data.data
   * @param {*} key 
   * @param {*} value 
   * @param {*} limit 
   */
  getData(key='',value='',limit=''){
    var current_this=this;
    var datas='';
    var optionString='';
    if(key=='' && limit==''){ 
      optionString=''
    }else if(key!='' && limit==''){
      optionString='?'+key+'='+value;
    }else if(key=='' && limit!=''){
      optionString='?limit='+limit;
    }else{
      optionString='?'+key+'='+value+'&limit='+limit;
    }
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})