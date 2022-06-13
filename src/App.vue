<template>
  <div class="min-w-full py-4 px-7">
    <NavBar />
    <router-view></router-view>
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
