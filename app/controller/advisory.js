/**
 * 描述
 * @author zyp
 * @version 1.0
 * @data 2018/1/24
 */

'use strict';

const Controller = require('egg').Controller;

class AdvisoryController extends Controller {

    async index() {
        const countryList = await this.ctx.service.country.list()
        await this.ctx.render('cms/advisory/home.njk',{countryList:countryList})
    }

    async submit() {
        const response = await this.ctx.service.advisory.submit(this.ctx.request.body)
        this.ctx.body = {
            response: "success",
        };
        this.ctx.status = 200;
    }

}

module.exports = AdvisoryController;