const studentService = require('./studentService')




class studentController {
  // test接口
  static async test(req, res) {
    try {
      const result = await studentService.test();
      res.json({
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
}


module.exports = studentController;