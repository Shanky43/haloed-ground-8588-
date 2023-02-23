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
    Container,Center
  } from '@chakra-ui/react';


  
  export default function SignInpage() {
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
          {/* <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack> */}
          <Box       w="450px" h={"80vh"} mt="10vh"
          
            rounded={'lg'}
            bg={useColorModeValue("#ffffff")}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4} >
                <Text fontSize={"20"} pt="5vh" fontWeight="bold">LOG IN TO FFF</Text>
              <FormControl id="email">
                <FormLabel>Email </FormLabel>
                <Input type="email"  variant='flushed' />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password"  variant='flushed' />
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
                  }}>
                 Log In
                </Button>
                <Box>Don't have an account? <u style={{cursor:"pointer"}}> <Link to ="/signuppage">Join Now</Link></u></Box>

              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </Center>
      </Container>
    );
  }