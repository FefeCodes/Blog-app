<script setup lang="ts">
import type { Blog } from '@/types/blog'

defineProps<{
  post: Blog
}>()
</script>

<template>
  <article class="blog-card">
    <h2 class="title">{{ post.title }}</h2>
    <p class="excerpt">
      {{ post.excerpt || (post.content ? post.content.slice(0, 100) + '...' : '') }}
    </p>

    <div class="card-footer">
      <router-link :to="`/post/${post.id}`" class="read-more"
        >Read Article
        <svg class="arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </router-link>
    </div>
  </article>
</template>

<style scoped>
.blog-card {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #ffffff;
  border: 1px solid rgba(229, 231, 235, 0.6);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.blog-card:hover {
  border-color: #111827;
  box-shadow: 4px 4px 3px 0px #ffffff;
  transform: translateY(-2px);
}

.title {
  font-family: 'Outfit', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
  letter-spacing: -0.025em;
}

.excerpt {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #4b5563;
  margin: 0;
  /* Clamps text to 3 lines */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  margin-top: auto;
  padding-top: 1rem;
}

.read-more {
  display: inline-flex;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
  text-decoration: none;
  transition: color 0.2s ease;
}

.read-more:hover {
  color: #2563eb;
}

.arrow-icon {
  margin-left: 0.375rem;
  height: 1rem;
  width: 1rem;
  transition: transform 0.2s ease;
}

.read-more:hover .arrow-icon {
  transform: translateX(4px);
}
</style>
