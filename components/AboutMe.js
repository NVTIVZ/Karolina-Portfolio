import { Box, Fade, Flex, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "-500px 0px 0px 0px",
  });

  return (
    <Flex direction={"column"} zIndex={1} id="about-me">
      <Box
        mx="auto"
        mt="16"
        height={["350px", "350px", "500px"]}
        d="flex"
        position={"relative"}
      >
        <Box
          position={"absolute"}
          zIndex={"-1"}
          bgGradient="radial(50% 50% at 50% 50%, rgba(119, 23, 69, 0.9) 18.23%, rgba(27, 23, 23, 0.9) 82.81%, rgba(27, 23, 23, 0) 99.98%)"
          height={["350px", "350px", "500px"]}
          width={["350px", "350px", "500px"]}
          mx="auto"
          left="0"
          right="0"
        />
        <Box
          position={"absolute"}
          zIndex={"-2"}
          mx="auto"
          left="0"
          top={[150, 150, 200]}
          right="0"
          ref={ref}
          width={["370px", "370px", "580px"]}
          transform={inView ? "rotate(0.54turn)" : "rotate(0.53turn)"}
          transition={"0.4s ease-in-out"}
          height={[16, 16, 32]}
          borderRadius={"50%"}
          border={"solid 1px white"}
        />
        <Box
          position={"absolute"}
          zIndex={"-2"}
          mx="auto"
          left="0"
          top={[150, 150, 200]}
          right="0"
          width={["370px", "370px", "580px"]}
          transform={inView ? "rotate(0.56turn)" : "rotate(0.57turn)"}
          transition={"0.4s ease-in-out"}
          height={[16, 16, 32]}
          borderRadius={"50%"}
          border={"solid 1px white"}
        />
        <Box position={"absolute"} right={0} top={20}>
          <NextImage src="/images/star.svg" alt="star" width={64} height={64} />
        </Box>
        <Box position={"absolute"} right={10} top={5}>
          <NextImage src="/images/star.svg" alt="star" width={64} height={64} />
        </Box>
        <Box position={"absolute"} left={10} bottom={5}>
          <NextImage src="/images/star.svg" alt="star" width={64} height={64} />
        </Box>
        <Box my="auto">
          <Fade in={true} transition={{ enter: { delay: 0.3, duration: 0.5 } }}>
            <Heading fontSize={["5xl", "5xl", "7xl"]} letterSpacing={"normal"}>
              Hi, I’m Karolina
            </Heading>
          </Fade>
        </Box>
      </Box>

      <Box mx={"auto"} maxW="650px" mt={6} d="flex">
        <Fade in={true} transition={{ enter: { delay: 0.5, duration: 0.5 } }}>
          <Text fontSize={"2xl"} fontWeight="300" mx="3">
            I’m self-taught UI/UX graphic designer from Wrocław who took liking
            in making pleasant for eye websites and apps.
          </Text>
        </Fade>
      </Box>
      <Box mx={"auto"} mt={16}>
        <Fade in={true} transition={{ enter: { delay: 0.7, duration: 0.5 } }}>
          <Heading fontSize={"2xl"}>What can i work with</Heading>
        </Fade>
      </Box>

      <Flex mx={"auto"} mt={8}>
        <Fade in={true} transition={{ enter: { delay: 1, duration: 0.5 } }}>
          <Flex flexWrap={"wrap"} justifyContent={"center"}>
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
              <NextImage
                src="/images/Figma-logo.svg"
                alt="fm"
                width={80}
                height={80}
              />
            </Box>
          </Flex>
        </Fade>
      </Flex>
    </Flex>
  );
};

export default AboutMe;
