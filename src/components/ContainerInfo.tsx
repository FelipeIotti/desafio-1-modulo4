import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export function ContainerInfo() {
  return(
    <Flex
      bgImage= '/Background.png'
      height={['163','335']}
      justify='space-around'
      align='center'
      bgRepeat='no-repeat'
      
    >
      <Flex direction='column'>
        <Heading 
          fontSize={["2xl", "5xl"]}
          color="gray.50" 
          fontWeight="500"
        >
          5 Continentes, <br />
          infinitas possibilidades.
        </Heading>
        <Text 
          fontWeight="400" 
          color="gray.100" 
          fontSize={["sm","2xl"]}
          mt={["12px", "4"]}

        >
          Chegou a hora de tirar do papel a viagem que você <br/>
          sempre sonhou
        </Text>
      </Flex>
      <Image src="/Airplane.svg" mt='7%' width={["0",'0','0','431px']}/>
    </Flex>
  );
}