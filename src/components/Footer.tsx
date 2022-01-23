import { HStack, Text } from '@chakra-ui/react';

const Footer = () => (
  <HStack
    bgColor="primary.500"
    p={3}
    justifyContent="center"
    position="fixed"
    bottom={0}
    w="100%"
  >
    <Text fontWeight="bold">© YJ Art Journal 2022</Text>
  </HStack>
);

export default Footer;
