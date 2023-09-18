<template>
  <Suspense>
    <!-- 具有深层异步依赖的组件 -->
    <template #default>
      <LoadData />
    </template>
    <!-- 在 #fallback 插槽中显示 “正在加载中” -->
    <template #fallback> Loading...??? </template>
  </Suspense>
</template>

<script setup lang="ts">
import LoadData from "./components/LoadData.vue";
</script>

<style scoped></style>
