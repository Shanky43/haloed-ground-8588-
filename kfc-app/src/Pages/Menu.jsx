import {React,useState,useEffect, useRef} from 'react'
import {Image,Center, Spacer,Container,Box,Text,Flex,HStack,VStack,UnorderedList,ListItem,
  Heading,Divider,Grid,Button,Alert,AlertIcon,AlertTitle,AlertDescription 
} from "@chakra-ui/react"
  import { HashLink as Link } from 'react-router-hash-link';
import cup from "../images/cup+.png"
import Footer from "./Footer"
import axios from "axios"
import Models from './Models';

const DisplayOnUI=({title,item,ref,id })=>{
const [status,setStatus]=useState(true)


const [cartItems,setCartItems]=useState(JSON.parse(localStorage.getItem("cart"))||[])
const handleCartItems=(newCartItems)=>{
  // console.log("cartitems", )
  // console.log(cartItems.id==newCartItems.id)
if(cartItems.id!==newCartItems.id){
  setStatus(false)
  setCartItems([...cartItems,newCartItems])
  localStorage.setItem("cart", JSON.stringify(cartItems))
}
  if(status==false){
    <Alert status='error' mt ="200px">
  <AlertIcon />
  <AlertTitle>Item is alreay in cart</AlertTitle>
  <AlertDescription></AlertDescription>
</Alert>
  }





}
console.log("line18",cartItems)
  return (
    <Box id={id} >
    <Heading mb="16vh" mt={"10vh"} ref={ref} >{title}</Heading>
   <Grid templateColumns='repeat(3, 1fr)' gap={6}>
   {
      item.map(({images,title,price,id},i)=>(
        
    <Box color={"gray"} mb="5" key={i+Math.random()} lineHeight="30px" p={"15px 15px 10px 15px"} 
    rounded="10"
    css={{
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
    }}
    >
      <Image src={images} style={{width:"300px",height:"40vh",borderRadius:"5%"}} _hover={{transform:"scale(1.1)", transitionDelay: "100ms"}} mb="5"/>
      <Text>quantity : {title}</Text>
      <Text>price {price}</Text>
      <Flex> <Text style={{display:"flex"}}>Set location for pricing &nbsp;<Models/></Text></Flex>
      <Button
            w={'full'}
            mt={8}
            bg={"#e4002b"}
            color={'white'}
            rounded={'full'}
            
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg', 
            }}  onClick={()=>handleCartItems({id,images,price,title})}>
         <Flex><Text>Add to Cart</Text>&nbsp;&nbsp;&nbsp;  <Box w="6" h="5"><Image src={cup} alt="addtocart"/></Box></Flex>

          </Button>
    </Box>
      ))
    }
        </Grid>
   </Box>
  )
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
  {path:`#Bucketss`,title:"Buckets"},
  {path:`#Sandwichess`,title:"Sandwiches"},
  {path:`#Tenderss`,title:"Tenders"},
  {path:`#FriedChickens`,title:"Fried Chicken"},
  {path:`#Potss`,title:"Pot Pies & Bowls"},
  {path:`#Cartes`,title:"A La Carte"},
  {path:`#Sidess`,title:"Sides"},
  {path:`#Saucess`,title:"Sauces"},
  {path:`#Desertss`,title:"Desserts"},
  {path:`#Specials`,title:"Special Offers"},
  {path:`#Beveragess`,title:"Beverages"}
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
         <Box mb={"2"} position={"relative"}>  <Heading pos={"-webkit-sticky"}>  FFF®  MENU</Heading></Box>
           <Divider mb={"6vh"}/>
          <Box lineHeight="2">
          <UnorderedList style={{listStyle:"none", fontSize:"20px"}} > 
            
            {
              sections.map(({path,title})=>(
                // console.log("line 134",path),
                <ListItem _hover={{transform:"scale(1.04)",fontWeight:"450",cursor:"pointer"}} key={path}>
                  <Link to={path}   scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>{title}</Link></ListItem>
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
        <DisplayOnUI title={"BUCKETS"} item={buckets}  id={"Bucketss"}/>
        <DisplayOnUI title={"SANDWICHES"} item={sandwiches}   id={"Sandwichess"}/>
        <DisplayOnUI title={"TENDERS"} item={tenders}  id={"Tenderss"}/>
        <DisplayOnUI title={"FRIED CHICKEN"} item={friedChicken}  id={"FriedChickens"}/>
        <DisplayOnUI title={"POT PIES & BOWLS"} item={pots}   id={"Potss"}/>
        <DisplayOnUI title={"A LA CARTE"} item={carte}   id={"Cartes"}/>
        <DisplayOnUI title={"SIDES"} item={sides} id={"Sidess"}/>
        <DisplayOnUI title={"SAUCES"} item={sauces}   id={"Sauces"}/>
        <DisplayOnUI title={"DESSERTS"} item={deserts}   id={"Dessertss"}/>
        <DisplayOnUI title={"SPECIAL OFFERS"} item={special}   id={"Specials"}/>
        <DisplayOnUI title={"BEVERAGES"} item={beverages}   id={"Beveragess"}/>

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