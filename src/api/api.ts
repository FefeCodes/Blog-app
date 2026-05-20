import type { Blog, PaginatedBlogs } from '@/types/blog'

const BASE_URL = 'https://api.oluwasetemi.dev'

export async function getPosts(page: number = 1, limit: number = 10): Promise<PaginatedBlogs> {
  const response = await fetch(`${BASE_URL}/posts?page=${page}&limit=${limit}`)

  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }

  const result = await response.json()
  return result
}

export async function getPost(id: string): Promise<Blog> {
  const response = await fetch(`${BASE_URL}/posts/${id}`)

  if (!response.ok) {
    throw new Error('Post not found')
  }

  const result = await response.json()

  return result.data || result
}
