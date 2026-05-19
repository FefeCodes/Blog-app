<script setup lang="ts">
import type { Blog } from '@/types/blog'

defineProps<{
  post: Blog
}>()
</script>

<template>
  <div class="card">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body.slice(0, 100) }}...</p>

    <router-link :to="`/post/${post.id}`">Read more</router-link>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 1.2rem;
  margin-bottom: 1.2rem;
  border-radius: 0.6rem;
}

router-link {
  color: blue;
}
</style>
