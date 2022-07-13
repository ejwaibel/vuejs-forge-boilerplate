<template>
  <div class="z-10">
    <NotificationGroup
      :style="{
        right: '10px',
        bottom: '10px',
        alignItems: 'flex-start',
        flexWrap: 'wrap-reverse',
      }"
    >
      <Fade v-for="alert in alerts.items" :key="alert.id" appear>
        <Notification
          :type="{
            style: alert.style,
            icon: true,
          }"
          :closable="alert.closable"
          @close="() => {}"
        >
          <div v-if="alert.html" :html="alert.message"></div>
          <span v-else>{{ alert.message }}</span>
        </Notification>
      </Fade>
    </NotificationGroup>
  </div>
</template>

<script setup lang="ts">
import { useAlerts } from "@/stores/alerts";
import { Fade } from "@progress/kendo-vue-animation";
import {
  Notification,
  NotificationGroup,
} from "@progress/kendo-vue-notification";

const alerts = useAlerts();
</script>

<style scoped></style>
