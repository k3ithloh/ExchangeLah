<template>
  <div
    class="flex justify-between mb-5 mx-5 min-w-[200px] border-4 rounded-2xl py-2 px-4 bg-white"
  >
    <div>
        <h4 class="font-semibold text-base mb-1 line-clamp-2">
            {{ module.moduleName }}
        </h4>
        <h4 class="font-semibold mb-1 line-clamp-2">
            ({{ module.moduleId }})
        </h4>
        <h4 class=" mb-1 line-clamp-2">
            {{ module.universityName }}
        </h4>
    </div>
    <span>
      <button @click="removeFromCart(module)" class="border-2 bg-red-400 text-white my-4 rounded-2xl p-1 flex justify-center items-center space-x-4 px-2 hover:bg-red-600">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </span>
  </div>
</template>

<script>

export default {
  name: "CartItem",
  props: {
    module: { type: Object },
    cart: { type: Array },
  },
  methods: {
    removeFromCart: function (module) {
        for (let i = 0; i < this.cart.length;i ++){
            if (this.cart[i] === module){
                this.cart.splice(i,1)
            }
        }
    },
  }
};
</script>

<style lang="scss" scoped></style>
