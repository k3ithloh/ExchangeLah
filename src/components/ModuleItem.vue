<template>
    <div
      class="flex justify-between mb-5 mx-5 min-w-[200px] border-4 rounded-2xl py-2 px-4 bg-white"
    >
    <router-link :to="`/moduleinfo/${module.moduleId}`">
      <div>
          <h4 class="font-semibold text-base mb-1 line-clamp-2">
              {{ module.moduleName }} ({{ module.moduleId }})
          </h4>
          <h4 class=" mb-1 line-clamp-2">
              {{ module.universityName }} {{ module.basket }}
          </h4>
      </div>
    </router-link>
      <span>
        <button @click="addToCart(module)" class="border-2 text-xs w-[100px] bg-blue-400 my-4 rounded-xl py-1 flex justify-center items-center space-x-2 px-2 hover:bg-blue-600">
          <i class="fa-solid fa-plus"></i>
          <h2 class="">
            Add to Cart
          </h2>
        </button>
      </span>
    </div>

</template>

<script>

export default {
  name: "ModuleItem",
  props: {
    module: { type: Object },
    cart: { type: Array },
  },
  methods: {
    addToCart: function (module) {
      if (this.cart.includes(module)) {
        alert("Item already in cart")
      }
      else{
        this.cart.push(module)
      }
    },
  }
};
</script>

<style lang="scss" scoped></style>
