import {
  Box,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import NextImage from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ data }) => {
  return (
    <Flex mt="16">
      <Box position={'relative'}>
        <NextImage src={data.imageUrl} alt="plant" width="721" height="512" />
      </Box>

      <Box ml="8" maxW={96} d="flex" flexDirection={'column'}>
        <Heading fontSize={'5xl'}>{data.title}</Heading>
        <Text mt="8" fontSize={'2xl'} fontWeight={300}>
          {data.description}
        </Text>
        <List spacing={2} mt="8" fontSize={'xl'}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="#771745" height={5} width={5} />
            {data.points[0]}
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="#771745" height={5} width={5} />
            {data.points[1]}
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="#771745" height={5} width={5} />
            {data.points[2]}
          </ListItem>
        </List>
        <Box
          ml="auto"
          mt="auto"
          border="solid 2px white"
          width={56}
          height={14}
          fontSize={'2xl'}
          d="flex"
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Link href={data.figmaLink}>View in Figma</Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
