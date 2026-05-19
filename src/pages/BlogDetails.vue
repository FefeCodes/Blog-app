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
  <div>
    <button @click="router.back()">Go Back</button>

    <RouterLink to="/"> Home </RouterLink>

    <div v-if="loading">Loading post...</div>

    <div v-else-if="post">
      <h1>{{ post.title }}</h1>

      <p>
        {{ post.body }}
      </p>
    </div>
  </div>
</template>
