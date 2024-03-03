<script lang="ts" setup>
  import { onBeforeMount, reactive } from "vue";
  import { useApplication, useInstance, useDocument, Instance } from "@/utils";

  //#region variables
  const { $app } = useApplication();
  const { $t, $router }: Instance = useInstance();
  const { setTitle } = useDocument();

  const state = reactive({});
  //#endregion

  //#region methods
  onBeforeMount(() => {
    setTitle($t("sign-up.title"));
  });
  //#endregion

  const goToSignIn = async () => {
    $router?.push({ name: "SignIn" });
  }
</script>
<template>
  <div class="flex min-h-full flex-1 flex-col justify-center bg-white px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" :src="$app.logo" :alt="$app.companyName" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {{ $t("sign-up.title") }}
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">


      <p class="mt-10 text-center text-sm text-gray-500">
        A member?
        {{ " " }}
        <a href="#" class="font-semibold leading-6 text-red-600 hover:text-red-500" @click="goToSignIn">Sign in now</a>
      </p>
    </div>
  </div>
</template>
