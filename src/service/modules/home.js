import  myRequest  from "../request"

export function getHomeSuggests() {
  return myRequest.get({
    url:'/home/hotSuggests'
  })
}

export function getHomeCategories() {
  return myRequest.get( {
    url:'/home/categories'
  })
}

export function getHomeHouselist(currentPage) {
  return myRequest.get({
    url:'/home/houselist',
    params:{
      page:currentPage
    }
  })
}