<script setup lang="ts">
const isDark = useDark()
const toggle = useToggle(isDark)
</script>

<template>
  <div font-mono p="x4 y2" border-b="~ gray-400/40" mb-2 flex items-center justify-between>
    <span text="2xl">Block Chain App</span>
    <div>
      <div i-carbon-sun dark:i-carbon-moon cursor="pointer" @click="toggle()" />
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
