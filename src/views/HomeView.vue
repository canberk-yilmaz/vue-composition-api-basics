<template>
  <div class="home">
    <h1>{{ appTitle }}</h1>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="changeCounter(-2)" class="btn">--</button>
      <button @click="changeCounter(-1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="changeCounter(1, $event)" class="btn">+</button>
      <button @click="changeCounter(2, $event)" class="btn">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text" v-autofocus />
    </div>
  </div>
</template>

<!--OPTIONS API
<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    changeCounter(sign) {
      this.counter = sign === '+' ? this.counter + 1 : this.counter - 1
    }
  },
  watch: {
    counter(newCount, oldCount) {
      if (newCount !== oldCount) alert ('Counter changed from ' + oldCount + ' to ' + newCount)) 
    }
  },
  mounted() {
    console.log('mounted')
  },
  unmounted() {
    console.log('unmounted')
  },
  directives: {
    autofocus: {
      mounted(el) {
        el.focus()
      }
    }
  }
}
</script>
-->

<!-- COMPOSITION API - Setup Function
<script>
import { ref } from 'vue'

export default {
  setup() {
    const counter = ref(0)

    const changeCounter = (sign) => {
      counter.value = sign === '+' ? counter.value + 1 : counter.value - 1
    }


    return {
      counter, changeCounter
    }
  }
}
</script>
 -->

<!--COMPOSITION API - <script setup> -->

<script setup>
import { reactive, computed, watch, onMounted } from "vue";
// import { ref } from "vue";

// const counter = ref(0);
// const counterTitle = ref("My Counter");
const appTitle = "Amazing Counter App";

onMounted(() => {
  console.log({ appTitle });
});

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

onMounted(() => {
  console.log("oddOrEvent", oddOrEven.value);
});

const changeCounter = (amount, event) => {
  console.log(event);
  counterData.count += amount;
};

// list vue3 lifecycle hooks as an empty
// write them all in next section
// onBeforeMount(() => {
//   console.log("onBeforeMount");
// });
// onBeforeUpdate(() => {
//   console.log("onBeforeUpdate");
// });
// onMounted(() => {
//   console.log("onMounted");
// });
// onUpdated(() => {
//   console.log("onUpdated");
// });
// onBeforeUnmount(() => {
//   console.log("onBeforeUnmount");
// });
// onUnmounted(() => {
//   console.log("onUnmounted");
// });
// onActivated(() => {
//   console.log("onActivated");
// });
// onDeactivated(() => {
//   console.log("onDeactivated");
// });

/*
  directives
*/

const vAutofocus = {
  mounted: (el) => {
    el.focus();
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 40px;
}
</style>
