export interface NewsFeedPostItem {
  id: string;
  comments: number;
  content: string | null;
  createdAt: string;
  createdBy: string;
  description: string | null;
  imagePath: string | null;
  imageUrl: string | null;
  likes: number;
  tags: string[];
  title: string | null;
  type: PostType;
}

export interface FetchNewsFeedPayload {
  page?: number;
  limit?: number;
}

export interface FetchNewsFeedResponse {
  items: NewsFeedPostItem[];
  total: number;
}

export interface FetchTagsPayload {
  page?: number;
  limit?: number;
  searchString?: string;
}

export interface FetchTagsResponse {
  tags: string[];
  total: number;
}

export interface PostDetailsPayload {
  postId?: string;
}

export type PostType = 'Text' | 'Link' | 'Image';

export type PostStatus = 'Draft' | 'Active' | 'Banned';

export interface PostDetailsResponse {
  id: string;
  title: string | null;
  content: string | null;
  description: string | null;
  imageUrl: string | null;
  link: string | null;
  tags: string[];
  isNsfw: boolean;
  createdAt: Date;
  type: PostType;
  status: PostStatus;
}
