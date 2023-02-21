import React, { useState,useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../images/logo.png"
import cart from "../images/fffcartbag.png"
import "@fontsource/questrial"
import imageSlide from '../Pages/imageSlide'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import frontimage from "../images/KFC_Wraps_Desktop_Home_Hero_1440x640_2x.jpg"


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
 const slide=["https://images.ctfassets.net/9tka4b3550oc/4b4WODMN6XFbYfJIrGAshV/31c9945ad060885b519fa1781fde21cf/KFC_Wraps_Desktop_Home_Hero_1440x640_2x.jpg?q=75&w=1680",
"https://videos.ctfassets.net/9tka4b3550oc/3eVt04hBZVfN6MVMzEv4Rt/26a3f084c23ab3484870f7d544550853/1920x1080_KFC_App-Hero-Asset_05.mp4?q=75&w=1680"]


const NavBar = () => {
 

  return (
<div>
<Container  maxW='1240px' p="30px"> 

<Flex>
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
  fontWeight:"500"
  
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
<Center bg="black" color="white" p="2"><Text size="sm">Start an Order for Pickup or Delivery</Text></Center>

<Center> 
<imageSlide />

</Center>

</div>

  )
}

export default NavBar