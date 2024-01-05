import { Avatar, Box, Center, Text } from "@chakra-ui/react";
import { Input } from '../../components';
import { FaSearch } from "react-icons/fa";
import { useBreakpointValue } from "@chakra-ui/react";

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box display="flex" flexDir="row" alignContent="center" overflow='hidden' textAlign='center' justifyContent="center" minH="100px" w="100%">
      <Box w='full' mx="auto" gap="10px" display='flex'  flexDir="row" alignItems="center" justifyContent='space-around' textAlign='center' overflow='hidden' bg='red.200'>
        <Box className="" display='flex' gap='5px' alignItems='center'>
          <Avatar name={'Kent Dodds'} src='https://bit.ly/kent-c-dodds' />
          <Text color='white' fontWeight='500'> Kent Dodds </Text>
        </Box>

        <Input
          color='blue.100'
          label=""
          name="email"
          placeholder="search"
          fontWeight='700'
          type="search"
          shadow="sm"
          width={['20%']}
        />

        <Box className="" display={{ base: 'flex', md: 'none' }}>
          <FaSearch />
        </Box>

        
      </Box>
    </Box>
  );
}

export default Navbar;
