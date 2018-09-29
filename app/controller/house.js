/**
 * 描述
 * @author zyp
 * @version 1.0
 * @data 2018/1/24
 */

'use strict';

const Controller = require('egg').Controller;

class HouseController extends Controller {

    async list() {

        const request = {
            country:this.ctx.query.country,
            priceFrom:this.ctx.query.priceFrom,
            priceTo:this.ctx.query.priceTo,
            houseType:this.ctx.query.houseType,
            pageSize:20,
            pageNo:this.ctx.query.pageNo,
            purpose:this.ctx.query.purpose
        };

        const sliderList = await this.ctx.service.slider.list(this.config.positionIds.houseSliderPositionId);
        const houseList = await this.ctx.service.house.list(request);
        const countryList = await this.ctx.service.country.list();
        await this.ctx.render('cms/house/list.njk',{houseList:houseList,countryList:countryList,sliderList:sliderList,request:request})
    }

    async detail() {
        const id = this.ctx.query.id;
        const countryList = await this.ctx.service.country.list();
        const houseModel = await this.ctx.service.house.detail(id);
        await this.ctx.render('cms/house/detail.njk',{houseModel:houseModel,countryList:countryList})
    }

}

module.exports = HouseController;
