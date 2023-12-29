// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Box, Button as ChakraButton, ButtonProps as CBProps } from "@chakra-ui/react"
import { DefaultbuttonProps } from "../../interface"

const Defaultbutton = (props: DefaultbuttonProps) => {
  const { width, bg, color, shadow, children, className, type = 'button', onClick, isLoading, loadingText, borderWidth, borderColor, fontSize } = props;

  return (
    <Box>
      <ChakraButton
        _hover={{ opacity: 0.7 }}
        bg={bg}
        color={color}
        h={['40px', '45px', '50px']}
        shadow={shadow}
        fontFamily='Manrope'
        className={className}
        width={width}
        onClick={onClick} 
        type={type}
        isLoading={isLoading}
        loadingText={loadingText}
        borderWidth={borderWidth}
        borderColor={borderColor}
        fontSize={fontSize}
      >
        {children}
      </ChakraButton>
    </Box>
  );
};

export default Defaultbutton;