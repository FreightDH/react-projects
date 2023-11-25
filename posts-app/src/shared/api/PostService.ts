import axios from 'axios';

class PostService {
  static getAll = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data;
  };

  static delete = async (postId: number) => {
    await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE',
    });
  };
}

export default PostService;
