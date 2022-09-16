import { defineStore } from "pinia";
import { getCityAll } from "@/service";

// 返回出去的是一个函数
const useCityStore = defineStore("city", {
  state: () => ({
    allCitys: {},
    currentCity: { cityName: "重庆" }
  }),
  actions: {
    async fetchAllCitysData() {
      const res = await getCityAll()
      this.allCitys = res.data
    }
  }
})

export default useCityStore