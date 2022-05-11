const studentDao = require("./studentDao");



class studentService {
  static async test() {
    const result = await studentDao.test();
    return result;
  }
}

module.exports = studentService;