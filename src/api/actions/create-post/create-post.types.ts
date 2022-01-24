export interface CreateTextPostPayload {
  content?: string;
  tags?: string[];
  isNsfw?: boolean;
  title?: string;
}

export interface CreateTextPostResponse {
  id: string;
  title: string;
  content: string;
  authorId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  nsfw: boolean;
}
