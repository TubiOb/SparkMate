import { Box , Flex, Text} from '@chakra-ui/react'
import { Input } from '../../../components'
import "../../../index.css"



const SignUp = () => {
  return (
    <Box display='flex' justifyContent='center' alignContent='center' minH='100vh'>

      <Box w={["90%", "80%", "70%"]} >
        <Text as='h1' className='subheading' fontSize={['15px', '18px', '22px']}
         fontWeight='700'>Create Account 
         <Text as='span' fontWeight='400'> to get started </Text></Text>


         <Flex direction="column" gap={["15px", "33px"]} mb="20px">
      <Input
  color={'blue.100'}
  label="Email"
  name="email"
  errorColor={"red.100"}
  shadow='sm'
  
/>

                      <Input
                      color='blue.100'
                      
                        label="Enter Password"
                        name="password"
                        errorColor={"red.100"}
                        
                        type={'password'}
                        shadow='sm'
                      />

                      <Input
                      color='blue.100'
                      
                        label="Confirm Password"
                        name="password"
                        errorColor={"red.100"}
                        
                        type={'password'}
                        shadow='sm'
                      />
                    </Flex>
     
      </Box>

     
    </Box>
  )
}

export default SignUp
