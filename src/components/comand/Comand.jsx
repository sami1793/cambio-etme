import { CopyIcon } from "@chakra-ui/icons"
import { Flex, Text, Spacer, IconButton, useToast } from "@chakra-ui/react"

export const Comand = ({ comand, color, task }) => {

    const toast = useToast();

    const copyComand = () => {
        navigator.clipboard.writeText(comand);
        // setShowCopy(true);
        // setTimeout(()=>setShowCopy(false),1000)

        toast({
            title: 'Comando copiado',
            description: "",
            status: 'success',
            duration: 1000,
            isClosable: true,
          })
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
