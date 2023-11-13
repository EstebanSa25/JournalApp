import {
    Box,
    Divider,
    Drawer,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon, ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import {TurnedInNot} from "@mui/icons-material";

export const SideBar = ({drawerWidth=240}) => {
    return (
        <>
            <Box component='nav'
                 sx={{
                     width:{sm:drawerWidth},flexShrink:{sm:0}
                 }}>
                <Drawer variant='permanent' open
                        sx={{
                            display:{xs:'block'},
                            '& .MuiDrawer-paper':{boxSizing:'border-box',width:drawerWidth}
                        }}>
                    <Toolbar >
                        <Typography variant='h6' noWrap component='div'>Fernando Herrera</Typography>
                    </Toolbar>
                    <Divider></Divider>
                    <List>
                        {
                            ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre'].map(text=>(
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <TurnedInNot></TurnedInNot>
                                            <Grid>
                                                <ListItemText primary={text}></ListItemText>
                                                <ListItemText secondary={'lorem'}></ListItemText>
                                            </Grid>
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>
                </Drawer>
            </Box>
        </>
    )
}