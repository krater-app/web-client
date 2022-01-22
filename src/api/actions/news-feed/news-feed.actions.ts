import { Action } from 'react-fetching-library';
import { FetchNewsFeedPayload, FetchNewsFeedResponse } from './news-feed.types';

export function fetchNewsFeed({
  page = 1,
  limit = 20,
}: FetchNewsFeedPayload): Action<FetchNewsFeedResponse> {
  return {
    method: 'GET',
    endpoint: `/news-feed?page=${page}&limit=${limit}`,
  };
}
