import React from 'react'
import pagenotfound from "../images/404_error.png"
import { Container,Center,Image,HStack,Box,Text,Button

} from '@chakra-ui/react'
import {useNavigate} from "react-router-dom"
const PageNotFound = () => {
  const navigate=useNavigate()
  return (
    <div>
      <Container mt={"15vh"} maxW="1240px">
       <HStack>
       <Box >
          <Image  src={pagenotfound} alt="page not found"     boxSize='600px'/>
        </Box>
        <Box>
          <Text fontSize="65px"  fontWeight={"bolder"}>
        <Text color={"red"}>  404</Text> THERE'S NO FRIED <br /> CHICKEN ON THIS PAGE.....
          </Text>
          <Button 
            mt={8}
            bg={"black"}
            color={'white'}
            rounded={'full'}
            
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg', 
            }} 
            onClick={()=> navigate("/")}
            >Take me Home</Button>
        </Box>

       </HStack>
      </Container>
    </div>
  )
}

export default PageNotFound