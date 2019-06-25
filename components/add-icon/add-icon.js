// components/add-icon/add-icon.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        goAddPage(){
            wx.hideTabBar();
            wx.navigateTo({
                url: '/pages/addMember/addMember',
            })
        }
    }
})
