import React from 'react'
import { Container,Center,Heading,HStack,Box,Text,Button,Spacer,VStack} from '@chakra-ui/react'


const CheckOutPage = () => {
  return (
    <div >
<Container maxW={"1000px"} mt="25vh">
    <HStack>
    <Box >
    <HStack display={"flex"} justifyContent="space-between">
       <Box> <Heading>CHECKOUT</Heading></Box>
       <Spacer />
       <Box> <Text ml="250px" fontWeight={"bold"} fontSize="20"><i class="fa-solid fa-lock"></i> &nbsp; Secure Checkout</Text></Box>
       </HStack>
        </Box>
    </HStack>
<VStack>

</VStack>

</Container>


    </div>
  )
}

export default CheckOutPage