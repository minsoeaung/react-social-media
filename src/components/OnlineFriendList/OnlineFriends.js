import './OnlineFriends.css'

const OnlineFriendList = ({users}) => {
    return (
        <section className="online-friend-list">
            {users.map(user => (
                <div key={user.id} className="online-friend-list-item">
                    <div className="online-friend-img-container">
                        <img
                            src={`assets/${user.profilePicture}`}
                            alt={`${user.username}`}
                        />
                        <span className="green-dot"/>
                    </div>
                    <p>{user.username}</p>
                </div>
            ))}
        </section>
    )
}

export default OnlineFriendList