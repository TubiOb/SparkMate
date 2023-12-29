import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Defaultbutton, Input } from '../../../components';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { Link as ChakraLink,  } from '@chakra-ui/react';
import '../../../index.css';
import { LoveImg } from '../../../assets';
import { useState } from 'react';


import { Formik, Form } from 'formik';
import { signupValues } from '../../../interface';
import {  useToast } from '@chakra-ui/react';
import { signUpValidation } from '../../../validations';


import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { app } from '../../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '../../../firebase';

const SignUp = () => {


  const [isPending,setIsPending] = useState(false);
  const [loginError] = useState(false);
  const toast = useToast();
  const auth = getAuth(app);
  const navigate = useNavigate(); 



  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (values: signupValues, { setSubmitting }: any) => {
    console.log("1");
    setIsPending(true);
    try {
      const { email, password, confirmPassword } = values;

      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

     

      const userId = userCredential.user.uid;
      const userDocRef = doc(firestore, `sparkmate/${userId}`);
      await setDoc(userDocRef, {
        email,
        password,
        confirmPassword, 
      });

      toast({
        title: 'Signup Successful',
        description: 'Welcome to Deife\'s Journal!',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
        variant: 'top-accent',
      });
      setIsPending(false);
      navigate("/dashboard"); 
      setSubmitting(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.error('Error signing up:', error.message);
      toast({
        title: 'Signup Error',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
        variant: 'top-accent',
      });
      setIsPending(false);
      setSubmitting(false);
    }
  };




  return (
    <Box display="flex" overflow='hidden'
     textAlign='center' flexDir="column" alignContent="center" justifyContent="center" minH="100vh" w="100%">
    
    <Image src={LoveImg} w={['90px', '110px' , '130px']} 
    top='0' left='0' className='slide-in-left '
    position='absolute'/>

<Image src={LoveImg} w={['100px', '130px' , '150px']} 
    bottom='0' right='0'  className='slide-in-right '
    position='absolute'/>
      <Box w={['90%', '90%', '80%', '40%']} mx="auto" className='slide-in-top'>
        <Box
          display="flex"
          flexDir={['column','column', 'row']}
          mb="40px"
          alignContent="center"
          justifyContent="center"
          textAlign="center"
          gap={['10px', '5px']}
        >
          <Text as="h1" whiteSpace='nowrap' className="subheading" flexWrap="wrap" fontSize={['25px', '30px']} textAlign="center" fontWeight="700">
            Create Account
          </Text>
          <Text as="span" whiteSpace='nowrap' fontSize={['25px', '30px']} textAlign="center" fontWeight="400">
            to get started now!
          </Text>
        </Box>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={signUpValidation}
        >
        {({ values, handleBlur, handleChange, errors, touched }) => (
            <Form >
              <Flex direction="column" mb="40px" gap={["15px", "33px"]} >
                <Input
                  error={errors.email}
                    color="blue.100"
                    label="Email"
                    name="email"
                    fontWeight='700'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.email}
                    shadow="sm"
                />
                <Input
                  error={errors.password}
                  color="blue.100"
                  label="Password"
                  name="password"
                  fontWeight='700'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  touched={touched.password}
                  shadow="sm"
                  
                 
                />
                <Input
                  color="blue.100"
                  label="confirmPassword"
                  name="confirmPassword"
                  fontWeight='700'
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched.confirmPassword}
                  type="password"
                  shadow="sm" />
                 
              </Flex>

              {loginError && (
                  <Box color="red" px='3px' fontSize={['11px', '12px']}>Invalid credentials. Please try again.</Box>
                )}

              <Defaultbutton
                type="submit"
                bg="white"
                width={['80%', '80%', '80%', '90%']}
                color="black"
                shadow="base"
                mx="auto"
                fontSize={['15px', '20px']}
                isLoading={isPending}
                loadingText="Loading..."
              >
                {'Sign Up'}
              </Defaultbutton>
            </Form>
          )}
        </Formik>
     <Box mt='80px' fontSize={['14px']}>   <ChakraLink as={ReactRouterLink} to="/auth/signin" _hover={{textDecoration: "none"}}>
        <Text>Already have an acount? <Text as='span'_hover={{textDecoration: "underline"}} fontWeight='700'>Log  In </Text></Text>
                    </ChakraLink></Box>
       
      </Box>
    </Box>
  );
};

export default SignUp;
