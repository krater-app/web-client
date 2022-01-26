import { Action } from '../../types';
import {
  EditTextPostPayload,
  EditTextPostResponse,
  PublishPostPayload,
} from './edit-post.types';

export const editTextPostAction = ({
  postId,
  ...payload
}: EditTextPostPayload): Action<EditTextPostResponse> => ({
  method: 'PATCH',
  endpoint: `/news-feed/text-post/${postId}`,
  body: payload,
  config: {
    skipAuthorization: false,
  },
});

export const publishPostAction = ({
  postId,
}: PublishPostPayload): Action<void> => ({
  method: 'PATCH',
  endpoint: `/news-feed/post/${postId}/publish`,
  config: {
    skipAuthorization: false,
  },
});
