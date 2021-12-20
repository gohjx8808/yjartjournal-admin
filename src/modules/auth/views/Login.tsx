import {
  Box,
  Button,
  Center,
  Container, Image, useToast, VStack,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';
import RegisteredPasswordInput from '../../../RegisteredInputs/RegisteredPasswordInput';
import RegisteredTextInput from '../../../RegisteredInputs/RegisteredTextInput';
import routeNames from '../../router/routeNames';
import { getUserInfo, login } from '../src/authApis';
import { loginSchema } from '../src/authSchema';

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(loginSchema) });

  const toast = useToast();
  const navigate = useNavigate();

  const [cookies, setCookie] = useCookies(['userInfo']);

  const { mutate: getuserInfo } = useMutation('getUserInfo', getUserInfo, {
    onSuccess: (response) => {
      const uid = response.key || '';
      const userInfo:auth.userInfo = response.val();
      if (!userInfo.roles.includes('admin')) {
        throw Error('No permission');
      }
      setCookie('userInfo', { ...userInfo, uid }, { path: '/' });
      navigate(routeNames.dashboard);
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'You do not have this permission.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const { mutate: submitLogin, isLoading } = useMutation('submitLogin', login, {
    onSuccess: (response) => {
      getuserInfo(response.user.uid);
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Your username/password is incorrect.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const onSubmit = (values:auth.submitLoginPayload) => submitLogin(values);

  return (
    <Box bgColor="blue.50">
      <Container maxW="container.xl">
        <Center h="100vh">
          <VStack spacing="18" width="100%">
            <Image src="/favicon.png" boxSize="180px" borderRadius="full" alt="logo" />
            <Container padding="10" borderRadius="5" border="1px solid grey" bgColor="white">
              <form onSubmit={handleSubmit(onSubmit)}>
                <VStack spacing="5">
                  <RegisteredTextInput
                    register={register}
                    errors={errors.username}
                    id="username"
                    isRequired
                    placeholder="Username"
                  />
                  <RegisteredPasswordInput
                    errors={errors.password}
                    id="password"
                    isRequired
                    placeholder="Password"
                    register={register}
                  />
                  <Button
                    mt={4}
                    isLoading={isLoading}
                    bgColor="primary.button"
                    _hover={{ bg: 'primary.main' }}
                    type="submit"
                  >
                    Login
                  </Button>
                </VStack>
              </form>
            </Container>
          </VStack>
        </Center>
      </Container>
    </Box>
  );
};

export default Login;
