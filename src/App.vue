<template>
  <div>
    <NavBar />
    <router-view class="px-8"></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
