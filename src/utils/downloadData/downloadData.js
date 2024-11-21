import baseApiCall from '../../services/pokemon.service'
if (typeof baseApiCall !== 'function') {
  console.error('baseApiCall is not a function');
}
export const downloadData = async (itemUrl, settingFn) => {
  return settingFn? settingFn(await baseApiCall(itemUrl)) :  await baseApiCall(itemUrl);
}

export const downloadData2 = async (itemUrls, nameData) =>  await Promise.all(itemUrls.map(async itemUrl =>  await baseApiCall(itemUrl[nameData].url).catch(err => ({err}))))
