import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

const About = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((data) => data.json()).then((data) => setPost(data));
  }, []);

  return (
    <div className='post-container'>
      {
        posts.map((post) => (
          <li>{post.title}</li>
        ))}

    </div>
  );
};

const PostPage = () => {
  return (
    <div>
      <h1>Post will appear here</h1>
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
};

const Setting = () => {
  return (
    <div>
      <h1>Setting Page</h1>
    </div>
  );
};

const SayUser = () => {
  const params = useParams();

  console.log(params);

  return (
    <div>
      <h1>Your name is {params.userId}</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/post/' element={<PostPage />} />
      <Route path='/user/:userId' element={<SayUser />}></Route>

      <Route path='account'>
        <Route path='profile' element={<Profile />} />
        <Route path='setting' element={<Setting />} />
      </Route>
    </Routes>
  </BrowserRouter>
);