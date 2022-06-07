<template>
  <div
    class="card rounded-md mx-96 my-16 p-10 bg-zinc-50 flex items-center justify-center"
  >
    <form class="">
      <h1 class="text-center text-5xl font-medium">Sign Up</h1>
      <br />
      <div class="flex flex-col justify-center items-center">
        <div class="">
          <label>Email</label><br />
          <input
            type="email"
            class="box-content w-64 px-3 py-2 rounded-md bg-zinc-50 border"
          />
        </div>

        <div class="mt-1">
          <label>Password</label><br />
          <input
            type="password"
            class="box-content w-64 px-3 py-2 rounded-md bg-zinc-50 border"
          />
        </div>

        <div class="mt-1">
          <label>Confirm Password</label><br />
          <input
            type="password"
            class="box-content w-64 px-3 py-2 rounded-md bg-zinc-50 border"
          />
        </div>
      </div>

      <div class="ml-32 mt-1">
        <a
          class="text-xs font-light text-blue-800 hover:underline underline-offset-4"
        >
          <router-link to="/Login"
            >Already have an account? Log in</router-link
          > </a
        ><br />
      </div>

      <div class="flex items-center justify-center">
        <button
          type="submit"
          class="rounded-md w-72 ml-5 mt-8 mr-5 py-2 px-20 text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-400 dark:focus:ring-blue-900 font-normal text-smtext-center"
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  components: {},
};
</script>
