import React, { useState } from 'react';
import './BlogEditor.css';

interface BlogPost {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  publishDate: string;
  status: 'draft' | 'published';
  tags: string;
  readingTime: string;
}

const BlogEditor: React.FC = () => {
  const [post, setPost] = useState<BlogPost>({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    author: '',
    publishDate: '',
    status: 'draft',
    tags: '',
    readingTime: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // TODO: Implement API call to save blog post
      console.log('Saving blog post:', post);
      // Reset form after successful submission
      setPost({
        title: '',
        slug: '',
        content: '',
        excerpt: '',
        author: '',
        publishDate: '',
        status: 'draft',
        tags: '',
        readingTime: '',
      });
    } catch (err) {
      setError('Failed to save blog post. Please try again.');
      console.error('Error saving blog post:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="blog-editor">
      <h2>Create New Blog Post</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="slug">Slug</label>
          <input
            type="text"
            id="slug"
            name="slug"
            value={post.slug}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={post.content}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="excerpt">Excerpt</label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={post.excerpt}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={post.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="publishDate">Publish Date</label>
          <input
            type="datetime-local"
            id="publishDate"
            name="publishDate"
            value={post.publishDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={post.status}
            onChange={handleChange}
            required
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="tags">Tags (comma-separated)</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={post.tags}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="readingTime">Reading Time (minutes)</label>
          <input
            type="number"
            id="readingTime"
            name="readingTime"
            value={post.readingTime}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : 'Save Blog Post'}
        </button>
      </form>
    </div>
  );
};

export default BlogEditor; 