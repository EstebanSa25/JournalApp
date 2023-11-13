import {JournalLayout} from "../layout/JournalLayout.jsx";
import {NoteView,NothingSelectedView} from "../views/index.js";
import {IconButton} from "@mui/material";
import {AddOutlined} from "@mui/icons-material";
export const JournalPage = () => {
    return (
        <>
            <JournalLayout>
                {/*<Typography >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis facilis maiores odio possimus quae qui ut voluptatibus? Atque, aut, eligendi enim magni molestiae numquam odio qui repudiandae temporibus totam, vel?</Typography>*/}
                {/*   NothingSelected */}
                <NothingSelectedView></NothingSelectedView>
                {/*<NoteView></NoteView>*/}
                <IconButton sx={{
                    color:'white',
                    backgroundColor:'error.main',
                    ':hover':{backgroundColor:'error.main', opacity:0.9},
                    position:'fixed',
                    right:50,
                    bottom:50
                }}>
                    <AddOutlined sx={{fontSize:30}}></AddOutlined>
                </IconButton>
            </JournalLayout>
        </>
    )
}