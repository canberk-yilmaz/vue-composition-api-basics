<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h1><slot name="title" /></h1>
      <h1>{{ props.title }}</h1>
      <slot />
      <!-- <pre>{{ $slots.title() }}</pre> -->
      <button>Hide modal</button>
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
  title: {
    type: String,
    default: "No title specified",
  },
});
</script>

<style scoped>
.modal {
  background: beige;
  padding: 1rem;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
