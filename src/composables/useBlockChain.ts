import type { Ref } from 'vue'
import type { IBlockChain } from '@/type'
import { getBlockChainApi } from '@/api/blockchain'
import type { ApiError } from '@/api/types'

export function useBlockChain(blockHash: Ref<string>) {
  const loading = ref<boolean>(false)
  const blockChain = ref<IBlockChain | null>(null)
  const errorMsg = ref<ApiError>()
  const refresh = async () => {
    if (!blockHash.value.trim())
      return
    blockChain.value = null
    loading.value = true
    try {
      const data = await getBlockChainApi(blockHash.value)
      blockChain.value = data
    }
    catch (error: any) {
      console.error(error)
      errorMsg.value = error
    }
    loading.value = false
  }
  refresh()
  return {
    blockChain,
    errorMsg,
    loading,
    refresh,
  }
}
