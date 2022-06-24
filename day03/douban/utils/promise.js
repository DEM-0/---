function POST(baseAPI,url, params) {
    //加载loading
    wx.showLoading({
        title: '加载中...',
        mask: true
    })
    let promise = new Promise(function (resolve, reject) {
        wx.request({
            url: baseAPI + url,
            data: params,
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method: 'POST',
            success: (res) => {
                //接收返回的值
                resolve(res)
            },
            fail: (res) => {
                //拒绝返回的值
                reject(res)
            },
            complete: () => {
                //不管回调是否成功都做一个隐藏
                wx.hideLoading()
            }
        })
    });
    return promise;
  }
   
  function GET(baseAPI,url, params) {
    let promise = new Promise(function (resolve, reject) {
        wx.request({
            url: baseAPI + url,
            data: params,
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method: 'GET',
            success: (res) => {
                resolve(res)
            },
            fail: (res) => {
                reject(res)
            }
        })
    });
    return promise
  }
  module.exports = {
      POST: POST,
      GET: GET,
  }