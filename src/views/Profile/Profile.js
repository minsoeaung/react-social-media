import './Profile.css'
import {Divider, Stack} from "@mui/material";
import Feed from "../../components/Feed/Feed";
import {useContext, useEffect, useState} from "react";
import fetchUser from "../../api/fetchUser";
import {baseUrl} from "../../shared/baseUrl";
import {useParams} from "react-router-dom";
import UserFollowListModal from "../../components/UserFollowListModal/UserFollowListModal";
import {AuthContext} from "../../context/AuthContext";
import LoadingButton from '@mui/lab/LoadingButton';
import AddIcon from '@mui/icons-material/Add';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import unfollow from "../../api/unfollow";
import follow from "../../api/follow";

const Profile = () => {
    const username = useParams().username // the username of this profile
    const [user, setUser] = useState({}) // the user of this profile
    const {user: currentUser} = useContext(AuthContext) // the logged-in user as currentUser
    const [open, setOpen] = useState(false) // modal open or not
    const [isFollowers, setIsFollowers] = useState(null) // decide what modal must display
    const [isLoading, setIsLoading] = useState(false) // performing follow or unfollow
    const [isFollowed, setIsFollowed] = useState(null) // is current logged-in user follow this user?
    const [followerCount, setFollowerCount] = useState(0)
    const [followingCount, setFollowingCount] = useState(0)

    /*
    *   component did mount
    * */
    useEffect(() => {
        (async () => {
            setIsLoading(true)
            await fetchUser(username, false).then(res => setUser(res))
            setIsFollowed(currentUser.followings.includes(user._id))
            setFollowerCount(user.followers?.length)
            setFollowingCount(user.followings?.length)
            setIsLoading(false)
        })()
    }, [currentUser.followings, user._id, user.followers?.length, user.followings?.length, username])

    /*
    *   for modal
    * */
    const handleClick = (isFollowers) => {
        if (isFollowers) {
            setIsFollowers(true)
        } else {
            setIsFollowers(false)
        }
        setOpen(true)
    }

    /*
    *   follow, unfollow button
    * */
    const handleLoadingButtonClick = async () => {
        setIsLoading(true)
        if (isFollowed) {
            await unfollow(user._id, currentUser._id)
            setIsFollowed(false)
        } else {
            await follow(user._id, currentUser._id)
            setIsFollowed(true)
        }
        setIsLoading(false)
    }

    return (
        <main className="profile-container">
            <div className="profile-top">
                <img
                    src={user.profilePicture ? `${baseUrl}images/${user.profilePicture}` : '/assets/person/noAvatar.png'}
                    alt={user.username}
                />
                <div>
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2}
                    >
                        <h3>{user.username}</h3>
                        {currentUser.username !== username &&
                        <LoadingButton
                            onClick={handleLoadingButtonClick}
                            endIcon={isFollowed ? <TaskAltIcon/> : <AddIcon/>}
                            loading={isLoading}
                            loadingPosition="end"
                            variant={isFollowed ? 'outlined' : 'contained'}
                            size='small'
                            color='inherit'
                            style={{
                                backgroundColor: isFollowed ? "inherit" : "darkslategrey",
                                color: isFollowed ? "black" : "#fff"
                            }}
                        >
                            {isFollowed ? "Following" : "Follow"}
                        </LoadingButton>
                        }
                    </Stack>
                    <div className="user-stats">
                        <span className="pointer-underline"
                              onClick={() => handleClick(true)}>{followerCount} followers</span>
                        <span className="pointer-underline"
                              onClick={() => handleClick(false)}>{followingCount} followings</span>
                    </div>
                    <p>{user.desc}</p>
                </div>
                <div>
                    <h4>User Information</h4>
                    <div className="user-info">
                        <span>City : {user.city}</span>
                        <span>From : {user.from}</span>
                        <span>Relationship : {user.relationship === 1 ? 'Single' : user.relationship === 2 ? 'Married' : '-'}</span>
                    </div>
                </div>
            </div>
            <Divider/>
            <div className="profile-bottom">
                <div className="own-post-container">
                    <Feed username={username} isProfile={true}/>
                </div>
            </div>

            <UserFollowListModal
                user={user}
                open={open}
                setOpen={setOpen}
                isFollowers={isFollowers}
            />

        </main>
    )
}

export default Profile