export interface EditTextPostPayload {
  accountId?: string;
  postId?: string;
  title?: string | null;
  content?: string;
  tags?: string[];
  isNsfw?: boolean;
}

export interface EditTextPostResponse {
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
