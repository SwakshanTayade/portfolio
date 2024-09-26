import { Text, Box, Container, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from "../assests/img1.png"
import img2 from "../assests/img2.jpg"
import img3 from "../assests/img3.png"
import img4 from "../assests/img4.png"
import img6 from "../assests/img6.jpg"
const headingOptions = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: "white"
}

const MyCarousel = () => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            interval={3000}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            transitionTime={1500}

        >
            <Box h={"75vh"} w={"100%"}>
                <Image src={img1} h={['75%', '100%']} w={'max-content'} right={"0"} objectFit={"contain"}/>
                {/* <Heading {...headingOptions}> First</Heading> */}
            </Box>
            <Box h={"75vh"} w={"100%"} display="flex" alignItems="center" justifyContent="center">
                <Image filter={'hue-rotate(-100deg)'} src={img3} h={['75%', '100%']} w={'max-content'} objectFit={"contain"}/>
                {/* <Heading {...headingOptions}> Second</Heading> */}
            </Box>
            <Box h={"75vh"} w={"100%"} display="flex" alignItems="center" justifyContent="center">
                <Image src={img1} h={['75%', '100%']} w={'max-content'} objectFit={"contain"}/>
                {/* <Heading {...headingOptions}> Third</Heading> */}
            </Box>
            <Box h={"75vh"} w={"100%"} display="flex" alignItems="center" justifyContent="center">
                <Image src={img3} h={['75%', '100%']} w={'max-content'} objectFit={"contain"}/>
                {/* <Heading {...headingOptions}> Fourth</Heading> */}
            </Box>



        </Carousel>
    )
}

const Home = () => {
    return (

        <Box>
            <MyCarousel />

            <Container maxWidth={"container.xl"} minH={"100vh"} p={16}>
                <Heading w={"fit-content"} borderBottom={"2px solid"} m={"auto"}>About Me</Heading>


                <Stack mt={2} p={4} alignItems={"center"} direction={['column', 'row']}>
                    <Image h={['40', '200']} borderRadius={"100%"} w={['75%', '100%']} filter={'hue-rotate(-130deg)'} src={img6} />
                    <Text letterSpacing={'widest'} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"}>
                        Hi! I am Swakshan, currently pursuing my Bachelor's in Computer Science and Engineering with a CGPA of 8.76. I have good knowledge of both frontend and backend technologies, namely MongoDB, Node.js, Express.js, React.js, HTML, CSS, Sass, Chakra UI, EJS, Firebase, and Git. I am always ready to adopt new tech stacks. I have solved around 800+ DSA problems on platforms like
                        <a style={{color:"blue", fontWeight:"500"}} target='blank' href="https://www.geeksforgeeks.org/user/swakshan_/"> GeeksForGeeks</a>
                        <a style={{color:"blue", fontWeight:"500"}} target='blank' href="https://leetcode.com/u/swakshan/"> Leetcode</a>
                        . My current goal is to land a job that requires a flexible employee who can quickly adapt to any technology.
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}

export default Home