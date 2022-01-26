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
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: '0px 0px -200px 0px',
  });

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
      <Box maxW={['350px', '450px']} mt={6}>
        {' '}
        <form name="contact" method="POST" data-netlify="true">
          <Input placeholder="E-mail" borderRadius={'none'} type={'email'} />
          <Input placeholder="Subject" borderRadius={'none'} mt="3" />
          <Textarea
            placeholder="Enter text"
            borderRadius={'none'}
            resize={'none'}
            mt="3"
            height={32}
          />
          <Box d={'flex'}>
            <Button
              type="submit"
              borderRadius={'none'}
              background={'transparent'}
              border={'solid 2px white'}
              ml="auto"
              mt="3"
              _hover={{ background: 'rgba(255,255,255,0.1)' }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>

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
      <Box
        position={'absolute'}
        zIndex={'-1'}
        bgGradient="radial(50% 50% at 50% 50%, rgba(119, 23, 69, 0.9) 18.23%, rgba(27, 23, 23, 0.9) 82.81%, rgba(27, 23, 23, 0) 99.98%)"
        height={['350px', '350px', '500px']}
        width={['350px', '350px', '500px']}
        left={'-100'}
        bottom={0}
      />
      <Box
        position={'absolute'}
        zIndex={'-2'}
        mx="auto"
        left="-150"
        bottom={[150, 150, 200]}
        ref={ref}
        width={['370px', '370px', '580px']}
        transform={inView ? 'rotate(0.44turn)' : 'rotate(0.43turn)'}
        transition={'0.4s ease-in-out'}
        height={[16, 16, 32]}
        borderRadius={'50%'}
        border={'solid 1px white'}
      />
      <Box
        position={'absolute'}
        zIndex={'-2'}
        mx="auto"
        left="-150"
        bottom={[150, 150, 200]}
        width={['370px', '370px', '580px']}
        transform={inView ? 'rotate(0.46turn)' : 'rotate(0.47turn)'}
        transition={'0.4s ease-in-out'}
        height={[16, 16, 32]}
        borderRadius={'50%'}
        border={'solid 1px white'}
      />
      <Box
        position={'absolute'}
        left={inView ? 280 : 270}
        bottom={inView ? 450 : 900}
        transition={' 0.7s ease-in-out'}
      >
        <NextImage src="/images/star.svg" alt="star" width={64} height={64} />
      </Box>
      <Box
        position={'absolute'}
        left={inView ? 350 : 400}
        bottom={inView ? 410 : 800}
        transition={' 0.7s ease-in-out'}
      >
        <NextImage src="/images/star.svg" alt="star" width={64} height={64} />
      </Box>
      <Box position={'absolute'} left={350} bottom={150}>
        <NextImage src="/images/star.svg" alt="star" width={64} height={64} />
      </Box>
    </Flex>
  );
};

export default Contact;
