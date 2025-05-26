import React from 'react';
import {Box} from "@mui/material";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom"

const Channel =()=> {
    return (

        <Box>
            <h4>This is Channel Page</h4>
            <Link to={"/"} >
                <Button variant='contained' > Go Main Page</Button>
            </Link>
        </Box>
    );
}


export default Channel;