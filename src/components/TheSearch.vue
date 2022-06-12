<script setup lang="ts">
const blockHash = ref<string>('tttt')

const onSearch = () => {
  console.log(blockHash.value)
}
</script>

<template>
  <div flex="c col">
    <input v-model="blockHash" w="80%" p-2 my-2 rounded border="~ gray-400/50" type="text" placeholder="input a block hash and keydown enter to search" @keydown.enter="onSearch">
    {{ blockHash }}
  </div>
</template>

<style scoped lang="scss">
</style>
