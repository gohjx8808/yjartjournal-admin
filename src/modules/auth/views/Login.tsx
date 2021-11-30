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
import RegisteredTextInput from '../../../RegisteredInputs/RegisteredTextInput';
import RegisteredPasswordInput from '../../../RegisteredInputs/RegisteredPasswordInput';

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
