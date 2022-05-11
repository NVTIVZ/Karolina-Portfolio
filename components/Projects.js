import {
  Box,
  Button,
  Flex,
  Heading,
  Slide,
  SlideFade,
  useDisclosure,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    title: "Plant House",
    imageUrl: "/images/plantnew.png",
    problem:
      "The most popular pages of online gardening stores are outdated and motley. The overflow of information causes the products to be poorly displayed. The contents merge into one.",
    solution:
      "Creating simple, minimalistic and elegant website. Good product display and simple navigation.  The goal is to create timeless and universal design.",
    figmaLink:
      "https://www.figma.com/file/GB7Pf6zvVLj3Zb2ATHZ2l9/Plant-House?node-id=0%3A1",
    right: false,
  },
  {
    title: "Online clinic",
    imageUrl: "/images/oclinic.png",
    problem:
      "Patients need to go to clinics, regardless of whether you need a  basic prescription or are seriously ill. High traffic in clinics, problems with registration. Often the need to register by phone and waiting in lines for several hours.",
    solution:
      "Designing a website that will allow easy and round-the-clock contact with a doctor without leaving home, and as a result will reduce traffic in clinics and the risk of spreading diseases between patients.",
    figmaLink:
      "https://www.figma.com/file/7Lscu3IvL2Jua087ETse9k/Online-clinic-webiste",
    right: true,
  },
  {
    title: "Silent Mode",
    imageUrl: "/images/silent.png",
    problem:
      "Starting being fit isn’t always easy. There is a lot of different apps that can help you, but often they lack diversity and they require basic knowledge about topic. You need to know at advance if you need to download yoga, meditation, or relaxation music app.",
    solution:
      "Creating an application that will be begginer friendly, with detailed descriptions of exercises and will combine the aspects of yoga, meditation, relaxation music without the need to download many applications.\n",
    figmaLink: "https://www.figma.com/file/IdUKnGGENnIl7TCPihnYLj/Silent-Mode",
    right: false,
  },
  {
    title: "Weather app",
    imageUrl: "/images/weather.png",
    description:
      " Some exploration on weather app design. I used trendy gradients and colours. You can check wether conditions in different locations. This concept allows you to check weather in current day and in following week. You can also check humidity, uv index, wind and pressure. ",
    figmaLink: "https://www.figma.com/file/HO5IogNWsvmlpDn5hSntYy/Weather-App",
    right: true,
  },
];

const Projects = () => {
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      mt="16"
      id="my-work"
      position={"relative"}
    >
      <Heading fontSize={"6xl"} mt="24">
        My Projects
      </Heading>

      <ProjectCard data={projectData[0]} />

      <ProjectCard data={projectData[1]} />

      <ProjectCard data={projectData[2]} />
      <ProjectCard data={projectData[3]} />
    </Flex>
  );
};

export default Projects;
