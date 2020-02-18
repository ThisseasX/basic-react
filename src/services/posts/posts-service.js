import mockedPosts from './mocked-posts';

const fetchPosts = () =>
  Promise.race([
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()),
    new Promise(resolve => {
      setTimeout(() => {
        resolve(mockedPosts);
      }, 2000);
    }),
  ]);

export { fetchPosts };
