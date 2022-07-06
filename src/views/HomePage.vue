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
          v-for="university in universities"
          :key="university.id"
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
      <router-link to="#show-me" class="bg-[#FAFAFA] hover:bg-slate-400 rounded-lg py-3 px-4">
        <span class="font-medium text-base">Show Me</span>
      </router-link>
    </div>
    <div class="sm:col-span-2 sm:row-span-2 bg-[#FAFAFA] rounded-xl">
      <h3 class="font-semibold text-xl text-center pt-5">
        Recommended for you
      </h3>
      <div>
        <UniversityCard :university="universities.university1" />
        <UniversityCard :university="universities.university2" />
        <UniversityCard :university="universities.university3" />
        <UniversityCard :university="universities.university8" />
      </div>
    </div>
  </div>
</template>

<script>
import UniversityItem from "@/components/UniversityItem.vue";
import UniversityCard from "@/components/UniversityCard.vue";

export default {
  name: "HomePage",
  data() {
    return {
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
          name: "Nanyang Technological University",
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
    };
  },
  components: {
    UniversityItem,
    UniversityCard,
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
