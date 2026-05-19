import type { Blog } from '@/types/blog'

const BASE_URL = 'https://api.oluwasetemi.dev'

export async function getPosts(): Promise<Blog[]> {
  const response = await fetch(`${BASE_URL}/posts`)

  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }

  const result = await response.json()

  return result.posts || result.data || result
}

export async function getPost(id: string): Promise<Blog> {
  const response = await fetch(`${BASE_URL}/posts/${id}`)

  if (!response.ok) {
    throw new Error('Post not found')
  }

  const result = await response.json()

  return result.data || result
}
