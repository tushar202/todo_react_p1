import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



export default function TodoList({ taskList, setTaskList }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleDelete = (idx) => {
        console.log(idx);
        let narr = [...taskList]
        narr.splice(idx, 1);
        setTaskList(narr)
        console.log(narr)
    }
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

            {taskList.map((taskD, idx) => {
                console.log({ taskD, idx })
                return (
                    <ListItem>
                        <ListItemText primary={taskD.task} secondary={taskD.deadLine.toString()} />
                        <div>
                            <Button onClick={handleOpen}>Details</Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Task Details
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        {taskD.taskDetails}
                                    </Typography>
                                </Box>
                            </Modal>
                        </div>
                        <IconButton onClick={(event) => {
                            handleDelete(idx)
                        }}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                )
            })}

        </List>
    );
}
