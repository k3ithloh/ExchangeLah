<template>
  <div class="p-6 flex bg-slate-100 justify-between">
    <div class="flex bg-slate-100">
      <img
        src="../../src/assets/img/exchangeLah.png"
        class="object-cover h-20 w-100"
      />
    </div>
    <div class="flex bg-slate-100 justify-centre flex-col">
      <div class="flex justify-center">
        <input class="" type="text" placeholder="Search" />
      </div>
      <div class="flex mt-3">
        <router-link to="/">
          <div class="py-4 px-4 flex flex-col items-center">
            <i class="fa-solid fa-house fa-2x text-[#2D3D8F]"></i>
            <a href="#home" class="text-center text-[#2D3D8F] font-bold"
              >Home</a
            >
          </div>
        </router-link>
        <router-link to="/Universities">
          <div
            class="text-black font-bold py-2 px-4 rounded; flex flex-col items-center"
          >
            <img src="../../src/assets/img/university.svg" class="w-10" />
            <a href="#universities" class="text-center text-[#2D3D8F]"
              >Universities</a
            >
          </div>
        </router-link>
        <router-link to="/moduleMapping">
          <div
            class="text-black font-bold py-2 px-4 rounded flex flex-col items-center"
          >
            <img src="../../src/assets/img/moduleMapping.svg " class="w-10" />
            <a href="#moduleMapping" class="text-center text-[#2D3D8F]"
              >Module Mapping</a
            >
          </div>
        </router-link>
        <router-link to="/community">
          <div
            class="text-black font-bold py-2 px-4 rounded flex flex-col items-center"
          >
            <img src="../../src/assets/img/community.svg " class="w-10" />
            <a href="#community" class="text-center text-[#2D3D8F]"
              >Community</a
            >
          </div>
        </router-link>
      </div>
    </div>
    <div class="flex bg-slate-100">
      <router-link
        to="/login"
        class="px-2 text-[#2D3D8F] font-semibold hover:underline underline-offset-4"
        >Log in</router-link
      >
      <router-link
        to="/signup"
        class="px-2 text-[#2D3D8F] font-semibold hover:underline underline-offset-4"
        >Sign Up</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["modelValue"],
  methods: {
    search: function () {
      alert("Searching");
      // `event` is the native DOM event
    },
  },
};
</script>

<style scoped></style>
