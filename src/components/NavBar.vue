<template>
  <div class="bg-slate-100 px-7 pt-4 flex justify-between items-center">
    <router-link to="/" class="">
      <img src="../assets/img/logo.png" class="object-cover h-20 w-100" />
    </router-link>
    <form
      class="border-[#D3D6E7] bg-slate-100 flex justify-center items-center flex-col relative"
    >
      <span class="absolute inset-y-0 left-0 flex items-center pl-3">
        <i class="fa-solid h-4 w-4 fa-magnifying-glass text-[#2D3D8F]"></i>
      </span>
      <input
        class="placeholder:italic placeholder:text-slate-400 block bg-slate-100 w-96 border border-slate-300 rounded-md py-3 pl-10 pr-10 shadow-sm focus:outline-none sm:text-sm"
        placeholder="Search university..."
        @input="search"
        type="text"
        name="search"
      />
      <button
        type="reset"
        class="absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <i class="fa-solid h-4 w-4 fa-xmark text-[#2D3D8F]"></i>
      </button>
    </form>
    <div class="bg-slate-100 flex items-center">
      <router-link
        to="/login"
        class="mx-2 font-semibold text-[#2D3D8F] hover:text-black"
      >
        Login
      </router-link>
      <router-link
        to="/signup"
        class="mx-2 font-semibold text-[#2D3D8F] hover:text-black"
      >
        Sign Up
      </router-link>
    </div>
  </div>
  <nav class="flex justify-center">
    <router-link class="m-4" to="/">
      <div class="flex flex-col items-center">
        <i class="fa-solid fa-house text-[#2D3D8F] h-6 w-6 pb-2"></i>
        <a href="#home" class="text-[#2D3D8F] font-semibold"> Home </a>
      </div>
    </router-link>
    <router-link class="m-4" to="/universities">
      <div class="flex flex-col items-center">
        <i class="fa-solid fa-user-graduate text-[#2D3D8F] h-6 w-6 pb-2"></i>
        <a href="#universities" class="text-[#2D3D8F] font-semibold">
          Universities
        </a>
      </div>
    </router-link>
    <router-link class="m-4" to="/modulemapping">
      <div class="flex flex-col items-center">
        <i class="fa-solid fa-diagram-project text-[#2D3D8F] h-6 w-6 pb-2"></i>
        <a href="#modulemapping" class="text-[#2D3D8F] font-semibold">
          Module Mapping
        </a>
      </div>
    </router-link>
    <router-link class="m-4" to="#community">
      <div class="flex flex-col items-center">
        <i class="fa-solid fa-comments text-[#2D3D8F] h-6 w-6 pb-2"></i>
        <a href="#community" class="text-[#2D3D8F] font-semibold">
          Community
        </a>
      </div>
    </router-link>
  </nav>
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
