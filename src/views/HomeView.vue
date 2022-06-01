<template>
  <div class="home">
    <h1>{{ counterData.title }}:</h1>
    <div>
      <button @click="changeCounter('-')" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="changeCounter('+')" class="btn">+</button>
    </div>
    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text" />
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
import { reactive } from "vue";
// import { ref } from "vue";

// const counter = ref(0);
// const counterTitle = ref("My Counter");

const counterData = reactive({
  count: 0,
  title: "My Counter",
});

const changeCounter = (sign) => {
  counterData.count =
    sign === "+" ? counterData.count + 1 : counterData.count - 1;
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
