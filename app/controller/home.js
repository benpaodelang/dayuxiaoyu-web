'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
      const sliderList = await this.ctx.service.slider.list(this.config.positionIds.indexSliderPositionId);
      const news = await this.ctx.service.new.positionList(this.config.positionIds.indexRecommendNewsPositionId);
      const companyNews = await this.ctx.service.new.positionList(this.config.positionIds.indexRecommendCompanyNewsPositionId);
      const houseList = await this.ctx.service.house.positionList(this.config.positionIds.indexRecommendHousePositionId);
      const immigrationList = await this.ctx.service.immigration.positionList(this.config.positionIds.indexRecommendImmigrationPositionId);
      await this.ctx.render('cms/home/home.njk',{
          sliderList:sliderList,
          news:news,
          companyNews:companyNews,
          houseList:houseList,
          immigrationList:immigrationList
      })
  }
}

module.exports = HomeController;
