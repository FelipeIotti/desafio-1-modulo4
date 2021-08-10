import { Flex, Heading, LinkOverlay} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import api from "../api/service";
import { ContainerInfo } from "../components/ContainerInfo";
import { HeaderLogo } from "../components/HeaderLogo";
import { TripStyles } from "../components/TripStyles";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
 import "swiper/swiper.min.css";
 import "swiper/components/pagination/pagination.min.css"
 import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper/core';
import { SwiperIten } from "../components/SwiperIten";

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

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
interface HomeProps {
  continents: ContinentProps[];
}

export default function Home({continents}:HomeProps) {
  
  return (
    <>
      <HeaderLogo/>
      <ContainerInfo/>
      <TripStyles/>
      <Flex justify="center" align="center" mt={['36px','80px']} mb={['24px','52px']} >
        <div style={{
          width: '90px',
          height: '0',
          border: '1px solid #47585B'
        }} ></div>
      </Flex>

      <Flex justify="center" align="center" direction="column" mb='56px' >
        <Heading 
          fontSize= {['20px','36px']}
          color="gray.600" 
          fontWeight={['500',"600"]}
        >
          Vamos nessa?
        </Heading>
        <Heading 
          fontSize= {['20px','36px']}
          color="gray.600" 
          fontWeight={['500',"600"]}
        >
          Então escolha seu continente
        </Heading>
      </Flex>
      <Flex mb='40px' h={["250px","450px"]} >
        <Swiper  
          spaceBetween={30}  
          centeredSlides={true} 
          autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
          }} 
          pagination={{
            clickable: true,  
          }} 
          navigation={true} 
          style={{width: '100%', maxWidth:'1240px',minHeight:'250px' , maxHeight:'450px'}}
        >
        {continents.map((continent) => {
          return(         
            <SwiperSlide key={continent.id} > 
              <LinkOverlay href={`/continent/${continent.id}`} >
                <SwiperIten
                  continent={continent.continent}
                  description={continent.description1}
                  image={continent.image1}
                />
              </LinkOverlay >
            </SwiperSlide>   
        )})}
        </Swiper>
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const {data} = await api.get('continents');

  return{ 
    props:{
      continents: data,
    },
    revalidate: 60*60*24
  }
}