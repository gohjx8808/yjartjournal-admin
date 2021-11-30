import {
  FormControl, FormErrorMessage, FormLabel, Input, InputProps,
} from '@chakra-ui/react';
import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface RegisteredTextInputProps extends InputProps{
  errors:FieldErrors
  register:UseFormRegister<Record<string, any>>
}

const RegisteredTextInput = (props:RegisteredTextInputProps) => {
  const {
    errors, register, id, placeholder, isRequired,
  } = props;

  return (
    <FormControl isInvalid={!!errors} isRequired={isRequired}>
      <FormLabel htmlFor={id}>{placeholder}</FormLabel>
      <Input
        {...register(id || '')}
        {...props}
      />
      <FormErrorMessage>
        {errors && errors.message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default RegisteredTextInput;
