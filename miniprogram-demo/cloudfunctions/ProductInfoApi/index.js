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
    case 'getAllProductInfo': {
      result = getAllProductInfo(event)
      console.log("func main result:" + result)
      return result
    }
    case 'getProductInfoByPid': {
      result = getProductInfoByPid(event)
      console.log("func main result:" + result)
      return result
    }
    // 暂无前台添加需求
    case 'addProductInfo': {
      return 
    }
     // 暂无前台更新需求
    case 'updateProductInfo': {
      return 
    }
    // 暂不实现
    case 'deleleProductInfo': {
      return 
    }
    default: {
      return
    }
  }

  async function getAllProductInfo(event) {
    var result = {}
    try {
      console.log("getAllProductInfo start");
      result = await db.collection('product').get();
    }catch(e) {
      console("getAllProductInfo e:" + e)
    }
    console.log("getAllProductInfo result:" + result);
    return result
  }

  async function getProductInfoByPid(event) {
    var pid = event.pid
    var result = {}
    try {
      console.log("getProductInfoByPid: " + pid);
      result = await db.collection('product').where({
        productId: pid
      }).get();
    }catch(e) {
      console("getProductInfoByPid e:" + e)
    }
    console.log("getProductInfoByPid result:" + result);
    return result
  }
}