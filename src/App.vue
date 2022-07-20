<template>
  <div>
    <NavBar />
    <router-view class="px-8"></router-view>
    <!-- {{ response }} -->
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      response: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      await fetch("https://fakestoreapi.com/products", {
        headers: { "Content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((response) => {
          this.response = response;
        })
        .catch((error) => {
          console.log("Looks like there was a problem: \n", error);
        });
    },
  },
};
</script>
