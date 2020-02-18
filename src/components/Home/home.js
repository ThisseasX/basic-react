import React, { useState, useEffect } from 'react';
import { fetchPosts } from 'services/posts';
import classes from './style.module.css';

const capitalizeFirst = str => str[0].toUpperCase() + str.slice(1);

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(fetchedPosts => setPosts(fetchedPosts));
  }, []);

  return (
    <>
      <h1 className={classes.title}>Welcome to Awesome Blog!</h1>
      <h1 className={classes.subtitle}>Recent Blog Posts</h1>
      {posts.length ? (
        posts.map(({ id, title, body }) => (
          <div key={id}>
            <h2>{capitalizeFirst(title)}</h2>
            <p>{capitalizeFirst(body)}</p>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Home;
