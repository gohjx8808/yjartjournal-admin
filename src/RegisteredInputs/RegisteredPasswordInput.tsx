import {
  FormControl,
  FormLabel,
  IconButton, Input, InputGroup, InputProps, InputRightElement,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';

interface RegisteredPasswordInputProps extends InputProps{
  errors:FieldErrors
  register:UseFormRegister<Record<string, any>>
}

const RegisteredPasswordInput = (props:RegisteredPasswordInputProps) => {
  const {
    isRequired, errors, register, id, placeholder,
  } = props;
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl isInvalid={!!errors} isRequired={isRequired}>
      <FormLabel htmlFor={id}>{placeholder}</FormLabel>
      <InputGroup size="md">
        <Input
          {...register(id || '')}
          type={show ? 'text' : 'password'}
          {...props}
        />
        <InputRightElement>
          <IconButton aria-label="Toggle Visibility" variant="ghost" onClick={handleClick} icon={show ? <RiEyeOffFill /> : <RiEyeFill />} />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default RegisteredPasswordInput;