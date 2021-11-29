import {Dialog, DialogContent, DialogTitle} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {baseUrl} from "../../shared/baseUrl";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import getFollowers from "../../api/getFollowers";
import getFollowings from "../../api/getFollowings";
import UserListLoading from "../Loadings/UserListLoading";

/*
*   if isFollowers is true, this modal shows followers list
*   if false, it shows followings list
* */
const UserFollowListModal = ({open, setOpen, isFollowers}) => {
    const {user} = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)
    const [list, setList] = useState([])
    const handleClose = () => setOpen(false)

    useEffect(() => {
        setIsLoading(true)

        async function getList(userId) {
            if (isFollowers) {
                const list = await getFollowers(userId)
                setList(list)
            } else {
                const list = await getFollowings(userId)
                setList(list)
            }
        }

        getList(user._id)
        setIsLoading(false)
    }, [isFollowers, open, user._id])

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
                        {isLoading ? <UserListLoading/> : list.map(user => (
                            <ListItem>
                                <ListItemAvatar>
                                    {user.profilePicture
                                        ? <Avatar src={`${baseUrl}images/${user.profilePicture}`} alt={user.username}/>
                                        : <Avatar src='/assets/person/noAvatar.png'/>
                                    }
                                </ListItemAvatar>
                                <ListItemText primary={user.username} secondary={user.email}/>
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UserFollowListModal