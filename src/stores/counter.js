import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 10,
    title: "My Counter Title From Store",
  }),
  actions: {
    increase(amount) {
      this.count += amount;
    },
    decrease(amount) {
      this.count -= amount;
    },
  },
  getters: {
    oddOrEven: (state) => {
      return state.count % 2 === 0 ? "even" : "odd";
    },
  },
});
