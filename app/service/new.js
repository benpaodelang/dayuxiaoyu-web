/**
 * 描述
 * @author zyp
 * @version 1.0
 * @data 2018/1/24
 */

const Service = require('egg').Service;

class NewService extends Service {

    async positionList(positionId) {
        const api = this.config.api;
        const result = await this.ctx.curl(`${api}/cms/new/positionList`, {
            method: 'POST',
            data: {
                positionId: positionId
            },
            dataType: 'json',
        });
        return result;
    }

    async list(request) {
        const api = this.config.api;
        const result = await this.ctx.curl(`${api}/cms/new/list`, {
            method: 'POST',
            data: {
                pageSize:request.pageSize,
                pageNo:request.pageNo,
                categoryId:request.categoryId
            },
            dataType: 'json',
        });
        return result;
    }

    async detail(id) {
        const api = this.config.api;
        const result = await this.ctx.curl(`${api}/cms/new/detail`, {
            method: 'POST',
            data: {
                id:id
            },
            dataType: 'json',
        });
        return result;
    }

}

module.exports = NewService;