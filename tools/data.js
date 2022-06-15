/**
 * @author apcesk
 * @description 用于接口返回的数据
 */



class Data {
  // 消息
  // private msg: string;
  // // 数据
  // private data: object | number | string | any[];
  // // 编码
  // private code: number;
  constructor(msg, data, code = 200) {
    this.msg = msg;
    this.data = data;
    this.code = code;
  }
}

// 列表型数据
class ListData extends Data{
  // private total: number;
  // private page_size: number;
  // private page: number;
  constructor(msg, data, total, page_size, page, code = 200) {
    super(msg, data, code);
    this.total = total;
    this.page_size = page_size;
    this.page = page;
  }
}



module.exports = {
  ListData,
  Data
}