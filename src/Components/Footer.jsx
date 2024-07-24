import {Text, Box, Button, HStack, Heading, Input, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from "react-icons/ai"
const Footer = () => {
  return (
    <Box minH={40} bg={"black"}>
        
        <Stack direction={['column','row']} h={"full"} p={10} color={'white'}>
            <VStack w={"full"} >
                <Heading>Subscribe to Us</Heading>
                <HStack borderBottom={"2px solid white"}>
                    <Input placeholder='Enter Your Email...' _placeholder={{color:'white'}} border={"none"} colorScheme='twitter' color={"white"} focusBorderColor='white' />
                    <Button borderRadius={"0 50% 0 50%"} fontSize={'x-large'} ><AiOutlineSend/></Button>
                </HStack>
            </VStack>
            <VStack 
            w={"full"}
            borderLeft={["none","2px solid white"]}
            borderRight={["none","2px solid white"]}
            borderBottom={["2px solid white","none"]}
            
            >
                <Heading>Swakshan</Heading>
                <Text>All Rights Reserved </Text>
            </VStack>
            <VStack w={"full"}>
                <Heading>Contact</Heading>
                <VStack>
                    <a target='blank' href="https://www.geeksforgeeks.org/user/swakshan_/">GeeksForGeeks</a>
                    <a target='blank' href="https://leetcode.com/u/swakshan/">Leetcode</a>
                    <a target='blank' href="https://github.com/swakshantayade">GitHub</a>
                </VStack>
            </VStack>

        </Stack>

    </Box>
  )
}

export default Footer