<template>
  <div class="h-full grid sm:grid-cols-[2fr_5fr] gap-4 rounded-xl">
    <div class=""></div>
    <div
      class="bg-white flex flex-col rounded-xl sm:h-3/4 sm:fixed sm:overflow-y-scroll sm:w-1/4"
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
          leave-active-class="duration-200 transform ease-in-out origin-top"
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
    <div class="grid sm:grid-cols-[5fr_2fr] gap-4 rounded-xl">
      <div class="bg-white">
        Modules
      </div>
      <div>
        <div class="bg-white h-10">
          Module Cart
        </div>
        <div class="bg-[#D5E2EE] rounded-xl flex flex-col justify-center items-center min-h-[200px]">
          <h1 class="font-semibold text-2xl text-center my-5 px-20">
            Don't Know Which Modules to Choose?
          </h1>
          <router-link to="#show-me" class="bg-[#FAFAFA] rounded-lg py-3 px-4">
            <span class="font-medium text-base">Show Me</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  name: "ModuleMappingPage",
  components: {

  },

  // beforeMount() {
  //   this.displayPage()
  //   this.pageCounter()
  // },
  methods: {
    // displayPages: function (page) {
    //   let numDisplay = []
    //   if (page === 1) {
    //     for (let i = page; i <= Math.min(page + 3, this.pageCount); i++){
    //       numDisplay.push(i)
    //     }
    //   }
    //   else if (page >= this.pageCount -1){
    //     for (let i = Math.max(this.pageCount - 3, 1); i <= Math.min(page + 3, this.pageCount); i++){
    //       numDisplay.push(i)
    //     }
    //   }
    //   else {
    //     for (let i = page-1; i <= Math.min(page + 2, this.pageCount); i++){
    //       numDisplay.push(i)
    //     }
    //   }
    //   return numDisplay
    // },
    // pageCounter: function () {
    //   this.pageCount = Math.ceil(Object.keys(this.universities).length / this.uniPerPage)
    // },
    // displayPage: function (page) {
    //   this.currentPage = page ? page : 1
    //   this.display = [];
    //   let counter = 1
    //   let loopStart = this.uniPerPage * this.currentPage - this.uniPerPage + 1;
    //   let keys = Object.keys(this.universities)
    //   for (let i = 1; i <= Object.keys(this.universities).length; i++) {
    //     if (i === loopStart && counter <= this.uniPerPage) {
    //       this.display.push(this.universities[keys[i-1]])
    //       loopStart++;
    //       counter++;
    //     }
    //   }
    // },
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
  },
  data() {
    return {
      isBasketOpen: false,
      modules: {
        Module1: {
          id: "1",
          name: "National Module of Singapore",
          country: "Singapore",
          city: "Singapore",
          rating: "4.6",
          imgURL: "",
        },
        Module2: {
          id: "2",
          name: "Nanyang Technological Module Nanyang Technological Module",
          country: "Singapore",
          city: "Singapore",
          rating: "4.6",
          imgURL: "",
        },
        Module3: {
          id: "3",
          name: "Singapore Management Module",
          country: "Singapore",
          city: "Singapore",
          rating: "4.6",
          imgURL: "",
        },
        Module4: {
          id: "4",
          name: "Singapore Module of Technology & Design",
          country: "Singapore",
          city: "Singapore",
          rating: "4.6",
          imgURL: "",
        },
        Module5: {
          id: "5",
          name: "Singapore Institute of Technology",
          country: "Singapore",
          city: "Singapore",
          rating: "4.6",
          imgURL: "",
        },
        Module6: {
          id: "6",
          name: "Singapore Module of Social Sciences",
          country: "Singapore",
          city: "Singapore",
          rating: "4.6",
          imgURL: "",
        },
        Module7: {
          id: "7",
          name: "Seoul National Module",
          country: "South Korea",
          city: "Seoul",
          rating: "4.6",
          imgURL: "",
        },
        Module8: {
          id: "8",
          name: "The Module of Tokyo",
          country: "Japan",
          city: "Tokyo",
          rating: "4.6",
          imgURL: "",
        },
      },
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
