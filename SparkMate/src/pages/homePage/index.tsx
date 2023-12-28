import { Box, Image, Text } from '@chakra-ui/react';
import { Defaultbutton } from '../../components';
import { Logo } from '../../assets';

const HomePage = () => {
  const gradientStyle = {
    background: 'linear-gradient(to bottom, white, #D5A9FF)',
  };

  return (
    <Box style={gradientStyle} display="flex" flexDir="column" alignContent="center" justifyContent="center" minH="100vh" w="100%">
      <Box display="flex" flexDir="column" alignContent="center" justifyContent="center" w={['95%', '90%', '80%', '75%']} m="auto" gap="40px">
        <Box w={['120px', '150px', '250px']} mx="auto">
          <Image src={Logo} alt="SparkMate" />
          <Text as="h1" className="logo" fontSize={['20px', '40px']} textAlign="center">
            SparkMate
          </Text>
        </Box>

        <Box display="flex" flexWrap="wrap" gap={['24px', '30px']} alignContent="center" justifyContent="center">
          <Defaultbutton bg="white" width={['190px', '180px', '210px', '250px']} color="black" shadow="base" fontSize={['18px', '22px']}>{'Login'}</Defaultbutton>
          <Defaultbutton bg="purple.300" width={['190px', '180px', '210px', '250px']} color="white" shadow="base" fontSize={['18px', '22px']}>{'Sign Up'}</Defaultbutton>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
