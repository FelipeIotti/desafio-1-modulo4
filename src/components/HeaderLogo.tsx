import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Flex, Image, Link } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";

export function HeaderLogo() {
  const { asPath } = useRouter();

  return(
    <Flex 
      align='center'
      height={['50px',"100px" ]}
    > 
    {asPath!=='/' &&
      <Link href="/"  ml='6' position='absolute' >
        <ArrowLeftIcon color='black' />
      </Link>
    }
      <Flex 
        
        align="center"
        justify='center'
        margin='auto'
      > 
        <Image src="/Logo.svg" height={['20px','45px']} />
      </Flex>
    </Flex>
  );
}