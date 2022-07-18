<template>
  <div class="md:px-10">
    <h1 class="font-semibold text-xl pt-3 md:text-2xl">
      {{ module.name }}
    </h1>
    <div>
      <div class="flex items-center mt-2">
        <div class="mr-1">
          <i class="fa-solid fa-star text-[#EDD36A] mr-1"></i>
          <i class="fa-solid fa-star text-[#EDD36A] mr-1"></i>
          <i class="fa-solid fa-star text-[#EDD36A] mr-1"></i>
          <i class="fa-solid fa-star text-[#EDD36A] mr-1"></i>
          <i class="fa-solid fa-star text-[#EDD36A] mr-1"></i>
        </div>
        <span class="text-xs text-gray-600">(4.5)</span>
        <i class="fa-solid fa-circle text-gray-400 ml-3 h-1"></i>
        <a
          class="ml-3 text-sm underline underline-offset-4 decoration-1 text-gray-600"
          href="#"
          >200 reviews</a
        >
        <div class="items-center flex">
          <i class="fa-solid fa-circle text-gray-400 ml-3 h-1"></i>
          <i class="fa-solid fa-basket-shopping text-gray-400 ml-3"></i>
        </div>
        <button class="ml-2 text-sm text-gray-600">{{ module.basket }}</button>
      </div>
    </div>
    <div class="grid md:grid-cols-[5fr_2fr] gap-4 rounded-xl">
        <div >
            <div class="rounded-2xl bg-zinc-50 p-5 mx-auto w-full my-6">
                <span class="font-medium text-lg md:text-xl">Description</span>
                <p class="mt-4 text-justify text-sm text-gray-800 md:text-base">
                    {{ module.description }}
                </p>
            </div>
            <div class="font-semibold md:text-2xl">
                Reviews
            </div>
        </div>
        <div>
            <div class="bg-zinc-50 rounded-2xl text-center p-4 my-6">
                <span class="p-4">
                    <h1 class="md:text-4xl">
                        {{ module.difficulty }}
                    </h1>
                    <h1>
                        Difficulty
                    </h1>
                </span>
                <span class="p-4">
                    <h1 class="md:text-4xl">
                        {{ module.popularity }}
                    </h1>
                    <h1>
                        Popularity
                    </h1>
                </span>
            </div>
            <div class="bg-zinc-50 rounded-2xl">
                <h1 class="font-semibold md:text-2xl md:p-4">Teachers</h1>
                <div class="flex flex-col px-6 space-y-4">
                  <span class="border-2 rounded-xl p-2 flex items-center space-x-4 pl-4">
                    <i class="fa-solid fa-user text-3xl"></i>
                    <div>
                      <h4 class="font-semibold">Teacher Name</h4>
                      <h6 class="text-xs">School Name</h6>
                    </div>
                  </span>
                  <span class="border-2 rounded-xl p-2 flex items-center space-x-4 pl-4">
                    <i class="fa-solid fa-user text-3xl"></i>
                    <div>
                      <h4 class="font-semibold">Teacher Name</h4>
                      <h6 class="text-xs">School Name</h6>
                    </div>
                  </span>
                  <span class="border-2 rounded-xl p-2 flex items-center space-x-4 pl-4">
                    <i class="fa-solid fa-user text-3xl"></i>
                    <div>
                      <h4 class="font-semibold">Teacher Name</h4>
                      <h6 class="text-xs">School Name</h6>
                    </div>
                  </span>
                  <span class="border-2 rounded-xl p-2 flex items-center space-x-4 pl-4">
                    <i class="fa-solid fa-user text-3xl"></i>
                    <div>
                      <h4 class="font-semibold">Teacher Name</h4>
                      <h6 class="text-xs">School Name</h6>
                    </div>
                  </span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Data from "@/views/ModuleMapping.vue";

export default {
  name: "UniversityInfo",
  props: [],
  components: {
    Data
  },
  data() {
    return {
      modules: Data.data().modules,
      module: []
    };
  },
  beforeMount() {
    this.getModule()
  },
  methods: {
        getModule: function () {
          for (var i = 0; i < this.modules.length; i++){
            if (this.modules[i].name === this.$route.params.name){
              this.module = this.modules[i]
            }
          }
          console.log(this.module)
      },
  },
};
</script>

<style>

</style>
