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

  static edit = async (postId: number, title: string, body: string) => {
    await axios.patch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      title,
      body,
    });
  };

  static delete = async (postId: number) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  };
}

export default PostService;
