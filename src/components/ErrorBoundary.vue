<script lang="ts">
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'ErrorBoundary',

  data() {
    return {
      hasError: false,
      error: null as Error | null,
    }
  },

  methods: {
    setError(error: Error) {
      this.hasError = true
      this.error = error
    },
  },

  errorCaptured(error: unknown) {
    if (error instanceof Error) {
      this.setError(error)
    } else {
      this.setError(new Error('Unknown error'))
    }

    return false
  },

  render() {
    if (this.hasError) {
      return h('div', { class: 'error' }, [
        h('h2', 'An error occurred'),
        h('p', this.error?.message || 'Unknown error'),
      ])
    }

    return this.$slots.default?.()
  },
})
</script>

<style scoped>
.error {
  padding: 1.2rem;
  background: #ffe5e5;
  border: 1px solid red;
  border-radius: 10px;
}
</style>
