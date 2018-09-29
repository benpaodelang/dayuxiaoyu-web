/**
 * 描述
 * @author zyp
 * @version 1.0
 * @data 2018/1/22
 */

const moment = require('moment');

module.exports = {
    relativeTime(time) {
        return moment(new Date(time * 1000)).fromNow()
    },
    timeFormat(time,format) {
        return moment(time).format(format)
    }
}