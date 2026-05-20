export interface Blog {
  id: string;
  title: string;
  slug: string | null;
  content: string;
  excerpt: string;
  featuredImage: string | null;
  status: string;
  category: string | null;
  tags: string | null;
  viewCount: number;
  publishedAt: string | null;
  isDefault: boolean;
  author: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PaginatedBlogs {
  data: Blog[];
  meta: PaginationMeta;
}

