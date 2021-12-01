import './OnlineFriends.css'
import {Avatar, Badge} from "@mui/material";

const OnlineFriendList = ({users}) => {
    return (
        <section className="online-friend-list">
            {users.map(user => (
                <div key={user.id} className="online-friend-list-item">
                    <Badge
                        color='success'
                        overlap="circular"
                        variant="dot"
                        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                    >
                        <Avatar
                            src="/asset/person/noAvatar.png"
                            alt="s"
                        />
                    </Badge>
                    <p>{user.username}</p>
                </div>
            ))}
        </section>
    )
}

export default OnlineFriendList