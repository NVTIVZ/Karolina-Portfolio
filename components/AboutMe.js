import { Box, Flex, Heading, Text, Spacer } from '@chakra-ui/react';
import NextImage from 'next/image';

const AboutMe = () => {
  return (
    <Flex direction={'column'}>
      <Box mx="auto" mt="12" height="500px" d="flex">
        <Box
          position={'absolute'}
          zIndex={'-1'}
          bgGradient="radial(50% 50% at 50% 50%, rgba(119, 23, 69, 0.9) 18.23%, rgba(27, 23, 23, 0.9) 82.81%, rgba(27, 23, 23, 0) 99.98%)"
          height="500px"
          width="500px"
          mx="auto"
          left="0"
          right="0"
        />
        <Heading fontSize={'7xl'} letterSpacing={'normal'} my="auto">
          Hi, I’m Karolina
        </Heading>
      </Box>
      <Box mx={'auto'} maxW="650px" mt={6} d="flex">
        <Text fontSize={'2xl'} fontWeight="300" mx="3">
          I’m self-taught UI/UX graphic designer from Wrocław who took liking in
          making pleasant for eye websites and apps.
        </Text>
      </Box>
      <Box mx={'auto'} mt={16}>
        <Heading fontSize={'2xl'}>What can i work with</Heading>
      </Box>
      <Flex justifyContent={'space-between'} mx={'auto'} mt={8}>
        <Box mx={2}>
          <NextImage src="/images/ps.svg" alt="ps" width={80} height={80} />
        </Box>
        <Box mx={2}>
          <NextImage src="/images/Id.svg" alt="Id" width={80} height={80} />
        </Box>
        <Box mx={2}>
          <NextImage src="/images/Ai.svg" alt="Ai" width={80} height={80} />
        </Box>
        <Box mx={2}>
          <NextImage src="/images/Xd.svg" alt="Xd" width={80} height={80} />
        </Box>
        <Box mx={2}>
          <NextImage src="/images/bl.svg" alt="bl" width={80} height={80} />
        </Box>
        <Box mx={2}>
          <NextImage src="/images/dn.svg" alt="dn" width={80} height={80} />
        </Box>
        <Box position={'absolute'} right={10} bottom={-5}>
          <NextImage
            src="/images/adown.svg"
            alt="adown"
            width={96}
            height={96}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default AboutMe;
