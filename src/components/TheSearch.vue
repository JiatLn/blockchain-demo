<script setup lang="ts">
const blockHash = ref<string>('tttt')

const { refresh, blockChain, errorMsg, loading } = useBlockChain(blockHash)
</script>

<template>
  <div flex="c col">
    <input v-model="blockHash" w="80%" p-2 my-2 rounded border="~ gray-400/50" type="text" placeholder="input a block hash and keydown enter to search" @keydown.enter="refresh">
    <div v-if="blockChain">
      {{ blockChain }}
    </div>
    <div v-if="!loading && !blockChain">
      {{ errorMsg }}
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
