import React from 'react'
import { Drawer, DrawerBody, DrawerOverlay, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerFooter,useDisclosure, Button, VStack, HStack } from '@chakra-ui/react'

import { BiMenuAltLeft } from "react-icons/bi"
import { Link } from 'react-router-dom'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
const Header = () => {

    const { isOpen, onClose, onOpen } = useDisclosure();

    const bgstyle = {
        color: 'white',
        bg: 'blue.400'
    }
    return (
        <>
            <Button colorScheme='twitter' pos={"fixed"} left={"4"} top={"4"} onClick={onOpen} zIndex={'overlay'}>
                <BiMenuAltLeft />
            </Button>
            <Drawer isOpen={isOpen} onClose={onClose} placement="left">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton {...bgstyle} border={"2px solid white"} />
                    <DrawerHeader {...bgstyle}>Swakshan</DrawerHeader>
                    <DrawerBody position={"relative"}>
                        <VStack alignItems={"flex-start"}>
                            <Button variant={"ghost"} onClick={onClose}>
                                <Link to={'/'} style={{ textDecoration: "none" }}>Home</Link>
                            </Button>
                            <Button variant={"ghost"} onClick={onClose}>
                                <Link to={'/videos'} style={{ textDecoration: "none" }}>Videos</Link>
                            </Button>
                            <Button variant={"ghost"} onClick={onClose}>
                                <Link to={'/uploadVideo'} style={{ textDecoration: "none" }}>Upload Video</Link>
                            </Button>
                            <Button variant={"ghost"} onClick={onClose}>
                                <Link to={'/videos?category=free'} style={{ textDecoration: "none" }}>Free Videos</Link>
                            </Button>
                            <Button variant={"ghost"} onClick={onClose}>
                                <Link to={'/about'} style={{ textDecoration: "none" }}>About</Link>
                            </Button>
                        </VStack>

                        <HStack position={"absolute"} left={"0"} bottom={"2"} justifyContent={"space-evenly"} w={"full"}>

                            <Button colorScheme='twitter' onClick={onClose}>
                                <Link to={'/login'} style={{ textDecoration: "none" }}>Log In</Link>
                            </Button>
                            <Button variant={"outline"} colorScheme='twitter' onClick={onClose}>
                                <Link to={'/signup'} style={{ textDecoration: "none" }}>Sign Up</Link>
                            </Button>
                            <Button position={"relative"}>
                            <ColorModeSwitcher position={'absolute'} left={'1%'} top={'1%'} />
                            </Button>
                        </HStack>
                    </DrawerBody>
                    <DrawerFooter {...bgstyle}>Copyright @2024</DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header