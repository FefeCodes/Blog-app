<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getPost } from '@/api/api'
import type { Blog } from '@/types/blog'

const route = useRoute()
const router = useRouter()

const post = ref<Blog | null>(null)
const loading = ref(true)

onMounted(async () => {
  try {
    post.value = await getPost(route.params.id as string)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <main class="post-container">
    <nav class="navigation">
      <button @click="router.back()" class="nav-link">&larr; Back</button>
    </nav>

    <div v-if="loading" class="loading-state">
      <div class="spinner"></div>
    </div>

    <article v-else-if="post" class="post-content">
      <header class="post-header">
        <h1 class="post-title">{{ post.title }}</h1>
      </header>

      <div class="post-body">
        {{ post.content }}
      </div>
    </article>
  </main>
</template>

<style scoped>
.post-container {
  width: 100%;
  margin: 0 auto;
  padding: 8rem 3rem;
}

@media (min-width: 1024px) {
  .post-container {
    padding: 5rem 2rem;
  }
}

.navigation {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
}

.nav-link {
  background: none;
  border: none;
  padding: 0;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #fff;
}

.separator {
  color: #d1d5db;
}

.loading-state {
  display: flex;
  min-height: 40vh;
  align-items: center;
  justify-content: center;
}

/* Minimalist matte black spinner */
.spinner {
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  border: 4px solid #f3f4f6;
  border-top-color: #111827;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.post-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.post-header {
  border-bottom: 1px solid #f3f4f6;
  padding-bottom: 2rem;
}

.post-title {
  font-family: 'Outfit', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.025em;
  color: #fff;
  margin: 0;
}

.post-body {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  line-height: 1.75;
  color: #fff;
  white-space: pre-wrap;
}
</style>
