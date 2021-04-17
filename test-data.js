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
];

const strList = [
    "Kurtis Weissnat napisał(a) 1 postów.",
    "Nicholas Runolfsdottir V napisał(a) 1 postów.",
    "Test Testowy napisał(a) 0 postów."
];

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

const closestResult = [
    'Kurtis Weissnat jest najbliżej użytkownika Test Testowy. Oddaleni są od siebie o 3259km',
    'Nicholas Runolfsdottir V jest najbliżej użytkownika Test Testowy. Oddaleni są od siebie o 15288km',
    'Test Testowy jest najbliżej użytkownika Kurtis Weissnat. Oddaleni są od siebie o 3259km'
];

module.exports = {
    mockUsers,
    mockPosts,
    usersTabResultMock,
    strList,
    mockNoUniqPosts,
    resultNoUniq,
    closestResult
}