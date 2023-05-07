import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useStore = defineStore('main', () => {
  const ipConfig = ref({})
  function updateIpconfig(data) {
    ipConfig.value = data
  }
  return { ipConfig, updateIpconfig }
})
