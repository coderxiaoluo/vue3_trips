import myRequest from "../request"

export function getDateilInfos(houseId){
  return myRequest.get({
    url:'/detail/infos',
    params:{
      houseId
    }
  })
}