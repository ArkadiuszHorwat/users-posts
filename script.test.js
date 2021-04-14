const { describe, it, expect, beforeEach } = require("@jest/globals");
const axios = require("axios");
const functions = require('./script.js');

const mockUsers = [{
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: [Object]
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
      geo: [Object]
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers'
    }
  }];
const mockPosts = [{
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
    title: 'sit asperiores ipsam eveniet odio non quia',
    body: 'totam corporis dignissimos\n' +
      'vitae dolorem ut occaecati accusamus\n' +
      'ex velit deserunt\n' +
      'et exercitationem vero incidunt corrupti mollitia'
  }];

const usersTabResultMock = [
    {
        ...mockUsers[0],
        posts: [mockPosts[0]]
    },
    {
        ...mockUsers[1],
        posts: [mockPosts[1]]
    },
]

describe('script functions test', () => {
    beforeEach(() => {
        jest.mock('axios');
    })

    it('should get data successfully', async () => {
        const mockData = {data: 'data'}
        axios.get = jest.fn(() => Promise.resolve(mockData));

        expect(await functions.getData('url')).toEqual('data');
    })

    
    it('should correctly set posts to users', async () => {
        axios.get = jest.fn((url) => {
                if (url === 'https://jsonplaceholder.typicode.com/users') {
                    return Promise.resolve({data: mockUsers});
                } else if (url === 'https://jsonplaceholder.typicode.com/posts') {
                    return Promise.resolve({data: mockPosts});
                }
            });

        expect(await functions.setPostsToUsers()).toEqual(usersTabResultMock);
    })
})