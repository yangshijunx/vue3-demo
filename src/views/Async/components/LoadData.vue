<template>
  <div />
  {{ name }}
</template>

<script setup lang="ts">
console.log("异步组件");
let name;
const getData = async () => {
  console.log("获取数据");
  await fetch(
    "https://www.fastmock.site/mock/d3f5b324b2dd55d54d3cfecb22c6a0e7/apiv1/auth/getAuthButtonList"
  ).then(res => {
    console.log("调用接口数据", res);
    name = res.url;
  });
};
getData();
</script>

<style scoped></style>
