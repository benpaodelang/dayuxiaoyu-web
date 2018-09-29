/**
 * 描述
 * @author zyp
 * @version 1.0
 * @data 2018/1/24
 */


const Service = require('egg').Service;

class PassportService extends Service {

    async positionList(positionId) {
        const api = this.config.api;
        const result = await this.ctx.curl(`${api}/cms/passport/positionList`, {
            method: 'POST',
            data: {
                positionId: positionId
            },
            dataType: 'json',
        });
        return result;
    }

    async list() {
        const api = this.config.api;
        const result = await this.ctx.curl(`${api}/cms/passport/list`, {
            method: 'POST',
            dataType: 'json',
        });
        return result;
    }

    async detail(id) {
        const api = this.config.api;
        const result = await this.ctx.curl(`${api}/cms/passport/detail`, {
            method: 'POST',
            data: {
                id:id
            },
            dataType: 'json',
        });
        return result;
    }

}

module.exports = PassportService;