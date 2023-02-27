  import { Container,Center,HStack,Box,useColorModeValue,Flex,Stack,VStack,
      Heading,Text,Button,Avatar,Image,Spacer, space,Checkbox,Alert,
      AlertIcon,AlertTitle,AlertDescription   } from '@chakra-ui/react'
  import React, { useContext, useEffect, useState } from 'react'
  import offcard from "../images/applyoffers.png"
  import Footer from './Footer'
  import emptycart from "../images/emptycart.png"
  import {Link} from "react-router-dom"
import {Authenticator} from "../context/Authentication"
  const CartPage = () => {
      const [count,setCount]=useState(0)
      const [total,setTotal]=useState(0)
      const [subCount,setSubCount] =useState(0)
    const [qnt,setQnt]=useState(1)
    let getAddress=JSON.parse(localStorage.getItem("userAddress"))
const {isAuth}= useContext(Authenticator)
      const [cartItems,setCartItems]=useState(JSON.parse(localStorage.getItem("cart"))||[])
      const [showCart,setShowCart]=useState(false)
      const [call,setCall]=useState(false) 
      const [sucessfull,setSucessfull]=useState(false)
      // const [checkInd,setCheckInd]=useState([])
          
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
console.log("line61",cartItems)
      const handleDelete=(id)=>{
        console.log(id)
        deleteFunctionality(id)
      }


var deleteFunctionality=(id)=>{
        var newData=cartItems.filter((item) => item.id !== id);
        console.log(cartItems.id)
 setCartItems(newData)



      }

useEffect(()=>{
  let newCount= localStorage.setItem('cart', JSON.stringify(cartItems));
  if(newCount==undefined||newCount==null||newCount.length==0){
    setCount(0)
    localStorage.removeItem("cart")
    setShowCart(true)
      }else{
    setCount(newCount.length)
     }

},[cartItems])


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
  <Center>   {
      sucessfull && (
        <Alert
        status='success'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
        borderRadius="10px"
      >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
          Order place sucessfull!
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
    <Text fontWeight={"500"} fontSize="20px" >    Total Order : {total}</Text>
    <Text>Delivery Address : {getAddress}</Text>
        </AlertDescription>
      </Alert>
      )
     }</Center>
  <Heading mb={"10"}>MY CART</Heading>  
      <Center>
         <Box style={{display:"flex"}}>
              <Container>
                  <Box  w="850px" h={"500px"} overflow="scroll"
                  css={{
                    '&::-webkit-scrollbar':{
                      display:"none"
                    }
                  }}>
                    {
                      cartItems.map(({images,title,price,id},index)=>(
                        <Box p="15px 30px 15px 30px"bg="#f8f7f5" m="5"  borderRadius={"10px"}  key ={Date.now()+Math.random()}>
            
              <Flex justifyContent={"space-between"}> 
                        <Box display={"flex"} justifyContent={"space-between"} >
                          <Image src={images} alt={title} w="20" h="20"/>
                          <Spacer />
                          
                          <VStack>
                          <Text ml="10" mb={"10"}>{title}</Text>
                          <Text pl="10" cursor={"pointer"}
                          onClick={()=>handleDelete(id)}
                          >Remove</Text>
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
                    // data-id={index}
                    onClick={() => {
                      // console.log(e.target.dataset.id)
                      // let ind=e.target.dataset.id
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
                    {/* {setQnt([...qnt,1])} */}
                    <Text  alignItems={"center"}
                    textAlign={"center"}
                    justifyContent="center"
                    fontWeight={"bold"}
                    data-id={index}
                    fontSize={"20"}
                    className="inc"
                  onClick={()=>{
                    // cartItems.forEach((ele,i)=>{
                    //   if(e.target.dataset.id==i){
                    //     // let ind=e.target.dataset.id
                    //     setQnt({...qnt,[`qnt ${i}`]:qnt+1} );
                    //     let amt = subCount + Number(cartItems[i].price);
                    //     setSubCount(Math.round(amt));
                    //     setTotal(Math.round(amt + (amt * GST) / 100));
                    //   }
                    //     })   

                    // setQnt(qnt + 1);
                    // let amt = subCount - Number(cartItems[index].price);
                    // setSubCount(Math.round(amt));
                    // setTotal(Math.round(amt + (amt * GST) / 100));
                    setQnt(qnt + 1);
                    let amt = subCount + Number(cartItems[index].price);
                    setSubCount(Math.round(amt));
                    setTotal(Math.round(amt + (amt * GST) / 100));
                  }}
                    >+</Text></Button>
                </Flex>
              </Center>
            </Container>
                          <Center><Text> ₹ {price}</Text></Center>
        </Flex>
</Box>
                      //  <productItems {...ele} />
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
            <HStack alignItems={"center"} alignContent="center" justifyContent={"center"}><Checkbox ></Checkbox>
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
              }}

              onClick={()=>{
                if(isAuth==true){
                  setSucessfull(!sucessfull)
                }else{
                  toast({
                    title: 'Login required.',
                    description: "Please login before checkout",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                  })
                }
                
                }}
              >
            <HStack justifyContent={"space-between"}><Text>Checkout </Text><Spacer />  <Text> ₹ {total}</Text> </HStack>
            </Button>
          </Box>
        </Box>
      </Center>

                </Container>
              </Box>
             
      </Center>
      <Text cursor={"pointer"} fontWeight={"bold"} onClick={()=>{localStorage.removeItem('cart')
       window.location.reload();
    }}>Remove All</Text>
    <Center>  
  
     
     </Center>
  </Container>
  <Footer/>
      </div>
    )
  }
  }

  export default CartPage