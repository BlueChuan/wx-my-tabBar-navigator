// custom-tab-bar/custom-tab-bar.js
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
        selected: 0,
        color: "#535353",
        selectedColor: "rgb(131,175,155)",
        list: [{
            pagePath: "/pages/usersLists/usersLists",
            iconPath: "iconyonghu"
        }, {
            pagePath: "/pages/mine/mine",
            iconPath: "icongerenzhongxinxuanzhong"
        }]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        changeTab(e) {
            let { index, url} = e.currentTarget.dataset;
            let { selected } = this.data;
            if (selected === index) return;
            wx.switchTab({
                url
            })
            this.setData({ selected: index })
        }
    }
})
