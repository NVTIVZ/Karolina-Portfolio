import { Box, Flex, Link, Text } from '@chakra-ui/react';
import NextImage from 'next/image';

const NavBar = () => {
  return (
    <Flex
      as="nav"
      height={[20, 20, 24]}
      alignItems="center"
      position={'sticky'}
      top="0"
      zIndex={99}
      background={'#1B1717'}
      justifyContent={['center', 'center', 'initial']}
    >
      <Box display={['flex', 'flex', 'none']} fontSize={'xl'}>
        <Link href="#my-work">Works</Link>
      </Box>
      <Box d="flex" ml={[2, 2, 8, 16, 32]} cursor={'pointer'}>
        <NextImage
          src="/images/logo.png"
          alt="logo"
          width="184"
          height="60"
          layout="fixed"
          onClick={() => window.scrollTo(0, 0)}
        />
      </Box>
      <Box display={['flex', 'flex', 'none']} fontSize={'xl'} ml="2">
        <Link href="#contact">Contact</Link>
      </Box>
      <Box
        d="flex"
        ml="auto"
        mr={[2, 2, 8, 16, 32]}
        fontSize={'2xl'}
        display={['none', 'none', 'flex']}
      >
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
