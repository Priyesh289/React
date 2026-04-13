import React from 'react'
import { Flex, Spacer } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
const FlexExample = () => {
  return (
    <div>
        <Flex >
      <Box  p="10" bg='red.500' >
        1
      </Box>
      <Spacer/>
      <Box  p="10" bg='red.500' >
        2
      </Box>
      <Spacer/>
      <Box  p="10" bg='red.500' >
        3
      </Box>
    </Flex>
    </div>
  )
}

export default FlexExample