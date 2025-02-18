const PostCard = async ({ title, body }) => {
    return (
        <div className="post-card">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};
export default PostCard;