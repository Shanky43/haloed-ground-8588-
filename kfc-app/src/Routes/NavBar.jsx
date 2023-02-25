import React, { useState,useEffect, useContext } from 'react'
import { Link,  NavLink , useNavigate} from 'react-router-dom'
import logo from "../images/logo1.png"
import cart from "../images/fffcartbag1.png"
import "@fontsource/questrial"
import Location from '../Pages/Location'




import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Container,
  Flex,Button,Box,Spacer,Image,Center,Avatar,Wrap,WrapItem,Text, position, Modal


} from '@chakra-ui/react'
import { Authenticator } from '../context/Authentication'


const links =[
    {path:"/",title:""},
    {path:"/menu",title:"Menu"},
    {path:"/career",title:"Career"},
    {path:"/about",title:"About"},
    {path:"/findAFFF",title:`Find A FFF`},
 ]



const NavBar = () => {
  const {isAuth} = useContext(Authenticator)
  const navigate =useNavigate()
  const IsAuthCheck=()=>{
    // console.log("login")
        (isAuth? navigate("/sigininpage"):navigate("/accountpage"))
        
  }


  return (
<div  style={{position:"relative", zIndex:"2"}} >
  
<Container  maxW='1400px' p="30px 30px 0px 30px" as="header" top={"0px"} position="fixed" w="100%" bg={"white" }> 

<Flex  
// h="80px"  

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
    <Button rounded={"full"} bg="#e4002b" color="white"><Link to ="/menu" 
    scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
    >Start Order</Link></Button>
  </Box>
  <Wrap pl="5%" alignItems={"center"} alignContent="center" textAlign="center">
<WrapItem >
<Box cursor={"pointer"}> <i className="fa-solid fa-2x fa-user-tie" onClick={()=>IsAuthCheck()}></i></Box>
<Box ml="50px" > <Link to= "/cart"> <Image src={cart} alt="cartImage" w="10" h="10"/> </Link></Box>
</WrapItem>
</Wrap>
</Flex>
<Box mt={"1%"} > <Text  bg="black" color="white" size="sm" p="2" m="0% -3% 0px -3%" textAlign={"center"} cursor="pointer"> 
<Box display={"flex"} alignItems="center" justifyContent={"center"}> <Center><Location /> &nbsp;Start an Order for Pickup or Delivery</Center> </Box>
</Text> </Box>
</Container>


</div>

  )
}

export default NavBar