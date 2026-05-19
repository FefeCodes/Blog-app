<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ErrorBoundary from './components/ErrorBoundary.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
</script>

<template>
  <div class="container">
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>

    <ErrorBoundary>
      <suspense>
        <template #default>
          <RouterView />
        </template>

        <template #fallback>
          <LoadingSpinner />
        </template>
      </suspense>
    </ErrorBoundary>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  padding: 20px;
  max-width: 800px;
  margin: auto;
}

nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 10px;
}
</style>
