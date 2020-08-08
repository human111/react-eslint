// import testData from './test-data'
let result = {}

export const searchObjProp = (obj: any, targetId: any, targetComp: any) => {
  console.log(targetId, targetComp)
  if (Array.isArray(obj)) {
    console.log('array entry')
    // 遍历数组查找
    obj.map((item) => searchObjProp(item, targetId, targetComp))
  } else {
    console.log('object entry')
    for (const key in obj) {
      if (!Array.isArray(obj[key]) && typeof obj[key] !== 'object') {
        console.log('object entry====>>>', obj[key])
        if (obj[key] === targetId) {
          if (obj['component'] === targetComp) {
            console.log('拿到结果没啊啊啊啊', obj)
            result = obj
            return result
          }
        }
      } else {
        console.log('object object entry====>>>')
        if (Array.isArray(obj[key])) {
          console.log('object Array entry====>>>')
          obj[key].map((item: any) => searchObjProp(item, targetId, targetComp))
        } else {
          console.log('object Array1111 entry====>>>')
          searchObjProp(obj[key], targetId, targetComp)
        }
      }
    }
  }
  return result
}

// searchObjProp(testData, 661, 'layout-form')
