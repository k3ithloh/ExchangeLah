<template>
  <div class="h-full grid sm:grid-cols-[2fr_5fr] gap-4 rounded-xl px-4">
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
          @click="isLocationOpen = !isLocationOpen"
          class="flex items-center space-x-4"
        >
          <h6>Region</h6>
          <span v-if="isLocationOpen">
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
            v-if="isLocationOpen"
            class="flex flex-col transition-all duration-200 ease-in"
          >
            <span
              v-for="filter in LocationFilters"
              :key="filter.id"
              class="bg-[#D5E2EE] text-[#89939E] rounded-xl w-auto m-2 px-3 py-1"
            >
              <label class="flex items-center space-x-2">
                <input
                  type="checkbox"
                  @click="addToFilter(filter)"
                  class="ml-2"
                />
                <span>{{ filter.name }}</span>
              </label>
            </span>
          </div>
        </transition>
      </div>
    </div>
    <div class="bg-white">
      <div
        class="flex justify-between border-b-2 border-black sm:text-4xl font-semibold m-4 p-2 text-xl"
      >
        <h1>All Universities</h1>
      </div>
      <div class="flex flex-wrap justify-center mt-4">
        <UniversityItem
          v-for="university in display"
          :key="university.id"
          :university="university"
        />
      </div>
      <!-- PAGINATION -->
      <div class="flex justify-end pb-4 pr-4 text-xl">
        <button
          @click="
            this.currentPage = 1;
            displayPage(this.currentPage);
          "
        >
          <i class="fa-solid fa-angles-left"></i>
        </button>
        <div v-for="i in displayPages(this.currentPage)" :key="i">
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
import UniversityItem from "@/components/UniversityItem.vue";
import axios from "axios";

export default {
  props: [],
  name: "UniversitiesPage",
  components: {
    UniversityItem,
  },
  created() {
    this.getUniversities();
    this.getRegion();
  },
  methods: {
    getUniversities() {
      axios
        .get("http://caifan.ap-southeast-1.elasticbeanstalk.com/api/university")
        .then((response) => {
          this.universities = response.data;
          this.displayPage();
        })
        .catch((error) => console.log(error.response));
    },
    getRegion() {
      axios
        .get("http://caifan.ap-southeast-1.elasticbeanstalk.com/api/region")
        .then((response) => {
          this.regionList = response.data;
          this.createLocationFilter();
        })
        .catch((error) => console.log(error.response));
    },
    createLocationFilter: function () {
      for (var i = 0; i < this.regionList.length; i++) {
        var tempObj = {
          id: i,
          name: this.regionList[i].regionName,
          checked: true,
          category: "Location",
          regionId: this.regionList[i].regionId,
        };
        this.LocationFilters.push(tempObj);
      }
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
    pageCounter: function (list) {
      this.pageCount = Math.ceil(
        Object.keys(list).length / this.uniPerPage
      );
    },
    displayPage: function (page) {
      let finalList = []
      if (this.selected.length !== 0){
        let tempList = []
        for (let y = 0; y < this.selected.length; y++){
          tempList.push(this.selected[y].regionId)
        }
        for (let x = 0; x < this.universities.length; x++){
          if (tempList.includes(this.universities[x].regionId)){
            finalList.push(this.universities[x])
          }
        }
      }
      else{
        finalList = this.universities
      }
      this.currentPage = page ? page : 1;
      this.display = [];
      let counter = 1;
      let loopStart = this.uniPerPage * this.currentPage - this.uniPerPage + 1;
      let keys = Object.keys(finalList);
      for (let i = 1; i <= Object.keys(finalList).length; i++) {
        if (i === loopStart && counter <= this.uniPerPage) {
          this.display.push(finalList[keys[i - 1]]);
          loopStart++;
          counter++;
        }
      }
      this.pageCounter(finalList)
    },
    addToFilter: function (filter) {
      if (filter.category === "Location") {
        for (var x = 0; x < this.LocationFilters.length; x++) {
          if (this.LocationFilters[x] === filter) {
            this.LocationFilters.splice(x, 1);
            this.selected.push(filter);
            x--;
          }
        }
      }
      this.displayPage()
      this.displayPages()
    },
    removeFilter: function (select) {
      for (var i = 0; i < this.selected.length; i++) {
        if (this.selected[i] === select) {
          this.selected.splice(i, 1);
          if (select.category === "Location") {
            this.LocationFilters.push(select);
            this.LocationFilters.sort((a, b) => {
              return a.id - b.id;
            });
          }
        }
      }
      this.displayPage()
      this.displayPages()
    },
    clearFilter: function () {
      for (var i = 0; i < this.selected.length; i++) {
        let item = this.selected[i];
        if (item.category === "Location") {
          this.LocationFilters.push(item);
        }
      }
      this.LocationFilters.sort((a, b) => {
        return a.id - b.id;
      });
      this.selected = [];
      this.displayPage()
    },
  },
  data() {
    return {
      regionList: [],
      display: [],
      currentPage: 1,
      uniPerPage: 8,
      pageCount: 1,
      isLocationOpen: false,
      universities: [],
      LocationFilters: [],
      selected: [],
    };
  },
};
</script>

<style lang="scss" scoped></style>
