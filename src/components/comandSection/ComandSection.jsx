import { Center, Container, Stack } from "@chakra-ui/react"
import { Comand } from "../comand/Comand"

export const ComandSection = ({values}) => {
    return (
        <Container>
            <Stack m={10}>
                <Comand comand={`ZEFO:${values.bcf}:IDE;`} color={`yellow.200`} task={`SHOW ETME ID`}></Comand>
                <Comand comand={`ZEFS:475:L;`} color={`blue.200`} task={`BLOQUEAR BCF`}></Comand>
                <Comand comand={`ZEQS:BTS=475:L;`} color={`blue.200`} task={`BLOQUEAR BTS`}></Comand>
                <Comand comand={`ZEQS:BTS=476:L;`} color={`blue.200`} task={`BLOQUEAR BTS`}></Comand>
                <Comand comand={`ZEQS:BTS=477:L;`} color={`blue.200`} task={`BLOQUEAR BTS`}></Comand>
            </Stack>
        </Container>
    )
}
