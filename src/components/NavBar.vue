
<template>
  <div class="flex bg-blue-50 justify-between">
    <div class="flex">
      <img src="src/assets/img/exchangeLah.png" class="object-cover h-20 w-100">
    </div>
    <div class="flex bg-blue-50 justify-centre flex-col pt-5" >
      <div class="flex justify-center h-12 rounded border-2 border-[#D3D6E7]">
        <input @input="search" class="w-full bg-blue-50" type="search" placeholder="Search..">
        <span class="material-symbols-outlined text-4xl text-[#2D3D8F]">search</span>
      </div>
      <div class="flex">
        <router-link to="/">
          <div class="py-2 px-4 flex flex-col items-center ">
            <span class="material-symbols-outlined text-4xl text-[#2D3D8F]">home</span>
            <a href="#home"  class="text-center text-[#2D3D8F] font-bold">Home</a>
          </div>
        </router-link>
        <router-link to="#univeristy">
          <div class="py-2 px-4 flex flex-col items-center ">
            <span class="material-symbols-outlined text-4xl text-[#2D3D8F]">school</span>
            <a href="#home"  class="text-center text-[#2D3D8F] font-bold">Universities</a>
          </div>
        </router-link>
        <router-link to="#moduleMapping">
          <div class="py-2 px-4 flex flex-col items-center ">
          <span class="material-symbols-outlined text-4xl text-[#2D3D8F]">map</span>
            <a href="#home" class="text-center text-[#2D3D8F] font-bold">Module Mapping</a>
          </div>
        </router-link>
        <router-link to="#community">
          <div class="py-2 px-4 flex flex-col items-center ">
            <span class="material-symbols-outlined text-4xl text-[#2D3D8F] ">forum</span>
            <a href="#home" class="text-center text-[#2D3D8F] font-bold">Community</a>
          </div>
        </router-link>
      </div>
    </div>
    <div class="flex bg-blue-50">
      <router-link to="/login" class="px-2 underline">Log in</router-link>
      <router-link to="/signup" class="px-2 underline">Sign Up</router-link>
    </div>
  </div>
</template>

<script>
export default{
    props: ['modelValue'],
    methods: {
    search: function () {
      alert('Searching')
      // `event` is the native DOM event
    }
  }
}
</script>

<style scoped>
</style>
