import {Skeleton} from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";

const UserListLoading = () => {
    return (
        <>
            {[...new Array(3)].map(() => (
                <ListItem>
                    <ListItemAvatar>
                        <Skeleton animation="wave" variant="circular" width={40} height={40}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={<Skeleton animation="wave" height={10} width="20%"/>}
                        secondary={<Skeleton animation="wave" height={10} width="40%"/>}
                    />
                </ListItem>
            ))}
        </>
    )
}

export default UserListLoading