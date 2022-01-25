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
  Fade,
  Button,
  Link,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import NextImage from 'next/image';
import { useInView } from 'react-intersection-observer';

const ProjectCard = ({ data }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: '-100px 0px -100px 0px',
    triggerOnce: true,
  });

  return (
    <Flex mt="24" position={'relative'} ref={ref}>
      <SlideFade
        offsetX={
          data.right ? ['2px', '2px', '50px'] : ['-2px', '-2px', '-50px']
        }
        offsetY={'0px'}
        in={inView}
        transition={{ enter: { duration: 0.6 } }}
        unmountOnExit={false}
      >
        <Flex flexDirection={['column', 'column', 'row']} position={'relative'}>
          <Box
            position={'relative'}
            mx={['auto', 'auto', 2]}
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

          <Box
            ml="8"
            maxW={[96, 96, 64, 96]}
            d="flex"
            flexDirection={'column'}
            mx={['auto', 'auto', 2]}
          >
            <Fade
              in={inView}
              transition={{ enter: { delay: 0.2, duration: 0.3 } }}
            >
              <Heading fontSize={['4x', '4xl', '4xl', '5xl']} ref={ref}>
                {data.title}
              </Heading>
            </Fade>
            <Fade
              in={inView}
              transition={{ enter: { delay: 0.4, duration: 0.3 } }}
            >
              <Text
                mt={[3, 3, 3, 8]}
                fontSize={['lg', 'lg', 'lg', '2xl']}
                fontWeight={300}
                ref={ref}
              >
                {data.description}
              </Text>
            </Fade>
            <Fade
              in={inView}
              transition={{ enter: { delay: 0.6, duration: 0.3 } }}
            >
              <List
                spacing={[1, 1, 1, 2]}
                mt={[3, 3, 3, 8]}
                fontSize={['md', 'md', 'md', 'xl']}
                ref={ref}
              >
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
            </Fade>
            <Box mt={['2', '2', 'auto']}>
              <Fade
                in={inView}
                transition={{ enter: { delay: 0.8, duration: 0.3 } }}
              >
                <Link href={data.figmaLink} target={'_blank'}>
                  <Button
                    ml="auto"
                    border="solid 2px white"
                    width={[40, 40, 40, 56]}
                    height={[10, 10, 10, 14]}
                    fontSize={['xl', 'xl', 'xl', '2xl']}
                    d="flex"
                    justifyContent={'center'}
                    alignItems={'center'}
                    background={'transparent'}
                    borderRadius={'none'}
                    _hover={{ background: 'rgba(255,255,255,0.1)' }}
                  >
                    View in Figma
                  </Button>
                </Link>
              </Fade>
            </Box>
          </Box>
        </Flex>
      </SlideFade>
    </Flex>
  );
};

export default ProjectCard;
