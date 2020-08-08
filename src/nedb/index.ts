import path from 'path';
import nedb from 'nedb';

const data = path.resolve(__dirname, 'nedb.db');
console.log(data);
// 实例化连接对象（不带参数默认为内存数据库）
const nedb_DB = new nedb({
  filename: data,
  autoload: true
});
export default nedb_DB;
