import {
  FormControl, FormErrorMessage, FormLabel, Input, InputProps,
} from '@chakra-ui/react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface RegisteredTextInputProps extends Omit<InputProps, 'focusBorderColor'>{
  errors:FieldErrors
  register:UseFormRegister<Record<string, any>>
}

const RegisteredTextInput = (props:RegisteredTextInputProps) => {
  const {
    errors, id, placeholder, isRequired,
  } = props;

  const { register, ...inputProps } = props;

  return (
    <FormControl isInvalid={!!errors} isRequired={isRequired}>
      <FormLabel htmlFor={id}>{placeholder}</FormLabel>
      <Input
        {...register(id || '')}
        focusBorderColor="secondary.500"
        bgColor="white"
        {...inputProps}
      />
      <FormErrorMessage>
        {errors?.message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default RegisteredTextInput;
