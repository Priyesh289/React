import { Container, Input, Textarea, Select, VStack, Button } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";

export default function TicketEdit() {
  
  const navigate = useNavigate()
  const {id} = useParams()

  const [loading, setLoading] = useState(false)
  const [ticket, setTicket] = useState({})
  const [error, setError] = useState(false)

  async function fetchAndUpdateData(id){

    setLoading(true)

    try {
      let res = await axios({
        method: "get",
        url: `http://localhost:3000/tickets/${id}`
      })
      setLoading(false)
      setTicket(res.data)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchAndUpdateData(id)
  },[id])


  async function editTicket(){

    let updateTicket = {
      title: ticket.title,
      description: ticket.description,
      assignee: ticket.assignee,
      status: ticket.status,
      priority: ticket.priority
    }
    try {
      let res = await axios({
        method: "put",
        url: `http://localhost:3000/tickets/${id}`,
        data: updateTicket
      })
      if(res.status === 200){
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
  const {title, description,status,assignee,priority} = ticket
  return (
    <Container>
      <VStack spacing={6}>
        <Input
          placeholder="Enter Title"
          size="md"
          value={title}
          onChange={(e) => {
            setTicket({
              ...ticket,
              title: e.target.value,
            })
          }}
        />
        <Textarea
          placeholder="Enter the Description"
          value={description}
          onChange={(e) => {
            setTicket({
              ...ticket,
              description: e.target.value,
            })
          }}
        />
        <Select
          placeholder="Assignee details"
          value={assignee}
          onChange={(e) => {
            setTicket({
              ...ticket,
              assignee: e.target.value,
            })
          }}
        >
          <option value="Manish">Manish</option>
          <option value="Sanjay">Sanjay</option>
          <option value="Varun">Varun</option>
          <option value="Arun">Arun</option>
          <option value="Shyam">Shyam</option>
          <option value="Ramji">Ramji</option>
          <option value="Prateek">Prateek</option>
          <option value="Abdul">Abdul</option>
        </Select>
        <Select
          placeholder="Status"
          value={status}
          onChange={(e) => {
            setTicket({
              ...ticket,
              status: e.target.value,
            })
          }}
        >
          <option value="Pending">Pending</option>
          <option value="Progress">Progress</option>
          <option value="Completed">Completed</option>
        </Select>
        <Select
          placeholder="Priority"
          value={priority}
          onChange={(e) => {
            setTicket({
              ...ticket,
              priority: e.target.value,
            })
          }}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
        </Select>

        <Button colorScheme="teal" variant="outline" onClick={editTicket}>
          Edit Ticket
        </Button>
      </VStack>
    </Container>
  );
}
