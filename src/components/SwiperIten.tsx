import { Flex, Heading, Text } from "@chakra-ui/react";

interface SwiperContinentProps {
  continent: string;
  description: string;
  image: string;
}

export function SwiperIten ({continent, description, image}:SwiperContinentProps){
  return(
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
      direction="column"
      bgImage={`${image}`}
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
      textAlign='center'
    >
      <Heading 
        fontSize={["24px", "48px"]}
        color="gray.50" 
        fontWeight="700"
      >
        {continent}
      </Heading>
      <Text 
        fontWeight="700" 
        color="gray.100" 
        fontSize={["14px","24px"]}
        mt={["12px", "4"]}
      >
        {description}
      </Text>
    </Flex>
  );
}