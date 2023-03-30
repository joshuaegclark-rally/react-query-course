import {useQuery} from 'react-query';

const usersUrl = '/api/users';
export default function useUserData(userId) {
  return useQuery(
    ['users', userId],
    () => fetch(`${usersUrl}/${userId}`).then(res => res.json()),
  );
}