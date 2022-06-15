const studentService = require('./studentService')

// 导入学生类的属性
// const { Student } = require('../config/studentInterface')
// console.log(Student)

// 导入错误类
const { 
  ParamError,
  DefaultError 
} = require('../../tools/errorType');

// 导入要返回的数据类
const {
  Data,
  ListData
} = require('../../tools/data.js');

class studentController {
  // test接口
  static async test(req, res) {
    try {
      const result = await studentService.test();
      res.status(200).json({
        code: 200,
        message: "测试接口成功!",
        data: result
      })
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        code: 500,
        message: "出错了!"
      });
      // res.error('出错了! error message: ' + JSON.stringify(error));
    }
  }
  /**
   * @api {GET} /student/{params} /student/{params} 查询学生信息 
   * @apiName 查询所有的学生
   * @apiGroup student 
   * 
   * @apiParam {Number} [id] 学生的id
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "firstname": "John",
   *       "lastname": "Doe"
   *     }
   *
   * @apiError 对应id的学生没有找到
   *
   * 
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 404 Not Found
   *     {
   *       "error": "UserNotFound"
   *     }
   */

  static async getStudentDetail(req, res) {
    try {
      const {
        id
      } = req.params;
      if (isNaN(Number(id))) {
        throw new ParamError("id参数不符合规则！", 400)
      }
      // 查询指定的学员的信息
      const result = await studentService.getOne(id);
      res.json( new Data(
        '查询成功',
        result,
        200
      ))
    } catch (error) {
      // throw new DefaultError("错误，请管理员检查", 500);
      res.status(400);
    }
  }
}


module.exports = studentController;