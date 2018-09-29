/**
 * 描述
 * @author zyp
 * @version 1.0
 * @data 2018/1/24
 */

const Service = require('egg').Service;

class CountryService extends Service {

    async list() {
        const api = this.config.api;
        const result = await this.ctx.curl(`${api}/cms/country/list`, {
            method: 'POST',
            dataType: 'json',
        });
        return result;
    }
}

module.exports = CountryService;
