/**
 * @file 上甘之家详细介绍页
 * @author niejianhui
 */
const app = getApp();
Page({
    data: {
        currentTab: '',
    },
    switchTab: function (e) {
        var me = this;
        var currentTab = me.data.currentTab;
        var target = e.currentTarget;
        var tab = target.dataset.tab;
        if (currentTab === tab) {
            tab = '';
        }
        me.setData({
            currentTab: tab
        });
    },
    viewImage: function (e) {
        var images = ['https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=baac6448307adab429dd1311eabdd879/562c11dfa9ec8a1321928080f103918fa1ecc0c2.jpg'];
        wx.previewImage({
            urls: images
        });
    }
});