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
        if(user.posts.length){
            strList.push(`${user.name} napisał(a) ${user.posts.length} postów.`);
        }
        else strList.push(`${user.name} nie napisał(a) żadnych postów.`)
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

    return duplicates.length ? duplicates : 'Wszystkie tytuły są unikalne.';
}

const findClosestUser = async () => {
    const users = await getUsers();
    const usersDistances = [];

    users.map(user => {
        const firstLat = user.address.geo.lat;
        const firstLng = user.address.geo.lng;
        let minDistance = null;
        let closestUser;

        users.map(otherUser => {
            if(otherUser.id !== user.id){
                const secondLat = otherUser.address.geo.lat;
                const secondLng = otherUser.address.geo.lng;
                let tmpDistance = getDistance(firstLat,firstLng,secondLat,secondLng);

                if(minDistance === null){
                    minDistance = tmpDistance;
                    closestUser = otherUser.name;
                }
                else if(minDistance > tmpDistance){
                    minDistance = tmpDistance;
                    closestUser = otherUser.name;
                }
            }
        });
        usersDistances.push((`${user.name} jest najbliżej użytkownika ${closestUser}. Oddaleni są od siebie o ${Math.round(minDistance)}km`));
    });
    return usersDistances;
}

//geo distance in km between two points
function getDistance(firstLat,firstLng,secondLat,secondLng) {
    const R = 6371;
    const dLat = convertToRad(secondLat-firstLat);
    const dLon = convertToRad(secondLng-firstLng);

    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(convertToRad(firstLat)) * Math.cos(convertToRad(secondLat)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const d = R * c;

    return d;
  }
  
  function convertToRad(deg) {
    return deg * (Math.PI/180);
  }

countPosts().then(response => console.log('Ilość postów użytkowników: ',response));
checkUniqTitles().then(response => console.log('Powtarzające się tytuły postów: ', response));
findClosestUser().then(response => console.log('Użytkownicy mieszkający najbliżej siebie: ', response));