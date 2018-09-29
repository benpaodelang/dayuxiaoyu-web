'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/immigration', controller.immigration.list);
    router.get('/immigration/detail', controller.immigration.detail);
    router.get('/house', controller.house.list);
    router.get('/passport/detail', controller.passport.detail);
    router.get('/house/detail', controller.house.detail);
    router.get('/new', controller.new.list);
    router.get('/new/detail', controller.new.detail);
    router.get('/advisory', controller.advisory.index);

    router.get('/login', controller.login.index);
    router.get('/page', controller.new.page);
    router.get('/shengzi', controller.shengzi.list);
    router.post('/submit',controller.advisory.submit)
};
