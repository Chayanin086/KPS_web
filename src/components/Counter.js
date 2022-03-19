import { Box } from "@mui/system";
import { color } from "@mui/system";
import { Button } from "@mui/material";
function Counter(props){
    const handleReset = () =>{}
    return (

        <Box sx={{
            color:props.value % 2 == 0? 'red':'green'
        }}>{props.value}
        <Button variant='outline' onClick={props.resetHandler}>Reset</Button>
        </Box>
    )

}
export default Counter;