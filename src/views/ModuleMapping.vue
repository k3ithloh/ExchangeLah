<template>
  <transition
    enter-active-class="duration-500 transform transition ease-in-out origin-right "
    enter-from-class="scale-x-0 opacity-0"
    enter-to-class="scale-x-100 opacity-100 "
    leave-active-class="duration-200 transform transition ease-in-out origin-right"
    leave-from-class="scale-x-100 opacity-100"
    leave-to-class="scale-x-50 opacity-0"
  >
    <div v-if="showFilter" class="fixed bg-slate-100/80 top-0 right-0 bottom-0 left-0">
      <div class="bg-white mb-4 rounded-xl fixed h-full w-3/4 overflow-y-auto top-0 right-0 opacity-100">
        <div class="flex justify-between m-4">
          <h1 class=" font-semibold">
            Module Cart
          </h1>
          <button @click="clearCart()">
            Clear
          </button>
        </div>
        <div class="flex flex-col">
          <CartItem
            v-for="module in cart"
            :key="module.id"
            :module="module"
            :cart="this.cart"
          />
        </div>
        <button class="float-left bg-blue-200 rounded-2xl hover:bg-blue-400 p-1 m-4">
          <i class="fa-solid fa-magnifying-glass"></i>
          Search University
        </button>

      </div>
    </div>
  </transition>
  <div class="h-full grid md:grid-cols-[2fr_5fr] gap-4 rounded-xl px-4">
    <div class=""></div>
    <div
      class="bg-white flex flex-col rounded-xl md:h-3/4 md:fixed md:overflow-y-scroll md:w-1/4"
    >
      <div class="flex justify-between p-2">
        <h3 class="font-semibold">Selected</h3>
        <button @click="clearFilter()" class="text-xs">Clear</button>
      </div>
      <div class="flex flex-wrap">
        <span
          v-for="select in selected"
          :key="select.id"
          class="bg-[#D5E2EE] text-[#89939E] mx-4 my-2 px-3 py-1 rounded-xl min-w-1/3 max-w-full"
        >
          <label class="flex space-x-2 items-center">
            <input
              @click="removeFilter(select)"
              type="checkbox"
              :checked="select.checked"
            />
            <span>
              {{ select.name }}
            </span>
          </label>
        </span>
      </div>
      <h3 class="font-semibold p-2">Refine Your Search</h3>
      <div class="p-2 flex flex-col">
        <button
          @click="isBasketOpen = !isBasketOpen"
          class="flex items-center space-x-4"
        >
          <h6>Baskets</h6>
          <span v-if="isBasketOpen">
            <i class="fa-solid fa-angle-down"></i>
          </span>
          <span v-else>
            <i class="fa-solid fa-angle-up"></i>
          </span>
        </button>
        <transition
          enter-active-class="duration-500 transform transition ease-in-out origin-top "
          enter-from-class="scale-y-0 opacity-0"
          enter-to-class="scale-y-100 opacity-100 "
          leave-active-class="duration-200 transform transition ease-in-out origin-top"
          leave-from-class="scale-y-100 opacity-100"
          leave-to-class="scale-y-50 opacity-0"
        >
          <div
            v-if="isBasketOpen"
            class="flex flex-col transition-all duration-200 ease-in"
          >
            <span
              v-for="basket in Baskets"
              :key="basket.id"
              class="bg-[#D5E2EE] text-[#89939E] rounded-xl w-auto m-2 px-3 py-1"
            >
              <label class="flex items-center space-x-2">
                <input
                  type="checkbox"
                  @click="addToFilter(basket)"
                  class="ml-2"
                />
                <span>{{ basket.name }}</span>
              </label>
            </span>
          </div>
        </transition>
      </div>
    </div>
    <div class="grid md:grid-cols-[5fr_2fr] gap-4 rounded-xl">
      <div class="">
        <div class="flex justify-between border-b-2 border-black text-4xl font-semibold m-4 p-2">
          <h1 class="md:text-4xl text-xl font-semibold">
          All Modules
          </h1>
          <div class="text-base flex items-center">
            <h6>Sort By:</h6>
            <div class="border-2 flex justify-center items-center rounded-xl">
              <select @change="sort(value)" id="sortBy" name="selections">
                <option value="alphabertical">A-Z</option>
                <option value="reversedAlphabertical">Z-A</option>
                <option value="Option 1">Price</option>
                <option value="Option 1">Distance</option>
              </select>
            </div>
          </div>
        </div>
        <div class="w-full">
          <ModuleItem
            v-for="module in modules"
            :key="module.id"
            :module="module"
            :cart="this.cart"
          />
        </div>
      </div>
      <div class="flex flex-col">
        <div @click="showFilter = !showFilter" class="fixed text-xl right-6 bottom-6 md:hidden bg-blue-300 rounded-full px-4 py-3">
          <span>
            <i class="fa-solid fa-cart-shopping"></i>
          </span>
        </div>
        <div class="bg-white mb-4 rounded-xl hidden md:block">
          <div class="flex justify-between m-4">
            <h1 class=" font-semibold">
              Module Cart
            </h1>
            <button @click="clearCart()">
              Clear
            </button>
          </div>
          <div class="flex flex-col">
            <CartItem
              v-for="module in cart"
              :key="module.id"
              :module="module"
              :cart="this.cart"
            />
          </div>
          <button class=" float-right bottom-0 bg-blue-200 rounded-2xl hover:bg-blue-400 p-1 m-4">
            <i class="fa-solid fa-magnifying-glass"></i>
            Search University
          </button>
        </div>
        <div class="bg-[#D5E2EE] rounded-xl flex flex-col justify-center items-center min-h-[200px]">
          <h1 class="font-semibold text-2xl text-center my-5 px-20">
            Don't Know Which Modules to Choose?
          </h1>
          <router-link to="#show-me" class="bg-[#FAFAFA] rounded-lg py-3 px-4 mb-4 hover:bg-slate-400">
            <span class="font-medium text-base">Show Me</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModuleItem from "@/components/ModuleItem.vue";
import CartItem from "@/components/CartItem.vue";

export default {
  props: [],
  name: "ModuleMappingPage",
  components: {
    ModuleItem,
    CartItem,
  },
  methods: {
    // Find a better way to add abd remove filters without having to manually add in each filter to each function

    addToFilter: function (filter) {
        for (var i = 0; i < this.Baskets.length; i++) {
          if (this.Baskets[i] === filter) {
            this.Baskets.splice(i, 1);
            this.selected.push(filter);
            i--;
            console.log(filter)
          }
        }
    },
    removeFilter: function (select) {
      for (var i = 0; i < this.selected.length; i++) {
        if (this.selected[i] === select) {
          this.selected.splice(i, 1);
          this.Baskets.push(select);
          this.Baskets.sort((a, b) => {
            return a.id - b.id;
          });
        }
      }
    },
    clearFilter: function () {
      for (var i = 0; i < this.selected.length; i++) {
        let item = this.selected[i];
        this.Baskets.push(item);
      }
      this.Baskets.sort((a, b) => {
        return a.id - b.id;
      });
      this.selected = [];
    },
    clearCart: function () {
      this.cart = []
    },
  },
  data() {
    return {
      showFilter: false,
      cart: [],
      isBasketOpen: false,
      modules: [
        {
          id: "1",
          basket: "IS",
          name: "IS110",
          country: "Singapore",
          city: "Singapore",
          rating: "4.6",
          imgURL: "",
        },
        {
          id: "2",
          basket: "IS",
          name: "IS111",
          country: "Singapore",
          city: "Singapore",
          rating: "4.6",
          imgURL: "",
        },
        {
          id: "3",
          basket: "IS",
          name: "IS211",
          country: "Singapore",
          city: "Singapore",
          rating: "4.6",
          imgURL: "",
        },
        {
          id: "4",
          name: "IS210",
          basket: "IS",
          country: "Singapore",
          city: "Singapore",
          rating: "4.6",
          imgURL: "",
        },
        {
          id: "5",
          basket: "Core",
          name: "IS311",
          country: "Singapore",
          city: "Singapore",
          rating: "4.6",
          imgURL: "",
        },
        {
          id: "6",
          basket: "Core",
          name: "IS312",
          country: "Singapore",
          city: "Singapore",
          rating: "4.6",
          imgURL: "",
        },
        {
          id: "7",
          basket: "Core",
          name: "IS314",
          country: "South Korea",
          city: "Seoul",
          rating: "4.6",
          imgURL: "",
        },
        {
          id: "8",
          basket: "Core",
          name: "IS315",
          country: "Japan",
          city: "Tokyo",
          rating: "4.6",
          imgURL: "",
        },
      ],
      Baskets: [
        {
          id: 1,
          name: "basket 1",
          checked: true,
          category: "Location",
        },
        {
          id: 2,
          name: "basket 2",
          checked: true,
          category: "Location",
        },
        {
          id: 3,
          name: "basket 3",
          checked: true,
          category: "Location",
        },
        {
          id: 4,
          name: "basket 4",
          checked: true,
          category: "Location",
        },
      ],
      selected: [],
    };
  },
};
</script>

<style lang="scss" scoped></style>
