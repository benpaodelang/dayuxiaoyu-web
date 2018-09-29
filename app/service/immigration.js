/**
 * 描述
 * @author zyp
 * @version 1.0
 * @data 2018/1/24
 */

const Service = require('egg').Service;

class ImmigrationService extends Service {

    async positionList(positionId) {
        const api = this.config.api;
        const result = await this.ctx.curl(`${api}/cms/immigration/positionList`, {
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
        const result = await this.ctx.curl(`${api}/cms/immigration/list`, {
            method: 'POST',
            dataType: 'json',
        });
        return result;
    }

    async detail(id) {
        const api = this.config.api;
        const result = await this.ctx.curl(`${api}/cms/immigration/detail`, {
            method: 'POST',
            data: {
                id:id
            },
            dataType: 'json',
        });
        return result;
    }

}

module.exports = ImmigrationService;