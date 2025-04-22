export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  publishDate: Date;
  status: 'draft' | 'published';
  tags: string[];
  featuredImage?: string;
  readingTime: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPostInput extends Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'> {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
} 