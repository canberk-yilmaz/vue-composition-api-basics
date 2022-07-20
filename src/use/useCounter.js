import { reactive, computed, watch, onMounted, nextTick } from "vue";

export function useCounter() {
  const counterData = reactive({
    count: 0,
    title: "My Counter",
  });

  watch(
    () => counterData.count,
    (newCount, oldCount) => {
      if (newCount !== oldCount)
        console.log("Counter changed from " + oldCount + " to " + newCount);
    }
  );

  // if we were using the data that declared with ref instead of reactive, we would have to use the following:
  // const canberk = ref('Cool Name')
  // we could have use the watch like this
  // watch(canberk, (newValue, oldValue) => {})

  const oddOrEven = computed(() => {
    // return counterData.count % 2 === 0 ? "even" : "odd";
    return counterData.count % 2 === 0 ? "even" : "odd";
  });

  //we can use the same hook more than once
  //therefore we can keep the similar logic together

  // we can use template refs after onmounted hook or other hooks
  onMounted(() => {
    console.log("oddOrEvent", oddOrEven.value);
  });
  // we can use $nextick to run code after the DOM is updated
  const changeCounter = (amount, event) => {
    console.log(event);
    counterData.count += amount;
    nextTick(() => {
      console.log("counter updated");
    });
  };

  return {
    counterData,
    oddOrEven,
    changeCounter,
  };
}
