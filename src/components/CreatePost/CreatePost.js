import './CreatePost.css'

const CreatePost = () => {
    return (
        <div className="create-post">
            <div className="create-post-container">
                <div className="create-post-top">
                    <img
                        src="/assets/person/1.jpeg"
                    />
                    <input type="text" placeholder="Write a caption..."/>
                </div>
                <div className="create-post-bottom">
                    <button>POST</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost