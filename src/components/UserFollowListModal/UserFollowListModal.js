import {Dialog, DialogContent, DialogTitle} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {baseUrl} from "../../shared/baseUrl";
import {useEffect, useState} from "react";
import getFollowers from "../../api/getFollowers";
import getFollowings from "../../api/getFollowings";
import UserListLoading from "../Loadings/UserListLoading";
import {useNavigate} from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';

/*
*   if isFollowers is true, this modal shows followers list
*   if false, it shows followings list
* */
const UserFollowListModal = ({user, open, setOpen, isFollowers}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [list, setList] = useState([])
    const handleClose = () => setOpen(false)
    const navigate = useNavigate()

    useEffect(() => {
        setIsLoading(true)

        async function getList(userId) {
            if (isFollowers) {
                return await getFollowers(userId)
            } else {
                return await getFollowings(userId)
            }
        }

        getList(user._id).then((list) => setList(list))
        setIsLoading(false)
    }, [isFollowers, open, user._id])

    const handleClickListItem = (username) => {
        setOpen(false)
        navigate(`/profile/${username}`)
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll='paper'
                aria-labelledby="followers-or-followings"
                fullWidth={true}
            >
                <DialogTitle id="followers-or-followings" onClose={handleClose}>
                    {isFollowers ? "Followers" : "Followings"}
                </DialogTitle>
                <DialogContent dividers>
                    <List sx={{bgcolor: 'background.paper'}}>
                        {isLoading ? <UserListLoading/> : list?.map(user => (
                            <ListItem key={user._id} onClick={() => handleClickListItem(user.username)} disablePadding>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        {user.profilePicture
                                            ? <Avatar src={`${baseUrl}images/${user.profilePicture}`}
                                                      alt={user.username}/>
                                            : <Avatar src='/assets/person/noAvatar.png'/>
                                        }
                                    </ListItemAvatar>
                                    <ListItemText primary={user.username} secondary={user.email}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UserFollowListModal