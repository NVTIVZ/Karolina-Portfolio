import { Box, Flex, Heading } from '@chakra-ui/react';

const AboutMe = () => {
  return (
    <Flex direction={'column'}>
      <Box mx="auto" mt="48">
        <Heading fontSize={'6xl'} letterSpacing={'wide'}>
          Hi, {"I'm"} Karolina
        </Heading>
      </Box>
    </Flex>
  );
};

export default AboutMe;
