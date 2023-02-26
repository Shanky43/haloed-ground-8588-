import React, { useEffect, useState } from 'react'
import {Image,Center, Spacer,Container,Box,Text,Flex,HStack,VStack,UnorderedList,ListItem,
  Heading,Divider,Grid,Button,Alert,AlertIcon,AlertTitle,AlertDescription ,Avatar,
  Stack,
} from "@chakra-ui/react"
import {Link, useNavigate  } from "react-router-dom"
import Footer from './Footer'
import axios from 'axios'


const AccountPage = () => {
const [fetchedData,setFetchedData]= useState([])
const CartDetails=JSON.parse(localStorage.getItem("cart"));
console.log(CartDetails,"CartDetails")
const UserDetails=JSON.parse(localStorage.getItem("userSignUpDetails"))
var name=UserDetails[0].firstname
const [pass,setPass]=useState(false)

// console.log(UserDetails)
var existingToken=UserDetails[0].token

// console.log(existingToken)
// console.log(name.toUpperCase())

const navigate = useNavigate ()

const fetchData=()=>{
  axios.get("https://63fb3a3c2027a45d8d628234.mockapi.io/UserSCredentials")
  .then((res)=> {
    // console.log(res.data,"from server")
    let Datas=res.data
   for(let i=0;i<Datas.length;i++){
    if(existingToken==Datas[i].token){
// console.log("line28", Datas[i].token)
      setFetchedData(Datas[i])
    
    }
   }


  }).catch((error)=>console.log(error))
}

console.log("line40", fetchedData.cartItems)

useEffect(()=>{
  fetchData()
},[])
const handleSignOut=(e)=>{
  e.preventDefault()

 console.log(fetchedData,"line56")

 setPass(true)
 axios.post('https://63fb3a3c2027a45d8d628234.mockapi.io/UserSCredentials', fetchedData, { headers: { 'Content-Type': 'application/json' } })
 .then(response => {
   console.log(response.data);
 })
 .catch(error => {
   console.log(error);
 });
  
   localStorage.removeItem('cart')
   localStorage.removeItem('userSignUpDetails')
   navigate("/")
}
function pushData(){
  setFetchedData(prevState => ({
    ...prevState,
    cartItems: [...prevState.cartItems,CartDetails ]
  }))
}
  useEffect(()=>{
    if(pass){
      pushData()
    }

  },[pass])

// console.log("Line76", fetchedData)


  return (
    <div>
      <Container mt={"20vh"} maxW="1240px">
        <Center>
<Flex>
  <HStack justifyContent={"space-between"}>
  <Box>
  <Center py={6} >

      <Box
        maxW={'330px'}
        h="450px"
        w="500px" 
        bg={'black'}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        mr="20"
        >
     <HStack >
          <hr style={{width:"2%",borderWidth:"0px", height:"6vh" , background:"red", marginRight:"1%",marginLeft:"5%"}}/>
          
          <hr style={{width:"2%",borderWidth:"0px", height:"6vh" , background:"red",marginRight:"1%"}}/>
          <hr style={{width:"2%",borderWidth:"0px", height:"6vh" , background:"red"}}/>
</HStack>
        <Flex justify={'center'} mt={12}>
     
        <Text color={"white"} fontSize="25px" fontWeight={"bold"} textAlign="center">GOOD MORNING <br />{name.toUpperCase()+" "+ "!"}</Text>
        </Flex>

        <Box p={6} >
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              John Doe
            </Heading>
            <Text color={'gray.500'}>

            <UnorderedList style={{listStyle:"none", color:"#8b8c8d"}}>
              <ListItem>Order History</ListItem>
              <ListItem>My Favorite Menu</ListItem>
              <ListItem>Addresses</ListItem>
              <ListItem>Account Settings</ListItem>
            </UnorderedList>
            </Text>
          </Stack>

      <Center> <Button
         w="150px"
         mt={8}
         bg={'#151f21'}
         color={'white'}
         rounded={'full'}
         border="1px solid white"
         _hover={{
           transform: 'translateY(-2px)',
           boxShadow: 'lg',
           bg:"gray"
         }}
         onClick={handleSignOut}
         >
         Sign Out
       </Button></Center>
 </Box>
      </Box>
    </Center>
  </Box>
  <Spacer />
  <Box  w="800px" h={"450"} >
      <Box m={"10"}>
      <HStack>
      <Box><Text fontSize={"2xl"} fontWeight="bold">ORDER HISTORY</Text></Box>
      <Spacer/>
      <Box><Text>Looking for a specific order? <Button  ml="12" bg="white" border={"1px solid black"}rounded={"full"}>Order Lookup</Button></Text></Box>
      </HStack >
      <Box  textAlign="left">
            <Text color={"gray"}>No orders have been placed in the past 12 months.</Text>
          </Box>
         <Box mt={"100px"} mb="5" textAlign="left" alignItems={"left"}>
         <Button rounded={"full"} bg="black" color={"white"}><Link to="/menu">View menu</Link></Button> </Box>
         <Box color={"red"}><Divider borderColor="gray" borderWidth="1px"/></Box>
        <Box><Text fontSize={"2xl"} fontWeight="bold">HAVE A QUESTION?</Text> 
        <HStack> <Box>
<Text>Connect with a specialist for answers.</Text>
         </Box>
         <Spacer />
        <Box>
        <Button bg={"white"} border="1px solid black" rounded={"full"}>
          Get Help
        </Button>
        </Box></HStack>
        </Box>
      </Box>

  </Box>
  </HStack>
</Flex>
        </Center>
      </Container>
      <Footer/>
    </div>
  )
}

export default AccountPage