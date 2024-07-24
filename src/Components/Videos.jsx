import { Text, Button, Heading, Stack, VStack, HStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Videos = () => {

    const videosArr = [
        "https://www.youtube.com/watch?v=OIl-A92onoM",
        "https://www.youtube.com/watch?v=EIPvq9n4noM",
        "https://www.youtube.com/watch?v=tfpitO3SnPM",
        "https://www.youtube.com/watch?v=sTZiSQ1PZ9g"
    ]


    const getVideoUrl = (url) => {
        const videourl = url.split("v=")[1];
        return videourl;
    }
    const [videoSrc, setVideoSrc] = useState(videosArr.length>0?`https://www.youtube.com/embed/${getVideoUrl(videosArr[0])}`:'');



    const handleVideoChange = (url)=>{
        const newUrl = getVideoUrl(url);
        setVideoSrc(`https://www.youtube.com/embed/${newUrl}`);
    }


    return (
        <Stack height={"100vh"} direction={['column', 'row']} p={['2','16']} >
            <VStack w={"full"} h={"full"} alignItems={"flex-start"} mt={['14','0']}>
                <iframe style={{
                    width: "100%",
                    height: "100%"
                }} 
                src={videoSrc} 
                frameborder="0" 
                allow="accelerometer; 
                autoplay; 
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture;" 
                title={`Video: ${videosArr.indexOf(videoSrc.split('/').pop())+1}`}
                allowfullscreen></iframe>
                <VStack alignItems={"flex-start"}>
                    <Heading>Sample Video 1</Heading>
                    <Text overflowY={"auto"}>This is description</Text>
                </VStack>
            </VStack>
            <VStack w={['full', 'xl']} alignItems={'stretch'}>
                
                    {
                        videosArr.map((url, index) => {
                            return (
                                <HStack>
                                    <Button 
                                    key={index} 
                                    onClick={()=>handleVideoChange(url)} 
                                    w={'full'} 
                                    colorScheme='twitter'
                                    variant={'ghost'}>
                                    Module {index+1}</Button>
                                    <input type="checkbox" style={{
                                        transform: "scale(2)",
                                        marginLeft: "2px"
                                    }} />
                                </HStack>
                            )
                        })
                    }
            </VStack>

        </Stack>
    )
}

export default Videos