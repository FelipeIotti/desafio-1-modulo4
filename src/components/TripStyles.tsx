import { Flex, Image, Heading,Text, useBreakpointValue, Box, Grid, GridItem } from "@chakra-ui/react";

export function TripStyles () {
  const isMobile = useBreakpointValue({
    base:false,
    sm:true
  })
  return(
 
    <Grid 
      templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr","repeat(5, 1fr)"]}
      w="100%"
      justify="space-around"
      align="center"
      mt={["10","32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1,5]}  
      mb='0'
    >
      {/* <Flex align="center" justify='space-around' mt='114px' > */}
        <GridItem>
          <Flex direction={isMobile ? 'column':'row'} justify='center' align="center" >
            {isMobile? 
              <Image src="/cocktail 1.svg"/>
              : 
              <Text color='#FFBA08'fontSize="4xl">•</Text>
            }
            <Heading
              fontSize={['18px','24px']}
              color="gray.600" 
              fontWeight={['500',"600"]}
            >
              vida noturna
            </Heading>
          </Flex>
        </GridItem>
        <GridItem> 
          <Flex direction={isMobile ? 'column':'row'} justify='center' align="center" >
            {isMobile? 
              <Image src="/surf 1.svg"/>
              : 
              <Text color='#FFBA08'fontSize="4xl">•</Text>
            }
            <Heading
              fontSize= {['18px','24px']}
              color="gray.600" 
              fontWeight={['500',"600"]}
            >
              praia
            </Heading>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex direction={isMobile ? 'column':'row'} justify='center' align="center" >
            {isMobile? 
              <Image src="/building 1.svg"/>
              : 
              <Text color='#FFBA08'fontSize="4xl">•</Text>
            }
            <Heading
              fontSize= {['18px','24px']}
              color="gray.600" 
              fontWeight={['500',"600"]}
            >
              moderno
            </Heading>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction={isMobile ? 'column':'row'} justify='center' align="center" >
            {isMobile? 
              <Image src="/museum 1.svg"/>
              : 
              <Text color='#FFBA08'fontSize="4xl">•</Text>
            }
            <Heading
              fontSize= {['18px','24px']}
              color="gray.600" 
              fontWeight={['500',"600"]}
            >
              clássico
            </Heading>
          </Flex>
        </GridItem>
        <GridItem colSpan={[2, 2, 2, 1]}>
          <Flex direction={isMobile ? 'column':'row'} justify='center' align="center" >
            {isMobile? 
              <Image src="/earth 1.svg"/>
              : 
              <Text color='#FFBA08'fontSize="4xl">•</Text>
            }
            <Heading
              fontSize= {['18px','24px']}
              color="gray.600" 
              fontWeight={['500',"600"]}
            >
              e mais...
            </Heading>
          </Flex>
        </GridItem>
      {/* </Flex> */}
    </Grid>  
  );
}