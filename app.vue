<template>
  <div class="py-2">
    RODRIGO
    <Calendar v-model="date" />
  </div>
</template>
<script setup>
import { ref } from "vue";

const date = ref();
</script>
<style>
@import url('./assets/css/base.css');
</style>