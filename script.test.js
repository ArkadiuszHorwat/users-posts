const { describe, it, expect } = require("@jest/globals");
const axios = require("axios");
const functions = require('./script.js');
const data = require('./test-data.js');

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
        return Promise.resolve({data: data.mockUsers});
      } else if (url === 'https://jsonplaceholder.typicode.com/posts') {
        return Promise.resolve({data: data.mockPosts});
      }
    });

    expect(await functions.setPostsToUsers()).toStrictEqual(data.usersTabResultMock);
  });

  //test count number of posts function
  it('should correctly count number of posts', async () => {
    expect(await functions.countPosts()).toStrictEqual(data.strList);
  });

  //test check uniq titles function
  it('should correctly check uniq titles', async () => {
    expect(await functions.checkUniqTitles()).toBe('Wszystkie tytuły są unikalne.');
  });
  it('should correctly check no uniq titles', async () => {
    axios.get = jest.fn(() => Promise.resolve({data: data.mockNoUniqPosts}));

    expect(await functions.checkUniqTitles()).toStrictEqual(data.resultNoUniq);
  });

  //test count distance functions
  it('should correct convert to radians', () => {
    expect(functions.convertToRad(-6.635)).toStrictEqual(-0.11580259586982376);
  });
  it('should get correct distance', () => {
    expect(functions.getDistance(-37.3159,81.1496,-43.9509,-34.4618)).toStrictEqual(8898.278635448845);
  });

  it('should find closest user', async () => {
    axios.get = jest.fn(() => Promise.resolve({data: data.mockUsers}));
    
    expect(await functions.findClosestUser()).toStrictEqual(data.closestResult);
  });
});