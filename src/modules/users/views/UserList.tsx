import { Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getUserList } from '../src/usersApis';

const UserList = () => {
  // const [userList, setUserList] = useState([]);
  const { data } = useQuery('get', getUserList);
  // console.log(getAuth().currentUser);
  console.log(data);

  return (
    <Text />
  );
};

export default UserList;
