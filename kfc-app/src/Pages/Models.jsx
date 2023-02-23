import {Image,Center, Spacer,Container,Box,Text,Heading,Flex,Divider,
    useDisclosure,Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,
    ModalBody,ModalFooter,HStack
  
  } from "@chakra-ui/react"
import { HashLink as Link } from "react-router-hash-link"
 
// import { Link as ReachLink } from "@reach/router"
// import { Link } from "react-router-dom"


export default function Models() {
    const { isOpen, onOpen, onClose } = useDisclosure()

// const handleClick=()=>{
//   props.history.push('/location')
// }

   return ( <Box>
  <Text onClick={onOpen}><i className="fa-solid fa-circle-info"></i></Text>
  
  <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} height="500px" >
    <ModalOverlay  />
    <ModalContent m="25vh" maxW={"40%"}>
   <Container mt={"5"} mb="5" maxW={"500px"}> <Center textAlign="center" alignItems={"center"}>  <Text fontSize={"20"} fontWeight={"bold"} mt="5"> <Text textAlign={"center"}>LOCATION MATTERS</Text> </Text></Center></Container>
      <ModalCloseButton />
      <ModalBody>
        <Container><Center><Text textAlign={"center"} fontWeight='400' mb='1rem' fontSize={"12"}>
        Please set your location to view accurate pricing, find nearby <br /> restaurants, and see local deals.
        </Text></Center></Container>
  
      </ModalBody>
  
      <ModalFooter>
      <Container mb={"10vh"} maxW="80%"><Center display={"flex"}>  <Button bg={"white"} color="black" colorScheme='black' mr={3} onClick={onClose}
      border="1px solid black" rounded={"full"} width="150px"
      
      >
          Dismiss
        </Button>
        <Spacer/>
        <Button variant='ghost'
         border="1px solid black" 
         rounded={"full"} width="200px"
         bg={"black"}
         color={"white"}
         onClick={onClose}
      // onClick={handleClick}
        > <Link to ="#location">Set My Location</Link> </Button></Center></Container>
      </ModalFooter>
    </ModalContent>
  </Modal>
  </Box>)
  }
  