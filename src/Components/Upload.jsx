import { Button, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload, AiOutlineUpload } from 'react-icons/ai'

const Upload = () => {
  return (
    <VStack h={"100vh"} justifyContent={"center"}>
        <AiOutlineCloudUpload size={'10vmax'}/>
        <HStack>
        <Input type='file' css={{
            '&::file-selector-button':{
                border:"none",
                width:'calc(100% + 36px)',
                padding:'10px',
                marginLeft:'-18px',
                backgroundColor:"lightblue",
                color:"black"

            }
        }}/>
        <Button colorScheme='twitter'>
        <AiOutlineUpload size={'2vmax'}/>
        </Button>
        </HStack>
    </VStack>
  )
}

export default Upload