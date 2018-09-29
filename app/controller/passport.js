/**
 * 描述
 * @author zyp
 * @version 1.0
 * @data 2018/1/24
 */

'use strict';

const Controller = require('egg').Controller;

class PassportController extends Controller {

    async detail() {
        const id = this.ctx.query.id;
        const passportModel = await this.ctx.service.passport.detail(id)
        const countryList = await this.ctx.service.country.list()
        await this.ctx.render('cms/passport/detail.njk',{passportModel:passportModel,countryList:countryList })
    }

}

module.exports = PassportController;
