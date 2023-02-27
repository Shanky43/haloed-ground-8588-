import {React,useState} from 'react'
import {Image,Center, Spacer,Container,Box,Text,Heading,Flex,Divider,
    useDisclosure,Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,
    ModalBody,ModalFooter,HStack,VStack} from "@chakra-ui/react"

import pickup from "../images/pickup.png"
import car from "../images/car.png"

import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import Addresspage from './Addresspage';

const Location = () => {
  const [showModal,setShowModel]=useState(true)
  const navigate=useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    console.log(onOpen)
    // const button = screen.getByText('sdsfsd');
    // fireEvent.click(button);

  //  test('clicking the button calls the onClick function', () => {
  //     // const onClick = jest.fn();
  //     // render(<MyComponent onClick={onClick} />);
   
  //     // expect(onClick).toHaveBeenCalled();
  //   });

        return (
          <div id='location'>
      <>
      {/* {fireEvent.click(onOpen)} */}
     {/* { onOpen} */}
      <Text onClick={onOpen} > <Text onClick={onOpen} >
        <i className ="fa-solid fa-location-dot" style={{color:"red", alignItems:"center", justifyContent:"center"} } ></i>
        </Text></Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="70%" h="80vh" overflow={"scroll"}
        css={{
          '&::-webkit-scrollbar':{
            display:"none"
          }
        }}
        >
          <ModalHeader><Center>START YOUR ORDER</Center></ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody bg={"#f8f7f5"}>
        <Container textAlign={"center"} mt="10" maxW="70%" >
        <Center>
          <Heading mb={"10"}>LET'S GET STARTED. WOULD < br/>
           YOU LIKE PICKUP < br/>
           OR DELIVERY?</Heading>
          </Center>
          <Box>
            <Center>
            Menu availability and pricing may vary between order types.
            </Center>
          </Box>
          <Container maxW={"1000px"}>
          <HStack>
        <Box mr={"10"}>
          <Image src={pickup}/>
        </Box>
        <Spacer />
        <Spacer />
       
     <VStack  pt="10" >  <hr style={{border:"1px solid gray", height:"20vh"}}/>  <Box><Text fontWeight={"bold"}>OR</Text></Box> <hr style={{border:"1px solid gray", height:"20vh"}} /></VStack>
       
        <Box >
        <Image  src={car}/>
        </Box>
           
        </HStack>
          </Container>
        </Container>
          </ModalBody>

          <ModalFooter bg={"#f8f7f5"}>
            <Container maxW={"700px"}>
              <Center>
              <Button bg={"#f8f7f5"} 
               mr={3} w="250px" p={"9"}
               rounded="full"
               border="1px solid black"
               fontWeight={"bold"}
               onClick={()=>{
            
                setTimeout(() => {
               navigate("/cart")
               onClose()
                }, 20000);
               
              }}
              
               >
             <Text> <Addresspage message={"QUICK PICK UP "} />{onClose}</Text>
            </Button>
            <Spacer />
            
            <Button 
            bg={"#f8f7f5"} 
            mr={3} w="250px" p={"9"}
            rounded="full"
            border="1px solid black"
            fontWeight={"bold"}
            onClick={()=>{
            
              setTimeout(() => {
             navigate("/cart")
             onClose()
              }, 20000);
             
            }
            
          }
            > <Addresspage message={"DELIVERY"}/></Button>
              </Center>
            </Container>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    </div>
  )
}

export default Location