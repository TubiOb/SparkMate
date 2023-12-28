import { Box, Text, Flex,  } from '@chakra-ui/react'
import { Defaultbutton, Input } from '../../../components'
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
  const navigate = useNavigate();

  const handleNavigation = (route : string) => {
    navigate(`/auth/${route}`);
  };

  return (
    <Box display="flex" flexDir="column" alignContent="center" justifyContent="center" minH="100vh" w="100%">
      <Box display="flex" flexDir="column" alignContent="center" justifyContent="center" textAlign='center' w={['95%', '90%', '80%', '35%']} m="auto" gap="40px">
        <Text as="h1" className='subheading' fontSize={['25px', '30px']} textAlign="center" fontWeight='700'>
          Welcome, <Text as="span" fontSize={['25px', '30px']} textAlign="center" fontWeight='400'>Glad to see you!</Text>
        </Text>


        <Flex direction="column" gap={["15px", "33px"]}>
          <Input
            color={'blue.100'}
            label="Email"
            name="email"
            errorColor={"red.100"}
          />
          <Input
            color='blue.100'
            label="Enter Password"
            name="password"
            errorColor={"red.100"}
            type={'password'}
          />

          <Text as='p' textAlign='right'>Forgot password?</Text>
        </Flex>

        

        <Defaultbutton bg="white" width={['80%', '80%', '80%', '80%']} color="black" shadow="base" mx='auto' fontSize={['15px', '20px']} 
          onClick={() => handleNavigation('')}>{'Login'}</Defaultbutton>
      </Box>
      
      
    </Box>
  )
}

export default SignIn
