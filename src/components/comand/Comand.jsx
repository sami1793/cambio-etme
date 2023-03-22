import { CopyIcon } from "@chakra-ui/icons"
import { Flex, Text, Spacer, IconButton } from "@chakra-ui/react"

export const Comand = ({ comand, color, task }) => {

    const copyComand = () => {
        navigator.clipboard.writeText(comand);
        // setShowCopy(true);
        // setTimeout(()=>setShowCopy(false),1000)
    }

    return (
        <Flex bg={color} color={"gray.700"} p={2} borderColor={`gray.400`}
            borderWidth={1} borderRadius={'md'} justify='space-between' >

            <Text as=''>{comand}</Text>
            <IconButton
                colorScheme='blackAlpha'
                size={'sm'}
                icon={<CopyIcon />}
                onClick={copyComand}
            />

        </Flex>
    )
}
