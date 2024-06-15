import {
  Container,
  Heading,
  Input,
  VStack,
  Button,
} from "@chakra-ui/react";
import axios from "axios"
import { useState,useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState("")
    const {login,AuthDetails :{islogDin} } = useContext(AuthContext)

    
    async function handalLogin(){
       
        try {
            let res = await axios({
                method : "post",
                url : "https://reqres.in/api/login",
                data : {
                    email,
                    password,
                }
            })
            login(res.data.token);
            setEmail('')
            setPassWord('')
           
        } catch (error) {
            console.log(error);
        }

    }

  if(islogDin){
    return <Navigate to = "/"/>
  }
   
  return (
    <Container boxShadow='outline' p='6' rounded='md' bg='white'>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Login pages
        </Heading>

        <Input variant="outline" 
        placeholder="Email"
         value={email} 
         type="email"
         onChange={(e)=> {
            setEmail(e.target.value)
         }}
         />

        <Input variant="outline"
         placeholder="Password"
         value={password}
         type="password"
         onChange={(e)=>{
            setPassWord(e.target.value)
         }}
        />

        <Button colorScheme="teal" variant="outline" onClick={handalLogin}>
          Login
        </Button>
      </VStack>
    </Container>
  );
}
