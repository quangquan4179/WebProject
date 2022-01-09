import { Box } from "@material-ui/core";
import React, { useState } from "react";

import PermanentDrawerLeft from "./MainChatScreen"
const Chat =()=>{
    const [loading,setLoading]=useState(true)

    return(
        <React.Fragment>
           <Box sx={{ marginTop: '80px', display: 'flex', justifyContent: 'center' }}>
         
               <PermanentDrawerLeft/>
               

           </Box>
            
            
        </React.Fragment>
    )
}
export default Chat