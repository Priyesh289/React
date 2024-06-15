import { Container, Input, Textarea, Select, VStack, Button } from "@chakra-ui/react";
import axios from "axios";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TicketCreate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("")
  const [priority, setPriority] = useState("")
  const navigate = useNavigate()
    
  async function postData(){
    let newData = {
      title:title,
      description:description,
      assignee:assignee,
      status:status,
      priority: priority,
    }
    try {
      let res = await axios({
        method: "post",
        url: "http://localhost:3000/tickets",
        data:newData
      })
      // console.log(res.data);
      if(res.status == 201){
        navigate('/tickets')
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <VStack spacing={6}>
      <Input
        placeholder="Enter Title"
        size="md"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Textarea
        placeholder="Enter the Description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <Select placeholder="Assignee details" value={assignee} onChange={(e)=>{
        setAssignee(e.target.value)
      }} >
        <option value="Manish">Manish</option>
        <option value="Sanjay">Sanjay</option>
        <option value="Varun">Varun</option>
        <option value="Arun">Arun</option>
        <option value="Shyam">Shyam</option>
        <option value="Ramji">Ramji</option>
        <option value="Prateek">Prateek</option>
        <option value="Abdul">Abdul</option>
      </Select>
      <Select placeholder="Status" value={status} onChange={(e)=>{
        setStatus(e.target.value)
      }}>
        <option value="Pending">Pending</option>
        <option value="Progress">Progress</option>
        <option value="Completed">Completed</option>
      </Select>
      <Select placeholder="Priority" value={priority} onChange={(e)=>{
        setPriority(Number(e.target.value))
      }}>
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
      
      <Button colorScheme="teal" variant="outline" onClick={postData}>
          Create Ticket
        </Button>
      </VStack>
    </Container>
  );
}
