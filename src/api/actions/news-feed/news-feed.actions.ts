import { Action } from 'react-fetching-library';
import {
  FetchNewsFeedPayload,
  FetchNewsFeedResponse,
  FetchTagsPayload,
  FetchTagsResponse,
  PostDetailsPayload,
  PostDetailsResponse,
} from './news-feed.types';

export const fetchNewsFeed = ({
  page = 1,
  limit = 20,
}: FetchNewsFeedPayload): Action<FetchNewsFeedResponse> => ({
  method: 'GET',
  endpoint: `/news-feed?page=${page}&limit=${limit}`,
});

export const fetchTags = ({
  limit = 20,
  page = 1,
  searchString = '',
}: FetchTagsPayload): Action<FetchTagsResponse> => ({
  method: 'GET',
  endpoint: `/news-feed/tags?page=${page}&limit=${limit}&searchString=${searchString}`,
});

export const fetchPostDetails = ({
  postId,
}: PostDetailsPayload): Action<PostDetailsResponse> => ({
  method: 'GET',
  endpoint: `/news-feed/post-details/${postId}`,
  config: {
    skipAuthorization: false,
  },
});
