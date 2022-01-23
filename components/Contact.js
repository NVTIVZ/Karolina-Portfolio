import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
  Textarea,
  Link,
} from '@chakra-ui/react';
import NextImage from 'next/image';

const Contact = () => {
  return (
    <Flex
      alignItems={'center'}
      direction={'column'}
      mt={32}
      mb={12}
      id="contact"
    >
      <Heading fontSize={['5xl', '5xl', '6xl']}>Keep in touch</Heading>
      <Text mt="6">Please let me know your query.</Text>
      <FormControl
        maxW={['350px', '450px']}
        mt={6}
        d="flex"
        flexDirection={'column'}
      >
        <Input placeholder="E-mail" borderRadius={'none'} type={'email'} />
        <Input placeholder="Subject" borderRadius={'none'} mt="3" />
        <Textarea
          placeholder="Enter text"
          borderRadius={'none'}
          resize={'none'}
          mt="3"
          height={32}
        />
        <Button
          type="submit"
          borderRadius={'none'}
          background={'transparent'}
          border={'solid 2px white'}
          ml="auto"
          mt="3"
          _hover={{ background: 'transparent' }}
        >
          Submit
        </Button>
      </FormControl>
      <Box mt="8" d="flex">
        <Box mx="12">
          <Link
            href="https://www.linkedin.com/in/karolina-s%C5%82awczyk-b08832227/"
            target="_blank"
            _focus={{ border: 'none', outline: 'none' }}
          >
            <NextImage
              src="/images/linkedin.svg"
              alt="linkedin"
              width={64}
              height={64}
            />
          </Link>
        </Box>
        <Box mx="12">
          <Link
            href="mailto:k.slawczyk@gmail.com"
            target="_blank"
            _focus={{ border: 'none', outline: 'none' }}
          >
            <NextImage
              src="/images/mail.svg"
              alt="mail"
              width={64}
              height={64}
            />
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default Contact;
