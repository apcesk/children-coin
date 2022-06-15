/**
 * @author apcesk
 * @description 用于定义各种错误的类型，进行使用
 */



class ParamError extends Error {

  constructor(msg, code) {
    super(msg);
    this.code = code;
    this.errorName = "参数错误";
  }

}

class DefaultError extends Error{
  constructor(msg, code) {
    
    super(msg);
    this.code = code;
    this.errorName = "默认错误";
  }
}


module.exports = {
  ParamError,
  DefaultError
}