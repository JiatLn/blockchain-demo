<script setup lang="ts">
const blockHash = useStorage('block-hash', '')

const { refresh, blockChain, errorMsg, loading } = useBlockChain(blockHash)

const updateHash = (hash: string) => {
  blockHash.value = hash
}
</script>

<template>
  <div flex="c col" px-6 mx-auto max-w-900px>
    <input v-model="blockHash" w-full p-2 my-4 rounded border="~ gray-400/50" type="text" placeholder="input a block hash and keydown enter to search" @keydown.enter="refresh">
    <TheResult :block-chain="blockChain" :loading="loading" :error-msg="errorMsg" @update-block-hash="updateHash" />
  </div>
</template>

<style lang="scss" scoped>
</style>
