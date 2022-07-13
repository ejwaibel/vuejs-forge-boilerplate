<script setup lang="ts">
import rilaImage from "@/assets/rila.jpeg";
import roseImage from "@/assets/rose_festival.jpeg";
import type { Board } from "@/types";
import {
  Card as KCard,
  // CardHeader as KCardHeader,
  CardBody as KCardBody,
  // CardTitle as KCardTitle,
  CardImage as KCardImage,
} from "@progress/kendo-vue-layout";
const boardData: Board[] = [
  {
    id: "id1",
    title: "My First Board",
    order: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date(),
  },
  {
    id: "id2",
    title: "My Second Board",
    order: "2",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date(),
  },
];

const images: any = {
  id1: rilaImage,
  id2: roseImage,
};
</script>
<template>
  <div class="k-card-deck mx-auto container">
    <a
      v-for="(board, index) in boardData"
      :key="index"
      :href="`?${board.id}`"
      class="w-80"
    >
      <KCard orientation="vertical">
        <KCardImage
          :src="images[board.id]"
          class="object-cover object-center h-40"
        />
        <KCardBody>
          <h2>{{ board.title }}</h2>
        </KCardBody>
      </KCard>
    </a>
    <div class="justify-center align-center flex flex-col w-auto">
      <a href="#">New Board +</a>
    </div>
  </div>
</template>
