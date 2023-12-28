import { Box, Button } from "@chakra-ui/react"
import { DefaultbuttonProps } from "../../interface"

const Defaultbutton = ( props: DefaultbuttonProps ) => {
    const { width, bg, color, shadow } = props;

  return (
    <Box>
        <Button bg={bg} color={color} shadow={shadow} width={width}>
            Button
        </Button>
    </Box>
  )
}

export default Defaultbutton