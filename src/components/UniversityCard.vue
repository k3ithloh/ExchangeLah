<template>
  <div
    class="flex items-center justify-between border-2 border-slate-200 rounded-lg my-4 mx-5 py-3"
  >
    <div class="flex justify-center items-center">
      <div class="w-1/3">
        <img
          :src="university.Icon"
          class="h-12 w-12 mx-2"
        />
      </div>
      <div class="flex flex-col">
        <h5 class="text-sm font-semibold mb-1 line-clamp-2">
          {{ university.UniversityName }}
        </h5>
        <span class="text-xs font-regular text-gray-400"
          >{{ region }}, {{ country }}</span
        >
      </div>
    </div>
    <router-link to="/universityinfo" class="mx-4">
      <i class="fa-solid fa-angle-right text-slate-500"></i>
    </router-link>
  </div>
</template>

<script>
import countries from "@/Json/Countries.json";
import regions from "@/Json/Regions.json";

export default {
  name: "UniversityCard",
  props: {
    university: { type: Object },
  },
  data() {
    return {
      countryList: countries,
      regionList: regions,
      country: null,
      region: null,
    }
  },
  beforeMount() {
    this.getCountry()
    this.getRegion()
  },
  methods: {
    getCountry: function () {
      for (var i = 0; i < this.countryList.length; i++) {
        if (this.countryList[i].CountryId === this.university.CountryId){
          this.country = this.countryList[i].CountryName
        }
      }
    },
    getRegion: function () {
      for (var i = 0; i < this.regionList.length; i++) {
        if (this.regionList[i].RegionId === this.university.RegionId){
          this.region = this.regionList[i].RegionName
        }
      }
    },

  }

};
</script>

<style lang="scss" scoped></style>
