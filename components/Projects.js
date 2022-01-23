import { Box, Flex, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Image } from '@chakra-ui/react';

const projectData = [
  {
    title: 'Garden shop',
    imageUrl: '/images/plant.png',
    description:
      'If your local garden shop had website it can look like this. Simply and classic design but made in modern and trendy way.',
    points: ['Product display', 'Build in chat', 'Product descriptions'],
    figmaLink: '/',
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
    figmaLink: '/',
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
    figmaLink: '/',
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  return (
    <Flex flexDirection={'column'} alignItems={'center'} mt="16">
      <Heading fontSize={'6xl'} mt="24">
        My Projects
      </Heading>
      <Box d="flex" alignItems="center">
        <Box width={32} d="flex" justifyContent={'center'}>
          <Image
            src="/images/aleft.svg"
            alt="aleft"
            width={16}
            display={activeProject === 0 ? 'none' : ''}
            onClick={() => setActiveProject(activeProject - 1)}
            cursor={'pointer'}
          />
        </Box>
        <ProjectCard data={projectData[activeProject]} />
        <Box width={32} d="flex" justifyContent={'center'}>
          <Image
            src="/images/aright.svg"
            alt="aright"
            width={16}
            display={activeProject === 2 ? 'none' : ''}
            onClick={() => setActiveProject(activeProject + 1)}
            cursor={'pointer'}
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default Projects;
