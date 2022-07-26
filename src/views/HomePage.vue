<template>
  <div
    class="grid sm:grid-cols-8 sm:grid-rows-3 sm:gap-4 grid-cols-1 mx-4 mb-4"
  >
    <div
      class="sm:col-span-6 sm:row-span-3 bg-white rounded-xl pt-10 px-4 box-border"
    >
      <h1 class="text-3xl font-semibold ml-4 mb-8 text-center sm:text-left">
        Top Rated Universities
      </h1>
      <div class="flex flex-wrap justify-center">
        <UniversityItem
          v-for="university in universities.slice(0, 8)"
          :key="university.universityName"
          :university="university"
        />
      </div>
    </div>
    <div
      class="sm:col-span-2 sm:row-span-1 bg-[#D5E2EE] rounded-xl flex flex-col justify-center items-center min-h-[200px]"
    >
      <h1 class="font-semibold text-2xl text-center my-5">
        No idea where to go?
      </h1>
      <router-link
        :to="`/universityinfo/${nameOfUniversities[Math.floor(Math.random() * nameOfUniversities.length)]}`"
        class="bg-[#FAFAFA] hover:bg-slate-400 rounded-lg py-3 px-4"
      >
        <span class="font-medium text-base">Show Me</span>
      </router-link>
    </div>
    <div class="sm:col-span-2 sm:row-span-2 bg-[#FAFAFA] rounded-xl">
      <h3 class="font-semibold text-xl text-center pt-5">
        Recommended for you
      </h3>
      <div>
        <UniversityCard
          v-for="university in universities.slice(0, 4)"
          :key="university.id"
          :university="university"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UniversityItem from "@/components/UniversityItem.vue";
import UniversityCard from "@/components/UniversityCard.vue";
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      universities: [],
      nameOfUniversities: [],
    };
  },
  components: {
    UniversityItem,
    UniversityCard,
  },
  created() {
    axios
      .get("http://caifan.ap-southeast-1.elasticbeanstalk.com/api/university")
      .then((response) => {
        this.universities = response.data;
        this.nameOfUniversities = response.data.map(
          (element) => element.universityName
        );
      })
      .catch((error) => console.log(error.response));
  },
};
</script>

<style lang="scss" scoped></style>
