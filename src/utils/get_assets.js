export const getAssetsURL = (image) =>{
  return new URL(`../assets/img/tabbar/${image}`,import.meta.url).href
}