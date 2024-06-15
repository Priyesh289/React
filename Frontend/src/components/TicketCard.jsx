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
    CardFooter
  } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function TicketCard({id, title, status, priority }) {
    // title, status priority
    const navigate = useNavigate()
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
          </Stack>
          <CardFooter>
            <Button variant="outline" colorScheme="blue" onClick={()=>{
              navigate(`/ticket/view/${id}`)
            }}>
              View page
            </Button>
          </CardFooter>
        </CardBody>
      </Card>
    );
  }
  