<template>
  <div>Teleport，应该有一个bodyDiv在body上面</div>
  <Teleport to="body">
    <div class="modal bodyDiv">
      <p>Hello from the modal!</p>
      <button>Close</button>
    </div>
  </Teleport>
</template>

<script setup lang="ts"></script>

<style scoped></style>
