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

  async function getProductInfoByPid(event) {
    var pid = event.pid
    var result = {}
    try {
      console.log("getProductInfoByPid: " + uid);
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