import { Image, Button, Heading, Input, VStack, Stack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import signin from '../assests/login.jpg'

const Login = () => {
    return (
        <Stack h={"100vh"} p={10} justifyContent={"center"} align={"center"} direction={['column', 'row']}>

            <VStack h={"100%"} w={"full"}>
                <Image h={"100%"} w={"100%"} src={signin} />
            </VStack>


            <VStack h={"80%"} border={"2px solid lightblue"} borderRadius={"10px"} p={2} w={"full"} >
                <Heading>Login</Heading>
                    <form action="" style={{
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"flex-start",
                        height:"100%",
                        width:"100%",
                        gap:"1vmax"
                        
                    }}>
                        <Input border={"2px solid lightblue"} placeholder='Username' type='text' />
                        <Input border={"2px solid lightblue"} placeholder='Email' type='email' />
                        <Input border={"2px solid lightblue"} placeholder='Password' type='password' />
                        <Button alignSelf={"center"} colorScheme='twitter'>Sign In</Button>
                    </form>

                <Link to={"/signup"} style={{
                    borderBottom: "2px solid lightblue",
                }}>Not registered!!</Link>
            </VStack>

        </Stack>
    )
}

export default Login