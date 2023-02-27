import React from 'react'
import { Container,Image,Center } from '@chakra-ui/react'
import Footer from './Footer'


const Career = () => {
  return (
    <div>
        <Container maxW={"1240px"} mt={"19vh"} cursor="pointer">
       <Image src="https://raw.githubusercontent.com/hlv-kakashi/KFC-clone-full-stack/main/frontend/kfc-app/src/pages/careers.jpg" alt='image'/>
        </Container>
        <Footer/>
            </div>
  )
}

export default Career