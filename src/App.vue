<script lang="ts">
import {
  Drawer as KDrawer,
  DrawerContent as KDrawerContent,
} from "@progress/kendo-vue-layout";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: { KDrawer, KDrawerContent, KButton },
  mounted() {
    this.$router.push(this.items[0].data);
  },
  data() {
    return {
      items: [
        {
          text: "Boards",
          icon: "k-i-layout-1-by-4",
          selected: true,
          data: {
            path: "/boards",
          },
        },
        {
          text: "Templates",
          icon: "k-i-border-left",
          selected: false,
          data: {
            path: "/templates",
          },
        },
        {
          text: "Settings",
          icon: "k-i-gear",
          selected: false,
          data: {
            path: "/settings",
          },
        },
        {
          text: "Collapse",
          icon: "k-i-arrow-chevron-left",
          selected: true,
          data: {
            path: "",
          },
        },
      ],
      expanded: true,
      selectedId: 0,
      position: "start",
      mode: "push",
    };
  },
  methods: {
    onSelect(e: any) {
      this.selectedId = e.itemIndex;
      const data = this.items[e.itemIndex].data;
      this.$router.push(data);
      if (!data.path) {
        this.expanded = !this.expanded;
      }
    },
    handleClick() {
      this.expanded = !this.expanded;
    },
  },
});
</script>

<template>
  <div class="custom-toolbar">
    <span>LOGO</span>
    <span>My Team</span>
    <KButton>Logout</KButton>
  </div>
  <KDrawer
    :expanded="expanded"
    :position="position"
    :mode="mode"
    :mini="true"
    :items="
      items.map((item, index) => ({
        ...item,
        selected: index === selectedId,
      }))
    "
    @select="onSelect"
  >
    <KDrawerContent class="container p-5">
      <h1 class="text-3xl font-semibold capitalize">{{ $route.name }}</h1>
      <RouterView />
    </KDrawerContent>
  </KDrawer>
</template>
