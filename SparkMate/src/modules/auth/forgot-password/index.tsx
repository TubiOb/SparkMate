import { Box, Flex, Text } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { useNavigate, Link as ReactRouterLink } from 'react-router-dom';
import { Defaultbutton, Input } from '../../../components';
import { useState } from 'react';

import {  useToast, Link as ChakraLink, } from '@chakra-ui/react';

import {
    getAuth,
    sendPasswordResetEmail,
  } from 'firebase/auth';
import { app } from '../../../firebase';
import { forgotPasswordValues } from '../../../interface';
import { forgetPasswordValidation } from '../../../validations';


const ForgotPassword = () => {
    const [isPending, setIsPending] = useState(false);
    const [loginError] = useState(false);
    const toast = useToast();
    const auth = getAuth(app);
    const navigate = useNavigate();

    const [initialValues, setInitialValues] = useState({
        email: '',
    });


    const onSubmit = async (values : forgotPasswordValues, { setSubmitting } : any ) => {
        setIsPending(true);

        try {
            const { email } = values;

            await sendPasswordResetEmail(auth, email);

            toast({
                title: 'Password Reset Email Sent',
                description: "Please check your email for instructions to reset your password.",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'top-right',
                variant: 'top-accent',
            });

            setIsPending(false);
            navigate('/auth/signin');
            setSubmitting(false);
        }
        catch ( error : any ) {
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

                setInitialValues({
                    email: '',
                });

                setIsPending(false);
                setSubmitting(false);
        }
    }

  return (
    <Box display="flex" flexDir="column" alignContent="center" overflow='hidden' textAlign='center' justifyContent="center" minH="100vh" w="100%">
        <Box w={['90%', '90%', '80%', '40%']} m="auto" gap="40px" py='40px'>
            <Box display='flex' flexDir='column' alignContent="center" justifyContent="center" my='30px' textAlign='center' gap={['10px', '5px']}>
                <Text as="h1" className='subheading' color='purple.400' flexWrap='wrap' fontSize={['25px', '30px']} textAlign="center" fontWeight='700'>
                    Forgot your password?  
                </Text>
                <Text as="span" className='subheading' fontSize={['15px', '18px']} textAlign="center" fontWeight='400'>
                    Your password will be reset by email.
                </Text>
            </Box>

            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={forgetPasswordValidation}>
                {({ values, handleBlur, handleChange, errors, touched }) => (
                    <Form>
                        <Flex direction="column" mb="40px" gap={["15px", "33px"]} textAlign='left' w='80%' mx='auto' >
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
                        </Flex>

                        {loginError && (
                            <Box color="red" px='3px' fontSize={['11px', '12px']}>Invalid credentials. Please try again.</Box>
                        )}

                        <Defaultbutton type='submit' bg='linear-gradient(to right, #674CCD, #D5A9FF)' width={['70%', '70%', '70%', '70%']} color="white" shadow="base" mx='auto' fontSize={['14px', '15px', '16px']} 
                            isLoading={isPending} loadingText="Loading...">{'Login'}
                        </Defaultbutton>
                </Form>
                )}
                
            </Formik>

            <Box mt='80px' fontSize={['14px']}>
                <ChakraLink as={ReactRouterLink} to="/auth/signin" _hover={{textDecoration: "none"}}>
                    <Text>Back to <Text as='span' _hover={{textDecoration: "underline"}} fontWeight='500'>Login</Text></Text>
                </ChakraLink>
            </Box>
        </Box>

    </Box>
  )
}

export default ForgotPassword