const moment = require('moment');

const time = moment().format('YYYY-MM-DD HH:mm:ss');

const time_08 = moment().utcOffset(8).format('YYYY-MM-DD HH:mm:ss')

console.log('========================================');
console.log('==========  index.js执行       ==========');

console.log('====> time的值为: ', time);
console.log('====> time_08的值为: ', time_08);

console.log('========================================');
