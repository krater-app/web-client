import { useEffect, useState } from 'react';
import { useQuery } from 'react-fetching-library';
import { fetchTags } from '../../api/actions/news-feed/news-feed.actions';
import { useDebounce } from '../use-debounce/use-debounce.hook';

export const useTags = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [searchString, setSearchString] = useState<string>('');

  const debouncedSearchString = useDebounce(searchString, 500);

  const { payload, query } = useQuery(
    fetchTags({
      searchString: encodeURIComponent(debouncedSearchString),
    }),
  );

  useEffect(() => {
    if (payload && payload.total) {
      setTags(payload.tags);
    }
  }, [payload]);

  useEffect(() => {
    query();
  }, [debouncedSearchString, query]);

  return {
    tags,
    setSearchString,
  };
};
