/**
 * 描述
 * @author zyp
 * @version 1.0
 * @data 2018/1/24
 */

'use strict';

const Controller = require('egg').Controller;

class ImmigrationController extends Controller {

    async list() {
        const sliderList = await this.ctx.service.slider.list(this.config.positionIds.immigrationSliderPositionId);
        const immigrationList = await this.ctx.service.immigration.list();
        const passportList = await this.ctx.service.passport.list();
        await this.ctx.render('cms/immigration/list.njk',{
            immigrationList:immigrationList,
            passportList:passportList,
            sliderList:sliderList
        })
    }

    async detail() {
        const id = this.ctx.query.id;
        const countryList = await this.ctx.service.country.list()
        const immigrationModel = await this.ctx.service.immigration.detail(id)
        await this.ctx.render('cms/immigration/detail.njk',{immigrationModel:immigrationModel,countryList:countryList})
    }

}

module.exports = ImmigrationController;