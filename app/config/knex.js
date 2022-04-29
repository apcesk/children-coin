/**
 * knex 配置文件
 * @configKey client 使用的数据库的客户端
 * @configKey connection 详细的配置信息
 * @configKey connection.host 数据库的连接地址
 * @configKey connection.port 数据库的端口号
 * @configKey connection.user 数据库的连接用户名
 * @configKey connection.database 数据库选择的哪个database 
 */

const kenx = require('knex')({
  'client'    : "pg",
  'connection': {
    host      : '',
    port      : '',
    user      : '',
    password  : '',
    database  : ''
  }
})

module.exports = knex;
