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
    case 'getUserInfoByUid': {
      result = getUserInfoByUid(event)
      console.log("func main result:" + result)
      return result
    }
    case 'addUserInfo': {
      return 
    }
    case 'updateUserInfo': {
      return 
    }
    // 暂不实现
    case 'deleleUserInfo': {
      return 
    }
    default: {
      return
    }
  }
}

async function getUserInfoByUid(event) {
  var uid = event.uid
  var result = {}
  try {
    console.log("getUserInfoByUid: " + uid);
    result = await db.collection('userInfo').where({
      uid: uid
    }).get();
  }catch(e) {
    console("getUserInfoByUid e:" + e)
  }
  console.log("getUserInfoByUid result:" + result);
  return result
}