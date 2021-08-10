import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

interface CityProps {
  name: string;
  country: string;
  countryImage: string;
  cityImage: string;
}

export function CityBox({name,country,countryImage,cityImage}:CityProps) {

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" minW='256px' border= '1px solid #FFBA08'>
      <Flex
        height='170'
        w="100%"
        bgImage={cityImage}
        bgPosition='center'
        bgRepeat='no-repeat'
        bgSize='cover'        
      >

      </Flex>
      
      <Flex justify='space-between' align="center" mt='18px' mb='30px' mr='24px' ml='24px'>
        <Flex direction="column" >
          <Heading
            fontWeight="600"
            fontSize="20px"
            color='#47585B'
            mb= '12px'
          >
            {name}
          </Heading>
          <Text
            fontWeight="500"
            fontSize="16px"
            color='#999999'
            
          >
            {country}
          </Text>
        </Flex>
        <Image 
          borderRadius='50%'
          width='30px'
          height='30px'
          src={countryImage} 
          border='1px solid gray'
        />
          
      </Flex>
    </Box>
  )
}