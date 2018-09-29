/**
 * 描述
 * @author zyp
 * @version 1.0
 * @data 2018/1/24
 */

const Service = require('egg').Service;

class CategoryService extends Service {

    async list(parentId=0) {
        const api = this.config.api;
        const result = await this.ctx.curl(`${api}/cms/category/list`, {
            method: 'POST',
            data: {
                parentId:parentId
            },
            dataType: 'json',
        });
        return result;
    }

    async treeList(parentId=0) {
        const api = this.config.api;
        const result = await this.ctx.curl(`${api}/cms/category/treeList`, {
            method: 'POST',
            data: {
                parentId:parentId
            },
            dataType: 'json',
        });
        return result;
    }

    async detail(id=0) {
        const api = this.config.api;
        const result = await this.ctx.curl(`${api}/cms/category/detail`, {
            method: 'POST',
            data: {
                id:id
            },
            dataType: 'json',
        });
        return result;
    }

}

module.exports = CategoryService;
