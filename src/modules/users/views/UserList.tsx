import { Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getUserList } from '../src/usersApis';

const UserList = () => {
  const { data } = useQuery('get', getUserList, {
    select: (d) => {
      const list = d.val();
      const processedList:user.UserData[] = [];
      Object.keys(list).map((key) => {
        const user = { ...list[key], uid: key };
        processedList.push(user);
        return null;
      });
      return processedList;
    },
  });
  console.log(data);

  return (
    <Text />
  );
};

export default UserList;
