/**
 * @file 作业系统小程序个人中心
 * @author niejianhui
 */
const app = getApp();
Page({
    data: {
       
    },
    onLoad: function (options) {
        var me  = this;
        me.setData({
            usertype: 0
        });
        wx.authorize({
            scope: 'scope.userInfo',
            success: function () {
                app.getUserInfo(function (userInfo) {
                    me.setData({
                        userInfo: userInfo
                    });
                });
            }
        });
    }
});