import {
  Box,
  Button,
  Center,
  Container, Image, VStack,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import RegisteredPasswordInput from '../../../RegisteredInputs/RegisteredPasswordInput';
import RegisteredTextInput from '../../../RegisteredInputs/RegisteredTextInput';
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
                    isLoading={isSubmitting}
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

export default Sample;
