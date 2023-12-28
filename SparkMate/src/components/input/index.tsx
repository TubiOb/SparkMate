
import { useState } from "react";
import { Flex, Input as ChakraInput, Text, IconButton, InputGroup, InputRightElement,  } from "@chakra-ui/react";
import { InputProps } from "../../interface";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

const Input = (props: InputProps) => {
  const { label, color, name, value, error, onChange, onBlur, type, isDisabled, width, fontWeight, errorColor,fontSize } = props;
  
  const isPassword = type === 'password'; 

  const [showPassword, setShowPassword] = useState(false); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Flex direction="column" p='2px' gap="4px" w={width} overflow='hidden'>
      <Text
        as="label"
        htmlFor={name}
        color={color}
        fontSize="14px"
        textAlign="left"
        fontWeight={fontWeight}
      >
        {label}
      </Text>
      <InputGroup>
        <ChakraInput
          name={name}
          value={value}
          onChange={onChange}
          color={'black.100'}
          onBlur={onBlur}
          bgColor="grey.100"
          fontSize={fontSize}
          borderRadius="10px"
          h="50px"
          border={error ? "1px solid #f00" : "none"}
          type={isPassword ? (showPassword ? "text" : "password") : type} 
          disabled={isDisabled}
        />
        {isPassword && ( 
          <InputRightElement  border='0' mt='5px'>
            <IconButton
              aria-label={showPassword ? "Hide password" : "Show password"}
              icon={showPassword ? <FaEyeSlash /> : <FaEye />} 
              onClick={togglePasswordVisibility}
              variant="ghost"
              color="gray.500"
              border='0'
              _hover={
               { border: '0px',}
              }
              _active={
                { border: '0px',}
               }
              
            />
          </InputRightElement>
        )}
      </InputGroup>
      {error && (
        <Text color={errorColor} fontSize="10px">
          {error}
        </Text>
      )}
    </Flex>
  );
};

export default Input;