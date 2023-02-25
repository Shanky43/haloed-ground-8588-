  import { Container,Center,HStack,Box,useColorModeValue,Flex,Stack,VStack,
      Heading,Text,Button,Avatar,Image,Spacer, space,Checkbox    } from '@chakra-ui/react'
  import React, { useEffect, useState } from 'react'
  import offcard from "../images/applyoffers.png"
  import Footer from './Footer'
  import emptycart from "../images/emptycart.png"
  import {Link} from "react-router-dom"

  const CartPage = () => {
      const [count,setCount]=useState(0)
      const [total,setTotal]=useState(0)
      const [subCount,setSubCount] =useState(0)
    const [qnt,setQnt]=useState(1)

      const [cartItems,setCartItems]=useState(JSON.parse(localStorage.getItem("cart"))||[])
      const [showCart,setShowCart]=useState(false)
      const [call,setCall]=useState(false) 
          
      useEffect(() => {
        if (localStorage.getItem('cart') == null) {
          setShowCart(true);
        } else {
          let cartItems = JSON.parse(localStorage.getItem('cart'));
          setShowCart(!showCart);
          setCall(true);
          setCartItems(cartItems);
          setCount(cartItems.length);
      
          let amt = 0;
          cartItems.forEach((item) => {
            amt += Number(item.price);
          });
          setSubCount(Math.round(amt));
          setTotal(Math.round(amt + (amt * GST) / 100));
        }
      }, []);
      



  useEffect(()=>{
      if(localStorage.getItem("cart")!==null){
      let cartItems=JSON.parse(localStorage.getItem("cart"))
      setShowCart(!showCart)
      setCartItems(cartItems)
      setCount(cartItems.length)
    }
    },[call])
    
    useEffect(() => {
      let amt = 0;
      cartItems.forEach((item) => {
        amt += Number(item.price);
      });
      setSubCount(Math.round(amt));
      setTotal(Math.round(amt + (amt * GST) / 100));
    }, [cartItems]);

      var GST=19.90;

  console.log(cartItems.length)




  if(showCart==true){
    return(
  <div>
    <Container  mt={"30vh"} maxW="1300px">
      <Heading mb={"10"}>MY CART</Heading>
    <Center>
    <Box > <Flex justifyContent={"space-between"}>
        <VStack>
        <Heading fontSize={"7xl"}>YOUR CART IS EMPTY. <br /> LET'S START AN ORDER!</Heading>
      <HStack>
      <Button
              w={'base'}
              mt={8}
              bg={"#e4002b"}
              color={'white'}
              rounded={'full'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg', 
              }} >
          <Flex><Text><Link to="/menu">Start Order</Link></Text>&nbsp;&nbsp;&nbsp;</Flex>

            </Button>
      </HStack>
                  </VStack>

                  <Box><Image src={emptycart} /></Box>
      </Flex></Box>
    </Center>
    </Container>

  </div>
    )
  }else{
    return ( 

      <div>
  <Container mt={"20vh"} maxW="1300px">
  <Heading mb={"10"}>MY CART</Heading>  
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
                      cartItems.map(({images,title,price},index)=>(
                        <Box p="15px 30px 15px 30px"bg="#f8f7f5" m="5"  borderRadius={"10px"}  key ={Date.now()+Math.random()}>
            
              <Flex justifyContent={"space-between"}> 
                        <Box display={"flex"} justifyContent={"space-between"} >
                          <Image src={images} alt={title} w="20" h="20"/>
                          <Spacer />
                          
                          <VStack>
                          <Text ml="10" mb={"10"}>{title}</Text>
                          <Text pl="10" cursor={"pointer"}>Remove</Text>
                          </VStack>
                          </Box>
                          <Container>
              <Center pt={"6"} >
                <Flex alignContent={"center"} justifyContent="center" alignItems={"center"}>
                  <Button border={"1px solid black"} rounded="full" w="10" h="10" 
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg', 
                  }}
              disabled={qnt<=1}
                  bg="white" 
                  >
                    <Text alignItems={"center"} 
                    textAlign={"center"} 
                    justifyContent="center"
                    fontWeight={"bold"} 
                    fontSize={"20"}
                    onClick={() => {
                      setQnt(qnt - 1);
                      let amt = subCount - Number(cartItems[index].price);
                      setSubCount(Math.round(amt));
                      setTotal(Math.round(amt + (amt * GST) / 100));
                    }}
                    >-</Text></Button>


                  <Text ml={2} mr="2">{qnt}</Text>

                  <Button border={"1px solid black"}  
                  rounded="full" w="10" h="10"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg', 
                  }}  bg="white" >
                    <Text  alignItems={"center"}
                    textAlign={"center"}
                    justifyContent="center"
                    fontWeight={"bold"}
                    fontSize={"20"}
                  onClick={() => {
                      setQnt(qnt + 1);
                      let amt = subCount + Number(cartItems[index].price);
                      setSubCount(Math.round(amt));
                      setTotal(Math.round(amt + (amt * GST) / 100));
                    }
                  }
                    >+</Text></Button>
                </Flex>
              </Center>
            </Container>
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