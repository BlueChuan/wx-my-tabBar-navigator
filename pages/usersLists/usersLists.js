// miniprogram/pages/usersLists/usersLists.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        adjustPosition:false,
        alignTop: (app.globalData.titHeight - 32) / 2,
        circleHeight: app.globalData.circleHeight,
        titHeight: app.globalData.titHeight
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        const { statusBarHeight } = app.globalData;
        this.setData({ statusBarHeight});
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            })
        }
    },
    bindSearchValue(e){
        const db = wx.cloud.database({
            env: 'db01-cool'
        })
        db.collection('members').add({

        })
    },
    confirmSearch(e) {

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