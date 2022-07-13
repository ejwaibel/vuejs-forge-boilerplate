import { acceptHMRUpdate, defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export type AlertStyle = "error" | "success" | "warning" | "info" | "none";

export interface AlertOptions {
  // Options
  html: boolean;
  closable: boolean;
  timeout: number | false;
  style: AlertStyle;
}

export interface Alert extends AlertOptions {
  id: string;
  message: string;
}

const defaultOptions: Required<AlertOptions> = {
  closable: true,
  html: false,
  timeout: 3000,
  style: "info",
};

export const useAlerts = defineStore("alerts", {
  state: () => ({
    items: [] as Alert[],
  }),

  actions: {
    notify(message: string, style: AlertStyle, options?: AlertOptions) {
      options = { ...defaultOptions, style, ...options };
      const id = uuid();
      console.log("Adding new item:", { message, id, ...options });
      this.items.push({
        message,
        id,
        ...options,
      });

      if (options.timeout !== false) {
        setTimeout(() => {
          this.remove(id);
        }, options.timeout);
      }
    },

    remove(id: string) {
      const index = this.items.findIndex((item) => item.id === id);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAlerts, import.meta.hot));
}
