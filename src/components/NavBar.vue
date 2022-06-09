
<template>
  <div class="flex bg-blue-50 justify-between">
    <div class="flex justify-center items-center">
      <img src="src/assets/img/exchangeLah.png" class="object-cover h-20 w-100">
    </div>
    <div class="flex bg-blue-50 justify-centre flex-col pt-5" >
      <div class="flex justify-center h-12 rounded border-2 border-[#D3D6E7]">
        <input @input="search" class="w-full bg-blue-50" type="search" placeholder="Search..">
        <div class="flex justify-center items-center">
          <i class="fa-solid fa-magnifying-glass fa-2x text-[#2D3D8F]"></i>
        </div>
      </div>
      <div class="flex">
        <router-link to="/">
          <div class="py-4 px-4 flex flex-col items-center ">
            <i class="fa-solid fa-house fa-2x text-[#2D3D8F]"></i>
            <a href="#home"  class="text-center text-[#2D3D8F] font-bold">Home</a>
          </div>
        </router-link>
        <router-link to="#univeristy">
          <div class="py-4 px-4 flex flex-col items-center ">
            <i class="fa-solid fa-user-graduate fa-2x text-[#2D3D8F]"></i>
            <a href="#home"  class="text-center text-[#2D3D8F] font-bold">Universities</a>
          </div>
        </router-link>
        <router-link to="#moduleMapping">
          <div class="py-4 px-4 flex flex-col items-center ">
            <i class="fa-solid fa-diagram-project fa-2x text-[#2D3D8F]"></i>
            <a href="#home" class="text-center text-[#2D3D8F] font-bold">Module Mapping</a>
          </div>
        </router-link>
        <router-link to="#community">
          <div class="py-4 px-4 flex flex-col items-center ">
            <i class="fa-solid fa-comments fa-2x text-[#2D3D8F]"></i>
            <a href="#home" class="text-center text-[#2D3D8F] font-bold">Community</a>
          </div>
        </router-link>
      </div>
    </div>
    <div class="flex bg-blue-50 py-4">
      <router-link to="/login" class="px-2 underline font-bold text-[#2D3D8F]">Log in</router-link>
      <router-link to="/signup" class="px-2 underline font-bold text-[#2D3D8F]">Sign Up</router-link>
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
