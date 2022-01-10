import { Box } from "@material-ui/core";
import React, { useState } from "react";

import PermanentDrawerLeft from "./MainChatScreen"
const Chat =()=>{
    const [loading,setLoading]=useState(true)

    return(
        <React.Fragment>
           <Box sx={{height: 'calc(100vh - 84px)', paddingTop: '20px', marginTop: '64px', display: 'flex', justifyContent: 'center' }} style={{background: 'linear-gradient(#e66465, #9198e5)',}}>
         
               <PermanentDrawerLeft/>
               

           </Box>
            
            
        </React.Fragment>
    )
}
export default Chat