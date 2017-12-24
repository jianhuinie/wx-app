/**
 * @file 傩舞文化
 * @author niejianhui
 */

Page({
    data: {
        currentIndex: 0,
        images:[
            'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=27378c82602762d09433acedc185639f/95eef01f3a292df56e259fb4bf315c6035a873a8.jpg',
            'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=638137c165380cd7f213aabfc02dc651/9345d688d43f8794773d805fd21b0ef41ad53a85.jpg',
            'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=d19c23bcd72a283457ab3e593adca28f/241f95cad1c8a78678d279af6409c93d71cf5092.jpg',
            'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=8f176448f1d3572c72ef948eeb7a0842/77c6a7efce1b9d16783ca9c0f0deb48f8d546493.jpg',
            'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=df12e7a41dd5ad6ebef46cb8e0a252be/78310a55b319ebc4ba4caaf98426cffc1e17169d.jpg',
            'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=584c90a40cd162d991e36a4e70b6c289/6a600c338744ebf84008ba5fdff9d72a6059a751.jpg'
        ]
    },
    viewImage: function (e) {
        var me = this;
        var index = +e.currentTarget.dataset.index;
        var images = me.data.images;
        var current = images[index];
        wx.previewImage({
            current: current,
            urls: images
        });
    }
});