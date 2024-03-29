<template>
  <transition
    enter-active-class="duration-500 transform transition ease-in-out origin-right "
    enter-from-class="scale-x-0 opacity-0"
    enter-to-class="scale-x-100 opacity-100 "
    leave-active-class="duration-200 transform transition ease-in-out origin-right"
    leave-from-class="scale-x-100 opacity-100"
    leave-to-class="scale-x-50 opacity-0"
  >
    <div
      v-if="showFilter"
      class="fixed bg-slate-100/80 top-0 right-0 bottom-0 left-0"
    >
      <div
        class="bg-white mb-4 rounded-xl fixed h-full w-3/4 overflow-y-auto top-0 right-0 opacity-100"
      >
        <div class="flex justify-between m-4">
          <h1 class="font-semibold">Module Cart</h1>
          <button @click="clearCart()">Clear</button>
        </div>
        <div class="flex flex-col">
          <CartItem
            v-for="module in cart"
            :key="module.facultyId"
            :module="module"
            :cart="this.cart"
          />
        </div>
        <button
          class="float-left bg-blue-200 rounded-2xl hover:bg-blue-400 p-1 m-4"
          @click="showFilter = !showFilter; displayModules();"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
          Search Module
        </button>
      </div>
    </div>
  </transition>
  <div class="h-full grid md:grid-cols-[2fr_5fr] gap-4 rounded-xl px-4">
    <div class=""></div>
    <div
      class="bg-white flex flex-col rounded-xl md:h-3/4 md:fixed md:overflow-y-scroll md:w-1/4"
    >
      <div>
        <h3 class="p-2">Choose Your University</h3>
        <select
          class="w-full"
          v-model="selectedUniversity"
          @change="moduleSelectByUni()"
        >
          <option value="null" disabled>Select University...</option>
          <option v-for="university in universityList" :key="university">
            {{ university.universityName }}
          </option>
        </select>
      </div>
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
          @click="isFacultyOpen = !isFacultyOpen"
          class="flex items-center space-x-4"
        >
          <h6>Faculty</h6>
          <span v-if="isFacultyOpen">
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
            v-if="isFacultyOpen"
            class="flex flex-col transition-all duration-200 ease-in"
          >
            <span
              v-for="faculty in facultyFilters"
              :key="faculty.id"
              class="bg-[#D5E2EE] text-[#89939E] rounded-xl w-auto m-2 px-3 py-1"
            >
              <label class="flex items-center space-x-2">
                <input
                  type="checkbox"
                  @click="addToFilter(faculty)"
                  class="ml-2"
                />
                <span>{{ faculty.name }}</span>
              </label>
            </span>
          </div>
        </transition>
      </div>
    </div>
    <div class="grid md:grid-cols-[5fr_2fr] gap-4 rounded-xl">
      <div class="m-4">
        <div
          class="flex justify-between border-b-2 border-black text-4xl font-semibold p-2"
        >
          <h1 class="md:text-4xl text-xl font-semibold">All Modules</h1>
        </div>
        <div class="my-4">
          <span class="font-semibold">Search Module: </span>
          <input
            v-model="moduleEntry"
            placeholder="Enter Module Name"
            type="text"
            class="w-2/3 rounded-xl mx-4 px-4"
            @input="moduleSearch"
          />
        </div>
        <div v-if="filteredList.length === 0">
          <h1
            class="text-2xl font font-semibold flex p-4 border-4 justify-center"
          >
            Please select a University to begin
          </h1>
        </div>
        <div v-else class="w-full">
          <ModuleItem
            v-for="module in display"
            :key="module.moduleId"
            :module="module"
            :cart="this.cart"
          />
        </div>
      </div>
      <div class="flex flex-col">
        <div
          @click="showFilter = !showFilter"
          class="fixed text-xl right-6 bottom-6 md:hidden bg-blue-300 rounded-full px-4 py-3"
        >
          <span>
            <i class="fa-solid fa-cart-shopping"></i>
          </span>
        </div>
        <div class="bg-white mb-4 rounded-xl hidden md:block min-h-[500px]">
          <div class="flex justify-between m-4">
            <h1 class="font-semibold">Module Cart</h1>
            <button @click="clearCart()">Clear</button>
          </div>
          <div class="flex flex-col">
            <CartItem
              v-for="module in cart"
              :key="module.moduleId"
              :module="module"
              :cart="this.cart"
            />
          </div>
          <button
            class="float-right bottom-0 bg-blue-200 rounded-2xl hover:bg-blue-400 p-1 m-4"
            @click="displayModules(); "
          >
            <i class="fa-solid fa-magnifying-glass"></i>
            Search Module
          </button>
        </div>
      </div>
      <div class="flex justify-end pb-4 pr-4 text-xl">
        <button
          @click="
            this.currentPage = 1;
            displayPage(this.currentPage);
          "
        >
          <i class="fa-solid fa-angles-left"></i>
        </button>
        <div class="flex">
          <div class="" v-for="i in displayPages(this.currentPage)" :key="i">
            <button
              v-if="i === currentPage"
              @click="displayPage(i)"
              class="border-2 mx-1 px-2 rounded-2xl bg-blue-500"
            >
              {{ i }}
            </button>
            <button
              v-else
              @click="displayPage(i)"
              class="border-2 mx-1 px-2 rounded-2xl bg-blue-300"
            >
              {{ i }}
            </button>
          </div>
        </div>
        <button
          @click="
            this.currentPage = pageCount;
            displayPage(this.currentPage);
          "
        >
          <i class="fa-solid fa-angles-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ModuleItem from "@/components/ModuleItem.vue";
import CartItem from "@/components/CartItem.vue";
import axios from "axios";

export default {
  props: [],
  name: "ModuleMappingPage",
  components: {
    ModuleItem,
    CartItem,
  },
  mounted() {
    axios
      .get("http://caifan.ap-southeast-1.elasticbeanstalk.com/api/module")
      .then((response) => {
        this.moduleList = response.data;
        for (var i = 0; i < this.moduleList.length; i++) {
          if (!this.facultyList.includes(this.moduleList[i].faculty)) {
            this.facultyList.push(this.moduleList[i].faculty);
          }
        }
        this.createFacultyFilter();
        this.displayPage();
      })
      .catch((error) => console.log(error.response));
    axios
      .get("http://caifan.ap-southeast-1.elasticbeanstalk.com/api/university")
      .then((response) => {
        this.universityList = response.data;
      })
      .catch((error) => console.log(error.response));
  },
  methods: {
    moduleSearch: function () {
      if (this.cartBasketIds.length !== 0){
        if (this.moduleEntry === "") {
          this.displayModules()
          this.displayPage()
        }
        else{
          this.displayModules()
          let newDisplay = [];
          for (let i = 0; i < this.filteredList.length; i++) {
            if (this.filteredList[i].moduleName.toLowerCase().includes(this.moduleEntry.toLowerCase())) {
              newDisplay.push(this.filteredList[i])
            }
          }
          console.log(newDisplay)
          this.filteredList = newDisplay;
          this.displayPage();
        }
      }
      if (this.cartBasketIds.length === 0){
        if (this.moduleEntry === "") {
          this.moduleSelectByUni();
        }
        else{
          axios
            .get(
              "http://caifan.ap-southeast-1.elasticbeanstalk.com/api/module/search/" +
                this.moduleEntry
            )
            .then((response) => {
              let data = response.data;
              let newDisplay = [];
              for (let i = 0; i < data.length; i++) {
                if (data[i].universityName === this.selectedUniversity) {
                  newDisplay.push(data[i]);
                }
              }
              this.filteredList = newDisplay;
              this.displayPage();
            })
            .catch((error) => console.log(error.response));
        }
      }
    },
    pageCounter: function (list) {
      this.pageCount = Math.ceil(Object.keys(list).length / this.modPerPage);
    },
    displayPage: function (page) {
      let finalList = [];
      if (this.selected.length !== 0) {
        let tempList = [];
        for (let y = 0; y < this.selected.length; y++) {
          tempList.push(this.selected[y].name);
        }

        for (let x = 0; x < this.filteredList.length; x++) {
          if (tempList.includes(this.filteredList[x].faculty)) {
            finalList.push(this.filteredList[x]);
          }
        }
      } else {
        finalList = this.filteredList;
      }
      this.currentPage = page ? page : 1;
      this.display = [];
      let counter = 1;
      let loopStart = this.modPerPage * this.currentPage - this.modPerPage + 1;
      let keys = Object.keys(finalList);
      for (let i = 1; i <= Object.keys(finalList).length; i++) {
        if (i === loopStart && counter <= this.modPerPage) {
          this.display.push(finalList[keys[i - 1]]);
          loopStart++;
          counter++;
        }
      }
      this.pageCounter(finalList);
    },
    displayPages: function (page) {
      let numDisplay = [];
      if (page === 1) {
        for (let i = page; i <= Math.min(page + 3, this.pageCount); i++) {
          numDisplay.push(i);
        }
      } else if (page >= this.pageCount - 1) {
        for (
          let i = Math.max(this.pageCount - 3, 1);
          i <= Math.min(page + 3, this.pageCount);
          i++
        ) {
          numDisplay.push(i);
        }
      } else {
        for (let i = page - 1; i <= Math.min(page + 2, this.pageCount); i++) {
          numDisplay.push(i);
        }
      }
      return numDisplay;
    },
    createFacultyFilter: function () {
      this.facultyFilters = [];
      for (var i = 0; i < this.facultyList.length; i++) {
        var tempObj = {
          id: i,
          name: this.facultyList[i],
          checked: true,
        };
        this.facultyFilters.push(tempObj);
      }
    },
    // Find a better way to add abd remove filters without having to manually add in each filter to each function

    addToFilter: function (filter) {
      for (var i = 0; i < this.facultyFilters.length; i++) {
        if (this.facultyFilters[i] === filter) {
          this.facultyFilters.splice(i, 1);
          this.selected.push(filter);
          i--;
        }
      }
      this.moduleEntry = "";
      this.moduleSelectByUni();
      this.displayPages();
    },
    removeFilter: function (select) {
      for (var i = 0; i < this.selected.length; i++) {
        if (this.selected[i] === select) {
          this.selected.splice(i, 1);
          this.facultyFilters.push(select);
          this.facultyFilters.sort((a, b) => {
            return a.id - b.id;
          });
        }
      }
      this.moduleEntry = "";
      this.moduleSelectByUni();
      this.displayPages();
    },
    clearFilter: function () {
      this.createFacultyFilter();
      this.selected = [];
    },
    clearCart: function () {
      this.cart = [];
    },
    moduleSelectByUni: function () {
      this.filteredList = [];
      for (let i = 0; i < this.moduleList.length; i++) {
        if (this.moduleList[i].universityName === this.selectedUniversity) {
          this.filteredList.push(this.moduleList[i]);
        }
      }
      this.moduleEntry = "";
      this.displayPage();
    },
    displayModules: function () {
      this.selectedUniversity = null;
      this.cartBasketIds = this.cart.map((element) => {
        return element.basketModules[0].basketId;
      });
      this.filteredList = this.moduleList.filter((element) => {
        return this.cartBasketIds.includes(element.basketModules[0].basketId);
      });
      this.displayPage()
    },
  },
  data() {
    return {
      moduleEntry: "",
      display: [],
      currentPage: 1,
      modPerPage: 30,
      pageCount: 1,
      universityList: [],
      selectedUniversity: null,
      showFilter: false,
      cart: [],
      isFacultyOpen: false,
      moduleList: [],
      filteredList: [],
      facultyList: [],
      facultyFilters: [],
      selected: [],
      cartBasketIds: [],
    };
  },
};
</script>

<style lang="scss" scoped></style>
