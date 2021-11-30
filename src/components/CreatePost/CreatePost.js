import './CreatePost.css'
import {AuthContext} from "../../context/AuthContext";
import {useContext, useState} from "react";
import {Avatar, IconButton} from "@mui/material";
import {baseUrl} from "../../shared/baseUrl";
import uploadPost from "../../api/uploadPost";
import uploadImage from "../../api/uploadImage";
import DeleteIcon from '@mui/icons-material/Delete';
import {styled} from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';

const Input = styled('input')({
    display: 'none',
});


const CreatePost = () => {
    const {user} = useContext(AuthContext)

    const [image, setImage] = useState(null)
    const [desc, setDesc] = useState("")

    async function handlePost() {
        const newPost = {
            userId: user._id,
            desc: desc
        }

        if (image) {
            // lol that image name is insane
            const imageName = `${Date.now()}${user.username}${image.name}`
            const data = new FormData()
            data.append('file', image, imageName)
            newPost.img = 'post/' + imageName

            try {
                await uploadImage(data)
            } catch (e) {
                console.log(e)
            }
        }

        try {
            await uploadPost(newPost)
            setDesc("")
            window.location.reload()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="create-post">
            <div className="create-post-container">
                <div className="create-post-top">
                    {user.profilePicture
                        ? <Avatar src={`${baseUrl}images/${user.profilePicture}`} alt={user.username}/>
                        : <Avatar src='/assets/person/noAvatar.png' alt={user.username}/>
                    }
                    <input
                        type="text"
                        placeholder="Write a caption..."
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                    />
                    <label htmlFor="icon-button-file">
                        <Input
                            accept="image/*" id="icon-button-file" type="file"
                            onChange={e => setImage(e.target.files[0])}
                        />
                        <IconButton color="inherit" aria-label="upload picture" component="span">
                            <PhotoCamera/>
                        </IconButton>
                    </label>
                </div>
                {image &&
                <div className="share-image-container">
                    <img
                        className="share-image"
                        src={URL.createObjectURL(image)}
                        alt="share"
                    />
                    <IconButton aria-label="delete" size="large" onClick={() => setImage(null)}>
                        <DeleteIcon fontSize="inherit"/>
                    </IconButton>
                </div>
                }
                <div className="create-post-bottom">
                    <button className="post-button" onClick={handlePost}>POST<SendIcon fontSize='inherit'/></button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost