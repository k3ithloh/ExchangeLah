<template>
  <div class="md:px-10">
    <h1 class="font-semibold text-xl pt-3 md:text-2xl">The University of Tokyo</h1>
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
        <a class="ml-3 text-sm underline underline-offset-4 decoration-1 text-gray-600" href="#">200 reviews</a>
        <i class="fa-solid fa-circle text-gray-400 ml-3 h-1"></i>
        <i class="fa-solid fa-location-dot text-gray-400 ml-3"></i>
        <span class="ml-2 text-sm text-gray-600">Tokyo, Japan</span>
      </div>

      <div class="mt-4 h-full sm:grid sm:grid-cols-7 sm:grid-rows-3 sm:gap-5">
        <img src="../assets/img/tokyo_university.jpeg" alt="Tokyo University"
          class="h-full sm:row-start-1 sm:row-end-4 sm:col-start-1 sm:col-end-4 rounded-md mb-2" />
        <img src="../assets/img/tokyo_university.jpeg" alt="Tokyo University"
          class="h-full sm:row-start-1 sm:row-end-3 sm:col-start-4 sm:col-end-5 rounded-md mb-2" />
        <img src="../assets/img/tokyo_university.jpeg" alt="Tokyo University"
          class="h-full sm:row-start-3 sm:row-end-4 sm:col-start-4 sm:col-end-5  rounded-md mb-2" />
        <img src="../assets/img/tokyo_university.jpeg" alt="Tokyo University"
          class="hidden h-full sm:row-start-1 sm:row-end-2 sm:col-start-5 sm:col-end-6 rounded-md mb-2 sm:flex" />
        <img src="../assets/img/tokyo_university.jpeg" alt="Tokyo University"
          class="hidden h-full sm:row-start-2 sm:row-end-4 sm:col-start-5 sm:col-end-6 rounded-md mb-2 sm:flex" />
        <img src="../assets/img/tokyo_university.jpeg" alt="Tokyo University"
          class="hidden h-full sm:row-start-1 sm:row-end-3 sm:col-start-6 sm:col-end-8 rounded-md mb-2 sm:flex" />
        <a class="flex justify-end items-center sm:row-start-3 sm:row-end-4 sm:col-start-6 sm:col-end-8 sm:place-self-center"
          href="#">View
          more <i class="ml-1 fa-solid fa-angle-right text-slate-500"></i></a>
      </div>
    </div>
    <div class="card rounded-md bg-zinc-50 p-5 mx-auto w-full my-6">
      <span class="font-medium text-lg md:text-xl">Description</span>
      <p class="mt-4 text-justify text-sm text-gray-800 md:text-base">The University of Tokyo, abbreviated as Todai or
        UTokyo, is
        a
        public
        research
        university located
        in
        Bunkyō, Tokyo, Japan. Established in 1877, the university is the first Imperial University and currently
        selected
        as a Top Type university of Top Global University Project by the Japanese government. University of Tokyo
        (Todai) is considered to be the most selective and prestigious university in Japan and is counted as one of the
        best universities in the world.</p>
      <p class="mt-3 text-justify text-sm text-gray-800 md:text-base">UTokyo has 10 faculties, 15 graduate schools and
        enrolls about 30,000
        students, about
        4,200 of
        whom are
        international students. In particular, the number of privately funded international students, who account for
        more than 80%, has increased 1.75 times in the 10 years since 2010, and the university is focusing on supporting
        international students. Its five campuses are in Hongō, Komaba, Kashiwa, Shirokane and Nakano. It is considered
        to be the most selective and prestigious university in Japan. As of 2021, University of Tokyo's alumni, faculty
        members and researchers include seventeen Prime Ministers, 18 Nobel Prize laureates, four Pritzker Prize
        laureates, five astronauts, and a Fields Medalist.</p>
    </div>
    <div>
      <span class="font-medium text-lg md:text-xl p-5">Requirements</span>
      <div class="flex justify-around p-5 items-center">
        <div class="flex flex-col items-center">
          <h3 class="font-medium text-[#648FB9] text-xl md:text-2xl">3.4</h3>
          <span class="pt-2 text-sm md:text-base font-normal">Minimum GPA</span>
        </div>
        <div class="flex flex-col items-center">
          <h3 class="font-medium text-[#648FB9] text-xl md:text-2xl">Yes</h3>
          <span class="pt-2 text-sm md:text-base font-normal">Visa</span>
        </div>
        <div class="flex flex-col items-center">
          <h3 class="font-medium text-[#648FB9] text-xl md:text-2xl">Yes</h3>
          <span class="pt-2 text-sm md:text-base font-normal">Accomodation</span>
        </div>
        <div class="flex flex-col items-center">
          <h3 class="font-medium text-[#648FB9] text-xl md:text-2xl">Yes</h3>
          <span class="pt-2 text-sm md:text-base font-normal">Insurance</span>
        </div>
      </div>
    </div>
    <div class="card rounded-md bg-zinc-50 p-5 mx-auto w-full my-6">
      <span class="font-medium text-lg md:text-xl">Location</span>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.550502442349!2d139.7598003152597!3d35.71267748018705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c2ffa206ea3%3A0x30e407498313ba95!2sThe%20University%20of%20Tokyo!5e0!3m2!1sen!2ssg!4v1656868348408!5m2!1sen!2ssg"
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
      <span class="font-normal text-normal md:text-lg">Bunkyo City, Tokyo, Japan</span>
      <p class="mt-3 text-justify text-sm text-gray-800 md:text-base">Tokyo University is located in a area called
        Bunkyo City. The area is crowded and is surrounded with many facilities. The University of Tokyo is composed of
        three campuses: Hongo, Komaba and Kashiwa. In addition, some University of Tokyo facilities are situated in
        other parts of both Tokyo and the country.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UniversityInfo",
  components: {},
};
</script>
