import baseApiCall from '../services/pokemon.service'

export const downloadData = async (itemUrl, settingFn) => {
   return settingFn(await baseApiCall(itemUrl));
}

export const downloadData2 = async (itemUrls, nameData,settingFn) => {

  const result = await Promise.all(itemUrls.map(async itemUrl =>  await baseApiCall(itemUrl[nameData].url)))
  console.log(result)
  settingFn(result)
}


export const downloadData3 = async (items, namesData, fn) => {
    const accData = []
    let count = 0
  console.log(items[0])
                  let memoize=items
                  while(count < namesData.length) {
                    console.log(count)
                    memoize = await Promise.all(memoize.map(async item => await baseApiCall(item[namesData[count]].url)))
                    accData.push(memoize);
                    count++
                  }
        fn(accData)
              
           
}