import React, { useState,useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../images/logo1.png"
import cart from "../images/fffcartbag1.png"
import "@fontsource/questrial"



import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Container,
  Flex,Button,Box,Spacer,Image,Center,Avatar,Wrap,WrapItem,Text


} from '@chakra-ui/react'


const links =[
    {path:"/",title:""},
    {path:"/menu",title:"Menu"},
    {path:"/career",title:"Career"},
    {path:"/about",title:"About"},
    {path:"/findAFFF",title:`Find A FFF`},
 ]

const NavBar = () => {
 

  return (
<div>
<Container  maxW='1240px' p="30px"> 

<Flex 
pos="sticky"
h="50px"  

>
    <Box> 
      <Link to="/">
      <Image 
      src={logo}
      w="200px" 
      h="50px"  
 />
      </Link>
    </Box>
<Box pl="05%" pr="10px" textAlign="center" pt="1%">
{links.map(({path,title})=>(
   <NavLink key={path}
  to={path} 
   style={{ 
       paddingRight:"10px",
  textAlign:"center",
  alignContent:"center",
  alignItems:"center",
  fontWeight:"600"
  
}}
   >
  {title}
  </NavLink>   
  ))}
  </Box>
  <Spacer />
  <Box>
    <Button rounded={"full"} bg="#e4002b" color="white">Start Order</Button>
  </Box>
  <Wrap pl="5%" alignItems={"center"} alignContent="center" textAlign="center">
<WrapItem >
<Box><i className="fa-solid fa-2x fa-user-tie"></i></Box>
<Box ml="50px"><Image src={cart} alt="cartImage" w="10" h="10"/></Box>
</WrapItem>
</Wrap>
</Flex>
</Container>
<Center bg="black" color="white" p="2"><Text size="sm"> <i className ="fa-solid fa-location-dot" style={{color:"red"}}> </i>  &nbsp;Start an Order for Pickup or Delivery</Text></Center>

</div>

  )
}

export default NavBar