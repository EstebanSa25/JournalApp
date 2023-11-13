import {Box, Toolbar} from "@mui/material";
import {NavBar, SideBar} from "../components";
const drawerWidth = 280;

export const JournalLayout = ({children}) => {
    return (
        <Box sx={{display:'flex'}}>
            <NavBar drawerWidth={drawerWidth}></NavBar>
            <SideBar drawerWidth={drawerWidth}></SideBar>
            {/* Navbar drawerWidth */}
            {/* SideBar drawerWidth */}
            <Box component='main' sx={{flexGrow:1,p:3}}>
                {/*  Toolbar  */}
                <Toolbar></Toolbar>
                {children}
            </Box>
        </Box>
    )
}