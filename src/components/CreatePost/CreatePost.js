import './CreatePost.css'
import {AuthContext} from "../../context/AuthContext";
import {useContext, useState} from "react";
import {Avatar} from "@mui/material";
import {baseUrl} from "../../shared/baseUrl";
import uploadPost from "../../api/uploadPost";
import uploadImage from "../../api/uploadImage";

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
                </div>
                <div className="create-post-mid">
                    <label htmlFor='file'>
                        <input type='file' id='file' accept='.png, .jpeg, .jpg'
                               onChange={e => setImage(e.target.files[0])}/>
                    </label>
                </div>
                <div className="create-post-bottom">
                    <button className="post-button" onClick={handlePost}>POST</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost