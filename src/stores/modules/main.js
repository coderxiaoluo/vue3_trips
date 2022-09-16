import { defineStore} from "pinia"

// 日期
const startDate = new Date()
const endDate = new Date()
endDate.setDate(startDate.getDate() + 1)

const useMainStroe = defineStore("main", {
  state:() =>({
    startDate: startDate,
    endDate:endDate,
    isLoading:true
  })
})
export default useMainStroe