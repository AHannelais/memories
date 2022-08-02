<script lang="ts" setup>
import { RouterView } from 'vue-router';
const count = 0;
</script>

<template>
  <div class="bg-red-500 text-blue-500">App</div>
  <div>{{ count }}</div>
  <router-view />
</template>
