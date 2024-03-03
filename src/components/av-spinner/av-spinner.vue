<template>
  <div class="spinner" :style="{ height: size + 'px', width: size + 'px' }">
    <div class="inner one"></div>
    <div class="inner two"></div>
    <div class="inner three"></div>
    <div class="inner four"></div>
  </div>
</template>

<script lang="ts" setup>
  import "./av-spinner.scss";

  defineProps({
    size: {
      type: Number,
      default: 70,
    },
  });
</script>
