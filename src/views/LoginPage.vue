<template>
  <div
    class="card rounded-md bg-zinc-50 p-10 flex items-center justify-center mx-auto w-full max-w-screen-sm my-6"
  >
    <form>
      <h1
        class="block mb-6 text-center text-3xl font-medium md:text-4xl md:mb-8"
      >
        Login
      </h1>
      <div class="flex flex-col justify-center items-center">
        <div class="w-full mx-auto">
          <div>
            <label class="block text-sm md:text-lg">Email</label>
            <input
              type="email"
              class="box-content rounded-md bg-zinc-50 border md:w-64 px-3 py-2"
            />
          </div>

          <div class="mt-2.5">
            <label class="block text-sm md:text-lg">Password</label>
            <input
              type="password"
              class="box-content rounded-md bg-zinc-50 border md:w-64 px-3 py-2"
            />
          </div>

          <div class="mt-2.5 md:ml-20">
            <a
              class="text-xs font-light text-blue-800 hover:underline underline-offset-4 mr-2"
            >
              <router-link to="/ForgotPassword">Forgot password?</router-link>
            </a>

            <a
              class="text-xs font-light text-blue-800 hover:underline underline-offset-4"
            >
              <router-link to="/SignUp">Create Account</router-link>
            </a>
          </div>

          <div class="flex items-center justify-center">
            <button
              type="submit"
              class="rounded-md w-full mt-5 py-2 text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-400 dark:focus:ring-blue-900 font-normal text-sm text-center md:text-base"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  components: {},
};
</script>

<style lang="scss" scoped></style>
