import {
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '../src/LoginSchema';

const Sample = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const onSubmit = (values:any) => {
    console.log(values);
  };

  return (
    <Center height="100vh">
      <Container padding="10" borderRadius="5" border="1px solid grey">
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing="5">
            <FormControl isInvalid={errors.username} isRequired>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                id="username"
                placeholder="Username"
                {...register('username', {
                  required: 'Username is required',
                })}
              />
              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password} isRequired>
              <FormLabel htmlFor="username">Password</FormLabel>
              <Input
                id="password"
                placeholder="Password"
                {...register('password', {
                  required: 'Password is required',
                })}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Login
            </Button>
          </VStack>
        </form>
      </Container>
    </Center>
  );
};

export default Sample;
