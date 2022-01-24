import { Action } from '../../types';
import {
  CreateTextPostPayload,
  CreateTextPostResponse,
} from './create-post.types';

export const createTextPostAction = (
  payload: CreateTextPostPayload,
): Action<CreateTextPostResponse> => ({
  method: 'POST',
  endpoint: '/news-feed/text-post',
  body: payload,
  config: {
    skipAuthorization: false,
  },
});
