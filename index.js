'use strict';
exports.main_handler = async (event, context, callback) => {
  //解决云函数热启动问题
  delete require.cache[require.resolve('./qqreadnode.js')];
  require('./qqreadnode.js') //这里写你想要的脚本
  //require('./jd_xtg2.js') //这里写你想要的脚本
  //require('./jd_xtg3.js') //这里写你想要的脚本
}