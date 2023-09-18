<template>
  <div>
    <nav>
      <el-button
        v-for="item of menuList"
        :key="item.id"
        @click="routeClick(item)"
        type="primary"
        >{{ item.label }}</el-button
      >
      <!-- <RouterLink :to="item.router">{{ item.label }}</RouterLink> -->
    </nav>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const routeClick = item => {
  // console.log("路由切换", item);
  router.push(item.router);
};

const menuList = reactive([
  {
    id: 1,
    label: "home",
    router: "/"
  },
  {
    id: 2,
    label: "about",
    router: "/about"
  },
  {
    id: 3,
    label: "async",
    router: "/async"
  },
  {
    id: 4,
    label: "modal",
    router: "/modal"
  }
]);
</script>

<style scoped></style>
