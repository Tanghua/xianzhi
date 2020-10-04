// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init();
const db = cloud.database({
  //这个是环境ID不是环境名称
  env:'nirvanaluffy-zwa7i'
  });

// 云函数入口函数
exports.main = async (event, context) => {
  var result = {};
  try {
        console.log("zth getData:start 01 ");
        result = await db.collection('order').get();
        console.log("zth db ret:" + result);
  }catch(e) {
    console("zth e:" + e)
  }

  return result;
}