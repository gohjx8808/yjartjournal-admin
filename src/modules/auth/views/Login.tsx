import {
  Button,
  Center,
  Container, Image, VStack,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../../images/icon.jpeg';
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
    <Container maxW="container.xl">
      <Center h="100vh">
        <VStack spacing="18" width="100%">
          <Image src={logo} boxSize="180px" borderRadius="full" alt="logo" />
          <Container padding="10" borderRadius="5" border="1px solid grey">
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
  );
};

export default Sample;
