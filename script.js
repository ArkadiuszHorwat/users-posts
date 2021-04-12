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
        const posts = [];

        postsTab.map(post => {
            user.id === post.userId && posts.push(post);
        });

        user.posts = posts;
    });

    return usersTab;
}

const countPosts = async () => {
    const users = await setPostsToUsers();
    const strList = [];

    users.map(user => {
        strList.push(`${user.name} napisał(a) ${user.posts.length} postów.`);
    });

    return strList;
}

const checkUniqTitles = async () => {
    const posts = await getPosts();
    const titles = [];
    const duplicates = [];

    posts.map(post => {
        titles.push(post.title);
    });

    titles.sort();
    let current = null;
    for(let i = 0; i < titles.length; i++){
        titles[i] != current ? current = titles[i] : duplicates.push(titles[i]);
    }

    return duplicates;
}

countPosts().then(response => console.log('ilość postów: ',response));
checkUniqTitles().then(response => console.log('duplikaty: ', response));