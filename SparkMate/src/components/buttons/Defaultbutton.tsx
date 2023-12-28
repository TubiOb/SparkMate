import { Box, Button } from "@chakra-ui/react"
import { DefaultbuttonProps } from "../../interface"

const Defaultbutton = ( props: DefaultbuttonProps ) => {
    const { width } = props;
  return (
    <Box>
        <Button bg='white' color='black' shadow='base' width={width}>
            Button
        </Button>
    </Box>
  )
}

export default Defaultbutton