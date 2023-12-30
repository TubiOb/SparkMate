import { Box, Text, Flex, Image } from '@chakra-ui/react'
import { Defaultbutton, Input } from '../../../components'
import { useNavigate, Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink,  } from '@chakra-ui/react';
import '../../../index.css';
import { LoveImg } from '../../../assets';
import { useState } from 'react';

import { Formik, Form } from 'formik';
import {  useToast } from '@chakra-ui/react';
import { signinValues } from '../../../interface';
import { signInValidation } from '../../../validations';

import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { app } from '../../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../../firebase';




const SignIn = () => {

  const [isPending, setIsPending] = useState(false);
  const [loginError] = useState(false);
  const toast = useToast();
  const auth = getAuth(app);
  const navigate = useNavigate();



  const initialValues = {
    email: '',
    password: '',
  };



  // LOGGING INTO SPARKMATE
  const onSubmit = async (values: signinValues, { setSubmitting } : any) => {
    setIsPending(true);

    try {
      const { email, password } = values;

      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const userId = userCredential.user.uid;

      const userDocRef = doc(firestore, `sparkmate/${userId}`);
      const UserDoc = await getDoc(userDocRef);


      if (UserDoc) {
        
          const userData = UserDoc.data();

          toast({
            title: 'Signin Successful',
            description: "You're in! Let the sparks fly as you explore new possibilities.",
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: 'top-right',
            variant: 'top-accent',
          });
      

          setIsPending(false);
          navigate('/');
          setSubmitting(false);
      }
    }

    catch (error : any ) {
      console.error('Error signing up:', error.message);
        toast({
          title: 'Invalid Signin Parameter',
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
          variant: 'top-accent',
        });

        // intialValues({
        //   email: '',
        //   password: '',
        // });

        setIsPending(false);
        setSubmitting(false);
      }
    }



  return (
    <Box display="flex" flexDir="column" alignContent="center" overflow='hidden' textAlign='center' justifyContent="center" minH="100vh" w="100%">
      <Image src={LoveImg} w={['90px', '110px' , '130px']} top='0' left='0' className='slide-in-left' position='absolute'/>

      <Image src={LoveImg} w={['100px', '130px' , '150px']} bottom='0' right='0'  className='slide-in-right' position='absolute'/>

      <Box w={['90%', '90%', '80%', '40%']} m="auto" className='slide-in-top' gap="40px">
        <Box display='flex' flexDir={['column', 'row']} alignContent="center" justifyContent="center" textAlign='center' gap={['10px', '5px']}>
          <Text as="h1" className='subheading' flexWrap='wrap' fontSize={['25px', '30px']} textAlign="center" fontWeight='700'>
            Welcome,  
          </Text>
          <Text as="span" className='subheading' fontSize={['25px', '30px']} textAlign="center" fontWeight='400'>
            Glad to see you!
          </Text>
        </Box>
        

        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={signInValidation}>
          {({ values, handleBlur, handleChange, errors, touched}) => (
              <Form>
                <Flex direction="column" gap={["15px", "33px"]}>
                  <Input
                    color='blue.100'
                    label="Enter Email"
                    name="email"
                    fontWeight='700'
                    value={values.email}
                    error={errors.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.email}
                    shadow="sm"
                  />
                  <Input
                    color='blue.100'
                    label="Enter Password"
                    name="password"
                    fontWeight='700'
                    value={values.password}
                    error={errors.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    touched={touched.password}
                    shadow="sm"
                  />
    
                  <Text as='p' textAlign='right' mb='15px' mr='5px' cursor='pointer' textDecoration='underline' fontSize={['12px', '15px']}>Forgot password?</Text>
                </Flex>

                {loginError && (
                  <Box color="red" px='3px' fontSize={['11px', '12px']}>Invalid credentials. Please try again.</Box>
                )}

                <Defaultbutton type='submit' bg="white" width={['80%', '80%', '80%', '80%']} color="black" shadow="base" mx='auto' fontSize={['15px', '20px']} 
                  isLoading={isPending} loadingText="Loading...">{'Login'}
                </Defaultbutton>
              </Form>
          )}
          
          
        </Formik>
        

        

        


        <Box mt='80px' fontSize={['14px']}>
          <ChakraLink as={ReactRouterLink} to="/auth/signup" _hover={{textDecoration: "none"}}>
            <Text>Don't have an account? <Text as='span'_hover={{textDecoration: "underline"}} fontWeight='700'>Sign Up</Text></Text>
          </ChakraLink>
        </Box>
        
      </Box>
      
      
    </Box>
  )
}

export default SignIn
