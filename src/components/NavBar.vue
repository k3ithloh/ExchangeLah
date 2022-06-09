<template>
  <div class="flex bg-slate-100 justify-between px-7 pt-3 items-center">
    <div class="flex justify-center items-center">
      <img
        src="src/assets/img/exchangeLah.png"
        class="object-cover h-20 w-100"
      />
    </div>
    <div class="flex bg-slate-100 justify-center items-center flex-col">
      <div
        class="flex justify-center px-5 h-12 rounded border-2 border-[#D3D6E7]"
      >
        <input
          @input="search"
          class="w-full bg-slate-100"
          type="search"
          placeholder="Search.."
        />
        <div class="flex justify-center items-center">
          <i
            class="fa-solid h-5 w-5 fa-magnifying-glass fa-2x text-[#2D3D8F]"
          ></i>
        </div>
      </div>
    </div>
    <div class="flex bg-slate-100">
      <router-link
        to="/login"
        class="px-2 font-semibold text-[#2D3D8F] hover:text-black"
        >Log in</router-link
      >
      <router-link
        to="/signup"
        class="px-2 font-semibold text-[#2D3D8F] hover:text-black"
        >Sign Up</router-link
      >
    </div>
  </div>
  <div class="flex justify-center">
    <router-link to="/">
      <div class="p-4 flex flex-col items-center">
        <i class="fa-solid fa-house fa-2x text-[#2D3D8F] h-7 w-7"></i>
        <a href="#home" class="text-center pt-2 text-[#2D3D8F] font-bold"
          >Home</a
        >
      </div>
    </router-link>
    <router-link to="/universities">
      <div class="p-4 flex flex-col items-center">
        <i class="fa-solid fa-user-graduate fa-2x text-[#2D3D8F] h-7 w-7"></i>
        <a
          href="#universities"
          class="text-center pt-2 text-[#2D3D8F] font-bold"
          >Universities</a
        >
      </div>
    </router-link>
    <router-link to="/modulemapping">
      <div class="p-4 flex flex-col items-center">
        <i class="fa-solid fa-diagram-project fa-2x text-[#2D3D8F] h-7 w-7"></i>
        <a
          href="#modulemapping"
          class="text-center pt-2 text-[#2D3D8F] font-bold"
          >Module Mapping</a
        >
      </div>
    </router-link>
    <router-link to="#community">
      <div class="p-4 flex flex-col items-center">
        <i class="fa-solid fa-comments fa-2x text-[#2D3D8F] h-7 w-7"></i>
        <a href="#community" class="text-center pt-2 text-[#2D3D8F] font-bold"
          >Community</a
        >
      </div>
    </router-link>
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
