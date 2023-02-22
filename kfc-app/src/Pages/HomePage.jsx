import {React, useSta,useState,ReactPlayer} from 'react'
import add from "../images/ad.png"
import { Swiper, SwiperSlide } from "swiper/react";
import add1 from "../images/6.png"
import oldman from "../images/oldman.png"
import chickenImage from "../images/fff.png"
import Footer from './Footer';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/NavBar.module.css"
import { Autoplay, Pagination, Navigation } from "swiper";
import {Image,Center, Spacer,Container,Box,Text,Heading,Flex,Divider,
  useDisclosure,Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,
  ModalBody,ModalFooter,HStack

} from "@chakra-ui/react"


function Models() {
  const { isOpen, onOpen, onClose } = useDisclosure()
 return ( <Box>
<Text onClick={onOpen}><i className="fa-solid fa-circle-info"></i></Text>

<Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Modal Title</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <Text fontWeight='bold' mb='1rem'>
        You can scroll the content behind the modal
      </Text>
      {/* <Lorem count={2} /> */}
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
      <Button variant='ghost'>Secondary Action</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
</Box>)
}


const speacialOffers=[
  {
    image:`https://digitaleat.kfc.com/menus/image/bare/kfc-Wraps2for5?q=75`,
    quantity:"2 FFF Wraps",
    calories:"calories: 800-900",
    setloc:"Set location for pricing."
  },
  {
    image:`https://digitaleat.kfc.com/menus/image/bare/kfc-2WrapCombo?q=75`,
    quantity:"FFF Wraps Combo",
    calories:"calories: 870-1510",
    setloc:"Set location for pricing."
  },
  {
    image:`https://digitaleat.kfc.com/menus/image/bare/kfc-sandwichandsidesmeal?q=75`,
    quantity:"Sandwich Tailgate Bundle",
    calories:"calories: 3040-4280",
    setloc:"Set location for pricing."
  }
]


const HomePage = () => {

  return (
    <div>
      <Center>
       <Swiper
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide w="1240px" style={{cursor:"pointer"}}>
       <Center>
       <Image src={add1} alt="add1"/>
       </Center>

        </SwiperSlide>
        <SwiperSlide>
          <Image src={add} />
        </SwiperSlide>
      </Swiper>
      </Center>
<Spacer />
{/* ----------------------------------Special offers------------------------------------------- */}
<div><p style={{backgroundColor:"black",padding:"20px", width:"100%"}}></p>
  <p style={{padding:"20px", width:"100%"}}></p>
  </div>
  <Box>
  <Spacer />
  <Spacer />
  </Box>
  <div>

    <Container  maxW='6xl' pt="30px"  >
    <Spacer />
    <Heading>SPECIAL OFFERS</Heading>
    <Spacer />
    <Spacer />
    <Flex>
    
      {
        speacialOffers.map((items)=>(
          <Box color="gray.600" pr="10" lineHeight="2" mb="50" >
            <Image src={items.image} alt={items.quantity} w="250px"  _hover={{transform:"scale(1.1)"}}/>
            <Text >{items.quantity}</Text>
            <Text>{items.calories}</Text>
           <Flex> <Text style={{display:"flex"}}>{items.setloc} <Models/></Text></Flex>
          </Box>
        ))
      }

    </Flex>
    <Spacer />
    <Spacer />
   <Box><Divider orientation='horizontal' h="5" borderWidth="10"/></Box>
   <hr style={{color:"black",  borderColor:"black" , borderWidth:"2px", borderRadius:"15%"}}/>
        </Container>
     </div>
     <Box bg="#e4002b">

<Container  maxW="1100px" mt="10" p="5" color="white" letterSpacing={"1"}>
<HStack mb="10">
<Text fontSize="lg" fontWeight="bold">Finger Lickin' Good® is Now Just a Few Clicks Away</Text>
<Spacer/>
  <Button color="black" fontWeight="500" fontSize={"sm"} borderRadius="20">Start Order</Button>
</HStack>
<Center >
          <hr style={{width:"2%",borderWidth:"0px", height:"10vh" , background:"white", marginRight:"1%"}}/>
          
          <hr style={{width:"2%",borderWidth:"0px", height:"10vh" , background:"white",marginRight:"1%"}}/>
          <hr style={{width:"2%",borderWidth:"0px", height:"10vh" , background:"white"}}/>
</Center>

        <Center mt="50">
          <Text fontSize="lg" fontWeight="bold">OUR FOOD</Text>
        </Center>
        <Center><Text fontSize="9xl" fontWeight="bold" textAlign={"center"}>WE MAKE IT THE HARD WAY</Text></Center>
        <Center mb="5"> <Text>See what goes into making our world famous fried chicken.</Text> </Center>
        <Center><Button color={"white"} bg="black" rounded={"20"} >Learn More</Button></Center>
        <Center style={{display:"block"}}> 
         <Image src={chickenImage} />  
               </Center>
</Container>
</Box>
<Box bg="white" >
<Container bg="white" maxW="1240px" >
<Flex bg="white"  >   
         
         <Box w={"500"} lineHeight="10">
         <Heading fontSize={"6xl"}pt={"100"}><Text>UNLOCK MORE FINGER LICKIN'GOOD <br/> BENEFITS</Text></Heading>
         <Text >Create an account to get access to exclusive deals and faster checkout.</Text>
         <Button color={"white"} bg="black" rounded={"20"} mb="20">Sign me up!</Button>
         </Box>
         {/* <Spacer /> */}
        <Box> <Image src={oldman} h="75vh" />  </Box>
  </Flex>
        
</Container>
</Box>
<Footer/>
 
    </div>
  )
}

export default HomePage






