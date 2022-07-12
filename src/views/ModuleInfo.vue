<template>
  <div class="md:px-10">
    <h1 class="font-semibold text-xl pt-3 md:text-2xl">
      {{ $route.params.name }}
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
        <i class="fa-solid fa-basket-shopping text-gray-400 ml-3"></i>
        <span class="ml-2 text-sm text-gray-600">Module Basket</span>
      </div>

    </div>
    <div class="grid md:grid-cols-[5fr_2fr] gap-4 rounded-xl">
        <div >
            <div class="rounded-2xl bg-zinc-50 p-5 mx-auto w-full my-6">
                <span class="font-medium text-lg md:text-xl">Description</span>
                <p class="mt-4 text-justify text-sm text-gray-800 md:text-base">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius laborum rerum, rem labore at perferendis impedit dicta quos placeat recusandae facilis non, adipisci molestiae fugit optio, quaerat magnam nulla quod.
                </p>
                <p class="mt-3 text-justify text-sm text-gray-800 md:text-base">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis amet illo nostrum iure explicabo dolor quod eveniet iste maxime laboriosam id inventore saepe exercitationem veniam reiciendis dicta omnis vel tenetur praesentium rem aspernatur, ducimus minima doloribus doloremque. Tempore sunt, maiores similique sed doloremque magni error cum laboriosam voluptatem distinctio quia.
                </p>
            </div>
            <div>
                Reviews
            </div>
        </div>
        <div>
            <div class="bg-zinc-50 rounded-2xl text-center p-4 my-6">
                <span class="p-4">
                    <h1 class="md:text-4xl">
                        4/5
                    </h1>
                    <h1>
                        Difficulty
                    </h1>
                </span>
                <span class="p-4">
                    <h1 class="md:text-4xl">
                        4/5
                    </h1>
                    <h1>
                        Popularity
                    </h1>
                </span>
            </div>
            <div class="bg-zinc-50 rounded-2xl">
                <h1 class="font-semibold md:text-2xl">Teachers</h1>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "UniversityInfo",
  components: {},
  data() {
    return {
    };
  },
  methods: {

  },
};
</script>

<style>

</style>
