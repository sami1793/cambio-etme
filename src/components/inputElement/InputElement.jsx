import { FormControl, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react'
import React from 'react'

export const InputElement = ({title, children}) => {
    return (
        <FormControl w='150px'>
            <FormLabel textAlign='center' bg='teal.400' color='white' borderTopRadius='md' mb={0}>{title}</FormLabel>
            {children}
        </FormControl>
    )
}
