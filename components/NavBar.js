import { Box, Flex, Link, Text } from '@chakra-ui/react';
import NextImage from 'next/image';

const NavBar = () => {
  return (
    <Flex as="nav" height={24} alignItems="center" position={'sticky'}>
      <Box d="flex" ml={32}>
        <NextImage
          src="/images/logo.png"
          alt="logo"
          width="184"
          height="60"
          layout="fixed"
        />
      </Box>
      <Box d="flex" ml="auto" mr={32} fontSize={'2xl'}>
        <Link>About Me</Link>
        <Link ml={6}>My Work</Link>
        <Link ml={6}>Contact Me</Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
