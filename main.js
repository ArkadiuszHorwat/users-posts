const functions = require('./script.js');

functions.countPosts().then(response => console.log('Ilość postów użytkowników: ',response));
functions.checkUniqTitles().then(response => console.log('Powtarzające się tytuły postów: ', response));
functions.findClosestUser().then(response => console.log('Użytkownicy mieszkający najbliżej siebie: ', response));