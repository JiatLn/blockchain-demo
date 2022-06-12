<script setup lang="ts">
import type { ApiError } from '@/api/types'
import type { BlockChainSummary, IBlockChain } from '@/type'
import { formatDate } from '@/utils'

const props = defineProps<{
  loading: boolean
  blockChain: IBlockChain | null
  errorMsg: ApiError | undefined
}>()

const emits = defineEmits<{
  (e: 'updateBlockHash', blockHash: string): void
}>()

const summaryBlockChain = computed<BlockChainSummary>((): BlockChainSummary => {
  const { tx, prev_block, next_block, ...blockChain } = props.blockChain!
  return {
    ...blockChain,
    time: formatDate(blockChain.time as number * 1000, 'YYYY-MM-DD HH:mm:ss'),
    weight: `${blockChain.weight.toLocaleString()} WU`,
    fee: `${blockChain.fee.toLocaleString()} BTC`,
    bits: blockChain.bits.toLocaleString(),
    nonce: blockChain.nonce.toLocaleString(),
    size: `${blockChain.size.toLocaleString()} bytes`,
    ver: `0x${blockChain.ver.toString(16)}`,
  }
})

const toBlock = (hash: string) => {
  emits('updateBlockHash', hash)
}
</script>

<template>
  <TheLoading v-if="props.loading" :loading="props.loading" />
  <template v-else>
    <div v-if="blockChain" w-full>
      <h3 text="3xl brand-primary center" mb-4>
        Block Summary
      </h3>
      <BlockItem v-for="value, key of summaryBlockChain" :key="key" :label="key" :value="value" />
      <ul>
        <li v-if="props.blockChain?.prev_block" flex="~ wrap" justify-between items-baseline pb-1 mb-2 border-b="~ dashed gray-500/50">
          <div w-200px font-thin text="xl">
            PrevBlock
          </div>
          <div flex-1 text-right truncate cursor="pointer" hover="text-brand-primary" @click="toBlock(props.blockChain!.prev_block)">
            {{ props.blockChain.prev_block }}
          </div>
        </li>
        <li v-if="props.blockChain?.next_block.length" flex="~ wrap" justify-between items-baseline pb-1 mb-2 border-b="~ dashed gray-500/50">
          <div w-200px font-thin text="xl">
            NextBlock
          </div>
          <div flex-1 text-right truncate cursor="pointer" hover="text-brand-primary" @click="toBlock(props.blockChain!.next_block[0])">
            {{ props.blockChain.next_block[0] }}
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      {{ props.errorMsg }}
    </div>
  </template>
</template>

<style scoped lang="scss">
</style>
