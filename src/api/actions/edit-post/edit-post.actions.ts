import { Action } from '../../types';
import { EditTextPostPayload, EditTextPostResponse } from './edit-post.types';

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
