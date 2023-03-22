import {
  Box, NumberInput, NumberInputField,
  NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, FormLabel, FormControl, Wrap, WrapItem, VStack
} from '@chakra-ui/react'
import { InputElement } from '../inputElement/InputElement'
export const InputsSection = ({values, setValues}) => {
  const setBcfBts = (numberInput) =>{
    setValues({...values, bcf:numberInput, bts1:numberInput, bts2:Number(numberInput)+1, bts3:Number(numberInput)+2})
  }
  return (
    <Box>
      <VStack spacing={5}>

        <InputElement title={`BCF`}>
          <NumberInput value={values.bcf} min={0} max={99999} size='sm' onChange={setBcfBts} >
            <NumberInputField bg={'white'} />
            <NumberInputStepper>
              <NumberIncrementStepper bg={'gray.300'} />
              <NumberDecrementStepper bg={'gray.300'} />
            </NumberInputStepper>
          </NumberInput>
        </InputElement>

        <Wrap justify='center' spacing={5}>
          <WrapItem w='150px'>
            <InputElement title={`BTS`}>
              <NumberInput value={values.bts1} min={0} max={99999} size='sm' onChange={(number)=>setValues({...values, bts1:number})}>
                <NumberInputField bg={'white'} />
                <NumberInputStepper>
                  <NumberIncrementStepper bg={'gray.300'} />
                  <NumberDecrementStepper bg={'gray.300'} />
                </NumberInputStepper>
              </NumberInput>
            </InputElement>
          </WrapItem>

          <WrapItem w='150px'>
            <InputElement title={`BTS`}>
              <NumberInput value={values.bts2} min={0} max={99999} size='sm' onChange={(number)=>setValues({...values, bts2:number})}>
                <NumberInputField bg={'white'} />
                <NumberInputStepper>
                  <NumberIncrementStepper bg={'gray.300'} />
                  <NumberDecrementStepper bg={'gray.300'} />
                </NumberInputStepper>
              </NumberInput>
            </InputElement>
          </WrapItem>


          <WrapItem w='150px'>
            <InputElement title={`BTS`}>
              <NumberInput value={values.bts3} min={0} max={99999} size='sm' onChange={(number)=>setValues({...values, bts3:number})} >
                <NumberInputField bg={'white'} />
                <NumberInputStepper>
                  <NumberIncrementStepper bg={'gray.300'} />
                  <NumberDecrementStepper bg={'gray.300'} />
                </NumberInputStepper>
              </NumberInput>
            </InputElement>
          </WrapItem>
        </Wrap>


        <InputElement title={`New ETME`}>
          <NumberInput value={values.etme} min={0} max={4} size='sm' onChange={(number)=>setValues({...values, etme:number})} >
            <NumberInputField bg={'white'} />
            <NumberInputStepper>
              <NumberIncrementStepper bg={'gray.300'} />
              <NumberDecrementStepper bg={'gray.300'} />
            </NumberInputStepper>
          </NumberInput>
        </InputElement>

      </VStack>
    </Box>
  )
}
