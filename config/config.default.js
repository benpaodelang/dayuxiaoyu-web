'use strict';

module.exports = appInfo => {

    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1516633535480_1545';

    // add your config here
    config.middleware = [];

    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.njk': 'nunjucks',
        },
        cache: true
    };

    config.static = {
        dynamic: true,
        preload: false,
        buffer: false
    };

    config.api = "http://121.42.244.237:9090/api";

    config.alinode = {
        appid: '1549',
        secret: '6f699598dd5a71e86d0eb1d0432e77c880c6489f',
    };

    config.positionIds = {
        // 网站首页幻灯片位置Id
        indexSliderPositionId:5,
        // 移民首页幻灯片位置Id
        immigrationSliderPositionId:7,
        // 房产首页幻灯片位置Id
        houseSliderPositionId:8,
        // 生子首页幻灯片位置Id
        shengziSliderPositionId:9,
        // 资讯首页幻灯片位置Id
        newSliderPositionId:10,
        // 首页头条资讯推荐位
        indexRecommendNewsPositionId:11,
        // 首页公司新闻推荐位
        indexRecommendCompanyNewsPositionId:12,
        // 首页项目推荐推荐位
        indexRecommendImmigrationPositionId:13,
        // 首页房产推荐位
        indexRecommendHousePositionId:9,

    };


    return config;
};
