<script setup lang="ts">
  import { Instance, useInstance } from "@/utils";

  const { $router }: Instance = useInstance();

  const goBackHome = async () => {
    $router?.push({ name: "SignIn" });
  };
</script>
<template>
  <div class="flex min-h-full flex-col bg-white pb-12 pt-16">
    <main class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
      <div class="flex flex-shrink-0 justify-center">
        <a @click="goBackHome" class="inline-flex cursor-pointer">
          <span class="sr-only">Workflow</span>
          <img class="h-12 w-auto" src="/imgs/logo.png" alt="" />
        </a>
      </div>
      <div class="py-16">
        <div class="text-center">
          <p class="text-sm font-semibold uppercase tracking-wide">{{ $t("page-not-found.404Error") }}</p>
          <h1 class="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            {{ $t("page-not-found.title") }}
          </h1>
          <p class="mt-2 text-base text-gray-500">{{ $t("page-not-found.description") }}</p>
          <div class="mt-6">
            <a class="cursor-pointer text-base font-medium text-red-600 hover:text-red-700" @click="goBackHome"
              >{{ $t("page-not-found.backHome") }}<span aria-hidden="true"> &rarr;</span></a
            >
          </div>
        </div>
      </div>
    </main>
    <!-- <footer class="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex justify-center space-x-4">
        <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-600">Contact Support</a>
        <span class="inline-block border-l border-gray-300" aria-hidden="true" />
        <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-600">Status</a>
        <span class="inline-block border-l border-gray-300" aria-hidden="true" />
        <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-600">Twitter</a>
      </nav>
    </footer> -->
  </div>
</template>
