<template>

  <div class="p-6 flex bg-blue-50 justify-between">
    <div class="flex bg-blue-50">
      <img src="src/assets/img/exchangeLah.png" class="object-cover h-20 w-100">
    </div>
    <div class="flex bg-blue-50 justify-centre flex-col " >
      <div class="flex justify-center ">
        <input class="" type="text" placeholder="Search..">
      </div>
      <div class="flex">
        <router-link to="/">
          <div class="text-black font-bold py-2 px-4 rounded flex flex-col items-center ">
            <img src="src/assets/img/home.svg" class="w-10">
            <a href="#home"  class="text-center text-[#2D3D8F]">Home</a>
          </div>
        </router-link>
        <router-link to="#univeristy">
          <div class="text-black font-bold py-2 px-4 rounded; flex flex-col items-center ">
            <img src="src/assets/img/university.svg" class="w-10">
            <a href="#home"  class="text-center text-[#2D3D8F]">Universities</a>
          </div>
        </router-link>
        <router-link to="#moduleMapping">
          <div class="text-black font-bold py-2 px-4 rounded flex flex-col items-center ">
            <img src="src/assets/img/moduleMapping.svg " class="w-10">
            <a href="#home" class="text-center text-[#2D3D8F]">Module Mapping</a>
          </div>
        </router-link>
        <router-link to="#community">
          <div class="text-black font-bold py-2 px-4 rounded flex flex-col items-center ">
            <img src="src/assets/img/community.svg " class="w-10">
            <a href="#home" class="text-center text-[#2D3D8F]">Community</a>
          </div>
        </router-link>
      </div>
    </div>
    <div class="flex bg-blue-50 ">
      <router-link to="/login" class="px-2 underline">Log in</router-link>
      <router-link to="/signup" class="px-2 underline">Sign Up</router-link>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
</style>
