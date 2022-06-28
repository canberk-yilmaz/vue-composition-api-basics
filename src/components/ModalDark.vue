<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal">
      <h1><slot name="title" /></h1>
      <h1>{{ props.title }}</h1>
      <slot />
      <!-- <pre>{{ $slots.title() }}</pre> -->
      <button @click="$emit('update:modelValue', false)">Hide modal</button>
    </div>
  </teleport>
</template>

<!--
Options api way of using props
<script> 
export default {
  props: {
    title: {
      type: String,
      default: "No title specified",
    },
  },
};
</script>
 -->
<script setup>
// To use the slot data in the script section we need to use the useSlots hook like below.
// import { useSlots } from "vue";
// const slots = useSlots();
// console.log(slots.title());

//props

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "No title specified",
  },
});

const emit = defineEmits(["update:modelValue"]);

// const handleButtonClick = () => {
//   emit("update:modelValue", false);
// };
</script>

<style scoped>
.modal {
  background: #333;
  color: white;
  padding: 1rem;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
