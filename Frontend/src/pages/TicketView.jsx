import {
    Heading,
    Button,
    Card,
    CardHeader,
    CardBody,
    Stack,
    Box,
    Text,
    StackDivider,
    CardFooter,
    HStack
  } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";
export default function TicketView() {
    const [loading, setLoading] = useState(false)
    const [ticket, setTicket] = useState({})
    const [error, setError] = useState(false)
    const {id} = useParams()
    const navigate = useNavigate()

async function fetchAndUpdateData(id){
    setLoading(true)

    try {
        let res = await axios({
            method: "get",
            url: `http://localhost:3000/tickets/${id}`
        })
        setTicket(res.data)
        setLoading(false)
    } catch (error) {
        setError(true)
        setLoading(false)
    }
}

useEffect(()=>{
    fetchAndUpdateData(id)
},[id])

async function DeleteTicket(){
    try {
      let res = await axios({
        method: "delete",
        url: `http://localhost:3000/tickets/${id}`
      })
      if(res.status==200){
        navigate("/tickets")
      }
    } catch (error) {
      console.log(error);
    }
}

if(loading){
  return <LoadingIndicator/>
}

if(error){
  return <ErrorIndicator/>
}

 const {title, description, status, assignee, priority} = ticket
  return (
    <Card>
    <CardHeader>
      <Heading size="md">{title}</Heading>
    </CardHeader>

    <CardBody>
      <Stack divider={<StackDivider />} spacing="4">
        <Box>
          <Heading size="xs" textTransform="uppercase">
            status
          </Heading>
          <Text pt="2" fontSize="sm">
            {status}
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            priority
          </Heading>
          <Text pt="2" fontSize="sm">
            {priority}
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            description
          </Heading>
          <Text pt="2" fontSize="sm">
            {description}
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            assignee
          </Heading>
          <Text pt="2" fontSize="sm">
            {assignee}
          </Text>
        </Box>
      </Stack>
      <CardFooter>
      <HStack spacing={8}>
        <Button variant="outline" colorScheme="blue" onClick={()=>{
          navigate(`/ticket/edit/${id}`)
        }}>
          Edit Ticket
        </Button>
        <Button variant="outline" colorScheme="blue" onClick={DeleteTicket}>
          Delete Ticket
        </Button>
        </HStack>
      </CardFooter>
    </CardBody>
  </Card>
  );
}