import React from "react";
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { GetServerSideProps} from "next";

import api from "../../api/service";
import { CityBox } from "../../components/CityBox";
import { HeaderLogo } from "../../components/HeaderLogo";

interface ContinentProps {
  id: number;
  continent: string;
  description1: string;
  description2: string;
  image1: string;
  image2: string;
  numberCountry: number;
  numberLinguage: number;
}

interface CityProps {
  id : number;
  continent_id: number;
  name : string;
  country: string;
  cityImage : string;
  countryImage : string;
}

interface ContinentPageProps {
  continents: ContinentProps;
  citys: CityProps[];
}

export default function ContinentPage ({continents, citys}:ContinentPageProps) {
  return(
    <>
      <HeaderLogo/>
      <Flex
        height={['150px', '500px']}
        width="100%"
        
        bgImage={continents.image2}
        bgPosition='center'
        bgRepeat='no-repeat'
        bgSize='cover'
        mb={['10px','80px']}
      >
        <Heading
          fontSize={["28px", "48px"]}
          color="gray.50" 
          fontWeight={['600',"700"]}
          margin= {['auto','0']}
          mt={['auto','370px']}
          ml={['auto',"140px"]}
        >
          {continents.continent}
        </Heading>
      </Flex> 
      <SimpleGrid gap='10' minChildWidth={['200px','500px']} maxchildwidth={['200px','600px']} mb={['38px','80px']} marginX={['16px','140px']} >
        <Box margin='auto'>
          <Text 
            maxWidth='600px' 
            fontSize={['14px','24px']}
            fontWeight='400'
            align='justify'
            color='#47585B'
          >
            {continents.description2}
          </Text>
        </Box>

        <Box margin={['0',"auto"]} >
          <Flex justify='space-between' align='center' minWidth={['250px','500px']} >
            <Flex justify='center' align="center" direction= 'column' >
              <Text
                fontSize={['24px','48px']}
                fontWeight="600"
                color=' #FFBA08'
              >{continents.numberCountry}
              </Text>
              <Text
                fontSize={['18px','24px']}
                fontWeight={['400',"600"]}
                color='#47585B'
              >países
              </Text>
            </Flex>

            <Flex justify='center' align="center" direction= 'column'>
              <Text
                fontSize={['24px','48px']}
                fontWeight="600"
                color=' #FFBA08'
              >{continents.numberLinguage}
              </Text>
              <Text
                fontSize={['18px','24px']}
                fontWeight={['400',"600"]}
                color='#47585B'
              >línguas
              </Text>
            </Flex>

            <Flex justify='center' align="center" direction= 'column' >
              <Text
                fontSize={['24px','48px']}
                fontWeight="600"
                color=' #FFBA08'
              >{citys.length}
              </Text>
              <Text
                fontSize={['18px','24px']}
                fontWeight={['400',"600"]}
                color='#47585B'
              >cidades +100
              </Text>
            </Flex>
          </Flex>
        </Box>
      </SimpleGrid>
      
      <Flex
        justify='flex-start' 
        margin= 'auto'
        direction= 'column'
        marginX={['16px','140px']}
        pt='0'
      >
        <Heading
          fontWeight="500"
          fontSize={['24px',"36px"]}
          color="#47585B"
          mb='40px'
        >
          Cidades +100
        </Heading>
        <SimpleGrid spacing="40px" minChildWidth='220px' mb='10px' marginX={['60px','0']} >          
          {citys.map(city => {
            return(
              <CityBox
                key = {city.id}
                name = {city.name}
                country = {city.country}
                cityImage = {city.cityImage}
                countryImage = {city.countryImage}
              />
                )
              })}
        </SimpleGrid>
      </Flex> 
    </>
  );
}


export const getServerSideProps: GetServerSideProps = async ({req, params})=>{
  const {slug} = params;

  const continents = await api.get(`continents/${slug}`);
  const citys = await api.get('citys');

  const continentCity = citys.data.filter(citys=> continents.data.id===citys.continent_id);

  return {
    props:{
      continents: continents.data,
      citys: continentCity,
    }
  }
}