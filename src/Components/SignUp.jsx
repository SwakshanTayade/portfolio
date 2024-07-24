import React from 'react'
import { Image, VStack, Heading, Input, Button, HStack, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import signup from '../assests/signup.jpg';
const SignUp = () => {
  return (
    <Stack h={"100vh"} p={14} direction={['column', 'row']}>
      <VStack  h={["25%","100%"]} borderRadius={"10px"}>
        <Image h={["100%","100%"]} w={"100%"} borderRadius={"10px"} src={signup} />
      </VStack>
      <VStack border={"2px solid lightblue"} borderRadius={"10px"} p={['1','8']} spacing={['1','5']} w={["100%","50%"]} h={["75%","100%"]} >
        <Heading>Sign Up</Heading>

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
        <Input border={"2px solid lightblue"} placeholder='Confirm Password' type='password' />
        <Input border={"2px solid lightblue"} placeholder='Address' type='text' />
        <HStack border={"2px solid lightblue"} p={2} borderRadius={"5px"} alignItems={"stretch"} w={"full"}>
          <label>State:   </label>
          <select>
            <option>Choose</option>
            <option>Maharashtra</option>
            <option>Telengana</option>
            <option>Uttar pradesh</option>
            <option>Tamil Nadu</option>
          </select>
        </HStack>
        <Button alignSelf={"center"} colorScheme='twitter'>Sign Up</Button>
        </form>

        <Link to={"/login"} style={{
          borderBottom: "2px solid lightblue",
        }}>Already registered</Link>
      </VStack>

      

    </Stack>
  )
}

export default SignUp