/**
 * @file 上甘之家首页
 * @author niejianhui
 */
const app = getApp();
Page({
    data: {
       
    },
    onLoad: function (options) {
        var me  = this;
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
    },
    toDetailIntro: function () {
        wx.navigateTo({
            url: '/pages/detailIntro/index'
        });
    },
    viewImage: function (e) {
        var images = ['https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=b8833169b0003af359b7d4325443ad39/4a36acaf2edda3ccf289694007e93901213f9265.jpg'];
        wx.previewImage({
            urls: images
        });
    }
});