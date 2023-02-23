import {React,useState,useEffect} from 'react'
import {Image,Center, Spacer,Container,Box,Text,Flex,HStack,VStack,UnorderedList,ListItem,
  Heading,Divider,Link,Grid,useDisclosure,Modal,ModalContent,ModalHeader,ModalOverlay,ModalCloseButton,
  ModalBody,ModalFooter,Button,
  VisuallyHidden} from "@chakra-ui/react"

import Footer from "./Footer"
import axios from "axios"

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


const Menu = () => {
const [buckets,setBuckets]=useState([])
const [sandwiches,setSandwiches]=useState([])
const [tenders,setTenders]=useState([])
const [friedChicken,setFriedChicken]=useState([])
const [pots,setPots]=useState([])
const [carte,setCarte]=useState([])
const [sides,setSides]=useState([]) 
const [sauces,setSauces]=useState([])
const [deserts,setDeserts]=useState([])
const [special,setSpecial]=useState([])
const [beverages,setBeverages]=useState([])

const fetchAndRenderData=()=>{
  axios.get(`https://dummu-api-datas.onrender.com/kfcItems`)
  .then((res)=>{console.log(res)
  // console.log("bucketsdata",res.data.buckets)
  setBuckets(res.data.buckets)
  setSandwiches(res.data.sandwiches)
  setTenders(res.data.tender)
  setFriedChicken(res.data.friedChicken)
  setPots(res.data.potPiesBowls)
  setCarte(res.data.aLaCarte)
  setSides(res.data.sides)
  setSauces(res.data.sauces)
  setDeserts(res.data.deserts)
  setBeverages(res.data.beverages)
  setSpecial(res.data.specialoffers)
  }).catch((error)=>console.log(error))

}
useEffect(() => {
  fetchAndRenderData()

}, [])

const sections =[
  {path:"/",title:"Buckets"},
  {path:"/",title:"Sandwiches"},
  {path:"/",title:"Tenders"},
  {path:"/",title:"Fried Chicken"},
  {path:"/",title:"Pot Pies & Bowls"},
  {path:"/",title:"A La Carte"},
  {path:"/",title:"Sides"},
  {path:"/",title:"Sauces"},
  {path:"/",title:"Desserts"},
  {path:"/",title:"Special Offers"},
  {path:"/",title:"Beverages"}
]


  return (
    <div style={{paddingTop:"15vh"}}>
        <Container maxW="1240px" display={"block"} > 
       <HStack>
      <VStack>
      <Box style={{position:"relative"}}  mb="10vh">
       <Flex 
          pos="sticky"
          left="20"
          h="100vh"
  
          w={"200px"}
          flexDirection="column"
          justifyContent="space-between"
          marginTop={"8vh"}>
           <Box>
         <Box mb={"2"}>  <Heading> FFF®  MENU</Heading></Box>
           <Divider mb={"6vh"}/>
          <Box lineHeight="2">
          <UnorderedList style={{listStyle:"none", fontSize:"20px"}} > 
            
            {
              sections.map(({path,title})=>(
                <ListItem _hover={{transform:"scale(1.04)",fontWeight:"450"}} key={path}><Link to={path}>{title}</Link></ListItem>
              ))
            }
            </UnorderedList>
          </Box>
           </Box>
          </Flex>
       </Box>
      </VStack>
          <Spacer/>
          <Flex   >
          <Container maxW={"900px"} 
          h="100vh" overflow={"scroll"} 
          scrollBehavior={"auto"} 
          css={{
            '&::-webkit-scrollbar':{
              display:"none"
            }
          }}
          mt="10vh"
          
          >
          <VStack>
              {/* ------------------------------------buckets-------------------------------------------- */}
           <Box  mt="16vh">
            <Heading mb="16vh">BUCKETS</Heading>
           <Grid templateColumns='repeat(3, 1fr)' gap={6}>
           {
              buckets.map((items,i)=>(
                
            <Box color={"gray"} mb="5" key={i+Math.random()} lineHeight="30px">
              <Image src={items.images} style={{width:"300px",height:"40vh",borderRadius:"5%"}} _hover={{transform:"scale(1.1)", transitionDelay: "300ms"}} mb="5"/>
              <Text>quantity : {items.title}</Text>
              <Text>price {items.price}</Text>
              <Flex> <Text style={{display:"flex"}}>Set location for pricing &nbsp;<Models/></Text></Flex>
            </Box>
              ))
            }
                </Grid>
           </Box>
  {/* ------------------------------------sandwiches-------------------------------------------- */}
  <Box  mt="16vh">
            <Heading mb="16vh" mt={"5vh"}>SANDWICHES</Heading>
           <Grid templateColumns='repeat(3, 1fr)' gap={6}>
           {
              sandwiches.map((items,i)=>(
                
            <Box color={"gray"} mb="5" key={i+Math.random()} lineHeight="30px">
              <Image src={items.images} style={{width:"300px",height:"40vh",borderRadius:"5%"}} _hover={{transform:"scale(1.1)", transitionDelay: "300ms"}} mb="5"/>
              <Text>quantity : {items.title}</Text>
              <Text>price {items.price}</Text>
              <Flex> <Text style={{display:"flex"}}>Set location for pricing &nbsp;<Models/></Text></Flex>
            </Box>
              ))
            }
                </Grid>
           </Box>
            {/* ------------------------------------tenders-------------------------------------------- */}
  <Box  mt="16vh">
            <Heading mb="16vh"  mt={"5vh"}>TENDERS</Heading>
           <Grid templateColumns='repeat(3, 1fr)' gap={6}>
           {
              tenders.map((items,i)=>(
                
            <Box color={"gray"} mb="5" key={i+Math.random()} lineHeight="30px">
              <Image src={items.images} style={{width:"300px",height:"40vh",borderRadius:"5%"}} _hover={{transform:"scale(1.1)", transitionDelay: "300ms"}} mb="5"/>
              <Text>quantity : {items.title}</Text>
              <Text>price {items.price}</Text>
              <Flex> <Text style={{display:"flex"}}>Set location for pricing &nbsp;<Models/></Text></Flex>
            </Box>
              ))
            }
                </Grid>
           </Box>
          {/* ------------------------------------friedchicken-------------------------------------------- */}
          <Box  mt="16vh">
            <Heading mb="16vh"  mt={"5vh"}>FRIED CHICKEN</Heading>
           <Grid templateColumns='repeat(3, 1fr)' gap={6}>
           {
              friedChicken.map((items,i)=>(
                
            <Box color={"gray"} mb="5" key={i+Math.random()} lineHeight="30px">
              <Image src={items.images} style={{width:"300px",height:"40vh",borderRadius:"5%"}} _hover={{transform:"scale(1.1)", transitionDelay: "300ms"}} mb="5"/>
              <Text>quantity : {items.title}</Text>
              <Text>price {items.price}</Text>
              <Flex> <Text style={{display:"flex"}}>Set location for pricing &nbsp;<Models/></Text></Flex>
            </Box>
              ))
            }
                </Grid>
           </Box>
              {/* ------------------------------------pots-------------------------------------------- */}
          <Box  mt="16vh">
            <Heading mb="16vh"  mt={"5vh"}>POT PIES & BOWLS</Heading>
           <Grid templateColumns='repeat(3, 1fr)' gap={6}>
           {
              pots.map((items,i)=>(
                
            <Box color={"gray"} mb="5" key={i+Math.random()} lineHeight="30px">
              <Image src={items.images} style={{width:"300px",height:"40vh",borderRadius:"5%"}} _hover={{transform:"scale(1.1)", transitionDelay: "300ms"}} mb="5"/>
              <Text>quantity : {items.title}</Text>
              <Text>price {items.price}</Text>
              <Flex> <Text style={{display:"flex"}}>Set location for pricing &nbsp;<Models/></Text></Flex>
            </Box>
              ))
            }
                </Grid>
           </Box>
             {/* ------------------------------------la-------------------------------------------- */}
          <Box  mt="16vh">
            <Heading mb="16vh"  mt={"5vh"}>A LA CARTE</Heading>
           <Grid templateColumns='repeat(3, 1fr)' gap={6}>
           {
              carte.map((items,i)=>(
                
            <Box color={"gray"} mb="5" key={i+Math.random()} lineHeight="30px">
              <Image src={items.images} style={{width:"300px",height:"40vh",borderRadius:"5%"}} _hover={{transform:"scale(1.1)", transitionDelay: "300ms"}} mb="5"/>
              <Text>quantity : {items.title}</Text>
              <Text>price {items.price}</Text>
              <Flex> <Text style={{display:"flex"}}>Set location for pricing &nbsp;<Models/></Text></Flex>
            </Box>
              ))
            }
                </Grid>
           </Box>
               {/* ------------------------------------sides-------------------------------------------- */}
          <Box  mt="16vh">
            <Heading mb="16vh"  mt={"5vh"}>SIDES</Heading>
           <Grid templateColumns='repeat(3, 1fr)' gap={6}>
           {
              sides.map((items,i)=>(
                
            <Box color={"gray"} mb="5" key={i+Math.random()} lineHeight="30px">
              <Image src={items.images} style={{width:"300px",height:"40vh",borderRadius:"5%"}} _hover={{transform:"scale(1.1)", transitionDelay: "300ms"}} mb="5"/>
              <Text>quantity : {items.title}</Text>
              <Text>price {items.price}</Text>
              <Flex> <Text style={{display:"flex"}}>Set location for pricing &nbsp;<Models/></Text></Flex>
            </Box>
              ))
            }
                </Grid>
           </Box>
                 {/* ------------------------------------SAUCES-------------------------------------------- */}
          <Box  mt="16vh">
            <Heading mb="16vh"  mt={"5vh"}>SAUCES</Heading>
           <Grid templateColumns='repeat(3, 1fr)' gap={6}>
           {
              sauces.map((items,i)=>(
                
            <Box color={"gray"} mb="5" key={i+Math.random()} lineHeight="30px">
              <Image src={items.images} style={{width:"300px",height:"40vh",borderRadius:"5%"}} _hover={{transform:"scale(1.1)", transitionDelay: "300ms"}} mb="5"/>
              <Text>quantity : {items.title}</Text>
              <Text>price {items.price}</Text>
              <Flex> <Text style={{display:"flex"}}>Set location for pricing &nbsp;<Models/></Text></Flex>
            </Box>
              ))
            }
                </Grid>
           </Box>
                  {/* ------------------------------------DESSERTS-------------------------------------------- */}
          <Box  mt="16vh">
            <Heading mb="16vh"  mt={"5vh"}>DESSERTS</Heading>
           <Grid templateColumns='repeat(3, 1fr)' gap={6}>
           {
              deserts.map((items,i)=>(
                
            <Box color={"gray"} mb="5" key={i+Math.random()} lineHeight="30px">
              <Image src={items.images} style={{width:"300px",height:"40vh",borderRadius:"5%"}} _hover={{transform:"scale(1.1)", transitionDelay: "300ms"}} mb="5"/>
              <Text>quantity : {items.title}</Text>
              <Text>price {items.price}</Text>
              <Flex> <Text style={{display:"flex"}}>Set location for pricing &nbsp;<Models/></Text></Flex>
            </Box>
              ))
            }
                </Grid>
           </Box>
                  {/* ------------------------------------SPECIAL OFFERS-------------------------------------------- */}
          <Box  mt="16vh">
            <Heading mb="16vh"  mt={"5vh"}>SPECIAL OFFERS</Heading>
           <Grid templateColumns='repeat(3, 1fr)' gap={6}>
           {
              special.map((items,i)=>(
                
            <Box color={"gray"} mb="5" key={i+Math.random()} lineHeight="30px">
              <Image src={items.images} style={{width:"300px",height:"40vh",borderRadius:"5%"}} _hover={{transform:"scale(1.1)", transitionDelay: "300ms"}} mb="5"/>
              <Text>quantity : {items.title}</Text>
              <Text>price {items.price}</Text>
              <Flex> <Text style={{display:"flex"}}>Set location for pricing &nbsp;<Models/></Text></Flex>
            </Box>
              ))
            }
                </Grid>
           </Box>
        {/* ------------------------------------BEVERAGES-------------------------------------------- */}
        <Box  mt="16vh">
            <Heading mb="16vh"  mt={"5vh"}>BEVERAGES</Heading>
           <Grid templateColumns='repeat(3, 1fr)' gap={6}>
           {
              beverages.map((items,i)=>(
                
            <Box color={"gray"} mb="5" key={i+Math.random()} lineHeight="30px">
              <Image src={items.images} style={{width:"300px",height:"40vh",borderRadius:"5%"}} _hover={{transform:"scale(1.1)", transitionDelay: "300ms"}} mb="5"/>
              <Text>quantity : {items.title}</Text>
              <Text>price {items.price}</Text>
              <Flex> <Text style={{display:"flex"}}>Set location for pricing &nbsp;<Models/></Text></Flex>
            </Box>
              ))
            }
                </Grid>
           </Box>




          </VStack>
           
         
          </Container>
          </Flex>
       </HStack>
        </Container>

<Footer/>

    </div>
  )
}

export default Menu