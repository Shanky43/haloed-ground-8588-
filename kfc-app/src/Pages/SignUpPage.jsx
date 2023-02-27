import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  VStack,
  Container,
  Center,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";

function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate()
  const [newUserDetails, setNewUserDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    token:""
  });
  const [userDetails, setUserDetails] = useState([]);
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    let token=generateRandomString(8)+Math.floor(Math.random() * 1000);
    
    setNewUserDetails({
      ...newUserDetails,[e.target.name]: e.target.value,token:token
    });
  };

  const handleUserData = () => {
    if (
      !newUserDetails.firstname ||
      !newUserDetails.lastname ||
      !newUserDetails.email ||
      !newUserDetails.password ||
      !newUserDetails.confirmpassword
    ) {
      setError("All fields are required.");
    } else if (newUserDetails.password !== newUserDetails.confirmpassword) {
      setError("Passwords do not match.");
    } else {
      setUserDetails([...userDetails, newUserDetails]);
      setError("");
    }
  };

  useEffect(() => {
    if (userDetails.length > 0) {
      localStorage.setItem("userSignUpDetails", JSON.stringify(userDetails));
      navigate("/sigininpage");
    }
  }, [userDetails]);


console.log(newUserDetails)
console.log(userDetails)
  const {
    firstname,
    lastname,
    email,
    password,
    confirmpassword,
  } = newUserDetails;

  return (
    <Container mt="100px">
      <Center>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("#ffffff")}
        >
          <Stack spacing={8} maxW={"1000px"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} textAlign={"center"}></Heading>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={16}
            >
              <Stack spacing={4} w="350px">
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  CREATE AN ACCOUNT
                </Text>
                {error && (
                  <Alert status="error" rounded="full">
                    <AlertIcon />
                    <AlertTitle mr={2} >Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      variant={"flushed"}
                      name="firstname"
                      value={firstname}
                      onChange={handleOnChange}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      variant={"flushed"}
                      name="lastname"
                      value={lastname}
                      onChange={handleOnChange}
                    />
                  </FormControl>
                </Box>
         
            <FormControl id="email" isRequired>
              <FormLabel>Email </FormLabel>
              <Input type="email" variant={"flushed"} name="email" value={email}
               onChange={handleOnChange}/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} 
                variant={"flushed"}
                 name="password" value={password}
                 onChange={handleOnChange}
                 />
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
                <Input type={showPassword ? 'text' : 'password'} 
                variant={"flushed"} 
                name="confirmpassword" 
                value={confirmpassword}
                onChange={handleOnChange}
                />
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
                }}
                onClick={handleUserData}
                >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a menber? <Link  to ="/sigininpage">Log In</Link>
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

  export default SignUpPage;