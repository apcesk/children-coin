const studentDao = require("./studentDao");



class studentService {
  // static async test() {
  //   const result = await studentDao.test();
  //   return result;
  // }
  static async getOne(id) {
    const result = await studentDao.getOneBy({
      id
    });
    return result;
  }


}

module.exports = studentService;