<template>
  <!-- MOBILE -->
  <div class="md:hidden relative bg-slate-200">
    <router-link to="/" class="absolute m-4">
      <img src="../assets/img/logo.png" class="h-10" />
    </router-link>
    <div class="flex justify-end w-full py-4 pr-4">
      <button @click="navBar = !navBar" class="">
        <span v-if="navBar">
          <i class="fa-solid fa-grip-lines h-8 w-8 text-gray-700"></i>
        </span>
        <span v-else>
          <i class="fa-solid fa-xmark h-8 w-8 text-gray-700"></i>
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
      <nav v-if="!navBar" class="bg-slate-200 w-full absolute text-[#2D3D8F]">
        <div
          class="flex flex-col justify-center items-center pt-5 text-[#2D3D8F]"
        >
          <router-link @click="navBar = !navBar" class="m-4" to="/">
            <div class="flex space-x-4 items-center">
              <i class="fa-solid fa-house h-6 w-6 pb-2"></i>
              <a href="#home" class="font-semibold">Home</a>
            </div>
          </router-link>
          <router-link @click="navBar = !navBar" class="m-4" to="/universities">
            <div class="flex space-x-4 items-center">
              <i class="fa-solid fa-user-graduate h-6 w-6 pb-2"></i>
              <a href="#universities" class="font-semibold">Universities</a>
            </div>
          </router-link>
          <router-link
            @click="navBar = !navBar"
            class="m-4"
            to="/modulemapping"
          >
            <div class="flex space-x-4 items-center">
              <i class="fa-solid fa-diagram-project h-6 w-6 pb-2"></i>
              <a href="#modulemapping" class="font-semibold">Module Mapping</a>
            </div>
          </router-link>
          <router-link @click="navBar = !navBar" class="m-4" to="#community">
            <div class="flex space-x-4 items-center">
              <i class="fa-solid fa-comments h-6 w-6 pb-2"></i>
              <a href="#community" class="font-semibold">Community</a>
            </div>
          </router-link>
        </div>
        <div class="flex justify-center m-4 pb-5">
          <router-link
            to="/login"
            class="mx-2 font-semibold hover:text-black"
            @click="navBar = !navBar"
          >
            Login
          </router-link>
          <router-link
            to="/signup"
            class="mx-2 font-semibold hover:text-black"
            @click="navBar = !navBar"
          >
            Sign Up
          </router-link>
        </div>
      </nav>
    </transition>
  </div>
  <!-- DESKTOP -->

  <div
    class="flex flex-col justify-center items-center md:flex-row md:justify-between mx-4 pt-8 px-8"
  >
    <router-link to="/" class="hidden md:flex">
      <img src="../assets/img/logo.png" class="h-10 lg:h-12" />
    </router-link>
    <form
      class="flex flex-col"
    >
      <div class="flex flex-col">
        <div class="flex justify-center items-center border focus-within:bg-slate-300 hover:bg-slate-300 border-slate-300 rounded-md shadow-md focus:outline-none md:text-md">
          <span class="left-0 items-center ml-3 h-fit">
            <i class="fa-solid h-4 w-4 fa-magnifying-glass text-[#2D3D8F]"></i>
          </span>
          <input
            class="placeholder:italic bg-transparent placeholder:text-slate-400 blockw-72 sm:w-80 md:w-80 lg:w-96 py-3 pl-5 pr-5 outline-none"
            placeholder="Search university..."
            v-model="searchUni"
            @input="search"
            type="text"
            name="search"
          />
          <button type="reset" class="right-0 flex items-center mr-3 h-fit" @click="searchList = []">
            <i class="fa-solid fa-xmark h-4 w-4 text-[#2D3D8F]"></i>
          </button>
        </div>
        <div class="relative bg-slate-200 w-full">
            <div class="absolute px-2 w-full">
              <!-- Cannot use Router link here because page does not refresh -->
              <div v-for="(university,i) in searchList.slice(0,4)"
                :key="i" class="flex flex-col border-b-2 border-black bg-slate-300 min-h-30 p-2">

                <router-link
                  :to="`/universityinfo/${university.universityName}`"
                  @click="searchList = []; searchUni=''"
                  class="flex items-center space-x-2">
                  <img :src="university.icon" class="h-10 w-10">
                  <span>{{ university.universityName }}</span>
                </router-link>

                <!-- <a :href="`/universityinfo/${university.universityName}`"
                @click="searchList = []; searchUni=''"
                class="flex items-center space-x-2">
                  <img :src="university.icon" class="h-10 w-10">
                  <span>{{ university.universityName }}</span>
                </a> -->
              </div>
            </div>
        </div>
      </div>
    </form>

    <div class="hidden md:flex items-center justify-end">
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

  <nav v-if="navBar" class="hidden md:block">
    <div class="flex justify-center items-center">
      <router-link class="m-4" to="/">
        <div class="flex flex-col items-center">
          <i class="fa-solid fa-house text-[#2D3D8F] h-6 w-6 pb-2"></i>
          <span class="text-[#2D3D8F] font-semibold">Home</span>
        </div>
      </router-link>
      <router-link class="m-4" to="/universities">
        <div class="flex flex-col items-center">
          <i class="fa-solid fa-user-graduate text-[#2D3D8F] h-6 w-6 pb-2"></i>
          <span class="text-[#2D3D8F] font-semibold">Universities</span>
        </div>
      </router-link>
      <router-link class="m-4" to="/modulemapping">
        <div class="flex flex-col items-center">
          <i
            class="fa-solid fa-diagram-project text-[#2D3D8F] h-6 w-6 pb-2"
          ></i>
          <span class="text-[#2D3D8F] font-semibold">Module Mapping</span>
        </div>
      </router-link>
      <router-link class="m-4" to="/community">
        <div class="flex flex-col items-center">
          <i class="fa-solid fa-comments text-[#2D3D8F] h-6 w-6 pb-2"></i>
          <span class="text-[#2D3D8F] font-semibold">Community</span>
        </div>
      </router-link>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      navBar: true,
      searchUni: "",
      searchList: [],
      maxDisplay: 5,
    };
  },
  methods: {
    search: function () {
      if(this.searchUni !== ""){
        axios
          .get("http://caifan.ap-southeast-1.elasticbeanstalk.com/api/university/search/" + this.searchUni)
          .then((response) => {
            this.searchList = []
            let data = response.data
            let counter = 0
            for(let i = 0; i < data.length; i++){
              if (counter === this.maxDisplay){
                break
              }
              else {
                this.searchList.push(data[i])
              }
            }
          })
          .catch((error) => console.log(error.response));;
      }
      else{
        this.searchList = []
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
