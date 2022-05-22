import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { TextField } from '@mui/material'
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';


export default function TaskForm({ taskList, setTaskList }) {
    const [deadLine, setDeadLine] = React.useState(new Date());
    const [taskDetails,setTaskDetails]=useState();
    const [task, setTask] = useState('')

    return (
        <Box component="form" autoComplete="off" sx={{ height: 'auto', width: 400 }} >
            <Stack spacing={3}>
                <TextField id="standard-basic" label="Task" variant="standard" onChange={(event) => {
                    setTask(event.target.value)
                }} />
                <TextField
                    id="outlined-multiline-static"
                    label="TaskDetails"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    onChange={(event)=>{
                        setTaskDetails(event.target.value)
                    }}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        label="DeadLine"
                        value={deadLine}
                        onChange={(newValue) => {
                            setDeadLine(newValue);
                            // console.log(value)
                        }}
                    />
                </LocalizationProvider>
                <Button variant="outlined" startIcon={<AddCircleIcon />} onClick={(event) => {
                    setTaskList([...taskList, { task, deadLine,taskDetails }])
                    console.log(taskList)
                }}>
                    Add Task
                </Button>
            </Stack>
        </Box>
    )
}

