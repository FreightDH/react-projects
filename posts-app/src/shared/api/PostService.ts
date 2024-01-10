import axios from 'axios';

class PostService {
  static getAll = async (currentPage: number, cardsPerPage: number) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _page: currentPage,
        _limit: cardsPerPage,
      },
    });
    return res;
  };

  static getById = async (id: number) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res;
  };

  static add = async (userId: number, title: string, body: string) => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      userId,
      title,
      body,
    });

    return res.data;
  };

  static edit = async (id: number, title: string, body: string) => {
    await axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      title,
      body,
    });
  };

  static delete = async (id: number) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  };

  static getCommentsById = async (id: number, currentPage: number, commentsPerPage: number) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
      params: {
        _page: currentPage,
        _limit: commentsPerPage,
      },
    });
    return res;
  };
}

export default PostService;
