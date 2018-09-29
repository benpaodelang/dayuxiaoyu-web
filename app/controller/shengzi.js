/**
 * 描述
 * @author zyp
 * @version 1.0
 * @data 2018/1/24
 */

'use strict';

const Controller = require('egg').Controller;

class ShengziController extends Controller {

    async list() {
        const sliderList = await this.ctx.service.slider.list(this.config.positionIds.shengziSliderPositionId);
        await this.ctx.render('cms/shengzi/list.njk',{sliderList:sliderList})
    }

}

module.exports = ShengziController;