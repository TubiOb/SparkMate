import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { Defaultbutton, Input } from '../../../components';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { Link as ChakraLink,  } from '@chakra-ui/react';
import '../../../index.css';
import { LoveImg } from '../../../assets';
import { useState } from 'react';
import { Radio, RadioGroup } from '@chakra-ui/react'

import { Formik, Form, } from 'formik';
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
  const [signupError] = useState(false);
  const toast = useToast();
  const auth = getAuth(app);
  const navigate = useNavigate(); 
 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type SetFieldValueFunction = (field: string, value: any, shouldValidate?: boolean) => void;




  const initialValues = {
    fullname: '',
    username: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
    hobbies: '',
    age: '', 
    location: '',
  };


 

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onSubmit = async (values: signupValues, { setSubmitting, setFieldValue }: any) => {

  getUserLocation('location', setFieldValue);
  console.log("1");
  setIsPending(true);
  try {
    const { email, password ,location, age,fullname,username,gender,hobbies} = values;

    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userId = userCredential.user.uid;
    const userDocRef = doc(firestore, `sparkmate/${userId}`);
    await setDoc(userDocRef, {
      fullname,
      username,
      email,
      gender,
      hobbies,
      age,
      location,
    });
    console.log("2");
    toast({
      title: 'Signup Successful',
      description: 'Welcome to SparkMate!',
      status: 'success',
      duration: 2000,
      isClosable: true,
      position: 'top-right',
      variant: 'top-accent',
    });

    
    const ageNumber: number = parseInt(age, 10);

    if (ageNumber < 18) {
      toast({
        title: 'Age Requirement',
        description: 'You must be at least 18 years old to sign up.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
        variant: 'top-accent',
      });
      return;
    }

    setIsPending(false);
    setSubmitting(false);
    navigate("/");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    setIsPending(false);
    setSubmitting(false);
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
  }
};

  
const getUserLocation = (fieldName: string, setFieldValue: SetFieldValueFunction) => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        // Update the location field value using Formik's setFieldValue
        setFieldValue(fieldName, `${latitude}, ${longitude}`);

        console.log('Latitude:', latitude);
        console.log('Longitude:', longitude);

        // You can proceed to use this location data in your form
      },
      // Handle errors as before
    );
  } else {
    console.error('Geolocation is not supported');
    // Handle unsupported geolocation
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
      <Box w={['90%', '90%', '80%', '40%']} mx="auto" className='slide-in-top' position='relative'>
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
        <Box maxHeight="70vh" overflowY="scroll" className="custom-scrollbar"> 
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={signUpValidation}
        >
        {({ values, handleBlur, handleChange, errors, touched ,setFieldValue}) => (
            <Form >
            
              <Flex textAlign='left' direction="column" mb="40px" gap={["15px", "33px"]} >
                
              <Input
                  error={errors.fullname}
                    color="blue.100"
                    label="Full Name"
                    name="fullname"
                    fontWeight='700'
                    value={values.fullname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.fullname}
                    shadow="sm"
                />

                <Input
                  error={errors.username}
                    color="blue.100"
                    label="Username"
                    name="username"
                    fontWeight='700'
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.username}
                    shadow="sm"
                />

<RadioGroup onChange={(value) => setFieldValue('gender', value)} value={values.gender}>
  <Stack direction='row'>
    <Radio colorScheme='purple' value='male'>Male</Radio>
    <Radio colorScheme='purple' value='female'>Female</Radio>
    <Radio colorScheme='purple' value='other'>Other</Radio>
  </Stack>
</RadioGroup>



                
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
                  label="Confirm Password"
                  name="confirmPassword"
                  fontWeight='700'
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched.confirmPassword}
                  type="password"
                  error={errors.confirmPassword}
                  shadow="sm" />

                  <Input
                  color="blue.100"
                  label="Hobbies"
                  name="hobbies"
                  fontWeight='700'
                  value={values.hobbies}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched.hobbies}
                  error={errors.hobbies}
                  shadow="sm" />

<Input
  color="blue.100"
  label="Age"
  name="age"
  fontWeight='700'
  value={values.age}
  onChange={handleChange}
  onBlur={handleBlur}
  type="number" 
  touched={touched.age}
  error={errors.age}
  shadow="sm"
/>


<Input
  color="blue.100"
  label="Location"
  name="location"
  fontWeight='700'
  value={values.location}
  onChange={handleChange}
  onBlur={handleBlur}
  type="text"
  touched={touched.location}
  error={errors.location}
  shadow="sm"
  onFocus={() => getUserLocation('location', setFieldValue)}
/>

                 
              </Flex>

              {signupError && (
                  <Box color="red" px='3px' fontSize={['11px', '12px']}>Invalid credentials. Please try again.</Box>
                )}

            

<Box mb='40px'>
<Defaultbutton
  type="submit"
  bg="white"
  width={['80%', '80%', '80%', '90%']}
  color="black"
  shadow="base"
  mx="auto"
  fontSize={['14px', '15px', '16px']}
  isLoading={isPending}
  loadingText="Loading..."
  disabled={isPending} 
>
  {'Sign Up'}
</Defaultbutton>
</Box>

            </Form>
          )}
        </Formik>
        </Box>
     <Box mt='50px' mb='20px' fontSize={['14px']}>   <ChakraLink as={ReactRouterLink} to="/auth/signin" _hover={{textDecoration: "none"}}>
        <Text>Already have an account? <Text as='span'_hover={{textDecoration: "underline"}} fontWeight='700'>Log  In </Text></Text>
                    </ChakraLink></Box>
       
      </Box>
    </Box>
  );
};

export default SignUp;










