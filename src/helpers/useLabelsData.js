import {useQuery} from 'react-query';

export default function useLabelsData() {
  return useQuery(
    ['labels'],
    () => fetch('/api/labels').then(res => res.json()),
  );
}