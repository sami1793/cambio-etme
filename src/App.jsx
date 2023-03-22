import {  Box, Container, Heading} from '@chakra-ui/react'
import { useState } from 'react'
import { ComandSection } from './components/comandSection/ComandSection'
import { InputsSection } from './components/inputsSection/InputsSection'
function App() {
  const [values, setValues] = useState({
    bcf: 425,
    bts1: 425,
    bts2: 426,
    bts3: 427,
    etme: 1
  });

  return (    
    <Box bgGradient='linear(to-r, green.200, blue.700)' minH='100vh' p={5}>    
    <Container className="App" maxW={800} bg='blackAlpha.300' padding={5} borderRadius={'3xl'}>
      <Heading as='h1' textAlign='center' mb={5} color={'gray.100'}>Cambio ETME</Heading>
      <InputsSection values={values} setValues={setValues}/>
      <ComandSection values={values}/>
    </Container>
    </Box>
  )
}

export default App
