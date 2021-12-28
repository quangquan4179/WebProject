import { Box } from "@material-ui/core";
import React, { useState } from "react";
import Dashboash from "./Dashboash";
import Window from "./Window";
import PermanentDrawerLeft from "./Test"
const Chat =()=>{
    const [loading,setLoading]=useState(true)

    return(
        <React.Fragment>
           <Box sx={{ marginTop: '80px', display: 'flex', justifyContent: 'center' }}>
               {/* <Window load={loading}/> */}
               {/* <Dashboash/> */}
               <PermanentDrawerLeft/>
               

           </Box>
            
            
        </React.Fragment>
    )
}
export default Chat