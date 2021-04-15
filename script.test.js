const { describe, it, expect, beforeEach } = require("@jest/globals");
const axios = require("axios");
const functions = require('./script.js');

const mockUsers = [
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: {
        lat: 24.8918,
        lng: 21.8984
      }
    },
    phone: '210.067.6132',
    website: 'elvis.io',
    company: {
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'generate enterprise e-tailers'
    }
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: {
        lat: -14.3990,
        lng: -120.7677
      }
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers'
    }
  },
  {
    id: 9,
    name: 'Test Testowy',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: {
            lat: -4.3990,
            lng: 20.7677
      }
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers'
    }
  }
];
const mockPosts = [
  {
    userId: 7,
    id: 53,
    title: 'ut quo aut ducimus alias',
    body: 'minima harum praesentium eum rerum illo dolore\n' +
      'quasi exercitationem rerum nam\n' +
      'porro quis neque quo\n' +
      'consequatur minus dolor quidem veritatis sunt non explicabo similique'
  },
  {
    userId: 8,
    id: 54,
    title: 'testowy test testuje',
    body: 'totam corporis dignissimos\n' +
      'vitae dolorem ut occaecati accusamus\n' +
      'ex velit deserunt\n' +
      'et exercitationem vero incidunt corrupti mollitia'
  },
  {
    userId: 10,
    id: 54,
    title: 'ala ma kota a kot ma ale',
    body: 'totam corporis dignissimos\n' +
      'vitae dolorem ut occaecati accusamus\n' +
      'ex velit deserunt\n' +
      'et exercitationem vero incidunt corrupti mollitia'
  },
  {
    userId: 11,
    id: 54,
    title: 'ut quo aut horwat alias',
    body: 'totam corporis dignissimos\n' +
      'vitae dolorem ut occaecati accusamus\n' +
      'ex velit deserunt\n' +
      'et exercitationem vero incidunt corrupti mollitia'
  }
];

const usersTabResultMock = [
  {
    ...mockUsers[0],
    posts: [mockPosts[0]]
  },
  {
    ...mockUsers[1],
    posts: [mockPosts[1]]
  },
  {
    ...mockUsers[2],
    posts: []
  }
]

describe('script functions test', () => {

  //test get data function
  it('should get data successfully', async () => {
    const mockData = {data: 'data'}
    axios.get = jest.fn(() => Promise.resolve(mockData));

    expect(await functions.getData('url')).toBe('data');
  });

  //test set posts to users function
  it('should correctly set posts to users', async () => {
    axios.get = jest.fn((url) => {
      if (url === 'https://jsonplaceholder.typicode.com/users') {
        return Promise.resolve({data: mockUsers});
      } else if (url === 'https://jsonplaceholder.typicode.com/posts') {
        return Promise.resolve({data: mockPosts});
      }
    });

    expect(await functions.setPostsToUsers()).toStrictEqual(usersTabResultMock);
  });

  //test count number of posts function
  it('should correctly count number of posts', async () => {
    const strList = [
      "Kurtis Weissnat napisał(a) 1 postów.",
      "Nicholas Runolfsdottir V napisał(a) 1 postów.",
      "Test Testowy napisał(a) 0 postów."
    ];

    expect(await functions.countPosts()).toStrictEqual(strList);
  });

  //test check uniq titles function
  it('should correctly check uniq titles', async () => {
    expect(await functions.checkUniqTitles()).toBe('Wszystkie tytuły są unikalne.');
  });
  it('should correctly check no uniq titles', async () => {
    const mockNoUniqPosts = [
      {
        userId: 5,
        id: 53,
        title: 'ut quo aut ducimus alias',
        body: 'minima harum praesentium eum rerum illo dolore\n' +
          'quasi exercitationem rerum nam\n' +
          'porro quis neque quo\n' +
          'consequatur minus dolor quidem veritatis sunt non explicabo similique'
      },
      {
        userId: 6,
        id: 54,
        title: 'testowy test testuje',
        body: 'totam corporis dignissimos\n' +
          'vitae dolorem ut occaecati accusamus\n' +
          'ex velit deserunt\n' +
          'et exercitationem vero incidunt corrupti mollitia'
      },
      {
        userId: 7,
        id: 53,
        title: 'ut quo aut ducimus alias',
        body: 'minima harum praesentium eum rerum illo dolore\n' +
          'quasi exercitationem rerum nam\n' +
          'porro quis neque quo\n' +
          'consequatur minus dolor quidem veritatis sunt non explicabo similique'
      },
      {
        userId: 8,
        id: 54,
        title: 'testowy test testuje',
        body: 'totam corporis dignissimos\n' +
          'vitae dolorem ut occaecati accusamus\n' +
          'ex velit deserunt\n' +
          'et exercitationem vero incidunt corrupti mollitia'
      },
      {
        userId: 9,
        id: 54,
        title: 'testowy test testuje ale jest unikalny',
        body: 'totam corporis dignissimos\n' +
          'vitae dolorem ut occaecati accusamus\n' +
          'ex velit deserunt\n' +
          'et exercitationem vero incidunt corrupti mollitia'
      }
    ];
    const resultNoUniq = [
      'testowy test testuje',
      'ut quo aut ducimus alias'
    ];
    axios.get = jest.fn(() => Promise.resolve({data: mockNoUniqPosts}));

    expect(await functions.checkUniqTitles()).toStrictEqual(resultNoUniq);
  });

  //test count distance functions
  it('should correct convert to radians', () => {
    expect(functions.convertToRad(-6.635)).toStrictEqual(-0.11580259586982376);
  });
  it('should get correct distance', () => {
    expect(functions.getDistance(-37.3159,81.1496,-43.9509,-34.4618)).toStrictEqual(8898.278635448845);
  });

  it('should find closest user', async () => {
    axios.get = jest.fn(() => Promise.resolve({data: mockUsers}));
    const closestResult = [
      'Kurtis Weissnat jest najbliżej użytkownika Test Testowy. Oddaleni są od siebie o 3259km',
      'Nicholas Runolfsdottir V jest najbliżej użytkownika Test Testowy. Oddaleni są od siebie o 15288km',
      'Test Testowy jest najbliżej użytkownika Kurtis Weissnat. Oddaleni są od siebie o 3259km'
    ];
    expect(await functions.findClosestUser()).toStrictEqual(closestResult);
  });
});