<script setup lang="ts">
import type { ApiError } from '@/api/types'
import type { IBlockChain } from '@/type'

type BlockChainSummary = Omit<IBlockChain, 'tx' | 'next_block'>

const props = defineProps<{
  loading: boolean
  blockChain: IBlockChain | undefined
  errorMsg: ApiError | undefined
}>()

const emits = defineEmits<{
  (e: 'updateBlockHash', blockHash: string): void
}>()

const summaryBlockChain = computed<BlockChainSummary>((): BlockChainSummary => {
  const { tx, next_block, ...blockChain } = props.blockChain!
  return blockChain
})

const toNextBlock = (hash: string) => {
  emits('updateBlockHash', hash)
}
</script>

<template>
  <TheLoading v-if="props.loading" :loading="props.loading" />
  <template v-else>
    <div v-if="blockChain" w-full>
      <ul>
        <li v-for="[key, value] in Object.entries(summaryBlockChain)" :key="key" flex="~ wrap" justify-between items-baseline pb-1 mb-2 border-b="~ dashed gray-500/50">
          <div w-200px font-thin text="xl">
            {{ key }}
          </div>
          <div flex-1 text-right>
            {{ value }}
          </div>
        </li>
        <li v-if="props.blockChain?.next_block.length" flex="~ wrap" justify-between items-baseline pb-1 mb-2 border-b="~ dashed gray-500/50">
          <div w-200px font-thin text="xl">
            next_block
          </div>
          <div flex-1 text-right cursor="pointer" hover="text-brand-primary" @click="toNextBlock(props.blockChain!.next_block[0])">
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
