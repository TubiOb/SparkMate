import { Box, Text } from '@chakra-ui/react'

const ForgotPassword = () => {
  return (
    <Box display="flex" flexDir="column" alignContent="center" overflow='hidden' textAlign='center' justifyContent="center" minH="100vh" w="100%">
        <Box w={['90%', '90%', '80%', '40%']} m="auto" className='slide-in-top' gap="40px">
            <Box display='flex' flexDir={['column', 'row']} alignContent="center" justifyContent="center" textAlign='center' gap={['10px', '5px']}>
                <Text as="h1" className='subheading' color='purple.400' flexWrap='wrap' fontSize={['25px', '30px']} textAlign="center" fontWeight='700'>
                    Forgot your password?  
                </Text>
                <Text as="p" className='subheading' fontSize={['25px', '30px']} textAlign="center" fontWeight='400'>
                    Your password will be reset by email.
                </Text>
            </Box>
        </Box>

    </Box>
  )
}

export default ForgotPassword