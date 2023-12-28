import { Box, Image, Text } from '@chakra-ui/react';
import { Defaultbutton } from '../../components';
import { Logo } from '../../assets';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigation = (route : string) => {
    navigate(`/auth/${route}`);
  };

  const gradientStyle = {
    background: 'linear-gradient(to bottom, white, #D5A9FF)',
  };

  return (
    <Box bg='white' display="flex" flexDir="column" alignContent="center" justifyContent="center" minH="100vh" w="100%">
      <Box display="flex" flexDir="column" alignContent="center" justifyContent="center" w={['95%', '90%', '80%', '75%']} m="auto" gap="40px">
        <Box w={['180px', '220px', '280px']} mx="auto">
          <Image src={Logo} alt="SparkMate" />
          <Text as="h1" className="logo" fontSize={['30px', '40px']} textAlign="center">
            SparkMate
          </Text>
        </Box>

        <Box display="flex" flexWrap="wrap" gap={['24px', '30px']} alignContent="center" justifyContent="center">
          <Defaultbutton bg="white" width={['190px', '180px', '210px', '250px']} color="black" shadow="base" fontSize={['18px', '22px']} 
          onClick={() => handleNavigation('signin')}>{'Login'}</Defaultbutton>

          <Defaultbutton bg='linear-gradient(to right, #674CCD, #D5A9FF)' width={['190px', '180px', '210px', '250px']} color="white" shadow="base" fontSize={['18px', '22px']} 
          onClick={() => handleNavigation('signup')}>{'Sign Up'}</Defaultbutton>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
