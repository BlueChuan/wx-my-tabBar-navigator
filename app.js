//app.js
App({
    onLaunch: function () {
        let _this = this;
        if (!wx.cloud) {
            console.error('请使用 2.2.3 或以上的基础库以使用云能力')
        } else {
            wx.cloud.init({
                traceUser: true,
            })
        }
        //获取用户设备信息，屏幕宽度
        wx.getSystemInfo({
            success: res => {
                console.log(res)
                _this.globalData.model = res.model;
                _this.globalData.system = res.system;
                _this.globalData.navigationBarTop = wx.getMenuButtonBoundingClientRect().top;
                _this.globalData.modelClass = res.model.replace(/\s/g, '-');
                _this.globalData.screenWidth = res.screenWidth;
                _this.globalData.screenHeight = res.screenHeight;
                _this.globalData.statusBarHeight = res.statusBarHeight * 2; /**状态栏高度rpx */
                _this.globalData.isIOS = res.system.indexOf('iOS') > -1 ? true : false;
                _this.globalData.circleHeight = res.system.indexOf('iOS') > -1 ? 31 : 31;/**原始胶囊高度px */
                _this.globalData.titHeight = res.system.indexOf('iOS') > -1 ? 40 : 46; /**原始标题高度px */
            }
        })
    },
    globalData: {

    }
})
