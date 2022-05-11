import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      mt={48}
      direction={"column"}
      alignItems="center"
      justifyContent={"center"}
      height={24}
    >
      <Text fontWeight={300}>Designed by Karolina Slawczyk</Text>
      <Text fontWeight={300}>Built with Next.js & Chakra UI</Text>
    </Flex>
  );
};

export default Footer;
