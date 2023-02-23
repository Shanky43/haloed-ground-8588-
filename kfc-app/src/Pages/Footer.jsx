import React from 'react'
import fff1 from "../images/fff1.png";


import {Image,Center, Spacer,Container,Box,Text,HStack,VStack,UnorderedList,ListItem
  
  } from "@chakra-ui/react"
  

const Footer = () => {
  return (
    <footer style={{backgroundColor:"black", color:"white"}} >
        <Container  maxW="1340px" pb={"50"}  as="footer" w="100%" mt={"10vh"}>
            <Center pt={"20"} display="block">
                <VStack>
                   <Box >
                   <Text w={"1100px"} textAlign="left" fontSize={"12"} mb="50">
                    Calorie Statement <br />
                    2,000 calories a day is used for general nutrition advice, but calorie needs vary. Additional nutrition information available upon request in-store and on FFF.com. Prices, <br /> participation, and product availability 
                    may vary.
                  </Text>
                  <Text  w={"800px"} textAlign="left" fontSize={"12"}>
                    Pepsi, Pepsi Globe, Mtn Dew, Mtn Dew Sweet Lightning, Sierra Mist are registered trademarks of PepsiCo, Inc.
                    Dr Pepper is a registered trademark of Dr Pepper/Seven Up, Inc.
                    </Text>
                   </Box>

                   <Box style={{display:"flex"}} pt="20" lineHeight={"2"} 
                   textAlign="left" 
                   pb="20"
                   >
                    <Image src={fff1} w="300px" h={"200px"} />
                      
                       <UnorderedList style={{listStyle:"none"}} cursor={"pointer"}>
                        <Text>FFF Food</Text>
                        <ListItem> Menu</ListItem>
                        <ListItem> Full Nutrition Guide</ListItem>
                        <ListItem>Nutrition Calculator</ListItem>
                        <ListItem> Food Allergies & Sensitivities</ListItem>
                        </UnorderedList>
                        <Spacer/>

                        <UnorderedList style={{listStyle:"none"}} cursor={"pointer"}>
                        <Text>Company</Text>
                        <ListItem> About FFF</ListItem>
                        <ListItem>  How We Make Chicken</ListItem>
                        <ListItem>Nutrition Calculator</ListItem>
                        <ListItem>   Company Responsibility</ListItem>
                        <ListItem>  Franchise a FFF</ListItem>
                        <ListItem>  Responsible Disclosure</ListItem>
                        <ListItem>  FFF Newsroom</ListItem>
                        </UnorderedList>

                        <Spacer/>
                        <UnorderedList style={{listStyle:"none"}} cursor={"pointer"}>
                        <Text>Careers</Text>
                        <ListItem> Corporate Careers</ListItem>
                        <ListItem>  Restaurant Careers</ListItem>
                        <ListItem> Culture</ListItem>
                        <ListItem> Growth</ListItem>
                        </UnorderedList>
                        <Spacer/>

                        <UnorderedList style={{listStyle:"none"}} cursor={"pointer"}>
                        <Text>Resources</Text>
                        <ListItem> FAQs</ListItem>
                        <ListItem> Contact Us</ListItem>
                        <ListItem> FFF App</ListItem>
                        </UnorderedList>
                        <Spacer/>

                        <UnorderedList style={{listStyle:"none"}} cursor={"pointer"}>
                        <Text> Find a FFF</Text>
                        <ListItem> Find A FFF</ListItem>
                        </UnorderedList>             
                </Box>     
                       </VStack>
       
          <Container maxW="1100px" >
          <Box display={"flex"} fontWeight="300" fontSize={"11"} justifyContent="space-between">
                <Box>
                    <Text lineHeight={2}>Privacy Policy <strong>|</strong>  Updated 02/2023 <strong>|</strong>  Terms of Use Our Cookies and Ads <strong>|</strong>  Do Not Sell or Share My Personal Information <br /> <strong>|</strong>    Accessibility Statement
                    <br /> Build: FFF02162023:fd70cf49 <br /> Order Flow Version: V1
                    </Text>
                   
                </Box>
                <Spacer/>
                <Box>
                   <HStack cursor={"pointer"}> <Text>Copyright © FFF Corporation 2022 All Rights Reserved</Text> <Spacer />
                    <Text><i className="fa-brands fa-square-instagram"></i></Text><Spacer />
                    <Text> <i className="fa-brands fa-facebook"></i></Text><Spacer />
                    <Text><i className="fa-brands fa-twitter"></i></Text></HStack><Spacer />
                </Box>
            </Box>
          </Container>
           </Center>
        </Container>


    </footer>
  )
}

export default Footer