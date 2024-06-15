// import { Link } from "react-router-dom";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, Flex,Button} from '@chakra-ui/react'
import { AuthContext } from '../context/AuthContextProvider'
import { useContext } from 'react'

    const links = [
        {
            to : "/",
            label : "HOME",
        },
        {
            to : "/about",
            label : "ABOUT",
        },
        {
            to : "/contact",
            label : "CONTACT",
        },
        {
            to : "/login",
            label : "LOGIN",
        }
        , {
            to : "/tickets",
            label : "TICKETS",
        }
    ]
export default function Navbar(){
    const {logout} = useContext(AuthContext)
    return <Flex align="center"
     justify="space-around"
      backgroundColor="gray.200"
      padding={4}
      >
    {
        links.map((link)=>(
            // <Link key={link.to} to={link.to}>{link.label}</Link>
            <ChakraLink as={ReactRouterLink}
             key={link.to} to={link.to}
             color="gray.900"
             >{link.label}
             </ChakraLink>
        ))
    }
    <Button variant="outline" colorScheme='red' onClick={logout}>LOGOUT</Button>
    </Flex>
}