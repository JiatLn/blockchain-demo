<script setup lang="ts">
const props = defineProps<{
  loading: boolean
}>()
</script>

<template>
  <div v-show="props.loading" h="60vh" flex="c col">
    <div text="4xl" i-eos-icons:loading />
    <div mt-3>
      loading...
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
