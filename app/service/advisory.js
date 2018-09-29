/**
 * 描述
 * @author zyp
 * @version 1.0
 * @data 2018/1/24
 */

const Service = require('egg').Service;

class AdvisoryService extends Service {

    async submit(request) {
        const api = this.config.api;
        const result = await this.ctx.curl(`${api}/cms/advisory/add`, {
            method: 'POST',
            data: {
                advisoryCountry:request.advisoryCountry,
                advisoryName:request.advisoryName,
                advisoryPhone:request.advisoryPhone,
                immigrationRequest:request.immigrationRequest,
                timeRequest:request.timeRequest,
                businessExperience:request.businessExperience,
                priceRequest:request.priceRequest,
                overseasExperience:request.overseasExperience,
                riskTolerance:request.riskTolerance
            }
        });
        return result;
    }

}

module.exports = AdvisoryService;
