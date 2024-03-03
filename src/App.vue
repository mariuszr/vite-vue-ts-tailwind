<script lang="ts" setup>
  import { onBeforeMount } from "vue";
  import { Instance, useInstance } from "@/utils";
  console.log("Browser language: ", navigator.language);

  // variables
  const { $layout }: Instance = useInstance();

  // methods
  onBeforeMount(() => {
    console.log("App mounted");
  });
</script>

<template>
  <component :is="$layout"></component>
</template>
