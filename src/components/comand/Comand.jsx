import { Box } from "@chakra-ui/react"

export const Comand = ({comand, color, task}) => {
  return (
    <Box bg={color} color={"gray.700"} p={2} borderColor={`gray.400`} borderWidth={1} borderRadius={'md'}>{comand}</Box>
  )
}
