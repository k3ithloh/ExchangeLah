<template>
  <!-- MOBILE -->
  <div class="sm:hidden">
    <div class="flex justify-end w-full">
      <button @click="navBar = !navBar" class="">
        <span v-if="navBar">
          <i class="fa-solid fa-grip-lines h-12 w-12"></i>
        </span>
        <span v-else>
          <i class="fa-solid fa-xmark h-12 w-12"></i>
        </span>
      </button>
    </div>
            <!-- Mobile NavBar -->
    <transition
      enter-active-class="duration-500 transform transition ease-in-out origin-top "
      enter-from-class="scale-y-0 opacity-0"
      enter-to-class="scale-y-100 opacity-100 "
      leave-active-class="duration-200 transform ease-in-out origin-top"
      leave-from-class="scale-y-100 opacity-100"
      leave-to-class="scale-y-50 opacity-0"
    >
      <nav v-if="!navBar" class=" bg-blue-500 w-full absolute">
        <div class="flex justify-end">
          <router-link
            to="/login"
            class="mx-2 font-semibold text-blue-100 hover:text-black"
            @click="navBar = !navBar"
          >
            Login
          </router-link>
          <router-link
            to="/signup"
            class="mx-2 font-semibold text-blue-100 hover:text-black"
            @click="navBar = !navBar"
          >
            Sign Up
          </router-link>
        </div>

        <div class="flex flex-col justify-center items-center py-5 text-blue-100">
          <router-link @click="navBar = !navBar" class="m-4" to="/">
            <div class="flex space-x-4 items-center ">
              <i class="fa-solid fa-house  h-6 w-6 pb-2"></i>
              <a href="#home" class=" font-semibold ">Home</a>
            </div>
          </router-link>
          <router-link @click="navBar = !navBar" class="m-4" to="/universities">
            <div class="flex space-x-4 items-center">
              <i class="fa-solid fa-user-graduate  h-6 w-6 pb-2"></i>
              <a href="#universities" class=" font-semibold"
                >Universities</a
              >
            </div>
          </router-link>
          <router-link @click="navBar = !navBar" class="m-4" to="/modulemapping">
            <div class="flex space-x-4 items-center">
              <i class="fa-solid fa-diagram-project  h-6 w-6 pb-2"></i>
              <a href="#modulemapping" class=" font-semibold"
                >Module Mapping</a
              >
            </div>
          </router-link>
          <router-link @click="navBar = !navBar" class="m-4" to="#community">
            <div class="flex space-x-4 items-center">
              <i class="fa-solid fa-comments  h-6 w-6 pb-2"></i>
              <a href="#community" class=" font-semibold">Community</a>
            </div>
          </router-link>
        </div>
      </nav>
    </transition>
  </div>
  <!-- DESKTOP -->

  <div class="flex flex-col justify-center items-center sm:flex-row sm:justify-between mx-4">
    <router-link to="/" class="">
      <img src="../assets/img/logo.png" class=" h-32" />
    </router-link>
    <form class="flex justify-center items-center border border-slate-300 rounded-md shadow-sm focus:outline-none sm:text-sm mb-4">
      <span class=" left-0 items-center ml-3 h-fit">
        <i class="fa-solid h-4 w-4 fa-magnifying-glass text-[#2D3D8F]"></i>
      </span>
      <input
        class="placeholder:italic placeholder:text-slate-400 block bg-slate-100 sm:w-96 py-3 pl-5 pr-5 "
        placeholder="Search university..."
        @input="search"
        type="text"
        name="search"
      />
      <button
        type="reset"
        class="right-0 flex items-center mr-3 h-fit"
      >
        <i class="fa-solid fa-xmark h-4 w-4 text-[#2D3D8F]"></i>
      </button>
    </form>
    <div class="hidden sm:flex items-center justify-end">
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

  <nav v-if="navBar" class="hidden sm:block">
    <div class="flex justify-center items-center">
      <router-link class="m-4" to="/">
        <div class="flex flex-col items-center">
          <i class="fa-solid fa-house text-[#2D3D8F] h-6 w-6 pb-2"></i>
          <a href="#home" class="text-[#2D3D8F] font-semibold">Home</a>
        </div>
      </router-link>
      <router-link class="m-4" to="/universities">
        <div class="flex flex-col items-center">
          <i class="fa-solid fa-user-graduate text-[#2D3D8F] h-6 w-6 pb-2"></i>
          <a href="#universities" class="text-[#2D3D8F] font-semibold"
            >Universities</a
          >
        </div>
      </router-link>
      <router-link class="m-4" to="/modulemapping">
        <div class="flex flex-col items-center">
          <i class="fa-solid fa-diagram-project text-[#2D3D8F] h-6 w-6 pb-2"></i>
          <a href="#modulemapping" class="text-[#2D3D8F] font-semibold"
            >Module Mapping</a
          >
        </div>
      </router-link>
      <router-link class="m-4" to="#community">
        <div class="flex flex-col items-center">
          <i class="fa-solid fa-comments text-[#2D3D8F] h-6 w-6 pb-2"></i>
          <a href="#community" class="text-[#2D3D8F] font-semibold">Community</a>
        </div>
      </router-link>
    </div>
  </nav>

</template>

<script>

export default {
  data() {
    return {
      navBar: true,

    }
  },
  methods: {
    search: function () {
      alert("Searching");
    },
  },
};
</script>

<style lang="scss" scoped></style>
