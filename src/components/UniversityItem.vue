<template>
  <div
    class="flex justify-center flex-col mb-5 mx-5 min-w-[200px] w-1/3 sm:w-1/5 h-full"
  >
    <img
      :src="university.img1"
      alt="University Photo"
      class="h-40 w-full rounded-md mb-2"
    />
    <router-link :to="`/universityinfo/${university.universityName}`">
      <h4 class="font-semibold text-base mb-1 line-clamp-2">
        {{ university.universityName }}
      </h4>
    </router-link>
    <div class="flex items-center mb-1">
      <i class="fa-solid fa-location-dot text-gray-300 mr-2"></i>
      <span class="font-regular text-sm text-gray-400"
        >{{ region }}, {{ country }}</span
      >
    </div>
    <div class="flex items-center">
      <div class="mr-1">
        <i class="fa-solid fa-star text-[#EDD36A] mr-1"></i>
        <i class="fa-solid fa-star text-[#EDD36A] mr-1"></i>
        <i class="fa-solid fa-star text-[#EDD36A] mr-1"></i>
        <i class="fa-solid fa-star text-[#EDD36A] mr-1"></i>
        <i class="fa-solid fa-star text-[#EDD36A] mr-1"></i>
      </div>
      <span class="text-xs text-gray-400">{{ university.rating }}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UniversityItem",
  props: {
    university: { type: Object },
  },
  data() {
    return {
      countryList: null,
      regionList: null,
      country: null,
      region: null,
    }
  },
  updated(){
    axios
      .get(
        "http://caifan.ap-southeast-1.elasticbeanstalk.com/api/region"
      )
      .then((response) => {
        this.regionList = response.data
        this.getRegion();
      })
      .catch((error) => console.log(error.response));;
    axios
      .get(
        "http://caifan.ap-southeast-1.elasticbeanstalk.com/api/country"
      )
      .then((response) => {
        this.countryList = response.data
        this.getCountry();
      })
      .catch((error) => console.log(error.response));;
  },
  mounted() {
    axios
      .get(
        "http://caifan.ap-southeast-1.elasticbeanstalk.com/api/region"
      )
      .then((response) => {
        this.regionList = response.data
        this.getRegion();
      })
      .catch((error) => console.log(error.response));;
    axios
      .get(
        "http://caifan.ap-southeast-1.elasticbeanstalk.com/api/country"
      )
      .then((response) => {
        this.countryList = response.data
        this.getCountry();
      })
      .catch((error) => console.log(error.response));;
  },
  methods: {
    getCountry: function () {
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

  }
};
</script>

<style lang="scss" scoped></style>
