<template>
  <div class="md:px-10">
    <h1 class="font-semibold text-xl pt-3 md:text-2xl">
      {{ university.universityName}}
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
        <i class="fa-solid fa-circle text-gray-400 ml-3 h-1"></i>
        <i class="fa-solid fa-location-dot text-gray-400 ml-3"></i>
        <span class="ml-2 text-sm text-gray-600">{{ region }}, {{ country }}</span>
      </div>

      <div class="mt-4 h-full sm:grid sm:grid-cols-7 sm:grid-rows-3 sm:gap-5">
        <img
          :src="university.img1"
          alt="Tokyo University"
          class="h-full sm:row-start-1 sm:row-end-4 sm:col-start-1 sm:col-end-4 rounded-md mb-2"
        />
        <img
          :src="university.img2"
          alt="Tokyo University"
          class="h-full sm:row-start-1 sm:row-end-3 sm:col-start-4 sm:col-end-5 rounded-md mb-2"
        />
        <img
          :src="university.img3"
          alt="Tokyo University"
          class="h-full sm:row-start-3 sm:row-end-4 sm:col-start-4 sm:col-end-5 rounded-md mb-2"
        />
        <img
          :src="university.img4"
          alt="Tokyo University"
          class="hidden h-full sm:row-start-1 sm:row-end-2 sm:col-start-5 sm:col-end-6 rounded-md mb-2 sm:flex"
        />
        <img
          :src="university.img5"
          alt="Tokyo University"
          class="hidden h-full sm:row-start-2 sm:row-end-4 sm:col-start-5 sm:col-end-6 rounded-md mb-2 sm:flex"
        />
        <img
          :src="university.img6"
          alt="Tokyo University"
          class="hidden h-full sm:row-start-1 sm:row-end-3 sm:col-start-6 sm:col-end-8 rounded-md mb-2 sm:flex"
        />
        <a
          class="flex justify-end items-center sm:row-start-3 sm:row-end-4 sm:col-start-6 sm:col-end-8 sm:place-self-center"
          href="#"
          >View more <i class="ml-1 fa-solid fa-angle-right text-slate-500"></i
        ></a>
      </div>
    </div>
    <div class="card rounded-md bg-zinc-50 p-5 mx-auto w-full my-6">
      <span class="font-medium text-lg md:text-xl">Description</span>
      <p class="mt-4 text-justify text-sm text-gray-800 md:text-base">
        {{ university.description }}
      </p>
    </div>
    <div>
      <span class="font-medium text-lg md:text-xl p-5">Requirements</span>
      <div class="flex justify-around p-5 items-center">
        <div class="flex flex-col items-center">
          <h3 class="font-medium text-[#648FB9] text-xl md:text-2xl">{{ university.gpaRequirement }}</h3>
          <span class="pt-2 text-sm md:text-base font-normal">Minimum GPA</span>
        </div>
        <div class="flex flex-col items-center">
          <h3 class="font-medium text-[#648FB9] text-xl md:text-2xl">Yes</h3>
          <span class="pt-2 text-sm md:text-base font-normal">Visa</span>
        </div>
        <div class="flex flex-col items-center">
          <h3 v-if="university.accommodation" class="font-medium text-[#648FB9] text-xl md:text-2xl">Yes</h3>
          <h3 v-else class="font-medium text-[#648FB9] text-xl md:text-2xl">No</h3>
          <span class="pt-2 text-sm md:text-base font-normal"
            >Accomodation</span
          >
        </div>
        <div class="flex flex-col items-center">
          <h3 v-if="university.insurance" class="font-medium text-[#648FB9] text-xl md:text-2xl">Yes</h3>
          <h3 v-else class="font-medium text-[#648FB9] text-xl md:text-2xl">No</h3>
          <span class="pt-2 text-sm md:text-base font-normal">Insurance</span>
        </div>
      </div>
      <span class="font-medium text-lg md:text-xl p-5">Application Information</span>
      <div class="flex justify-around p-5 items-center">
        <div class="flex flex-col items-center">
          <h3 class="font-medium text-[#648FB9] text-xl md:text-2xl">{{ university.noOfPlacesSem1 }}</h3>
          <span class="pt-2 text-sm md:text-base font-normal">Sem 1 Vacancies</span>
        </div>
        <div class="flex flex-col items-center">
          <h3 class="font-medium text-[#648FB9] text-xl md:text-2xl">{{ university.noOfPlacesSem2 }}</h3>
          <span class="pt-2 text-sm md:text-base font-normal">Sem 2 Vacancies</span>
        </div>
        <div class="flex flex-col items-center">
          <a :href="university.hostUniversityExchangeWebsite" class=" hover:text-black hover:underline">Go to University's Website</a>
        </div>
      </div>
    </div>
    <div class="card rounded-md bg-zinc-50 p-5 mx-auto w-full my-6">
      <span class="font-medium text-lg md:text-xl">Location</span>
      <div id="mapContainer" class="basemap h-96 my-5"></div>
      <span class="font-normal text-normal md:text-lg"
        >{{ region }}, {{ country }}</span
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import mapboxgl from "mapbox-gl";

export default {
  name: "UniversityInfo",
  props: ['university'],
  components: {},
  data() {
    return {
      countryList: null,
      regionList: null,
      country: null,
      region: null,
      university: "",
      accessToken:
        "pk.eyJ1IjoiYmVuamluZ2t0IiwiYSI6ImNrcHAzN2dhajA0Nm4ydW55bnk3ZjUzOWMifQ.UyhnflaD8sOuIdhbzEptKQ",
    };
  },
  async mounted() {
    await axios
      .get(
        "http://caifan.ap-southeast-1.elasticbeanstalk.com/api/region"
      )
      .then((response) => {
        this.regionList = response.data

      });
    await axios
      .get(
        "http://caifan.ap-southeast-1.elasticbeanstalk.com/api/country"
      )
      .then((response) => {
        this.countryList = response.data

      });
    await axios
      .get(
        "http://caifan.ap-southeast-1.elasticbeanstalk.com/api/university/" + this.$route.params.name
      )
      .then((response) => {
        this.university = response.data
        this.getCountry();
        this.getRegion();
      });
    await this.createMap();
  },
  methods: {
    getCountry: function () {
      console.log(this.university)
      for (var i = 0; i < this.countryList.length; i++) {
        if (this.countryList[i].countryId === this.university.countryId){
          this.country = this.countryList[i].countryName
        }
      }

    },
    getRegion: function () {
      for (var i = 0; i < this.regionList.length; i++) {
        if (this.regionList[i].regionId === this.university.regionId){
          this.region = this.regionList[i].regionName
        }
      }
    },
    async createMap() {
      try {
        mapboxgl.accessToken = this.accessToken;

        const map = new mapboxgl.Map({
          container: "mapContainer",
          style: "mapbox://styles/benjingkt/cl5guz59t000014mvy1q9lcy2",
          center: [139.6503, 35.6762],
          zoom: 12,
        });

        map.on("load", () => {});
      } catch (err) {
        console.log("map error", err);
      }
    },
  },
};
</script>

<style>
.mapboxgl-control-container {
  visibility: hidden;
}
</style>
