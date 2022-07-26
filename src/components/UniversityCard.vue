<template>
  <div
    class="flex items-center justify-between border-2 border-slate-200 rounded-lg my-4 mx-5 py-3"
  >
    <div class="flex items-center">
      <div class="">
        <img
          :src="university.icon"
          class="h-12 w-24 mx-2"
        />
      </div>
      <div class="flex flex-col">
        <h5 class="text-sm font-semibold mb-1 line-clamp-2 ">
          {{ university.universityName }}
        </h5>
        <span class="text-xs font-regular text-gray-400"
          >{{ region }}, {{ country }}</span
        >
      </div>
    </div>
    <router-link :to="`/universityinfo/${university.universityName}`" class="mx-4">
      <i class="fa-solid fa-angle-right text-slate-500"></i>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UniversityCard",
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
