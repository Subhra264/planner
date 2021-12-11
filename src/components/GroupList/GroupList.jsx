import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState } from 'react';
import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import GroupIcon from '@mui/icons-material/Group';
import { blue } from '@mui/material/colors';
import ListItemButton from '@mui/material/ListItemButton';
import CreateGroupDialog from './CreateGroupDialog';

export default function GroupList (props) {
    const [openModal, setOpenModal] = useState(false);

    const openCreateGroupModal = () => {
        setOpenModal(true);
    };

    const handleOnCloseCreateGroupModal = () => {
        setOpenModal(false);
    };

    return (
        <Box>
            <CreateGroupDialog
                open={openModal}
                handleClose={handleOnCloseCreateGroupModal}
            />
            <Button
                variant='contained'
                sx={{ 
                    mt: 3,
                    mb: 2,
                    marginLeft: '2px',
                    marginRight: '2px',
                    width: '90%'
                }}
                onClick={openCreateGroupModal}
            >
                Create Group
            </Button>
            <List>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                            <GroupIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='Group Name 1' />
                </ListItemButton>
                <ListItemButton selected={true} >
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                            <GroupIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='Group Name 2' />
                </ListItemButton>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                            <GroupIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='Group Name 3' />
                </ListItemButton>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                            <GroupIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='Group Name 4' />
                </ListItemButton>
            </List>
        </Box>
    );
}