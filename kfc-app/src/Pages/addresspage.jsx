import {React, useState} from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,useToast ,
  ModalHeader,
  ModalFooter,Center,
  ModalBody,Text,Input,Container,
  ModalCloseButton,useDisclosure, Button
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Addresspage({message}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate=useNavigate()
  const [address,setAddress] = useState("") 
  const toast = useToast()
  const handleModalClick =()=>{
    if(address==""||address==null){
      toast({
        title: 'Address Missing',
        description: "Please add the address",
        status: 'error',
        duration: 6000,
        isClosable: true,
      })
    }else{
      localStorage.setItem("userAddress", JSON.stringify(address));
      onClose()
      navigate ("/cart");
    }

  }
  return (
    <>
     <Container>
      <Center>
      <Text onClick={onOpen} bg="#f8f7f5" _hover={{bg:"#f8f7f5"}}>{message}</Text>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <Text w="200px"><ModalHeader>Add Your Address</ModalHeader></Text>
    <ModalCloseButton />
    <ModalBody>
      {/* <Lorem count={2} /> */}
    <Input type={"text"} onChange={(e)=>{
      console.log(e.target.value)
        setAddress(e.target.value)
    }} />
      
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
      <Button variant='ghost' onClick={handleModalClick}>Add Address</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
      </Center>
     </Container>
    </>
  )
}

export default Addresspage