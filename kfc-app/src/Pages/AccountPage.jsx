import React from 'react'
import {Image,Center, Spacer,Container,Box,Text,Flex,HStack,VStack,UnorderedList,ListItem,
  Heading,Divider,Grid,Button,Alert,AlertIcon,AlertTitle,AlertDescription ,Avatar,
  Stack,
} from "@chakra-ui/react"



const AccountPage = () => {
  return (
    <div>
      <Container mt={"20vh"} maxW="1240px">
        <Center>
<Flex>
  <HStack justifyContent={"space-between"}>
  <Box>
  <Center py={6} >
      <Box
        maxW={'330px'}
        h="400px"
        w="500px" 
        bg={'black'}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        mr="20"
        >
     
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6} >
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              John Doe
            </Heading>
            <Text color={'gray.500'}>Frontend Developer</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack>
          </Stack>

          <Button
            w={'full'}
            mt={8}
            bg={'#151f21'}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Follow
          </Button>
        </Box>
      </Box>
    </Center>
  </Box>
  <Spacer />
  <Box border={"1px solid black"} w="800px" h={"450"} >
      <Box m={"10"}>
      <HStack>
      <Box><Text fontSize={"2xl"} fontWeight="bold">ORDER HISTORY</Text></Box>
      <Spacer/>
      <Box><Text>Looking for a specific order? <Button  ml="12" bg="white" border={"1px solid black"}rounded={"full"}>Order Lookup</Button></Text></Box>
      </HStack>

      </Box>

  </Box>
  </HStack>
</Flex>
        </Center>
      </Container>
    </div>
  )
}

export default AccountPage