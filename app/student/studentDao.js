// 数据库辅助查询工具
const knex = require('../config/knex');


const student = 'student';

class studentDao{

  // static async test() {
  //   // 获取所有的学生
  //   const result = await knex('student').select();
  //   return result;
  // }


  static async getOneBy(conditions) {
    const result = await knex(student).select().where(conditions);
    return result;
  }
}

module.exports = studentDao;