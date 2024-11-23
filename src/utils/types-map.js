export const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '').replace(/\.[^/.]+$/, "")] = r(item);
      return '';
    });
    return images;
  };

 export const typeIconImgs = () => importAll(require.context('../assets/icons/types-icons', false, /\.(webp|png|jpe?g|svg)$/));
 export const layoutImgs = importAll(require.context('../assets/template', false, /\.(webp|png|jpe?g|svg)$/));

