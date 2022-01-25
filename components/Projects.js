import {
  Box,
  Button,
  Flex,
  Heading,
  Slide,
  SlideFade,
  useDisclosure,
} from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    title: 'Garden shop',
    imageUrl: '/images/plant.png',
    description:
      'If your local garden shop had website it can look like this. Simply and classic design but made in modern and trendy way.',
    points: ['Product display', 'Build in chat', 'Product descriptions'],
    figmaLink:
      'https://www.figma.com/file/bTV8GWtboFifh1Gvajl1kg/Untitled?node-id=0%3A1',
    right: false,
  },
  {
    title: 'Online clinic',
    imageUrl: '/images/clinic.png',
    description:
      'Easy way for contacting your doctor or refill your prescription. A modern and non-contact version of clinic.',
    points: [
      'Easy to fill forms',
      'Regestration option',
      'Colorful and friendly design',
    ],
    figmaLink:
      'https://www.figma.com/file/7Lscu3IvL2Jua087ETse9k/Untitled?node-id=0%3A1',
    right: true,
  },
  {
    title: 'Music band',
    imageUrl: '/images/band.png',
    description:
      'You have a music band and you want to show it to the world? You can share your music and stay in touch witch your fans at any time.',
    points: [
      'Music player display',
      'Night mode',
      'Extravagant and unusual design',
    ],
    figmaLink:
      'https://www.figma.com/file/qHIppSjvXC0YcHcT64gprc/Untitled?node-id=0%3A1',
    right: false,
  },
];

const Projects = () => {
  return (
    <Flex
      flexDirection={'column'}
      alignItems={'center'}
      mt="16"
      id="my-work"
      position={'relative'}
    >
      <Heading fontSize={'6xl'} mt="24">
        My Projects
      </Heading>

      <ProjectCard data={projectData[0]} />

      <ProjectCard data={projectData[1]} />

      <ProjectCard data={projectData[2]} />
    </Flex>
  );
};

export default Projects;
