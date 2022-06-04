<template>
  <div class="post-detail">
    <h1>This is a post page</h1>
    
    <h2>Display the content of post with ID {{ $route.params.id }} here</h2>
    
    <div>
      <button @click="showPostId">Display the post id</button>
    </div>

    <div>
      <button @click="goHomeInThreeSec">Go Home</button>
    </div>

    <div>
      <button @click="goToFirstPost">Go To First Post</button>
    </div>
    
    <p><RouterLink to="/posts">Go Back</RouterLink></p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const showPostId = () => {
  alert(`The ID of this post is: ${route.params.id}`);
};

const goHomeInThreeSec = () => {
  setTimeout(() => {
    router.push({ name: "home" });
  }, 3000);
};

const goToFirstPost = () => {
  router.push({ name: "postDetails", params: { id: "id1" } });
};
</script>
