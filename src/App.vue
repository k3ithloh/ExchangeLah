<template>
  <div class="h-screen bg-slate-100">
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
