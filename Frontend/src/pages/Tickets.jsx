import {
  Container,
  Flex,
  Button,
  VStack,
  SimpleGrid,
  Select,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";
import TicketCard from "../components/TicketCard";

export default function Tickets() {
  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [sortOrderValue, setSortOrderValue] = useState("")
  const [filterValue, setFilterValue] = useState("")

  async function fetchAndUpdateData(sortOrderValue,filterValue) {
    setLoading(true);
    try {
      let queryparams = {}
      if(filterValue){
        queryparams.status = filterValue
      }
      if(sortOrderValue){
        queryparams._sort = "priority"
        queryparams._order = sortOrderValue
      }
      let res = await axios({
        method: "get",
        url: `http://localhost:3000/tickets`,
        params: queryparams,
      });

      setLoading(false);
      setTickets(res.data);

    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }
 
  useEffect(() => {

    fetchAndUpdateData(sortOrderValue,filterValue);
    
  }, [sortOrderValue,filterValue]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  console.log(tickets);
  console.log(sortOrderValue);
  console.log(filterValue);
  return (
    <Container maxW="container.xl">
      <VStack>
        <Flex direction="row-reverse">
          <Button
            colorScheme="red"
            variant="solid"
            onClick={() => {
              navigate("/ticket/create");
            }}
            marginY={8}
          >
            Create Tickets
          </Button>
        </Flex>
        {/* {tickets.map((ticket)=>(
          <TicketCard/>
        ))} */}
        <HStack spacing = {50}>
          <Select placeholder="Sort by Priority" value={sortOrderValue} onChange={(e)=>{
            setSortOrderValue(e.target.value)
          }}>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </Select>
          <Select placeholder="Filter by Status" value={filterValue} onChange={(e)=>{
             setFilterValue(e.target.value)
          }}>
            <option value="Pending">Pending</option>
            <option value="Progress">Progress</option>
            <option value="Completed">Completed</option>
          </Select>
          marginY = {20}
        </HStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {tickets.map(function (ticket) {
            return <TicketCard {...ticket} />;
          })}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
