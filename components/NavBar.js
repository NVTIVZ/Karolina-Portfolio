import { Box, Flex, Link, Text } from '@chakra-ui/react';
import NextImage from 'next/image';

const NavBar = () => {
  return (
    <Flex
      as="nav"
      height={24}
      alignItems="center"
      position={'sticky'}
      top="0"
      zIndex={99}
      background={'#1B1717'}
    >
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
        <Link href="#about-me">About Me</Link>
        <Link href="#my-work" ml={6}>
          My Work
        </Link>
        <Link href="#contact" ml={6}>
          Contact Me
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
