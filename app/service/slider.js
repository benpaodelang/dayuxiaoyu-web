/**
 * 描述
 * @author zyp
 * @version 1.0
 * @data 2018/1/24
 */

const Service = require('egg').Service;

class SliderService extends Service {

    async list(positionId) {
        const api = this.config.api;
        const result = await this.ctx.curl(`${api}/cms/slider/list`, {
            method: 'POST',
            data: {
                positionId: positionId
            },
            dataType: 'json',
        });
        return result;
    }
}

module.exports = SliderService;
