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
    case 'getUserInfoByNickName': {
      result = getUserInfoByNickName(event)
      console.log("func main result:" + result)
      return result
    }    
    case 'addUserInfo': {
      result = addUserInfo(event)
      return result
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

async function getUserInfoByNickName(event) {
  var nickName = event.nickName
  var result = {}
  try {
    console.log("getUserInfoByNickName: " + nickName);
    result = await db.collection('userInfo').where({
      webChatNickName: nickName
    }).get();
  }catch(e) {
    console("getUserInfoByNickName e:" + e)
  }
  console.log("getUserInfoByNickName result:" + result);
  return result
}

async function addUserInfo(event) {
  var uid = event.uid
  var webChatNickName = event.nickName
  var result = {}
  try {
    console.log("addUserInfo: uid " + uid + " webChatNickName " + webChatNickName);
    result = await db.collection('userInfo').add({
        data: {
          uid: uid,
          webChatNickName: webChatNickName
        }
      }).then(res=>{
          console.log(res);
      });
  }catch(e) {
    console("addUserInfo e:" + e)
  }
  console.log("addUserInfo result:" + result);
  return result
}