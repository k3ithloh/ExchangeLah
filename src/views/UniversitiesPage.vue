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
          @click="isLocationOpen = !isLocationOpen"
          class="flex items-center space-x-4"
        >
          <h6>Location</h6>
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
      <div class="p-2">
        <button
          @click="isPriceOpen = !isPriceOpen"
          class="flex items-center space-x-4"
        >
          <h6>Price</h6>
          <span v-if="isPriceOpen">
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
          <div v-if="isPriceOpen" class="flex flex-col">
            <div
              v-for="filter in PriceFilters"
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
            </div>
          </div>
        </transition>
      </div>
    </div>
    <!-- sorting not built yet -->
    <div class="bg-white">
      <div
        class="flex justify-between border-b-2 border-black sm:text-4xl font-semibold m-4 p-2 text-xl"
      >
        <h1>All Universities</h1>
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
      <!-- Add router link here or in the Card component? -->
      <div class="flex flex-wrap justify-center mt-4">
        <UniversityItem
          v-for="university in display"
          :key="university.id"
          :university="university"
        />
      </div>
      <!-- Page Nav not working yet. Just copied something from web. Not sure how to make this changeable yet -->
      <div class="flex justify-end pb-4 pr-4 text-xl">
        <button @click="this.currentPage = 1;displayPage(this.currentPage)">
          <i class="fa-solid fa-angles-left"></i>
        </button>
        <div
          v-for="i in displayPages(this.currentPage)"
          :key="i"
          >
          <button
            v-if="i===currentPage"
            @click="displayPage(i)"
            class="border-2 mx-1 px-2 rounded-2xl bg-blue-500">
            {{ i }}
          </button>
          <button
            v-else
            @click="displayPage(i)"
            class="border-2 mx-1 px-2 rounded-2xl bg-blue-300">
            {{ i }}
          </button>
        </div>
        <button @click="this.currentPage = pageCount;displayPage(this.currentPage)">
          <i class="fa-solid fa-angles-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import UniversityItem from "@/components/UniversityItem.vue";

export default {
  props: [],
  name: "UniversitiesPage",
  components: {
    UniversityItem,
  },

  beforeMount() {
    this.displayPage()
    this.pageCounter()
  },
  methods: {
    displayPages: function (page) {
      let numDisplay = []
      if (page === 1) {
        for (let i = page; i <= Math.min(page + 3, this.pageCount); i++){
          numDisplay.push(i)
        }
      }
      else if (page >= this.pageCount -1){
        for (let i = Math.max(this.pageCount - 3, 1); i <= Math.min(page + 3, this.pageCount); i++){
          numDisplay.push(i)
        }
      }
      else {
        for (let i = page-1; i <= Math.min(page + 2, this.pageCount); i++){
          numDisplay.push(i)
        }
      }
      return numDisplay
    },
    pageCounter: function () {
      this.pageCount = Math.ceil(Object.keys(this.universities).length / this.uniPerPage)
    },
    displayPage: function (page) {
      this.currentPage = page ? page : 1
      this.display = [];
      let counter = 1
      let loopStart = this.uniPerPage * this.currentPage - this.uniPerPage + 1;
      let keys = Object.keys(this.universities)
      for (let i = 1; i <= Object.keys(this.universities).length; i++) {
        if (i === loopStart && counter <= this.uniPerPage) {
          this.display.push(this.universities[keys[i-1]])
          loopStart++;
          counter++;
        }
      }
    },
    // Not sure how to make this sorting dropdown work
    sort: function () {
      var select = document.getElementById("sortBy");
      var option = select.options[select.selectedIndex];
      if (option.value === "alphabertical") {
        alert(option.value);
      } else if (option.value === "reversedAlphabertical") {
        alert(option.value);
      }
    },
    // Find a better way to add abd remove filters without having to manually add in each filter to each function
    addToFilter: function (filter) {
      if (filter.category === "Price") {
        for (var i = 0; i < this.PriceFilters.length; i++) {
          if (this.PriceFilters[i] === filter) {
            this.PriceFilters.splice(i, 1);
            this.selected.push(filter);
            i--;
          }
        }
      } else if (filter.category === "Location") {
        for (var x = 0; x < this.LocationFilters.length; x++) {
          if (this.LocationFilters[x] === filter) {
            this.LocationFilters.splice(x, 1);
            this.selected.push(filter);
            x--;
          }
        }
      }
    },
    removeFilter: function (select) {
      for (var i = 0; i < this.selected.length; i++) {
        if (this.selected[i] === select) {
          this.selected.splice(i, 1);
          if (select.category === "Price") {
            this.PriceFilters.push(select);
            this.PriceFilters.sort((a, b) => {
              return a.id - b.id;
            });
          } else if (select.category === "Location") {
            this.LocationFilters.push(select);
            this.LocationFilters.sort((a, b) => {
              return a.id - b.id;
            });
          }
        }
      }
    },
    clearFilter: function () {
      for (var i = 0; i < this.selected.length; i++) {
        let item = this.selected[i];
        if (item.category === "Price") {
          this.PriceFilters.push(item);
        } else if (item.category === "Location") {
          this.LocationFilters.push(item);
        }
      }
      this.LocationFilters.sort((a, b) => {
        return a.id - b.id;
      });
      this.PriceFilters.sort((a, b) => {
        return a.id - b.id;
      });
      this.selected = [];
    },
  },
  data() {
    return {

      display: "",
      currentPage: 1,
      uniPerPage: 1,
      pageCount: 1,
      isLocationOpen: false,
      isPriceOpen: false,
      universities: {
        university1: {
          id: "1",
          name: "National University of Singapore",
          country: "Singapore",
          city: "Singapore",
          rating: "4.6",
          imgURL: "",
        },
        university2: {
          id: "2",
          name: "Nanyang Technological University Nanyang Technological University",
          country: "Singapore",
          city: "Singapore",
          rating: "4.6",
          imgURL: "",
        },
        university3: {
          id: "3",
          name: "Singapore Management University",
          country: "Singapore",
          city: "Singapore",
          rating: "4.6",
          imgURL: "",
        },
        university4: {
          id: "4",
          name: "Singapore University of Technology & Design",
          country: "Singapore",
          city: "Singapore",
          rating: "4.6",
          imgURL: "",
        },
        university5: {
          id: "5",
          name: "Singapore Institute of Technology",
          country: "Singapore",
          city: "Singapore",
          rating: "4.6",
          imgURL: "",
        },
        university6: {
          id: "6",
          name: "Singapore University of Social Sciences",
          country: "Singapore",
          city: "Singapore",
          rating: "4.6",
          imgURL: "",
        },
        university7: {
          id: "7",
          name: "Seoul National University",
          country: "South Korea",
          city: "Seoul",
          rating: "4.6",
          imgURL: "",
        },
        university8: {
          id: "8",
          name: "The University of Tokyo",
          country: "Japan",
          city: "Tokyo",
          rating: "4.6",
          imgURL: "",
        },
      },
      LocationFilters: [
        {
          id: 1,
          name: "filter 1",
          checked: true,
          category: "Location",
        },
        {
          id: 2,
          name: "filter 2",
          checked: true,
          category: "Location",
        },
        {
          id: 3,
          name: "filter 3",
          checked: true,
          category: "Location",
        },
        {
          id: 4,
          name: "filter 4",
          checked: true,
          category: "Location",
        },
      ],
      PriceFilters: [
        {
          id: 5,
          name: "filter 5",
          checked: true,
          category: "Price",
        },
        {
          id: 6,
          name: "filter 6",
          checked: true,
          category: "Price",
        },
        {
          id: 7,
          name: "filter 7",
          checked: true,
          category: "Price",
        },
        {
          id: 8,
          name: "filter 8",
          checked: true,
          category: "Price",
        },
      ],
      selected: [],
    };
  },
};
</script>

<style lang="scss" scoped></style>
