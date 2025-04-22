import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy,
  Timestamp 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase/config';
import { BlogPost, BlogPostInput } from '../types/blog';

const COLLECTION_NAME = 'posts';

export const blogService = {
  // Create a new blog post
  async createPost(post: BlogPostInput): Promise<string> {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...post,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
      publishDate: post.publishDate ? Timestamp.fromDate(post.publishDate) : null
    });
    return docRef.id;
  },

  // Update an existing blog post
  async updatePost(id: string, post: Partial<BlogPostInput>): Promise<void> {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, {
      ...post,
      updatedAt: Timestamp.now(),
      publishDate: post.publishDate ? Timestamp.fromDate(post.publishDate) : undefined
    });
  },

  // Delete a blog post
  async deletePost(id: string): Promise<void> {
    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
  },

  // Get a single blog post
  async getPost(id: string): Promise<BlogPost | null> {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      return null;
    }

    const data = docSnap.data();
    return {
      id: docSnap.id,
      ...data,
      publishDate: data.publishDate?.toDate(),
      createdAt: data.createdAt.toDate(),
      updatedAt: data.updatedAt.toDate()
    } as BlogPost;
  },

  // Get all published blog posts
  async getPublishedPosts(): Promise<BlogPost[]> {
    const q = query(
      collection(db, COLLECTION_NAME),
      where('status', '==', 'published'),
      orderBy('publishDate', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      publishDate: doc.data().publishDate?.toDate(),
      createdAt: doc.data().createdAt.toDate(),
      updatedAt: doc.data().updatedAt.toDate()
    })) as BlogPost[];
  },

  // Upload an image
  async uploadImage(file: File, path: string): Promise<string> {
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  }
}; 