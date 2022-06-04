<template>
  <div class="post-detail">
    <h1>Post Details</h1>
    <textarea v-autofocus></textarea>
    <p>id: {{ $route.params.id }}</p>
    <p><RouterLink to="/posts">Go Back</RouterLink></p>
  </div>
</template>

<script setup>
// imports
import { vAutofocus } from "../directives/vAutofocus";
</script>
