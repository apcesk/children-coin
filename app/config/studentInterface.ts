

interface Student{
  id?: number;// 数据库主键
  name?: string;// 名字
  age?: number;// 年纪
  id_card?: string;// 身份证号
  user_name?: string;// 用户名
  password?: string;// 密码
  birthday?: Date;// 生日
  coin_count?: number;// 童币数量
  course?: number | null;// 所选课程
  gender?: number | boolean;// 性别
  school?: string | number | null;// 学校
}


export {Student};
