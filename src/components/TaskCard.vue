<script setup lang="ts">
defineProps({
  task: Object,
});
</script>

<template>
  <div class="p-5 bg-white">
    {{ task }}
  </div>
</template>
