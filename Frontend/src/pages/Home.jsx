import { Box, Heading,Button,useToast } from "@chakra-ui/react"

import {useNavigate } from "react-router-dom";


export default function Home() {
    const toast = useToast()
    const navigate = useNavigate()

    function handalClick(){
        toast({
            title: 'You are going to about page.',
            description: "User's going to about page.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          navigate('/tickets')
          console.log("clcik me");
    }
    return <Box>
        
        <Heading as="h1" size="xl">
            Home pages
        </Heading>
        <Button colorScheme="teal" variant="outline" onClick={handalClick}>
            Click Me
        </Button>
    </Box>
}