<script setup lang="ts">
import { computed, toRefs } from "vue";

const props = defineProps<{
  src: string;
}>();

const { src } = toRefs(props);

function toTwicPicsURL(url: string) {
  return url.replace("https://cdn.filestackcontent.com/", "");
}
const twicpicsURL = computed(() => {
  const url = toTwicPicsURL(src.value);
  return url;
});
</script>

<template>
  <!-- <img /> -->
  <TwicImg :src="twicpicsURL" />
</template>
