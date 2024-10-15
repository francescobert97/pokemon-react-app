const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '').replace(/\.[^/.]+$/, "")] = r(item);
      return '';
    });
    return images;
  };

 export const imgs = importAll(require.context('../assets/types-icons', false, /\.(webp|png|jpe?g|svg)$/));