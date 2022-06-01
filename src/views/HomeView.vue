<template>
  <div class="home">
    <div>
      <button @click="changeCounter('-')" class="btn">-</button>
      <span class="counter">{{ counter }}</span>
      <button @click="changeCounter('+')" class="btn">+</button>
    </div>
  </div>
</template>

<!--
OPTIONS API
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
import { ref } from "vue";

const counter = ref(0);

const changeCounter = (sign) => {
  counter.value = sign === "+" ? counter.value + 1 : counter.value - 1;
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
</style>
