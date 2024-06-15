import { Alert,AlertDescription,AlertIcon,AlertTitle } from "@chakra-ui/react";
export default function ErrorIndicator() {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>
          Somithing went wrong
        </AlertDescription>
      </Alert>
    );
  }
  