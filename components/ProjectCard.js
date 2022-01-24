import {
  Box,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Slide,
  SlideFade,
  Text,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import NextImage from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const ProjectCard = ({ data }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: '-100px 0px -100px 0px',
  });

  return (
    <Flex mt="24" position={'relative'} ref={ref}>
      <SlideFade
        offsetX={
          data.right ? ['5px', '5px', '50px'] : ['-5px', '-5px', '-50px']
        }
        offsetY={'0px'}
        in={inView}
        transition={{ enter: { duration: 0.6 } }}
        unmountOnExit={false}
      >
        <Flex flexDirection={['column', 'column', 'row']} position={'relative'}>
          <Box
            position={'relative'}
            mx={['auto', 'auto', 0]}
            maxW={['350', '600', '721']}
          >
            <NextImage
              src={data.imageUrl}
              alt="plant"
              width="721"
              height="512"
              priority="true"
            />
          </Box>

          <Box ml="8" maxW={96} d="flex" flexDirection={'column'}>
            <Heading fontSize={'5xl'}>{data.title}</Heading>
            <Text mt="8" fontSize={'2xl'} fontWeight={300}>
              {data.description}
            </Text>
            <List spacing={2} mt="8" fontSize={'xl'}>
              <ListItem>
                <ListIcon
                  as={MdCheckCircle}
                  color="#771745"
                  height={5}
                  width={5}
                />
                {data.points[0]}
              </ListItem>
              <ListItem>
                <ListIcon
                  as={MdCheckCircle}
                  color="#771745"
                  height={5}
                  width={5}
                />
                {data.points[1]}
              </ListItem>
              <ListItem>
                <ListIcon
                  as={MdCheckCircle}
                  color="#771745"
                  height={5}
                  width={5}
                />
                {data.points[2]}
              </ListItem>
            </List>
            <Link href={data.figmaLink} passHref>
              <Box
                ml="auto"
                mt={['2', '2', 'auto']}
                border="solid 2px white"
                width={56}
                height={14}
                fontSize={'2xl'}
                d="flex"
                justifyContent={'center'}
                alignItems={'center'}
              >
                View in Figma
              </Box>
            </Link>
          </Box>
        </Flex>
      </SlideFade>
    </Flex>
  );
};

export default ProjectCard;
