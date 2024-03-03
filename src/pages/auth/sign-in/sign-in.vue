<script lang="ts" setup>
  import { onBeforeMount, reactive } from "vue";
  import { useApplication, useInstance, useDocument, Instance } from "@/utils";

  //#region variables
  const { $app } = useApplication();
  const { $t, $router }: Instance = useInstance();
  const { setTitle } = useDocument();

  const state = reactive({
    email: "",
    password: "",
    isSubmitted: false,
    isLoading: false,
  });
  //#endregion

  //#region methods
  onBeforeMount(() => {
    setTitle($t("sign-in.title"));
  });

  const handleSubmit = async () => {
    $router?.push({ name: "PageNotFound" });
  };

  const goToSignUp = async () => {
    $router?.push({ name: "SignUp" });
  };

  const signInWithGoogle = async () => {
    $router?.push({ name: "PageNotFound" });
  };

  const signInWithApple = async () => {
    $router?.push({ name: "PageNotFound" });
  };

  const goToForgotPassword = async () => {
    $router?.push({ name: "PageNotFound" });
  };

  //#endregion
</script>

<template>
  <div class="flex min-h-full flex-1 flex-col justify-center bg-white px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" :src="$app.logo" :alt="$app.companyName" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {{ $t("sign-in.title") }}
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-4" method="POST" @submit.prevent="handleSubmit">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              v-model="state.email"
              autocomplete="email"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
            />
          </div>
          <!-- <p class="ml-1 mt-1 text-xs text-red-600">{{ $t("validation.fieldRequired") }}</p> -->
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="text-sm">
              <a href="#" class="text-xs font-semibold text-red-600 hover:text-red-500" @click="goToForgotPassword"
                >Forgot password?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              v-model="state.password"
              autocomplete="current-password"
              class="focus:ring-100 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Sign in
          </button>
        </div>

        <div
          class="flex items-center text-xs uppercase text-gray-400 before:me-6 before:flex-[1_1_0%] before:border-t before:border-gray-200 after:ms-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600"
        >
          Or
        </div>

        <div class="grid gap-3 sm:flex">
          <button
            type="button"
            @click="signInWithGoogle"
            class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            <i class="fa-brands fa-google"></i>
            Sign in with Google
          </button>

          <div class="border-t border-gray-200 dark:border-gray-700 sm:border-s sm:border-t-0"></div>

          <button
            type="button"
            @click="signInWithApple"
            class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            <i class="fa-brands fa-apple"></i>
            Sign in with Apple
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ " " }}
        <a href="#" class="font-semibold leading-6 text-red-600 hover:text-red-500" @click="goToSignUp"
          >Start a 14 day free trial</a
        >
      </p>
    </div>
  </div>
</template>
