<template>
  <div
    class="flex items-center justify-between border-2 border-slate-200 rounded-lg my-4 mx-5 py-3"
  >
    <div class="flex justify-center items-center">
      <img
        src="../assets/img/tokyo_university_logo.png"
        alt="Tokyo University Logo"
        class="h-12 w-12 mx-2"
      />
      <div class="flex flex-col">
        <h5 class="text-sm font-semibold mb-1 line-clamp-2">
          {{ university.name }}
        </h5>
        <span class="text-xs font-regular text-gray-400"
          >{{ university.city }}, {{ university.country }}</span
        >
      </div>
    </div>
    <router-link to="/universityinfo" class="mx-4">
      <i class="fa-solid fa-angle-right text-slate-500"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "UniversityCard",
  props: {
    university: { type: Object },
  },
};
</script>

<style lang="scss" scoped></style>
