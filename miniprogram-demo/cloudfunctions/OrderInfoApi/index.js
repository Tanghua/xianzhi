// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database({
  //这个是环境ID不是环境名称
  env:'nirvanaluffy-zwa7i'
  });

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  var result = {}
  switch (event.action) {
    // 暂时只提供用户维度的查询
    case 'getOrderInfoByUid': {
      result = getOrderInfoByUid(event)
      console.log("func main result:" + result)
      return result
    }
    case 'addOrderInfo': {
      result = addOrderInfo(event)
      return result
    }
    case 'updateOrderInfo': {
      return 
    }
    case 'deleleOrderInfo': {
      deleleOrderInfo(event);
      return 
    }
    default: {
      return
    }
  }
}

async function deleleOrderInfo(event) {
  var pid = event.uid
  var result = {}
  try {
    console.log("deleleOrderInfo: " + uid);
    result = await db.collection('order').remove();
  }catch(e) {
    console("deleleOrderInfo e:" + e)
  }
  console.log("deleleOrderInfo result:" + result);
  return result
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

async function addOrderInfo(event) {
  var pid = event.pid
  var uid = event.uid
  var result = {}
  try {
    console.log("addOrderInfo: uid " + uid + " productId " + pid);
    result = await db.collection('order').add({
        data: {
          buyId: uid,
          productId: pid
        }
      }).then(res=>{
          console.log(res);
      });
  }catch(e) {
    console("addOrderInfo e:" + e)
  }
  console.log("addOrderInfo result:" + result);
  return result
}