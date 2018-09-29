/**
 * 描述
 * @author zyp
 * @version 1.0
 * @data 2018/1/24
 */

'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {

    async index() {
        await this.ctx.render('cms/login/login.njk')
    }

}

module.exports = LoginController;