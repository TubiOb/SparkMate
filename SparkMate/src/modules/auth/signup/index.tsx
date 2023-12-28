import { Box, Flex, Text } from '@chakra-ui/react';
import { Defaultbutton, Input } from '../../../components';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink,  } from '@chakra-ui/react';
import '../../../index.css';

const SignUp = () => {
  return (
    <Box display="flex" textAlign='center' flexDir="column" alignContent="center" justifyContent="center" minH="100vh" w="100%">
      <Box w={["90%", "80%", "70%"]} mx="auto">
        <Box
          display="flex"
          flexDir={['column', 'row']}
          mb="40px"
          alignContent="center"
          justifyContent="center"
          textAlign="center"
          gap={['10px', '5px']}
        >
          <Text as="h1" className="subheading" flexWrap="wrap" fontSize={['25px', '30px']} textAlign="center" fontWeight="700">
            Create Account
          </Text>
          <Text as="span" fontSize={['25px', '30px']} textAlign="center" fontWeight="400">
            to get started now!
          </Text>
        </Box>

        <Flex direction="column" mb="40px" gap={["15px", "33px"]} >
          <Input
            color={'blue.100'}
            label="Email"
            name="email"
            errorColor={"red.100"}
            shadow="sm"
           
          />
          <Input
            color="blue.100"
            label="Enter Password"
            name="password"
            errorColor={"red.100"}
            type={'password'}
            shadow="sm"
          />
          <Input
            color="blue.100"
            label="Confirm Password"
            name="password"
            errorColor={"red.100"}
            type={'password'}
            shadow="sm"
          />
        </Flex>

        <Defaultbutton
          bg="white"
          width={['80%', '80%', '80%', '90%']}
          color="black"
          shadow="base"
          mx="auto"
          fontSize={['15px', '20px']}
        >
          {'Sign Up'}
        </Defaultbutton>

     <Box mt='80px' fontSize={['14px']}>   <ChakraLink as={ReactRouterLink} to="/auth/signin" _hover={{textDecoration: "none"}}>
        <Text>Already have an acount? <Text as='span'_hover={{textDecoration: "underline"}} fontWeight='700'>Login Now</Text></Text>
                    </ChakraLink></Box>
       
      </Box>
    </Box>
  );
};

export default SignUp;
