import { Container,Center,HStack,Box,useColorModeValue,Flex,Stack,
    Heading,Text,Button,Avatar,Image,Spacer, space,Checkbox    } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import offcard from "../images/applyoffers.png"
import Footer from './Footer'


const CartPage = () => {
    const [count,setCount]=useState(0)
    const [total,setTotal]=useState(245)
    const [subCount,setSubCount] =useState(400)
    const [cartItems,setCartItems]=useState([])
    const [showCart,setShowCart]=useState(true)

    

useEffect(()=>{
  console.log(localStorage.getItem("cart","line4544"))
  if(localStorage.getItem("cart")==null||count===0){
    console.log(localStorage.getItem("cart","Asffdddddddd"))
  setShowCart(!showCart)
  }else{
    let cartItems=JSON.parse(localStorage.getItem("cart"))
    // console.log("inside cart",cartItems)
    setShowCart(!showCart)
    setCartItems(cartItems)
    setCount(cartItems.length)
  }
  },[])
  
// console.log("line2222",cartItems, typeof cartItems)


    var GST=19.90;


if(!showCart){
  return(
<div>
  <Container  mt={"30vh"} maxW="1300px">
    <Flex>
      <Heading>YOUR CART IS EMPTY. LET'S START AN ORDER!</Heading>
    </Flex>
  </Container>

</div>
  )
}else{
  return ( 

    <div>
<Container mt={"20vh"} maxW="1300px">
    <Center>
        
           <Box style={{display:"flex"}}>
            <Container>
                <Box  w="800px" h={"500px"} overflow="scroll"
                css={{
                  '&::-webkit-scrollbar':{
                    display:"none"
                  }
                }}>

                  {
                    cartItems.map(({images,title,price})=>(
                      <Box p="15px 50px 15px 30px"bg="#f8f7f5" m="5"  borderRadius={"10px"} >
          
             <Flex justifyContent={"space-between"}> 
                       <Box display={"flex"} justifyContent={"space-between"} >
                         <Image src={images} alt={title} w="20" h="20"/>
                         <Spacer />
                        <Text ml="10">{title}</Text>
                        </Box>
                        <Center><Text> ₹ {price}</Text></Center>
                        
                        </Flex>
          
                      </Box>
                    ))
                  }
                </Box>
            </Container>
           </Box>
           <Spacer/>
            <Box>
                <Container maxW={"1000px"}>
                <Center py={6}>
      <Box
        maxW={'800px'}
      p="8"
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Box >
               <Heading> {count} {count==1?"ITEM":"ITEMS"}</Heading>
        </Box>
        <Flex justify={'center'} mt={9}>
         <Image src={offcard} alt="apply offers" cursor={"pointer"}/>
        
        </Flex>

        <Box p={6}  maxW={'500px'}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Text fontSize={'md'} fontWeight={400} fontFamily={'body'}>
            
          <Flex justifyContent={"space-between"}>
            <Box><Text>Subtotal</Text><Text>GST</Text><Text>Restaurant Handling (Incl. taxes) &nbsp;</Text></Box>   
            <Spacer />    
            <Box><Text> : ₹ {subCount}</Text><Text>:  &nbsp;{GST} </Text><Text>: ₹{total} </Text></Box>
          </Flex>
           
            </Text>
       
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
         
           
           <Box  border={"1px solid #EEEDED"} w="270px" h="110px">
          <HStack alignItems={"center"} alignContent="center" justifyContent={"center"}>   <Checkbox ></Checkbox>
          <Text p="2">
                Donate ₹5.00 Tick to Add <br /> Hope. <br />
                Our goal is to feed 20 million <br /> people by 2023.</Text>
                </HStack>
           </Box>
            
          </Stack>

          <Button
            w={'full'}
            mt={8}
            bg={"#e4002b" }
            color={'white'}
            rounded={'full'}
            
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
           <HStack justifyContent={"space-between"}><Text>Checkout </Text><Spacer />  <Text> ₹ {total}</Text> </HStack>
          </Button>
        </Box>
      </Box>
    </Center>
                </Container>
            </Box>
     
    </Center>
</Container>
<Footer/>
    </div>
  )
}
}

export default CartPage