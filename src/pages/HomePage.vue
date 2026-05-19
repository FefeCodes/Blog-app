<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BlogCard from '@/components/BlogCard.vue'
import { getPosts } from '@/api/api'
import type { Blog } from '@/types/blog'

const posts = ref<Blog[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    posts.value = await getPosts()
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div>
    <h1>Blog Posts</h1>

    <div v-if="loading">Loading posts...</div>

    <div v-else>
      <BlogCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>
