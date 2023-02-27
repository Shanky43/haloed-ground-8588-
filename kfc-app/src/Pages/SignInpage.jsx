// SignInpage
import {Link} from "react-router-dom"
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    // Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Container,Center,useToast 
  } from '@chakra-ui/react';
import { useState,useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { Authenticator } from "../context/Authentication";




  
  export default function SignInpage() {
const [validateCred,setValidateCred]= useState({email:"",password:""})
const [error, setError] = useState("");
const navigate=useNavigate()
const {isAuth,setIsAuth} =useContext(Authenticator)
const [showError,setShowError] =useState(false)


let existingUserDetails=JSON.parse(localStorage.getItem("userSignUpDetails"))
const toast = useToast()
console.log(existingUserDetails)
const handleOnChange=(e)=>{
  setValidateCred({
    ...validateCred,
    [e.target.name]: e.target.value,
  });
}
console.log(validateCred)
const handleLogin=()=>{
  if(localStorage.getItem("existingUserDetails")==null){
setShowError(true)
  }
else if(existingUserDetails[0].email!==validateCred.email){
setError("Incorrect Email")
}else if(existingUserDetails[0].password!==validateCred.password){
  setError("Incorrect password")
}else{
setError("")
console.log(existingUserDetails[0])

axios.post(`https://63fb3a3c2027a45d8d628234.mockapi.io/UserSCredentials`, existingUserDetails[0])
.then(response => {
  console.log(response);
})
.catch(error => {
  console.log(error);
}).finally(()=> {
setIsAuth(!isAuth)
navigate("/menu")});
}}


useEffect(()=>{
if(showError){
  toast({
    title: 'Create Account.',
    description: "Please Be member of FFF family by creating a account",
    status: 'error',
    duration: 3000,
    isClosable: true,
  })

  setTimeout(()=>{
    navigate("/signuppage")
  },1000)
}
},[showError])


const {email,password}=validateCred
   return (
      <Container  bg={useColorModeValue("#f8f7f5")} maxW="100%">
      <Center >
      <Flex
      mt={"20"}
        minH={'100vh'}
        w="800px"
        align={'center'}
        justify={'center'}
        bg={useColorModeValue("#f8f7f5")}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
    
          <Box       w="500px"  mt="10vh"
           pb={"10vh"}
            rounded={'lg'}
            bg={useColorModeValue("#ffffff")}
            boxShadow={'lg'}
            p={12}>
            <Stack spacing={4}  >
                <Text fontSize={"20"} pt="5vh" fontWeight="bold">LOG IN TO FFF</Text>
                {error && (
                  <Alert status="error">
                    <AlertIcon />
                    <AlertTitle mr={2}>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
              <FormControl id="email">
                <FormLabel>Email </FormLabel>
                <Input type="email"  variant='flushed' name="email" value={email}
                onChange={handleOnChange}
                />
              </FormControl>
              
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password"  variant='flushed' 
                name="password" value={password}
                onChange={handleOnChange}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Text color={'blue.400'}>Forgot password?</Text>
                  
                </Stack>
                <Box>
                    <Text>By logging into the application or proceeding as a guest, you agree to our <u style={{cursor:"pointer"}}> Privacy Policy</u> and <u style={{cursor:"pointer"}}>Terms of Use</u>.</Text>
                  </Box>
                <Button
                  bg={"black"}
                  color={'white'}
                  rounded="full"
                  _hover={{
                    bg: 'black.100',
                  }}
                  onClick={handleLogin}
                  >
                 Log In
                </Button>
                <Box >Don't have an account? <u  style={{cursor:"pointer"}}> <Link to ="/signuppage">Join Now</Link></u></Box>

              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </Center>
      </Container>
    );
  }