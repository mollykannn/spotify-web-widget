<template>
  <div class="container">
    <router-view />
  </div>
</template>
<script>
import { initStore } from "@/store/store";

export default{
  setup() {
    initStore();
  },
};
</script>