export interface FetchNewsFeedItem {
  comments: number;
  content: string;
  createdAt: string;
  createdBy: string;
  description: string | null;
  id: string;
  imagePath: string | null;
  imageUrl: string | null;
  likes: number;
  tags: string[];
  title: string;
  type: string;
}

export interface FetchNewsFeedPayload {
  page?: number;
  limit?: number;
}

export interface FetchNewsFeedResponse {
  items: FetchNewsFeedItem[];
  total: number;
}
