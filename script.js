const axios = require('axios');

const getPosts = async () => {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    }catch(errors){
        console.error(errors);
    }
}

const getUsers = async () => {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    }catch(errors){
        console.error(errors);
    }
}

const setPostsToUsers = async () => {
    const usersTab = await getUsers();
    const postsTab = await getPosts();

    usersTab.map(user => {
        let posts = [];

        postsTab.map(post => {
            user.id === post.userId && posts.push(post);
        });

        user.posts = posts;
    });
}

setPostsToUsers();