import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    VStack,Container,Center,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
    <Container mt="100px">
      <Center>
      <Flex
      
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('#ffffff')}>
      <Stack spacing={8}  maxW={'1000px'} py={12} px={6}>
        <Stack align={'center'}  >
          <Heading fontSize={'4xl'} textAlign={'center'}>
            
          </Heading>
        
        </Stack>
        <Box
       
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={16}>
          <Stack spacing={4} w="350px">
            <Text fontSize={"20px"}  fontWeight={"bold"}>CREATE AN ACCOUNT</Text>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text"  variant={"flushed"}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" variant={"flushed"} />
                </FormControl>
              </Box>
         
            <FormControl id="email" isRequired>
              <FormLabel>Email </FormLabel>
              <Input type="email" variant={"flushed"}/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} variant={"flushed"} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="Confirm password" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} variant={"flushed"} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'black'}
                color={'white'}
                    rounded="full"
                _hover={{
                  bg: 'gray',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a menber? <Link color={'blue.400'}>Log In</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
      </Center>
    </Container>
    );
  }