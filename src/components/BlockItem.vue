<script setup lang="ts">
import type { BlockChainSummary } from '@/type'
import { tf } from '@/utils'

const props = defineProps<{
  label: keyof BlockChainSummary
  value: any
}>()
</script>

<template>
  <div flex="~ wrap" justify-between items-baseline pb-1 mb-2 border-b="~ dashed gray-500/50">
    <div w-200px font-thin text="xl gray-500">
      {{ tf(props.label) }}
    </div>
    <div flex-1 text-right truncate :title="props.value">
      {{ props.value }}
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
