const GetPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
};
export default GetPosts;
