// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database({
  //这个是环境ID不是环境名称
  env:'nirvanaluffy-zwa7i'
  });

// 云函数入口函数
exports.main = async (event, context) => {
  var result = {}
  switch (event.action) {
    // 暂时只提供用户维度的查询
    case 'getOrderInfoByUid': {
      result = getOrderInfoByUid(event)
      console.log("func main result:" + result)
      return result
    }
    case 'addOrderInfo': {
      return 
    }
    case 'updateOrderInfo': {
      return 
    }
    case 'deleleOrderInfo': {
      return 
    }
    default: {
      return
    }
  }
}

async function getOrderInfoByUid(event) {
  var pid = event.uid
  var result = {}
  try {
    console.log("getOrderInfoByUid: " + uid);
    result = await db.collection('order').where({
      buyerId: uid
    }).get();
  }catch(e) {
    console("getOrderInfoByUid e:" + e)
  }
  console.log("getOrderInfoByUid result:" + result);
  return result
}