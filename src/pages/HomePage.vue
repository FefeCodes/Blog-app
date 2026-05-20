<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BlogCard from '@/components/BlogCard.vue'
import { getPosts } from '@/api/api'
import type { Blog, PaginationMeta } from '@/types/blog'

const posts = ref<Blog[]>([])
const loading = ref(true)
const meta = ref<PaginationMeta | null>(null)

const fetchPosts = async (page: number = 1) => {
  loading.value = true
  try {
    const response = await getPosts(page)
    posts.value = response.data
    meta.value = response.meta
  } finally {
    loading.value = false
  }
}

onMounted(() => fetchPosts(1))

const prevPage = () => {
  if (meta.value?.hasPreviousPage) {
    fetchPosts(meta.value.page - 1)
  }
}

const nextPage = () => {
  if (meta.value?.hasNextPage) {
    fetchPosts(meta.value.page + 1)
  }
}
</script>

<template>
  <div class="home-page">
    <div v-if="loading">Loading posts...</div>

    <div v-else class="nud">
      <BlogCard v-for="post in posts" :key="post.id" :post="post" />

      <div v-if="meta" class="pagination">
        <button :disabled="!meta.hasPreviousPage" @click="prevPage">Previous</button>
        <span class="page-info">Page {{ meta.page }} of {{ meta.totalPages }}</span>
        <button :disabled="!meta.hasNextPage" @click="nextPage">Next</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  width: 100%;
  padding: 2rem 0;
}

.nud {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 1.5rem;
}

h1 {
  color: white;
  padding-bottom: 1rem;
}

.pagination {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
}

.pagination button {
  padding: 0.8rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.page-info {
  font-weight: bold;
  color: #fff;
}
</style>
