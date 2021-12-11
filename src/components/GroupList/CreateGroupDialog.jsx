import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

/*
interface Props {
    open: Boolean;
    handleClose: Function;
}
*/
export default function CreateGroupDialog (props) {
    const [groupName, setGroupName] = useState('');
    const [imageURI, setImageURI] = useState('');
    const [memberEmail, setMemberEmail] = useState('');
    const [memberList, setMemberList] = useState([]);

    const changeGroupName = (ev) => {
        setGroupName(ev.target.value);
    };

    const changeImageURI = (ev) => {
        setImageURI(ev.target.value);
    };

    const changeMemberEmail = (ev) => {
        setMemberEmail(ev.target.value);
    };

    const addMember = () => {
        if (memberEmail) {
            setMemberList(memberList => [...memberList, memberEmail]);
        }
    };

    const createNewGroup = () => {
        if (!groupName) return;
        const newGroup = {
            name: groupName, 
            image: imageURI
        };


    };

    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle>Create a Group</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Group Name"
                    type="text"
                    value={groupName}
                    onChange={changeGroupName}
                    fullWidth
                    variant="standard"
                />
                <TextField
                    margin='dense'
                    id='image'
                    label='Group image URL'
                    type='url'
                    value={imageURI}
                    onChange={changeImageURI}
                    fullWidth
                    variant='standard'
                />
                <Typography 
                    sx={{
                        fontSize: '1.2em',
                        mt: '0.8em',
                        mb: '0.9em'
                    }}
                >
                    Add Members using their emails
                </Typography>
                <List>
                    {
                        memberList.map(member => (
                            <ListItem key={member}>
                                <ListItemText>
                                    {member}
                                </ListItemText>
                            </ListItem>
                        ))
                    }
                </List>
                <Grid
                    container
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                    spacing={1}
                >
                    <Grid item xs='8'>
                        <TextField
                            margin='dense'
                            id='member'
                            label='Member email'
                            type='email'
                            value={memberEmail}
                            onChange={changeMemberEmail}
                            fullWidth
                            variant='standard'
                        />
                    </Grid>
                    <Grid item xs='4'>
                        <Button
                            variant='contained'
                            sx={{
                                pl: 2,
                                pr: 2
                            }}
                            onClick={addMember}
                        >
                            Add Member
                        </Button>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button onClick={createNewGroup}>Create</Button>
            </DialogActions>
        </Dialog>
    );
}