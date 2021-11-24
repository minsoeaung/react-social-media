import './OnlineFriends.css'

const OnlineFriendList = ({users}) => {
    return (
        <section className="online-friend-list">
            {users.map(user => (
                <div key={user.id} className="online-friend-list-item">
                    <img
                        src={`assets/${user.profilePicture}`}
                        alt={`${user.username}`}
                    />
                    <p>{user.username}</p>
                </div>
            ))}
        </section>
    )
}

export default OnlineFriendList