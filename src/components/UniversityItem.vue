<template>
  <div
    class="flex justify-center flex-col mb-5 mx-5 min-w-[200px] w-1/3 sm:w-1/5 h-full"
  >
    <img
      src="../assets/img/tokyo_university.jpeg"
      alt="Tokyo University"
      class="h-40 w-full rounded-md mb-2"
    />
    <h4 class="font-semibold text-base mb-1 line-clamp-2">
      {{ university.name }}
    </h4>
    <div class="flex items-center mb-1">
      <i class="fa-solid fa-location-dot text-gray-300 mr-2"></i>
      <span class="font-regular text-sm text-gray-400"
        >{{ university.city }}, {{ university.country }}</span
      >
    </div>
    <!-- TODO Find a better way for margin -->
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
export default {
  name: "UniversityItem",
  props: {
    university: { type: Object },
  },
};
</script>

<style lang="scss" scoped></style>
