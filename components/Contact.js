import {
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';

const Contact = () => {
  return (
    <Flex alignItems={'center'} direction={'column'} mt={32} mb={12}>
      <Heading fontSize={'6xl'}>Keep in touch</Heading>
      <Text mt="6">Please let me know your query.</Text>
      <FormControl maxW={'450px'} mt={6} d="flex" flexDirection={'column'}>
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
    </Flex>
  );
};

export default Contact;
