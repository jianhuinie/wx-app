/**
 * @file 作业系统小程序老帮助信息页
 * @author niejianhui
 */

Page({
    data: {
        images:[
            'http://mmbiz.qpic.cn/mmbiz/JGewZCgpYE8yjSulUmuprx1ibWlW3ibqib2QGtYykdNkufdpotAZTibOaRIsibEVmju2sKwnfFXpYCEvasS639KTLqw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1',
            'http://mmbiz.qpic.cn/mmbiz/JGewZCgpYE8yjSulUmuprx1ibWlW3ibqib29ib1hWPL9uK97XIoklPjKN0NYfgA3P1D4iazsoz4gkuyt3wgNoOga0xw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1',
            'http://mmbiz.qpic.cn/mmbiz/JGewZCgpYE8yjSulUmuprx1ibWlW3ibqib2xWEXBYYDhKW3P3MqFiaRKBHmY7Pmicbic0iazv17seBkDjoH068Fd9Ya6A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1',
            'http://mmbiz.qpic.cn/mmbiz/JGewZCgpYEibXjwEU1NjokT080ZQ6MD6GktRWlT6OV8XZ9DMyja73ngpYYcYbBrzYFj8HRJXvIl95rO4AhT754w/640?wxfmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1',
            'http://mmbiz.qpic.cn/mmbiz/JGewZCgpYEibXjwEU1NjokT080ZQ6MD6Gp7xRQAPLk6pxVG74OsIwtDDYHJf3e1EdFaLokmQic1QKXCLX5q5IDXQ/640?wxfmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1',
            'http://mmbiz.qpic.cn/mmbiz/JGewZCgpYEibXjwEU1NjokT080ZQ6MD6GU6doWSSWiaGhZHq6zUicd35qyQ9PvslCOFvzxKXjNPBT98yPKhnIZRxg/640?wxfmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'
        ]
    },
    onLoad: function (options) {
        var me = this;
        me.setData({
            title: options.title,
            articelNumber: options.articelNumber
        });
    },
    onReady: function () {
        var me = this;
        wx.setNavigationBarTitle({
            title: me.data.title
        });
    },
    viewImage: function (e) {
        var target = e.currentTarget;
        var index = +target.dataset.index;
        var images = this.data.images;
        wx.previewImage({
            current: index,
            urls: images
        });
    }
});